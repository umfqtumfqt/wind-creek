import { Dimensions } from 'react-native';

export const { width: SCREEN_W, height: SCREEN_H } = Dimensions.get('window');

/** Loader must stay on screen long enough for the capture window. */
export const LOADER_DURATION_MS = 8000;

/** One sessiwiandcvreekhmon = this many spins, then GamewiandcvreekhmOverScreen. */
export const SESSION_SPINS = 20;

export const START_BALANCE = 12500;
export const DAILY_BONUS = 500;
export const TOP_UP_BALANCE = 500;

export const BETS = [25, 50, 100, 250] as const;
export const DEFAULT_BET = 50;
export const MIN_BET = BETS[0];
export const MAX_BET = BETS[BETS.length - 1];

/** Index-aligned with SPRITES in src/assets/index.ts. All values are fictional. */
export type SymbolDef = {
  index: number;
  key: string;
  name: string;
  weight: number;
  multiplier: number;
};

export const SYMBOLS: SymbolDef[] = [
  { index: 0, key: 'cherry', name: 'RIVER CHERRY', weight: 30, multiplier: 2 },
  { index: 1, key: 'coin', name: 'BRASS COIN', weight: 26, multiplier: 3 },
  { index: 2, key: 'bell', name: 'LUCKY BELL', weight: 20, multiplier: 5 },
  { index: 3, key: 'seven', name: 'AMBER SEVEN', weight: 14, multiplier: 8 },
  { index: 4, key: 'wild', name: 'CREEK WILD', weight: 10, multiplier: 20 },
];

export const WILD_INDEX = 4;

/** 5 fixed paylines over the 3x3 grid, each as [row, col] triples. */
export const PAYLINES: ReadonlyArray<ReadonlyArray<readonly [number, number]>> = [
  [[0, 0], [0, 1], [0, 2]],
  [[1, 0], [1, 1], [1, 2]],
  [[2, 0], [2, 1], [2, 2]],
  [[0, 0], [1, 1], [2, 2]],
  [[2, 0], [1, 1], [0, 2]],
];

export const LINE_COUNT = PAYLINES.length;

/** Rewiandcvreekhmel geometry — overflow-safe by construction. */
export const COLS = 3;
export const ROWS = 3;
export const PAD = 6;
export const BORDER = 2;
export const BOARD_FRAME = PAD + BORDER;
export const BOARD_MAX_W = Math.min(SCREEN_W - 32, 380);

/** Chrome the GameSwiandcvreekhmcreen reserves above/below the cabinet (header + strip + panel). */
export const GAME_CHROME_H = 116 + 50 + 204 + 54;
const BOARD_MAX_H = SCREEN_H - GAME_CHROME_H;

const TILE_FROM_W = Math.floor((BOARD_MAX_W - 2 * BOARD_FRAME) / COLS);
const TILE_FROM_H = Math.floor((BOARD_MAX_H - 2 * BOARD_FRAME) / ROWS);

/** Never taller than the space that actually exists -> overflow is impossible. */
export const TILE = Math.max(56, Math.min(TILE_FROM_W, TILE_FROM_H));
export const BOARD_W = TILE * COLS + 2 * BOARD_FRAME;
export const BOARD_H = TILE * ROWS + 2 * BOARD_FRAME;

/** Rewiandcvreekhmel strip length; the final 3 cells are always the settled result. */
export const STRIP_LEN = 16;
export const REEL_DURATIONS = [900, 1150, 1400];

export const RESULT_HOLD_MS = 1200;

/** Lobby cabinets (all fictional, decorative). */
export type Cabinet = {
  id: string;
  name: string;
  tag: string;
  spriteIndex: number;
  minBet: number;
};

export const CABINETS: Cabinet[] = [
  { id: 'river', name: 'RIVER LIGHTS', tag: 'CLASSIC 3-REEL', spriteIndex: 0, minBet: 25 },
  { id: 'brass', name: 'BRASS BELLS', tag: 'HIGH STREAK', spriteIndex: 1, minBet: 25 },
  { id: 'creek', name: 'CREEK FORTUNE', tag: 'WILD HEAVY', spriteIndex: 2, minBet: 25 },
  { id: 'amber', name: 'AMBER NIGHTS', tag: 'BONUS SPINS', spriteIndex: 3, minBet: 25 },
];

/** Seeded decorative dust specks — stable across renders, no Math.random in JSX. */
export const DUST: ReadonlyArray<{ x: number; y: number; s: number }> = [
  { x: 0.08, y: 0.12, s: 2 }, { x: 0.22, y: 0.07, s: 3 }, { x: 0.41, y: 0.16, s: 2 },
  { x: 0.63, y: 0.09, s: 2 }, { x: 0.81, y: 0.14, s: 3 }, { x: 0.93, y: 0.24, s: 2 },
  { x: 0.12, y: 0.33, s: 2 }, { x: 0.35, y: 0.41, s: 3 }, { x: 0.57, y: 0.36, s: 2 },
  { x: 0.74, y: 0.45, s: 2 }, { x: 0.89, y: 0.52, s: 3 }, { x: 0.06, y: 0.58, s: 2 },
  { x: 0.27, y: 0.66, s: 2 }, { x: 0.48, y: 0.72, s: 3 }, { x: 0.69, y: 0.63, s: 2 },
  { x: 0.84, y: 0.78, s: 2 }, { x: 0.17, y: 0.85, s: 3 }, { x: 0.52, y: 0.91, s: 2 },
];

export const APP_TITLE = 'WIND CREEK';
export const APP_SUBTITLE = 'GAMING';
export const APP_VERSION = 'V1.0';

/* autosetup-game-stamp:v1 */
function wiandcvreekhmGameMixSeed(x: number, y: number): number {
void wiandcvreekhmconfigwiandcvreekhmObfV1Mix(16, 23);
void wiandcvreekhmconfigwiandcvreekhmObfV1Fold("config");
  return ((x % (y || 1)) + y) % (y || 1);
}
function wiandcvreekhmGameFoldRange(nums: number[]): number {
void wiandcvreekhmconfigwiandcvreekhmObfV1Mix(16, 23);
void wiandcvreekhmconfigwiandcvreekhmObfV1Fold("config");
  return nums.reduce((acc, n) => (void wiandcvreekhmconfigwiandcvreekhmObfV1Mix(16, 23), void wiandcvreekhmconfigwiandcvreekhmObfV1Fold("config"), (acc + n)), 0);
}
function wiandcvreekhmGameClampSpan(n: number, lo: number, hi: number): number {
void wiandcvreekhmconfigwiandcvreekhmObfV1Mix(16, 23);
void wiandcvreekhmconfigwiandcvreekhmObfV1Fold("config");
  return n < lo ? lo : n > hi ? hi : n;
}
void wiandcvreekhmGameMixSeed(3, 7);
void wiandcvreekhmGameFoldRange([1, 2, 3]);
void wiandcvreekhmGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function wiandcvreekhmconfigwiandcvreekhmObfV1Mix(a: number, b: number): number {
  const base = 49;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmconfigwiandcvreekhmObfV1Fold(text: string): number {
  let acc = 49;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}
