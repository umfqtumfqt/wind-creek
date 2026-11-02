import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SPRITES } from '../assets';
import type { Cabinet } from '../constants/config';
import { theme } from '../constants/theme';
import PressFX from './PressFX';

type Props = { cabinet: Cabinet; selected: boolean; onPress: (id: string) => void };

function CabinetCard({ cabinet, selected, onPress }: Props) {
  return (
    <PressFX
      accessibilityLabel={cabinet.name + ' cabinet'}
      onPress={() => onPress(cabinet.id)}
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
    </PressFX>
  );
}

const styles = StyleSheet.create({
  shell: {
    width: '100%',
    height: '100%',
    borderRadius: theme.radius.xxl,
    backgroundColor: theme.colors.bg.raised,
    borderWidth: 1,
    borderColor: theme.colors.line.brass,
    ...theme.shadow.card,
  },
  shellOn: { borderColor: theme.colors.gold.light },
  inner: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: theme.radius.xxl,
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
    backgroundColor: theme.colors.gold.primary,
  },
  sprite: { width: 56, height: 56, resizeMode: 'contain', marginBottom: 8 },
  name: {
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 0.6,
    lineHeight: 17,
    color: theme.colors.gold.light,
  },
  tag: {
    marginTop: 2,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1.1,
    lineHeight: 12,
    color: theme.colors.text.muted,
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
    borderColor: theme.colors.line.brass,
  },
  chipText: {
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 1.2,
    lineHeight: 12,
    color: theme.colors.gold.light,
  },
});

export default React.memo(CabinetCard);
