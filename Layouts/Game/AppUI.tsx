/* @app-slot:game */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Animated, Easing, Image, Pressable, StyleSheet, Text, View, type ImageSourcePropType, type StyleProp, type ViewStyle } from 'react-native';
import { BOARD_H, BOARD_W, BORDER, COLS, DAILY_BONUS, DEFAULT_BET, DUST, MIN_BET, PAD, REEL_DURATIONS, RESULT_HOLD_MS, ROWS, SCREEN_H, SCREEN_W, SESSION_SPINS, STRIP_LEN, SYMBOLS, TILE, TOP_UP_BALANCE, theme } from './AppResources';

import type { Cabinet } from './AppResources';
import { Check, Coins, Lock } from 'lucide-react-native';
import type { LucideIcon } from 'lucide-react-native';
import LinearGradient from 'react-native-linear-gradient';
import { buildStrip, emptyWinCells, makeGrid, spinOnce, store, assets, SPRITES, type Grid, type SpinOutcome } from './GameLogic';
import type { SessionResult } from './GameLogic';
import { styles_BetChipRow, styles_CabinetCard, styles_CoinBadge, styles_CollectionSlot, styles_FloatingWin, styles_FreePlayBadge, styles_GhostButton, styles_GoldButton, styles_IconButton, styles_InfoRow, styles_PaytableStrip, styles_ProgressBar, styles_Reel, styles_ScreenHeader, styles_ScreenShell, styles_SlotBoard, styles_StatCard, styles_StatsRow, styles_ToggleRow } from './AppUI.styles';

// ------ BetChipRow ------
const HIT_BetChipRow = { top: 8, bottom: 8, left: 8, right: 8 };

type Props_BetChipRow = {
  bets: readonly number[];
  active: number;
  onChange: (bet: number) => void;
  disabled?: boolean;
};

