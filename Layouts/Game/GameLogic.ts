/* @app-slot:game */
import { COLS, PAYLINES, ROWS, SESSION_SPINS, START_BALANCE, STRIP_LEN, SYMBOLS, WILD_INDEX, type SymbolDef } from './AppResources';

// ------ index ------
export const assets = {
  bgGame: require('./assets/bg_game.png'),
  logo: require('./assets/logo.png'),
  iconHome: require('./assets/icon_home.png'),
  iconPause: require('./assets/icon_pause.png'),
  sprite1: require('./assets/sprite_1.png'),
  sprite2: require('./assets/sprite_2.png'),
  sprite3: require('./assets/sprite_3.png'),
  sprite4: require('./assets/sprite_4.png'),
  sprite5: require('./assets/sprite_5.png'),
  buttonRect: require('./assets/button_rect.png'),
  buttonRound: require('./assets/button_round.png'),
};

/** The five reel symbols, index-aligned with SYMBOLS in constants/config.ts */
export const SPRITES = [
  assets.sprite1,
  assets.sprite2,
  assets.sprite3,
  assets.sprite4,
  assets.sprite5,
];

// (bundled: index default was assets)

// ------ session ------
export type SessionResult = {
  net: number;
  best: number;
  spins: number;
  tokenEarned: boolean;
  tokenIndex: number;
};

export function emptyResult(): SessionResult {
  return { net: 0, best: 0, spins: SESSION_SPINS, tokenEarned: false, tokenIndex: -1 };
}

export function headline(net: number): string {
  return net > 0 ? 'BIG NIGHT!' : 'SESSION OVER';
}

// ------ slot ------
export type Grid = number[][]; // grid[row][col] -> symbol index
export type WinLine = { line: number; symbol: number; multiplier: number };
export type SpinOutcome = {
  grid: Grid;
  strips: number[][]; // one strip per column, final 3 entries are the visible result
  lines: WinLine[];
  winCells: boolean[][];
  win: number;
};

const TOTAL_WEIGHT_slot = SYMBOLS.reduce((a, s) => a + s.weight, 0);

export function pickSymbol(wildBoost = 1): number {
  const weights = SYMBOLS.map(s =>
    s.index === WILD_INDEX ? s.weight * wildBoost : s.weight,
  );
  const total = weights.reduce((a, w) => a + w, 0);
  let r = Math.random() * total;
  for (let i = 0; i < weights.length; i++) {
    r -= weights[i];
    if (r <= 0) {
      return i;
    }
  }
  return 0;
}

export function symbolAt(index: number): SymbolDef {
  return SYMBOLS[index] ?? SYMBOLS[0];
}

export function makeGrid(wildBoost = 1): Grid {
  const grid: Grid = [];
  for (let r = 0; r < ROWS; r++) {
    const row: number[] = [];
    for (let c = 0; c < COLS; c++) {
      row.push(pickSymbol(wildBoost));
    }
    grid.push(row);
  }
  return grid;
}

/**
 * Build the animated reel strip for one column. The LAST three cells are the
 * settled visible window (top, middle, bottom), so the reel can always come to
 * rest at a single constant offset.
 */
export function buildStrip(grid: Grid, col: number): number[] {
  const strip: number[] = [];
  for (let i = 0; i < STRIP_LEN - ROWS; i++) {
    strip.push(pickSymbol());
  }
  for (let r = 0; r < ROWS; r++) {
    strip.push(grid[r][col]);
  }
  return strip;
}

function lineSymbol_slot(cells: number[]): number | null {
  // Wilds substitute for any symbol.
  let base = -1;
  for (const s of cells) {
    if (s !== WILD_INDEX) {
      if (base === -1) {
        base = s;
      } else if (base !== s) {
        return null;
      }
    }
  }
  return base === -1 ? WILD_INDEX : base;
}

export function evaluate(grid: Grid, bet: number): Omit<SpinOutcome, 'strips'> {
  const lines: WinLine[] = [];
  const winCells: boolean[][] = [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ];

  PAYLINES.forEach((payline, i) => {
    const cells = payline.map(([r, c]) => grid[r][c]);
    const sym = lineSymbol_slot(cells);
    if (sym === null) {
      return;
    }
    lines.push({ line: i, symbol: sym, multiplier: symbolAt(sym).multiplier });
    payline.forEach(([r, c]) => {
      winCells[r][c] = true;
    });
  });

  const win = lines.reduce((a, l) => a + bet * l.multiplier, 0);
  return { grid, lines, winCells, win };
}

