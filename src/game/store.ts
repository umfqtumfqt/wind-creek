import { START_BALANCE } from '../constants/config';

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
  listeners.forEach(l => l());
}

export const store = {
  subscribe(l: Listener) {
    listeners.add(l);
    return () => {
      listeners.delete(l);
    };
  },
  get(): StoreState {
    return state;
  },
  getBalance() {
    return state.balance;
  },
  setBalance(next: number) {
    state.balance = Math.max(0, Math.round(next));
    emit();
  },
  addBalance(delta: number) {
    state.balance = Math.max(0, Math.round(state.balance + delta));
    emit();
  },
  recordWin(amount: number) {
    if (amount > state.bestWin) {
      state.bestWin = amount;
    }
    emit();
  },
  countSpin() {
    state.totalSpins += 1;
  },
  grantToken(index: number) {
    if (index >= 0 && index < state.tokens.length && !state.tokens[index]) {
      state.tokens = state.tokens.map((t, i) => (i === index ? true : t));
      emit();
      return true;
    }
    return false;
  },
  grantNextToken(): number {
    const i = state.tokens.findIndex(t => !t);
    if (i >= 0) {
      store.grantToken(i);
    }
    return i;
  },
  tokenCount() {
    return state.tokens.filter(Boolean).length;
  },
  todayKey() {
    const d = new Date();
    return (
      d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
    );
  },
  bonusClaimable() {
    return state.lastBonusISO !== store.todayKey();
  },
  claimBonus(amount: number) {
    if (!store.bonusClaimable()) {
      return false;
    }
    state.lastBonusISO = store.todayKey();
    store.addBalance(amount);
    return true;
  },
  setSetting<K extends keyof Settings>(key: K, value: Settings[K]) {
    state.settings = { ...state.settings, [key]: value };
    emit();
  },
  reset() {
    state.balance = START_BALANCE;
    state.bestWin = 0;
    state.streakDays = 1;
    state.totalSpins = 0;
    state.lastBonusISO = null;
    state.tokens = [false, false, false, false, false];
    emit();
  },
};

export default store;
