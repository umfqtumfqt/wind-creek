/**
 * Finish a services-obfuscation pass:
 * - drop duplicate module-level functions and repeated import specifiers
 * - re-batch files that could not be parsed
 * - insert the project fragment into Layouts/Game bindings and custom style names
 */
const fs = require("node:fs/promises");
const path = require("node:path");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const { transformTypeScript } = require("./_obfBatchVnext");

const ROOT = path.resolve(__dirname, "..", "..");
const FRAG = "wiandcvreekhm";

const RN_STYLE_KEYS = new Set([
  "flex", "flexDirection", "flexGrow", "flexShrink", "flexWrap", "flexBasis",
  "justifyContent", "alignItems", "alignSelf", "alignContent",
  "width", "height", "minWidth", "minHeight", "maxWidth", "maxHeight",
  "margin", "marginTop", "marginBottom", "marginLeft", "marginRight",
  "marginHorizontal", "marginVertical",
  "padding", "paddingTop", "paddingBottom", "paddingLeft", "paddingRight",
  "paddingHorizontal", "paddingVertical",
  "borderWidth", "borderColor", "borderRadius", "backgroundColor", "color",
  "opacity", "transform", "elevation", "position", "top", "left", "right", "bottom",
  "zIndex", "overflow", "display", "fontSize", "fontWeight", "fontFamily",
  "lineHeight", "letterSpacing", "textAlign", "textDecorationLine",
  "shadowColor", "shadowOffset", "shadowOpacity", "shadowRadius",
  "backfaceVisibility", "translateX", "translateY", "scale", "scaleX", "scaleY",
  "rotate", "rotateX", "rotateY", "gap", "rowGap", "columnGap",
  "includeFontPadding", "textShadowColor", "textShadowOffset", "textShadowRadius",
  "borderTopWidth", "borderBottomWidth", "borderLeftWidth", "borderRightWidth",
  "borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius",
  "borderBottomRightRadius", "resizeMode", "tintColor", "fontStyle", "fontVariant",
  "textShadowRadius", "overflow", "aspectRatio", "background",
]);

function midInsert(name) {
  if (!name || name.includes(FRAG)) return name;
  const at = Math.max(1, Math.floor(name.length / 2));
  if (at >= name.length) return `${name}${FRAG}`;
  return `${name.slice(0, at)}${FRAG}${name.slice(at)}`;
}

function skipTrivia(code, i) {
  while (i < code.length) {
    const c = code[i];
    const n = code[i + 1];
    if (c === " " || c === "\t" || c === "\r" || c === "\n") {
      i++;
      continue;
    }
    if (c === "/" && n === "/") {
      const nl = code.indexOf("\n", i);
      i = nl < 0 ? code.length : nl + 1;
      continue;
    }
    if (c === "/" && n === "*") {
      const end = code.indexOf("*/", i + 2);
      i = end < 0 ? code.length : end + 2;
      continue;
    }
    break;
  }
  return i;
}

function skipString(code, i) {
  const q = code[i];
  if (q !== "'" && q !== '"' && q !== "`") return i;
  let j = i + 1;
  while (j < code.length) {
    if (code[j] === "\\") {
      j += 2;
      continue;
    }
    if (q === "`" && code[j] === "$" && code[j + 1] === "{") {
      j += 2;
      let depth = 1;
      while (j < code.length && depth > 0) {
        if (code[j] === "'" || code[j] === '"' || code[j] === "`") {
          j = skipString(code, j);
          continue;
        }
        if (code[j] === "{") depth++;
        else if (code[j] === "}") depth--;
        j++;
      }
      continue;
    }
    if (code[j] === q) return j + 1;
    j++;
  }
  return j;
}