function BetChipRow_BetChipRow({ bets, active, onChange, disabled = false }: Props_BetChipRow) {
  return (
    <View style={[styles_BetChipRow.row, disabled ? styles_BetChipRow.rowDisabled : null]}>
      {bets.map(bet => {
        const on = bet === active;
        return (
          <Pressable
            key={'bet' + bet}
            accessibilityRole="button"
            accessibilityLabel={'Bet ' + bet + ' coins'}
            accessibilityState={{ selected: on, disabled }}
            hitSlop={HIT_BetChipRow}
            disabled={disabled}
            onPress={() => onChange(bet)}
            style={[styles_BetChipRow.chip, on ? styles_BetChipRow.chipOn : null]}>
            <Text style={[styles_BetChipRow.text, on ? styles_BetChipRow.textOn : null]}>{bet}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}


export const BetChipRow = React.memo(BetChipRow_BetChipRow);

// ------ CabinetCard ------
type Props_CabinetCard = { cabinet: Cabinet; selected: boolean; onPress: (id: string) => void };

function CabinetCard_CabinetCard({ cabinet, selected, onPress }: Props_CabinetCard) {
  return (
    <PressFX
      accessibilityLabel={cabinet.name + ' cabinet'}
      onPress={() => onPress(cabinet.id)}
      style={[styles_CabinetCard.shell, selected ? styles_CabinetCard.shellOn : null]}
      scaleTo={0.96}>
      <View style={styles_CabinetCard.inner}>
        <View pointerEvents="none" style={styles_CabinetCard.gloss} />
        {selected ? <View pointerEvents="none" style={styles_CabinetCard.accent} /> : null}
        <Image source={SPRITES[cabinet.spriteIndex]} style={styles_CabinetCard.sprite} />
        <Text numberOfLines={1} style={styles_CabinetCard.name}>
          {cabinet.name}
        </Text>
        <Text numberOfLines={1} style={styles_CabinetCard.tag}>
          {cabinet.tag}
        </Text>
        <View style={styles_CabinetCard.chip}>
          <Text style={styles_CabinetCard.chipText}>{'MIN ' + cabinet.minBet}</Text>
        </View>
      </View>
    </PressFX>
  );
}


export const CabinetCard = React.memo(CabinetCard_CabinetCard);

// ------ CoinBadge ------
type Props_CoinBadge = { value: number; compact?: boolean };

const STEPS_CoinBadge = 16;
const STEP_MS_CoinBadge = 38;

/** Brass pill with a 600ms count-up and a pop when the balance changes. */
function CoinBadge_CoinBadge({ value, compact = false }: Props_CoinBadge) {
  const [shown, setShown] = useState(value);
  const prevRef = useRef(value);
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const from = prevRef.current;
    prevRef.current = value;
    if (from === value) {
      return;
    }

    Animated.sequence([
      Animated.spring(scale, {
        toValue: 1.12,
        tension: 220,
        friction: 8,
        useNativeDriver: true,
      }),
      Animated.spring(scale, {
        toValue: 1,
        tension: 220,
        friction: 8,
        useNativeDriver: true,
      }),
    ]).start();

    let i = 0;
    const id = setInterval(() => {
      i += 1;
      if (i >= STEPS_CoinBadge) {
        clearInterval(id);
        setShown(value);
      } else {
        setShown(Math.round(from + (value - from) * (i / STEPS_CoinBadge)));
      }
    }, STEP_MS_CoinBadge);
    return () => clearInterval(id);
  }, [value, scale]);

  const height = compact ? 36 : 40;

  return (
    <Animated.View
      pointerEvents="box-none"
      style={[
        styles_CoinBadge.pill,
        { height, borderRadius: height / 2, transform: [{ scale }] },
      ]}>
      <Coins size={18} color={theme.colors.gold.light} strokeWidth={2.4} />
      <Text style={[styles_CoinBadge.value, { fontSize: compact ? 15 : 16 }]}>
        {formatCoins(shown)}
      </Text>
      <Text style={styles_CoinBadge.unit}>COINS</Text>
    </Animated.View>
  );
}


export const CoinBadge = React.memo(CoinBadge_CoinBadge);

// ------ CollectionSlot ------
type Props_CollectionSlot = { spriteIndex: number; collected: boolean; name: string };

function CollectionSlot_CollectionSlot({ spriteIndex, collected, name }: Props_CollectionSlot) {
  return (
    <View style={[styles_CollectionSlot.slot, collected ? styles_CollectionSlot.slotOn : null]}>
      <Image
        source={SPRITES[spriteIndex]}
        style={[styles_CollectionSlot.sprite, collected ? null : styles_CollectionSlot.spriteLocked]}
      />
      {collected ? null : <View pointerEvents="none" style={styles_CollectionSlot.veil} />}
      <View style={[styles_CollectionSlot.badge, collected ? styles_CollectionSlot.badgeOn : null]}>
        {collected ? (
          <Check size={14} color={theme.colors.felt.primary} strokeWidth={3} />
        ) : (
          <Lock size={12} color={theme.colors.text.disabled} strokeWidth={2.6} />
        )}
      </View>
      <Text numberOfLines={1} style={styles_CollectionSlot.name}>
        {name}
      </Text>
    </View>
  );
}


export const CollectionSlot = React.memo(CollectionSlot_CollectionSlot);

// ------ FloatingWin ------
type Props_FloatingWin = { amount: number; trigger: number };

/** The "+450" that rises off the cabinet. Opacity + translateY only. */
function FloatingWin_FloatingWin({ amount, trigger }: Props_FloatingWin) {
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (amount <= 0) {
      progress.setValue(0);
      return;
    }
    progress.setValue(0);
    const anim = Animated.timing(progress, {
      toValue: 1,
      duration: 900,
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
    });
    anim.start();
    return () => anim.stop();
  }, [trigger, amount, progress]);

  if (amount <= 0) {
    return null;
  }

  return (
    <Animated.View
      pointerEvents="none"
      style={[
        styles_FloatingWin.wrap,
        {
          opacity: progress.interpolate({
            inputRange: [0, 0.2, 0.75, 1],
            outputRange: [0, 1, 1, 0],
          }),
          transform: [
            {
              translateY: progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -28],
              }),
            },
          ],
        },
      ]}>
      <Text style={styles_FloatingWin.text}>{'+' + formatCoins(amount)}</Text>
    </Animated.View>
  );
}


export const FloatingWin = React.memo(FloatingWin_FloatingWin);

// ------ FreePlayBadge ------
function FreePlayBadge_FreePlayBadge({ compact = false }: { compact?: boolean }) {
  return (
    <View style={[styles_FreePlayBadge.pill, compact ? styles_FreePlayBadge.compact : null]}>
      <Text style={[styles_FreePlayBadge.text, compact ? styles_FreePlayBadge.textCompact : null]}>
        FREE PLAY · NO REAL MONEY
      </Text>
    </View>
  );
}


export const FreePlayBadge = React.memo(FreePlayBadge_FreePlayBadge);

// ------ GhostButton ------
type Props_GhostButton = {
  label: string;
  onPress: () => void;
  Icon?: LucideIcon;
  tone?: 'neutral' | 'danger' | 'felt';
  height?: number;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
};

function GhostButton_GhostButton({
  label,
  onPress,
  Icon,
  tone = 'neutral',
  height = 48,
  disabled = false,
  style,
}: Props_GhostButton) {
  const fg =
    tone === 'danger'
      ? theme.colors.negative
      : tone === 'felt'
      ? theme.colors.felt.light
      : '#E6DCC4';
  const border =
    tone === 'danger'
      ? 'rgba(201,132,122,0.45)'
      : tone === 'felt'
      ? 'rgba(46,125,91,0.45)'
      : theme.colors.line.brassStrong;

  return (
    <PressFX
      accessibilityLabel={label}
      onPress={onPress}
      disabled={disabled}
      style={[
        styles_GhostButton.shell,
        { height, borderColor: border, opacity: disabled ? 0.5 : 1 },
        style,
      ]}>
      <View style={styles_GhostButton.row}>
        {Icon ? <Icon size={ICON_SIZE} color={fg} strokeWidth={2.4} /> : null}
        <Text numberOfLines={1} style={[styles_GhostButton.label, { color: fg }]}>
          {label}
        </Text>
      </View>
    </PressFX>
  );
}


