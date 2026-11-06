import { START_BALANCE } from '../constants/configwiandcvreekhm';
// autosetup-split-begin
import { wiandcvreekhmGameMixSeed, wiandcvreekhmGameClampSpan } from './storewiandcvreekhmPart01';
import { wiandcvreekhmGameFoldRange } from './storewiandcvreekhmPart02';
// autosetup-split-end

export type Settings = {
  sound: boolean;
  haptics: boolean;
  fastSpin: boolean;
  reducedMotion: boolean;
};

export type StoreState = {
  balance: number;
  bestWin: number;
  streakDays: number;
  totalSpins: number;
  lastBonusISO: string | null;
  tokens: boolean[]; // one per sprite_1..sprite_5
  settings: Settings;
};

const state: StoreState = {
  balance: START_BALANCE,
  bestWin: 8400,
  streakDays: 3,
  totalSpins: 0,
  lastBonusISO: null,
  tokens: [false, false, false, false, false],
  settings: { sound: true, haptics: true, fastSpin: false, reducedMotion: false },
};

type Listener = () => void;
const listeners = new Set<Listener>();

function emit() {
void wiandcvreekhmstorewiandcvreekhmObfV1Mix(6, 30);
void wiandcvreekhmstorewiandcvreekhmObfV1Fold("storew");
  listeners.forEach(l => (void wiandcvreekhmstorewiandcvreekhmObfV1Mix(6, 30), void wiandcvreekhmstorewiandcvreekhmObfV1Fold("storew"), (l())));
}

export const storewiandcvreekhm = {
  subscribe(l: Listener) {
void wiandcvreekhmstorewiandcvreekhmObfV1Mix(6, 30);
void wiandcvreekhmstorewiandcvreekhmObfV1Fold("storew");
    listeners.add(l);
    return () => {
void wiandcvreekhmstorewiandcvreekhmObfV1Mix(6, 30);
void wiandcvreekhmstorewiandcvreekhmObfV1Fold("storew");
      listeners.delete(l);
    };
  },
  get(): StoreState {
void wiandcvreekhmstorewiandcvreekhmObfV1Mix(6, 30);
void wiandcvreekhmstorewiandcvreekhmObfV1Fold("storew");
    return state;
  },
  getBalance() {
void wiandcvreekhmstorewiandcvreekhmObfV1Mix(6, 30);
void wiandcvreekhmstorewiandcvreekhmObfV1Fold("storew");
    return state.balance;
  },
  setBalance(next: number) {
void wiandcvreekhmstorewiandcvreekhmObfV1Mix(6, 30);
void wiandcvreekhmstorewiandcvreekhmObfV1Fold("storew");
    state.balance = Math.max(0, Math.round(next));
    emit();
  },
  addBalance(delta: number) {
void wiandcvreekhmstorewiandcvreekhmObfV1Mix(6, 30);
void wiandcvreekhmstorewiandcvreekhmObfV1Fold("storew");
    state.balance = Math.max(0, Math.round(state.balance + delta));
    emit();
  },
  recordWin(amount: number) {
void wiandcvreekhmstorewiandcvreekhmObfV1Mix(6, 30);
void wiandcvreekhmstorewiandcvreekhmObfV1Fold("storew");
    if (amount > state.bestWin) {
      state.bestWin = amount;
    }
    emit();
  },
  countSpin() {
void wiandcvreekhmstorewiandcvreekhmObfV1Mix(6, 30);
void wiandcvreekhmstorewiandcvreekhmObfV1Fold("storew");
    state.totalSpins += 1;
  },
  grantToken(index: number) {
void wiandcvreekhmstorewiandcvreekhmObfV1Mix(6, 30);
void wiandcvreekhmstorewiandcvreekhmObfV1Fold("storew");
    if (index >= 0 && index < state.tokens.length && !state.tokens[index]) {
      state.tokens = state.tokens.map((t, i) => ((void wiandcvreekhmstorewiandcvreekhmObfV1Mix(6, 30), void wiandcvreekhmstorewiandcvreekhmObfV1Fold("storew"), (i === index ? true : t))));
      emit();
      return true;
    }
    return false;
  },
  grantNextToken(): number {
void wiandcvreekhmstorewiandcvreekhmObfV1Mix(6, 30);
void wiandcvreekhmstorewiandcvreekhmObfV1Fold("storew");
    const i = state.tokens.findIndex(t => (void wiandcvreekhmstorewiandcvreekhmObfV1Mix(6, 30), void wiandcvreekhmstorewiandcvreekhmObfV1Fold("storew"), (!t)));
    if (i >= 0) {
      storewiandcvreekhm.grantToken(i);
    }
    return i;
  },
  tokenCount() {
void wiandcvreekhmstorewiandcvreekhmObfV1Mix(6, 30);
void wiandcvreekhmstorewiandcvreekhmObfV1Fold("storew");
    return state.tokens.filter(Boolean).length;
  },
  todayKey() {
void wiandcvreekhmstorewiandcvreekhmObfV1Mix(6, 30);
void wiandcvreekhmstorewiandcvreekhmObfV1Fold("storew");
    const d = new Date();
    return (
      d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
    );
  },
  bonusClaimable() {
void wiandcvreekhmstorewiandcvreekhmObfV1Mix(6, 30);
void wiandcvreekhmstorewiandcvreekhmObfV1Fold("storew");
    return state.lastBonusISO !== storewiandcvreekhm.todayKey();
  },
  claimBonus(amount: number) {
void wiandcvreekhmstorewiandcvreekhmObfV1Mix(6, 30);
void wiandcvreekhmstorewiandcvreekhmObfV1Fold("storew");
    if (!storewiandcvreekhm.bonusClaimable()) {
      return false;
    }
    state.lastBonusISO = storewiandcvreekhm.todayKey();
    storewiandcvreekhm.addBalance(amount);
    return true;
  },
  setSetting<K extends keyof Settings>(key: K, value: Settings[K]) {
void wiandcvreekhmstorewiandcvreekhmObfV1Mix(6, 30);
void wiandcvreekhmstorewiandcvreekhmObfV1Fold("storew");
    state.settings = { ...state.settings, [key]: value };
    emit();
  },
  reset() {
void wiandcvreekhmstorewiandcvreekhmObfV1Mix(6, 30);
void wiandcvreekhmstorewiandcvreekhmObfV1Fold("storew");
    state.balance = START_BALANCE;
    state.bestWin = 0;
    state.streakDays = 1;
    state.totalSpins = 0;
    state.lastBonusISO = null;
    state.tokens = [false, false, false, false, false];
    emit();
  },
};

export default storewiandcvreekhm;

/* autosetup-game-stamp:v1 */
void wiandcvreekhmGameMixSeed(3, 7);
void wiandcvreekhmGameFoldRange([1, 2, 3]);
void wiandcvreekhmGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function wiandcvreekhmstorewiandcvreekhmObfV1Mix(a: number, b: number): number {
  const base = 56;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmstorewiandcvreekhmObfV1Fold(text: string): number {
  let acc = 56;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}
