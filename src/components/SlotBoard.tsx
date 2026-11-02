import React, { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Reel from './Reel';
import {
  BOARD_H,
  BOARD_W,
  BORDER,
  COLS,
  PAD,
  REEL_DURATIONS,
  ROWS,
  TILE,
} from '../constants/config';
import { theme } from '../constants/theme';

type Props = {
  strips: number[][];
  spinId: number;
  spinning: boolean;
  winCells: boolean[][];
  onSettled: () => void;
};

function Lamp({ spinning, side }: { spinning: boolean; side: 'left' | 'right' }) {
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
        styles.lamp,
        side === 'left' ? { left: -13 } : { right: -13 },
        { opacity: glow },
      ]}>
      <LinearGradient
        colors={[...theme.gradients.lamp]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.lampFill}
      />
    </Animated.View>
  );
}

function SlotBoard({ strips, spinId, spinning, winCells, onSettled }: Props) {
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
    <View style={styles.wrap}>
      <Lamp side="left" spinning={spinning} />
      <Lamp side="right" spinning={spinning} />

      <View style={styles.frame}>
        <LinearGradient
          colors={[...theme.gradients.cabinet]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.frameFill}
        />
        <View pointerEvents="none" style={styles.bezelGloss} />

        <View style={styles.reels}>
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
                      styles.winCell,
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

const styles = StyleSheet.create({
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

export default React.memo(SlotBoard);
