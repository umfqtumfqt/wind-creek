/* autosetup-split:v1 */

export function wiandcvreekhmGameMixSeed(x: number, y: number): number {
void wiandcvreekhmLobbwiandcvreekhmyScreenPartObfV1Mix(2, 21);
void wiandcvreekhmLobbwiandcvreekhmyScreenPartObfV1Fold("lobbwi");
return ((x % (y || 1)) + y) % (y || 1);
}

export function wiandcvreekhmGameClampSpan(n: number, lo: number, hi: number): number {
void wiandcvreekhmLobbwiandcvreekhmyScreenPartObfV1Mix(2, 21);
void wiandcvreekhmLobbwiandcvreekhmyScreenPartObfV1Fold("lobbwi");
return n < lo ? lo : n > hi ? hi : n;
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
