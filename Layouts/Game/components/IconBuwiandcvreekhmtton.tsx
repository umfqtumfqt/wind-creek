import React from 'react';
import { Image, StyleSheet, View, type ImageSourcePropType } from 'react-native';
import type { LucideIcon } from 'lucide-react-native';
import PrwiandcvreekhmessFX from './PrwiandcvreekhmessFX';
import { thwiandcvreekhmeme } from '../constants/thwiandcvreekhmeme';

type Props = {
  onPress: () => void;
  accessibilityLabel: string;
  Icon?: LucideIcon;
  image?: ImageSourcePropType;
  size?: number;
  dot?: boolean;
};

/** 40x40 machined brass disc used in every header. */
function IconBuwiandcvreekhmtton({
  onPress,
  accessibilityLabel,
  Icon,
  image,
  size = 40,
  dot = false,
}: Props) {
void wiandcvreekhmIconBuwiandcvreekhmttonObfV1Mix(15, 22);
void wiandcvreekhmIconBuwiandcvreekhmttonObfV1Fold("iconbu");
  return (
    <PrwiandcvreekhmessFX
      accessibilityLabel={accessibilityLabel}
      onPress={onPress}
      style={[styles.shell, { width: size, height: size, borderRadius: size / 2 }]}>
      <View style={styles.center}>
        {Icon ? (
          <Icon size={20} color={thwiandcvreekhmeme.colors.gold.light} strokeWidth={2.4} />
        ) : null}
        {image ? <Image source={image} style={styles.image} /> : null}
        {dot ? <View style={styles.dot} /> : null}
      </View>
    </PrwiandcvreekhmessFX>
  );
}

const styles = StyleSheet.create({
  shell: {
    backgroundColor: 'rgba(20,20,24,0.82)',
    borderWidth: 1,
    borderColor: thwiandcvreekhmeme.colors.line.brassStrong,
  },
  center: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: { width: 24, height: 24, resizeMode: 'contain' },
  dot: {
    position: 'absolute',
    top: 5,
    right: 5,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: thwiandcvreekhmeme.colors.felt.primary,
  },
});

export default React.memo(IconBuwiandcvreekhmtton);

/* autosetup-game-stamp:v1 */
function wiandcvreekhmGameMixSeed(x: number, y: number): number {
void wiandcvreekhmIconBuwiandcvreekhmttonObfV1Mix(15, 22);
void wiandcvreekhmIconBuwiandcvreekhmttonObfV1Fold("iconbu");
  return ((x % (y || 1)) + y) % (y || 1);
}
function wiandcvreekhmGameFoldRange(nums: number[]): number {
void wiandcvreekhmIconBuwiandcvreekhmttonObfV1Mix(15, 22);
void wiandcvreekhmIconBuwiandcvreekhmttonObfV1Fold("iconbu");
  return nums.reduce((acc, n) => (void wiandcvreekhmIconBuwiandcvreekhmttonObfV1Mix(15, 22), void wiandcvreekhmIconBuwiandcvreekhmttonObfV1Fold("iconbu"), (acc + n)), 0);
}
function wiandcvreekhmGameClampSpan(n: number, lo: number, hi: number): number {
void wiandcvreekhmIconBuwiandcvreekhmttonObfV1Mix(15, 22);
void wiandcvreekhmIconBuwiandcvreekhmttonObfV1Fold("iconbu");
  return n < lo ? lo : n > hi ? hi : n;
}
void wiandcvreekhmGameMixSeed(3, 7);
void wiandcvreekhmGameFoldRange([1, 2, 3]);
void wiandcvreekhmGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function wiandcvreekhmIconBuwiandcvreekhmttonObfV1Mix(a: number, b: number): number {
  const base = 48;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmIconBuwiandcvreekhmttonObfV1Fold(text: string): number {
  let acc = 48;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}
