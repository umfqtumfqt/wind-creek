import React, {useEffect, useRef} from 'react';
import {
  Animated,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  Gift,
  Layers,
  Play,
  Settings as SettingsIcon,
  Target,
} from 'lucide-react-native';
import {GRADIENTS, THEME} from '../constants/theme';
import {TOTAL_CARDS} from '../constants/config';
import {ART} from '../assets';
import {BalanceBadge} from '../components/BalanceBadge';
import {ComplianceNote} from '../components/ComplianceNote';
import {PrimaryButton} from '../components/PrimaryButton';
import {StatCard} from '../components/StatCard';
import {usePressScale} from '../hooks/usePressScale';

type Props = {
  balance: number;
  cardsOwned: number;
  bestMultiplier: number;
  streakDays: number;
  openMissions: number;
  chestReady: boolean;
  exitHint: boolean;
  onPlay: () => void;
  onOpenMissions: () => void;
  onOpenAlbum: () => void;
  onOpenChest: () => void;
  onOpenSettings: () => void;
};

type ChipProps = {
  label: string;
  Icon: React.ComponentType<any>;
  badge: string;
  delay: number;
  onPress: () => void;
};

const Chip: React.FC<ChipProps> = ({label, Icon, badge, delay, onPress}) => {
  const {scale, onPressIn, onPressOut} = usePressScale(0.94);
  const enter = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(enter, {
      toValue: 1,
      duration: 300,
      delay,
      useNativeDriver: true,
    }).start();
  }, [enter, delay]);

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`${label} ${badge}`}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      hitSlop={{top: 8, bottom: 8, left: 4, right: 4}}
      style={styles.chipPress}>
      <Animated.View
        style={[
          styles.chip,
          {opacity: enter, transform: [{scale}]},
        ]}>
        <Icon size={16} color={THEME.accent} strokeWidth={2.4} />
        <Text style={styles.chipLabel} numberOfLines={1}>
          {label}
        </Text>
        <Text style={styles.chipBadge} numberOfLines={1}>
          {badge}
        </Text>
      </Animated.View>
    </Pressable>
  );
};

/**
 * M2 bottom-sheet: full-bleed theatre art above, velvet sheet with the call
 * to action below. Markedly brighter than the loader.
 * The word PLAY appears exactly once on this screen — in the primary CTA.
 */
