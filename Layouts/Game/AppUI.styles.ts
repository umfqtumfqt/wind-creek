/* @app-slot:game */
import { StyleSheet } from 'react-native';
import { BOARD_H, BOARD_W, BORDER, COLS, PAD, ROWS, TILE, theme} from './AppResources';

// ------ BetChipRow ------
export const styles_BetChipRow = StyleSheet.create({
  row: { flexDirection: 'row', gap: 8 },
  rowDisabled: { opacity: 0.5 },
  chip: {
    flex: 1,
    height: 44,
    borderRadius: theme.radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderWidth: 1.5,
    borderColor: 'rgba(212,175,55,0.20)',
  },
  chipOn: {
    backgroundColor: 'rgba(212,175,55,0.16)',
    borderColor: theme.colors.gold.light,
  },
  text: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 18,
    color: theme.colors.text.secondary,
    fontVariant: ['tabular-nums'],
  },
  textOn: { color: theme.colors.gold.light, fontWeight: '800' },
});

// ------ CabinetCard ------
export const styles_CabinetCard = StyleSheet.create({
  shell: {
    width: '100%',
    height: '100%',
    borderRadius: theme.radius.xxl,
    backgroundColor: theme.colors.bg.raised,
    borderWidth: 1,
    borderColor: theme.colors.line.brass,
    ...theme.shadow.card,
  },
  shellOn: { borderColor: theme.colors.gold.light },
  inner: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: theme.radius.xxl,
    overflow: 'hidden',
  },
  gloss: {
    position: 'absolute',
    top: 0,
    left: 12,
    right: 12,
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.12)',
  },
  accent: {
    position: 'absolute',
    left: 0,
    top: 14,
    bottom: 14,
    width: 3,
    borderRadius: 2,
    backgroundColor: theme.colors.gold.primary,
  },
  sprite: { width: 56, height: 56, resizeMode: 'contain', marginBottom: 8 },
  name: {
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 0.6,
    lineHeight: 17,
    color: theme.colors.gold.light,
  },
  tag: {
    marginTop: 2,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1.1,
    lineHeight: 12,
    color: theme.colors.text.muted,
  },
  chip: {
    marginTop: 8,
    height: 22,
    paddingHorizontal: 10,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(212,175,55,0.12)',
    borderWidth: 1,
    borderColor: theme.colors.line.brass,
  },
  chipText: {
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 1.2,
    lineHeight: 12,
    color: theme.colors.gold.light,
  },
});

// ------ CoinBadge ------
export const styles_CoinBadge = StyleSheet.create({
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 14,
    backgroundColor: 'rgba(20,20,24,0.82)',
    borderWidth: 1,
    borderColor: theme.colors.line.brassStrong,
  },
  value: {
    fontWeight: '800',
    color: theme.colors.gold.light,
    fontVariant: ['tabular-nums'],
  },
  unit: {
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1.6,
    color: theme.colors.text.muted,
  },
});

// ------ CollectionSlot ------
export const styles_CollectionSlot = StyleSheet.create({
  slot: {
    flex: 1,
    aspectRatio: 0.78,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: theme.radius.lg,
    backgroundColor: theme.colors.bg.raised,
    borderWidth: 1,
    borderColor: theme.colors.line.brass,
    overflow: 'hidden',
  },
  slotOn: { borderColor: 'rgba(46,125,91,0.65)' },
  sprite: { width: 40, height: 40, resizeMode: 'contain' },
  spriteLocked: { opacity: 0.22 },
  veil: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(11,11,15,0.35)',
  },
  badge: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderWidth: 1,
    borderColor: theme.colors.line.brass,
  },
  badgeOn: { borderColor: 'rgba(46,125,91,0.65)' },
  name: {
    marginTop: 8,
    fontSize: 7.5,
    fontWeight: '700',
    letterSpacing: 0.8,
    lineHeight: 10,
    color: theme.colors.text.muted,
    paddingHorizontal: 2,
  },
});

// ------ FloatingWin ------
export const styles_FloatingWin = StyleSheet.create({
  wrap: { alignItems: 'center', justifyContent: 'center' },
  text: {
    fontSize: 24,
    fontWeight: '900',
    letterSpacing: 1,
    lineHeight: 28,
    color: theme.colors.felt.light,
    textShadowColor: 'rgba(46,125,91,0.6)',
    textShadowRadius: 12,
    fontVariant: ['tabular-nums'],
  },
});

