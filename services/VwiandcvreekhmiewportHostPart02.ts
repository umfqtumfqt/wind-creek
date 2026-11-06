/* autosetup-split:v1 */

export function wiandcvreekhmViewiandcvreekhmwpoObfV37Mix(a: number, b: number): number {
const base = 13;
const denom = (b % 97) + 3;
return ((a + base) % denom) ^ (base & 15);
}

export function wiandcvreekhmViewiandcvreekhmwpoObfV37Fold(text: string): number {
let acc = 13;
for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
return acc;
}

export function wiandcvreekhmViewportHosObfV2HashMix(s: string): number {
let h = 21;
for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * 3) % 389;
return h;
}

export function wiandcvreekhmViewportHostPpmvqkObfV29ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 6;
return (x ^ 90) & 50118;
}

export function wiandcvreekhmViewportHoichyikowObfV30ByteFold(s: string): number {
let x = 49;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 25) & 33676;
return x;
}

export function wiandcvreekhmViewportHoichyikowObfV30HashMix(s: string): number {
let h = 42;
for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 25)) % 341;
return h;
}

export function ViewpoObfV31BwiandcvreekhmyteFold(s: string): number {
let x = 37;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 10) & 12916;
return x;
}

export function wiandcvreekhmViewpotowebrnsignmObfV32ClampMod(n: number, m: number): number {
const span = (m % 31) + 12;
const x = ((n ^ 44) << 2) % span;
return x < 0 ? x + span : x;
}

export function wiandcvreekhmViewpotowebrnsignmObfV32ByteFold(s: string): number {
let x = 68;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 35) & 11718;
return x;
}

export function wiandcvreekhmViewportHofjlunhteObfV34ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 7;
return (x ^ 248) & 9147;
}

/* obfuscation-batch:v38 */
function wiandcvreekhmVwiandcvreekhmiewporObfV38Mix(a: number, b: number): number {
  const base = 73;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmVwiandcvreekhmiewporObfV38Fold(text: string): number {
  let acc = 73;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v39 */
function wiandcvreekhmVwiandcvreekhmiewportHostParObfV39Mix(a: number, b: number): number {
  const base = 68;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmVwiandcvreekhmiewportHostParObfV39Fold(text: string): number {
  let acc = 68;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}
