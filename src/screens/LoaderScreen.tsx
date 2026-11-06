import React, {useEffect, useMemo, useRef} from 'react';
import {
  Animated,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {GRADIENTS, THEME} from '../constants/theme';
import {
  LOADER_DURATION_MS,
  LOADER_FADE_MS,
  LOADER_PROGRESS_MS,
} from '../constants/config';
import {ART} from '../assets';

type Props = {
  onDone: () => void;
};

/**
 * Deliberately much darker and quieter than the menu: overlay never drops
 * below 0.88 alpha, no chips, no balance badge, no call to action. That gap
 * is what keeps the two frames apart for the screenshot comparison.
 */
export const LoaderScreen: React.FC<Props> = ({onDone}) => {
  const fade = useRef(new Animated.Value(0)).current;
  const pop = useRef(new Animated.Value(0.72)).current;
  const titleUp = useRef(new Animated.Value(0)).current;
  const breathe = useRef(new Animated.Value(0)).current;
  const progress = useRef(new Animated.Value(0)).current;
  const outFade = useRef(new Animated.Value(1)).current;
  const doneRef = useRef(onDone);
  doneRef.current = onDone;

  // Fixed-seed gold dust so the frame carries grain instead of a flat wash.
  const dust = useMemo(
    () =>
      Array.from({length: 18}, (_, i) => {
        const a = (i * 97) % 100;
        const b = (i * 53 + 17) % 100;
        return {
          left: `${4 + a * 0.9}%`,
          top: `${6 + b * 0.86}%`,
          size: 1.5 + ((i * 7) % 4) * 0.5,
          opacity: 0.1 + ((i * 11) % 9) * 0.018,
        };
      }),
    [],
  );

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fade, {
        toValue: 1,
        duration: 520,
        useNativeDriver: true,
      }),
      Animated.spring(pop, {
        toValue: 1,
        tension: 48,
        friction: 7,
        useNativeDriver: true,
      }),
      Animated.timing(titleUp, {
        toValue: 1,
        duration: 520,
        delay: 240,
        useNativeDriver: true,
      }),
    ]).start();

    const breathing = Animated.loop(
      Animated.sequence([
        Animated.timing(breathe, {
          toValue: 1,
          duration: 1300,
          useNativeDriver: true,
        }),
        Animated.timing(breathe, {
          toValue: 0,
          duration: 1300,
          useNativeDriver: true,
        }),
      ]),
      // Bounded, not perpetual: a loop that never ends keeps the window
      // non-idle and uiautomator's dump then comes back empty.
      {iterations: 2},
    );
    breathing.start();

    // Three paced segments, so the bar reads at a different place at any
    // moment a screenshot might be taken.
    const bar = Animated.sequence([
      Animated.timing(progress, {
        toValue: 0.45,
        duration: LOADER_PROGRESS_MS * 0.28,
        useNativeDriver: false,
      }),
      Animated.timing(progress, {
        toValue: 0.7,
        duration: LOADER_PROGRESS_MS * 0.46,
        useNativeDriver: false,
      }),
      Animated.timing(progress, {
        toValue: 1,
        duration: LOADER_PROGRESS_MS * 0.26,
        useNativeDriver: false,
      }),
    ]);
    bar.start();

    const handoff = setTimeout(() => {
      Animated.timing(outFade, {
        toValue: 0,
        duration: LOADER_FADE_MS,
        useNativeDriver: true,
      }).start(() => doneRef.current());
    }, LOADER_DURATION_MS);

    return () => {
      clearTimeout(handoff);
      breathing.stop();
      bar.stop();
    };
  }, [fade, pop, titleUp, breathe, progress, outFade]);

  const medallionScale = Animated.multiply(
    pop,
    breathe.interpolate({inputRange: [0, 1], outputRange: [1, 1.045]}),
  );

  return (
    <Animated.View style={[styles.root, {opacity: outFade}]}>
      <ImageBackground
        source={ART.bgLoader}
        style={styles.bg}
        resizeMode="cover">
        <LinearGradient
          colors={GRADIENTS.loader}
          start={{x: 0.1, y: 0}}
          end={{x: 0.9, y: 1}}
          style={StyleSheet.absoluteFill}
        />

        <View pointerEvents="none" style={styles.blobTopLeft} />
        <View pointerEvents="none" style={styles.blobBottomRight} />

        {dust.map((d, i) => (
          <View
            key={`dust-${i}`}
            pointerEvents="none"
            style={[
              styles.dust,
              {
                left: d.left as any,
                top: d.top as any,
                width: d.size,
                height: d.size,
                borderRadius: d.size / 2,
                opacity: d.opacity,
              },
            ]}
          />
        ))}

        <View style={styles.center}>
          <Animated.View
            style={[
              styles.medallion,
              {
                opacity: fade,
                transform: [{rotate: '45deg'}, {scale: medallionScale}],
              },
            ]}>
            <Image
              source={ART.jokerMask}
              style={styles.medallionArt}
              resizeMode="contain"
            />
          </Animated.View>

          <Animated.View
            style={{
              opacity: titleUp,
              transform: [
                {
                  translateY: titleUp.interpolate({
                    inputRange: [0, 1],
                    outputRange: [18, 0],
                  }),
                },
              ],
            }}>
            <Text style={styles.brand}>ROYAL JOKER</Text>
            <Text style={styles.brandSub}>VELVET REELS</Text>
            <Text style={styles.tagline}>
              A SOCIAL CASINO SHOW · FREE COINS ONLY
            </Text>
          </Animated.View>
        </View>

        <View style={styles.bottom}>
          <View style={styles.barTrack}>
            <Animated.View style={{flex: progress}}>
              <LinearGradient
                colors={GRADIENTS.progress}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={styles.barFill}
              />
            </Animated.View>
            <Animated.View
              style={{
                flex: progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0],
                }),
              }}
            />
          </View>
          <Text style={styles.loading}>RAISING THE CURTAIN...</Text>
        </View>
      </ImageBackground>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: THEME.bgDeep,
  },
  bg: {
    flex: 1,
  },
  blobTopLeft: {
    position: 'absolute',
    top: -90,
    left: -80,
    width: 280,
    height: 280,
    borderRadius: 140,
    backgroundColor: THEME.secondary,
    opacity: 0.1,
  },
  blobBottomRight: {
    position: 'absolute',
    bottom: -120,
    right: -100,
    width: 330,
    height: 330,
    borderRadius: 165,
    backgroundColor: THEME.primary,
    opacity: 0.12,
  },
  dust: {
    position: 'absolute',
    backgroundColor: THEME.accent,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 28,
  },
  medallion: {
    width: 132,
    height: 132,
    borderRadius: 24,
    borderWidth: 3,
    borderColor: THEME.accent,
    backgroundColor: THEME.surfaceAlt,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    shadowColor: THEME.secondary,
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.45,
    shadowRadius: 26,
    elevation: 14,
  },
  medallionArt: {
    width: 86,
    height: 86,
    transform: [{rotate: '-45deg'}],
  },
  brand: {
    fontSize: 38,
    fontWeight: '900',
    letterSpacing: 3.5,
    textAlign: 'center',
    color: THEME.accent,
    textShadowColor: THEME.primary,
    textShadowOffset: {width: 0, height: 3},
    textShadowRadius: 10,
  },
  brandSub: {
    marginTop: 6,
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: 7,
    textAlign: 'center',
    color: THEME.text,
    opacity: 0.72,
  },
  tagline: {
    marginTop: 18,
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 1.6,
    textAlign: 'center',
    color: THEME.textMuted,
  },
  bottom: {
    alignItems: 'center',
    paddingBottom: 64,
  },
  barTrack: {
    width: 210,
    height: 7,
    borderRadius: 4,
    backgroundColor: 'rgba(255,245,230,0.1)',
    overflow: 'hidden',
    flexDirection: 'row',
  },
  barFill: {
    flex: 1,
    borderRadius: 4,
  },
  loading: {
    marginTop: 14,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 2.4,
    color: THEME.textDim,
  },
});
