import React from 'react';
import {Animated, Pressable, StyleSheet, Text} from 'react-native';
import {THEME} from '../constants/theme';
import {usePressScale} from '../hooks/usePressScale';

type Props = {
  value: number;
  active: boolean;
  disabled?: boolean;
  onPress: (value: number) => void;
};

export const BetChip: React.FC<Props> = ({value, active, disabled, onPress}) => {
  const {scale, onPressIn, onPressOut} = usePressScale(0.93);

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`Bet ${value} coins`}
      accessibilityState={{selected: active, disabled: !!disabled}}
      disabled={disabled}
      onPress={() => onPress(value)}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      hitSlop={{top: 8, bottom: 8, left: 6, right: 6}}
      style={[styles.press, {opacity: disabled ? 0.45 : 1}]}>
      <Animated.View
        style={[
          styles.chip,
          active ? styles.chipActive : styles.chipIdle,
          {transform: [{scale}]},
        ]}>
        <Text
          style={[styles.value, {color: active ? THEME.accent : THEME.textMuted}]}>
          {value}
        </Text>
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  press: {
    flex: 1,
    height: 44,
  },
  chip: {
    width: '100%',
    height: 44,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chipIdle: {
    backgroundColor: 'rgba(255,245,230,0.06)',
    borderWidth: 1,
    borderColor: 'rgba(255,245,230,0.1)',
  },
  chipActive: {
    backgroundColor: 'rgba(178,30,53,0.28)',
    borderWidth: 1.5,
    borderColor: THEME.accent,
  },
  value: {
    fontSize: 15,
    lineHeight: 18,
    fontWeight: '800',
    letterSpacing: 0.8,
    fontVariant: ['tabular-nums' as const],
  },
});
