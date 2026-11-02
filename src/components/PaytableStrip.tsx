import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SPRITES } from '../assets';
import { SYMBOLS } from '../constants/config';
import { theme } from '../constants/theme';

/** Fictional multipliers over virtual coins — never framed as odds or payout. */
function PaytableStrip() {
  return (
    <View style={styles.wrap}>
      <View style={styles.row}>
        {SYMBOLS.map(sym => (
          <View key={sym.key} style={styles.slot}>
            <Image source={SPRITES[sym.index]} style={styles.sprite} />
            <Text style={styles.mult}>{'x' + sym.multiplier}</Text>
          </View>
        ))}
      </View>
      <Text style={styles.footer}>MULTIPLIERS APPLY TO VIRTUAL COINS ONLY</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    width: '100%',
    borderRadius: theme.radius.lg,
    backgroundColor: theme.colors.bg.raised,
    borderWidth: 1,
    borderColor: theme.colors.line.brass,
    paddingVertical: 14,
    paddingHorizontal: 10,
  },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  slot: { flex: 1, alignItems: 'center' },
  sprite: { width: 36, height: 36, resizeMode: 'contain' },
  mult: {
    marginTop: 6,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 0.6,
    lineHeight: 15,
    color: theme.colors.gold.light,
  },
  footer: {
    marginTop: 12,
    textAlign: 'center',
    fontSize: 8,
    fontWeight: '700',
    letterSpacing: 1.2,
    lineHeight: 11,
    color: theme.colors.text.disabled,
  },
});

export default React.memo(PaytableStrip);
