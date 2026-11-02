import { useCallback, useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';
import { theme } from '../constants/theme';

/**
 * Shared cross-fade for the App-level screen switch.
 * Only opacity + translateY are animated -> useNativeDriver stays true.
 */
export function useScreenFade(key: string) {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(12)).current;

  useEffect(() => {
    opacity.setValue(0);
    translateY.setValue(12);
    const anim = Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: theme.anim.fadeIn,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: theme.anim.fadeIn,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
    ]);
    anim.start();
    return () => anim.stop();
  }, [key, opacity, translateY]);

  const style = useCallback(
    () => ({ opacity, transform: [{ translateY }] }),
    [opacity, translateY],
  );

  return { opacity, translateY, style };
}

export default useScreenFade;
