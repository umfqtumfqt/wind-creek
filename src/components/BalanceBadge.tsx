import React, {useEffect, useRef} from 'react';
import {Animated, StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import {Coins} from 'lucide-react-native';
import {THEME} from '../constants/theme';
import {formatCoins, useCountUp} from '../hooks/useCountUp';

type Props = {
  amount: number;
  /** Compact drops the pill chrome — used inside the game header. */
  compact?: boolean;
  style?: StyleProp<ViewStyle>;
};

export const BalanceBadge: React.FC<Props> = ({amount, compact, style}) => {
  const shown = useCountUp(amount);
  const pulse = useRef(new Animated.Value(1)).current;
  const prev = useRef(amount);

  useEffect(() => {
    if (amount > prev.current) {
      Animated.sequence([
        Animated.timing(pulse, {
          toValue: 1.12,
          duration: 180,
          useNativeDriver: true,
        }),
        Animated.spring(pulse, {
          toValue: 1,
          tension: 70,
          friction: 7,
          useNativeDriver: true,
        }),
      ]).start();
    }
    prev.current = amount;
  }, [amount, pulse]);

  if (compact) {
    return (
      <Animated.View
        pointerEvents="box-none"
        style={[styles.compact, {transform: [{scale: pulse}]}, style]}>
        <Text style={styles.compactValue}>{formatCoins(shown)}</Text>
        <Text style={styles.caption}>COINS</Text>
      </Animated.View>
    );
  }

  return (
    <Animated.View
      accessible
      // The label spells out BALANCE because the walkthrough identifies the
      // lobby by that word; the pill itself only has room for the number.
      // It must never contain PLAY or START - those are the CTA's alone.
      accessibilityLabel={`BALANCE ${formatCoins(shown)} COINS`}
      pointerEvents="box-none"
      style={[styles.pill, {transform: [{scale: pulse}]}, style]}>
      <Coins size={18} color={THEME.accent} strokeWidth={2.4} />
      <Text style={styles.value}>{formatCoins(shown)}</Text>
      <Text style={styles.caption}>COINS</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  pill: {
    height: 40,
    borderRadius: 20,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: THEME.scrim,
    borderWidth: 1,
    borderColor: THEME.goldBorder,
  },
  value: {
    fontSize: 16,
    lineHeight: 18,
    fontWeight: '800',
    color: THEME.accent,
    fontVariant: ['tabular-nums' as const],
  },
  caption: {
    fontSize: 9,
    lineHeight: 12,
    fontWeight: '700',
    letterSpacing: 1,
    color: THEME.textMuted,
  },
  compact: {
    alignItems: 'flex-end',
  },
  compactValue: {
    fontSize: 17,
    lineHeight: 20,
    fontWeight: '800',
    color: THEME.accent,
    fontVariant: ['tabular-nums' as const],
  },
});
