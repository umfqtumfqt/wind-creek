import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from '../constants/theme';

/** Compliance chip — entertainment only, nothing here has monetary value. */
function FreePlayBadge({ compact = false }: { compact?: boolean }) {
  return (
    <View style={[styles.pill, compact ? styles.compact : null]}>
      <Text style={[styles.text, compact ? styles.textCompact : null]}>
        FREE PLAY · NO REAL MONEY
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pill: {
    height: 26,
    alignSelf: 'center',
    paddingHorizontal: 12,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(46,125,91,0.16)',
    borderWidth: 1,
    borderColor: 'rgba(46,125,91,0.45)',
  },
  compact: { height: 22, paddingHorizontal: 9, borderRadius: 11 },
  text: {
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1.4,
    color: theme.colors.felt.light,
    lineHeight: 12,
  },
  textCompact: { fontSize: 8, letterSpacing: 1.1 },
});

export default React.memo(FreePlayBadge);