export const MenuScreen: React.FC<Props> = ({
  balance,
  cardsOwned,
  bestMultiplier,
  streakDays,
  openMissions,
  chestReady,
  exitHint,
  onPlay,
  onOpenMissions,
  onOpenAlbum,
  onOpenChest,
  onOpenSettings,
}) => {
  const sheet = useRef(new Animated.Value(0)).current;
  const float = useRef(new Animated.Value(0)).current;
  const cta = useRef(new Animated.Value(0.88)).current;
  const gear = usePressScale(0.9);

  useEffect(() => {
    Animated.timing(sheet, {
      toValue: 1,
      duration: 380,
      useNativeDriver: true,
    }).start();
    Animated.spring(cta, {
      toValue: 1,
      tension: 60,
      friction: 8,
      delay: 180,
      useNativeDriver: true,
    }).start();

    const floating = Animated.loop(
      Animated.sequence([
        Animated.timing(float, {
          toValue: 1,
          duration: 1600,
          useNativeDriver: true,
        }),
        Animated.timing(float, {
          toValue: 0,
          duration: 1600,
          useNativeDriver: true,
        }),
      ]),
      // Bounded: the menu is a screen the walkthrough has to read and tap,
      // and a perpetual loop stops uiautomator from ever dumping it.
      {iterations: 3},
    );
    floating.start();
    return () => floating.stop();
  }, [sheet, float, cta]);

  return (
    <View style={styles.root}>
      <ImageBackground
        source={ART.bgMenu}
        style={styles.art}
        resizeMode="cover">
        <LinearGradient
          colors={GRADIENTS.menuScrim}
          locations={[0, 0.62, 1]}
          style={StyleSheet.absoluteFill}
        />

        <View style={styles.topBar}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Settings"
            onPress={onOpenSettings}
            onPressIn={gear.onPressIn}
            onPressOut={gear.onPressOut}
            hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
            style={styles.gearPress}>
            <Animated.View
              style={[styles.gearInner, {transform: [{scale: gear.scale}]}]}>
              <SettingsIcon size={22} color={THEME.accent} strokeWidth={2.4} />
            </Animated.View>
          </Pressable>

          <BalanceBadge amount={balance} />
        </View>

        <View style={styles.heroWrap} pointerEvents="none">
          <View style={styles.heroGlow} />
          <Animated.View
            style={{
              transform: [
                {
                  translateY: float.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -9],
                  }),
                },
              ],
            }}>
            <Image
              source={ART.jokerMask}
              style={styles.hero}
              resizeMode="contain"
            />
          </Animated.View>
        </View>
      </ImageBackground>

      <Animated.View
        pointerEvents="box-none"
        style={[
          styles.sheet,
          {
            opacity: sheet,
            transform: [
              {
                translateY: sheet.interpolate({
                  inputRange: [0, 1],
                  outputRange: [44, 0],
                }),
              },
            ],
          },
        ]}>
        <View style={styles.handle} />

        <Text style={styles.title}>ROYAL JOKER REELS</Text>
        <Text style={styles.tagline}>
          THREE REELS · ONE JESTER · NO REAL MONEY
        </Text>

        <View style={styles.chipRow}>
          <Chip
            label="MISSIONS"
            Icon={Target}
            badge={`${openMissions}`}
            delay={60}
            onPress={onOpenMissions}
          />
          <Chip
            label="ALBUM"
            Icon={Layers}
            badge={`${cardsOwned}/${TOTAL_CARDS}`}
            delay={120}
            onPress={onOpenAlbum}
          />
          <Chip
            label="CHESTS"
            Icon={Gift}
            badge={chestReady ? '1' : '0'}
            delay={180}
            onPress={onOpenChest}
          />
        </View>

        {bestMultiplier > 0 && streakDays > 0 ? (
          <View style={styles.statRow}>
            <View style={styles.statSlot}>
              <StatCard
                value={`x${bestMultiplier}`}
                label="BEST SPIN"
                valueColor={THEME.accent}
              />
            </View>
            <View style={styles.statSlot}>
              <StatCard
                value={`${streakDays} DAYS`}
                label="STREAK"
                valueColor={THEME.primaryBright}
              />
            </View>
          </View>
        ) : null}

        <Text style={styles.hint}>
          {exitHint
            ? 'PRESS BACK ONCE MORE TO EXIT'
            : 'ONE TAP TO SPIN · FREE COINS ONLY'}
        </Text>

        <Animated.View
          pointerEvents="box-none"
          style={{transform: [{scale: cta}]}}>
          <PrimaryButton label="PLAY NOW" Icon={Play} onPress={onPlay} />
        </Animated.View>

        <ComplianceNote style={styles.footer} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: THEME.bg,
  },
  art: {
    flex: 1,
  },
  topBar: {
    paddingTop: 44,
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  gearPress: {
    width: 44,
    height: 44,
  },
  gearInner: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME.scrim,
    borderWidth: 1,
    borderColor: 'rgba(244,201,93,0.28)',
  },
  heroWrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroGlow: {
    position: 'absolute',
    width: 230,
    height: 150,
    borderRadius: 115,
    backgroundColor: THEME.secondary,
    opacity: 0.3,
  },
  hero: {
    width: 150,
    height: 150,
  },
  sheet: {
    backgroundColor: 'rgba(37,11,18,0.93)',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderTopWidth: 1.5,
    borderTopColor: 'rgba(244,201,93,0.34)',
    paddingHorizontal: 22,
    paddingTop: 16,
    paddingBottom: 18,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -10},
    shadowOpacity: 0.55,
    shadowRadius: 22,
    elevation: 18,
  },
  handle: {
    alignSelf: 'center',
    width: 46,
    height: 3,
    borderRadius: 2,
    backgroundColor: THEME.accent,
    marginBottom: 12,
  },
  title: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: '900',
    letterSpacing: 1.4,
    color: THEME.text,
  },
  tagline: {
    marginTop: 6,
    textAlign: 'center',
    fontSize: 11.5,
    fontWeight: '600',
    letterSpacing: 1.2,
    color: THEME.textMuted,
  },
  chipRow: {
    marginTop: 16,
    flexDirection: 'row',
    gap: 10,
  },
  chipPress: {
    flex: 1,
    height: 40,
  },
  chip: {
    width: '100%',
    height: 40,
    borderRadius: 12,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    backgroundColor: 'rgba(109,40,217,0.16)',
    borderWidth: 1,
    borderColor: 'rgba(244,201,93,0.26)',
  },
  chipLabel: {
    fontSize: 10,
    lineHeight: 16,
    fontWeight: '800',
    letterSpacing: 0.6,
    color: THEME.text,
  },
  chipBadge: {
    fontSize: 10,
    lineHeight: 16,
    fontWeight: '800',
    color: THEME.accent,
    fontVariant: ['tabular-nums' as const],
  },
  statRow: {
    marginTop: 14,
    flexDirection: 'row',
    gap: 12,
  },
  statSlot: {
    flex: 1,
  },
  hint: {
    marginTop: 14,
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 1.1,
    color: THEME.textDim,
  },
  footer: {
    marginTop: 10,
  },
});
