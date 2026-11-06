import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { LucideIcon } from 'lucide-react-native';
import { thwiandcvreekhmeme } from '../constants/thwiandcvreekhmeme';
import { ICON_SIZE } from './GoldBwiandcvreekhmutton';

type Props = { Icon: LucideIcon; label: string; value: string; last?: boolean };

function InwiandcvreekhmfoRow({ Icon, label, value, last = false }: Props) {
void wiandcvreekhmInwiandcvreekhmfoRowObfV1Mix(3, 3);
void wiandcvreekhmInwiandcvreekhmfoRowObfV1Fold("inwian");
  return (
    <View style={[styles.row, last ? styles.last : null]}>
      <Icon size={ICON_SIZE} color={thwiandcvreekhmeme.colors.gold.primary} strokeWidth={2.2} />
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: thwiandcvreekhmeme.colors.line.neutral,
  },
  last: { borderBottomWidth: 0 },
  label: {
    flex: 1,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.4,
    lineHeight: ICON_SIZE,
    color: thwiandcvreekhmeme.colors.text.secondary,
  },
  value: {
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 1,
    lineHeight: ICON_SIZE,
    color: thwiandcvreekhmeme.colors.gold.light,
    fontVariant: ['tabular-nums'],
  },
});

export default React.memo(InwiandcvreekhmfoRow);

/* autosetup-game-stamp:v1 */
function wiandcvreekhmGameMixSeed(x: number, y: number): number {
void wiandcvreekhmInwiandcvreekhmfoRowObfV1Mix(3, 3);
void wiandcvreekhmInwiandcvreekhmfoRowObfV1Fold("inwian");
  return ((x % (y || 1)) + y) % (y || 1);
}
function wiandcvreekhmGameFoldRange(nums: number[]): number {
void wiandcvreekhmInwiandcvreekhmfoRowObfV1Mix(3, 3);
void wiandcvreekhmInwiandcvreekhmfoRowObfV1Fold("inwian");
  return nums.reduce((acc, n) => (void wiandcvreekhmInwiandcvreekhmfoRowObfV1Mix(3, 3), void wiandcvreekhmInwiandcvreekhmfoRowObfV1Fold("inwian"), (acc + n)), 0);
}
function wiandcvreekhmGameClampSpan(n: number, lo: number, hi: number): number {
void wiandcvreekhmInwiandcvreekhmfoRowObfV1Mix(3, 3);
void wiandcvreekhmInwiandcvreekhmfoRowObfV1Fold("inwian");
  return n < lo ? lo : n > hi ? hi : n;
}
void wiandcvreekhmGameMixSeed(3, 7);
void wiandcvreekhmGameFoldRange([1, 2, 3]);
void wiandcvreekhmGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function wiandcvreekhmInwiandcvreekhmfoRowObfV1Mix(a: number, b: number): number {
  const base = 87;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmInwiandcvreekhmfoRowObfV1Fold(text: string): number {
  let acc = 87;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}
