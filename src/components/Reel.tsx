import React, {useMemo} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {STRIP_COPIES, STRIP_LEN, VISIBLE_ROWS} from '../constants/config';
import {SymbolDef} from '../game/symbols';
import {THEME} from '../constants/theme';
import {SymbolTile} from './SymbolTile';

type Props = {
  strip: SymbolDef[];
  /** Cell edge == reel width, so symbols stay square. */
  cell: number;
  /** Counts cells travelled; wrapped by Animated.modulo for a seamless loop. */
  driver: Animated.Value;
  winRows: boolean[];
  celebrate: boolean;
};

/**
 * A vertical strip clipped to a 3-row window. The column holds two copies of
 * the strip, and translateY is the driver taken modulo the strip length, so
 * the reel can spin forever without ever running off the end of the column.
 */
export const Reel: React.FC<Props> = ({
  strip,
  cell,
  driver,
  winRows,
  celebrate,
}) => {
  const cells = useMemo(() => {
    const out: SymbolDef[] = [];
    for (let copy = 0; copy < STRIP_COPIES; copy++) {
      for (let i = 0; i < strip.length; i++) {
        out.push(strip[i]);
      }
    }
    return out;
  }, [strip]);

  const translateY = useMemo(
    () =>
      Animated.modulo(driver, STRIP_LEN).interpolate({
        inputRange: [0, STRIP_LEN],
        outputRange: [0, -STRIP_LEN * cell],
      }),
    [driver, cell],
  );

  const height = cell * VISIBLE_ROWS;

  return (
    <View style={[styles.window, {width: cell, height}]}>
      <Animated.View
        pointerEvents="none"
        style={{transform: [{translateY}]}}>
        {cells.map((sym, i) => (
          <SymbolTile key={`${sym.key}-${i}`} symbol={sym} cell={cell} />
        ))}
      </Animated.View>

      {/* Inner shadow illusion: the well is lit from the front edges only. */}
      <LinearGradient
        colors={['rgba(0,0,0,0.5)', 'rgba(0,0,0,0)']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        pointerEvents="none"
        style={[styles.shade, {top: 0, height: 12}]}
      />
      <LinearGradient
        colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.5)']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        pointerEvents="none"
        style={[styles.shade, {bottom: 0, height: 12}]}
      />

      {winRows.map((isWin, row) =>
        isWin && celebrate ? (
          <View
            key={`win-${row}`}
            pointerEvents="none"
            style={[
              styles.ring,
              {top: row * cell + 3, height: cell - 6, width: cell - 6},
            ]}
          />
        ) : null,
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  window: {
    overflow: 'hidden',
    borderRadius: 14,
    backgroundColor: '#1A060C',
  },
  shade: {
    position: 'absolute',
    left: 0,
    right: 0,
  },
  ring: {
    position: 'absolute',
    left: 3,
    borderRadius: 12,
    borderWidth: 3,
    borderColor: THEME.accent,
    backgroundColor: 'rgba(109,40,217,0.18)',
  },
});
