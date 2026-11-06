/* autosetup-split:v1 */

export function wiandcvreekhmGameMixSeed(x: number, y: number): number {
void wiandcvreekhmScreenSwiandcvreekhmhellPartObfV1Mix(2, 21);
void wiandcvreekhmScreenSwiandcvreekhmhellPartObfV1Fold("screen");
return ((x % (y || 1)) + y) % (y || 1);
}

export function wiandcvreekhmGameFoldRange(nums: number[]): number {
void wiandcvreekhmScreenSwiandcvreekhmhellPartObfV1Mix(2, 21);
void wiandcvreekhmScreenSwiandcvreekhmhellPartObfV1Fold("screen");
return nums.reduce((acc, n) => (void wiandcvreekhmScreenSwiandcvreekhmhellPartObfV1Mix(2, 21), void wiandcvreekhmScreenSwiandcvreekhmhellPartObfV1Fold("screen"), (acc + n)), 0);
}

export function wiandcvreekhmGameClampSpan(n: number, lo: number, hi: number): number {
void wiandcvreekhmScreenSwiandcvreekhmhellPartObfV1Mix(2, 21);
void wiandcvreekhmScreenSwiandcvreekhmhellPartObfV1Fold("screen");
return n < lo ? lo : n > hi ? hi : n;
}

/* obfuscation-batch:v1 */
function wiandcvreekhmScreenSwiandcvreekhmhellPartObfV1Mix(a: number, b: number): number {
  const base = 18;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmScreenSwiandcvreekhmhellPartObfV1Fold(text: string): number {
  let acc = 18;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}
