/**
 * CASINO_GOLD — skeuomorphic brass / dark-felt palette.
 */
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
export default theme;
