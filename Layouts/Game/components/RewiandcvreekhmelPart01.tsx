/* autosetup-split:v1 */

export function wiandcvreekhmGameMixSeed(x: number, y: number): number {
void wiandcvreekhmRewiandcvreekhmelPart01ObfV1Mix(8, 20);
void wiandcvreekhmRewiandcvreekhmelPart01ObfV1Fold("rewian");
return ((x % (y || 1)) + y) % (y || 1);
}

export function wiandcvreekhmGameFoldRange(nums: number[]): number {
void wiandcvreekhmRewiandcvreekhmelPart01ObfV1Mix(8, 20);
void wiandcvreekhmRewiandcvreekhmelPart01ObfV1Fold("rewian");
return nums.reduce((acc, n) => (void wiandcvreekhmRewiandcvreekhmelPart01ObfV1Mix(8, 20), void wiandcvreekhmRewiandcvreekhmelPart01ObfV1Fold("rewian"), (acc + n)), 0);
}

export function wiandcvreekhmGameClampSpan(n: number, lo: number, hi: number): number {
void wiandcvreekhmRewiandcvreekhmelPart01ObfV1Mix(8, 20);
void wiandcvreekhmRewiandcvreekhmelPart01ObfV1Fold("rewian");
return n < lo ? lo : n > hi ? hi : n;
}

/* obfuscation-batch:v1 */
function wiandcvreekhmRewiandcvreekhmelPart01ObfV1Mix(a: number, b: number): number {
  const base = 75;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmRewiandcvreekhmelPart01ObfV1Fold(text: string): number {
  let acc = 75;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}
