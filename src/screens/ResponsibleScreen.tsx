import React, { useEffect, useRef, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ChevronLeft, ShieldCheck } from 'lucide-react-native';
import { assets } from '../assets';
import { theme } from '../constants/theme';
import { mmss } from '../utils/format';
import GoldButton from '../components/GoldButton';
import IconButton from '../components/IconButton';
import ScreenHeader from '../components/ScreenHeader';
import ScreenShell from '../components/ScreenShell';

const NOTES = [
  'This app is for entertainment only. It does not offer real-money gambling.',
  'Coins, bonuses and rewards are fictional and have no monetary value.',
  'No deposits, withdrawals, prizes or links to betting services exist here.',
  'Success in a social-casino app does not imply future success elsewhere.',
];

type Props = { onBack: () => void };

function ResponsibleScreen({ onBack }: Props) {
  const startedAt = useRef(Date.now()).current;
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setElapsed(Date.now() - startedAt), 1000);
    return () => clearInterval(id);
  }, [startedAt]);

  return (
    <ScreenShell
      colors={['#0B0B0F', '#101418', '#0B0B0F']}
      artOpacity={0.08}
      blobTop={180}
      blobSize={260}
      blobColor="rgba(46,125,91,0.10)">
      <ScreenHeader
        title="RESPONSIBLE PLAY"
        leftSlot={
          <IconButton
            accessibilityLabel="Back"
            Icon={ChevronLeft}
            onPress={onBack}
          />
        }
      />

      <View style={styles.body}>
        <View style={styles.card}>
          <View style={styles.cardHead}>
            <ShieldCheck size={40} color={theme.colors.gold.light} strokeWidth={2.2} />
            <Text style={styles.cardTitle}>ENTERTAINMENT ONLY</Text>
          </View>
          {NOTES.map((note, i) => (
            <View key={'n' + i} style={styles.noteRow}>
              <Text style={styles.bullet}>·</Text>
              <Text style={styles.noteText}>{note}</Text>
            </View>
          ))}
        </View>

        <View style={styles.breakBlock}>
          <View style={styles.timerRow}>
            <Image source={assets.iconHome} style={styles.timerIcon} />
            <Text style={styles.timerLabel}>TAKE A BREAK</Text>
            <Text style={styles.timerValue}>{mmss(elapsed)}</Text>
          </View>
          <Text style={styles.hint}>SESSION TIMER · THIS PAGE ONLY</Text>
          <GoldButton label="I UNDERSTAND" size="secondary" onPress={onBack} />
        </View>
      </View>
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 24,
    justifyContent: 'space-between',
  },
  card: {
    padding: 20,
    gap: 14,
    borderRadius: theme.radius.xxl,
    backgroundColor: theme.colors.bg.surface,
    borderWidth: 1,
    borderColor: theme.colors.line.brass,
    ...theme.shadow.card,
  },
  cardHead: { alignItems: 'center', gap: 10 },
  cardTitle: {
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 2.2,
    lineHeight: 19,
    color: theme.colors.gold.light,
  },
  noteRow: { flexDirection: 'row', gap: 10 },
  bullet: {
    fontSize: 16,
    fontWeight: '900',
    lineHeight: 21,
    color: theme.colors.felt.light,
  },
  noteText: {
    flex: 1,
    fontSize: 13,
    fontWeight: '500',
    lineHeight: 21,
    color: theme.colors.text.secondary,
  },
  breakBlock: { gap: 10 },
  timerRow: {
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 16,
    borderRadius: theme.radius.lg,
    backgroundColor: theme.colors.bg.raised,
    borderWidth: 1,
    borderColor: theme.colors.line.brass,
  },
  timerIcon: { width: 24, height: 24, resizeMode: 'contain' },
  timerLabel: {
    flex: 1,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.6,
    lineHeight: 24,
    color: theme.colors.text.secondary,
  },
  timerValue: {
    fontSize: 16,
    fontWeight: '800',
    lineHeight: 24,
    color: theme.colors.gold.light,
    fontVariant: ['tabular-nums'],
  },
  hint: {
    textAlign: 'center',
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1.4,
    lineHeight: 12,
    color: theme.colors.text.disabled,
  },
});

export default ResponsibleScreen;