export const GhostButton = React.memo(GhostButton_GhostButton);

// ------ GoldButton ------
export const ICON_SIZE = 24;
export const ICON_GAP = 10;

type Props_GoldButton = {
  label: string;
  onPress: () => void;
  Icon?: LucideIcon;
  size?: 'primary' | 'secondary';
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
};

function GoldButton_GoldButton({
  label,
  onPress,
  Icon,
  size = 'primary',
  disabled = false,
  style,
}: Props_GoldButton) {
  const height = size === 'primary' ? 60 : 52;
  const fg = theme.colors.gold.deep;

  return (
    <PressFX
      accessibilityLabel={label}
      onPress={onPress}
      disabled={disabled}
      style={[
        styles_GoldButton.shell,
        theme.shadow.gold,
        { height, opacity: disabled ? 0.55 : 1 },
        style,
      ]}>
      <LinearGradient
        colors={[...theme.gradients.gold]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles_GoldButton.fill}>
        <View pointerEvents="none" style={styles_GoldButton.gloss} />
        <View pointerEvents="none" style={styles_GoldButton.shade} />
        <View style={styles_GoldButton.row}>
          {Icon ? <Icon size={ICON_SIZE} color={fg} strokeWidth={2.6} /> : null}
          <Text
            numberOfLines={1}
            style={[
              styles_GoldButton.label,
              { color: fg, fontSize: size === 'primary' ? 19 : 16 },
            ]}>
            {label}
          </Text>
        </View>
      </LinearGradient>
    </PressFX>
  );
}


export const GoldButton = React.memo(GoldButton_GoldButton);

// ------ IconButton ------
type Props_IconButton = {
  onPress: () => void;
  accessibilityLabel: string;
  Icon?: LucideIcon;
  image?: ImageSourcePropType;
  size?: number;
  dot?: boolean;
};

/** 40x40 machined brass disc used in every header. */
function IconButton_IconButton({
  onPress,
  accessibilityLabel,
  Icon,
  image,
  size = 40,
  dot = false,
}: Props_IconButton) {
  return (
    <PressFX
      accessibilityLabel={accessibilityLabel}
      onPress={onPress}
      style={[styles_IconButton.shell, { width: size, height: size, borderRadius: size / 2 }]}>
      <View style={styles_IconButton.center}>
        {Icon ? (
          <Icon size={20} color={theme.colors.gold.light} strokeWidth={2.4} />
        ) : null}
        {image ? <Image source={image} style={styles_IconButton.image} /> : null}
        {dot ? <View style={styles_IconButton.dot} /> : null}
      </View>
    </PressFX>
  );
}


export const IconButton = React.memo(IconButton_IconButton);

// ------ InfoRow ------
type Props_InfoRow = { Icon: LucideIcon; label: string; value: string; last?: boolean };

function InfoRow_InfoRow({ Icon, label, value, last = false }: Props_InfoRow) {
  return (
    <View style={[styles_InfoRow.row, last ? styles_InfoRow.last : null]}>
      <Icon size={ICON_SIZE} color={theme.colors.gold.primary} strokeWidth={2.2} />
      <Text style={styles_InfoRow.label}>{label}</Text>
      <Text style={styles_InfoRow.value}>{value}</Text>
    </View>
  );
}


export const InfoRow = React.memo(InfoRow_InfoRow);

// ------ PaytableStrip ------
function PaytableStrip_PaytableStrip() {
  return (
    <View style={styles_PaytableStrip.wrap}>
      <View style={styles_PaytableStrip.row}>
        {SYMBOLS.map(sym => (
          <View key={sym.key} style={styles_PaytableStrip.slot}>
            <Image source={SPRITES[sym.index]} style={styles_PaytableStrip.sprite} />
            <Text style={styles_PaytableStrip.mult}>{'x' + sym.multiplier}</Text>
          </View>
        ))}
      </View>
      <Text style={styles_PaytableStrip.footer}>MULTIPLIERS APPLY TO VIRTUAL COINS ONLY</Text>
    </View>
  );
}


export const PaytableStrip = React.memo(PaytableStrip_PaytableStrip);

// ------ PressFX ------
const HIT_PressFX = { top: 8, bottom: 8, left: 8, right: 8 };

type Props_PressFX = {
  onPress: () => void;
  children: React.ReactNode;
  /** Explicit box — never rely on intrinsic sizing for an interactive area. */
  style: StyleProp<ViewStyle>;
  innerStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  scaleTo?: number;
  accessibilityLabel: string;
};

