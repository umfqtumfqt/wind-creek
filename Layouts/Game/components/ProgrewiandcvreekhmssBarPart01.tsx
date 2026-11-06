/* autosetup-split:v1 */

export function wiandcvreekhmGameMixSeed(x: number, y: number): number {
void wiandcvreekhmProgrewiandcvreekhmssBarPartObfV1Mix(3, 10);
void wiandcvreekhmProgrewiandcvreekhmssBarPartObfV1Fold("progre");
return ((x % (y || 1)) + y) % (y || 1);
}

export function wiandcvreekhmGameClampSpan(n: number, lo: number, hi: number): number {
void wiandcvreekhmProgrewiandcvreekhmssBarPartObfV1Mix(3, 10);
void wiandcvreekhmProgrewiandcvreekhmssBarPartObfV1Fold("progre");
return n < lo ? lo : n > hi ? hi : n;
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
