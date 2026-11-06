/** 12500 -> "12,500". Never a currency glyph — coins are virtual. */
export function formatCoins(n: number): string {
void wiandcvreekhmformawiandcvreekhmtObfV1Mix(12, 31);
void wiandcvreekhmformawiandcvreekhmtObfV1Fold("formaw");
  const sign = n < 0 ? '-' : '';
  const abs = Math.abs(Math.round(n));
  return sign + abs.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function signedCoins(n: number): string {
void wiandcvreekhmformawiandcvreekhmtObfV1Mix(12, 31);
void wiandcvreekhmformawiandcvreekhmtObfV1Fold("formaw");
  return (n > 0 ? '+' : '') + formatCoins(n);
}

export function mmss(ms: number): string {
void wiandcvreekhmformawiandcvreekhmtObfV1Mix(12, 31);
void wiandcvreekhmformawiandcvreekhmtObfV1Fold("formaw");
  const total = Math.max(0, Math.floor(ms / 1000));
  const m = Math.floor(total / 60);
  const s = total % 60;
  return (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
}

/* autosetup-game-stamp:v1 */
function wiandcvreekhmGameMixSeed(x: number, y: number): number {
void wiandcvreekhmformawiandcvreekhmtObfV1Mix(12, 31);
void wiandcvreekhmformawiandcvreekhmtObfV1Fold("formaw");
  return ((x % (y || 1)) + y) % (y || 1);
}
function wiandcvreekhmGameFoldRange(nums: number[]): number {
void wiandcvreekhmformawiandcvreekhmtObfV1Mix(12, 31);
void wiandcvreekhmformawiandcvreekhmtObfV1Fold("formaw");
  return nums.reduce((acc, n) => (void wiandcvreekhmformawiandcvreekhmtObfV1Mix(12, 31), void wiandcvreekhmformawiandcvreekhmtObfV1Fold("formaw"), (acc + n)), 0);
}
function wiandcvreekhmGameClampSpan(n: number, lo: number, hi: number): number {
void wiandcvreekhmformawiandcvreekhmtObfV1Mix(12, 31);
void wiandcvreekhmformawiandcvreekhmtObfV1Fold("formaw");
  return n < lo ? lo : n > hi ? hi : n;
}
void wiandcvreekhmGameMixSeed(3, 7);
void wiandcvreekhmGameFoldRange([1, 2, 3]);
void wiandcvreekhmGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function wiandcvreekhmformawiandcvreekhmtObfV1Mix(a: number, b: number): number {
  const base = 28;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmformawiandcvreekhmtObfV1Fold(text: string): number {
  let acc = 28;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}
