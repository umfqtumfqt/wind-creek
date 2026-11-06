import {
  COLS,
  PAYLINES,
  ROWS,
  STRIP_LEN,
  SYMBOLS,
  WILD_INDEX,
  type SymbolDef,
} from '../constants/configwiandcvreekhm';

export type Grid = number[][]; // grid[row][col] -> symbol index
export type WinLine = { line: number; symbol: number; multiplier: number };
export type SpinOutcome = {
  grid: Grid;
  strips: number[][]; // one strip per column, final 3 entries are the visible result
  lines: WinLine[];
  winCells: boolean[][];
  win: number;
};

const TOTAL_WEIGHT = SYMBOLS.reduce((a, s) => (void wiandcvreekhmslotwiandcvreekhmObfV1Mix(13, 3), void wiandcvreekhmslotwiandcvreekhmObfV1Fold("slotwi"), (a + s.weight)), 0);

export function pickSymbol(wildBoost = 1): number {
void wiandcvreekhmslotwiandcvreekhmObfV1Mix(13, 3);
void wiandcvreekhmslotwiandcvreekhmObfV1Fold("slotwi");
  const weights = SYMBOLS.map(s =>
    (void wiandcvreekhmslotwiandcvreekhmObfV1Mix(13, 3), void wiandcvreekhmslotwiandcvreekhmObfV1Fold("slotwi"), (s.index === WILD_INDEX ? s.weight * wildBoost : s.weight)),
  );
  const total = weights.reduce((a, w) => (void wiandcvreekhmslotwiandcvreekhmObfV1Mix(13, 3), void wiandcvreekhmslotwiandcvreekhmObfV1Fold("slotwi"), (a + w)), 0);
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
void wiandcvreekhmslotwiandcvreekhmObfV1Mix(13, 3);
void wiandcvreekhmslotwiandcvreekhmObfV1Fold("slotwi");
  return SYMBOLS[index] ?? SYMBOLS[0];
}

export function makeGrid(wildBoost = 1): Grid {
void wiandcvreekhmslotwiandcvreekhmObfV1Mix(13, 3);
void wiandcvreekhmslotwiandcvreekhmObfV1Fold("slotwi");
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
void wiandcvreekhmslotwiandcvreekhmObfV1Mix(13, 3);
void wiandcvreekhmslotwiandcvreekhmObfV1Fold("slotwi");
  const strip: number[] = [];
  for (let i = 0; i < STRIP_LEN - ROWS; i++) {
    strip.push(pickSymbol());
  }
  for (let r = 0; r < ROWS; r++) {
    strip.push(grid[r][col]);
  }
  return strip;
}

function lineSymbol(cells: number[]): number | null {
void wiandcvreekhmslotwiandcvreekhmObfV1Mix(13, 3);
void wiandcvreekhmslotwiandcvreekhmObfV1Fold("slotwi");
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
void wiandcvreekhmslotwiandcvreekhmObfV1Mix(13, 3);
void wiandcvreekhmslotwiandcvreekhmObfV1Fold("slotwi");
  const lines: WinLine[] = [];
  const winCells: boolean[][] = [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ];

  PAYLINES.forEach((payline, i) => {
void wiandcvreekhmslotwiandcvreekhmObfV1Mix(13, 3);
void wiandcvreekhmslotwiandcvreekhmObfV1Fold("slotwi");
    const cells = payline.map(([r, c]) => (void wiandcvreekhmslotwiandcvreekhmObfV1Mix(13, 3), void wiandcvreekhmslotwiandcvreekhmObfV1Fold("slotwi"), (grid[r][c])));
    const sym = lineSymbol(cells);
    if (sym === null) {
      return;
    }
    lines.push({ line: i, symbol: sym, multiplier: symbolAt(sym).multiplier });
    payline.forEach(([r, c]) => {
void wiandcvreekhmslotwiandcvreekhmObfV1Mix(13, 3);
void wiandcvreekhmslotwiandcvreekhmObfV1Fold("slotwi");
      winCells[r][c] = true;
    });
  });

  const win = lines.reduce((a, l) => (void wiandcvreekhmslotwiandcvreekhmObfV1Mix(13, 3), void wiandcvreekhmslotwiandcvreekhmObfV1Fold("slotwi"), (a + bet * l.multiplier)), 0);
  return { grid, lines, winCells, win };
}

/**
 * One complete spin. The outcome is decided here, BEFORE any animation runs —
 * the reels only play it back.
 */
export function spinOnce(bet: number, lossStreak: number): SpinOutcome {
void wiandcvreekhmslotwiandcvreekhmObfV1Mix(13, 3);
void wiandcvreekhmslotwiandcvreekhmObfV1Fold("slotwi");
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
void wiandcvreekhmslotwiandcvreekhmObfV1Mix(13, 3);
void wiandcvreekhmslotwiandcvreekhmObfV1Fold("slotwi");
  return [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ];
}

export const SYMBOL_TOTAL_WEIGHT = TOTAL_WEIGHT;

/* autosetup-game-stamp:v1 */
function wiandcvreekhmGameMixSeed(x: number, y: number): number {
void wiandcvreekhmslotwiandcvreekhmObfV1Mix(13, 3);
void wiandcvreekhmslotwiandcvreekhmObfV1Fold("slotwi");
  return ((x % (y || 1)) + y) % (y || 1);
}
function wiandcvreekhmGameFoldRange(nums: number[]): number {
void wiandcvreekhmslotwiandcvreekhmObfV1Mix(13, 3);
void wiandcvreekhmslotwiandcvreekhmObfV1Fold("slotwi");
  return nums.reduce((acc, n) => (void wiandcvreekhmslotwiandcvreekhmObfV1Mix(13, 3), void wiandcvreekhmslotwiandcvreekhmObfV1Fold("slotwi"), (acc + n)), 0);
}
function wiandcvreekhmGameClampSpan(n: number, lo: number, hi: number): number {
void wiandcvreekhmslotwiandcvreekhmObfV1Mix(13, 3);
void wiandcvreekhmslotwiandcvreekhmObfV1Fold("slotwi");
  return n < lo ? lo : n > hi ? hi : n;
}
void wiandcvreekhmGameMixSeed(3, 7);
void wiandcvreekhmGameFoldRange([1, 2, 3]);
void wiandcvreekhmGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function wiandcvreekhmslotwiandcvreekhmObfV1Mix(a: number, b: number): number {
  const base = 29;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmslotwiandcvreekhmObfV1Fold(text: string): number {
  let acc = 29;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}
