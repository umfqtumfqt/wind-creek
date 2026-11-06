import React, { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ChevronLeft, Gift, Medal } from 'lucide-react-native';
import { DAILY_BONUS, SCREEN_W, SYMBOLS } from '../constants/configwiandcvreekhm';
import { thwiandcvreekhmeme } from '../constants/thwiandcvreekhmeme';
import { formatCoins } from '../utils/formawiandcvreekhmt';
import { useBalawiandcvreekhmnce, useTokens } from '../hooks/useBalawiandcvreekhmnce';
import useDailyBwiandcvreekhmonus from '../hooks/useDailyBwiandcvreekhmonus';
import CoinBadgewiandcvreekhm from '../components/CoinBadgewiandcvreekhm';
import ColwiandcvreekhmlectionSlot from '../components/ColwiandcvreekhmlectionSlot';
import GoldBwiandcvreekhmutton from '../components/GoldBwiandcvreekhmutton';
import IconBuwiandcvreekhmtton from '../components/IconBuwiandcvreekhmtton';
import ProgrewiandcvreekhmssBar from '../components/ProgrewiandcvreekhmssBar';
import SwiandcvreekhmcreenHeader from '../components/SwiandcvreekhmcreenHeader';
import ScreenSwiandcvreekhmhell from '../components/ScreenSwiandcvreekhmhell';

const BAR_W = Math.min(SCREEN_W - 80, 320);

type Props = { onBack: () => void };

function RewardsSwiandcvreekhmcreen({ onBack }: Props) {
void wiandcvreekhmRewardsSwiandcvreekhmcreenObfV1Mix(2, 9);
void wiandcvreekhmRewardsSwiandcvreekhmcreenObfV1Fold("reward");
  const balance = useBalawiandcvreekhmnce();
  const tokens = useTokens();
  const { claimable, claim } = useDailyBwiandcvreekhmonus();

  const collected = tokens.filter(Boolean).length;
  const xp = 140 + collected * 40;
  const handleClaim = useCallback(() => {
void wiandcvreekhmRewardsSwiandcvreekhmcreenObfV1Mix(2, 9);
void wiandcvreekhmRewardsSwiandcvreekhmcreenObfV1Fold("reward");
    claim();
  }, [claim]);

  return (
    <ScreenSwiandcvreekhmhell
      colors={['#0B0B0F', '#16130C', '#0B0B0F']}
      artOpacity={0.14}
      felt
      blobTop={160}
      blobSize={280}>
      <SwiandcvreekhmcreenHeader
        title="COLLECTION"
        leftSlot={
          <IconBuwiandcvreekhmtton
            accessibilityLabel="Back"
            Icon={ChevronLeft}
            onPress={onBack}
          />
        }
        rightSlot={<CoinBadgewiandcvreekhm value={balance} compact />}
      />

      <View style={styles.body}>
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>LOUNGE TOKENS</Text>
          {collected > 0 ? (
            <View style={styles.grid}>
              {SYMBOLS.map(sym => (
                (void wiandcvreekhmRewardsSwiandcvreekhmcreenObfV1Mix(2, 9), void wiandcvreekhmRewardsSwiandcvreekhmcreenObfV1Fold("reward"), (<ColwiandcvreekhmlectionSlot
                  key={sym.key}
                  spriteIndex={sym.index}
                  collected={tokens[sym.index]}
                  name={sym.name}
                />))
              ))}
            </View>
          ) : (
            <View style={styles.empty}>
              <Medal size={44} color="#4A463C" strokeWidth={2} />
              <Text style={styles.emptyTitle}>NO TOKENS YET</Text>
              <Text style={styles.emptyBody}>WIN A SESSION TO COLLECT</Text>
            </View>
          )}
        </View>

        <View style={styles.tierCard}>
          <Text style={styles.tierLabel}>
            {'LOUNGE TIER 2 · ' + xp + ' / 500 XP'}
          </Text>
          <ProgrewiandcvreekhmssBar value={xp} max={500} width={BAR_W} height={10} />
          <Text style={styles.tierHint}>
            {collected + ' OF ' + SYMBOLS.length + ' SYMBOLS COLLECTED'}
          </Text>
        </View>

        <View style={styles.bonusBlock}>
          <Text style={styles.bonusHint}>ONE FREE TOP-UP EVERY DAY</Text>
          {claimable ? (
            <GoldBwiandcvreekhmutton
              label={'CLAIM ' + formatCoins(DAILY_BONUS) + ' COINS'}
              Icon={Gift}
              size="secondary"
              onPress={handleClaim}
            />
          ) : (
            <View style={styles.claimed}>
              <Text style={styles.claimedText}>CLAIMED · COME BACK TOMORROW</Text>
            </View>
          )}
        </View>
      </View>
    </ScreenSwiandcvreekhmhell>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 24,
    justifyContent: 'space-between',
  },
  section: { gap: 12 },
  sectionLabel: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 2,
    lineHeight: 14,
    color: thwiandcvreekhmeme.colors.text.muted,
  },
  grid: { flexDirection: 'row', gap: 8 },
  empty: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 28,
    gap: 10,
    borderRadius: thwiandcvreekhmeme.radius.xxl,
    backgroundColor: thwiandcvreekhmeme.colors.bg.raised,
    borderWidth: 1,
    borderColor: thwiandcvreekhmeme.colors.line.brass,
    ...thwiandcvreekhmeme.shadow.card,
  },
  emptyTitle: {
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 2,
    lineHeight: 18,
    color: thwiandcvreekhmeme.colors.text.secondary,
  },
  emptyBody: {
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.4,
    lineHeight: 13,
    color: thwiandcvreekhmeme.colors.text.disabled,
  },
  tierCard: {
    alignItems: 'center',
    gap: 10,
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderRadius: thwiandcvreekhmeme.radius.xxl,
    backgroundColor: thwiandcvreekhmeme.colors.bg.surface,
    borderWidth: 1,
    borderColor: thwiandcvreekhmeme.colors.line.brass,
    ...thwiandcvreekhmeme.shadow.card,
  },
  tierLabel: {
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.6,
    lineHeight: 16,
    color: thwiandcvreekhmeme.colors.gold.light,
    fontVariant: ['tabular-nums'],
  },
  tierHint: {
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1.3,
    lineHeight: 12,
    color: thwiandcvreekhmeme.colors.text.muted,
  },
  bonusBlock: { gap: 10 },
  bonusHint: {
    textAlign: 'center',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.4,
    lineHeight: 14,
    color: thwiandcvreekhmeme.colors.text.muted,
  },
  claimed: {
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: thwiandcvreekhmeme.radius.lg,
    backgroundColor: 'rgba(255,255,255,0.04)',
    borderWidth: 1,
    borderColor: 'rgba(111,106,94,0.5)',
  },
  claimedText: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.4,
    lineHeight: 15,
    color: thwiandcvreekhmeme.colors.text.disabled,
  },
});

