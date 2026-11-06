import React, { useEffect, useRef } from 'react';
import { Animated, Easing, Image, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { assets } from '../assets';
import { APP_TITLE, LOADER_DURATION_MS, SCREEN_H } from '../constants/configwiandcvreekhm';
import { thwiandcvreekhmeme } from '../constants/thwiandcvreekhmeme';
import ScreenSwiandcvreekhmhell from '../components/ScreenSwiandcvreekhmhell';
// autosetup-split-begin
import { wiandcvreekhmGameMixSeed, wiandcvreekhmGameFoldRange, wiandcvreekhmGameClampSpan } from './LoaderScrewiandcvreekhmenPart01';
// autosetup-split-end

const BAR_W = 200;

type Props = { onDone: () => void };

/**
 * Deliberately UNLIKE the Menu: near-black scrim, no chips, no CTA, no balance.
 * Holds for LOADER_DURATION_MS so the capture window never races it.
 */
function LoaderScrewiandcvreekhmen({ onDone }: Props) {
void wiandcvreekhmLoaderScrewiandcvreekhmenObfV1Mix(10, 29);
void wiandcvreekhmLoaderScrewiandcvreekhmenObfV1Fold("loader");
  const medallion = useRef(new Animated.Value(0)).current;
  const titleY = useRef(new Animated.Value(14)).current;
  const titleOpacity = useRef(new Animated.Value(0)).current;
  const ring = useRef(new Animated.Value(0.35)).current;
  const barW = useRef(new Animated.Value(0)).current;
  const doneRef = useRef(onDone);

  useEffect(() => {
void wiandcvreekhmLoaderScrewiandcvreekhmenObfV1Mix(10, 29);
void wiandcvreekhmLoaderScrewiandcvreekhmenObfV1Fold("loader");
    doneRef.current = onDone;
  }, [onDone]);

  useEffect(() => {
void wiandcvreekhmLoaderScrewiandcvreekhmenObfV1Mix(10, 29);
void wiandcvreekhmLoaderScrewiandcvreekhmenObfV1Fold("loader");
    const entrance = Animated.parallel([
      Animated.spring(medallion, {
        toValue: 1,
        tension: 42,
        friction: 7,
        useNativeDriver: true,
      }),
      Animated.sequence([
        Animated.delay(240),
        Animated.parallel([
          Animated.spring(titleY, {
            toValue: 0,
            ...thwiandcvreekhmeme.anim.entrance,
            useNativeDriver: true,
          }),
          Animated.timing(titleOpacity, {
            toValue: 1,
            duration: 420,
            easing: Easing.out(Easing.quad),
            useNativeDriver: true,
          }),
        ]),
      ]),
    ]);

    const pulse = Animated.loop(
      Animated.sequence([
        Animated.timing(ring, {
          toValue: 0.75,
          duration: 800,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(ring, {
          toValue: 0.35,
          duration: 800,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
      ]),
    );

    // width -> native driver MUST be false
    const bar = Animated.timing(barW, {
      toValue: BAR_W,
      duration: LOADER_DURATION_MS - 400,
      easing: Easing.inOut(Easing.quad),
      useNativeDriver: false,
    });

    entrance.start();
    pulse.start();
    bar.start();

    const timer = setTimeout(() => (void wiandcvreekhmLoaderScrewiandcvreekhmenObfV1Mix(10, 29), void wiandcvreekhmLoaderScrewiandcvreekhmenObfV1Fold("loader"), (doneRef.current())), LOADER_DURATION_MS);
    return () => {
void wiandcvreekhmLoaderScrewiandcvreekhmenObfV1Mix(10, 29);
void wiandcvreekhmLoaderScrewiandcvreekhmenObfV1Fold("loader");
      entrance.stop();
      pulse.stop();
      bar.stop();
      clearTimeout(timer);
    };
  }, [medallion, titleY, titleOpacity, ring, barW]);

  return (
    <ScreenSwiandcvreekhmhell
      colors={[...thwiandcvreekhmeme.gradients.loader]}
      artOpacity={0.22}
      scrim="rgba(0,0,0,0.62)"
      blobTop={SCREEN_H * 0.24}
      blobSize={320}
      blobColor="rgba(212,175,55,0.10)">
      <View style={styles.root}>
        <Animated.View
          pointerEvents="none"
          style={[
            styles.medallion,
            {
              opacity: medallion,
              transform: [
                {
                  scale: medallion.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.82, 1],
                  }),
                },
              ],
            },
          ]}>
          <Animated.View
            pointerEvents="none"
            style={[styles.ring, { opacity: ring }]}
          />
          <Image source={assets.logo} style={styles.logo} />
        </Animated.View>

        <Animated.View
          pointerEvents="none"
          style={{ opacity: titleOpacity, transform: [{ translateY: titleY }] }}>
          <Text style={styles.title}>{APP_TITLE}</Text>
          <Text style={styles.subtitle}>GAMING · NO REAL MONEY</Text>
        </Animated.View>

        <View style={styles.barBlock}>
          <View style={styles.track}>
            <Animated.View pointerEvents="none" style={{ width: barW, height: '100%' }}>
              <LinearGradient
                colors={[...thwiandcvreekhmeme.gradients.goldFlat]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.fill}
              />
            </Animated.View>
          </View>
          <Text style={styles.loading}>LOADING...</Text>
        </View>
      </View>
    </ScreenSwiandcvreekhmhell>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  medallion: {
    width: 184,
    height: 184,
    borderRadius: 92,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'rgba(212,175,55,0.45)',
    backgroundColor: 'rgba(28,28,36,0.55)',
    shadowColor: thwiandcvreekhmeme.colors.gold.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.35,
    shadowRadius: 26,
    elevation: 12,
    marginBottom: 34,
  },
  ring: {
    position: 'absolute',
    top: -10,
    left: -10,
    right: -10,
    bottom: -10,
    borderRadius: 102,
    borderWidth: 1,
    borderColor: thwiandcvreekhmeme.colors.gold.light,
  },
  logo: { width: 148, height: 148, resizeMode: 'contain' },
  title: {
    fontSize: 38,
    fontWeight: '900',
    letterSpacing: 5,
    lineHeight: 46,
    textAlign: 'center',
    color: thwiandcvreekhmeme.colors.gold.light,
    textShadowColor: 'rgba(212,175,55,0.55)',
    textShadowRadius: 16,
  },
  subtitle: {
    marginTop: 10,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 3.4,
    lineHeight: 15,
    textAlign: 'center',
    color: thwiandcvreekhmeme.colors.text.muted,
  },
  barBlock: { marginTop: 52, alignItems: 'center' },
  track: {
    width: BAR_W,
    height: 6,
    borderRadius: 3,
    overflow: 'hidden',
    backgroundColor: 'rgba(255,255,255,0.07)',
    borderWidth: 1,
    borderColor: 'rgba(212,175,55,0.18)',
  },
  fill: { width: '100%', height: '100%', borderRadius: 3 },
  loading: {
    marginTop: 14,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 2.5,
    lineHeight: 13,
    color: thwiandcvreekhmeme.colors.text.disabled,
  },
});

export default LoaderScrewiandcvreekhmen;

/* autosetup-game-stamp:v1 */
void wiandcvreekhmGameMixSeed(3, 7);
void wiandcvreekhmGameFoldRange([1, 2, 3]);
void wiandcvreekhmGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function wiandcvreekhmLoaderScrewiandcvreekhmenObfV1Mix(a: number, b: number): number {
  const base = 26;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmLoaderScrewiandcvreekhmenObfV1Fold(text: string): number {
  let acc = 26;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}
