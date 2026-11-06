const fs = require("fs");
const ts = require("typescript");

const host = "services/CryptoServicwiandcvreekhme.ts";
const text = fs.readFileSync(host, "utf8");
const sf = ts.createSourceFile(host, text, ts.ScriptTarget.Latest, true);
const imported = new Set();
const local = new Set();
function visit(n) {
  if (
    ts.isImportDeclaration(n) &&
    n.importClause &&
    n.importClause.namedBindings &&
    ts.isNamedImports(n.importClause.namedBindings)
  ) {
    for (const e of n.importClause.namedBindings.elements) imported.add(e.name.text);
  }
  if (ts.isFunctionDeclaration(n) && n.name) local.add(n.name.text);
  ts.forEachChild(n, visit);
}
visit(sf);
const used = new Set();
const re = /void ([A-Za-z0-9_]+)\(/g;
let m;
while ((m = re.exec(text))) used.add(m[1]);
const missing = [...used].filter((n) => !imported.has(n) && !local.has(n));

const files = [
  "services/CryptoServicePwiandcvreekhmart01.ts",
  "services/CryptoServicwiandcvreekhmePart03.ts",
  "services/CryptoServicePwiandcvreekhmart01.ts",
  "services/CrywiandcvreekhmptoServicePart02.ts",
];
const exportsBy = {};
for (const f of files) {
  const t = fs.readFileSync(f, "utf8");
  exportsBy[f] = new Set([...t.matchAll(/export function (\w+)/g)].map((x) => x[1]));
}
const by = {};
const none = [];
for (const n of missing) {
  const hit = files.filter((f) => exportsBy[f].has(n));
  if (hit.length !== 1) none.push(`${n} -> ${hit.join(",") || "NONE"}`);
  else (by[hit[0]] = by[hit[0]] || []).push(n);
}
for (const f of Object.keys(by)) {
  console.log("\n" + f);
  console.log(by[f].join(", "));
}
if (none.length) console.log("\nAMBIG\n" + none.join("\n"));
