/**
 * Repairs fragment-named identifiers that are USED but not BOUND in a JS/TS file
 * — the class of break that `@babel/parser` and a path check both pass but that
 * throws at runtime as `ReferenceError: Property '<frag>…' doesn't exist`
 * ("Runtime not ready"). Two causes, two fixes:
 *
 *   1. A call whose fragment-stripped stem matches a binding (import or local
 *      definition) but whose exact spelling drifted (the fragment sits at a
 *      different offset) — reshuffle/obfuscation drift. Rewrite the call to the
 *      bound spelling. This fixes cipher calls (colossus{frag}EncryptHex vs the
 *      imported co{frag}lossusEncryptHex) and any drifted helper whose definition
 *      still exists.
 *   2. A `void helper(...)` obfuscation sink whose callee resolves to nothing at
 *      all (no binding, no stem match) — the definition was renamed under a
 *      different slug. The call is a no-op, so the statement is removed.
 *
 * Anything else (a non-void undefined call with no stem match) is reported, not
 * touched, so a real missing function surfaces instead of being hidden.
 */
const fs = require("node:fs/promises");
const path = require("node:path");
const { safeStat } = require("./fsUtils");

const SKIP_DIR = new Set(["node_modules", ".git", "build", ".gradle", "Pods"]);

function requireParser(rootPath) {
  return require(require.resolve("@babel/parser", { paths: [rootPath, __dirname] }));
}

function stripFragment(name, fragment) {
  return fragment ? String(name).split(fragment).join("") : String(name);
}

function visit(node, cb) {
  if (!node || typeof node !== "object") return;
  if (node.type) cb(node);
  for (const key of Object.keys(node)) {
    if (
      key === "loc" ||
      key === "range" ||
      key === "leadingComments" ||
      key === "trailingComments" ||
      key === "innerComments"
    ) {
      continue;
    }
    const value = node[key];
    if (Array.isArray(value)) {
      for (const item of value) if (item && typeof item.type === "string") visit(item, cb);
    } else if (value && typeof value.type === "string") {
      visit(value, cb);
    }
  }
}

// Exact binding names introduced by a pattern (Identifier / Object / Array /
// default / rest), ignoring type annotations and default-value expressions — so
// `const x: WalletState = …` binds only `x`, never the type `WalletState`.
function bindingNames(node, out = []) {
  if (!node || typeof node !== "object") return out;
  switch (node.type) {
    case "Identifier":
      out.push(node.name);
      break;
    case "ObjectPattern":
      for (const p of node.properties || []) {
        if (p.type === "ObjectProperty") bindingNames(p.value, out);
        else if (p.type === "RestElement") bindingNames(p.argument, out);
      }
      break;
    case "ArrayPattern":
      for (const el of node.elements || []) if (el) bindingNames(el, out);
      break;
    case "AssignmentPattern":
      bindingNames(node.left, out);
      break;
    case "RestElement":
      bindingNames(node.argument, out);
      break;
    default:
      break;
  }
  return out;
}

const RESOLVE_EXT = ["", ".ts", ".tsx", ".js", ".jsx"];

function resolveRel(fromFile, rel) {
  const fsSync = require("node:fs");
  const base = path.resolve(path.dirname(fromFile), rel);
  const candidates = [
    ...RESOLVE_EXT.map((e) => base + e),
    path.join(base, "index.ts"),
    path.join(base, "index.tsx"),
    path.join(base, "index.js"),
  ];
  for (const c of candidates) {
    try {
      if (fsSync.statSync(c).isFile()) return c;
    } catch {
      /* not this one */
    }
  }
  return null;
}

