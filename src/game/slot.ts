import {
  COLS,
  PAYLINES,
  ROWS,
  STRIP_LEN,
  SYMBOLS,
  WILD_INDEX,
  type SymbolDef,
} from '../constants/config';

export type Grid = number[][]; // grid[row][col] -> symbol index
export type WinLine = { line: number; symbol: number; multiplier: number };
export type SpinOutcome = {
  grid: Grid;
  strips: number[][]; // one strip per column, final 3 entries are the visible result
  lines: WinLine[];
  winCells: boolean[][];
  win: number;
};

const TOTAL_WEIGHT = SYMBOLS.reduce((a, s) => a + s.weight, 0);

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

function lineSymbol(cells: number[]): number | null {
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
    const sym = lineSymbol(cells);
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

export const SYMBOL_TOTAL_WEIGHT = TOTAL_WEIGHT;
