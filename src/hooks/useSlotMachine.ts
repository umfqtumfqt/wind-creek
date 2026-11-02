import { useCallback, useEffect, useRef, useState } from 'react';
import {
  COLS,
  DEFAULT_BET,
  MIN_BET,
  RESULT_HOLD_MS,
  SESSION_SPINS,
  TOP_UP_BALANCE,
} from '../constants/config';
import type { SessionResult } from '../game/session';
import store from '../game/store';
import {
  buildStrip,
  emptyWinCells,
  makeGrid,
  spinOnce,
  type Grid,
  type SpinOutcome,
} from '../game/slot';

export type SlotStatus = 'idle' | 'spinning' | 'result';

function initialStrips(grid: Grid): number[][] {
  const out: number[][] = [];
  for (let c = 0; c < COLS; c++) {
    out.push(buildStrip(grid, c));
  }
  return out;
}

export function useSlotMachine(onGameOver: (r: SessionResult) => void) {
  const [balance, setBalance] = useState(() => store.getBalance());
  const [bet, setBetState] = useState<number>(DEFAULT_BET);
  const [spinsLeft, setSpinsLeft] = useState(SESSION_SPINS);
  const [status, setStatus] = useState<SlotStatus>('idle');
  const [spinId, setSpinId] = useState(0);
  const [autoLeft, setAutoLeft] = useState(0);
  const [lastWin, setLastWin] = useState(0);
  const [winCells, setWinCells] = useState<boolean[][]>(emptyWinCells);

  const [strips, setStrips] = useState<number[][]>(() => initialStrips(makeGrid()));

  // Animation-facing mirrors — Animated callbacks must never read stale state.
  const statusRef = useRef<SlotStatus>('idle');
  const betRef = useRef(bet);
  const spinsLeftRef = useRef(spinsLeft);
  const autoLeftRef = useRef(0);
  const outcomeRef = useRef<SpinOutcome | null>(null);
  const lossStreakRef = useRef(0);
  const netRef = useRef(0);
  const bestRef = useRef(0);
  const wonOnceRef = useRef(false);
  const endedRef = useRef(false);
  const timersRef = useRef<Array<ReturnType<typeof setTimeout>>>([]);

  useEffect(() => store.subscribe(() => setBalance(store.getBalance())), []);

  useEffect(() => {
    return () => {
      timersRef.current.forEach(clearTimeout);
      timersRef.current = [];
    };
  }, []);

  const later = useCallback((fn: () => void, ms: number) => {
    const t = setTimeout(() => {
      timersRef.current = timersRef.current.filter(x => x !== t);
      fn();
    }, ms);
    timersRef.current.push(t);
  }, []);

  const setBet = useCallback((next: number) => {
    if (statusRef.current !== 'idle') {
      return;
    }
    betRef.current = next;
    setBetState(next);
  }, []);

  const finishSession = useCallback(() => {
    if (endedRef.current) {
      return;
    }
    endedRef.current = true;
    let tokenIndex = -1;
    if (wonOnceRef.current) {
      tokenIndex = store.grantNextToken();
    }
    // Social-casino convention: never leave the player stranded.
    if (store.getBalance() < MIN_BET) {
      store.setBalance(TOP_UP_BALANCE);
    }
    onGameOver({
      net: netRef.current,
      best: bestRef.current,
      spins: SESSION_SPINS - spinsLeftRef.current,
      tokenEarned: wonOnceRef.current && tokenIndex >= 0,
      tokenIndex,
    });
  }, [onGameOver]);

  const spin = useCallback(() => {
    if (statusRef.current !== 'idle' || endedRef.current) {
      return;
    }
    const currentBet = betRef.current;
    if (spinsLeftRef.current <= 0 || store.getBalance() < currentBet) {
      finishSession();
      return;
    }

    store.addBalance(-currentBet);
    store.countSpin();
    spinsLeftRef.current -= 1;
    setSpinsLeft(spinsLeftRef.current);

    const outcome = spinOnce(currentBet, lossStreakRef.current);
    outcomeRef.current = outcome;

    setWinCells(emptyWinCells());
    setLastWin(0);
    setStrips(outcome.strips);
    statusRef.current = 'spinning';
    setStatus('spinning');
    setSpinId(id => id + 1);
  }, [finishSession]);

  /** Called once, when the LAST reel has come to rest. */
  const onReelsSettled = useCallback(() => {
    const outcome = outcomeRef.current;
    if (!outcome || statusRef.current !== 'spinning') {
      return;
    }

    netRef.current -= betRef.current;

    if (outcome.win > 0) {
      lossStreakRef.current = 0;
      wonOnceRef.current = true;
      netRef.current += outcome.win;
      if (outcome.win > bestRef.current) {
        bestRef.current = outcome.win;
      }
      store.addBalance(outcome.win);
      store.recordWin(outcome.win);
      setWinCells(outcome.winCells);
      setLastWin(outcome.win);
      statusRef.current = 'result';
      setStatus('result');
      later(() => {
        if (statusRef.current !== 'result') {
          return;
        }
        statusRef.current = 'idle';
        setStatus('idle');
        setWinCells(emptyWinCells());
      }, RESULT_HOLD_MS);
    } else {
      lossStreakRef.current += 1;
      setLastWin(0);
      statusRef.current = 'idle';
      setStatus('idle');
    }
  }, [later]);

  // Session end + auto-spin chaining, driven by the settled idle state.
  useEffect(() => {
    if (status !== 'idle' || endedRef.current) {
      return;
    }
    if (spinsLeftRef.current <= 0 || balance < MIN_BET) {
      autoLeftRef.current = 0;
      setAutoLeft(0);
      later(finishSession, 420);
      return;
    }
    if (autoLeftRef.current > 0) {
      autoLeftRef.current -= 1;
      setAutoLeft(autoLeftRef.current);
      later(spin, 460);
    }
  }, [status, balance, finishSession, later, spin]);

  const startAuto = useCallback(() => {
    if (autoLeftRef.current > 0) {
      autoLeftRef.current = 0;
      setAutoLeft(0);
      return;
    }
    autoLeftRef.current = 10;
    setAutoLeft(10);
    if (statusRef.current === 'idle') {
      spin();
    }
  }, [spin]);

  return {
    balance,
    bet,
    setBet,
    spinsLeft,
    status,
    spinId,
    strips,
    winCells,
    lastWin,
    autoLeft,
    spin,
    startAuto,
    onReelsSettled,
    endSession: finishSession,
  };
}

export default useSlotMachine;