function dedupeImports(source) {
  const re = /import\s+(type\s+)?\{([\s\S]*?)\}\s*from\s*(['"][^'"]+['"])/g;
  const seen = new Set();
  let removed = 0;
  const next = source.replace(re, (full, typeKw, inner, from) => {
    const parts = [];
    let cur = "";
    let depth = 0;
    for (let i = 0; i < inner.length; i++) {
      const c = inner[i];
      if (c === "(" || c === "[" || c === "{" || c === "<") depth++;
      else if (c === ")" || c === "]" || c === "}" || c === ">") depth--;
      else if (c === "," && depth === 0) {
        parts.push(cur);
        cur = "";
        continue;
      }
      cur += c;
    }
    if (cur.trim()) parts.push(cur);
    const kept = [];
    for (const part of parts) {
      const text = part.trim();
      if (!text) continue;
      const asMatch = text.match(/^(?:type\s+)?([A-Za-z_$][\w$]*)\s+as\s+([A-Za-z_$][\w$]*)$/);
      const local = asMatch ? asMatch[2] : (text.match(/^(?:type\s+)?([A-Za-z_$][\w$]*)$/) || [])[1];
      if (!local) {
        kept.push(text);
        continue;
      }
      if (seen.has(local)) {
        removed++;
        continue;
      }
      seen.add(local);
      kept.push(text);
    }
    if (!kept.length) return "";
    return `import ${typeKw || ""}{ ${kept.join(", ")} } from ${from}`;
  });
  return { next, removed };
}

function moduleLevelFunctions(source) {
  const found = [];
  let i = 0;
  let depth = 0;
  while (i < source.length) {
    const c = source[i];
    if (c === "'" || c === '"' || c === "`") {
      i = skipString(source, i);
      continue;
    }
    if (c === "/" && source[i + 1] === "/") {
      const nl = source.indexOf("\n", i);
      i = nl < 0 ? source.length : nl + 1;
      continue;
    }
    if (c === "/" && source[i + 1] === "*") {
      const end = source.indexOf("*/", i + 2);
      i = end < 0 ? source.length : end + 2;
      continue;
    }
    if (c === "{") {
      depth++;
      i++;
      continue;
    }
    if (c === "}") {
      depth = Math.max(0, depth - 1);
      i++;
      continue;
    }
    if (depth === 0 && source.startsWith("function", i)) {
      const prev = i > 0 ? source[i - 1] : " ";
      if (!/[A-Za-z0-9_$]/.test(prev)) {
        let j = skipTrivia(source, i + "function".length);
        if (/[A-Za-z_$]/.test(source[j] || "")) {
          const nameStart = j;
          while (j < source.length && /[A-Za-z0-9_$]/.test(source[j])) j++;
          const name = source.slice(nameStart, j);
          j = skipTrivia(source, j);
          if (source[j] === "(") {
            let paren = 0;
            while (j < source.length) {
              if (source[j] === "'" || source[j] === '"' || source[j] === "`") {
                j = skipString(source, j);
                continue;
              }
              if (source[j] === "(") paren++;
              else if (source[j] === ")") {
                paren--;
                if (paren === 0) {
                  j++;
                  break;
                }
              }
              j++;
            }
            j = skipTrivia(source, j);
            if (source[j] === ":") {
              let angle = 0;
              let paren2 = 0;
              j++;
              while (j < source.length) {
                if (source[j] === "'" || source[j] === '"' || source[j] === "`") {
                  j = skipString(source, j);
                  continue;
                }
                if (source[j] === "<") angle++;
                else if (source[j] === ">") angle = Math.max(0, angle - 1);
                else if (source[j] === "(") paren2++;
                else if (source[j] === ")") paren2--;
                else if (source[j] === "{" && angle === 0 && paren2 === 0) break;
                else if (source[j] === ";" && angle === 0 && paren2 === 0) break;
                j++;
              }
            }
            if (source[j] === "{") {
              const end = matchBrace(source, j);
              if (end > j) {
                let start = i;
                const lead = source.slice(0, i).match(/(?:export\s+(?:default\s+)?)?(?:async\s+)?$/);
                if (lead && lead[0]) start = i - lead[0].length;
                found.push({ name, start, end });
                i = end;
                continue;
              }
            }
          }
        }
      }
    }
    i++;
  }
  return found;
}

