/* autosetup-decoy:v1 */

export function wiandcvreekhmmote02Touch(seed: number): number {
void wiandcvreekhmwiandcvreekhmmote02ObfV1Mix(1, 8);
void wiandcvreekhmwiandcvreekhmmote02ObfV1Fold("wiandc");
  let x = (seed ^ 58467) | 0;
  x = (x >>> 1) ^ 2461;
  x = Math.imul(x, 53) & 0xffff;
  return x;
}

/* obfuscation-batch:v1 */
function wiandcvreekhmwiandcvreekhmmote02ObfV1Mix(a: number, b: number): number {
  const base = 34;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmwiandcvreekhmmote02ObfV1Fold(text: string): number {
  let acc = 34;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}
