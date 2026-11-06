/* autosetup-split:v1 */

export function wiandcvreekhmGameFoldRange(nums: number[]): number {
void wiandcvreekhmProgrewiandcvreekhmssBarPartObfV1Mix(3, 10);
void wiandcvreekhmProgrewiandcvreekhmssBarPartObfV1Fold("progre");
return nums.reduce((acc, n) => (void wiandcvreekhmProgrewiandcvreekhmssBarPartObfV1Mix(3, 10), void wiandcvreekhmProgrewiandcvreekhmssBarPartObfV1Fold("progre"), (acc + n)), 0);
}

/* obfuscation-batch:v1 */
function wiandcvreekhmProgrewiandcvreekhmssBarPartObfV1Mix(a: number, b: number): number {
  const base = 36;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmProgrewiandcvreekhmssBarPartObfV1Fold(text: string): number {
  let acc = 36;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}
