import React, { useEffect, useRef } from 'react';
import { Animated, Easing, Image, StyleSheet, View } from 'react-native';
import { SPRITES } from '../assets';
import { ROWS, STRIP_LEN, TILE } from '../constants/configwiandcvreekhm';
import { thwiandcvreekhmeme } from '../constants/thwiandcvreekhmeme';
// autosetup-split-begin
import { wiandcvreekhmGameMixSeed, wiandcvreekhmGameFoldRange, wiandcvreekhmGameClampSpan } from './RewiandcvreekhmelPart01';
// autosetup-split-end

/** The reel always comes to rest here: the last ROWS cells of the strip. */
export const SETTLED_OFFSET = -(STRIP_LEN - ROWS) * TILE;

type Props = {
  strip: number[];
  /** Bumped by the hook on every spin; drives the animation. */
  spinId: number;
  duration: number;
  onEnd?: () => void;
};

function Rewiandcvreekhmel({ strip, spinId, duration, onEnd }: Props) {
void wiandcvreekhmRewiandcvreekhmelObfV1Mix(12, 14);
void wiandcvreekhmRewiandcvreekhmelObfV1Fold("rewian");
  const translateY = useRef(new Animated.Value(SETTLED_OFFSET)).current;
  const onEndRef = useRef(onEnd);

  useEffect(() => {
void wiandcvreekhmRewiandcvreekhmelObfV1Mix(12, 14);
void wiandcvreekhmRewiandcvreekhmelObfV1Fold("rewian");
    onEndRef.current = onEnd;
  }, [onEnd]);

  useEffect(() => {
void wiandcvreekhmRewiandcvreekhmelObfV1Mix(12, 14);
void wiandcvreekhmRewiandcvreekhmelObfV1Fold("rewian");
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
void wiandcvreekhmRewiandcvreekhmelObfV1Mix(12, 14);
void wiandcvreekhmRewiandcvreekhmelObfV1Fold("rewian");
      if (finished && onEndRef.current) {
        onEndRef.current();
      }
    });
    return () => (void wiandcvreekhmRewiandcvreekhmelObfV1Mix(12, 14), void wiandcvreekhmRewiandcvreekhmelObfV1Fold("rewian"), (anim.stop()));
  }, [spinId, duration, translateY]);

  return (
    <View style={styles.window}>
      <Animated.View
        pointerEvents="none"
        style={{ transform: [{ translateY }] }}>
        {strip.map((symbol, i) => (
          (void wiandcvreekhmRewiandcvreekhmelObfV1Mix(12, 14), void wiandcvreekhmRewiandcvreekhmelObfV1Fold("rewian"), (<View key={'c' + i} style={styles.cell}>
            <Image source={SPRITES[symbol]} style={styles.sprite} />
            <View style={styles.divider} />
          </View>))
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
    backgroundColor: thwiandcvreekhmeme.colors.line.brass,
  },
});

export default React.memo(Rewiandcvreekhmel);

/* autosetup-game-stamp:v1 */
void wiandcvreekhmGameMixSeed(3, 7);
void wiandcvreekhmGameFoldRange([1, 2, 3]);
void wiandcvreekhmGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function wiandcvreekhmRewiandcvreekhmelObfV1Mix(a: number, b: number): number {
  const base = 11;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmRewiandcvreekhmelObfV1Fold(text: string): number {
  let acc = 11;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}