/**
 * Press feedback with the Pressable as PARENT and the Animated.View as CHILD.
 * (No gesture-handler on this stack.) Only transform is animated, so the
 * native driver stays safe.
 */
function PressFX_PressFX({
  onPress,
  children,
  style,
  innerStyle,
  disabled = false,
  scaleTo = 0.96,
  accessibilityLabel,
}: Props_PressFX) {
  const scale = useRef(new Animated.Value(1)).current;

  const onPressIn = useCallback(() => {
    Animated.spring(scale, {
      toValue: scaleTo,
      ...theme.anim.press,
      useNativeDriver: true,
    }).start();
  }, [scale, scaleTo]);

  const onPressOut = useCallback(() => {
    Animated.spring(scale, {
      toValue: 1,
      ...theme.anim.press,
      useNativeDriver: true,
    }).start();
  }, [scale]);

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      accessibilityState={{ disabled }}
      hitSlop={HIT_PressFX}
      disabled={disabled}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      style={style}>
      <Animated.View
        pointerEvents="box-none"
        style={[
          { width: '100%', height: '100%', transform: [{ scale }] },
          innerStyle,
        ]}>
        {children}
      </Animated.View>
    </Pressable>
  );
}

export const PressFX = React.memo(PressFX_PressFX);

// ------ ProgressBar ------
type Props_ProgressBar = { value: number; max: number; height?: number; width: number };

/** Width animation -> useNativeDriver MUST stay false here. */
function ProgressBar_ProgressBar({ value, max, height = 10, width }: Props_ProgressBar) {
  const w = useRef(new Animated.Value(0)).current;
  const target = Math.max(0, Math.min(1, max > 0 ? value / max : 0)) * width;

  useEffect(() => {
    const anim = Animated.timing(w, {
      toValue: target,
      duration: 700,
      easing: Easing.inOut(Easing.quad),
      useNativeDriver: false,
    });
    anim.start();
    return () => anim.stop();
  }, [target, w]);

  return (
    <View style={[styles_ProgressBar.track, { width, height, borderRadius: height / 2 }]}>
      <Animated.View pointerEvents="none" style={{ width: w, height: '100%' }}>
        <LinearGradient
          colors={[...theme.gradients.goldFlat]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{ width: '100%', height: '100%', borderRadius: height / 2 }}
        />
      </Animated.View>
    </View>
  );
}


export const ProgressBar = React.memo(ProgressBar_ProgressBar);

// ------ Reel ------
export const SETTLED_OFFSET = -(STRIP_LEN - ROWS) * TILE;

type Props_Reel = {
  strip: number[];
  /** Bumped by the hook on every spin; drives the animation. */
  spinId: number;
  duration: number;
  onEnd?: () => void;
};

function Reel_Reel({ strip, spinId, duration, onEnd }: Props_Reel) {
  const translateY = useRef(new Animated.Value(SETTLED_OFFSET)).current;
  const onEndRef = useRef(onEnd);

  useEffect(() => {
    onEndRef.current = onEnd;
  }, [onEnd]);

  useEffect(() => {
    if (spinId === 0) {
      return;
    }
    translateY.setValue(0);
    const anim = Animated.timing(translateY, {
      toValue: SETTLED_OFFSET,
      duration,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    });
    anim.start(({ finished }) => {
      if (finished && onEndRef.current) {
        onEndRef.current();
      }
    });
    return () => anim.stop();
  }, [spinId, duration, translateY]);

  return (
    <View style={styles_Reel.window}>
      <Animated.View
        pointerEvents="none"
        style={{ transform: [{ translateY }] }}>
        {strip.map((symbol, i) => (
          <View key={'c' + i} style={styles_Reel.cell}>
            <Image source={SPRITES[symbol]} style={styles_Reel.sprite} />
            <View style={styles_Reel.divider} />
          </View>
        ))}
      </Animated.View>
    </View>
  );
}


export const Reel = React.memo(Reel_Reel);

// ------ ScreenHeader ------
type Props_ScreenHeader = {
  title: string;
  subtitle?: string;
  leftSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
};

/**
 * The single header used by every screen (Menu excepted — it is a full-bleed
 * hero). Keeping one implementation is what stops cross-screen style drift.
 */
function ScreenHeader_ScreenHeader({ title, subtitle, leftSlot, rightSlot }: Props_ScreenHeader) {
  return (
    <View style={styles_ScreenHeader.root}>
      <View style={styles_ScreenHeader.side}>{leftSlot ?? null}</View>
      <View style={styles_ScreenHeader.center}>
        <Text numberOfLines={1} style={styles_ScreenHeader.title}>
          {title}
        </Text>
        {subtitle ? (
          <Text numberOfLines={1} style={styles_ScreenHeader.subtitle}>
            {subtitle}
          </Text>
        ) : null}
      </View>
      <View style={[styles_ScreenHeader.side, styles_ScreenHeader.sideRight]}>{rightSlot ?? null}</View>
    </View>
  );
}


