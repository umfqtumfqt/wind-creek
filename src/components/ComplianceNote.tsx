import React from 'react';
import {StyleProp, StyleSheet, Text, TextStyle} from 'react-native';
import {THEME} from '../constants/theme';

type Props = {
  compact?: boolean;
  style?: StyleProp<TextStyle>;
};

/**
 * Fictional coins only: no purchase path, no cash-out, no real-world value.
 * Deliberately worded without the words PLAY or START so it can never be
 * mistaken for the primary call to action.
 */
export const ComplianceNote: React.FC<Props> = ({compact, style}) => (
  <Text style={[styles.note, compact ? styles.compact : null, style]}>
    {compact
      ? 'FOR ENTERTAINMENT ONLY · 18+'
      : 'FOR ENTERTAINMENT ONLY · NO REAL MONEY · 18+'}
  </Text>
);

const styles = StyleSheet.create({
  note: {
    fontSize: 9.5,
    lineHeight: 13,
    fontWeight: '600',
    letterSpacing: 0.8,
    textAlign: 'center',
    color: THEME.textFaint,
  },
  compact: {
    fontSize: 9,
  },
});
