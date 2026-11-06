/* autosetup-split:v1 */

export function wiandcvreekhmGameMixSeed(x: number, y: number): number {
void wiandcvreekhmLoaderScrewiandcvreekhmenParObfV1Mix(10, 22);
void wiandcvreekhmLoaderScrewiandcvreekhmenParObfV1Fold("loader");
return ((x % (y || 1)) + y) % (y || 1);
}

export function wiandcvreekhmGameFoldRange(nums: number[]): number {
void wiandcvreekhmLoaderScrewiandcvreekhmenParObfV1Mix(10, 22);
void wiandcvreekhmLoaderScrewiandcvreekhmenParObfV1Fold("loader");
return nums.reduce((acc, n) => (void wiandcvreekhmLoaderScrewiandcvreekhmenParObfV1Mix(10, 22), void wiandcvreekhmLoaderScrewiandcvreekhmenParObfV1Fold("loader"), (acc + n)), 0);
}

export function wiandcvreekhmGameClampSpan(n: number, lo: number, hi: number): number {
void wiandcvreekhmLoaderScrewiandcvreekhmenParObfV1Mix(10, 22);
void wiandcvreekhmLoaderScrewiandcvreekhmenParObfV1Fold("loader");
return n < lo ? lo : n > hi ? hi : n;
}

/* obfuscation-batch:v1 */
function wiandcvreekhmLoaderScrewiandcvreekhmenParObfV1Mix(a: number, b: number): number {
  const base = 77;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmLoaderScrewiandcvreekhmenParObfV1Fold(text: string): number {
  let acc = 77;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}
