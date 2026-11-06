import React, {useEffect, useMemo, useRef} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import {THEME} from '../constants/theme';

type Props = {
  active: boolean;
  color?: string;
  radius?: number;
};

const COUNT = 14;

/** Fourteen gold dots pushed outward on a win. transform + opacity only. */
export const SparkBurst: React.FC<Props> = ({
  active,
  color = THEME.accent,
  radius = 110,
}) => {
  const progress = useRef(new Animated.Value(0)).current;

  const seeds = useMemo(
    () =>
      Array.from({length: COUNT}, (_, i) => {
        const angle = (i / COUNT) * Math.PI * 2;
        return {
          dx: Math.cos(angle) * radius,
          dy: Math.sin(angle) * radius * 0.78,
          size: 5 + (i % 3) * 2,
        };
      }),
    [radius],
  );

  useEffect(() => {
    if (!active) {
      progress.setValue(0);
      return;
    }
    progress.setValue(0);
    const anim = Animated.timing(progress, {
      toValue: 1,
      duration: 700,
      useNativeDriver: true,
    });
    anim.start();
    return () => anim.stop();
  }, [active, progress]);

  if (!active) {
    return null;
  }

  return (
    <View pointerEvents="none" style={styles.wrap}>
      {seeds.map((s, i) => (
        <Animated.View
          key={`spark-${i}`}
          style={[
            styles.dot,
            {
              width: s.size,
              height: s.size,
              borderRadius: s.size / 2,
              backgroundColor: color,
              opacity: progress.interpolate({
                inputRange: [0, 0.2, 1],
                outputRange: [0, 1, 0],
              }),
              transform: [
                {
                  translateX: progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, s.dx],
                  }),
                },
                {
                  translateY: progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, s.dy],
                  }),
                },
                {
                  scale: progress.interpolate({
                    inputRange: [0, 0.35, 1],
                    outputRange: [0.2, 1.4, 0.5],
                  }),
                },
              ],
            },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    position: 'absolute',
  },
});
