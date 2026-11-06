import {SymbolDef, SYMBOLS, pickPlanTarget} from './symbols';
import {
  JACKPOT_CHANCE,
  LOSS_STREAK_RESCUE,
  PAIR_WIN_SHARE,
  PLANNED_WIN_CHANCE,
  REELS,
  STRIP_LEN,
  VISIBLE_ROWS,
} from '../constants/config';

/** Row indices touched by each pay line, left reel to right reel. */
export const PAYLINES: number[][] = [
  [1, 1, 1], // centre row
  [0, 1, 2], // top-left down to bottom-right
  [2, 1, 0], // bottom-left up to top-right
];

export type WinLine = {
  line: number;
  rows: number[];
  symbol: SymbolDef;
  amount: number;
  multiplier: number;
  ofAKind: number;
};

export type SpinOutcome = {
  /** grid[reel][row] — exactly what the player sees once the reels rest. */
  grid: SymbolDef[][];
  lines: WinLine[];
  totalWin: number;
  bestMultiplier: number;
  jackpot: boolean;
};

const wrap = (i: number) => ((i % STRIP_LEN) + STRIP_LEN) % STRIP_LEN;

/** The three symbols visible on a reel that rests at `land`. */
export function visibleFor(strip: SymbolDef[], land: number): SymbolDef[] {
  const out: SymbolDef[] = [];
  for (let row = 0; row < VISIBLE_ROWS; row++) {
    out.push(strip[wrap(land + row)]);
  }
  return out;
}

export function gridFor(strips: SymbolDef[][], lands: number[]): SymbolDef[][] {
  return strips.map((strip, r) => visibleFor(strip, lands[r]));
}

/** Resolve a line to the symbol it pays as, honouring the wild. */
function resolveLine(cells: SymbolDef[]): SymbolDef | null {
  const real = cells.filter(c => !c.isWild);
  if (real.length === 0) {
    // All wilds — pays as the wild itself (the top prize).
    return cells[0];
  }
  const first = real[0];
  for (let i = 1; i < real.length; i++) {
    if (real[i].key !== first.key) {
      return null;
    }
  }
  return first;
}

export function evaluate(grid: SymbolDef[][], bet: number): SpinOutcome {
  const lines: WinLine[] = [];
  let jackpot = false;

  PAYLINES.forEach((rows, lineIdx) => {
    const cells = rows.map((row, reel) => grid[reel][row]);
    const three = resolveLine(cells);
    if (three) {
      const allWild = cells.every(c => c.isWild);
      const multiplier = three.payout;
      lines.push({
        line: lineIdx,
        rows,
        symbol: three,
        amount: Math.round(bet * multiplier),
        multiplier,
        ofAKind: 3,
      });
      if (allWild) {
        jackpot = true;
      }
      return;
    }
    // Two of a kind pays on the two leftmost reels only, centre line only.
    if (lineIdx === 0) {
      const pair = resolveLine([cells[0], cells[1]]);
      if (pair) {
        lines.push({
          line: lineIdx,
          rows: [rows[0], rows[1]],
          symbol: pair,
          amount: Math.round(bet * pair.payout2),
          multiplier: pair.payout2,
          ofAKind: 2,
        });
      }
    }
  });

  const totalWin = lines.reduce((sum, l) => sum + l.amount, 0);
  const bestMultiplier = lines.reduce(
    (best, l) => (l.multiplier > best ? l.multiplier : best),
    0,
  );
  return {grid, lines, totalWin, bestMultiplier, jackpot};
}

/** Every strip index whose landing would put `key` on the centre row. */
function landsShowing(strip: SymbolDef[], key: string): number[] {
  const out: number[] = [];
  for (let j = 0; j < strip.length; j++) {
    if (strip[j].key === key) {
      out.push(wrap(j - 1));
    }
  }
  return out;
}

function randomOf(list: number[]): number {
  return list[Math.floor(Math.random() * list.length)];
}

export type PlanOptions = {
  /** First spin of a show, or a rescue after a dry streak. */
  forceWin: boolean;
  lossStreak: number;
};

type PlanKind = 'jackpot' | 'triple' | 'pair' | 'loss';

function decideKind(opts: PlanOptions): PlanKind {
  if (opts.forceWin) {
    return 'triple';
  }
  if (Math.random() < JACKPOT_CHANCE) {
    return 'jackpot';
  }
  const rescued = opts.lossStreak >= LOSS_STREAK_RESCUE;
  if (rescued || Math.random() < PLANNED_WIN_CHANCE) {
    return Math.random() < PAIR_WIN_SHARE ? 'pair' : 'triple';
  }
  return 'loss';
}

/** A resting index that puts `key` on the centre row of this strip. */
function landOn(strip: SymbolDef[], key: string): number {
  const options = landsShowing(strip, key);
  return options.length > 0
    ? randomOf(options)
    : Math.floor(Math.random() * STRIP_LEN);
}

/**
 * Picks where each reel comes to rest. The outcome is decided BEFORE the
 * animation, then the reels are driven onto it — the reels never disagree
 * with the payout.
 */
export function planSpin(strips: SymbolDef[][], opts: PlanOptions): number[] {
  const kind = decideKind(opts);

  if (kind === 'jackpot') {
    return strips.map(strip => landOn(strip, 'joker'));
  }

  if (kind === 'triple') {
    const target = pickPlanTarget();
    return strips.map(strip => landOn(strip, target.key));
  }

  if (kind === 'pair') {
    // Two of a kind pays on the two leftmost reels only. The third reel must
    // NOT be a wild, or it would silently upgrade the line to a triple.
    const target = pickPlanTarget();
    const other = pickPlanTarget(target.key);
    return [
      landOn(strips[0], target.key),
      landOn(strips[1], target.key),
      landOn(strips[2], other.key),
    ];
  }

  // A loss is drawn uniformly and re-rolled until no pay line pays at all.
  for (let attempt = 0; attempt < 8; attempt++) {
    const lands = strips.map(() => Math.floor(Math.random() * STRIP_LEN));
    if (evaluate(gridFor(strips, lands), 1).totalWin === 0) {
      return lands;
    }
  }
  return strips.map(() => Math.floor(Math.random() * STRIP_LEN));
}

/** Rest position used before the very first spin of a session. */
export function initialLands(): number[] {
  const lands: number[] = [];
  for (let r = 0; r < REELS; r++) {
    lands.push(Math.floor(Math.random() * STRIP_LEN));
  }
  return lands;
}

/** Static paytable rows for the rules panel. */
export const PAYTABLE = SYMBOLS.slice()
  .sort((a, b) => b.payout - a.payout)
  .map(s => ({
    key: s.key,
    name: s.name,
    asset: s.asset,
    tintColor: s.tintColor,
    three: s.payout,
    two: s.payout2,
    isWild: !!s.isWild,
  }));