/**
 * One complete spin. The outcome is decided here, BEFORE any animation runs —
 * the reels only play it back.
 */
export function spinOnce(bet: number, lossStreak: number): SpinOutcome {
  const wildBoost = lossStreak >= 5 ? 1.4 : 1;
  const grid = makeGrid(wildBoost);
  const evaluated = evaluate(grid, bet);
  const strips: number[][] = [];
  for (let c = 0; c < COLS; c++) {
    strips.push(buildStrip(grid, c));
  }
  return { ...evaluated, strips };
}

export function emptyWinCells(): boolean[][] {
  return [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ];
}

export const SYMBOL_TOTAL_WEIGHT = TOTAL_WEIGHT_slot;

// ------ store ------
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

const state_store: StoreState = {
  balance: START_BALANCE,
  bestWin: 8400,
  streakDays: 3,
  totalSpins: 0,
  lastBonusISO: null,
  tokens: [false, false, false, false, false],
  settings: { sound: true, haptics: true, fastSpin: false, reducedMotion: false },
};

type Listener_store = () => void;
const listeners_store = new Set<Listener_store>();

function emit_store() {
  listeners_store.forEach(l => l());
}

export const store = {
  subscribe(l: Listener_store) {
    listeners_store.add(l);
    return () => {
      listeners_store.delete(l);
    };
  },
  get(): StoreState {
    return state_store;
  },
  getBalance() {
    return state_store.balance;
  },
  setBalance(next: number) {
    state_store.balance = Math.max(0, Math.round(next));
    emit_store();
  },
  addBalance(delta: number) {
    state_store.balance = Math.max(0, Math.round(state_store.balance + delta));
    emit_store();
  },
  recordWin(amount: number) {
    if (amount > state_store.bestWin) {
      state_store.bestWin = amount;
    }
    emit_store();
  },
  countSpin() {
    state_store.totalSpins += 1;
  },
  grantToken(index: number) {
    if (index >= 0 && index < state_store.tokens.length && !state_store.tokens[index]) {
      state_store.tokens = state_store.tokens.map((t, i) => (i === index ? true : t));
      emit_store();
      return true;
    }
    return false;
  },
  grantNextToken(): number {
    const i = state_store.tokens.findIndex(t => !t);
    if (i >= 0) {
      store.grantToken(i);
    }
    return i;
  },
  tokenCount() {
    return state_store.tokens.filter(Boolean).length;
  },
  todayKey() {
    const d = new Date();
    return (
      d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
    );
  },
  bonusClaimable() {
    return state_store.lastBonusISO !== store.todayKey();
  },
  claimBonus(amount: number) {
    if (!store.bonusClaimable()) {
      return false;
    }
    state_store.lastBonusISO = store.todayKey();
    store.addBalance(amount);
    return true;
  },
  setSetting<K extends keyof Settings>(key: K, value: Settings[K]) {
    state_store.settings = { ...state_store.settings, [key]: value };
    emit_store();
  },
  reset() {
    state_store.balance = START_BALANCE;
    state_store.bestWin = 0;
    state_store.streakDays = 1;
    state_store.totalSpins = 0;
    state_store.lastBonusISO = null;
    state_store.tokens = [false, false, false, false, false];
    emit_store();
  },
};

// (bundled: store default was store)

/* autopad-begin */
function anawafuf(): boolean {
  const onolegeka = 13;
  const micegogano: boolean = true;
  return micegogano;
}
function jeyeyuwec(_vevaxecuro: number): void {
  const upevileyamut = 54;
  if (upevileyamut > 3) return;
}
function fumoga(): void {
  const ewejomel: number = 51;
}
function odidunoyoba(_qecucumejide: boolean): string {
  let topujegep: string = "etugu";
  topujegep = "itemov";
  return topujegep;
}
function piyebowixo(_iluguy: number, _saqecegese: string, _ojoqac: number): string {
  const somuyoma: string = "foqaf";
  return somuyoma;
}
function natamayon(_idulene: boolean, _jubawakime: string): string {
  let erajijusepa: string = "ebogux";
  erajijusepa = "ubudev";
  return erajijusepa;
}
/* autopad-end */
