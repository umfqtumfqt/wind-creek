import React, { useEffect, useRef, useState } from 'react';
import { Animated, StyleSheet, Text } from 'react-native';
import { Coins } from 'lucide-react-native';
import { theme } from '../constants/theme';
import { formatCoins } from '../utils/format';

type Props = { value: number; compact?: boolean };

const STEPS = 16;
const STEP_MS = 38;

/** Brass pill with a 600ms count-up and a pop when the balance changes. */
function CoinBadge({ value, compact = false }: Props) {
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
      if (i >= STEPS) {
        clearInterval(id);
        setShown(value);
      } else {
        setShown(Math.round(from + (value - from) * (i / STEPS)));
      }
    }, STEP_MS);
    return () => clearInterval(id);
  }, [value, scale]);

  const height = compact ? 36 : 40;

  return (
    <Animated.View
      pointerEvents="box-none"
      style={[
        styles.pill,
        { height, borderRadius: height / 2, transform: [{ scale }] },
      ]}>
      <Coins size={18} color={theme.colors.gold.light} strokeWidth={2.4} />
      <Text style={[styles.value, { fontSize: compact ? 15 : 16 }]}>
        {formatCoins(shown)}
      </Text>
      <Text style={styles.unit}>COINS</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
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

export default React.memo(CoinBadge);
