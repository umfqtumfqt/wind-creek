/* autosetup-decoy:v1 */

export function wiandcvreekhmscree07Touch(seed: number): number {
void wiandcvreekhmwiandcvreekhmscree07ObfV1Mix(13, 15);
void wiandcvreekhmwiandcvreekhmscree07ObfV1Fold("wiandc");
  let x = (seed ^ 54108) | 0;
  x = (x >>> 5) ^ 634;
  x = Math.imul(x, 41) & 0xffff;
  return x;
}

/* obfuscation-batch:v1 */
function wiandcvreekhmwiandcvreekhmscree07ObfV1Mix(a: number, b: number): number {
  const base = 12;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmwiandcvreekhmscree07ObfV1Fold(text: string): number {
  let acc = 12;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}
