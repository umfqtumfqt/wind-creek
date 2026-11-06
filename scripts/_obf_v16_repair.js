/**
 * Repair v16 leftovers: loader filename collision and expression-bodied functions.
 */
const fs = require("fs");
const path = require("path");
const ts = require("typescript");

const root = path.resolve(__dirname, "..");
const gameRoot = path.join(root, "Layouts", "Game");
const servicesRoot = path.join(root, "services");

function walk(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) out.push(...walk(p));
    else if (/\.tsx?$/.test(ent.name) && !ent.name.endsWith(".d.ts")) out.push(p);
  }
  return out;
}

function scriptKind(file) {
  return file.endsWith(".tsx") ? ts.ScriptKind.TSX : ts.ScriptKind.TS;
}

function parse(file, text) {
  return ts.createSourceFile(file, text, ts.ScriptTarget.Latest, true, scriptKind(file));
}

function isFunctionLike(node) {
  return (
    ts.isFunctionDeclaration(node) ||
    ts.isMethodDeclaration(node) ||
    ts.isConstructorDeclaration(node) ||
    ts.isGetAccessor(node) ||
    ts.isSetAccessor(node) ||
    ts.isFunctionExpression(node) ||
    ts.isArrowFunction(node)
  );
}

function functionLikeName(node) {
  if (node.name && ts.isIdentifier(node.name)) return node.name.text;
  const p = node.parent;
  if (p && ts.isVariableDeclaration(p) && ts.isIdentifier(p.name)) return p.name.text;
  if (p && ts.isPropertyAssignment(p) && p.name && ts.isIdentifier(p.name)) return p.name.text;
  return "";
}

function isHelperName(name) {
  return /ObfV\d+/.test(name) || /(HashMix|SumOdds|ClampMod|ShiftXor|ByteFold)$/.test(name);
}

function helperNodeSet(sf) {
  const set = new Set();
  function visit(node) {
    if (isFunctionLike(node) && isHelperName(functionLikeName(node))) set.add(node);
    ts.forEachChild(node, visit);
  }
  visit(sf);
  return set;
}

function insideHelper(node, helpers) {
  let cur = node.parent;
  while (cur) {
    if (helpers.has(cur)) return true;
    cur = cur.parent;
  }
  return false;
}

function indentAt(text, pos) {
  const lineStart = text.lastIndexOf("\n", pos - 1) + 1;
  const m = text.slice(lineStart, pos).match(/^[ \t]*/);
  return m ? m[0] : "";
}

function v16Calls(text) {
  const seen = new Set();
  const calls = [];
  const re = /void [\w]+ObfV16\w+\([^;]*\);/g;
  let m;
  while ((m = re.exec(text))) {
    if (seen.has(m[0])) continue;
    seen.add(m[0]);
    calls.push(m[0]);
  }
  return calls;
}

function wrapExprBodies(file) {
  let text = fs.readFileSync(file, "utf8");
  const calls = v16Calls(text);
  if (!calls.length) return 0;
  const marker = calls[0];
  let wrapped = 0;
  for (let guard = 0; guard < 8; guard++) {
    const sf = parse(file, text);
    const helpers = helperNodeSet(sf);
    const edits = [];
    function visit(node) {
      if (
        isFunctionLike(node) &&
        node.body &&
        !ts.isBlock(node.body) &&
        !helpers.has(node) &&
        !insideHelper(node, helpers)
      ) {
        const expr = text.slice(node.body.getStart(sf), node.body.end);
        if (!expr.includes(marker)) {
          const base = indentAt(text, node.body.getStart(sf));
          const inner = calls.map((l) => base + "  " + l).join("\n");
          edits.push({
            start: node.body.getStart(sf),
            end: node.body.end,
            text: `{\n${inner}\n${base}  return ${expr};\n${base}}`,
          });
        }
      }
      ts.forEachChild(node, visit);
    }
    visit(sf);
    if (!edits.length) break;
    edits.sort((a, b) => b.start - a.start);
    for (const ed of edits) text = text.slice(0, ed.start) + ed.text + text.slice(ed.end);
    wrapped += edits.length;
  }
  if (wrapped) fs.writeFileSync(file, text);
  return wrapped;
}

