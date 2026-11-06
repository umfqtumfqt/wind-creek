import React, {useEffect, useRef} from 'react';
import {Animated, Dimensions, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {GRADIENTS, THEME} from '../constants/theme';
import {REELS, VISIBLE_ROWS} from '../constants/config';
import {SymbolDef} from '../game/symbols';
import {Reel} from './Reel';

const SCREEN_W = Dimensions.get('window').width;

/**
 * Board geometry. The parent's padding and border are NOT part of the
 * children's content box in RN, so the frame has to be subtracted before the
 * cell size is derived — otherwise the right-hand reel pokes out.
 */
const BOARD_MAX_W = Math.min(SCREEN_W - 32, 380);
const PAD = 10;
const BORDER = 3;
export const BOARD_FRAME = PAD + BORDER;
const GAP = 8;

export const CELL = Math.floor(
  (BOARD_MAX_W - 2 * BOARD_FRAME - GAP * (REELS - 1)) / REELS,
);
export const BOARD_W = CELL * REELS + GAP * (REELS - 1) + 2 * BOARD_FRAME;
export const BOARD_H = CELL * VISIBLE_ROWS + 2 * BOARD_FRAME;

type Props = {
  strips: SymbolDef[][];
  drivers: Animated.Value[];
  winMask: boolean[][];
  celebrate: boolean;
};

export const ReelCabinet: React.FC<Props> = ({
  strips,
  drivers,
  winMask,
  celebrate,
}) => {
  const glow = useRef(new Animated.Value(0.3)).current;

  useEffect(() => {
    if (!celebrate) {
      Animated.timing(glow, {
        toValue: 0.3,
        duration: 220,
        useNativeDriver: true,
      }).start();
      return;
    }
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(glow, {
          toValue: 1,
          duration: 260,
          useNativeDriver: true,
        }),
        Animated.timing(glow, {
          toValue: 0.45,
          duration: 260,
          useNativeDriver: true,
        }),
      ]),
      {iterations: 3},
    );
    loop.start();
    return () => loop.stop();
  }, [celebrate, glow]);

  return (
    <View style={styles.cabinet}>
      {/* Polished metal highlight along the top edge of the frame. */}
      <LinearGradient
        colors={GRADIENTS.sheen}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        pointerEvents="none"
        style={styles.sheen}
      />

      <View style={styles.reelRow}>
        {strips.map((strip, r) => (
          <Reel
            key={`reel-${r}`}
            strip={strip}
            cell={CELL}
            driver={drivers[r]}
            winRows={winMask[r]}
            celebrate={celebrate}
          />
        ))}
      </View>

      <Animated.View
        pointerEvents="none"
        style={[styles.payline, {opacity: glow}]}
      />

      {/* Inner highlight line — gold frame plus a thin lit inset. */}
      <View pointerEvents="none" style={styles.inset} />
    </View>
  );
};

const styles = StyleSheet.create({
  cabinet: {
    width: BOARD_W,
    padding: PAD,
    borderRadius: 22,
    borderWidth: BORDER,
    borderColor: THEME.accent,
    backgroundColor: THEME.surfaceAlt,
    shadowColor: THEME.secondary,
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.5,
    shadowRadius: 24,
    elevation: 12,
  },
  sheen: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 6,
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
  },
  reelRow: {
    flexDirection: 'row',
    gap: 8,
  },
  payline: {
    position: 'absolute',
    left: PAD,
    right: PAD,
    top: PAD + CELL * 1.5 - 1,
    height: 2,
    backgroundColor: THEME.accent,
  },
  inset: {
    position: 'absolute',
    top: 2,
    left: 2,
    right: 2,
    bottom: 2,
    borderRadius: 19,
    borderWidth: 1,
    borderColor: 'rgba(255,245,230,0.12)',
  },
});
