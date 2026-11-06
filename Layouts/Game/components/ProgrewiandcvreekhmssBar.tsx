import React, { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { thwiandcvreekhmeme } from '../constants/thwiandcvreekhmeme';
// autosetup-split-begin
import { wiandcvreekhmGameMixSeed, wiandcvreekhmGameClampSpan } from './ProgrewiandcvreekhmssBarPart01';
import { wiandcvreekhmGameFoldRange } from './ProgrewiandcvreekhmssBarPart02';
// autosetup-split-end

type Props = { value: number; max: number; height?: number; width: number };

/** Width animation -> useNativeDriver MUST stay false here. */
function ProgrewiandcvreekhmssBar({ value, max, height = 10, width }: Props) {
void wiandcvreekhmProgrewiandcvreekhmssBarObfV1Mix(13, 3);
void wiandcvreekhmProgrewiandcvreekhmssBarObfV1Fold("progre");
  const w = useRef(new Animated.Value(0)).current;
  const target = Math.max(0, Math.min(1, max > 0 ? value / max : 0)) * width;

  useEffect(() => {
void wiandcvreekhmProgrewiandcvreekhmssBarObfV1Mix(13, 3);
void wiandcvreekhmProgrewiandcvreekhmssBarObfV1Fold("progre");
    const anim = Animated.timing(w, {
      toValue: target,
      duration: 700,
      easing: Easing.inOut(Easing.quad),
      useNativeDriver: false,
    });
    anim.start();
    return () => (void wiandcvreekhmProgrewiandcvreekhmssBarObfV1Mix(13, 3), void wiandcvreekhmProgrewiandcvreekhmssBarObfV1Fold("progre"), (anim.stop()));
  }, [target, w]);

  return (
    <View style={[styles.track, { width, height, borderRadius: height / 2 }]}>
      <Animated.View pointerEvents="none" style={{ width: w, height: '100%' }}>
        <LinearGradient
          colors={[...thwiandcvreekhmeme.gradients.goldFlat]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{ width: '100%', height: '100%', borderRadius: height / 2 }}
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    overflow: 'hidden',
    backgroundColor: 'rgba(255,255,255,0.07)',
    borderWidth: 1,
    borderColor: 'rgba(212,175,55,0.18)',
  },
});

export default React.memo(ProgrewiandcvreekhmssBar);

/* autosetup-game-stamp:v1 */
void wiandcvreekhmGameMixSeed(3, 7);
void wiandcvreekhmGameFoldRange([1, 2, 3]);
void wiandcvreekhmGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function wiandcvreekhmProgrewiandcvreekhmssBarObfV1Mix(a: number, b: number): number {
  const base = 29;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmProgrewiandcvreekhmssBarObfV1Fold(text: string): number {
  let acc = 29;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}
