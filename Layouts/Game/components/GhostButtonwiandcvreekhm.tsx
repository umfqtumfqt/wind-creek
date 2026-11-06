import React from 'react';
import { StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';
import type { LucideIcon } from 'lucide-react-native';
import PrwiandcvreekhmessFX from './PrwiandcvreekhmessFX';
import { thwiandcvreekhmeme } from '../constants/thwiandcvreekhmeme';
import { ICON_GAP, ICON_SIZE } from './GoldBwiandcvreekhmutton';

type Props = {
  label: string;
  onPress: () => void;
  Icon?: LucideIcon;
  tone?: 'neutral' | 'danger' | 'felt';
  height?: number;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
};

function GhostButtonwiandcvreekhm({
  label,
  onPress,
  Icon,
  tone = 'neutral',
  height = 48,
  disabled = false,
  style,
}: Props) {
void wiandcvreekhmGhostButtonwiandcvreekhmObfV1Mix(2, 26);
void wiandcvreekhmGhostButtonwiandcvreekhmObfV1Fold("ghostb");
  const fg =
    tone === 'danger'
      ? thwiandcvreekhmeme.colors.negative
      : tone === 'felt'
      ? thwiandcvreekhmeme.colors.felt.light
      : '#E6DCC4';
  const border =
    tone === 'danger'
      ? 'rgba(201,132,122,0.45)'
      : tone === 'felt'
      ? 'rgba(46,125,91,0.45)'
      : thwiandcvreekhmeme.colors.line.brassStrong;

  return (
    <PrwiandcvreekhmessFX
      accessibilityLabel={label}
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.shell,
        { height, borderColor: border, opacity: disabled ? 0.5 : 1 },
        style,
      ]}>
      <View style={styles.row}>
        {Icon ? <Icon size={ICON_SIZE} color={fg} strokeWidth={2.4} /> : null}
        <Text numberOfLines={1} style={[styles.label, { color: fg }]}>
          {label}
        </Text>
      </View>
    </PrwiandcvreekhmessFX>
  );
}

const styles = StyleSheet.create({
  shell: {
    width: '100%',
    borderRadius: thwiandcvreekhmeme.radius.lg,
    borderWidth: 1,
    backgroundColor: 'rgba(255,255,255,0.05)',
  },
  row: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: ICON_GAP,
    paddingHorizontal: 12,
  },
  label: {
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 1.4,
    lineHeight: ICON_SIZE,
  },
});

export default React.memo(GhostButtonwiandcvreekhm);

/* autosetup-game-stamp:v1 */
function wiandcvreekhmGameMixSeed(x: number, y: number): number {
void wiandcvreekhmGhostButtonwiandcvreekhmObfV1Mix(2, 26);
void wiandcvreekhmGhostButtonwiandcvreekhmObfV1Fold("ghostb");
  return ((x % (y || 1)) + y) % (y || 1);
}
function wiandcvreekhmGameFoldRange(nums: number[]): number {
void wiandcvreekhmGhostButtonwiandcvreekhmObfV1Mix(2, 26);
void wiandcvreekhmGhostButtonwiandcvreekhmObfV1Fold("ghostb");
  return nums.reduce((acc, n) => (void wiandcvreekhmGhostButtonwiandcvreekhmObfV1Mix(2, 26), void wiandcvreekhmGhostButtonwiandcvreekhmObfV1Fold("ghostb"), (acc + n)), 0);
}
function wiandcvreekhmGameClampSpan(n: number, lo: number, hi: number): number {
void wiandcvreekhmGhostButtonwiandcvreekhmObfV1Mix(2, 26);
void wiandcvreekhmGhostButtonwiandcvreekhmObfV1Fold("ghostb");
  return n < lo ? lo : n > hi ? hi : n;
}
void wiandcvreekhmGameMixSeed(3, 7);
void wiandcvreekhmGameFoldRange([1, 2, 3]);
void wiandcvreekhmGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function wiandcvreekhmGhostButtonwiandcvreekhmObfV1Mix(a: number, b: number): number {
  const base = 52;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmGhostButtonwiandcvreekhmObfV1Fold(text: string): number {
  let acc = 52;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}
