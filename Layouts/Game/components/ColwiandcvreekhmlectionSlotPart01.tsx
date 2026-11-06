/* autosetup-split:v1 */

export function wiandcvreekhmGameMixSeed(x: number, y: number): number {
void wiandcvreekhmColwiandcvreekhmlectionSlotPObfV1Mix(17, 7);
void wiandcvreekhmColwiandcvreekhmlectionSlotPObfV1Fold("colwia");
return ((x % (y || 1)) + y) % (y || 1);
}

export function wiandcvreekhmGameFoldRange(nums: number[]): number {
void wiandcvreekhmColwiandcvreekhmlectionSlotPObfV1Mix(17, 7);
void wiandcvreekhmColwiandcvreekhmlectionSlotPObfV1Fold("colwia");
return nums.reduce((acc, n) => (void wiandcvreekhmColwiandcvreekhmlectionSlotPObfV1Mix(17, 7), void wiandcvreekhmColwiandcvreekhmlectionSlotPObfV1Fold("colwia"), (acc + n)), 0);
}

export function wiandcvreekhmGameClampSpan(n: number, lo: number, hi: number): number {
void wiandcvreekhmColwiandcvreekhmlectionSlotPObfV1Mix(17, 7);
void wiandcvreekhmColwiandcvreekhmlectionSlotPObfV1Fold("colwia");
return n < lo ? lo : n > hi ? hi : n;
}

/* obfuscation-batch:v1 */
function wiandcvreekhmColwiandcvreekhmlectionSlotPObfV1Mix(a: number, b: number): number {
  const base = 33;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmColwiandcvreekhmlectionSlotPObfV1Fold(text: string): number {
  let acc = 33;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}
