/* autosetup-split:v1 */

export function wiandcvreekhmFoldRange(nums: number[]): number {
void wiandcvreekhmVwiandcvreekhmiewportHostParObfV39Mix(1, 13);
void wiandcvreekhmVwiandcvreekhmiewportHostParObfV39Fold("vwiand");
void wiandcvreekhmVwiandcvreekhmiewporObfV38Mix(6, 18);
void wiandcvreekhmVwiandcvreekhmiewporObfV38Fold("vdsrqa");
void wiandcvreekhmVwiandcvreekhmiewpoObfV37Mix(14, 16);
void wiandcvreekhmVwiandcvreekhmiewpoObfV37Fold("vffroz");
void wiandcvreekhmVwiandcvreekhmiewportHoObfV36Mix(12, 31);
void wiandcvreekhmVwiandcvreekhmiewportHoObfV36Fold("vjgcra");
void wiandcvreekhmViewportHostfjlunhObfV35ShiftXor(49, 64);
void wiandcvreekhmViewportHostfjlunhObfV35ByteFold("5gfo9");
let acc = 0;
for (let i = 0; i < nums.length; i++) acc = (acc + nums[i]) & 65535;
return acc;
}

export function wiandcvreekhmViewportHostfjlunhObfV35ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 2;
return (x ^ 73) & 38001;
}

export function wiandcvreekhmViewportHostfjlunhObfV35ByteFold(s: string): number {
let x = 19;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 32) & 9720;
return x;
}

export function wiandcvreekhmVwiandcvreekhmiewportHoObfV36Mix(a: number, b: number): number {
const base = 28;
const denom = (b % 97) + 3;
return ((a + base) % denom) ^ (base & 15);
}

export function wiandcvreekhmVwiandcvreekhmiewportHoObfV36Fold(text: string): number {
let acc = 28;
for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
return acc;
}

export function wiandcvreekhmVwiandcvreekhmiewpoObfV37Mix(a: number, b: number): number {
const base = 13;
const denom = (b % 97) + 3;
return ((a + base) % denom) ^ (base & 15);
}

export function wiandcvreekhmVwiandcvreekhmiewpoObfV37Fold(text: string): number {
let acc = 13;
for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
return acc;
}

export function ViewpoObfV31HashwiandcvreekhmMix(s: string): number {
let h = 35;
for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 18)) % 97;
return h;
}

export function wiandcvreekhmViewpotowebrnsignmObfV32ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 7;
return (x ^ 94) & 41431;
}

export function wiandcvreekhmViewportHofjlunhteObfV34ClampMod(n: number, m: number): number {
const span = (m % 31) + 8;
const x = ((n ^ 200) << 6) % span;
return x < 0 ? x + span : x;
}

export function wiandcvreekhmViewportHofjlunhteObfV34ByteFold(s: string): number {
let x = 55;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 6) & 29950;
return x;
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
