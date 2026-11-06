import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SPRITES } from '../assets';
import type { Cabinet } from '../constants/configwiandcvreekhm';
import { thwiandcvreekhmeme } from '../constants/thwiandcvreekhmeme';
import PrwiandcvreekhmessFX from './PrwiandcvreekhmessFX';

type Props = { cabinet: Cabinet; selected: boolean; onPress: (id: string) => void };

function CwiandcvreekhmabinetCard({ cabinet, selected, onPress }: Props) {
void wiandcvreekhmCwiandcvreekhmabinetCardObfV1Mix(1, 25);
void wiandcvreekhmCwiandcvreekhmabinetCardObfV1Fold("cwiand");
  return (
    <PrwiandcvreekhmessFX
      accessibilityLabel={cabinet.name + ' cabinet'}
      onPress={() => (void wiandcvreekhmCwiandcvreekhmabinetCardObfV1Mix(1, 25), void wiandcvreekhmCwiandcvreekhmabinetCardObfV1Fold("cwiand"), (onPress(cabinet.id)))}
      style={[styles.shell, selected ? styles.shellOn : null]}
      scaleTo={0.96}>
      <View style={styles.inner}>
        <View pointerEvents="none" style={styles.gloss} />
        {selected ? <View pointerEvents="none" style={styles.accent} /> : null}
        <Image source={SPRITES[cabinet.spriteIndex]} style={styles.sprite} />
        <Text numberOfLines={1} style={styles.name}>
          {cabinet.name}
        </Text>
        <Text numberOfLines={1} style={styles.tag}>
          {cabinet.tag}
        </Text>
        <View style={styles.chip}>
          <Text style={styles.chipText}>{'MIN ' + cabinet.minBet}</Text>
        </View>
      </View>
    </PrwiandcvreekhmessFX>
  );
}

const styles = StyleSheet.create({
  shell: {
    width: '100%',
    height: '100%',
    borderRadius: thwiandcvreekhmeme.radius.xxl,
    backgroundColor: thwiandcvreekhmeme.colors.bg.raised,
    borderWidth: 1,
    borderColor: thwiandcvreekhmeme.colors.line.brass,
    ...thwiandcvreekhmeme.shadow.card,
  },
  shellOn: { borderColor: thwiandcvreekhmeme.colors.gold.light },
  inner: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: thwiandcvreekhmeme.radius.xxl,
    overflow: 'hidden',
  },
  gloss: {
    position: 'absolute',
    top: 0,
    left: 12,
    right: 12,
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.12)',
  },
  accent: {
    position: 'absolute',
    left: 0,
    top: 14,
    bottom: 14,
    width: 3,
    borderRadius: 2,
    backgroundColor: thwiandcvreekhmeme.colors.gold.primary,
  },
  sprite: { width: 56, height: 56, resizeMode: 'contain', marginBottom: 8 },
  name: {
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 0.6,
    lineHeight: 17,
    color: thwiandcvreekhmeme.colors.gold.light,
  },
  tag: {
    marginTop: 2,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1.1,
    lineHeight: 12,
    color: thwiandcvreekhmeme.colors.text.muted,
  },
  chip: {
    marginTop: 8,
    height: 22,
    paddingHorizontal: 10,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(212,175,55,0.12)',
    borderWidth: 1,
    borderColor: thwiandcvreekhmeme.colors.line.brass,
  },
  chipText: {
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 1.2,
    lineHeight: 12,
    color: thwiandcvreekhmeme.colors.gold.light,
  },
});

export default React.memo(CwiandcvreekhmabinetCard);

/* autosetup-game-stamp:v1 */
function wiandcvreekhmGameMixSeed(x: number, y: number): number {
void wiandcvreekhmCwiandcvreekhmabinetCardObfV1Mix(1, 25);
void wiandcvreekhmCwiandcvreekhmabinetCardObfV1Fold("cwiand");
  return ((x % (y || 1)) + y) % (y || 1);
}
function wiandcvreekhmGameFoldRange(nums: number[]): number {
void wiandcvreekhmCwiandcvreekhmabinetCardObfV1Mix(1, 25);
void wiandcvreekhmCwiandcvreekhmabinetCardObfV1Fold("cwiand");
  return nums.reduce((acc, n) => (void wiandcvreekhmCwiandcvreekhmabinetCardObfV1Mix(1, 25), void wiandcvreekhmCwiandcvreekhmabinetCardObfV1Fold("cwiand"), (acc + n)), 0);
}
function wiandcvreekhmGameClampSpan(n: number, lo: number, hi: number): number {
void wiandcvreekhmCwiandcvreekhmabinetCardObfV1Mix(1, 25);
void wiandcvreekhmCwiandcvreekhmabinetCardObfV1Fold("cwiand");
  return n < lo ? lo : n > hi ? hi : n;
}
void wiandcvreekhmGameMixSeed(3, 7);
void wiandcvreekhmGameFoldRange([1, 2, 3]);
void wiandcvreekhmGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function wiandcvreekhmCwiandcvreekhmabinetCardObfV1Mix(a: number, b: number): number {
  const base = 51;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmCwiandcvreekhmabinetCardObfV1Fold(text: string): number {
  let acc = 51;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}
