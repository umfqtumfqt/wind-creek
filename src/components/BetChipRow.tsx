import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { theme } from '../constants/theme';

const HIT = { top: 8, bottom: 8, left: 8, right: 8 };

type Props = {
  bets: readonly number[];
  active: number;
  onChange: (bet: number) => void;
  disabled?: boolean;
};

function BetChipRow({ bets, active, onChange, disabled = false }: Props) {
  return (
    <View style={[styles.row, disabled ? styles.rowDisabled : null]}>
      {bets.map(bet => {
        const on = bet === active;
        return (
          <Pressable
            key={'bet' + bet}
            accessibilityRole="button"
            accessibilityLabel={'Bet ' + bet + ' coins'}
            accessibilityState={{ selected: on, disabled }}
            hitSlop={HIT}
            disabled={disabled}
            onPress={() => onChange(bet)}
            style={[styles.chip, on ? styles.chipOn : null]}>
            <Text style={[styles.text, on ? styles.textOn : null]}>{bet}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
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

export default React.memo(BetChipRow);
