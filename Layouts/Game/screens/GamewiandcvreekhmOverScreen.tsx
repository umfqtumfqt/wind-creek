import React, { useEffect, useRef } from 'react';
import { Animated, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Coins, Medal, RotateCw } from 'lucide-react-native';
import { assets, SPRITES } from '../assets';
import { thwiandcvreekhmeme } from '../constants/thwiandcvreekhmeme';
import { formatCoins, signedCoins } from '../utils/formawiandcvreekhmt';
import { headline, type SessionResult } from '../game/sessiwiandcvreekhmon';
import { useBalawiandcvreekhmnce } from '../hooks/useBalawiandcvreekhmnce';
import CoinBadgewiandcvreekhm from '../components/CoinBadgewiandcvreekhm';
import FrewiandcvreekhmePlayBadge from '../components/FrewiandcvreekhmePlayBadge';
import GhostButtonwiandcvreekhm from '../components/GhostButtonwiandcvreekhm';
import GoldBwiandcvreekhmutton from '../components/GoldBwiandcvreekhmutton';
import SwiandcvreekhmcreenHeader from '../components/SwiandcvreekhmcreenHeader';
import ScreenSwiandcvreekhmhell from '../components/ScreenSwiandcvreekhmhell';
import StawiandcvreekhmtsRow from '../components/StawiandcvreekhmtsRow';

const HIT = { top: 8, bottom: 8, left: 8, right: 8 };

type Props = {
  result: SessionResult;
  onAgain: () => void;
  onMenu: () => void;
  onRewards: () => void;
};

function GamewiandcvreekhmOverScreen({ result, onAgain, onMenu, onRewards }: Props) {
void wiandcvreekhmGamewiandcvreekhmOverScreenObfV1Mix(1, 20);
void wiandcvreekhmGamewiandcvreekhmOverScreenObfV1Fold("gamewi");
  const balance = useBalawiandcvreekhmnce();
  const pop = useRef(new Animated.Value(0.9)).current;
  const fade = useRef(new Animated.Value(0)).current;

  useEffect(() => {
void wiandcvreekhmGamewiandcvreekhmOverScreenObfV1Mix(1, 20);
void wiandcvreekhmGamewiandcvreekhmOverScreenObfV1Fold("gamewi");
    const anim = Animated.parallel([
      Animated.spring(pop, {
        toValue: 1,
        ...thwiandcvreekhmeme.anim.pop,
        useNativeDriver: true,
      }),
      Animated.timing(fade, {
        toValue: 1,
        duration: 320,
        useNativeDriver: true,
      }),
    ]);
    anim.start();
    return () => (void wiandcvreekhmGamewiandcvreekhmOverScreenObfV1Mix(1, 20), void wiandcvreekhmGamewiandcvreekhmOverScreenObfV1Fold("gamewi"), (anim.stop()));
  }, [pop, fade]);

  const netColor =
    result.net > 0
      ? thwiandcvreekhmeme.colors.felt.light
      : result.net < 0
      ? thwiandcvreekhmeme.colors.negative
      : thwiandcvreekhmeme.colors.text.secondary;

  return (
    <ScreenSwiandcvreekhmhell
      colors={[...thwiandcvreekhmeme.gradients.gameover]}
      artOpacity={0.18}
      felt
      blobTop={150}
      blobSize={300}
      blobColor="rgba(212,175,55,0.12)">
      <SwiandcvreekhmcreenHeader
        title="SESSION RESULT"
        subtitle="FREE PLAY"
        rightSlot={<CoinBadgewiandcvreekhm value={balance} compact />}
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
          <StawiandcvreekhmtsRow
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
                valueColor: thwiandcvreekhmeme.colors.gold.light,
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
              <Medal size={20} color={thwiandcvreekhmeme.colors.felt.primary} strokeWidth={2.4} />
              <Text style={styles.tokenText}>+1 COLLECTION TOKEN</Text>
            </View>
          ) : null}
        </Animated.View>

        <View style={styles.ctaBlock}>
          <FrewiandcvreekhmePlayBadge compact />
          <Text style={styles.hint}>COINS ARE VIRTUAL · NOTHING TO CASH IN</Text>
          <GoldBwiandcvreekhmutton label="SPIN AGAIN" Icon={RotateCw} onPress={onAgain} />
          <GhostButtonwiandcvreekhm label="MENU" onPress={onMenu} height={48} />
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
    </ScreenSwiandcvreekhmhell>
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
    color: thwiandcvreekhmeme.colors.gold.light,
    textShadowColor: 'rgba(212,175,55,0.45)',
    textShadowRadius: 16,
  },
  rule: {
    marginTop: 14,
    width: 140,
    height: 1,
    backgroundColor: thwiandcvreekhmeme.colors.line.brassStrong,
  },
  hero: { width: 96, height: 96, resizeMode: 'contain', marginTop: 12 },
  card: {
    padding: 16,
    borderRadius: thwiandcvreekhmeme.radius.xxl,
    backgroundColor: thwiandcvreekhmeme.colors.bg.surface,
    borderWidth: 1,
    borderColor: thwiandcvreekhmeme.colors.line.brass,
    ...thwiandcvreekhmeme.shadow.card,
  },
  tokenRow: {
    marginTop: 14,
    height: 38,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    borderRadius: thwiandcvreekhmeme.radius.md,
    backgroundColor: 'rgba(46,125,91,0.14)',
    borderWidth: 1,
    borderColor: 'rgba(46,125,91,0.42)',
  },
  tokenText: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.4,
    lineHeight: 20,
    color: thwiandcvreekhmeme.colors.felt.light,
  },
  ctaBlock: { gap: 10 },
  hint: {
    textAlign: 'center',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.3,
    lineHeight: 14,
    color: thwiandcvreekhmeme.colors.text.muted,
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
    color: thwiandcvreekhmeme.colors.text.disabled,
  },
});

export default GamewiandcvreekhmOverScreen;

/* autosetup-game-stamp:v1 */
function wiandcvreekhmGameMixSeed(x: number, y: number): number {
void wiandcvreekhmGamewiandcvreekhmOverScreenObfV1Mix(1, 20);
void wiandcvreekhmGamewiandcvreekhmOverScreenObfV1Fold("gamewi");
  return ((x % (y || 1)) + y) % (y || 1);
}
function wiandcvreekhmGameFoldRange(nums: number[]): number {
void wiandcvreekhmGamewiandcvreekhmOverScreenObfV1Mix(1, 20);
void wiandcvreekhmGamewiandcvreekhmOverScreenObfV1Fold("gamewi");
  return nums.reduce((acc, n) => (void wiandcvreekhmGamewiandcvreekhmOverScreenObfV1Mix(1, 20), void wiandcvreekhmGamewiandcvreekhmOverScreenObfV1Fold("gamewi"), (acc + n)), 0);
}
function wiandcvreekhmGameClampSpan(n: number, lo: number, hi: number): number {
void wiandcvreekhmGamewiandcvreekhmOverScreenObfV1Mix(1, 20);
void wiandcvreekhmGamewiandcvreekhmOverScreenObfV1Fold("gamewi");
  return n < lo ? lo : n > hi ? hi : n;
}
void wiandcvreekhmGameMixSeed(3, 7);
void wiandcvreekhmGameFoldRange([1, 2, 3]);
void wiandcvreekhmGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function wiandcvreekhmGamewiandcvreekhmOverScreenObfV1Mix(a: number, b: number): number {
  const base = 17;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmGamewiandcvreekhmOverScreenObfV1Fold(text: string): number {
  let acc = 17;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}