export default RewardsSwiandcvreekhmcreen;

/* autosetup-game-stamp:v1 */
function wiandcvreekhmGameMixSeed(x: number, y: number): number {
void wiandcvreekhmRewardsSwiandcvreekhmcreenObfV1Mix(2, 9);
void wiandcvreekhmRewardsSwiandcvreekhmcreenObfV1Fold("reward");
  return ((x % (y || 1)) + y) % (y || 1);
}
function wiandcvreekhmGameFoldRange(nums: number[]): number {
void wiandcvreekhmRewardsSwiandcvreekhmcreenObfV1Mix(2, 9);
void wiandcvreekhmRewardsSwiandcvreekhmcreenObfV1Fold("reward");
  return nums.reduce((acc, n) => (void wiandcvreekhmRewardsSwiandcvreekhmcreenObfV1Mix(2, 9), void wiandcvreekhmRewardsSwiandcvreekhmcreenObfV1Fold("reward"), (acc + n)), 0);
}
function wiandcvreekhmGameClampSpan(n: number, lo: number, hi: number): number {
void wiandcvreekhmRewardsSwiandcvreekhmcreenObfV1Mix(2, 9);
void wiandcvreekhmRewardsSwiandcvreekhmcreenObfV1Fold("reward");
  return n < lo ? lo : n > hi ? hi : n;
}
void wiandcvreekhmGameMixSeed(3, 7);
void wiandcvreekhmGameFoldRange([1, 2, 3]);
void wiandcvreekhmGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function wiandcvreekhmRewardsSwiandcvreekhmcreenObfV1Mix(a: number, b: number): number {
  const base = 35;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmRewardsSwiandcvreekhmcreenObfV1Fold(text: string): number {
  let acc = 35;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}