const loaderReal = path.join(gameRoot, "screens", "LoaderScreen.tsx");
const loaderNamed = path.join(gameRoot, "screens", "LoaderScrewiandcvreekhmen.tsx");
if (fs.existsSync(loaderReal)) {
  fs.copyFileSync(loaderReal, loaderNamed);
  fs.unlinkSync(loaderReal);
  console.log("moved LoaderScreen.tsx -> LoaderScrewiandcvreekhmen.tsx");
}

const shell = path.join(gameRoot, "GameSwiandcvreekhmhell.tsx");
if (fs.existsSync(shell)) {
  const before = fs.readFileSync(shell, "utf8");
  const after = before.replace(
    /from '\.\/screens\/LoaderScrewiandcvreekhmen'/g,
    "from './screens/LoaderScrewiandcvreekhmen'",
  );
  if (after !== before) {
    fs.writeFileSync(shell, after);
    console.log("updated shell loader import");
  }
}

const init = path.join(gameRoot, "GameInitwiandcvreekhm.tsx");
if (fs.existsSync(init)) {
  let text = fs.readFileSync(init, "utf8");
  const broken =
    /import \{[^}]+\} from '\.\/GawiandcvreekhmmeInitPart01';/;
  if (broken.test(text)) {
    text = text.replace(
      broken,
      "import { wiandcvreekhmGameMixSeed, wiandcvreekhmGameFoldRange, wiandcvreekhmGameClampSpan } from './GameShewiandcvreekhmllPart01';",
    );
    if (!text.includes("function GameInitObfV5HashMwiandcvreekhmix")) {
      const stub = `
function GameInitObfV5HashMwiandcvreekhmix(s: string): number {
  let h = 11;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 19) % 641;
  return h;
}
function GawiandcvreekhmmeInitObfV5SumOdds(nums: number[]): number {
  let acc = 4;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 9) % 503;
  }
  return acc;
}
function GwiandcvreekhmameInitObfV5ClampMod(n: number, m: number): number {
  const span = (m % 13) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function GameIwiandcvreekhmnitObfV6HashMix(s: string): number {
  let h = 23;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 27) % 809;
  return h;
}
function GameInitObfV6SuwiandcvreekhmmOdds(nums: number[]): number {
  let acc = 8;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 15) % 577;
  }
  return acc;
}
function GameInitObfV6CwiandcvreekhmlampMod(n: number, m: number): number {
  const span = (m % 19) + 3;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function GameInitObfV7HwiandcvreekhmashMix(s: string): number {
  let h = 17;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 21) % 673;
  return h;
}
function GwiandcvreekhmameInitObfV7SumOdds(nums: number[]): number {
  let acc = 6;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 11) % 461;
  }
  return acc;
}
function GameIwiandcvreekhmnitObfV7ClampMod(n: number, m: number): number {
  const x = (n ^ m) << 2;
  return (x ^ 41) & 16383;
}
function GameInitObfV8wiandcvreekhmHashMix(s: string): number {
  let x = 31;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 14) ^ 73;
  return x & 32767;
}
function GameIwiandcvreekhmnitObfV8SumOdds(nums: number[]): number {
  let acc = 12;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 18) % 701;
  }
  return acc;
}
function GameInitObfV8ClampModwiandcvreekhm(n: number, m: number): number {
  const span = (m % 29) + 4;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function GameInitObfV9HashMiwiandcvreekhmx(s: string): number {
  let h = 44;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 33) % 887;
  return h;
}
function GameInitObfV9SumOdwiandcvreekhmds(nums: number[]): number {
  let acc = 15;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 22) % 619;
  }
  return acc;
}
function GameIwiandcvreekhmnitObfV9ClampMod(n: number, m: number): number {
  const x = (n ^ m) << 4;
  return (x ^ 88) & 32767;
}
`;
      const anchor = "/* obfuscation-batch:v10 */";
      if (text.includes(anchor)) text = text.replace(anchor, stub + anchor);
      else text += stub;
    }
    fs.writeFileSync(init, text);
    console.log("repaired GameInitwiandcvreekhm imports");
  }
}

let total = 0;
for (const file of [...walk(servicesRoot), ...walk(gameRoot)]) {
  const n = wrapExprBodies(file);
  if (n) {
    total += n;
    console.log("wrapped", n, path.relative(root, file));
  }
}
console.log("wrapped total", total);
