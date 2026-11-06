import {SYMBOL_ART} from '../assets';
import {STRIP_LEN} from '../constants/config';

export type SymbolKey =
  | 'spade'
  | 'heart'
  | 'diamond'
  | 'crown'
  | 'mask'
  | 'joker';

export type SymbolDef = {
  key: SymbolKey;
  /** Short uppercase label used in the paytable. */
  name: string;
  asset: any;
  /** Multiplier applied to the bet for three of a kind. */
  payout: number;
  /** Multiplier for two of a kind on the two leftmost reels. */
  payout2: number;
  /** Relative frequency on a reel strip. */
  weight: number;
  /**
   * How often this symbol is chosen as the target of a *planned* win.
   * Heavily skewed to the cheap symbols — otherwise the house pays out
   * several times the stake on every hit. The joker is never planned; the
   * jackpot has its own rare roll.
   */
  planWeight: number;
  tintColor: string;
  isWild?: boolean;
};

/**
 * ONE shared symbol pool. Reels, paytable and the album all read from here —
 * never a second list, or matching becomes impossible.
 */
export const SYMBOLS: SymbolDef[] = [
  {
    key: 'spade',
    name: 'SPADE',
    asset: SYMBOL_ART.spade,
    payout: 3,
    payout2: 1,
    weight: 5,
    planWeight: 40,
    tintColor: '#C9A8AE',
  },
  {
    key: 'heart',
    name: 'HEART',
    asset: SYMBOL_ART.heart,
    payout: 4,
    payout2: 1,
    weight: 5,
    planWeight: 34,
    tintColor: '#D9304C',
  },
  {
    key: 'diamond',
    name: 'DIAMOND',
    asset: SYMBOL_ART.diamond,
    payout: 5,
    payout2: 1.5,
    weight: 4,
    planWeight: 16,
    tintColor: '#6D28D9',
  },
  {
    key: 'crown',
    name: 'CROWN',
    asset: SYMBOL_ART.crown,
    payout: 8,
    payout2: 2,
    weight: 3,
    planWeight: 7,
    tintColor: '#F4C95D',
  },
  {
    key: 'mask',
    name: 'MASK',
    asset: SYMBOL_ART.mask,
    payout: 15,
    payout2: 3,
    weight: 2,
    planWeight: 3,
    tintColor: '#A97C1E',
  },
  {
    key: 'joker',
    name: 'JOKER',
    asset: SYMBOL_ART.joker,
    payout: 40,
    payout2: 5,
    weight: 1,
    planWeight: 0,
    tintColor: '#F4C95D',
    isWild: true,
  },
];

export const SYMBOL_BY_KEY: Record<SymbolKey, SymbolDef> = SYMBOLS.reduce(
  (acc, s) => {
    acc[s.key] = s;
    return acc;
  },
  {} as Record<SymbolKey, SymbolDef>,
);

const TOTAL_WEIGHT = SYMBOLS.reduce((sum, s) => sum + s.weight, 0);

/** Weighted draw out of the shared pool, by reel-strip frequency. */
export function pickWeighted(exclude?: SymbolKey): SymbolDef {
  const pool = exclude ? SYMBOLS.filter(s => s.key !== exclude) : SYMBOLS;
  const total = exclude
    ? pool.reduce((sum, s) => sum + s.weight, 0)
    : TOTAL_WEIGHT;
  let roll = Math.random() * total;
  for (let i = 0; i < pool.length; i++) {
    roll -= pool[i].weight;
    if (roll <= 0) {
      return pool[i];
    }
  }
  return pool[pool.length - 1];
}

/** Draw for a planned win: cheap symbols dominate, the joker never wins here. */
export function pickPlanTarget(exclude?: SymbolKey): SymbolDef {
  const pool = SYMBOLS.filter(
    s => s.planWeight > 0 && (!exclude || s.key !== exclude),
  );
  const total = pool.reduce((sum, s) => sum + s.planWeight, 0);
  let roll = Math.random() * total;
  for (let i = 0; i < pool.length; i++) {
    roll -= pool[i].planWeight;
    if (roll <= 0) {
      return pool[i];
    }
  }
  return pool[pool.length - 1];
}

/**
 * A reel strip always contains every symbol at least once, so any planned
 * landing symbol can be found on any reel. The rest is a weighted fill,
 * shuffled once — that is where the real distribution comes from.
 */
export function buildStrip(): SymbolDef[] {
  const strip: SymbolDef[] = SYMBOLS.slice();
  while (strip.length < STRIP_LEN) {
    strip.push(pickWeighted());
  }
  for (let i = strip.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = strip[i];
    strip[i] = strip[j];
    strip[j] = tmp;
  }
  return strip;
}
