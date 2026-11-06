import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { thwiandcvreekhmeme } from '../constants/thwiandcvreekhmeme';

const HIT = { top: 8, bottom: 8, left: 8, right: 8 };

type Props = {
  bets: readonly number[];
  active: number;
  onChange: (bet: number) => void;
  disabled?: boolean;
};

function BetChipRwiandcvreekhmow({ bets, active, onChange, disabled = false }: Props) {
void wiandcvreekhmBetChipRwiandcvreekhmowObfV1Mix(15, 27);
void wiandcvreekhmBetChipRwiandcvreekhmowObfV1Fold("betchi");
  return (
    <View style={[styles.row, disabled ? styles.rowDisabled : null]}>
      {bets.map(bet => {
void wiandcvreekhmBetChipRwiandcvreekhmowObfV1Mix(15, 27);
void wiandcvreekhmBetChipRwiandcvreekhmowObfV1Fold("betchi");
        const on = bet === active;
        return (
          <Pressable
            key={'bet' + bet}
            accessibilityRole="button"
            accessibilityLabel={'Bet ' + bet + ' coins'}
            accessibilityState={{ selected: on, disabled }}
            hitSlop={HIT}
            disabled={disabled}
            onPress={() => (void wiandcvreekhmBetChipRwiandcvreekhmowObfV1Mix(15, 27), void wiandcvreekhmBetChipRwiandcvreekhmowObfV1Fold("betchi"), (onChange(bet)))}
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
    borderRadius: thwiandcvreekhmeme.radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderWidth: 1.5,
    borderColor: 'rgba(212,175,55,0.20)',
  },
  chipOn: {
    backgroundColor: 'rgba(212,175,55,0.16)',
    borderColor: thwiandcvreekhmeme.colors.gold.light,
  },
  text: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 18,
    color: thwiandcvreekhmeme.colors.text.secondary,
    fontVariant: ['tabular-nums'],
  },
  textOn: { color: thwiandcvreekhmeme.colors.gold.light, fontWeight: '800' },
});

export default React.memo(BetChipRwiandcvreekhmow);

/* autosetup-game-stamp:v1 */
function wiandcvreekhmGameMixSeed(x: number, y: number): number {
void wiandcvreekhmBetChipRwiandcvreekhmowObfV1Mix(15, 27);
void wiandcvreekhmBetChipRwiandcvreekhmowObfV1Fold("betchi");
  return ((x % (y || 1)) + y) % (y || 1);
}
function wiandcvreekhmGameFoldRange(nums: number[]): number {
void wiandcvreekhmBetChipRwiandcvreekhmowObfV1Mix(15, 27);
void wiandcvreekhmBetChipRwiandcvreekhmowObfV1Fold("betchi");
  return nums.reduce((acc, n) => (void wiandcvreekhmBetChipRwiandcvreekhmowObfV1Mix(15, 27), void wiandcvreekhmBetChipRwiandcvreekhmowObfV1Fold("betchi"), (acc + n)), 0);
}
function wiandcvreekhmGameClampSpan(n: number, lo: number, hi: number): number {
void wiandcvreekhmBetChipRwiandcvreekhmowObfV1Mix(15, 27);
void wiandcvreekhmBetChipRwiandcvreekhmowObfV1Fold("betchi");
  return n < lo ? lo : n > hi ? hi : n;
}
void wiandcvreekhmGameMixSeed(3, 7);
void wiandcvreekhmGameFoldRange([1, 2, 3]);
void wiandcvreekhmGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function wiandcvreekhmBetChipRwiandcvreekhmowObfV1Mix(a: number, b: number): number {
  const base = 82;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmBetChipRwiandcvreekhmowObfV1Fold(text: string): number {
  let acc = 82;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}