export const ScreenHeader = React.memo(ScreenHeader_ScreenHeader);

// ------ ScreenShell ------
type Props_ScreenShell = {
  children: React.ReactNode;
  /** Gradient laid over the venue art. Always >= 2 stops — never a flat fill. */
  colors?: string[];
  locations?: number[];
  artOpacity?: number;
  scrim?: string;
  felt?: boolean;
  blobTop?: number;
  blobSize?: number;
  blobColor?: string;
  dust?: boolean;
  style?: ViewStyle;
};

/**
 * Every screen's base: venue art -> gradient -> decor -> content.
 * Guarantees the "never a flat background" rule and keeps screens distinct
 * purely by overlay (the asset contract ships one background image).
 */
function ScreenShell_ScreenShell({
  children,
  colors = ['#0B0B0F', '#15120B', '#0B0B0F'],
  locations,
  artOpacity = 0.16,
  scrim,
  felt = false,
  blobTop = SCREEN_H * 0.26,
  blobSize = 320,
  blobColor = 'rgba(212,175,55,0.10)',
  dust = true,
  style,
}: Props_ScreenShell) {
  return (
    <View style={[styles_ScreenShell.root, style]}>
      <LinearGradient
        colors={colors}
        locations={locations}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={StyleSheet.absoluteFillObject}
      />
      <Image
        source={assets.bgGame}
        style={[StyleSheet.absoluteFillObject, { opacity: artOpacity }]}
        resizeMode="cover"
      />
      {scrim ? (
        <View style={[StyleSheet.absoluteFillObject, { backgroundColor: scrim }]} />
      ) : null}
      {felt ? (
        <View
          style={[
            StyleSheet.absoluteFillObject,
            { backgroundColor: 'rgba(46,125,91,0.05)' },
          ]}
        />
      ) : null}

      <View pointerEvents="none" style={StyleSheet.absoluteFillObject}>
        <View
          style={{
            position: 'absolute',
            top: blobTop,
            left: (SCREEN_W - blobSize) / 2,
            width: blobSize,
            height: blobSize,
            borderRadius: blobSize / 2,
            backgroundColor: blobColor,
          }}
        />
        {dust
          ? DUST.map((d, i) => (
              <View
                key={'dust' + i}
                style={{
                  position: 'absolute',
                  left: d.x * SCREEN_W,
                  top: d.y * SCREEN_H,
                  width: d.s,
                  height: d.s,
                  borderRadius: d.s / 2,
                  backgroundColor: 'rgba(245,215,122,0.16)',
                }}
              />
            ))
          : null}
      </View>

      <View style={styles_ScreenShell.content}>{children}</View>
    </View>
  );
}


export const ScreenShell = React.memo(ScreenShell_ScreenShell);

// ------ SlotBoard ------
type Props_SlotBoard = {
  strips: number[][];
  spinId: number;
  spinning: boolean;
  winCells: boolean[][];
  onSettled: () => void;
};

