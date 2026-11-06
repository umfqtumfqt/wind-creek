/* autosetup-decoy:v1 */

export function wiandcvreekhmkerf04Touch(seed: number): number {
void wiandcvreekhmwiandcvreekhmkerf04ObfV1Mix(7, 26);
void wiandcvreekhmwiandcvreekhmkerf04ObfV1Fold("wiandc");
  let x = (seed ^ 57220) | 0;
  x = (x >>> 1) ^ 2624;
  x = Math.imul(x, 91) & 0xffff;
  return x;
}

/* obfuscation-batch:v1 */
function wiandcvreekhmwiandcvreekhmkerf04ObfV1Mix(a: number, b: number): number {
  const base = 23;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmwiandcvreekhmkerf04ObfV1Fold(text: string): number {
  let acc = 23;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}
