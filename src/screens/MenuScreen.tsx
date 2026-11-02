import React, { useEffect, useRef } from 'react';
import {
  Animated,
  Easing,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Gift, Medal, Play, Settings, Trophy } from 'lucide-react-native';
import { assets } from '../assets';
import { APP_TITLE, SCREEN_H } from '../constants/config';
import { theme } from '../constants/theme';
import { formatCoins } from '../utils/format';
import { useBalance, useBestWin } from '../hooks/useBalance';
import useDailyBonus from '../hooks/useDailyBonus';
import store from '../game/store';
import CoinBadge from '../components/CoinBadge';
import FreePlayBadge from '../components/FreePlayBadge';
import GhostButton from '../components/GhostButton';
import GoldButton from '../components/GoldButton';
import IconButton from '../components/IconButton';
import StatsRow from '../components/StatsRow';

const ART_H = Math.round(SCREEN_H * 0.5);
const HIT = { top: 8, bottom: 8, left: 8, right: 8 };

type Props = {
  onPlay: () => void;
  onRewards: () => void;
  onSettings: () => void;
  onResponsible: () => void;
};

function MenuScreen({ onPlay, onRewards, onSettings, onResponsible }: Props) {
  const balance = useBalance();
  const bestWin = useBestWin();
  const { claimable } = useDailyBonus();
  const streak = store.get().streakDays;

  const sheetY = useRef(new Animated.Value(60)).current;
  const heroOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const anim = Animated.parallel([
      Animated.spring(sheetY, {
        toValue: 0,
        tension: 48,
        friction: 9,
        useNativeDriver: true,
      }),
      Animated.timing(heroOpacity, {
        toValue: 1,
        duration: 360,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
    ]);
    anim.start();
    return () => anim.stop();
  }, [sheetY, heroOpacity]);

  return (
    <View style={styles.root}>
      <View style={styles.art}>
        <Image source={assets.bgGame} style={styles.artImage} />
        <LinearGradient
          colors={[...theme.gradients.menu]}
          locations={[0, 0.55, 1]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={StyleSheet.absoluteFillObject}
        />
        <Animated.View
          pointerEvents="none"
          style={[styles.hero, { opacity: heroOpacity }]}>
          <Image source={assets.logo} style={styles.logo} />
          <Text style={styles.title}>{APP_TITLE}</Text>
          <View style={styles.rule} />
          <Text style={styles.tagline}>WETUMPKA-INSPIRED LOUNGE</Text>
        </Animated.View>
      </View>

      <Animated.View
        pointerEvents="box-none"
        style={[styles.sheet, { transform: [{ translateY: sheetY }] }]}>
        <View style={styles.sheetInner}>
          <View style={styles.topBlock}>
            <View style={styles.handle} />
            <FreePlayBadge />
          </View>

          <StatsRow
            Icon={Trophy}
            items={[
              {
                key: 'best',
                value: formatCoins(bestWin),
                label: 'BEST WIN',
                valueColor: theme.colors.gold.light,
              },
              {
                key: 'streak',
                value: streak + ' DAYS',
                label: 'STREAK',
                valueColor: theme.colors.felt.light,
              },
            ]}
          />

          <View style={styles.ctaBlock}>
            <Text style={styles.hint}>PICK A CABINET · SPIN FOR COINS</Text>
            <GoldButton label="PLAY NOW" Icon={Play} onPress={onPlay} />
            <View style={styles.secondaryRow}>
              <View style={styles.secondarySlot}>
                <GhostButton label="REWARDS" Icon={Medal} onPress={onRewards} />
              </View>
              <View style={styles.secondarySlot}>
                <GhostButton label="DAILY BONUS" Icon={Gift} onPress={onRewards} />
              </View>
            </View>
            <Pressable
              accessibilityRole="link"
              accessibilityLabel="Responsible play"
              hitSlop={HIT}
              onPress={onResponsible}
              style={styles.footerLink}>
              <Text style={styles.footerText}>RESPONSIBLE PLAY</Text>
            </Pressable>
          </View>
        </View>
      </Animated.View>

      <View pointerEvents="box-none" style={styles.topRow}>
        <CoinBadge value={balance} />
        <View style={styles.topActions}>
          <IconButton
            accessibilityLabel="Daily bonus"
            Icon={Gift}
            onPress={onRewards}
            dot={claimable}
          />
          <IconButton
            accessibilityLabel="Settings"
            Icon={Settings}
            onPress={onSettings}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: theme.colors.bg.deep },
  art: { height: ART_H, width: '100%' },
  artImage: { ...StyleSheet.absoluteFillObject, resizeMode: 'cover' },
  hero: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: Math.round(SCREEN_H * 0.16),
    alignItems: 'center',
  },
  logo: { width: 96, height: 96, resizeMode: 'contain', marginBottom: 10 },
  title: {
    fontSize: 34,
    fontWeight: '900',
    letterSpacing: 4,
    lineHeight: 42,
    color: theme.colors.gold.light,
    textShadowColor: 'rgba(212,175,55,0.45)',
    textShadowRadius: 14,
  },
  rule: {
    marginTop: 10,
    width: 120,
    height: 1,
    backgroundColor: theme.colors.line.brassStrong,
  },
  tagline: {
    marginTop: 10,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 2.8,
    lineHeight: 13,
    color: theme.colors.text.secondary,
  },
  sheet: {
    flex: 1,
    marginTop: -26,
    borderTopLeftRadius: theme.radius.sheet,
    borderTopRightRadius: theme.radius.sheet,
    backgroundColor: theme.colors.bg.surface,
    borderTopWidth: 1,
    borderTopColor: 'rgba(212,175,55,0.30)',
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 20,
    ...theme.shadow.panel,
  },
  sheetInner: { flex: 1, justifyContent: 'space-between' },
  topBlock: { alignItems: 'center', gap: 12 },
  handle: {
    width: 44,
    height: 4,
    borderRadius: 2,
    backgroundColor: 'rgba(212,175,55,0.35)',
  },
  ctaBlock: { gap: 10 },
  hint: {
    textAlign: 'center',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.2,
    lineHeight: 15,
    color: theme.colors.text.muted,
    marginBottom: 2,
  },
  secondaryRow: { flexDirection: 'row', gap: 12 },
  secondarySlot: { flex: 1 },
  footerLink: {
    alignSelf: 'center',
    width: 150,
    height: 22,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(111,106,94,0.6)',
  },
  footerText: {
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.6,
    lineHeight: 13,
    color: theme.colors.text.disabled,
  },
  topRow: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 116,
    paddingTop: 44,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topActions: { flexDirection: 'row', gap: 10 },
});

export default MenuScreen;
