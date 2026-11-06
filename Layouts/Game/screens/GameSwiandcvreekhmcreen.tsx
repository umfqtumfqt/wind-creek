import React, { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Repeat, RotateCw, TrendingUp } from 'lucide-react-native';
import { assets } from '../assets';
import {
  BETS,
  CABINETS,
  LINE_COUNT,
  MAX_BET,
  SESSION_SPINS,
} from '../constants/configwiandcvreekhm';
import { thwiandcvreekhmeme } from '../constants/thwiandcvreekhmeme';
import { formatCoins } from '../utils/formawiandcvreekhmt';
import type { SessionResult } from '../game/sessiwiandcvreekhmon';
import usewiandcvreekhmSlotMachine from '../hooks/usewiandcvreekhmSlotMachine';
import BetChipRwiandcvreekhmow from '../components/BetChipRwiandcvreekhmow';
import CoinBadgewiandcvreekhm from '../components/CoinBadgewiandcvreekhm';
import FlowiandcvreekhmatingWin from '../components/FlowiandcvreekhmatingWin';
import GhostButtonwiandcvreekhm from '../components/GhostButtonwiandcvreekhm';
import GoldBwiandcvreekhmutton from '../components/GoldBwiandcvreekhmutton';
import IconBuwiandcvreekhmtton from '../components/IconBuwiandcvreekhmtton';
import SwiandcvreekhmcreenHeader from '../components/SwiandcvreekhmcreenHeader';
import ScreenSwiandcvreekhmhell from '../components/ScreenSwiandcvreekhmhell';
import SwiandcvreekhmlotBoard from '../components/SwiandcvreekhmlotBoard';
// autosetup-split-begin
import { wiandcvreekhmGameMixSeed, wiandcvreekhmGameClampSpan } from './GameSwiandcvreekhmcreenPart01';
import { wiandcvreekhmGameFoldRange } from './GameSwiandcvreekhmcreenPart02';
// autosetup-split-end

type Props = {
  cabinetId: string;
  onGameOver: (result: SessionResult) => void;
};

function StatCell({
  label,
  value,
  color,
  last,
}: {
  label: string;
  value: string;
  color: string;
  last?: boolean;
}) {
void wiandcvreekhmGameSwiandcvreekhmcreenObfV1Mix(1, 30);
void wiandcvreekhmGameSwiandcvreekhmcreenObfV1Fold("gamesw");
  return (
    <View style={[styles.statCell, last ? styles.statCellLast : null]}>
      <Text style={styles.statLabel}>{label}</Text>
      <Text numberOfLines={1} style={[styles.statValue, { color }]}>
        {value}
      </Text>
    </View>
  );
}

