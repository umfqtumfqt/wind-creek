import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from '../constants/theme';

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
function ScreenHeader({ title, subtitle, leftSlot, rightSlot }: Props) {
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
    color: theme.colors.gold.light,
  },
  subtitle: {
    marginTop: 2,
    fontSize: 8,
    fontWeight: '700',
    letterSpacing: 1.6,
    lineHeight: 11,
    color: theme.colors.felt.light,
  },
});

export default React.memo(ScreenHeader);