// ------ FreePlayBadge ------
export const styles_FreePlayBadge = StyleSheet.create({
  pill: {
    height: 26,
    alignSelf: 'center',
    paddingHorizontal: 12,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(46,125,91,0.16)',
    borderWidth: 1,
    borderColor: 'rgba(46,125,91,0.45)',
  },
  compact: { height: 22, paddingHorizontal: 9, borderRadius: 11 },
  text: {
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1.4,
    color: theme.colors.felt.light,
    lineHeight: 12,
  },
  textCompact: { fontSize: 8, letterSpacing: 1.1 },
});

// ------ GhostButton ------
const ICON_SIZE = 24;
const ICON_GAP = 10;
export const styles_GhostButton = StyleSheet.create({
  shell: {
    width: '100%',
    borderRadius: theme.radius.lg,
    borderWidth: 1,
    backgroundColor: 'rgba(255,255,255,0.05)',
  },
  row: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: ICON_GAP,
    paddingHorizontal: 12,
  },
  label: {
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 1.4,
    lineHeight: ICON_SIZE,
  },
});

// ------ GoldButton ------
export const styles_GoldButton = StyleSheet.create({
  shell: {
    width: '100%',
    borderRadius: theme.radius.xl,
  },
  fill: {
    width: '100%',
    height: '100%',
    borderRadius: theme.radius.xl,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gloss: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.45)',
  },
  shade: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: ICON_GAP,
    paddingHorizontal: 18,
  },
  label: {
    fontWeight: '900',
    letterSpacing: 2,
    lineHeight: ICON_SIZE,
  },
});

// ------ IconButton ------
export const styles_IconButton = StyleSheet.create({
  shell: {
    backgroundColor: 'rgba(20,20,24,0.82)',
    borderWidth: 1,
    borderColor: theme.colors.line.brassStrong,
  },
  center: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: { width: 24, height: 24, resizeMode: 'contain' },
  dot: {
    position: 'absolute',
    top: 5,
    right: 5,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.colors.felt.primary,
  },
});

// ------ InfoRow ------
export const styles_InfoRow = StyleSheet.create({
  row: {
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.line.neutral,
  },
  last: { borderBottomWidth: 0 },
  label: {
    flex: 1,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.4,
    lineHeight: ICON_SIZE,
    color: theme.colors.text.secondary,
  },
  value: {
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 1,
    lineHeight: ICON_SIZE,
    color: theme.colors.gold.light,
    fontVariant: ['tabular-nums'],
  },
});

// ------ PaytableStrip ------
export const styles_PaytableStrip = StyleSheet.create({
  wrap: {
    width: '100%',
    borderRadius: theme.radius.lg,
    backgroundColor: theme.colors.bg.raised,
    borderWidth: 1,
    borderColor: theme.colors.line.brass,
    paddingVertical: 14,
    paddingHorizontal: 10,
  },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  slot: { flex: 1, alignItems: 'center' },
  sprite: { width: 36, height: 36, resizeMode: 'contain' },
  mult: {
    marginTop: 6,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 0.6,
    lineHeight: 15,
    color: theme.colors.gold.light,
  },
  footer: {
    marginTop: 12,
    textAlign: 'center',
    fontSize: 8,
    fontWeight: '700',
    letterSpacing: 1.2,
    lineHeight: 11,
    color: theme.colors.text.disabled,
  },
});

// ------ ProgressBar ------
export const styles_ProgressBar = StyleSheet.create({
  track: {
    overflow: 'hidden',
    backgroundColor: 'rgba(255,255,255,0.07)',
    borderWidth: 1,
    borderColor: 'rgba(212,175,55,0.18)',
  },
});

// ------ Reel ------
export const styles_Reel = StyleSheet.create({
  window: {
    width: TILE,
    height: TILE * ROWS,
    overflow: 'hidden',
  },
  cell: {
    width: TILE,
    height: TILE,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#16161C',
  },
  sprite: {
    width: TILE - 20,
    height: TILE - 20,
    resizeMode: 'contain',
  },
  divider: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 1,
    backgroundColor: theme.colors.line.brass,
  },
});

// ------ ScreenHeader ------
export const styles_ScreenHeader = StyleSheet.create({
  root: {
    height: 116,
    paddingTop: 44,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0,0,0,0.34)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(212,175,55,0.24)',
  },
  side: { minWidth: 44, alignItems: 'flex-start', justifyContent: 'center' },
  sideRight: { alignItems: 'flex-end' },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 8 },
  title: {
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 2.4,
    lineHeight: 18,
    color: theme.colors.gold.light,
  },
  subtitle: {
    marginTop: 2,
    fontSize: 8,
    fontWeight: '700',
    letterSpacing: 1.6,
    lineHeight: 11,
    color: theme.colors.felt.light,
  },
});

