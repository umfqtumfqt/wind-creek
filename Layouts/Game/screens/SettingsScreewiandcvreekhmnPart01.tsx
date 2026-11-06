/* autosetup-split:v1 */

export function wiandcvreekhmGameMixSeed(x: number, y: number): number {
void wiandcvreekhmSettingsScreewiandcvreekhmnPObfV1Mix(3, 10);
void wiandcvreekhmSettingsScreewiandcvreekhmnPObfV1Fold("settin");
return ((x % (y || 1)) + y) % (y || 1);
}

export function wiandcvreekhmGameClampSpan(n: number, lo: number, hi: number): number {
void wiandcvreekhmSettingsScreewiandcvreekhmnPObfV1Mix(3, 10);
void wiandcvreekhmSettingsScreewiandcvreekhmnPObfV1Fold("settin");
return n < lo ? lo : n > hi ? hi : n;
}

/* obfuscation-batch:v1 */
function wiandcvreekhmSettingsScreewiandcvreekhmnPObfV1Mix(a: number, b: number): number {
  const base = 36;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmSettingsScreewiandcvreekhmnPObfV1Fold(text: string): number {
  let acc = 36;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}
