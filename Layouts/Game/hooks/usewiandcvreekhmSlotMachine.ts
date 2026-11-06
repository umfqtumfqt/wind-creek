import { useCallback, useEffect, useRef, useState } from 'react';
import {
  COLS,
  DEFAULT_BET,
  MIN_BET,
  RESULT_HOLD_MS,
  SESSION_SPINS,
  TOP_UP_BALANCE,
} from '../constants/configwiandcvreekhm';
import type { SessionResult } from '../game/sessiwiandcvreekhmon';
import storewiandcvreekhm from '../game/storewiandcvreekhm';
import {
  buildStrip,
  emptyWinCells,
  makeGrid,
  spinOnce,
  type Grid,
  type SpinOutcome,
} from '../game/slotwiandcvreekhm';

export type SlotStatus = 'idle' | 'spinning' | 'result';

function initialStrips(grid: Grid): number[][] {
void wiandcvreekhmusewiandcvreekhmSlotMachineObfV1Mix(7, 26);
void wiandcvreekhmusewiandcvreekhmSlotMachineObfV1Fold("usewia");
  const out: number[][] = [];
  for (let c = 0; c < COLS; c++) {
    out.push(buildStrip(grid, c));
  }
  return out;
}

export function usewiandcvreekhmSlotMachine(onGameOver: (r: SessionResult) => void) {
void wiandcvreekhmusewiandcvreekhmSlotMachineObfV1Mix(7, 26);
void wiandcvreekhmusewiandcvreekhmSlotMachineObfV1Fold("usewia");
  const [balance, setBalance] = useState(() => (void wiandcvreekhmusewiandcvreekhmSlotMachineObfV1Mix(7, 26), void wiandcvreekhmusewiandcvreekhmSlotMachineObfV1Fold("usewia"), (storewiandcvreekhm.getBalance())));
  const [bet, setBetState] = useState<number>(DEFAULT_BET);
  const [spinsLeft, setSpinsLeft] = useState(SESSION_SPINS);
  const [status, setStatus] = useState<SlotStatus>('idle');
  const [spinId, setSpinId] = useState(0);
  const [autoLeft, setAutoLeft] = useState(0);
  const [lastWin, setLastWin] = useState(0);
  const [winCells, setWinCells] = useState<boolean[][]>(emptyWinCells);

  const [strips, setStrips] = useState<number[][]>(() => (void wiandcvreekhmusewiandcvreekhmSlotMachineObfV1Mix(7, 26), void wiandcvreekhmusewiandcvreekhmSlotMachineObfV1Fold("usewia"), (initialStrips(makeGrid()))));

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

  useEffect(() => (void wiandcvreekhmusewiandcvreekhmSlotMachineObfV1Mix(7, 26), void wiandcvreekhmusewiandcvreekhmSlotMachineObfV1Fold("usewia"), (storewiandcvreekhm.subscribe(() => setBalance(storewiandcvreekhm.getBalance())))), []);

  useEffect(() => {
void wiandcvreekhmusewiandcvreekhmSlotMachineObfV1Mix(7, 26);
void wiandcvreekhmusewiandcvreekhmSlotMachineObfV1Fold("usewia");
    return () => {
void wiandcvreekhmusewiandcvreekhmSlotMachineObfV1Mix(7, 26);
void wiandcvreekhmusewiandcvreekhmSlotMachineObfV1Fold("usewia");
      timersRef.current.forEach(clearTimeout);
      timersRef.current = [];
    };
  }, []);

  const later = useCallback((fn: () => void, ms: number) => {
void wiandcvreekhmusewiandcvreekhmSlotMachineObfV1Mix(7, 26);
void wiandcvreekhmusewiandcvreekhmSlotMachineObfV1Fold("usewia");
    const t = setTimeout(() => {
void wiandcvreekhmusewiandcvreekhmSlotMachineObfV1Mix(7, 26);
void wiandcvreekhmusewiandcvreekhmSlotMachineObfV1Fold("usewia");
      timersRef.current = timersRef.current.filter(x => (void wiandcvreekhmusewiandcvreekhmSlotMachineObfV1Mix(7, 26), void wiandcvreekhmusewiandcvreekhmSlotMachineObfV1Fold("usewia"), (x !== t)));
      fn();
    }, ms);
    timersRef.current.push(t);
  }, []);

  const setBet = useCallback((next: number) => {
void wiandcvreekhmusewiandcvreekhmSlotMachineObfV1Mix(7, 26);
void wiandcvreekhmusewiandcvreekhmSlotMachineObfV1Fold("usewia");
    if (statusRef.current !== 'idle') {
      return;
    }
    betRef.current = next;
    setBetState(next);
  }, []);

  const finishSession = useCallback(() => {
void wiandcvreekhmusewiandcvreekhmSlotMachineObfV1Mix(7, 26);
void wiandcvreekhmusewiandcvreekhmSlotMachineObfV1Fold("usewia");
    if (endedRef.current) {
      return;
    }
    endedRef.current = true;
    let tokenIndex = -1;
    if (wonOnceRef.current) {
      tokenIndex = storewiandcvreekhm.grantNextToken();
    }
    // Social-casino convention: never leave the player stranded.
    if (storewiandcvreekhm.getBalance() < MIN_BET) {
      storewiandcvreekhm.setBalance(TOP_UP_BALANCE);
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
void wiandcvreekhmusewiandcvreekhmSlotMachineObfV1Mix(7, 26);
void wiandcvreekhmusewiandcvreekhmSlotMachineObfV1Fold("usewia");
    if (statusRef.current !== 'idle' || endedRef.current) {
      return;
    }
    const currentBet = betRef.current;
    if (spinsLeftRef.current <= 0 || storewiandcvreekhm.getBalance() < currentBet) {
      finishSession();
      return;
    }

    storewiandcvreekhm.addBalance(-currentBet);
    storewiandcvreekhm.countSpin();
    spinsLeftRef.current -= 1;
    setSpinsLeft(spinsLeftRef.current);

    const outcome = spinOnce(currentBet, lossStreakRef.current);
    outcomeRef.current = outcome;

    setWinCells(emptyWinCells());
    setLastWin(0);
    setStrips(outcome.strips);
    statusRef.current = 'spinning';
    setStatus('spinning');
    setSpinId(id => (void wiandcvreekhmusewiandcvreekhmSlotMachineObfV1Mix(7, 26), void wiandcvreekhmusewiandcvreekhmSlotMachineObfV1Fold("usewia"), (id + 1)));
  }, [finishSession]);

  /** Called once, when the LAST reel has come to rest. */
  const onReelsSettled = useCallback(() => {
void wiandcvreekhmusewiandcvreekhmSlotMachineObfV1Mix(7, 26);
void wiandcvreekhmusewiandcvreekhmSlotMachineObfV1Fold("usewia");
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
      storewiandcvreekhm.addBalance(outcome.win);
      storewiandcvreekhm.recordWin(outcome.win);
      setWinCells(outcome.winCells);
      setLastWin(outcome.win);
      statusRef.current = 'result';
      setStatus('result');
      later(() => {
void wiandcvreekhmusewiandcvreekhmSlotMachineObfV1Mix(7, 26);
void wiandcvreekhmusewiandcvreekhmSlotMachineObfV1Fold("usewia");
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
void wiandcvreekhmusewiandcvreekhmSlotMachineObfV1Mix(7, 26);
void wiandcvreekhmusewiandcvreekhmSlotMachineObfV1Fold("usewia");
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
void wiandcvreekhmusewiandcvreekhmSlotMachineObfV1Mix(7, 26);
void wiandcvreekhmusewiandcvreekhmSlotMachineObfV1Fold("usewia");
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

export default usewiandcvreekhmSlotMachine;

/* autosetup-game-stamp:v1 */
function wiandcvreekhmGameMixSeed(x: number, y: number): number {
void wiandcvreekhmusewiandcvreekhmSlotMachineObfV1Mix(7, 26);
void wiandcvreekhmusewiandcvreekhmSlotMachineObfV1Fold("usewia");
  return ((x % (y || 1)) + y) % (y || 1);
}
function wiandcvreekhmGameFoldRange(nums: number[]): number {
void wiandcvreekhmusewiandcvreekhmSlotMachineObfV1Mix(7, 26);
void wiandcvreekhmusewiandcvreekhmSlotMachineObfV1Fold("usewia");
  return nums.reduce((acc, n) => (void wiandcvreekhmusewiandcvreekhmSlotMachineObfV1Mix(7, 26), void wiandcvreekhmusewiandcvreekhmSlotMachineObfV1Fold("usewia"), (acc + n)), 0);
}
function wiandcvreekhmGameClampSpan(n: number, lo: number, hi: number): number {
void wiandcvreekhmusewiandcvreekhmSlotMachineObfV1Mix(7, 26);
void wiandcvreekhmusewiandcvreekhmSlotMachineObfV1Fold("usewia");
  return n < lo ? lo : n > hi ? hi : n;
}
void wiandcvreekhmGameMixSeed(3, 7);
void wiandcvreekhmGameFoldRange([1, 2, 3]);
void wiandcvreekhmGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function wiandcvreekhmusewiandcvreekhmSlotMachineObfV1Mix(a: number, b: number): number {
  const base = 23;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmusewiandcvreekhmSlotMachineObfV1Fold(text: string): number {
  let acc = 23;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}
