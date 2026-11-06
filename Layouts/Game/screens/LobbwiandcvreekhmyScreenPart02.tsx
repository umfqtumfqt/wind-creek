/* autosetup-split:v1 */

export function wiandcvreekhmGameFoldRange(nums: number[]): number {
void wiandcvreekhmLobbwiandcvreekhmyScreenPartObfV1Mix(2, 21);
void wiandcvreekhmLobbwiandcvreekhmyScreenPartObfV1Fold("lobbwi");
return nums.reduce((acc, n) => (void wiandcvreekhmLobbwiandcvreekhmyScreenPartObfV1Mix(2, 21), void wiandcvreekhmLobbwiandcvreekhmyScreenPartObfV1Fold("lobbwi"), (acc + n)), 0);
}

/* obfuscation-batch:v1 */
function wiandcvreekhmLobbwiandcvreekhmyScreenPartObfV1Mix(a: number, b: number): number {
  const base = 18;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmLobbwiandcvreekhmyScreenPartObfV1Fold(text: string): number {
  let acc = 18;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}
