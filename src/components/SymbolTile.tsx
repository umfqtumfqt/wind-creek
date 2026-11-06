import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {SymbolDef} from '../game/symbols';

type Props = {
  symbol: SymbolDef;
  /** Cell edge in px — the image sits inside it with breathing room. */
  cell: number;
};

/**
 * A plain Image over the velvet. The sprites arrive with a transparent
 * background, so no overflow:hidden + oversized-image masking hack.
 */
export const SymbolTile: React.FC<Props> = React.memo(({symbol, cell}) => {
  const art = Math.round(cell - 16);
  return (
    <View style={[styles.cell, {width: cell, height: cell}]}>
      <Image
        source={symbol.asset}
        style={{width: art, height: art}}
        resizeMode="contain"
      />
    </View>
  );
});

SymbolTile.displayName = 'SymbolTile';

const styles = StyleSheet.create({
  cell: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
