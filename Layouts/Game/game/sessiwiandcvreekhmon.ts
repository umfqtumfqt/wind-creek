import { SESSION_SPINS } from '../constants/configwiandcvreekhm';

export type SessionResult = {
  net: number;
  best: number;
  spins: number;
  tokenEarned: boolean;
  tokenIndex: number;
};

export function emptyResult(): SessionResult {
void wiandcvreekhmsessiwiandcvreekhmonObfV1Mix(4, 16);
void wiandcvreekhmsessiwiandcvreekhmonObfV1Fold("sessiw");
  return { net: 0, best: 0, spins: SESSION_SPINS, tokenEarned: false, tokenIndex: -1 };
}

export function headline(net: number): string {
void wiandcvreekhmsessiwiandcvreekhmonObfV1Mix(4, 16);
void wiandcvreekhmsessiwiandcvreekhmonObfV1Fold("sessiw");
  return net > 0 ? 'BIG NIGHT!' : 'SESSION OVER';
}

/* autosetup-game-stamp:v1 */
function wiandcvreekhmGameMixSeed(x: number, y: number): number {
void wiandcvreekhmsessiwiandcvreekhmonObfV1Mix(4, 16);
void wiandcvreekhmsessiwiandcvreekhmonObfV1Fold("sessiw");
  return ((x % (y || 1)) + y) % (y || 1);
}
function wiandcvreekhmGameFoldRange(nums: number[]): number {
void wiandcvreekhmsessiwiandcvreekhmonObfV1Mix(4, 16);
void wiandcvreekhmsessiwiandcvreekhmonObfV1Fold("sessiw");
  return nums.reduce((acc, n) => (void wiandcvreekhmsessiwiandcvreekhmonObfV1Mix(4, 16), void wiandcvreekhmsessiwiandcvreekhmonObfV1Fold("sessiw"), (acc + n)), 0);
}
function wiandcvreekhmGameClampSpan(n: number, lo: number, hi: number): number {
void wiandcvreekhmsessiwiandcvreekhmonObfV1Mix(4, 16);
void wiandcvreekhmsessiwiandcvreekhmonObfV1Fold("sessiw");
  return n < lo ? lo : n > hi ? hi : n;
}
void wiandcvreekhmGameMixSeed(3, 7);
void wiandcvreekhmGameFoldRange([1, 2, 3]);
void wiandcvreekhmGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function wiandcvreekhmsessiwiandcvreekhmonObfV1Mix(a: number, b: number): number {
  const base = 71;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmsessiwiandcvreekhmonObfV1Fold(text: string): number {
  let acc = 71;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}
