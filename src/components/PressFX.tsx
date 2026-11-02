import React, { useCallback, useRef } from 'react';
import {
  Animated,
  Pressable,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import { theme } from '../constants/theme';

const HIT = { top: 8, bottom: 8, left: 8, right: 8 };

type Props = {
  onPress: () => void;
  children: React.ReactNode;
  /** Explicit box — never rely on intrinsic sizing for an interactive area. */
  style: StyleProp<ViewStyle>;
  innerStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  scaleTo?: number;
  accessibilityLabel: string;
};

/**
 * Press feedback with the Pressable as PARENT and the Animated.View as CHILD.
 * (No gesture-handler on this stack.) Only transform is animated, so the
 * native driver stays safe.
 */
function PressFX({
  onPress,
  children,
  style,
  innerStyle,
  disabled = false,
  scaleTo = 0.96,
  accessibilityLabel,
}: Props) {
  const scale = useRef(new Animated.Value(1)).current;

  const onPressIn = useCallback(() => {
    Animated.spring(scale, {
      toValue: scaleTo,
      ...theme.anim.press,
      useNativeDriver: true,
    }).start();
  }, [scale, scaleTo]);

  const onPressOut = useCallback(() => {
    Animated.spring(scale, {
      toValue: 1,
      ...theme.anim.press,
      useNativeDriver: true,
    }).start();
  }, [scale]);

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      accessibilityState={{ disabled }}
      hitSlop={HIT}
      disabled={disabled}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      style={style}>
      <Animated.View
        pointerEvents="box-none"
        style={[
          { width: '100%', height: '100%', transform: [{ scale }] },
          innerStyle,
        ]}>
        {children}
      </Animated.View>
    </Pressable>
  );
}

export default React.memo(PressFX);
