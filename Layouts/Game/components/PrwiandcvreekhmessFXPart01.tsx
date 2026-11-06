/* autosetup-split:v1 */

export function wiandcvreekhmGameMixSeed(x: number, y: number): number {
void wiandcvreekhmPrwiandcvreekhmessFXPart01ObfV1Mix(2, 31);
void wiandcvreekhmPrwiandcvreekhmessFXPart01ObfV1Fold("prwian");
return ((x % (y || 1)) + y) % (y || 1);
}

export function wiandcvreekhmGameClampSpan(n: number, lo: number, hi: number): number {
void wiandcvreekhmPrwiandcvreekhmessFXPart01ObfV1Mix(2, 31);
void wiandcvreekhmPrwiandcvreekhmessFXPart01ObfV1Fold("prwian");
return n < lo ? lo : n > hi ? hi : n;
}

/* obfuscation-batch:v1 */
function wiandcvreekhmPrwiandcvreekhmessFXPart01ObfV1Mix(a: number, b: number): number {
  const base = 86;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmPrwiandcvreekhmessFXPart01ObfV1Fold(text: string): number {
  let acc = 86;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}
