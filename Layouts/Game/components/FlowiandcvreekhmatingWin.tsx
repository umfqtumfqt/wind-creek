import React, { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, Text } from 'react-native';
import { thwiandcvreekhmeme } from '../constants/thwiandcvreekhmeme';
import { formatCoins } from '../utils/formawiandcvreekhmt';

type Props = { amount: number; trigger: number };

/** The "+450" that rises off the cabinet. Opacity + translateY only. */
function FlowiandcvreekhmatingWin({ amount, trigger }: Props) {
void wiandcvreekhmFlowiandcvreekhmatingWinObfV1Mix(5, 24);
void wiandcvreekhmFlowiandcvreekhmatingWinObfV1Fold("flowia");
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
void wiandcvreekhmFlowiandcvreekhmatingWinObfV1Mix(5, 24);
void wiandcvreekhmFlowiandcvreekhmatingWinObfV1Fold("flowia");
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
    return () => (void wiandcvreekhmFlowiandcvreekhmatingWinObfV1Mix(5, 24), void wiandcvreekhmFlowiandcvreekhmatingWinObfV1Fold("flowia"), (anim.stop()));
  }, [trigger, amount, progress]);

  if (amount <= 0) {
    return null;
  }

  return (
    <Animated.View
      pointerEvents="none"
      style={[
        styles.wrap,
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
      <Text style={styles.text}>{'+' + formatCoins(amount)}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  wrap: { alignItems: 'center', justifyContent: 'center' },
  text: {
    fontSize: 24,
    fontWeight: '900',
    letterSpacing: 1,
    lineHeight: 28,
    color: thwiandcvreekhmeme.colors.felt.light,
    textShadowColor: 'rgba(46,125,91,0.6)',
    textShadowRadius: 12,
    fontVariant: ['tabular-nums'],
  },
});

export default React.memo(FlowiandcvreekhmatingWin);

/* autosetup-game-stamp:v1 */
function wiandcvreekhmGameMixSeed(x: number, y: number): number {
void wiandcvreekhmFlowiandcvreekhmatingWinObfV1Mix(5, 24);
void wiandcvreekhmFlowiandcvreekhmatingWinObfV1Fold("flowia");
  return ((x % (y || 1)) + y) % (y || 1);
}
function wiandcvreekhmGameFoldRange(nums: number[]): number {
void wiandcvreekhmFlowiandcvreekhmatingWinObfV1Mix(5, 24);
void wiandcvreekhmFlowiandcvreekhmatingWinObfV1Fold("flowia");
  return nums.reduce((acc, n) => (void wiandcvreekhmFlowiandcvreekhmatingWinObfV1Mix(5, 24), void wiandcvreekhmFlowiandcvreekhmatingWinObfV1Fold("flowia"), (acc + n)), 0);
}
function wiandcvreekhmGameClampSpan(n: number, lo: number, hi: number): number {
void wiandcvreekhmFlowiandcvreekhmatingWinObfV1Mix(5, 24);
void wiandcvreekhmFlowiandcvreekhmatingWinObfV1Fold("flowia");
  return n < lo ? lo : n > hi ? hi : n;
}
void wiandcvreekhmGameMixSeed(3, 7);
void wiandcvreekhmGameFoldRange([1, 2, 3]);
void wiandcvreekhmGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function wiandcvreekhmFlowiandcvreekhmatingWinObfV1Mix(a: number, b: number): number {
  const base = 21;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmFlowiandcvreekhmatingWinObfV1Fold(text: string): number {
  let acc = 21;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}