function Lamp_SlotBoard({ spinning, side }: { spinning: boolean; side: 'left' | 'right' }) {
  const glow = useRef(new Animated.Value(0.5)).current;

  useEffect(() => {
    if (!spinning) {
      glow.setValue(0.5);
      return;
    }
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(glow, {
          toValue: 1,
          duration: 700,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(glow, {
          toValue: 0.5,
          duration: 700,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
      ]),
    );
    loop.start();
    return () => loop.stop();
  }, [spinning, glow]);

  return (
    <Animated.View
      pointerEvents="none"
      style={[
        styles_SlotBoard.lamp,
        side === 'left' ? { left: -13 } : { right: -13 },
        { opacity: glow },
      ]}>
      <LinearGradient
        colors={[...theme.gradients.lamp]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles_SlotBoard.lampFill}
      />
    </Animated.View>
  );
}

function SlotBoard_SlotBoard({ strips, spinId, spinning, winCells, onSettled }: Props_SlotBoard) {
  const flash = useRef(new Animated.Value(0)).current;

  const hasWin = winCells.some(row => row.some(Boolean));

  useEffect(() => {
    if (!hasWin) {
      flash.setValue(0);
      return;
    }
    const seq = Animated.loop(
      Animated.sequence([
        Animated.timing(flash, {
          toValue: 1,
          duration: 260,
          easing: Easing.out(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(flash, {
          toValue: 0,
          duration: 260,
          easing: Easing.in(Easing.quad),
          useNativeDriver: true,
        }),
      ]),
      { iterations: 3 },
    );
    seq.start();
    return () => seq.stop();
  }, [hasWin, winCells, flash]);

  return (
    <View style={styles_SlotBoard.wrap}>
      <Lamp_SlotBoard side="left" spinning={spinning} />
      <Lamp_SlotBoard side="right" spinning={spinning} />

      <View style={styles_SlotBoard.frame}>
        <LinearGradient
          colors={[...theme.gradients.cabinet]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles_SlotBoard.frameFill}
        />
        <View pointerEvents="none" style={styles_SlotBoard.bezelGloss} />

        <View style={styles_SlotBoard.reels}>
          {strips.map((strip, c) => (
            <Reel
              key={'reel' + c}
              strip={strip}
              spinId={spinId}
              duration={REEL_DURATIONS[c] ?? 1400}
              onEnd={c === COLS - 1 ? onSettled : undefined}
            />
          ))}

          <View pointerEvents="none" style={StyleSheet.absoluteFillObject}>
            {winCells.map((row, r) =>
              row.map((isWin, c) =>
                isWin ? (
                  <Animated.View
                    key={'w' + r + '-' + c}
                    style={[
                      styles_SlotBoard.winCell,
                      { left: c * TILE, top: r * TILE, opacity: flash },
                    ]}
                  />
                ) : null,
              ),
            )}
          </View>
        </View>
      </View>
    </View>
  );
}


export const SlotBoard = React.memo(SlotBoard_SlotBoard);

// ------ StatCard ------
export type StatItem = {
  key: string;
  value: string;
  label: string;
  valueColor: string;
};

type Props_StatCard = StatItem & { Icon: LucideIcon };

/**
 * Pills in a row are intentionally identical in silhouette: one shared icon,
 * one size, one padding. Only the colour and the number differ.
 * The card itself uses width:'100%' — never flex:1 inside a flex:1 slot.
 */
function StatCard_StatCard({ Icon, value, label, valueColor }: Props_StatCard) {
  return (
    <View style={styles_StatCard.card}>
      <View
        style={[
          styles_StatCard.iconWrap,
          { backgroundColor: valueColor + '22', borderColor: valueColor + '55' },
        ]}>
        <Icon size={ICON_SIZE} color={valueColor} strokeWidth={2.4} />
      </View>
      <Text numberOfLines={1} style={[styles_StatCard.value, { color: valueColor }]}>
        {value}
      </Text>
      <Text numberOfLines={1} style={styles_StatCard.label}>
        {label}
      </Text>
    </View>
  );
}


export const StatCard = React.memo(StatCard_StatCard);

// ------ StatsRow ------
type Props_StatsRow = {
  /** ONE icon for the whole row — pills differ by colour and value only. */
  Icon: LucideIcon;
  items: StatItem[];
};

/** A lone pill looks like a broken skeleton — render nothing under 2 items. */
function StatsRow_StatsRow({ Icon, items }: Props_StatsRow) {
  const visible = items.filter(i => i.value.length > 0);
  if (visible.length < 2) {
    return null;
  }
  return (
    <View style={styles_StatsRow.row}>
      {visible.map(({ key, ...rest }) => (
        <View key={key} style={styles_StatsRow.slot}>
          <StatCard Icon={Icon} {...rest} />
        </View>
      ))}
    </View>
  );
}


export const StatsRow = React.memo(StatsRow_StatsRow);

// ------ ToggleRow ------
const HIT_ToggleRow = { top: 8, bottom: 8, left: 8, right: 8 };

type Props_ToggleRow = { Icon: LucideIcon; label: string; value: boolean; onToggle: () => void };

function ToggleRow_ToggleRow({ Icon, label, value, onToggle }: Props_ToggleRow) {
  const x = useRef(new Animated.Value(value ? 1 : 0)).current;

  useEffect(() => {
    const anim = Animated.spring(x, {
      toValue: value ? 1 : 0,
      tension: 160,
      friction: 12,
      useNativeDriver: true,
    });
    anim.start();
    return () => anim.stop();
  }, [value, x]);

  return (
    <Pressable
      accessibilityRole="switch"
      accessibilityLabel={label}
      accessibilityState={{ checked: value }}
      hitSlop={HIT_ToggleRow}
      onPress={onToggle}
      style={styles_ToggleRow.row}>
      <Icon size={ICON_SIZE} color={theme.colors.gold.primary} strokeWidth={2.2} />
      <Text style={styles_ToggleRow.label}>{label}</Text>
      <View style={[styles_ToggleRow.track, value ? styles_ToggleRow.trackOn : null]}>
        <Animated.View
          pointerEvents="none"
          style={[
            styles_ToggleRow.knob,
            { transform: [{ translateX: x.interpolate({ inputRange: [0, 1], outputRange: [0, 22] }) }] },
          ]}
        />
      </View>
    </Pressable>
  );
}


export const ToggleRow = React.memo(ToggleRow_ToggleRow);

// ------ useBalance ------
export function useBalance(): number {
  const [balance, setBalance] = useState(() => store.getBalance());
  useEffect(() => store.subscribe(() => setBalance(store.getBalance())), []);
  return balance;
}

export function useTokens(): boolean[] {
  const [tokens, setTokens] = useState(() => store.get().tokens);
  useEffect(() => store.subscribe(() => setTokens(store.get().tokens)), []);
  return tokens;
}

export function useBestWin(): number {
  const [best, setBest] = useState(() => store.get().bestWin);
  useEffect(() => store.subscribe(() => setBest(store.get().bestWin)), []);
  return best;
}

// (bundled: useBalance default was useBalance)

// ------ useDailyBonus ------
export function useDailyBonus() {
  const [claimable, setClaimable] = useState(() => store.bonusClaimable());

  useEffect(() => store.subscribe(() => setClaimable(store.bonusClaimable())), []);

  const claim = useCallback(() => {
    const ok = store.claimBonus(DAILY_BONUS);
    setClaimable(store.bonusClaimable());
    return ok;
  }, []);

  return { claimable, claim, amount: DAILY_BONUS };
}

// (bundled: useDailyBonus default was useDailyBonus)

// ------ useScreenFade ------
export function useScreenFade(key: string) {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(12)).current;

  useEffect(() => {
    opacity.setValue(0);
    translateY.setValue(12);
    const anim = Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: theme.anim.fadeIn,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: theme.anim.fadeIn,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
    ]);
    anim.start();
    return () => anim.stop();
  }, [key, opacity, translateY]);

  const style = useCallback(
    () => ({ opacity, transform: [{ translateY }] }),
    [opacity, translateY],
  );

  return { opacity, translateY, style };
}

// (bundled: useScreenFade default was useScreenFade)

// ------ useSlotMachine ------
export type SlotStatus = 'idle' | 'spinning' | 'result';

function initialStrips_useSlotMachine(grid: Grid): number[][] {
  const out: number[][] = [];
  for (let c = 0; c < COLS; c++) {
    out.push(buildStrip(grid, c));
  }
  return out;
}

export function useSlotMachine(onGameOver: (r: SessionResult) => void) {
  const [balance, setBalance] = useState(() => store.getBalance());
  const [bet, setBetState] = useState<number>(DEFAULT_BET);
  const [spinsLeft, setSpinsLeft] = useState(SESSION_SPINS);
  const [status, setStatus] = useState<SlotStatus>('idle');
  const [spinId, setSpinId] = useState(0);
  const [autoLeft, setAutoLeft] = useState(0);
  const [lastWin, setLastWin] = useState(0);
  const [winCells, setWinCells] = useState<boolean[][]>(emptyWinCells);

  const [strips, setStrips] = useState<number[][]>(() => initialStrips_useSlotMachine(makeGrid()));

  // Animation-facing mirrors — Animated callbacks must never read stale state.
  const statusRef = useRef<SlotStatus>('idle');
  const betRef = useRef(bet);
  const spinsLeftRef = useRef(spinsLeft);
  const autoLeftRef = useRef(0);
  const outcomeRef = useRef<SpinOutcome | null>(null);
  const lossStreakRef = useRef(0);
  const netRef = useRef(0);
  const bestRef = useRef(0);
  const wonOnceRef = useRef(false);
  const endedRef = useRef(false);
  const timersRef = useRef<Array<ReturnType<typeof setTimeout>>>([]);

  useEffect(() => store.subscribe(() => setBalance(store.getBalance())), []);

  useEffect(() => {
    return () => {
      timersRef.current.forEach(clearTimeout);
      timersRef.current = [];
    };
  }, []);

  const later = useCallback((fn: () => void, ms: number) => {
    const t = setTimeout(() => {
      timersRef.current = timersRef.current.filter(x => x !== t);
      fn();
    }, ms);
    timersRef.current.push(t);
  }, []);

  const setBet = useCallback((next: number) => {
    if (statusRef.current !== 'idle') {
      return;
    }
    betRef.current = next;
    setBetState(next);
  }, []);

  const finishSession = useCallback(() => {
    if (endedRef.current) {
      return;
    }
    endedRef.current = true;
    let tokenIndex = -1;
    if (wonOnceRef.current) {
      tokenIndex = store.grantNextToken();
    }
    // Social-casino convention: never leave the player stranded.
    if (store.getBalance() < MIN_BET) {
      store.setBalance(TOP_UP_BALANCE);
    }
    onGameOver({
      net: netRef.current,
      best: bestRef.current,
      spins: SESSION_SPINS - spinsLeftRef.current,
      tokenEarned: wonOnceRef.current && tokenIndex >= 0,
      tokenIndex,
    });
  }, [onGameOver]);

  const spin = useCallback(() => {
    if (statusRef.current !== 'idle' || endedRef.current) {
      return;
    }
    const currentBet = betRef.current;
    if (spinsLeftRef.current <= 0 || store.getBalance() < currentBet) {
      finishSession();
      return;
    }

    store.addBalance(-currentBet);
    store.countSpin();
    spinsLeftRef.current -= 1;
    setSpinsLeft(spinsLeftRef.current);

    const outcome = spinOnce(currentBet, lossStreakRef.current);
    outcomeRef.current = outcome;

    setWinCells(emptyWinCells());
    setLastWin(0);
    setStrips(outcome.strips);
    statusRef.current = 'spinning';
    setStatus('spinning');
    setSpinId(id => id + 1);
  }, [finishSession]);

  /** Called once, when the LAST reel has come to rest. */
  const onReelsSettled = useCallback(() => {
    const outcome = outcomeRef.current;
    if (!outcome || statusRef.current !== 'spinning') {
      return;
    }

    netRef.current -= betRef.current;

    if (outcome.win > 0) {
      lossStreakRef.current = 0;
      wonOnceRef.current = true;
      netRef.current += outcome.win;
      if (outcome.win > bestRef.current) {
        bestRef.current = outcome.win;
      }
      store.addBalance(outcome.win);
      store.recordWin(outcome.win);
      setWinCells(outcome.winCells);
      setLastWin(outcome.win);
      statusRef.current = 'result';
      setStatus('result');
      later(() => {
        if (statusRef.current !== 'result') {
          return;
        }
        statusRef.current = 'idle';
        setStatus('idle');
        setWinCells(emptyWinCells());
      }, RESULT_HOLD_MS);
    } else {
      lossStreakRef.current += 1;
      setLastWin(0);
      statusRef.current = 'idle';
      setStatus('idle');
    }
  }, [later]);

  // Session end + auto-spin chaining, driven by the settled idle state.
  useEffect(() => {
    if (status !== 'idle' || endedRef.current) {
      return;
    }
    if (spinsLeftRef.current <= 0 || balance < MIN_BET) {
      autoLeftRef.current = 0;
      setAutoLeft(0);
      later(finishSession, 420);
      return;
    }
    if (autoLeftRef.current > 0) {
      autoLeftRef.current -= 1;
      setAutoLeft(autoLeftRef.current);
      later(spin, 460);
    }
  }, [status, balance, finishSession, later, spin]);

  const startAuto = useCallback(() => {
    if (autoLeftRef.current > 0) {
      autoLeftRef.current = 0;
      setAutoLeft(0);
      return;
    }
    autoLeftRef.current = 10;
    setAutoLeft(10);
    if (statusRef.current === 'idle') {
      spin();
    }
  }, [spin]);

  return {
    balance,
    bet,
    setBet,
    spinsLeft,
    status,
    spinId,
    strips,
    winCells,
    lastWin,
    autoLeft,
    spin,
    startAuto,
    onReelsSettled,
    endSession: finishSession,
  };
}

// (bundled: useSlotMachine default was useSlotMachine)

// ------ format ------
export function formatCoins(n: number): string {
  const sign = n < 0 ? '-' : '';
  const abs = Math.abs(Math.round(n));
  return sign + abs.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function signedCoins(n: number): string {
  return (n > 0 ? '+' : '') + formatCoins(n);
}

export function mmss(ms: number): string {
  const total = Math.max(0, Math.floor(ms / 1000));
  const m = Math.floor(total / 60);
  const s = total % 60;
  return (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
}

/* autopad-begin */
function bevuliyome(): number {
  return 61;
}
function ulemuzijal(_umadibajuka: string, _pipilunilime: string): void {
  const udiziquya: number = 241;
}
function jebazapuvi(_igevaquceme: number, _uzoleror: string, _mewicekof: boolean): boolean {
  const yovomu = 43;
  return yovomu > 40 ? true : false;
}
function ikuduxi(_ebigif: boolean, _govogad: number): boolean {
  let ojicudacele: boolean = false;
  ojicudacele = false;
  return ojicudacele;
}
function goyacoy(_qasepicoyisu: boolean, _ikewigi: boolean): number {
  const ibikoce = 76;
  return ibikoce > 54 ? 66 : 110;
}
function zomijimo(_asorebojo: boolean, _vixufubatoc: boolean, _icolamupe: boolean): string {
  const qadufipoqo: string = "yij";
  return qadufipoqo;
}
function abigizafejo(): boolean {
  const iyulenaxibu: boolean = true;
  return iyulenaxibu;
}
function isuriwosaqu(_edexafugem: string, _imujenamite: number): number { return 256; }
function uwamuwunun(): void {
  const uyewikufarop = 28;
  if (uyewikufarop > 70) return;
}
function abuyoci(): void {}
function ifeviciwewum(_sozero: boolean): boolean { return false; }
function olinare(_ozopibaca: boolean): string {
  const ocuzoxisuc: string = "orivun";
  return ocuzoxisuc;
}
function zakowu(): boolean {
  return true;
}
function nozomaribut(): void {
  const ejidasupum: number = 57;
}
/* autopad-end */
