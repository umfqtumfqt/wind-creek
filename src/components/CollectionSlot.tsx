import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Check, Lock } from 'lucide-react-native';
import { SPRITES } from '../assets';
import { theme } from '../constants/theme';

type Props = { spriteIndex: number; collected: boolean; name: string };

function CollectionSlot({ spriteIndex, collected, name }: Props) {
  return (
    <View style={[styles.slot, collected ? styles.slotOn : null]}>
      <Image
        source={SPRITES[spriteIndex]}
        style={[styles.sprite, collected ? null : styles.spriteLocked]}
      />
      {collected ? null : <View pointerEvents="none" style={styles.veil} />}
      <View style={[styles.badge, collected ? styles.badgeOn : null]}>
        {collected ? (
          <Check size={14} color={theme.colors.felt.primary} strokeWidth={3} />
        ) : (
          <Lock size={12} color={theme.colors.text.disabled} strokeWidth={2.6} />
        )}
      </View>
      <Text numberOfLines={1} style={styles.name}>
        {name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  slot: {
    flex: 1,
    aspectRatio: 0.78,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: theme.radius.lg,
    backgroundColor: theme.colors.bg.raised,
    borderWidth: 1,
    borderColor: theme.colors.line.brass,
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
    borderColor: theme.colors.line.brass,
  },
  badgeOn: { borderColor: 'rgba(46,125,91,0.65)' },
  name: {
    marginTop: 8,
    fontSize: 7.5,
    fontWeight: '700',
    letterSpacing: 0.8,
    lineHeight: 10,
    color: theme.colors.text.muted,
    paddingHorizontal: 2,
  },
});

export default React.memo(CollectionSlot);
