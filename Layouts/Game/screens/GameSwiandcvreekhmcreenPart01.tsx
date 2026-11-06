/* autosetup-split:v1 */

export function wiandcvreekhmGameMixSeed(x: number, y: number): number {
void wiandcvreekhmGameSwiandcvreekhmcreenPart0ObfV1Mix(4, 23);
void wiandcvreekhmGameSwiandcvreekhmcreenPart0ObfV1Fold("gamesw");
return ((x % (y || 1)) + y) % (y || 1);
}

export function wiandcvreekhmGameClampSpan(n: number, lo: number, hi: number): number {
void wiandcvreekhmGameSwiandcvreekhmcreenPart0ObfV1Mix(4, 23);
void wiandcvreekhmGameSwiandcvreekhmcreenPart0ObfV1Fold("gamesw");
return n < lo ? lo : n > hi ? hi : n;
}

/* obfuscation-batch:v1 */
function wiandcvreekhmGameSwiandcvreekhmcreenPart0ObfV1Mix(a: number, b: number): number {
  const base = 20;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmGameSwiandcvreekhmcreenPart0ObfV1Fold(text: string): number {
  let acc = 20;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}
