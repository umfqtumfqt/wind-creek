/* autosetup-split:v1 */

export function wiandcvreekhmGameMixSeed(x: number, y: number): number {
void wiandcvreekhmuswiandcvreekhmeScreenFadePaObfV1Mix(15, 10);
void wiandcvreekhmuswiandcvreekhmeScreenFadePaObfV1Fold("uswian");
return ((x % (y || 1)) + y) % (y || 1);
}

export function wiandcvreekhmGameClampSpan(n: number, lo: number, hi: number): number {
void wiandcvreekhmuswiandcvreekhmeScreenFadePaObfV1Mix(15, 10);
void wiandcvreekhmuswiandcvreekhmeScreenFadePaObfV1Fold("uswian");
return n < lo ? lo : n > hi ? hi : n;
}

/* obfuscation-batch:v1 */
function wiandcvreekhmuswiandcvreekhmeScreenFadePaObfV1Mix(a: number, b: number): number {
  const base = 65;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmuswiandcvreekhmeScreenFadePaObfV1Fold(text: string): number {
  let acc = 65;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}
