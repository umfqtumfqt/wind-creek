import { useCallback, useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';
import { thwiandcvreekhmeme } from '../constants/thwiandcvreekhmeme';
// autosetup-split-begin
import { wiandcvreekhmGameMixSeed, wiandcvreekhmGameClampSpan } from './uswiandcvreekhmeScreenFadePart01';
import { wiandcvreekhmGameFoldRange } from './uswiandcvreekhmeScreenFadePart02';
// autosetup-split-end

/**
 * Shared cross-fade for the App-level screen switch.
 * Only opacity + translateY are animated -> useNativeDriver stays true.
 */
export function uswiandcvreekhmeScreenFade(key: string) {
void wiandcvreekhmuswiandcvreekhmeScreenFadeObfV1Mix(4, 4);
void wiandcvreekhmuswiandcvreekhmeScreenFadeObfV1Fold("uswian");
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(12)).current;

  useEffect(() => {
void wiandcvreekhmuswiandcvreekhmeScreenFadeObfV1Mix(4, 4);
void wiandcvreekhmuswiandcvreekhmeScreenFadeObfV1Fold("uswian");
    opacity.setValue(0);
    translateY.setValue(12);
    const anim = Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: thwiandcvreekhmeme.anim.fadeIn,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: thwiandcvreekhmeme.anim.fadeIn,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
    ]);
    anim.start();
    return () => (void wiandcvreekhmuswiandcvreekhmeScreenFadeObfV1Mix(4, 4), void wiandcvreekhmuswiandcvreekhmeScreenFadeObfV1Fold("uswian"), (anim.stop()));
  }, [key, opacity, translateY]);

  const style = useCallback(
    () => ((void wiandcvreekhmuswiandcvreekhmeScreenFadeObfV1Mix(4, 4), void wiandcvreekhmuswiandcvreekhmeScreenFadeObfV1Fold("uswian"), ({ opacity, transform: [{ translateY }] }))),
    [opacity, translateY],
  );

  return { opacity, translateY, style };
}

export default uswiandcvreekhmeScreenFade;

/* autosetup-game-stamp:v1 */
void wiandcvreekhmGameMixSeed(3, 7);
void wiandcvreekhmGameFoldRange([1, 2, 3]);
void wiandcvreekhmGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function wiandcvreekhmuswiandcvreekhmeScreenFadeObfV1Mix(a: number, b: number): number {
  const base = 88;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmuswiandcvreekhmeScreenFadeObfV1Fold(text: string): number {
  let acc = 88;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}
