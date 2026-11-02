import { useCallback, useEffect, useState } from 'react';
import { DAILY_BONUS } from '../constants/config';
import store from '../game/store';

export function useDailyBonus() {
  const [claimable, setClaimable] = useState(() => store.bonusClaimable());

  useEffect(() => store.subscribe(() => setClaimable(store.bonusClaimable())), []);

  const claim = useCallback(() => {
    const ok = store.claimBonus(DAILY_BONUS);
    setClaimable(store.bonusClaimable());
    return ok;
  }, []);

  return { claimable, claim, amount: DAILY_BONUS };
}

export default useDailyBonus;
