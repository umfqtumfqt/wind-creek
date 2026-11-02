import React, { useEffect, useRef } from 'react';
import { Animated, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Coins, Medal, RotateCw } from 'lucide-react-native';
import { assets, SPRITES } from '../assets';
import { theme } from '../constants/theme';
import { formatCoins, signedCoins } from '../utils/format';
import { headline, type SessionResult } from '../game/session';
import { useBalance } from '../hooks/useBalance';
import CoinBadge from '../components/CoinBadge';
import FreePlayBadge from '../components/FreePlayBadge';
import GhostButton from '../components/GhostButton';
import GoldButton from '../components/GoldButton';
import ScreenHeader from '../components/ScreenHeader';
import ScreenShell from '../components/ScreenShell';
import StatsRow from '../components/StatsRow';

const HIT = { top: 8, bottom: 8, left: 8, right: 8 };

type Props = {
  result: SessionResult;
  onAgain: () => void;
  onMenu: () => void;
  onRewards: () => void;
};

function GameOverScreen({ result, onAgain, onMenu, onRewards }: Props) {
  const balance = useBalance();
  const pop = useRef(new Animated.Value(0.9)).current;
  const fade = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const anim = Animated.parallel([
      Animated.spring(pop, {
        toValue: 1,
        ...theme.anim.pop,
        useNativeDriver: true,
      }),
      Animated.timing(fade, {
        toValue: 1,
        duration: 320,
        useNativeDriver: true,
      }),
    ]);
    anim.start();
    return () => anim.stop();
  }, [pop, fade]);

  const netColor =
    result.net > 0
      ? theme.colors.felt.light
      : result.net < 0
      ? theme.colors.negative
      : theme.colors.text.secondary;

  return (
    <ScreenShell
      colors={[...theme.gradients.gameover]}
      artOpacity={0.18}
      felt
      blobTop={150}
      blobSize={300}
      blobColor="rgba(212,175,55,0.12)">
      <ScreenHeader
        title="SESSION RESULT"
        subtitle="FREE PLAY"
        rightSlot={<CoinBadge value={balance} compact />}
      />

      <View style={styles.body}>
        <Animated.View
          pointerEvents="none"
          style={[styles.headBlock, { opacity: fade }]}>
          <Text style={styles.headline}>{headline(result.net)}</Text>
          <View style={styles.rule} />
          <Image source={SPRITES[4]} style={styles.hero} />
        </Animated.View>

        <Animated.View
          pointerEvents="box-none"
          style={[styles.card, { transform: [{ scale: pop }] }]}>
          <StatsRow
            Icon={Coins}
            items={[
              {
                key: 'net',
                value: signedCoins(result.net),
                label: 'NET COINS',
                valueColor: netColor,
              },
              {
                key: 'spins',
                value: String(result.spins),
                label: 'SPINS',
                valueColor: theme.colors.gold.light,
              },
              {
                key: 'best',
                value: formatCoins(result.best),
                label: 'BEST LINE',
                valueColor: '#E08A3C',
              },
            ]}
          />
          {result.tokenEarned ? (
            <View style={styles.tokenRow}>
              <Medal size={20} color={theme.colors.felt.primary} strokeWidth={2.4} />
              <Text style={styles.tokenText}>+1 COLLECTION TOKEN</Text>
            </View>
          ) : null}
        </Animated.View>

        <View style={styles.ctaBlock}>
          <FreePlayBadge compact />
          <Text style={styles.hint}>COINS ARE VIRTUAL · NOTHING TO CASH IN</Text>
          <GoldButton label="SPIN AGAIN" Icon={RotateCw} onPress={onAgain} />
          <GhostButton label="MENU" onPress={onMenu} height={48} />
          <Pressable
            accessibilityRole="link"
            accessibilityLabel="Open rewards"
            hitSlop={HIT}
            onPress={onRewards}
            style={styles.link}>
            <Image source={assets.iconHome} style={styles.linkIcon} />
            <Text style={styles.linkText}>REWARDS</Text>
          </Pressable>
        </View>
      </View>
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 10,
    paddingBottom: 22,
    justifyContent: 'space-between',
  },
  headBlock: { alignItems: 'center' },
  headline: {
    fontSize: 34,
    fontWeight: '900',
    letterSpacing: 3,
    lineHeight: 42,
    textAlign: 'center',
    color: theme.colors.gold.light,
    textShadowColor: 'rgba(212,175,55,0.45)',
    textShadowRadius: 16,
  },
  rule: {
    marginTop: 14,
    width: 140,
    height: 1,
    backgroundColor: theme.colors.line.brassStrong,
  },
  hero: { width: 96, height: 96, resizeMode: 'contain', marginTop: 12 },
  card: {
    padding: 16,
    borderRadius: theme.radius.xxl,
    backgroundColor: theme.colors.bg.surface,
    borderWidth: 1,
    borderColor: theme.colors.line.brass,
    ...theme.shadow.card,
  },
  tokenRow: {
    marginTop: 14,
    height: 38,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    borderRadius: theme.radius.md,
    backgroundColor: 'rgba(46,125,91,0.14)',
    borderWidth: 1,
    borderColor: 'rgba(46,125,91,0.42)',
  },
  tokenText: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.4,
    lineHeight: 20,
    color: theme.colors.felt.light,
  },
  ctaBlock: { gap: 10 },
  hint: {
    textAlign: 'center',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.3,
    lineHeight: 14,
    color: theme.colors.text.muted,
  },
  link: {
    alignSelf: 'center',
    width: 150,
    height: 28,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  linkIcon: { width: 24, height: 24, resizeMode: 'contain' },
  linkText: {
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.6,
    lineHeight: 24,
    color: theme.colors.text.disabled,
  },
});

export default GameOverScreen;
