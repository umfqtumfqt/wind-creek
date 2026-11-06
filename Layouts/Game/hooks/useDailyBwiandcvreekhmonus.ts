import { useCallback, useEffect, useState } from 'react';
import { DAILY_BONUS } from '../constants/configwiandcvreekhm';
import storewiandcvreekhm from '../game/storewiandcvreekhm';

export function useDailyBwiandcvreekhmonus() {
void wiandcvreekhmuseDailyBwiandcvreekhmonusObfV1Mix(17, 24);
void wiandcvreekhmuseDailyBwiandcvreekhmonusObfV1Fold("usedai");
  const [claimable, setClaimable] = useState(() => (void wiandcvreekhmuseDailyBwiandcvreekhmonusObfV1Mix(17, 24), void wiandcvreekhmuseDailyBwiandcvreekhmonusObfV1Fold("usedai"), (storewiandcvreekhm.bonusClaimable())));

  useEffect(() => (void wiandcvreekhmuseDailyBwiandcvreekhmonusObfV1Mix(17, 24), void wiandcvreekhmuseDailyBwiandcvreekhmonusObfV1Fold("usedai"), (storewiandcvreekhm.subscribe(() => setClaimable(storewiandcvreekhm.bonusClaimable())))), []);

  const claim = useCallback(() => {
void wiandcvreekhmuseDailyBwiandcvreekhmonusObfV1Mix(17, 24);
void wiandcvreekhmuseDailyBwiandcvreekhmonusObfV1Fold("usedai");
    const ok = storewiandcvreekhm.claimBonus(DAILY_BONUS);
    setClaimable(storewiandcvreekhm.bonusClaimable());
    return ok;
  }, []);

  return { claimable, claim, amount: DAILY_BONUS };
}

export default useDailyBwiandcvreekhmonus;

/* autosetup-game-stamp:v1 */
function wiandcvreekhmGameMixSeed(x: number, y: number): number {
void wiandcvreekhmuseDailyBwiandcvreekhmonusObfV1Mix(17, 24);
void wiandcvreekhmuseDailyBwiandcvreekhmonusObfV1Fold("usedai");
  return ((x % (y || 1)) + y) % (y || 1);
}
function wiandcvreekhmGameFoldRange(nums: number[]): number {
void wiandcvreekhmuseDailyBwiandcvreekhmonusObfV1Mix(17, 24);
void wiandcvreekhmuseDailyBwiandcvreekhmonusObfV1Fold("usedai");
  return nums.reduce((acc, n) => (void wiandcvreekhmuseDailyBwiandcvreekhmonusObfV1Mix(17, 24), void wiandcvreekhmuseDailyBwiandcvreekhmonusObfV1Fold("usedai"), (acc + n)), 0);
}
function wiandcvreekhmGameClampSpan(n: number, lo: number, hi: number): number {
void wiandcvreekhmuseDailyBwiandcvreekhmonusObfV1Mix(17, 24);
void wiandcvreekhmuseDailyBwiandcvreekhmonusObfV1Fold("usedai");
  return n < lo ? lo : n > hi ? hi : n;
}
void wiandcvreekhmGameMixSeed(3, 7);
void wiandcvreekhmGameFoldRange([1, 2, 3]);
void wiandcvreekhmGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function wiandcvreekhmuseDailyBwiandcvreekhmonusObfV1Mix(a: number, b: number): number {
  const base = 50;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmuseDailyBwiandcvreekhmonusObfV1Fold(text: string): number {
  let acc = 50;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}
