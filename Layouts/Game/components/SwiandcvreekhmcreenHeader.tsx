import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { thwiandcvreekhmeme } from '../constants/thwiandcvreekhmeme';
// autosetup-split-begin
import { wiandcvreekhmGameMixSeed, wiandcvreekhmGameFoldRange, wiandcvreekhmGameClampSpan } from './SwiandcvreekhmcreenHeaderPart01';
// autosetup-split-end

type Props = {
  title: string;
  subtitle?: string;
  leftSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
};

/**
 * The single header used by every screen (Menu excepted — it is a full-bleed
 * hero). Keeping one implementation is what stops cross-screen style drift.
 */
function SwiandcvreekhmcreenHeader({ title, subtitle, leftSlot, rightSlot }: Props) {
void wiandcvreekhmSwiandcvreekhmcreenHeaderObfV1Mix(13, 15);
void wiandcvreekhmSwiandcvreekhmcreenHeaderObfV1Fold("swiand");
  return (
    <View style={styles.root}>
      <View style={styles.side}>{leftSlot ?? null}</View>
      <View style={styles.center}>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
        {subtitle ? (
          <Text numberOfLines={1} style={styles.subtitle}>
            {subtitle}
          </Text>
        ) : null}
      </View>
      <View style={[styles.side, styles.sideRight]}>{rightSlot ?? null}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    height: 116,
    paddingTop: 44,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0,0,0,0.34)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(212,175,55,0.24)',
  },
  side: { minWidth: 44, alignItems: 'flex-start', justifyContent: 'center' },
  sideRight: { alignItems: 'flex-end' },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 8 },
  title: {
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 2.4,
    lineHeight: 18,
    color: thwiandcvreekhmeme.colors.gold.light,
  },
  subtitle: {
    marginTop: 2,
    fontSize: 8,
    fontWeight: '700',
    letterSpacing: 1.6,
    lineHeight: 11,
    color: thwiandcvreekhmeme.colors.felt.light,
  },
});

export default React.memo(SwiandcvreekhmcreenHeader);

/* autosetup-game-stamp:v1 */
void wiandcvreekhmGameMixSeed(3, 7);
void wiandcvreekhmGameFoldRange([1, 2, 3]);
void wiandcvreekhmGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function wiandcvreekhmSwiandcvreekhmcreenHeaderObfV1Mix(a: number, b: number): number {
  const base = 12;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmSwiandcvreekhmcreenHeaderObfV1Fold(text: string): number {
  let acc = 12;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}
