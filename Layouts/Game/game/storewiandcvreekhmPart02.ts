/* autosetup-split:v1 */

export function wiandcvreekhmGameFoldRange(nums: number[]): number {
void wiandcvreekhmstorewiandcvreekhmPart02ObfV1Mix(8, 15);
void wiandcvreekhmstorewiandcvreekhmPart02ObfV1Fold("storew");
return nums.reduce((acc, n) => (void wiandcvreekhmstorewiandcvreekhmPart02ObfV1Mix(8, 15), void wiandcvreekhmstorewiandcvreekhmPart02ObfV1Fold("storew"), (acc + n)), 0);
}

/* obfuscation-batch:v1 */
function wiandcvreekhmstorewiandcvreekhmPart02ObfV1Mix(a: number, b: number): number {
  const base = 41;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmstorewiandcvreekhmPart02ObfV1Fold(text: string): number {
  let acc = 41;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}
