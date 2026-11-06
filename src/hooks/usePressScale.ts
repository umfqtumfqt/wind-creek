import {useCallback, useRef} from 'react';
import {Animated} from 'react-native';

/**
 * Press feedback the way this stack wants it: the Pressable stays the parent
 * and only drives an Animated.Value, so nothing swallows the touch.
 * transform/scale only -> native driver is safe.
 */
export function usePressScale(down = 0.96) {
  const scale = useRef(new Animated.Value(1)).current;

  const onPressIn = useCallback(() => {
    Animated.spring(scale, {
      toValue: down,
      tension: 300,
      friction: 12,
      useNativeDriver: true,
    }).start();
  }, [scale, down]);

  const onPressOut = useCallback(() => {
    Animated.spring(scale, {
      toValue: 1,
      tension: 300,
      friction: 12,
      useNativeDriver: true,
    }).start();
  }, [scale]);

  return {scale, onPressIn, onPressOut};
}
