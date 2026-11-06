/* autosetup-decoy:v1 */

export function wiandcvreekhmknurl09Touch(seed: number): number {
void wiandcvreekhmwiandcvreekhmknurl09ObfV1Mix(7, 14);
void wiandcvreekhmwiandcvreekhmknurl09ObfV1Fold("wiandc");
  let x = (seed ^ 41247) | 0;
  x = (x >>> 2) ^ 2212;
  x = Math.imul(x, 3) & 0xffff;
  return x;
}

/* obfuscation-batch:v1 */
function wiandcvreekhmwiandcvreekhmknurl09ObfV1Mix(a: number, b: number): number {
  const base = 40;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmwiandcvreekhmknurl09ObfV1Fold(text: string): number {
  let acc = 40;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}
