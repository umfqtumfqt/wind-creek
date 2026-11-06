const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;

const FRAG = "wiandcvreekhm";
const source = `
import { COLORS } from './thwiandcvreekhmeme';
export function metersLabel(floors: number): string {
  const m = floors;
  return String(COLORS.bg);
}
export const neonShadow = (color: string, radius = 16, opacity = 0.5) => {
  return { elevation: 1, opacity };
};
function Comp({ best }: { best: number }) {
  return best;
}
const styles = { root: true };
void styles.root;
`;

const ast = parser.parse(source, { sourceType: "module", plugins: ["typescript", "jsx"] });
const scope = ast.program.body[1] && null;
traverse(ast, {
  Program(path) {
    for (const name of Object.keys(path.scope.bindings)) {
      if (name === "opacity" || name === "m") continue;
      const next = name.slice(0, 1) + FRAG + name.slice(1);
      path.scope.rename(name, next);
    }
  },
});
const edits = [];
traverse(ast, {
  Identifier(path) {
    const n = path.node;
    const raw = source.slice(n.start, n.end);
    if (raw !== n.name) edits.push(`${raw} -> ${n.name} @${n.start}`);
  },
  JSXIdentifier(path) {
    const n = path.node;
    const raw = source.slice(n.start, n.end);
    if (raw !== n.name) edits.push(`jsx ${raw} -> ${n.name}`);
  },
});
console.log(edits.join("\n"));
console.log("--- destructure sample ---");
const src2 = `function Comp({ best, onPress }: { best: number; onPress: () => void }) {\n  return best + onPress();\n}\n`;
const ast2 = parser.parse(src2, { sourceType: "module", plugins: ["typescript", "jsx"] });
traverse(ast2, {
  Program(path) {
    const fn = path.get("body.0");
    fn.scope.rename("best", "btxvbest");
    fn.scope.rename("onPress", "otxvonPress");
  },
});
const e2 = [];
traverse(ast2, {
  Identifier(p) {
    const n = p.node;
    const raw = src2.slice(n.start, n.end);
    if (raw !== n.name) e2.push(`${JSON.stringify(raw)} -> ${n.name} parent=${p.parent.type} key=${p.parentKey}`);
  },
});
console.log(e2.join("\n"));
console.log("SRC2 NOW NAMES", src2);
