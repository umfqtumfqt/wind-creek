/* autosetup-split:v1 */

export function wiandcvreekhmGameMixSeed(x: number, y: number): number {
void wiandcvreekhmSwiandcvreekhmcreenHeaderParObfV1Mix(13, 8);
void wiandcvreekhmSwiandcvreekhmcreenHeaderParObfV1Fold("swiand");
return ((x % (y || 1)) + y) % (y || 1);
}

export function wiandcvreekhmGameFoldRange(nums: number[]): number {
void wiandcvreekhmSwiandcvreekhmcreenHeaderParObfV1Mix(13, 8);
void wiandcvreekhmSwiandcvreekhmcreenHeaderParObfV1Fold("swiand");
return nums.reduce((acc, n) => (void wiandcvreekhmSwiandcvreekhmcreenHeaderParObfV1Mix(13, 8), void wiandcvreekhmSwiandcvreekhmcreenHeaderParObfV1Fold("swiand"), (acc + n)), 0);
}

export function wiandcvreekhmGameClampSpan(n: number, lo: number, hi: number): number {
void wiandcvreekhmSwiandcvreekhmcreenHeaderParObfV1Mix(13, 8);
void wiandcvreekhmSwiandcvreekhmcreenHeaderParObfV1Fold("swiand");
return n < lo ? lo : n > hi ? hi : n;
}

/* obfuscation-batch:v1 */
function wiandcvreekhmSwiandcvreekhmcreenHeaderParObfV1Mix(a: number, b: number): number {
  const base = 63;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmSwiandcvreekhmcreenHeaderParObfV1Fold(text: string): number {
  let acc = 63;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}
