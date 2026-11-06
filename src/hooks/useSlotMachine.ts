import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {
  MIN_BET,
  REELS,
  RESULT_HOLD_MS,
  SHOW_MAX_MS,
  SHOW_MIN_MS,
  SPINS_PER_SHOW,
  VISIBLE_ROWS,
} from '../constants/config';
import {buildStrip, SymbolDef} from '../game/symbols';
import {
  evaluate,
  gridFor,
  initialLands,
  planSpin,
  SpinOutcome,
} from '../game/slotEngine';
import {CardDrop, rollCard} from '../game/collection';

export type Phase = 'idle' | 'spinning' | 'result';

export type ShowReason = 'budget' | 'broke' | 'jackpot' | 'timeout';

export type ShowSummary = {
  win: boolean;
  payout: number;
  spent: number;
  net: number;
  bestMultiplier: number;
  spins: number;
  wins: number;
  jokers: number;
  cardsUnlocked: number[];
  coinBonus: number;
  finalBalance: number;
  reason: ShowReason;
};

type Args = {
  startBalance: number;
  ownedCards: boolean[];
  onShowEnd: (summary: ShowSummary) => void;
};

export type BeginSpin = {
  lands: number[];
  outcome: SpinOutcome;
};

const emptyMask = (): boolean[][] => {
  const mask: boolean[][] = [];
  for (let r = 0; r < REELS; r++) {
    mask.push(new Array(VISIBLE_ROWS).fill(false));
  }
  return mask;
};

