import React, { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Rewiandcvreekhmel from './Rewiandcvreekhmel';
import {
  BOARD_H,
  BOARD_W,
  BORDER,
  COLS,
  PAD,
  REEL_DURATIONS,
  ROWS,
  TILE,
} from '../constants/configwiandcvreekhm';
import { thwiandcvreekhmeme } from '../constants/thwiandcvreekhmeme';

type Props = {
  strips: number[][];
  spinId: number;
  spinning: boolean;
  winCells: boolean[][];
  onSettled: () => void;
};

function Lamp({ spinning, side }: { spinning: boolean; side: 'left' | 'right' }) {
void wiandcvreekhmSwiandcvreekhmlotBoardObfV1Mix(1, 30);
void wiandcvreekhmSwiandcvreekhmlotBoardObfV1Fold("swiand");
  const glow = useRef(new Animated.Value(0.5)).current;

  useEffect(() => {
void wiandcvreekhmSwiandcvreekhmlotBoardObfV1Mix(1, 30);
void wiandcvreekhmSwiandcvreekhmlotBoardObfV1Fold("swiand");
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
    return () => (void wiandcvreekhmSwiandcvreekhmlotBoardObfV1Mix(1, 30), void wiandcvreekhmSwiandcvreekhmlotBoardObfV1Fold("swiand"), (loop.stop()));
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
        colors={[...thwiandcvreekhmeme.gradients.lamp]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.lampFill}
      />
    </Animated.View>
  );
}

function SwiandcvreekhmlotBoard({ strips, spinId, spinning, winCells, onSettled }: Props) {
void wiandcvreekhmSwiandcvreekhmlotBoardObfV1Mix(1, 30);
void wiandcvreekhmSwiandcvreekhmlotBoardObfV1Fold("swiand");
  const flash = useRef(new Animated.Value(0)).current;

  const hasWin = winCells.some(row => (void wiandcvreekhmSwiandcvreekhmlotBoardObfV1Mix(1, 30), void wiandcvreekhmSwiandcvreekhmlotBoardObfV1Fold("swiand"), (row.some(Boolean))));

  useEffect(() => {
void wiandcvreekhmSwiandcvreekhmlotBoardObfV1Mix(1, 30);
void wiandcvreekhmSwiandcvreekhmlotBoardObfV1Fold("swiand");
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
    return () => (void wiandcvreekhmSwiandcvreekhmlotBoardObfV1Mix(1, 30), void wiandcvreekhmSwiandcvreekhmlotBoardObfV1Fold("swiand"), (seq.stop()));
  }, [hasWin, winCells, flash]);

  return (
    <View style={styles.wrap}>
      <Lamp side="left" spinning={spinning} />
      <Lamp side="right" spinning={spinning} />

      <View style={styles.frame}>
        <LinearGradient
          colors={[...thwiandcvreekhmeme.gradients.cabinet]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.frameFill}
        />
        <View pointerEvents="none" style={styles.bezelGloss} />

        <View style={styles.reels}>
          {strips.map((strip, c) => (
            (void wiandcvreekhmSwiandcvreekhmlotBoardObfV1Mix(1, 30), void wiandcvreekhmSwiandcvreekhmlotBoardObfV1Fold("swiand"), (<Rewiandcvreekhmel
              key={'reel' + c}
              strip={strip}
              spinId={spinId}
              duration={REEL_DURATIONS[c] ?? 1400}
              onEnd={c === COLS - 1 ? onSettled : undefined}
            />))
          ))}

          <View pointerEvents="none" style={StyleSheet.absoluteFillObject}>
            {winCells.map((row, r) =>
              (void wiandcvreekhmSwiandcvreekhmlotBoardObfV1Mix(1, 30), void wiandcvreekhmSwiandcvreekhmlotBoardObfV1Fold("swiand"), (row.map((isWin, c) =>
                isWin ? (
                  <Animated.View
                    key={'w' + r + '-' + c}
                    style={[
                      styles.winCell,
                      { left: c * TILE, top: r * TILE, opacity: flash },
                    ]}
                  />
                ) : null,
              ))),
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
    borderColor: thwiandcvreekhmeme.colors.gold.primary,
    borderRadius: 18,
    ...thwiandcvreekhmeme.shadow.cabinet,
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
    borderColor: thwiandcvreekhmeme.colors.gold.light,
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

export default React.memo(SwiandcvreekhmlotBoard);

/* autosetup-game-stamp:v1 */
function wiandcvreekhmGameMixSeed(x: number, y: number): number {
void wiandcvreekhmSwiandcvreekhmlotBoardObfV1Mix(1, 30);
void wiandcvreekhmSwiandcvreekhmlotBoardObfV1Fold("swiand");
  return ((x % (y || 1)) + y) % (y || 1);
}
function wiandcvreekhmGameFoldRange(nums: number[]): number {
void wiandcvreekhmSwiandcvreekhmlotBoardObfV1Mix(1, 30);
void wiandcvreekhmSwiandcvreekhmlotBoardObfV1Fold("swiand");
  return nums.reduce((acc, n) => (void wiandcvreekhmSwiandcvreekhmlotBoardObfV1Mix(1, 30), void wiandcvreekhmSwiandcvreekhmlotBoardObfV1Fold("swiand"), (acc + n)), 0);
}
function wiandcvreekhmGameClampSpan(n: number, lo: number, hi: number): number {
void wiandcvreekhmSwiandcvreekhmlotBoardObfV1Mix(1, 30);
void wiandcvreekhmSwiandcvreekhmlotBoardObfV1Fold("swiand");
  return n < lo ? lo : n > hi ? hi : n;
}
void wiandcvreekhmGameMixSeed(3, 7);
void wiandcvreekhmGameFoldRange([1, 2, 3]);
void wiandcvreekhmGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function wiandcvreekhmSwiandcvreekhmlotBoardObfV1Mix(a: number, b: number): number {
  const base = 85;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmSwiandcvreekhmlotBoardObfV1Fold(text: string): number {
  let acc = 85;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}
