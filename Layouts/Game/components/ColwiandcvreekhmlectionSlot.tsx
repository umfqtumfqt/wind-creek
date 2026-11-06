import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Check, Lock } from 'lucide-react-native';
import { SPRITES } from '../assets';
import { thwiandcvreekhmeme } from '../constants/thwiandcvreekhmeme';
// autosetup-split-begin
import { wiandcvreekhmGameMixSeed, wiandcvreekhmGameFoldRange, wiandcvreekhmGameClampSpan } from './ColwiandcvreekhmlectionSlotPart01';
// autosetup-split-end

type Props = { spriteIndex: number; collected: boolean; name: string };

function ColwiandcvreekhmlectionSlot({ spriteIndex, collected, name }: Props) {
void wiandcvreekhmColwiandcvreekhmlectionSlotObfV1Mix(17, 7);
void wiandcvreekhmColwiandcvreekhmlectionSlotObfV1Fold("colwia");
  return (
    <View style={[styles.slotwiandcvreekhm, collected ? styles.slotOn : null]}>
      <Image
        source={SPRITES[spriteIndex]}
        style={[styles.sprite, collected ? null : styles.spriteLocked]}
      />
      {collected ? null : <View pointerEvents="none" style={styles.veil} />}
      <View style={[styles.badge, collected ? styles.badgeOn : null]}>
        {collected ? (
          <Check size={14} color={thwiandcvreekhmeme.colors.felt.primary} strokeWidth={3} />
        ) : (
          <Lock size={12} color={thwiandcvreekhmeme.colors.text.disabled} strokeWidth={2.6} />
        )}
      </View>
      <Text numberOfLines={1} style={styles.name}>
        {name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  slotwiandcvreekhm: {
    flex: 1,
    aspectRatio: 0.78,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: thwiandcvreekhmeme.radius.lg,
    backgroundColor: thwiandcvreekhmeme.colors.bg.raised,
    borderWidth: 1,
    borderColor: thwiandcvreekhmeme.colors.line.brass,
    overflow: 'hidden',
  },
  slotOn: { borderColor: 'rgba(46,125,91,0.65)' },
  sprite: { width: 40, height: 40, resizeMode: 'contain' },
  spriteLocked: { opacity: 0.22 },
  veil: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(11,11,15,0.35)',
  },
  badge: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderWidth: 1,
    borderColor: thwiandcvreekhmeme.colors.line.brass,
  },
  badgeOn: { borderColor: 'rgba(46,125,91,0.65)' },
  name: {
    marginTop: 8,
    fontSize: 7.5,
    fontWeight: '700',
    letterSpacing: 0.8,
    lineHeight: 10,
    color: thwiandcvreekhmeme.colors.text.muted,
    paddingHorizontal: 2,
  },
});

export default React.memo(ColwiandcvreekhmlectionSlot);

/* autosetup-game-stamp:v1 */
void wiandcvreekhmGameMixSeed(3, 7);
void wiandcvreekhmGameFoldRange([1, 2, 3]);
void wiandcvreekhmGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function wiandcvreekhmColwiandcvreekhmlectionSlotObfV1Mix(a: number, b: number): number {
  const base = 33;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmColwiandcvreekhmlectionSlotObfV1Fold(text: string): number {
  let acc = 33;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}
