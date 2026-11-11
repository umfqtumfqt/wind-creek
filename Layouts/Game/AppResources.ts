/* @app-slot:game */
import { Dimensions } from 'react-native';

// ------ config ------
export const { width: SCREEN_W, height: SCREEN_H } = Dimensions.get('window');

/** Loader must stay on screen long enough for the capture window. */
export const LOADER_DURATION_MS = 8000;

/** One session = this many spins, then GameOverScreen. */
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

/** Reel geometry — overflow-safe by construction. */
export const COLS = 3;
export const ROWS = 3;
export const PAD = 6;
export const BORDER = 2;
export const BOARD_FRAME = PAD + BORDER;
export const BOARD_MAX_W = Math.min(SCREEN_W - 32, 380);

/** Chrome the GameScreen reserves above/below the cabinet (header + strip + panel). */
export const GAME_CHROME_H = 116 + 50 + 204 + 54;
const BOARD_MAX_H_config = SCREEN_H - GAME_CHROME_H;

const TILE_FROM_W_config = Math.floor((BOARD_MAX_W - 2 * BOARD_FRAME) / COLS);
const TILE_FROM_H_config = Math.floor((BOARD_MAX_H_config - 2 * BOARD_FRAME) / ROWS);

/** Never taller than the space that actually exists -> overflow is impossible. */
export const TILE = Math.max(56, Math.min(TILE_FROM_W_config, TILE_FROM_H_config));
export const BOARD_W = TILE * COLS + 2 * BOARD_FRAME;
export const BOARD_H = TILE * ROWS + 2 * BOARD_FRAME;

/** Reel strip length; the final 3 cells are always the settled result. */
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

// ------ theme ------
export const theme = {
  name: 'CASINO_GOLD',

  colors: {
    bg: {
      deep: '#0B0B0F',
      surface: '#141418',
      raised: '#1C1C24',
      warm: '#1E1A14',
    },
    gold: {
      primary: '#D4AF37',
      light: '#F5D77A',
      dark: '#A8842A',
      deep: '#17140C',
    },
    felt: {
      primary: '#2E7D5B',
      light: '#7FD0A8',
    },
    negative: '#C9847A',
    text: {
      primary: '#FFFFFF',
      secondary: '#C9C4B8',
      muted: '#8A8578',
      disabled: '#6F6A5E',
    },
    line: {
      brass: 'rgba(212,175,55,0.22)',
      brassStrong: 'rgba(212,175,55,0.42)',
      neutral: 'rgba(255,255,255,0.07)',
      gloss: 'rgba(255,255,255,0.30)',
    },
  },

  gradients: {
    gold: ['#F5D77A', '#D4AF37', '#A8842A'],
    goldFlat: ['#D4AF37', '#F5D77A'],
    loader: ['#0B0B0F', '#12100C', '#000000'],
    menu: ['rgba(11,11,15,0.25)', 'rgba(11,11,15,0.55)', '#0B0B0F'],
    lobby: ['#0B0B0F', '#15120B', '#0B0B0F'],
    gameover: ['#0B0B0F', '#1E1A14', '#0B0B0F'],
    cabinet: ['#1E1A14', '#141418'],
    lamp: ['#F5D77A', '#8A6A1E'],
  },

  radius: { sm: 8, md: 12, lg: 14, xl: 18, xxl: 20, sheet: 28, pill: 999 },

  spacing: { xs: 4, sm: 8, md: 12, lg: 16, xl: 20, xxl: 28 },

  type: {
    hero: { fontSize: 36, fontWeight: '900' as const, letterSpacing: 4 },
    title: { fontSize: 25, fontWeight: '800' as const, letterSpacing: 2 },
    section: { fontSize: 14, fontWeight: '800' as const, letterSpacing: 2.4 },
    body: { fontSize: 15, fontWeight: '600' as const },
    caption: { fontSize: 11, fontWeight: '700' as const, letterSpacing: 1.6 },
    micro: { fontSize: 9, fontWeight: '700' as const, letterSpacing: 1.4 },
    number: {
      fontSize: 20,
      fontWeight: '800' as const,
      fontVariant: ['tabular-nums'] as const,
    },
  },

  shadow: {
    card: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.5,
      shadowRadius: 12,
      elevation: 8,
    },
    panel: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: -8 },
      shadowOpacity: 0.6,
      shadowRadius: 24,
      elevation: 14,
    },
    gold: {
      shadowColor: '#D4AF37',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.42,
      shadowRadius: 18,
      elevation: 12,
    },
    cabinet: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.65,
      shadowRadius: 20,
      elevation: 16,
    },
  },

  anim: {
    press: { tension: 300, friction: 12 },
    entrance: { tension: 44, friction: 8 },
    pop: { tension: 40, friction: 7 },
    fadeIn: 220,
    fadeOut: 260,
  },
} as const;

export type Theme = typeof theme;
// (bundled: theme default was theme)

/* autopad-begin */
function uyenezupo(_venezamoki: number, _qijifiwe: boolean): number {
  const buxoga = 89;
  const ulamaviroco: number = 200;
  return ulamaviroco;
}
function qareyu(_lekewequce: number): number {
  const egawuvoqole: number = 202;
  return egawuvoqole;
}
function nunaqan(_esilutewamek: string, _egidenoniti: string): boolean {
  const etetafiq = 17;
  const ciguno: boolean = true;
  return ciguno;
}
function otonipexirex(): number {
  const fokiqozotik: number = 218;
  return fokiqozotik;
}
function ponipe(_babutapeteke: string): boolean {
  const alokowufex = 66;
  const eloyavedewi: boolean = true;
  return eloyavedewi;
}
function cipuvujofuje(_eticuc: boolean, _bikowoqeru: boolean, _eqoqumuxibat: string): number {
  return 21;
}
function regoledanev(): void {}
function idunoki(_aqugozo: string, _dowariwazu: string): string {
  const azokezov = 13;
  const susuyirudi: string = "ediy";
  return susuyirudi;
}
function akuyosegibur(_fusitijenej: boolean): boolean { return true; }
function opavileriyay(_avokucice: boolean): string {
  const rejanupir = 24;
  const ibubegipukiq: string = "yus";
  return ibubegipukiq;
}
function regepuyuxaj(): void {
  const wejumequx: boolean = true;
}
/* autopad-end */
