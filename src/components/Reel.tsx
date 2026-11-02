import React, { useEffect, useRef } from 'react';
import { Animated, Easing, Image, StyleSheet, View } from 'react-native';
import { SPRITES } from '../assets';
import { ROWS, STRIP_LEN, TILE } from '../constants/config';
import { theme } from '../constants/theme';

/** The reel always comes to rest here: the last ROWS cells of the strip. */
export const SETTLED_OFFSET = -(STRIP_LEN - ROWS) * TILE;

type Props = {
  strip: number[];
  /** Bumped by the hook on every spin; drives the animation. */
  spinId: number;
  duration: number;
  onEnd?: () => void;
};

function Reel({ strip, spinId, duration, onEnd }: Props) {
  const translateY = useRef(new Animated.Value(SETTLED_OFFSET)).current;
  const onEndRef = useRef(onEnd);

  useEffect(() => {
    onEndRef.current = onEnd;
  }, [onEnd]);

  useEffect(() => {
    if (spinId === 0) {
      return;
    }
    translateY.setValue(0);
    const anim = Animated.timing(translateY, {
      toValue: SETTLED_OFFSET,
      duration,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    });
    anim.start(({ finished }) => {
      if (finished && onEndRef.current) {
        onEndRef.current();
      }
    });
    return () => anim.stop();
  }, [spinId, duration, translateY]);

  return (
    <View style={styles.window}>
      <Animated.View
        pointerEvents="none"
        style={{ transform: [{ translateY }] }}>
        {strip.map((symbol, i) => (
          <View key={'c' + i} style={styles.cell}>
            <Image source={SPRITES[symbol]} style={styles.sprite} />
            <View style={styles.divider} />
          </View>
        ))}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  window: {
    width: TILE,
    height: TILE * ROWS,
    overflow: 'hidden',
  },
  cell: {
    width: TILE,
    height: TILE,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#16161C',
  },
  sprite: {
    width: TILE - 20,
    height: TILE - 20,
    resizeMode: 'contain',
  },
  divider: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 1,
    backgroundColor: theme.colors.line.brass,
  },
});

export default React.memo(Reel);
