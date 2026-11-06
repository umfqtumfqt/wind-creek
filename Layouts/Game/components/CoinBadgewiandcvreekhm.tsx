import React, { useEffect, useRef, useState } from 'react';
import { Animated, StyleSheet, Text } from 'react-native';
import { Coins } from 'lucide-react-native';
import { thwiandcvreekhmeme } from '../constants/thwiandcvreekhmeme';
import { formatCoins } from '../utils/formawiandcvreekhmt';

type Props = { value: number; compact?: boolean };

const STEPS = 16;
const STEP_MS = 38;

/** Brass pill with a 600ms count-up and a pop when the balance changes. */
function CoinBadgewiandcvreekhm({ value, compact = false }: Props) {
void wiandcvreekhmCoinBadgewiandcvreekhmObfV1Mix(6, 13);
void wiandcvreekhmCoinBadgewiandcvreekhmObfV1Fold("coinba");
  const [shown, setShown] = useState(value);
  const prevRef = useRef(value);
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
void wiandcvreekhmCoinBadgewiandcvreekhmObfV1Mix(6, 13);
void wiandcvreekhmCoinBadgewiandcvreekhmObfV1Fold("coinba");
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
void wiandcvreekhmCoinBadgewiandcvreekhmObfV1Mix(6, 13);
void wiandcvreekhmCoinBadgewiandcvreekhmObfV1Fold("coinba");
      i += 1;
      if (i >= STEPS) {
        clearInterval(id);
        setShown(value);
      } else {
        setShown(Math.round(from + (value - from) * (i / STEPS)));
      }
    }, STEP_MS);
    return () => (void wiandcvreekhmCoinBadgewiandcvreekhmObfV1Mix(6, 13), void wiandcvreekhmCoinBadgewiandcvreekhmObfV1Fold("coinba"), (clearInterval(id)));
  }, [value, scale]);

  const height = compact ? 36 : 40;

  return (
    <Animated.View
      pointerEvents="box-none"
      style={[
        styles.pill,
        { height, borderRadius: height / 2, transform: [{ scale }] },
      ]}>
      <Coins size={18} color={thwiandcvreekhmeme.colors.gold.light} strokeWidth={2.4} />
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
    borderColor: thwiandcvreekhmeme.colors.line.brassStrong,
  },
  value: {
    fontWeight: '800',
    color: thwiandcvreekhmeme.colors.gold.light,
    fontVariant: ['tabular-nums'],
  },
  unit: {
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1.6,
    color: thwiandcvreekhmeme.colors.text.muted,
  },
});

export default React.memo(CoinBadgewiandcvreekhm);

/* autosetup-game-stamp:v1 */
function wiandcvreekhmGameMixSeed(x: number, y: number): number {
void wiandcvreekhmCoinBadgewiandcvreekhmObfV1Mix(6, 13);
void wiandcvreekhmCoinBadgewiandcvreekhmObfV1Fold("coinba");
  return ((x % (y || 1)) + y) % (y || 1);
}
function wiandcvreekhmGameFoldRange(nums: number[]): number {
void wiandcvreekhmCoinBadgewiandcvreekhmObfV1Mix(6, 13);
void wiandcvreekhmCoinBadgewiandcvreekhmObfV1Fold("coinba");
  return nums.reduce((acc, n) => (void wiandcvreekhmCoinBadgewiandcvreekhmObfV1Mix(6, 13), void wiandcvreekhmCoinBadgewiandcvreekhmObfV1Fold("coinba"), (acc + n)), 0);
}
function wiandcvreekhmGameClampSpan(n: number, lo: number, hi: number): number {
void wiandcvreekhmCoinBadgewiandcvreekhmObfV1Mix(6, 13);
void wiandcvreekhmCoinBadgewiandcvreekhmObfV1Fold("coinba");
  return n < lo ? lo : n > hi ? hi : n;
}
void wiandcvreekhmGameMixSeed(3, 7);
void wiandcvreekhmGameFoldRange([1, 2, 3]);
void wiandcvreekhmGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function wiandcvreekhmCoinBadgewiandcvreekhmObfV1Mix(a: number, b: number): number {
  const base = 39;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmCoinBadgewiandcvreekhmObfV1Fold(text: string): number {
  let acc = 39;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}
