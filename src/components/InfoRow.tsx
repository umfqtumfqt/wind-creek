import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { LucideIcon } from 'lucide-react-native';
import { theme } from '../constants/theme';
import { ICON_SIZE } from './GoldButton';

type Props = { Icon: LucideIcon; label: string; value: string; last?: boolean };

function InfoRow({ Icon, label, value, last = false }: Props) {
  return (
    <View style={[styles.row, last ? styles.last : null]}>
      <Icon size={ICON_SIZE} color={theme.colors.gold.primary} strokeWidth={2.2} />
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.line.neutral,
  },
  last: { borderBottomWidth: 0 },
  label: {
    flex: 1,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.4,
    lineHeight: ICON_SIZE,
    color: theme.colors.text.secondary,
  },
  value: {
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 1,
    lineHeight: ICON_SIZE,
    color: theme.colors.gold.light,
    fontVariant: ['tabular-nums'],
  },
});

export default React.memo(InfoRow);