function matchBrace(source, openIdx) {
  let depth = 0;
  let i = openIdx;
  while (i < source.length) {
    const c = source[i];
    if (c === "'" || c === '"' || c === "`") {
      i = skipString(source, i);
      continue;
    }
    if (c === "/" && source[i + 1] === "/") {
      const nl = source.indexOf("\n", i);
      i = nl < 0 ? source.length : nl + 1;
      continue;
    }
    if (c === "/" && source[i + 1] === "*") {
      const end = source.indexOf("*/", i + 2);
      i = end < 0 ? source.length : end + 2;
      continue;
    }
    if (c === "{") depth++;
    else if (c === "}") {
      depth--;
      if (depth === 0) return i + 1;
    }
    i++;
  }
  return -1;
}

function dropDuplicateFunctions(source) {
  const fns = moduleLevelFunctions(source);
  const seen = new Set();
  const drops = [];
  for (const fn of fns) {
    if (seen.has(fn.name)) drops.push(fn);
    else seen.add(fn.name);
  }
  drops.sort((a, b) => b.start - a.start);
  let next = source;
  for (const drop of drops) {
    next = next.slice(0, drop.start) + next.slice(drop.end);
  }
  return { next, removed: drops.length };
}

function parseTs(source, filePath) {
  return parser.parse(source, {
    sourceType: "module",
    plugins: ["typescript", "jsx"],
    errorRecovery: false,
  });
}

function applyEdits(source, edits) {
  const sorted = [...edits].sort((a, b) => b.start - a.start || b.end - a.end);
  let next = source;
  let last = next.length;
  for (const edit of sorted) {
    if (edit.end > last) continue;
    if (source.slice(edit.start, edit.end) !== edit.expect) continue;
    next = next.slice(0, edit.start) + edit.text + next.slice(edit.end);
    last = edit.start;
  }
  return next;
}

function bindingShouldRename(binding) {
  const name = binding.identifier && binding.identifier.name;
  if (!name || name.includes(FRAG)) return false;
  if (/ObfV\d+/i.test(name)) return false;
  const p = binding.path;
  if (!p) return false;
  if (
    p.isImportSpecifier() ||
    p.isImportDefaultSpecifier() ||
    p.isImportNamespaceSpecifier()
  ) {
    const src = p.parentPath && p.parentPath.node && p.parentPath.node.source;
    const value = src && src.value;
    if (typeof value === "string" && !value.startsWith(".")) return false;
  }
  return true;
}