function collectExports(ast) {
  const named = new Set();
  let hasDefault = false;
  visit(ast, (n) => {
    if (n.type === "ExportDefaultDeclaration") hasDefault = true;
    if (n.type === "ExportNamedDeclaration") {
      if (n.declaration) {
        const d = n.declaration;
        if (
          (d.type === "FunctionDeclaration" ||
            d.type === "ClassDeclaration" ||
            d.type === "TSInterfaceDeclaration" ||
            d.type === "TSTypeAliasDeclaration" ||
            d.type === "TSEnumDeclaration" ||
            d.type === "TSModuleDeclaration") &&
          d.id
        ) {
          named.add(d.id.name);
        } else if (d.type === "VariableDeclaration") {
          for (const decl of d.declarations) {
            if (decl.id && decl.id.type === "Identifier") named.add(decl.id.name);
          }
        }
      }
      for (const spec of n.specifiers || []) {
        if (spec.exported) {
          if (spec.exported.name === "default") hasDefault = true;
          else named.add(spec.exported.name);
        }
      }
    }
  });
  return { named, hasDefault };
}

// Accepted prop names for every component in a file, so a drifted JSX attribute
// name (fragment at the wrong offset, e.g. `o{frag}nDone` vs the component's
// `onDone`) can be realigned instead of silently passing `undefined`.
// Returns Map<key, Set<propName>> where key is the component's local name and,
// when it is the default export, also the literal "default".
function propsFromParam(param, interfaces) {
  const props = new Set();
  if (!param) return props;
  if (param.type === "ObjectPattern") {
    for (const p of param.properties) {
      if (p.type === "ObjectProperty" && p.key) {
        props.add(p.key.name || p.key.value);
      } else if (p.type === "RestElement") {
        // spread — unknown extra props; leave as is
      }
    }
  }
  // typed param: ({...}: Props) or (props: Props)
  const ta = param.typeAnnotation && param.typeAnnotation.typeAnnotation;
  if (ta && ta.type === "TSTypeReference" && ta.typeName && ta.typeName.type === "Identifier") {
    const members = interfaces.get(ta.typeName.name);
    if (members) for (const m of members) props.add(m);
  }
  return props;
}

function collectComponentProps(ast) {
  // interface/type Props members
  const interfaces = new Map();
  visit(ast, (n) => {
    if (n.type === "TSInterfaceDeclaration" && n.id && n.body) {
      const set = new Set();
      for (const m of n.body.body || []) {
        if (m.key && (m.key.name || m.key.value)) set.add(m.key.name || m.key.value);
      }
      interfaces.set(n.id.name, set);
    }
    if (
      n.type === "TSTypeAliasDeclaration" &&
      n.id &&
      n.typeAnnotation &&
      n.typeAnnotation.type === "TSTypeLiteral"
    ) {
      const set = new Set();
      for (const m of n.typeAnnotation.members || []) {
        if (m.key && (m.key.name || m.key.value)) set.add(m.key.name || m.key.value);
      }
      interfaces.set(n.id.name, set);
    }
  });

  const map = new Map();
  const addComp = (name, param, isDefault) => {
    if (!param) return;
    const props = propsFromParam(param, interfaces);
    if (props.size === 0) return;
    if (name) map.set(name, props);
    if (isDefault) map.set("default", props);
  };
  visit(ast, (n) => {
    if (n.type === "FunctionDeclaration" && n.id && n.params && n.params[0]) {
      addComp(n.id.name, n.params[0], false);
    }
    if (n.type === "ExportDefaultDeclaration" && n.declaration) {
      const d = n.declaration;
      if (d.type === "FunctionDeclaration" && d.params && d.params[0]) {
        addComp(d.id ? d.id.name : null, d.params[0], true);
      }
    }
    if (n.type === "VariableDeclarator" && n.id && n.id.type === "Identifier" && n.init) {
      const init = n.init;
      if (
        (init.type === "ArrowFunctionExpression" || init.type === "FunctionExpression") &&
        init.params &&
        init.params[0]
      ) {
        addComp(n.id.name, init.params[0], false);
      }
    }
  });
  // mark default when `export default Name`
  visit(ast, (n) => {
    if (
      n.type === "ExportDefaultDeclaration" &&
      n.declaration &&
      n.declaration.type === "Identifier" &&
      map.has(n.declaration.name)
    ) {
      map.set("default", map.get(n.declaration.name));
    }
  });
  return map;
}

/**
 * @param {object} ast
 * @param {string} filePath
 * @param {Map<string,Set<string>>} exportMap  resolved file path -> exported names
 */