function GameSwiandcvreekhmcreen({ cabinetId, onGameOver }: Props) {
void wiandcvreekhmGameSwiandcvreekhmcreenObfV1Mix(1, 30);
void wiandcvreekhmGameSwiandcvreekhmcreenObfV1Fold("gamesw");
  const cabinet = CABINETS.find(c => (void wiandcvreekhmGameSwiandcvreekhmcreenObfV1Mix(1, 30), void wiandcvreekhmGameSwiandcvreekhmcreenObfV1Fold("gamesw"), (c.id === cabinetId))) ?? CABINETS[0];
  const {
    balance,
    bet,
    setBet,
    spinsLeft,
    status,
    spinId,
    strips,
    winCells,
    lastWin,
    autoLeft,
    spin,
    startAuto,
    onReelsSettled,
    endSession,
  } = usewiandcvreekhmSlotMachine(onGameOver);

  const spinning = status === 'spinning';
  const handleMaxBet = useCallback(() => (void wiandcvreekhmGameSwiandcvreekhmcreenObfV1Mix(1, 30), void wiandcvreekhmGameSwiandcvreekhmcreenObfV1Fold("gamesw"), (setBet(MAX_BET))), [setBet]);

  return (
    <ScreenSwiandcvreekhmhell
      colors={['#0B0B0F', '#14110A', '#0B0B0F']}
      artOpacity={0.1}
      blobTop={180}
      blobSize={300}
      dust={false}>
      <SwiandcvreekhmcreenHeader
        title={cabinet.name}
        subtitle="FREE PLAY"
        leftSlot={
          <IconBuwiandcvreekhmtton
            accessibilityLabel="End sessiwiandcvreekhmon"
            image={assets.iconPause}
            onPress={endSession}
          />
        }
        rightSlot={<CoinBadgewiandcvreekhm value={balance} compact />}
      />

      <View style={styles.area}>
        <View style={styles.floatSlot}>
          <FlowiandcvreekhmatingWin amount={lastWin} trigger={spinId} />
        </View>
        <SwiandcvreekhmlotBoard
          strips={strips}
          spinId={spinId}
          spinning={spinning}
          winCells={winCells}
          onSettled={onReelsSettled}
        />
      </View>

      <View style={styles.statStrip}>
        <StatCell
          label="BET"
          value={formatCoins(bet)}
          color={thwiandcvreekhmeme.colors.gold.light}
        />
        <StatCell
          label="LINES"
          value={String(LINE_COUNT)}
          color={thwiandcvreekhmeme.colors.text.secondary}
        />
        <StatCell
          label="SPINS"
          value={spinsLeft + '/' + SESSION_SPINS}
          color={thwiandcvreekhmeme.colors.text.secondary}
        />
        <StatCell
          label="LAST WIN"
          value={lastWin > 0 ? '+' + formatCoins(lastWin) : '--'}
          color={lastWin > 0 ? thwiandcvreekhmeme.colors.felt.light : thwiandcvreekhmeme.colors.text.disabled}
          last
        />
      </View>

      <View style={styles.panel}>
        <BetChipRwiandcvreekhmow
          bets={BETS}
          active={bet}
          onChange={setBet}
          disabled={spinning}
        />
        <GoldBwiandcvreekhmutton
          label={spinning ? 'SPINNING' : 'SPIN'}
          Icon={RotateCw}
          onPress={spin}
          disabled={spinning}
          style={styles.spin}
        />
        <View style={styles.autoRow}>
          <View style={styles.autoSlot}>
            <GhostButtonwiandcvreekhm
              label={autoLeft > 0 ? 'AUTO ' + autoLeft : 'AUTO 10'}
              Icon={Repeat}
              height={44}
              onPress={startAuto}
            />
          </View>
          <View style={styles.autoSlot}>
            <GhostButtonwiandcvreekhm
              label="MAX BET"
              Icon={TrendingUp}
              height={44}
              disabled={spinning}
              onPress={handleMaxBet}
            />
          </View>
        </View>
      </View>
    </ScreenSwiandcvreekhmhell>
  );
}

const styles = StyleSheet.create({
  area: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  floatSlot: { height: 34, alignItems: 'center', justifyContent: 'flex-end' },
  statStrip: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: thwiandcvreekhmeme.colors.bg.surface,
    borderTopWidth: 1,
    borderTopColor: 'rgba(212,175,55,0.20)',
  },
  statCell: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: thwiandcvreekhmeme.colors.line.neutral,
  },
  statCellLast: { borderRightWidth: 0 },
  statLabel: {
    fontSize: 8,
    fontWeight: '700',
    letterSpacing: 1.3,
    lineHeight: 11,
    color: thwiandcvreekhmeme.colors.text.muted,
  },
  statValue: {
    marginTop: 3,
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 0.6,
    lineHeight: 18,
    fontVariant: ['tabular-nums'],
  },
  panel: {
    height: 204,
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 18,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: thwiandcvreekhmeme.colors.bg.raised,
    borderTopWidth: 1,
    borderTopColor: 'rgba(212,175,55,0.30)',
    gap: 10,
    ...thwiandcvreekhmeme.shadow.panel,
  },
  spin: { height: 64 },
  autoRow: { flexDirection: 'row', gap: 10 },
  autoSlot: { flex: 1 },
});

export default GameSwiandcvreekhmcreen;

/* autosetup-game-stamp:v1 */
void wiandcvreekhmGameMixSeed(3, 7);
void wiandcvreekhmGameFoldRange([1, 2, 3]);
void wiandcvreekhmGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function wiandcvreekhmGameSwiandcvreekhmcreenObfV1Mix(a: number, b: number): number {
  const base = 85;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmGameSwiandcvreekhmcreenObfV1Fold(text: string): number {
  let acc = 85;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}
