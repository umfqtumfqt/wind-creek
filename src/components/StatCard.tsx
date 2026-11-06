import React from 'react';
import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import {THEME} from '../constants/theme';

type Props = {
  value: string;
  label: string;
  valueColor?: string;
  style?: StyleProp<ViewStyle>;
};

/**
 * Colour carries the semantics — no raster icon, so every card in a row is
 * geometrically identical. width:'100%' and NOT flex:1: the parent slot is
 * already flex:1, and nesting the two collapses the card to ~0 px tall.
 */
export const StatCard: React.FC<Props> = ({
  value,
  label,
  valueColor = THEME.accent,
  style,
}) => (
  <View style={[styles.card, {borderColor: valueColor + '55'}, style]}>
    <View style={[styles.dot, {backgroundColor: valueColor}]} />
    <Text style={[styles.value, {color: valueColor}]} numberOfLines={1}>
      {value}
    </Text>
    <Text style={styles.label} numberOfLines={1}>
      {label}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: 'rgba(10,3,6,0.46)',
    borderWidth: 1,
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginBottom: 7,
  },
  value: {
    fontSize: 22,
    fontWeight: '800',
    letterSpacing: 0.6,
    fontVariant: ['tabular-nums' as const],
  },
  label: {
    marginTop: 3,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.3,
    color: THEME.textDim,
  },
});
