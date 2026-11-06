/**
 * RoyalJokeReels theme — preset CASINO_GOLD with the brief accent overrides.
 * The `name` field must stay exactly 'CASINO_GOLD' (workspace rule #11b).
 * No `as const`: gradient arrays must stay mutable `string[]` for LinearGradient.
 */
export const THEME = {
  name: 'CASINO_GOLD',

  bg: '#250B12',
  bgDeep: '#12040A',
  surface: '#1A060C',
  surfaceAlt: '#3A0F1B',

  primary: '#B21E35',
  primaryBright: '#D9304C',
  primaryDeep: '#7E1326',

  accent: '#F4C95D',
  accentDeep: '#A97C1E',
  accentMid: '#D9A93F',

  secondary: '#6D28D9',

  text: '#FFF5E6',
  textMuted: '#C9A8AE',
  textDim: '#8E6B72',
  textFaint: '#7A5A60',

  hairline: 'rgba(255,245,230,0.08)',
  glass: 'rgba(255,245,230,0.06)',
  glassBorder: 'rgba(244,201,93,0.26)',
  goldBorder: 'rgba(244,201,93,0.42)',
  scrim: 'rgba(10,3,6,0.62)',
};

type GradientMap = {[key: string]: string[]};

export const GRADIENTS: GradientMap = {
  loader: ['rgba(14,4,8,0.88)', 'rgba(37,11,18,0.92)', 'rgba(10,3,6,0.96)'],
  menuScrim: ['transparent', 'rgba(37,11,18,0.35)', '#250B12'],
  gameScrim: ['rgba(37,11,18,0.72)', 'rgba(10,3,6,0.86)'],
  result: ['#4A0F1E', '#250B12', '#12040A'],
  crimson: ['#D9304C', '#B21E35', '#7E1326'],
  gold: ['#F4C95D', '#D9A93F', '#A97C1E'],
  progress: ['#B21E35', '#F4C95D'],
  sheen: ['rgba(255,245,230,0.22)', 'rgba(255,245,230,0.0)'],
  vignette: ['rgba(0,0,0,0.0)', 'rgba(0,0,0,0.14)'],
};
