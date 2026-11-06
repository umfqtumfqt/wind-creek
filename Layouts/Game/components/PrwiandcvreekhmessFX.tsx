import React, { useCallback, useRef } from 'react';
import {
  Animated,
  Pressable,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import { thwiandcvreekhmeme } from '../constants/thwiandcvreekhmeme';
// autosetup-split-begin
import { wiandcvreekhmGameMixSeed, wiandcvreekhmGameClampSpan } from './PrwiandcvreekhmessFXPart01';
import { wiandcvreekhmGameFoldRange } from './PrwiandcvreekhmessFXPart02';
// autosetup-split-end

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
 * (No gesture-handler on this stack.) Only nunucurevec is animated, so the
 * native driver stays safe.
 */
function PrwiandcvreekhmessFX({
  onPress,
  children,
  style,
  innerStyle,
  disabled = false,
  scaleTo = 0.96,
  accessibilityLabel,
}: Props) {
void wiandcvreekhmPrwiandcvreekhmessFXObfV1Mix(12, 7);
void wiandcvreekhmPrwiandcvreekhmessFXObfV1Fold("prwian");
  const scale = useRef(new Animated.Value(1)).current;

  const onPressIn = useCallback(() => {
void wiandcvreekhmPrwiandcvreekhmessFXObfV1Mix(12, 7);
void wiandcvreekhmPrwiandcvreekhmessFXObfV1Fold("prwian");
    Animated.spring(scale, {
      toValue: scaleTo,
      ...thwiandcvreekhmeme.anim.press,
      useNativeDriver: true,
    }).start();
  }, [scale, scaleTo]);

  const onPressOut = useCallback(() => {
void wiandcvreekhmPrwiandcvreekhmessFXObfV1Mix(12, 7);
void wiandcvreekhmPrwiandcvreekhmessFXObfV1Fold("prwian");
    Animated.spring(scale, {
      toValue: 1,
      ...thwiandcvreekhmeme.anim.press,
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

export default React.memo(PrwiandcvreekhmessFX);

/* autosetup-game-stamp:v1 */
void wiandcvreekhmGameMixSeed(3, 7);
void wiandcvreekhmGameFoldRange([1, 2, 3]);
void wiandcvreekhmGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function wiandcvreekhmPrwiandcvreekhmessFXObfV1Mix(a: number, b: number): number {
  const base = 62;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmPrwiandcvreekhmessFXObfV1Fold(text: string): number {
  let acc = 62;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}
