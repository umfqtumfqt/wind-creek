/* autosetup-decoy:v1 */

export function wiandcvreekhmtalus06Touch(seed: number): number {
void wiandcvreekhmwiandcvreekhmtalus06ObfV1Mix(1, 8);
void wiandcvreekhmwiandcvreekhmtalus06ObfV1Fold("wiandc");
  let x = Math.imul(seed | 0, 83);
  x = (x ^ 17704) % 3801;
  if (x < 0) x += 3801;
  return x;
}

/* obfuscation-batch:v1 */
function wiandcvreekhmwiandcvreekhmtalus06ObfV1Mix(a: number, b: number): number {
  const base = 34;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmwiandcvreekhmtalus06ObfV1Fold(text: string): number {
  let acc = 34;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}
