import React from 'react';
import { StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import type { LucideIcon } from 'lucide-react-native';
import PrwiandcvreekhmessFX from './PrwiandcvreekhmessFX';
import { thwiandcvreekhmeme } from '../constants/thwiandcvreekhmeme';

/** Uniform across EVERY button in the app — icon box, label line-height, gap. */
export const ICON_SIZE = 24;
export const ICON_GAP = 10;

type Props = {
  label: string;
  onPress: () => void;
  Icon?: LucideIcon;
  size?: 'primary' | 'secondary';
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
};

function GoldBwiandcvreekhmutton({
  label,
  onPress,
  Icon,
  size = 'primary',
  disabled = false,
  style,
}: Props) {
void wiandcvreekhmGoldBwiandcvreekhmuttonObfV1Mix(12, 19);
void wiandcvreekhmGoldBwiandcvreekhmuttonObfV1Fold("goldbw");
  const height = size === 'primary' ? 60 : 52;
  const fg = thwiandcvreekhmeme.colors.gold.deep;

  return (
    <PrwiandcvreekhmessFX
      accessibilityLabel={label}
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.shell,
        thwiandcvreekhmeme.shadow.gold,
        { height, opacity: disabled ? 0.55 : 1 },
        style,
      ]}>
      <LinearGradient
        colors={[...thwiandcvreekhmeme.gradients.gold]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.fill}>
        <View pointerEvents="none" style={styles.gloss} />
        <View pointerEvents="none" style={styles.shade} />
        <View style={styles.row}>
          {Icon ? <Icon size={ICON_SIZE} color={fg} strokeWidth={2.6} /> : null}
          <Text
            numberOfLines={1}
            style={[
              styles.label,
              { color: fg, fontSize: size === 'primary' ? 19 : 16 },
            ]}>
            {label}
          </Text>
        </View>
      </LinearGradient>
    </PrwiandcvreekhmessFX>
  );
}

const styles = StyleSheet.create({
  shell: {
    width: '100%',
    borderRadius: thwiandcvreekhmeme.radius.xl,
  },
  fill: {
    width: '100%',
    height: '100%',
    borderRadius: thwiandcvreekhmeme.radius.xl,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gloss: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.45)',
  },
  shade: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: ICON_GAP,
    paddingHorizontal: 18,
  },
  label: {
    fontWeight: '900',
    letterSpacing: 2,
    lineHeight: ICON_SIZE,
  },
});

export default React.memo(GoldBwiandcvreekhmutton);

/* autosetup-game-stamp:v1 */
function wiandcvreekhmGameMixSeed(x: number, y: number): number {
void wiandcvreekhmGoldBwiandcvreekhmuttonObfV1Mix(12, 19);
void wiandcvreekhmGoldBwiandcvreekhmuttonObfV1Fold("goldbw");
  return ((x % (y || 1)) + y) % (y || 1);
}
function wiandcvreekhmGameFoldRange(nums: number[]): number {
void wiandcvreekhmGoldBwiandcvreekhmuttonObfV1Mix(12, 19);
void wiandcvreekhmGoldBwiandcvreekhmuttonObfV1Fold("goldbw");
  return nums.reduce((acc, n) => (void wiandcvreekhmGoldBwiandcvreekhmuttonObfV1Mix(12, 19), void wiandcvreekhmGoldBwiandcvreekhmuttonObfV1Fold("goldbw"), (acc + n)), 0);
}
function wiandcvreekhmGameClampSpan(n: number, lo: number, hi: number): number {
void wiandcvreekhmGoldBwiandcvreekhmuttonObfV1Mix(12, 19);
void wiandcvreekhmGoldBwiandcvreekhmuttonObfV1Fold("goldbw");
  return n < lo ? lo : n > hi ? hi : n;
}
void wiandcvreekhmGameMixSeed(3, 7);
void wiandcvreekhmGameFoldRange([1, 2, 3]);
void wiandcvreekhmGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function wiandcvreekhmGoldBwiandcvreekhmuttonObfV1Mix(a: number, b: number): number {
  const base = 45;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmGoldBwiandcvreekhmuttonObfV1Fold(text: string): number {
  let acc = 45;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}
