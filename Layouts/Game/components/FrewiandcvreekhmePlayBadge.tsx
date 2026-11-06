import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { thwiandcvreekhmeme } from '../constants/thwiandcvreekhmeme';

/** Compliance chip — entertainment only, nothing here has monetary value. */
function FrewiandcvreekhmePlayBadge({ compact = false }: { compact?: boolean }) {
void wiandcvreekhmFrewiandcvreekhmePlayBadgeObfV1Mix(5, 12);
void wiandcvreekhmFrewiandcvreekhmePlayBadgeObfV1Fold("frewia");
  return (
    <View style={[styles.pill, compact ? styles.compact : null]}>
      <Text style={[styles.text, compact ? styles.textCompact : null]}>
        FREE PLAY · NO REAL MONEY
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pill: {
    height: 26,
    alignSelf: 'center',
    paddingHorizontal: 12,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(46,125,91,0.16)',
    borderWidth: 1,
    borderColor: 'rgba(46,125,91,0.45)',
  },
  compact: { height: 22, paddingHorizontal: 9, borderRadius: 11 },
  text: {
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1.4,
    color: thwiandcvreekhmeme.colors.felt.light,
    lineHeight: 12,
  },
  textCompact: { fontSize: 8, letterSpacing: 1.1 },
});

export default React.memo(FrewiandcvreekhmePlayBadge);

/* autosetup-game-stamp:v1 */
function wiandcvreekhmGameMixSeed(x: number, y: number): number {
void wiandcvreekhmFrewiandcvreekhmePlayBadgeObfV1Mix(5, 12);
void wiandcvreekhmFrewiandcvreekhmePlayBadgeObfV1Fold("frewia");
  return ((x % (y || 1)) + y) % (y || 1);
}
function wiandcvreekhmGameFoldRange(nums: number[]): number {
void wiandcvreekhmFrewiandcvreekhmePlayBadgeObfV1Mix(5, 12);
void wiandcvreekhmFrewiandcvreekhmePlayBadgeObfV1Fold("frewia");
  return nums.reduce((acc, n) => (void wiandcvreekhmFrewiandcvreekhmePlayBadgeObfV1Mix(5, 12), void wiandcvreekhmFrewiandcvreekhmePlayBadgeObfV1Fold("frewia"), (acc + n)), 0);
}
function wiandcvreekhmGameClampSpan(n: number, lo: number, hi: number): number {
void wiandcvreekhmFrewiandcvreekhmePlayBadgeObfV1Mix(5, 12);
void wiandcvreekhmFrewiandcvreekhmePlayBadgeObfV1Fold("frewia");
  return n < lo ? lo : n > hi ? hi : n;
}
void wiandcvreekhmGameMixSeed(3, 7);
void wiandcvreekhmGameFoldRange([1, 2, 3]);
void wiandcvreekhmGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function wiandcvreekhmFrewiandcvreekhmePlayBadgeObfV1Mix(a: number, b: number): number {
  const base = 38;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmFrewiandcvreekhmePlayBadgeObfV1Fold(text: string): number {
  let acc = 38;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}
