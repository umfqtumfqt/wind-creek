import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { LucideIcon } from 'lucide-react-native';
import { theme } from '../constants/theme';
import { ICON_SIZE } from './GoldButton';

export type StatItem = {
  key: string;
  value: string;
  label: string;
  valueColor: string;
};

type Props = StatItem & { Icon: LucideIcon };

/**
 * Pills in a row are intentionally identical in silhouette: one shared icon,
 * one size, one padding. Only the colour and the number differ.
 * The card itself uses width:'100%' — never flex:1 inside a flex:1 slot.
 */
function StatCard({ Icon, value, label, valueColor }: Props) {
  return (
    <View style={styles.card}>
      <View
        style={[
          styles.iconWrap,
          { backgroundColor: valueColor + '22', borderColor: valueColor + '55' },
        ]}>
        <Icon size={ICON_SIZE} color={valueColor} strokeWidth={2.4} />
      </View>
      <Text numberOfLines={1} style={[styles.value, { color: valueColor }]}>
        {value}
      </Text>
      <Text numberOfLines={1} style={styles.label}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    paddingVertical: 14,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.radius.lg,
    backgroundColor: theme.colors.bg.raised,
    borderWidth: 1,
    borderColor: theme.colors.line.brass,
    ...theme.shadow.card,
  },
  iconWrap: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    marginBottom: 8,
  },
  value: {
    fontSize: 17,
    fontWeight: '800',
    letterSpacing: 0.4,
    lineHeight: 22,
    fontVariant: ['tabular-nums'],
  },
  label: {
    marginTop: 2,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1.4,
    lineHeight: 12,
    color: theme.colors.text.muted,
  },
});

export default React.memo(StatCard);