function collectBound(ast, filePath, exportMap) {
  const bound = new Set();
  visit(ast, (n) => {
    if (n.type === "ImportDeclaration") {
      const src = n.source && n.source.value;
      const resolved =
        typeof src === "string" && src.startsWith(".") ? resolveRel(filePath, src) : null;
      const exportedByLocal = resolved && exportMap ? exportMap.get(resolved) : null;
      for (const spec of n.specifiers || []) {
        if (!spec.local) continue;
        const localName = spec.local.name;
        const importedName =
          spec.type === "ImportSpecifier" && spec.imported ? spec.imported.name : localName;
        // A named import from a LOCAL file that does not export it is dangling
        // (it resolves to undefined at runtime). Treat it as unbound so its no-op
        // void calls get removed. Default/namespace imports and imports from a
        // non-local / unresolved source are always treated as bound.
        if (
          exportedByLocal &&
          spec.type === "ImportSpecifier" &&
          !exportedByLocal.named.has(importedName)
        ) {
          continue;
        }
        bound.add(localName);
      }
      return;
    }
    if (n.type === "FunctionDeclaration" && n.id) bound.add(n.id.name);
    if (n.type === "ClassDeclaration" && n.id) bound.add(n.id.name);
    if (n.type === "VariableDeclarator" && n.id) {
      for (const nm of bindingNames(n.id)) bound.add(nm);
    }
    if (n.type === "CatchClause" && n.param) {
      for (const nm of bindingNames(n.param)) bound.add(nm);
    }
    if (
      (n.type === "FunctionDeclaration" ||
        n.type === "FunctionExpression" ||
        n.type === "ArrowFunctionExpression" ||
        n.type === "ClassMethod" ||
        n.type === "ObjectMethod") &&
      Array.isArray(n.params)
    ) {
      for (const param of n.params) for (const nm of bindingNames(param)) bound.add(nm);
    }
  });
  return bound;
}

/**
 * @returns {{ content: string, realigned: number, removed: number, unresolved: string[] }}
 */
