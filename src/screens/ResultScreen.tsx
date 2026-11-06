import React, {useEffect, useMemo, useRef} from 'react';
import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Home, RotateCw} from 'lucide-react-native';
import {GRADIENTS, THEME} from '../constants/theme';
import {TOTAL_CARDS} from '../constants/config';
import {ART} from '../assets';
import {ComplianceNote} from '../components/ComplianceNote';
import {PrimaryButton} from '../components/PrimaryButton';
import {ScreenHeader} from '../components/ScreenHeader';
import {SecondaryButton} from '../components/SecondaryButton';
import {StatCard} from '../components/StatCard';
import {VelvetSurface} from '../components/VelvetSurface';
import {formatCoins, useCountUp} from '../hooks/useCountUp';
import {ShowSummary} from '../hooks/useSlotMachine';

const SCREEN_W = Dimensions.get('window').width;

type Props = {
  summary: ShowSummary;
  bestMultiplier: number;
  cardsOwned: number;
  onSpinAgain: () => void;
  onMenu: () => void;
};

const CONFETTI = 24;

/**
 * The end of one show — a real member of the state machine, not a modal.
 * Its gradient, headline and confetti make it unmistakable against both the
 * menu and the game frame.
 */
export const ResultScreen: React.FC<Props> = ({
  summary,
  bestMultiplier,
  cardsOwned,
  onSpinAgain,
  onMenu,
}) => {
  const pop = useRef(new Animated.Value(0.86)).current;
  const fade = useRef(new Animated.Value(0)).current;
  const fall = useRef(new Animated.Value(0)).current;
  const payout = useCountUp(summary.payout);

  const confetti = useMemo(
    () =>
      Array.from({length: CONFETTI}, (_, i) => ({
        left: 10 + ((i * 37) % 90) * (SCREEN_W - 40) * 0.01,
        delay: (i % 6) * 0.1,
        size: 5 + (i % 3) * 3,
        color: i % 3 === 0 ? THEME.accent : i % 3 === 1 ? THEME.primaryBright : THEME.secondary,
      })),
    [],
  );

  useEffect(() => {
    Animated.parallel([
      Animated.spring(pop, {
        toValue: 1,
        tension: 55,
        friction: 7,
        useNativeDriver: true,
      }),
      Animated.timing(fade, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();

    if (!summary.win) {
      return;
    }
    const loop = Animated.loop(
      Animated.timing(fall, {
        toValue: 1,
        duration: 2600,
        useNativeDriver: true,
      }),
      // Bounded for the same reason as the menu float: this screen gets read
      // and tapped, so it has to reach idle.
      {iterations: 2},
    );
    loop.start();
    return () => loop.stop();
  }, [pop, fade, fall, summary.win]);

  const headline = summary.win ? 'CURTAIN CALL!' : 'SHOW IS OVER';
  const headlineColor = summary.win ? THEME.accent : THEME.textMuted;
  const unlocked = summary.cardsUnlocked.length;

  return (
    <View style={styles.root}>
      <LinearGradient colors={GRADIENTS.result} style={StyleSheet.absoluteFill} />
      <View pointerEvents="none" style={styles.topBlob} />

      {summary.win
        ? confetti.map((c, i) => (
            <Animated.View
              key={`conf-${i}`}
              pointerEvents="none"
              style={[
                styles.confetti,
                {
                  left: c.left,
                  width: c.size,
                  height: c.size * 2,
                  backgroundColor: c.color,
                  opacity: fall.interpolate({
                    inputRange: [0, 0.15, 0.85, 1],
                    outputRange: [0, 0.85, 0.65, 0],
                  }),
                  transform: [
                    {
                      translateY: fall.interpolate({
                        inputRange: [0, 1],
                        outputRange: [-60, 520],
                      }),
                    },
                    {
                      rotate: fall.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0deg', '220deg'],
                      }),
                    },
                  ],
                },
              ]}
            />
          ))
        : null}

      <ScreenHeader title="SHOW RESULT" onBack={onMenu} />

      <View style={styles.center}>
        <Animated.View
          pointerEvents="box-none"
          style={[
            styles.cardShadow,
            {opacity: fade, transform: [{scale: pop}]},
          ]}>
          <VelvetSurface
            radius={26}
            fill="rgba(26,6,12,0.92)"
            borderColor={THEME.accent}
            borderWidth={1.5}
            style={styles.card}>
          {/* Flourish sits above the heading box — it never crosses a letter. */}
          <View style={styles.flourish} />

          <Text style={[styles.headline, {color: headlineColor}]}>
            {headline}
          </Text>

          <Text style={styles.payout}>+{formatCoins(payout)}</Text>
          <Text style={styles.payoutCaption}>COINS WON THIS SHOW</Text>

          <View style={styles.statRow}>
            <View style={styles.statSlot}>
              <StatCard
                value={`x${Math.max(summary.bestMultiplier, bestMultiplier)}`}
                label="BEST MULTI"
                valueColor={THEME.accent}
              />
            </View>
            <View style={styles.statSlot}>
              <StatCard
                value={`${cardsOwned}/${TOTAL_CARDS}`}
                label="CARDS"
                valueColor={THEME.secondary}
              />
            </View>
          </View>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryText}>
              {summary.spins} SPINS · {summary.wins} WINS · {summary.spent} STAKED
            </Text>
          </View>

          {unlocked > 0 ? (
            <View style={styles.unlockStrip}>
              <Image
                source={ART.cardJoker}
                style={styles.unlockArt}
                resizeMode="contain"
              />
              <Text style={styles.unlockText}>
                {unlocked > 1 ? `${unlocked} NEW JOKER CARDS` : 'NEW JOKER CARD'}
              </Text>
            </View>
          ) : null}
          </VelvetSurface>
        </Animated.View>

        <View style={styles.ctaBlock}>
          <PrimaryButton
            label="SPIN AGAIN"
            Icon={RotateCw}
            height={60}
            onPress={onSpinAgain}
          />
          <SecondaryButton
            label="LOBBY HOME"
            Icon={Home}
            height={48}
            onPress={onMenu}
            style={styles.secondary}
          />
          <ComplianceNote compact style={styles.note} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: THEME.bg,
  },
  topBlob: {
    position: 'absolute',
    top: -110,
    alignSelf: 'center',
    width: 340,
    height: 300,
    borderRadius: 170,
    backgroundColor: THEME.secondary,
    opacity: 0.16,
  },
  confetti: {
    position: 'absolute',
    top: 110,
    borderRadius: 2,
  },
  center: {
    flex: 1,
    paddingTop: 18,
    paddingHorizontal: 24,
    paddingBottom: 26,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardShadow: {
    width: '100%',
    borderRadius: 26,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.6,
    shadowRadius: 26,
    elevation: 16,
  },
  card: {
    width: '100%',
    paddingVertical: 24,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  flourish: {
    width: 54,
    height: 4,
    borderRadius: 2,
    backgroundColor: THEME.accent,
    marginBottom: 14,
  },
  headline: {
    fontSize: 30,
    fontWeight: '900',
    letterSpacing: 2,
    textAlign: 'center',
  },
  payout: {
    marginTop: 14,
    fontSize: 44,
    fontWeight: '900',
    letterSpacing: 1,
    color: THEME.accent,
    fontVariant: ['tabular-nums' as const],
  },
  payoutCaption: {
    marginTop: 2,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.5,
    color: THEME.textMuted,
  },
  statRow: {
    marginTop: 20,
    width: '100%',
    flexDirection: 'row',
    gap: 12,
  },
  statSlot: {
    flex: 1,
  },
  summaryRow: {
    marginTop: 16,
  },
  summaryText: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.1,
    color: THEME.textDim,
    fontVariant: ['tabular-nums' as const],
  },
  unlockStrip: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 14,
    backgroundColor: 'rgba(109,40,217,0.22)',
    borderWidth: 1,
    borderColor: THEME.goldBorder,
  },
  unlockArt: {
    width: 44,
    height: 44,
  },
  unlockText: {
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 1.2,
    color: THEME.text,
  },
  ctaBlock: {
    width: '100%',
    marginTop: 22,
  },
  secondary: {
    marginTop: 12,
  },
  note: {
    marginTop: 14,
  },
});
