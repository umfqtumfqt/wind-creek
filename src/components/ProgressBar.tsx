import React, { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { theme } from '../constants/theme';

type Props = { value: number; max: number; height?: number; width: number };

/** Width animation -> useNativeDriver MUST stay false here. */
function ProgressBar({ value, max, height = 10, width }: Props) {
  const w = useRef(new Animated.Value(0)).current;
  const target = Math.max(0, Math.min(1, max > 0 ? value / max : 0)) * width;

  useEffect(() => {
    const anim = Animated.timing(w, {
      toValue: target,
      duration: 700,
      easing: Easing.inOut(Easing.quad),
      useNativeDriver: false,
    });
    anim.start();
    return () => anim.stop();
  }, [target, w]);

  return (
    <View style={[styles.track, { width, height, borderRadius: height / 2 }]}>
      <Animated.View pointerEvents="none" style={{ width: w, height: '100%' }}>
        <LinearGradient
          colors={[...theme.gradients.goldFlat]}
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

export default React.memo(ProgressBar);