function repairFileRefs(source, { filePath, fragment, exportMap, propsMap, reverseExports }) {
  if (!fragment || !source.includes(fragment)) {
    return { content: source, realigned: 0, removed: 0, unresolved: [] };
  }
  const parser = requireParser(path.dirname(filePath));
  const ast = parser.parse(source, { sourceType: "module", plugins: ["typescript", "jsx"] });

  const bound = collectBound(ast, filePath, exportMap);
  const stemMap = new Map(); // stem -> bound name (that contains the fragment)
  for (const name of bound) {
    if (!name.includes(fragment)) continue;
    const stem = stripFragment(name, fragment);
    if (stem && !stemMap.has(stem)) stemMap.set(stem, name);
  }

  const realign = []; // { start, end, text }
  const removeRanges = []; // [start, end)
  const unresolved = [];
  let importDedup = 0;
  let importKindFixed = 0;

  // Local declarations in this file (function/class/var, incl. destructuring).
  const localDecls = new Set();
  visit(ast, (n) => {
    if (n.type === "FunctionDeclaration" && n.id) localDecls.add(n.id.name);
    if (n.type === "ClassDeclaration" && n.id) localDecls.add(n.id.name);
    if (n.type === "VariableDeclarator" && n.id) {
      for (const nm of bindingNames(n.id)) localDecls.add(nm);
    }
  });

  // Rewrite each local import to fix three breaks that Metro/runtime reject:
  //  - dedup: a name both imported and locally declared ("Duplicate declaration");
  //  - default→named: `import X from './M'` where M has no default export but a
  //    named export === X ("Element type is invalid: got undefined");
  //  - named→default: `import { X } from './M'` where M has only a default export.
  // Produces one replacement (or removal) per changed import declaration.
  const specTextOf = (s) =>
    s.type === "ImportDefaultSpecifier"
      ? s.local.name
      : s.type === "ImportNamespaceSpecifier"
        ? `* as ${s.local.name}`
        : s.imported && s.imported.name !== s.local.name
          ? `${s.imported.name} as ${s.local.name}`
          : s.local.name;

  visit(ast, (n) => {
    if (n.type !== "ImportDeclaration" || !Array.isArray(n.specifiers)) return;
    const src = n.source && n.source.value;
    const resolved =
      typeof src === "string" && src.startsWith(".") ? resolveRel(filePath, src) : null;
    const exp = resolved && exportMap ? exportMap.get(resolved) : null;

    let defaultParts = []; // rendered strings for default/namespace specifiers
    let namedParts = []; // rendered strings for named specifiers
    let changed = false;

    for (const s of n.specifiers) {
      if (s.type === "ImportSpecifier") {
        // dedup: drop a named import that is also declared locally
        if (s.local && localDecls.has(s.local.name)) {
          importDedup += 1;
          changed = true;
          continue;
        }
        // Note: deliberately NOT converting named→default. A named import that a
        // local file does not export (but the file has a default) is usually a
        // type-only or re-exported name, and converting it to a default import is
        // unsafe. The dangling-named case is handled by void-removal / left for
        // the runtime pass; only the safe default→named direction is auto-fixed.
        namedParts.push(specTextOf(s));
      } else if (s.type === "ImportDefaultSpecifier") {
        // default→named: source has no default but a named export === local name
        if (exp && !exp.hasDefault && exp.named.has(s.local.name)) {
          namedParts.push(s.local.name);
          importKindFixed += 1;
          changed = true;
          continue;
        }
        defaultParts.push(specTextOf(s));
      } else {
        defaultParts.push(specTextOf(s)); // namespace
      }
    }

    if (!changed) return;
    if (defaultParts.length === 0 && namedParts.length === 0) {
      let end = n.end;
      while (end < source.length && (source[end] === "\r" || source[end] === "\n")) end += 1;
      removeRanges.push([n.start, end]);
      return;
    }
    const namedClause = namedParts.length ? `{ ${namedParts.join(", ")} }` : "";
    const clause = [...defaultParts, namedClause].filter(Boolean).join(", ");
    realign.push({ start: n.start, end: n.end, text: `import ${clause} from '${src}';` });
  });

  // JSX prop-name drift: an attribute whose fragment-stripped name matches a prop
  // the component accepts, but whose exact spelling differs, is passed as the
  // wrong key → the component sees `undefined` (e.g. onDone → not a function).
  // Resolve each JSX element's component and realign such attribute names.
  let propFixed = 0;
  if (propsMap) {
    const localProps = propsMap.get(filePath) || new Map();
    // tag name -> accepted-prop Set (resolved via import or local component)
    const importTag = new Map(); // local name -> { resolved, kind }
    visit(ast, (n) => {
      if (n.type !== "ImportDeclaration") return;
      const src = n.source && n.source.value;
      const resolved =
        typeof src === "string" && src.startsWith(".") ? resolveRel(filePath, src) : null;
      if (!resolved) return;
      for (const s of n.specifiers || []) {
        if (!s.local) continue;
        if (s.type === "ImportDefaultSpecifier") {
          importTag.set(s.local.name, { resolved, key: "default" });
        } else if (s.type === "ImportSpecifier") {
          importTag.set(s.local.name, { resolved, key: s.imported ? s.imported.name : s.local.name });
        }
      }
    });
    const propsForTag = (tag) => {
      if (localProps.has(tag)) return localProps.get(tag);
      const imp = importTag.get(tag);
      if (imp) {
        const m = propsMap.get(imp.resolved);
        if (m && m.has(imp.key)) return m.get(imp.key);
      }
      return null;
    };
    visit(ast, (n) => {
      if (n.type !== "JSXOpeningElement" || !n.name || n.name.type !== "JSXIdentifier") return;
      const props = propsForTag(n.name.name);
      if (!props || props.size === 0) return;
      const stemToProp = new Map();
      for (const p of props) stemToProp.set(stripFragment(p, fragment), p);
      for (const attr of n.attributes || []) {
        if (attr.type !== "JSXAttribute" || !attr.name || attr.name.type !== "JSXIdentifier") {
          continue;
        }
        const an = attr.name.name;
        if (!an.includes(fragment) || props.has(an)) continue;
        const target = stemToProp.get(stripFragment(an, fragment));
        if (target && target !== an) {
          realign.push({ start: attr.name.start, end: attr.name.end, text: target });
          propFixed += 1;
        }
      }
    });
  }

  // void helper(...) statement whose callee is a fragment identifier.
  const voidCallees = new Map(); // callee node -> ExpressionStatement node
  visit(ast, (n) => {
    if (
      n.type === "ExpressionStatement" &&
      n.expression &&
      n.expression.type === "UnaryExpression" &&
      n.expression.operator === "void" &&
      n.expression.argument &&
      n.expression.argument.type === "CallExpression" &&
      n.expression.argument.callee &&
      n.expression.argument.callee.type === "Identifier"
    ) {
      voidCallees.set(n.expression.argument.callee, n);
    }
  });

  const missingImports = new Map(); // resolvedSourceFile -> Set<name>
  visit(ast, (n) => {
    if (n.type !== "CallExpression" || !n.callee || n.callee.type !== "Identifier") return;
    const name = n.callee.name;
    if (bound.has(name)) return;

    if (name.includes(fragment)) {
      const target = stemMap.get(stripFragment(name, fragment));
      if (target) {
        realign.push({ start: n.callee.start, end: n.callee.end, text: target });
        return;
      }
    }

    // Auto-import: the symbol is a UNIQUE named export of another project module
    // but is not imported/defined here (e.g. `readWallet()` used without its
    // import). Works for fragment and non-fragment names alike.
    if (reverseExports) {
      const owners = reverseExports.get(name);
      if (owners && owners.size === 1) {
        const owner = [...owners][0];
        if (owner !== filePath) {
          if (!missingImports.has(owner)) missingImports.set(owner, new Set());
          missingImports.get(owner).add(name);
          return;
        }
      }
    }

    if (!name.includes(fragment)) return; // leave unknown non-project globals alone

    const stmt = voidCallees.get(n.callee);
    if (stmt) {
      let end = stmt.end;
      // swallow a trailing newline so we don't leave blank lines
      while (end < source.length && (source[end] === "\r" || source[end] === "\n")) end += 1;
      removeRanges.push([stmt.start, end]);
      return;
    }
    unresolved.push(name);
  });

  // Build insert edits for auto-imports (one new import line per source module,
  // placed after the last existing import so it does not overlap other edits).
  let autoImported = 0;
  if (missingImports.size) {
    let insertAt = 0;
    visit(ast, (n) => {
      if (n.type === "ImportDeclaration" && n.end > insertAt) insertAt = n.end;
    });
    const lines = [];
    for (const [owner, names] of missingImports) {
      let rel = path
        .relative(path.dirname(filePath), owner)
        .replace(/\\/g, "/")
        .replace(/\.(ts|tsx|js|jsx)$/, "");
      if (!rel.startsWith(".")) rel = `./${rel}`;
      lines.push(`import { ${[...names].join(", ")} } from '${rel}';`);
      autoImported += names.size;
    }
    const nl = source.includes("\r\n") ? "\r\n" : "\n";
    const block = (insertAt > 0 ? nl : "") + lines.join(nl) + (insertAt === 0 ? nl : "");
    realign.push({ start: insertAt, end: insertAt, text: block });
  }

  // Apply edits high → low so offsets stay valid. Removals and realigns don't overlap
  // (a removed void statement's callee is not also realigned).
  const edits = [
    ...realign.map((r) => ({ kind: "replace", start: r.start, end: r.end, text: r.text })),
    ...removeRanges.map(([start, end]) => ({ kind: "remove", start, end, text: "" })),
  ].sort((a, b) => b.start - a.start);

  let content = source;
  for (const e of edits) {
    content = content.slice(0, e.start) + e.text + content.slice(e.end);
  }

  // Validate; if the edit broke parsing, keep the original (safety).
  try {
    parser.parse(content, { sourceType: "module", plugins: ["typescript", "jsx"] });
  } catch {
    return { content: source, realigned: 0, removed: 0, unresolved };
  }

  return {
    content,
    realigned: realign.length,
    removed: removeRanges.length,
    importDedup,
    importKindFixed,
    propFixed,
    autoImported,
    unresolved,
  };
}