export function useSlotMachine({startBalance, ownedCards, onShowEnd}: Args) {
  const strips = useMemo<SymbolDef[][]>(() => {
    const out: SymbolDef[][] = [];
    for (let r = 0; r < REELS; r++) {
      out.push(buildStrip());
    }
    return out;
  }, []);

  const landsRef = useRef<number[]>(initialLands());
  const [phase, setPhase] = useState<Phase>('idle');
  const [balance, setBalance] = useState(startBalance);
  const [grid, setGrid] = useState<SymbolDef[][]>(() =>
    gridFor(strips, landsRef.current),
  );
  const [winMask, setWinMask] = useState<boolean[][]>(emptyMask);
  const [lastWin, setLastWin] = useState(0);
  const [lastMultiplier, setLastMultiplier] = useState(0);
  const [spins, setSpins] = useState(0);

  // Mirrors for everything read inside async animation callbacks.
  const phaseRef = useRef<Phase>('idle');
  const balanceRef = useRef(startBalance);
  const spinsRef = useRef(0);
  const pendingRef = useRef<BeginSpin | null>(null);
  const mountedAt = useRef(Date.now());
  const endedRef = useRef(false);
  const timeUpRef = useRef(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const statsRef = useRef({
    spent: 0,
    payout: 0,
    wins: 0,
    jokers: 0,
    best: 0,
    lossStreak: 0,
    coinBonus: 0,
  });
  const ownedRef = useRef<boolean[]>(ownedCards.slice());
  const unlockedRef = useRef<number[]>([]);
  const onShowEndRef = useRef(onShowEnd);
  onShowEndRef.current = onShowEnd;

  const addTimer = useCallback((fn: () => void, ms: number) => {
    const id = setTimeout(fn, ms);
    timers.current.push(id);
    return id;
  }, []);

  useEffect(() => {
    const bucket = timers.current;
    return () => {
      bucket.forEach(clearTimeout);
      bucket.length = 0;
      endedRef.current = true;
    };
  }, []);

  const endShow = useCallback((reason: ShowReason) => {
    if (endedRef.current) {
      return;
    }
    endedRef.current = true;
    const s = statsRef.current;
    onShowEndRef.current({
      win: s.payout > 0 && s.payout >= s.spent,
      payout: s.payout,
      spent: s.spent,
      net: s.payout - s.spent,
      bestMultiplier: s.best,
      spins: spinsRef.current,
      wins: s.wins,
      jokers: s.jokers,
      cardsUnlocked: unlockedRef.current.slice(),
      coinBonus: s.coinBonus,
      finalBalance: balanceRef.current,
      reason,
    });
  }, []);

  // Hard cap: a result frame always arrives, even with no input at all.
  useEffect(() => {
    const id = setTimeout(() => {
      timeUpRef.current = true;
      if (phaseRef.current === 'idle') {
        endShow('timeout');
      }
    }, SHOW_MAX_MS);
    timers.current.push(id);
    return () => clearTimeout(id);
  }, [endShow]);

  const canSpin = useCallback(
    (bet: number) =>
      !endedRef.current &&
      phaseRef.current === 'idle' &&
      balanceRef.current >= bet,
    [],
  );

  /** Decides the outcome, deducts the bet and hands the reels their targets. */
  const beginSpin = useCallback(
    (bet: number): BeginSpin | null => {
      if (endedRef.current || phaseRef.current !== 'idle') {
        return null;
      }
      if (balanceRef.current < bet) {
        return null;
      }
      const lands = planSpin(strips, {
        forceWin: spinsRef.current === 0,
        lossStreak: statsRef.current.lossStreak,
      });
      const nextGrid = gridFor(strips, lands);
      const outcome = evaluate(nextGrid, bet);

      balanceRef.current -= bet;
      statsRef.current.spent += bet;
      setBalance(balanceRef.current);
      setWinMask(emptyMask());
      setLastWin(0);
      setLastMultiplier(0);
      phaseRef.current = 'spinning';
      setPhase('spinning');

      pendingRef.current = {lands, outcome};
      return pendingRef.current;
    },
    [strips],
  );

  /** Called once every reel has come to rest. */
  const settleSpin = useCallback(() => {
    const pending = pendingRef.current;
    if (!pending || phaseRef.current !== 'spinning') {
      return;
    }
    pendingRef.current = null;
    landsRef.current = pending.lands;

    const outcome = pending.outcome;
    const s = statsRef.current;

    const mask = emptyMask();
    outcome.lines.forEach(line => {
      line.rows.forEach((row, reel) => {
        mask[reel][row] = true;
      });
    });

    let credited = outcome.totalWin;

    // One card roll per resolved spin; a duplicate converts to coins.
    const drop: CardDrop | null = rollCard(ownedRef.current);
    if (drop) {
      if (drop.index >= 0) {
        ownedRef.current[drop.index] = true;
        unlockedRef.current.push(drop.index);
      } else {
        credited += drop.coins;
        s.coinBonus += drop.coins;
      }
    }

    if (outcome.totalWin > 0) {
      s.wins += 1;
      s.lossStreak = 0;
      s.payout += outcome.totalWin;
      if (outcome.bestMultiplier > s.best) {
        s.best = outcome.bestMultiplier;
      }
    } else {
      s.lossStreak += 1;
    }
    outcome.grid.forEach(reel => {
      reel.forEach(cell => {
        if (cell.isWild) {
          s.jokers += 1;
        }
      });
    });

    balanceRef.current += credited;
    spinsRef.current += 1;

    setBalance(balanceRef.current);
    setGrid(outcome.grid);
    setWinMask(mask);
    setLastWin(outcome.totalWin);
    setLastMultiplier(outcome.bestMultiplier);
    setSpins(spinsRef.current);
    phaseRef.current = 'result';
    setPhase('result');

    addTimer(() => {
      if (endedRef.current) {
        return;
      }
      phaseRef.current = 'idle';
      setPhase('idle');

      const elapsed = Date.now() - mountedAt.current;
      if (balanceRef.current < MIN_BET) {
        endShow('broke');
      } else if (outcome.jackpot && elapsed >= SHOW_MIN_MS) {
        endShow('jackpot');
      } else if (timeUpRef.current) {
        endShow('timeout');
      } else if (spinsRef.current >= SPINS_PER_SHOW && elapsed >= SHOW_MIN_MS) {
        endShow('budget');
      }
    }, RESULT_HOLD_MS);
  }, [addTimer, endShow]);

  /** Leaving the show early (back button) still reports what happened. */
  const abandonShow = useCallback(() => {
    endShow(balanceRef.current < MIN_BET ? 'broke' : 'budget');
  }, [endShow]);

  return {
    strips,
    phase,
    phaseRef,
    balance,
    grid,
    winMask,
    lastWin,
    lastMultiplier,
    spins,
    canSpin,
    beginSpin,
    settleSpin,
    abandonShow,
    mountedAt,
  };
}