function collectRenameEdits(source, ast) {
  const edits = [];
  const seenRanges = new Set();
  const shorthandNodes = new Set();
  const scopes = [];
  const seenScopes = new Set();
  traverse(ast, {
    Scopable(path) {
      if (!seenScopes.has(path.scope)) {
        seenScopes.add(path.scope);
        scopes.push(path.scope);
      }
    },
    ObjectProperty(path) {
      if (path.node.shorthand) {
        shorthandNodes.add(path.node.value);
        shorthandNodes.add(path.node.key);
      }
    },
  });

  for (const scope of scopes) {
    for (const name of Object.keys(scope.bindings)) {
      const binding = scope.getBinding(name);
      if (!binding || binding.scope !== scope) continue;
      if (!bindingShouldRename(binding)) continue;
      const neu = midInsert(name);
      if (!neu || neu === name || scope.hasBinding(neu)) continue;
      const nodes = [binding.identifier];
      for (const ref of binding.referencePaths) nodes.push(ref.node);
      if (binding.path && binding.path.isImportSpecifier()) {
        const imported = binding.path.node.imported;
        if (imported && imported.type === "Identifier" && imported !== binding.identifier && imported.name === name) {
          nodes.push(imported);
        }
      }
      for (const node of nodes) {
        if (node.start == null || node.end == null) continue;
        let start = node.start;
        let end = node.end;
        let raw = source.slice(start, end);
        if (raw !== name) {
          if (raw.startsWith(name) && !/[A-Za-z0-9_$]/.test(raw[name.length] || "")) {
            end = start + name.length;
            raw = name;
          } else {
            continue;
          }
        }
        const key = `${start}:${end}`;
        if (seenRanges.has(key)) continue;
        seenRanges.add(key);
        const shorthand = shorthandNodes.has(node);
        edits.push({
          start,
          end,
          expect: name,
          text: shorthand ? `${name}: ${neu}` : neu,
        });
      }
    }
  }

  traverse(ast, {
    VariableDeclarator(path) {
      const id = path.node.id;
      const init = path.node.init;
      if (!id || id.type !== "Identifier" || !init || init.type !== "CallExpression") return;
      const callee = init.callee;
      const isCreate =
        callee &&
        callee.type === "MemberExpression" &&
        !callee.computed &&
        callee.property &&
        callee.property.type === "Identifier" &&
        callee.property.name === "create" &&
        callee.object &&
        callee.object.type === "Identifier" &&
        callee.object.name === "StyleSheet";
      if (!isCreate) return;
      const arg = init.arguments[0];
      if (!arg || arg.type !== "ObjectExpression") return;
      const binding = path.scope.getBinding(id.name);
      for (const prop of arg.properties) {
        if (prop.type !== "ObjectProperty" || prop.computed) continue;
        if (!prop.key || (prop.key.type !== "Identifier" && prop.key.type !== "StringLiteral")) continue;
        const old = prop.key.type === "Identifier" ? prop.key.name : prop.key.value;
        if (typeof old !== "string" || old.includes(FRAG) || RN_STYLE_KEYS.has(old)) continue;
        const neu = midInsert(old);
        if (!neu || neu === old) continue;
        if (prop.key.type === "Identifier") {
          const raw = source.slice(prop.key.start, prop.key.end);
          if (raw !== old) continue;
          const key = `${prop.key.start}:${prop.key.end}`;
          if (!seenRanges.has(key)) {
            seenRanges.add(key);
            edits.push({ start: prop.key.start, end: prop.key.end, expect: old, text: neu });
          }
        }
        if (!binding) continue;
        for (const ref of binding.referencePaths) {
          const parent = ref.parent;
          if (
            parent &&
            parent.type === "MemberExpression" &&
            parent.object === ref.node &&
            !parent.computed &&
            parent.property &&
            parent.property.type === "Identifier" &&
            parent.property.name === old
          ) {
            const raw = source.slice(parent.property.start, parent.property.end);
            if (raw !== old) continue;
            const key = `${parent.property.start}:${parent.property.end}`;
            if (seenRanges.has(key)) continue;
            seenRanges.add(key);
            edits.push({
              start: parent.property.start,
              end: parent.property.end,
              expect: old,
              text: neu,
            });
          }
        }
      }
    },
    ExportNamedDeclaration(exportPath) {
      if (!exportPath.node.source || typeof exportPath.node.source.value !== "string") return;
      if (!exportPath.node.source.value.startsWith(".")) return;
      for (const spec of exportPath.node.specifiers) {
        if (!spec || spec.type !== "ExportSpecifier") continue;
        for (const slot of [spec.local, spec.exported]) {
          if (!slot || slot.type !== "Identifier") continue;
          if (slot.name === "default" || slot.name.includes(FRAG)) continue;
          const neu = midInsert(slot.name);
          if (!neu || neu === slot.name || slot.start == null) continue;
          const raw = source.slice(slot.start, slot.end);
          if (raw !== slot.name) continue;
          const key = `${slot.start}:${slot.end}`;
          if (seenRanges.has(key)) continue;
          seenRanges.add(key);
          edits.push({ start: slot.start, end: slot.end, expect: slot.name, text: neu });
        }
      }
    },
  });

  return edits;
}

