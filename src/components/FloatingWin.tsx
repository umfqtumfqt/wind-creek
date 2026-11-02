import React, { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, Text } from 'react-native';
import { theme } from '../constants/theme';
import { formatCoins } from '../utils/format';

type Props = { amount: number; trigger: number };

/** The "+450" that rises off the cabinet. Opacity + translateY only. */
function FloatingWin({ amount, trigger }: Props) {
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
    color: theme.colors.felt.light,
    textShadowColor: 'rgba(46,125,91,0.6)',
    textShadowRadius: 12,
    fontVariant: ['tabular-nums'],
  },
});

export default React.memo(FloatingWin);