async function walkTs(dir, out = []) {
  if (!(await safeStat(dir))) return out;
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (SKIP_DIR.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) await walkTs(full, out);
    else if (/\.(ts|tsx)$/.test(entry.name) && !entry.name.endsWith(".d.ts")) out.push(full);
  }
  return out;
}

/**
 * Repair every services/ and Layouts/Game/ file in place.
 * @param {string} rootPath
 * @param {{ fragment: string }} options
 */
async function repairProjectJsRefs(rootPath, { fragment } = {}) {
  const targets = [path.join(rootPath, "services"), path.join(rootPath, "Layouts", "Game")];
  const files = [];
  for (const t of targets) await walkTs(t, files);
  // Root entry files are part of the init import chain — a top-level undefined
  // reference here fails the whole module load ("… has not been registered").
  for (const entry of ["App.tsx", "App.jsx", "App.js", "index.js", "index.ts"]) {
    const full = path.join(rootPath, entry);
    if (await safeStat(full)) files.push(full);
  }

  // Project-wide export map so imports can be validated against the file they
  // name: a named import from a local file that does not export it is dangling.
  const exportMap = new Map();
  const propsMap = new Map();
  for (const file of files) {
    try {
      const parser = requireParser(path.dirname(file));
      const ast = parser.parse(await fs.readFile(file, "utf8"), {
        sourceType: "module",
        plugins: ["typescript", "jsx"],
      });
      exportMap.set(file, collectExports(ast));
      propsMap.set(file, collectComponentProps(ast));
    } catch {
      exportMap.set(file, { named: new Set(), hasDefault: false });
      propsMap.set(file, new Map());
    }
  }

  // name -> files that export it (named). Used for auto-importing a symbol that
  // is called but not imported, only when exactly one module provides it.
  const reverseExports = new Map();
  for (const [file, info] of exportMap) {
    for (const name of info.named) {
      if (!reverseExports.has(name)) reverseExports.set(name, new Set());
      reverseExports.get(name).add(file);
    }
  }

  let realigned = 0;
  let removed = 0;
  let importDedup = 0;
  let importKindFixed = 0;
  let propFixed = 0;
  let autoImported = 0;
  let touched = 0;
  const unresolved = [];
  const parseFails = [];
  for (const file of files) {
    const source = await fs.readFile(file, "utf8");
    let result;
    try {
      result = repairFileRefs(source, {
        filePath: file,
        fragment,
        exportMap,
        propsMap,
        reverseExports,
      });
    } catch (error) {
      parseFails.push(`${path.relative(rootPath, file)}: ${error.message.split("\n")[0]}`);
      continue;
    }
    if (result.content !== source) {
      await fs.writeFile(file, result.content, "utf8");
      touched += 1;
    }
    realigned += result.realigned;
    removed += result.removed;
    importDedup += result.importDedup || 0;
    importKindFixed += result.importKindFixed || 0;
    propFixed += result.propFixed || 0;
    autoImported += result.autoImported || 0;
    for (const name of result.unresolved) {
      unresolved.push(`${path.relative(rootPath, file)} -> ${name}`);
    }
  }

  const ok = unresolved.length === 0 && parseFails.length === 0;
  return {
    ok,
    realigned,
    removed,
    touched,
    importDedup,
    importKindFixed,
    propFixed,
    autoImported,
    unresolved,
    parseFails,
    details:
      `js-refs: realigned ${realigned}, removed ${removed} noop, import-dedup ${importDedup}, import-kind ${importKindFixed}, prop-drift ${propFixed}, auto-import ${autoImported} in ${touched} file(s)` +
      (unresolved.length ? `; UNRESOLVED ${unresolved.length}` : "") +
      (parseFails.length ? `; parse-fail ${parseFails.length}` : ""),
  };
}

module.exports = { repairProjectJsRefs, repairFileRefs };