function renameSource(source, filePath) {
  const ast = parseTs(source, filePath);
  const edits = collectRenameEdits(source, ast);
  if (!edits.length) return source;
  const next = applyEdits(source, edits);
  parseTs(next, filePath);
  return next;
}

function selfCheck() {
  const fixture = `
import { View } from 'react-native';
import { COLORS } from './thwiandcvreekhmeme';
export function metersLabel(floors: number): string {
  const label = String(COLORS.bg);
  return label + 'COLORS';
}
function Comp({ best }: { best: number }) {
  const opacity = 1;
  return { opacity, elevation: opacity, best };
}
const styles = StyleSheet.create({
  root: { flex: 1, opacity: 0.5 },
  fill: { width: '100%' },
});
void styles.root;
void styles.fill;
`;
  const ast = parseTs(fixture, "fixture.tsx");
  const edits = collectRenameEdits(fixture, ast);
  const next = applyEdits(fixture, edits);
  if (next.includes("import { View }") === false) throw new Error("View import changed");
  if (!next.includes(`${midInsert("COLORS")}.bg`)) throw new Error("COLORS.bg not updated\n" + next);
  if (!next.includes("'COLORS'")) throw new Error("string literal changed\n" + next);
  if (!next.includes("best:")) throw new Error("prop key dropped\n" + next);
  if (!next.includes("{ best:")) throw new Error("destructure key dropped\n" + next);
  if (!next.includes("opacity:")) throw new Error("shorthand opacity key dropped\n" + next);
  if (!next.includes("elevation:")) throw new Error("elevation key changed\n" + next);
  if (next.includes(".root")) throw new Error("style key root remained\n" + next);
  if (!next.includes(`.${midInsert("root")}`)) throw new Error("root key missing\n" + next);
  if (!next.includes("flex:")) throw new Error("flex style key changed\n" + next);
  if (!next.includes(midInsert("metersLabel"))) throw new Error("fn not renamed");
  if (!next.includes(midInsert("floors"))) throw new Error("param not renamed");
  parseTs(next, "fixture.tsx");
}

async function walk(dir, acc) {
  let entries;
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const entry of entries) {
    if (entry.name === "node_modules" || entry.name === "build") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(full, acc);
    else acc.push(full);
  }
}

function collectMissedAssignments(source, ast) {
  const edits = [];
  const seen = new Set();
  traverse(ast, {
    Identifier(path) {
      const name = path.node.name;
      if (!name || name.includes(FRAG)) return;
      const parent = path.parent;
      if (parent.type === "MemberExpression" && parent.property === path.node && !parent.computed) return;
      if (parent.type === "ObjectProperty" && parent.key === path.node && !parent.computed && !parent.shorthand) return;
      if (parent.type === "ObjectProperty" && parent.shorthand && parent.key === path.node && parent.value !== path.node) return;
      if (
        (parent.type === "ImportSpecifier" || parent.type === "ImportDefaultSpecifier" || parent.type === "ImportNamespaceSpecifier") &&
        parent.local === path.node
      ) {
        return;
      }
      if (path.scope.hasBinding(name)) return;
      const neu = midInsert(name);
      if (!path.scope.hasBinding(neu)) return;
      const start = path.node.start;
      const end = start + name.length;
      if (source.slice(start, end) !== name) return;
      const key = `${start}:${end}`;
      if (seen.has(key)) return;
      seen.add(key);
      edits.push({ start, end, expect: name, text: neu });
    },
  });
  return edits;
}

