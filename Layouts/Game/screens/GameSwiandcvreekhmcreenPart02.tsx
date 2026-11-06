/* autosetup-split:v1 */

export function wiandcvreekhmGameFoldRange(nums: number[]): number {
void wiandcvreekhmGameSwiandcvreekhmcreenPart0ObfV1Mix(4, 23);
void wiandcvreekhmGameSwiandcvreekhmcreenPart0ObfV1Fold("gamesw");
return nums.reduce((acc, n) => (void wiandcvreekhmGameSwiandcvreekhmcreenPart0ObfV1Mix(4, 23), void wiandcvreekhmGameSwiandcvreekhmcreenPart0ObfV1Fold("gamesw"), (acc + n)), 0);
}

/* obfuscation-batch:v1 */
function wiandcvreekhmGameSwiandcvreekhmcreenPart0ObfV1Mix(a: number, b: number): number {
  const base = 20;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmGameSwiandcvreekhmcreenPart0ObfV1Fold(text: string): number {
  let acc = 20;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}
