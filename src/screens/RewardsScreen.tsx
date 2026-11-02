import React, { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ChevronLeft, Gift, Medal } from 'lucide-react-native';
import { DAILY_BONUS, SCREEN_W, SYMBOLS } from '../constants/config';
import { theme } from '../constants/theme';
import { formatCoins } from '../utils/format';
import { useBalance, useTokens } from '../hooks/useBalance';
import useDailyBonus from '../hooks/useDailyBonus';
import CoinBadge from '../components/CoinBadge';
import CollectionSlot from '../components/CollectionSlot';
import GoldButton from '../components/GoldButton';
import IconButton from '../components/IconButton';
import ProgressBar from '../components/ProgressBar';
import ScreenHeader from '../components/ScreenHeader';
import ScreenShell from '../components/ScreenShell';

const BAR_W = Math.min(SCREEN_W - 80, 320);

type Props = { onBack: () => void };

function RewardsScreen({ onBack }: Props) {
  const balance = useBalance();
  const tokens = useTokens();
  const { claimable, claim } = useDailyBonus();

  const collected = tokens.filter(Boolean).length;
  const xp = 140 + collected * 40;
  const handleClaim = useCallback(() => {
    claim();
  }, [claim]);

  return (
    <ScreenShell
      colors={['#0B0B0F', '#16130C', '#0B0B0F']}
      artOpacity={0.14}
      felt
      blobTop={160}
      blobSize={280}>
      <ScreenHeader
        title="COLLECTION"
        leftSlot={
          <IconButton
            accessibilityLabel="Back"
            Icon={ChevronLeft}
            onPress={onBack}
          />
        }
        rightSlot={<CoinBadge value={balance} compact />}
      />

      <View style={styles.body}>
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>LOUNGE TOKENS</Text>
          {collected > 0 ? (
            <View style={styles.grid}>
              {SYMBOLS.map(sym => (
                <CollectionSlot
                  key={sym.key}
                  spriteIndex={sym.index}
                  collected={tokens[sym.index]}
                  name={sym.name}
                />
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
          <ProgressBar value={xp} max={500} width={BAR_W} height={10} />
          <Text style={styles.tierHint}>
            {collected + ' OF ' + SYMBOLS.length + ' SYMBOLS COLLECTED'}
          </Text>
        </View>

        <View style={styles.bonusBlock}>
          <Text style={styles.bonusHint}>ONE FREE TOP-UP EVERY DAY</Text>
          {claimable ? (
            <GoldButton
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
    </ScreenShell>
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
    color: theme.colors.text.muted,
  },
  grid: { flexDirection: 'row', gap: 8 },
  empty: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 28,
    gap: 10,
    borderRadius: theme.radius.xxl,
    backgroundColor: theme.colors.bg.raised,
    borderWidth: 1,
    borderColor: theme.colors.line.brass,
    ...theme.shadow.card,
  },
  emptyTitle: {
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 2,
    lineHeight: 18,
    color: theme.colors.text.secondary,
  },
  emptyBody: {
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.4,
    lineHeight: 13,
    color: theme.colors.text.disabled,
  },
  tierCard: {
    alignItems: 'center',
    gap: 10,
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderRadius: theme.radius.xxl,
    backgroundColor: theme.colors.bg.surface,
    borderWidth: 1,
    borderColor: theme.colors.line.brass,
    ...theme.shadow.card,
  },
  tierLabel: {
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.6,
    lineHeight: 16,
    color: theme.colors.gold.light,
    fontVariant: ['tabular-nums'],
  },
  tierHint: {
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1.3,
    lineHeight: 12,
    color: theme.colors.text.muted,
  },
  bonusBlock: { gap: 10 },
  bonusHint: {
    textAlign: 'center',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.4,
    lineHeight: 14,
    color: theme.colors.text.muted,
  },
  claimed: {
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.radius.lg,
    backgroundColor: 'rgba(255,255,255,0.04)',
    borderWidth: 1,
    borderColor: 'rgba(111,106,94,0.5)',
  },
  claimedText: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.4,
    lineHeight: 15,
    color: theme.colors.text.disabled,
  },
});

export default RewardsScreen;
