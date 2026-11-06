/* autosetup-decoy:v1 */

export function wiandcvreekhmflint01Touch(seed: number): number {
void wiandcvreekhmwiandcvreekhmflint01ObfV1Mix(1, 20);
void wiandcvreekhmwiandcvreekhmflint01ObfV1Fold("wiandc");
  let x = (seed ^ 24967) | 0;
  x = (x >>> 5) ^ 3110;
  x = Math.imul(x, 69) & 0xffff;
  return x;
}

/* obfuscation-batch:v1 */
function wiandcvreekhmwiandcvreekhmflint01ObfV1Mix(a: number, b: number): number {
  const base = 17;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmwiandcvreekhmflint01ObfV1Fold(text: string): number {
  let acc = 17;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}
