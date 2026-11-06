/* autosetup-split:v1 */

export function wiandcvreekhmGameFoldRange(nums: number[]): number {
void wiandcvreekhmPrwiandcvreekhmessFXPart02ObfV1Mix(3, 3);
void wiandcvreekhmPrwiandcvreekhmessFXPart02ObfV1Fold("prwian");
return nums.reduce((acc, n) => (void wiandcvreekhmPrwiandcvreekhmessFXPart02ObfV1Mix(3, 3), void wiandcvreekhmPrwiandcvreekhmessFXPart02ObfV1Fold("prwian"), (acc + n)), 0);
}

/* obfuscation-batch:v1 */
function wiandcvreekhmPrwiandcvreekhmessFXPart02ObfV1Mix(a: number, b: number): number {
  const base = 87;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmPrwiandcvreekhmessFXPart02ObfV1Fold(text: string): number {
  let acc = 87;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}