// ------ ScreenShell ------
export const styles_ScreenShell = StyleSheet.create({
  root: { flex: 1, backgroundColor: theme.colors.bg.deep },
  content: { flex: 1 },
});

// ------ SlotBoard ------
export const styles_SlotBoard = StyleSheet.create({
  wrap: { width: BOARD_W, height: BOARD_H, alignSelf: 'center' },
  frame: {
    width: BOARD_W,
    height: BOARD_H,
    padding: PAD,
    borderWidth: BORDER,
    borderColor: theme.colors.gold.primary,
    borderRadius: 18,
    ...theme.shadow.cabinet,
  },
  frameFill: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 15,
  },
  bezelGloss: {
    position: 'absolute',
    top: 0,
    left: 10,
    right: 10,
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.10)',
  },
  reels: {
    width: TILE * COLS,
    height: TILE * ROWS,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
  },
  winCell: {
    position: 'absolute',
    width: TILE,
    height: TILE,
    borderWidth: 3,
    borderColor: theme.colors.gold.light,
    backgroundColor: 'rgba(245,215,122,0.18)',
    borderRadius: 8,
  },
  lamp: {
    position: 'absolute',
    top: (BOARD_H - 48) / 2,
    width: 10,
    height: 48,
    borderRadius: 5,
    overflow: 'hidden',
  },
  lampFill: { width: '100%', height: '100%' },
});

// ------ StatCard ------
export const styles_StatCard = StyleSheet.create({
  card: {
    width: '100%',
    paddingVertical: 14,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.radius.lg,
    backgroundColor: theme.colors.bg.raised,
    borderWidth: 1,
    borderColor: theme.colors.line.brass,
    ...theme.shadow.card,
  },
  iconWrap: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    marginBottom: 8,
  },
  value: {
    fontSize: 17,
    fontWeight: '800',
    letterSpacing: 0.4,
    lineHeight: 22,
    fontVariant: ['tabular-nums'],
  },
  label: {
    marginTop: 2,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1.4,
    lineHeight: 12,
    color: theme.colors.text.muted,
  },
});

// ------ StatsRow ------
export const styles_StatsRow = StyleSheet.create({
  row: { flexDirection: 'row', gap: 12, alignItems: 'stretch' },
  slot: { flex: 1 },
});

// ------ ToggleRow ------
export const styles_ToggleRow = StyleSheet.create({
  row: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 16,
    borderRadius: theme.radius.lg,
    backgroundColor: theme.colors.bg.raised,
    borderWidth: 1,
    borderColor: theme.colors.line.brass,
  },
  label: {
    flex: 1,
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 1.4,
    lineHeight: ICON_SIZE,
    color: theme.colors.text.secondary,
  },
  track: {
    width: 52,
    height: 30,
    borderRadius: 15,
    padding: 3,
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderWidth: 1,
    borderColor: theme.colors.line.brass,
  },
  trackOn: { backgroundColor: 'rgba(212,175,55,0.35)' },
  knob: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: theme.colors.gold.light,
  },
});

/* autopad-begin */
function zuzizi(_mojiki: string, _qijenolozi: string, _demitivare: boolean): string {
  const eledaf = 49;
  const lucovicona: string = "acod";
  return lucovicona;
}
function eyafucepuzo(): boolean {
  return false;
}
function rayovugas(_sacoxi: boolean, _daxusi: boolean, _esesunayeb: number): void {}
function igutuw(_evoyewe: string, _ifujisoqunac: boolean): void {
  const xuvojugevef: boolean = false;
}
function evevequj(_vinopuxagaru: string, _alixus: number, _tepere: string): boolean {
  const izateyufaju = 56;
  const mokanoqek: boolean = false;
  return mokanoqek;
}
function mosunopiwej(_aqojagit: number): void {}
function asiqekeme(_uzibuyo: string): void {}
function elazubub(_neceqagikeqa: boolean, _edavojusawis: number, _datazanaziqi: number): string {
  const iralakud = 90;
  const iqabikawu: string = "sim";
  return iqabikawu;
}
function joduzerifem(): void {
  const awewuzu = 78;
  if (awewuzu > 73) return;
}
function vimemutuvewo(_lijiye: number): void {
  const ajigul: boolean = true;
}
function buquzanuros(): number {
  return 17;
}
function olilipejateq(_secizoto: number): string {
  const vejaminaga = 56;
  return vejaminaga > 52 ? "bubog" : "ajekum";
}
function ucoqayo(): string {
  const sodisuyopix = 84;
  const xuvoqaduwit: string = "ulib";
  return xuvoqaduwit;
}
function divotoqep(_uberozu: number): void {
  const woquvadaror: boolean = true;
}
/* autopad-end */