async function repairMissedAssignments() {
  const game = [];
  await walk(path.join(ROOT, "Layouts", "Game"), game);
  let files = 0;
  let count = 0;
  for (const file of game) {
    if (!/\.(ts|tsx)$/.test(file)) continue;
    const source = await fs.readFile(file, "utf8");
    const ast = parseTs(source, file);
    const edits = collectMissedAssignments(source, ast);
    if (!edits.length) continue;
    const next = applyEdits(source, edits);
    parseTs(next, file);
    await fs.writeFile(file, next, "utf8");
    files++;
    count += edits.length;
  }
  console.log(`repaired missed assignments ${count} in ${files} file(s)`);
}

async function scanIssues() {
  const nodePath = path;
  const files = [];
  await walk(nodePath.join(ROOT, "services"), files);
  await walk(nodePath.join(ROOT, "Layouts", "Game"), files);
  const parseFails = [];
  const voidInHelper = [];
  const uiHits = [];
  for (const file of files) {
    if (!/\.(ts|tsx)$/.test(file)) continue;
    const source = await fs.readFile(file, "utf8");
    let ast;
    try {
      ast = parseTs(source, file);
    } catch (error) {
      parseFails.push(`${nodePath.relative(ROOT, file)}: ${error.message.split("\n")[0]}`);
      continue;
    }
    if (!file.includes(`${nodePath.sep}Layouts${nodePath.sep}Game${nodePath.sep}`)) {
      traverse(ast, {
        Function(fnPath) {
          const id = fnPath.node.id && fnPath.node.id.name;
          if (!id || !(/ObfV\d+/i.test(id) || /Game(?:MixSeed|FoldRange|ClampSpan)$/.test(id))) return;
          const body = fnPath.node.body;
          if (!body || body.type !== "BlockStatement") return;
          for (const stmt of body.body) {
            if (
              stmt.type === "ExpressionStatement" &&
              stmt.expression.type === "UnaryExpression" &&
              stmt.expression.operator === "void"
            ) {
              voidInHelper.push(`${nodePath.relative(ROOT, file)} ${id}`);
              break;
            }
          }
        },
      });
      continue;
    }
    traverse(ast, {
      Function(fnPath) {
        const id = fnPath.node.id && fnPath.node.id.name;
        if (!id || !(/ObfV\d+/i.test(id) || /Game(?:MixSeed|FoldRange|ClampSpan)$/.test(id))) return;
        const body = fnPath.node.body;
        if (!body || body.type !== "BlockStatement") return;
        for (const stmt of body.body) {
          if (
            stmt.type === "ExpressionStatement" &&
            stmt.expression.type === "UnaryExpression" &&
            stmt.expression.operator === "void"
          ) {
            voidInHelper.push(`${nodePath.relative(ROOT, file)} ${id}`);
            break;
          }
        }
      },
      StringLiteral(fnPath) {
        if (typeof fnPath.node.value === "string" && fnPath.node.value.includes(FRAG)) {
          uiHits.push(`${nodePath.relative(ROOT, file)} STR ${JSON.stringify(fnPath.node.value).slice(0, 100)}`);
        }
      },
      TemplateElement(fnPath) {
        const raw = (fnPath.node.value && fnPath.node.value.cooked) || "";
        if (raw.includes(FRAG)) uiHits.push(`${nodePath.relative(ROOT, file)} TPL ${JSON.stringify(raw).slice(0, 100)}`);
      },
      JSXText(fnPath) {
        if (fnPath.node.value && fnPath.node.value.includes(FRAG)) {
          uiHits.push(`${nodePath.relative(ROOT, file)} JSX ${JSON.stringify(fnPath.node.value).slice(0, 100)}`);
        }
      },
    });
  }
  console.log(`parsed ${files.filter((f) => /\.(ts|tsx)$/.test(f)).length}`);
  console.log(`parseFails ${parseFails.length}`);
  console.log(parseFails.slice(0, 20).join("\n"));
  console.log(`voidInHelper ${voidInHelper.length}`);
  console.log(voidInHelper.slice(0, 20).join("\n"));
  console.log(`uiHits ${uiHits.length}`);
  console.log(uiHits.slice(0, 40).join("\n"));
}

