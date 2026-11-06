/* autosetup-split:v1 */

export function wiandcvreekhmGameMixSeed(x: number, y: number): number {
void wiandcvreekhmstorewiandcvreekhmPart01ObfV1Mix(7, 14);
void wiandcvreekhmstorewiandcvreekhmPart01ObfV1Fold("storew");
return ((x % (y || 1)) + y) % (y || 1);
}

export function wiandcvreekhmGameClampSpan(n: number, lo: number, hi: number): number {
void wiandcvreekhmstorewiandcvreekhmPart01ObfV1Mix(7, 14);
void wiandcvreekhmstorewiandcvreekhmPart01ObfV1Fold("storew");
return n < lo ? lo : n > hi ? hi : n;
}

/* obfuscation-batch:v1 */
function wiandcvreekhmstorewiandcvreekhmPart01ObfV1Mix(a: number, b: number): number {
  const base = 40;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmstorewiandcvreekhmPart01ObfV1Fold(text: string): number {
  let acc = 40;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}
