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
} from '../constants/config';
import { theme } from '../constants/theme';
import { formatCoins } from '../utils/format';
import type { SessionResult } from '../game/session';
import useSlotMachine from '../hooks/useSlotMachine';
import BetChipRow from '../components/BetChipRow';
import CoinBadge from '../components/CoinBadge';
import FloatingWin from '../components/FloatingWin';
import GhostButton from '../components/GhostButton';
import GoldButton from '../components/GoldButton';
import IconButton from '../components/IconButton';
import ScreenHeader from '../components/ScreenHeader';
import ScreenShell from '../components/ScreenShell';
import SlotBoard from '../components/SlotBoard';

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
  return (
    <View style={[styles.statCell, last ? styles.statCellLast : null]}>
      <Text style={styles.statLabel}>{label}</Text>
      <Text numberOfLines={1} style={[styles.statValue, { color }]}>
        {value}
      </Text>
    </View>
  );
}

function GameScreen({ cabinetId, onGameOver }: Props) {
  const cabinet = CABINETS.find(c => c.id === cabinetId) ?? CABINETS[0];
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
  } = useSlotMachine(onGameOver);

  const spinning = status === 'spinning';
  const handleMaxBet = useCallback(() => setBet(MAX_BET), [setBet]);

  return (
    <ScreenShell
      colors={['#0B0B0F', '#14110A', '#0B0B0F']}
      artOpacity={0.1}
      blobTop={180}
      blobSize={300}
      dust={false}>
      <ScreenHeader
        title={cabinet.name}
        subtitle="FREE PLAY"
        leftSlot={
          <IconButton
            accessibilityLabel="End session"
            image={assets.iconPause}
            onPress={endSession}
          />
        }
        rightSlot={<CoinBadge value={balance} compact />}
      />

      <View style={styles.area}>
        <View style={styles.floatSlot}>
          <FloatingWin amount={lastWin} trigger={spinId} />
        </View>
        <SlotBoard
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
          color={theme.colors.gold.light}
        />
        <StatCell
          label="LINES"
          value={String(LINE_COUNT)}
          color={theme.colors.text.secondary}
        />
        <StatCell
          label="SPINS"
          value={spinsLeft + '/' + SESSION_SPINS}
          color={theme.colors.text.secondary}
        />
        <StatCell
          label="LAST WIN"
          value={lastWin > 0 ? '+' + formatCoins(lastWin) : '--'}
          color={lastWin > 0 ? theme.colors.felt.light : theme.colors.text.disabled}
          last
        />
      </View>

      <View style={styles.panel}>
        <BetChipRow
          bets={BETS}
          active={bet}
          onChange={setBet}
          disabled={spinning}
        />
        <GoldButton
          label={spinning ? 'SPINNING' : 'SPIN'}
          Icon={RotateCw}
          onPress={spin}
          disabled={spinning}
          style={styles.spin}
        />
        <View style={styles.autoRow}>
          <View style={styles.autoSlot}>
            <GhostButton
              label={autoLeft > 0 ? 'AUTO ' + autoLeft : 'AUTO 10'}
              Icon={Repeat}
              height={44}
              onPress={startAuto}
            />
          </View>
          <View style={styles.autoSlot}>
            <GhostButton
              label="MAX BET"
              Icon={TrendingUp}
              height={44}
              disabled={spinning}
              onPress={handleMaxBet}
            />
          </View>
        </View>
      </View>
    </ScreenShell>
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
    backgroundColor: theme.colors.bg.surface,
    borderTopWidth: 1,
    borderTopColor: 'rgba(212,175,55,0.20)',
  },
  statCell: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: theme.colors.line.neutral,
  },
  statCellLast: { borderRightWidth: 0 },
  statLabel: {
    fontSize: 8,
    fontWeight: '700',
    letterSpacing: 1.3,
    lineHeight: 11,
    color: theme.colors.text.muted,
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
    backgroundColor: theme.colors.bg.raised,
    borderTopWidth: 1,
    borderTopColor: 'rgba(212,175,55,0.30)',
    gap: 10,
    ...theme.shadow.panel,
  },
  spin: { height: 64 },
  autoRow: { flexDirection: 'row', gap: 10 },
  autoSlot: { flex: 1 },
});

export default GameScreen;