async function renameGameIdentifiers() {
  const game = [];
  await walk(path.join(ROOT, "Layouts", "Game"), game);
  let renamed = 0;
  const renameFail = [];
  for (const file of game) {
    if (!/\.(ts|tsx)$/.test(file)) continue;
    const source = await fs.readFile(file, "utf8");
    try {
      const next = renameSource(source, file);
      if (next !== source) {
        await fs.writeFile(file, next, "utf8");
        renamed++;
      }
    } catch (error) {
      renameFail.push(`${path.relative(ROOT, file)}: ${error.message}`);
    }
  }
  await repairMissedAssignments();
  console.log(`renamed files ${renamed}`);
  if (renameFail.length) console.log(renameFail.slice(0, 30).join("\n"));
  return renameFail;
}

async function main() {
  if (process.argv[2] === "--repair-assign") {
    await repairMissedAssignments();
    return;
  }
  if (process.argv[2] === "--scan") {
    await scanIssues();
    return;
  }
  if (process.argv[2] === "--rename-only") {
    selfCheck();
    console.log("self-check ok");
    await renameGameIdentifiers();
    return;
  }
  selfCheck();
  console.log("self-check ok");

  const files = [];
  await walk(path.join(ROOT, "services"), files);
  await walk(path.join(ROOT, "Layouts", "Game"), files);
  let importDrops = 0;
  let fnDrops = 0;
  const rebatch = [];
  for (const file of files) {
    if (!/\.(ts|tsx)$/.test(file)) continue;
    let source = await fs.readFile(file, "utf8");
    const imp = dedupeImports(source);
    const fn = dropDuplicateFunctions(imp.next);
    if (imp.removed || fn.removed) {
      source = fn.next;
      await fs.writeFile(file, source, "utf8");
      importDrops += imp.removed;
      fnDrops += fn.removed;
    }
    try {
      parseTs(source, file);
    } catch (error) {
      rebatch.push(`${path.relative(ROOT, file)}: ${error.message}`);
    }
  }
  console.log(`deduped imports ${importDrops}, functions ${fnDrops}`);

  const failedBefore = [
    path.join(ROOT, "services", "GatePwiandcvreekhmipeline.ts"),
    path.join(ROOT, "services", "OfferwiandcvreekhmResolve.ts"),
    path.join(ROOT, "services", "OwiandcvreekhmfferResolvePart01.ts"),
  ];
  const batchNotes = [];
  for (const file of failedBefore) {
    const source = await fs.readFile(file, "utf8");
    try {
      parseTs(source, file);
      const next = transformTypeScript(source, file);
      await fs.writeFile(file, next, "utf8");
      batchNotes.push(`rebatched ${path.relative(ROOT, file)}`);
    } catch (error) {
      batchNotes.push(`still broken ${path.relative(ROOT, file)}: ${error.message}`);
    }
  }
  console.log(batchNotes.join("\n"));

  const game = [];
  await walk(path.join(ROOT, "Layouts", "Game"), game);
  let renamed = 0;
  const renameFail = [];
  for (const file of game) {
    if (!/\.(ts|tsx)$/.test(file)) continue;
    const source = await fs.readFile(file, "utf8");
    try {
      const next = renameSource(source, file);
      if (next !== source) {
        await fs.writeFile(file, next, "utf8");
        renamed++;
      }
    } catch (error) {
      renameFail.push(`${path.relative(ROOT, file)}: ${error.message}`);
    }
  }
  await repairMissedAssignments();
  console.log(`renamed files ${renamed}`);
  if (renameFail.length) console.log(renameFail.slice(0, 20).join("\n"));
  if (rebatch.length) console.log("unparsed after dedupe", rebatch.slice(0, 10).join("\n"));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
