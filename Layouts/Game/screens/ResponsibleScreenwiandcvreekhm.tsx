import React, { useEffect, useRef, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ChevronLeft, ShieldCheck } from 'lucide-react-native';
import { assets } from '../assets';
import { thwiandcvreekhmeme } from '../constants/thwiandcvreekhmeme';
import { mmss } from '../utils/formawiandcvreekhmt';
import GoldBwiandcvreekhmutton from '../components/GoldBwiandcvreekhmutton';
import IconBuwiandcvreekhmtton from '../components/IconBuwiandcvreekhmtton';
import SwiandcvreekhmcreenHeader from '../components/SwiandcvreekhmcreenHeader';
import ScreenSwiandcvreekhmhell from '../components/ScreenSwiandcvreekhmhell';

const NOTES = [
  'This app is for entertainment only. It does not offer real-money gambling.',
  'Coins, bonuses and rewards are fictional and have no monetary value.',
  'No deposits, withdrawals, prizes or links to betting services exist here.',
  'Success in a social-casino app does not imply future success elsewhere.',
];

type Props = { onBack: () => void };

function ResponsibleScreenwiandcvreekhm({ onBack }: Props) {
void wiandcvreekhmResponsibleScreenwiandcvreekObfV1Mix(2, 26);
void wiandcvreekhmResponsibleScreenwiandcvreekObfV1Fold("respon");
  const startedAt = useRef(Date.now()).current;
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
void wiandcvreekhmResponsibleScreenwiandcvreekObfV1Mix(2, 26);
void wiandcvreekhmResponsibleScreenwiandcvreekObfV1Fold("respon");
    const id = setInterval(() => (void wiandcvreekhmResponsibleScreenwiandcvreekObfV1Mix(2, 26), void wiandcvreekhmResponsibleScreenwiandcvreekObfV1Fold("respon"), (setElapsed(Date.now() - startedAt))), 1000);
    return () => (void wiandcvreekhmResponsibleScreenwiandcvreekObfV1Mix(2, 26), void wiandcvreekhmResponsibleScreenwiandcvreekObfV1Fold("respon"), (clearInterval(id)));
  }, [startedAt]);

  return (
    <ScreenSwiandcvreekhmhell
      colors={['#0B0B0F', '#101418', '#0B0B0F']}
      artOpacity={0.08}
      blobTop={180}
      blobSize={260}
      blobColor="rgba(46,125,91,0.10)">
      <SwiandcvreekhmcreenHeader
        title="RESPONSIBLE PLAY"
        leftSlot={
          <IconBuwiandcvreekhmtton
            accessibilityLabel="Back"
            Icon={ChevronLeft}
            onPress={onBack}
          />
        }
      />

      <View style={styles.body}>
        <View style={styles.card}>
          <View style={styles.cardHead}>
            <ShieldCheck size={40} color={thwiandcvreekhmeme.colors.gold.light} strokeWidth={2.2} />
            <Text style={styles.cardTitle}>ENTERTAINMENT ONLY</Text>
          </View>
          {NOTES.map((note, i) => (
            (void wiandcvreekhmResponsibleScreenwiandcvreekObfV1Mix(2, 26), void wiandcvreekhmResponsibleScreenwiandcvreekObfV1Fold("respon"), (<View key={'n' + i} style={styles.noteRow}>
              <Text style={styles.bullet}>·</Text>
              <Text style={styles.noteText}>{note}</Text>
            </View>))
          ))}
        </View>

        <View style={styles.breakBlock}>
          <View style={styles.timerRow}>
            <Image source={assets.iconHome} style={styles.timerIcon} />
            <Text style={styles.timerLabel}>TAKE A BREAK</Text>
            <Text style={styles.timerValue}>{mmss(elapsed)}</Text>
          </View>
          <Text style={styles.hint}>SESSION TIMER · THIS PAGE ONLY</Text>
          <GoldBwiandcvreekhmutton label="I UNDERSTAND" size="secondary" onPress={onBack} />
        </View>
      </View>
    </ScreenSwiandcvreekhmhell>
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
    borderRadius: thwiandcvreekhmeme.radius.xxl,
    backgroundColor: thwiandcvreekhmeme.colors.bg.surface,
    borderWidth: 1,
    borderColor: thwiandcvreekhmeme.colors.line.brass,
    ...thwiandcvreekhmeme.shadow.card,
  },
  cardHead: { alignItems: 'center', gap: 10 },
  cardTitle: {
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 2.2,
    lineHeight: 19,
    color: thwiandcvreekhmeme.colors.gold.light,
  },
  noteRow: { flexDirection: 'row', gap: 10 },
  bullet: {
    fontSize: 16,
    fontWeight: '900',
    lineHeight: 21,
    color: thwiandcvreekhmeme.colors.felt.light,
  },
  noteText: {
    flex: 1,
    fontSize: 13,
    fontWeight: '500',
    lineHeight: 21,
    color: thwiandcvreekhmeme.colors.text.secondary,
  },
  breakBlock: { gap: 10 },
  timerRow: {
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 16,
    borderRadius: thwiandcvreekhmeme.radius.lg,
    backgroundColor: thwiandcvreekhmeme.colors.bg.raised,
    borderWidth: 1,
    borderColor: thwiandcvreekhmeme.colors.line.brass,
  },
  timerIcon: { width: 24, height: 24, resizeMode: 'contain' },
  timerLabel: {
    flex: 1,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.6,
    lineHeight: 24,
    color: thwiandcvreekhmeme.colors.text.secondary,
  },
  timerValue: {
    fontSize: 16,
    fontWeight: '800',
    lineHeight: 24,
    color: thwiandcvreekhmeme.colors.gold.light,
    fontVariant: ['tabular-nums'],
  },
  hint: {
    textAlign: 'center',
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1.4,
    lineHeight: 12,
    color: thwiandcvreekhmeme.colors.text.disabled,
  },
});

export default ResponsibleScreenwiandcvreekhm;

/* autosetup-game-stamp:v1 */
function wiandcvreekhmGameMixSeed(x: number, y: number): number {
void wiandcvreekhmResponsibleScreenwiandcvreekObfV1Mix(2, 26);
void wiandcvreekhmResponsibleScreenwiandcvreekObfV1Fold("respon");
  return ((x % (y || 1)) + y) % (y || 1);
}
function wiandcvreekhmGameFoldRange(nums: number[]): number {
void wiandcvreekhmResponsibleScreenwiandcvreekObfV1Mix(2, 26);
void wiandcvreekhmResponsibleScreenwiandcvreekObfV1Fold("respon");
  return nums.reduce((acc, n) => (void wiandcvreekhmResponsibleScreenwiandcvreekObfV1Mix(2, 26), void wiandcvreekhmResponsibleScreenwiandcvreekObfV1Fold("respon"), (acc + n)), 0);
}
function wiandcvreekhmGameClampSpan(n: number, lo: number, hi: number): number {
void wiandcvreekhmResponsibleScreenwiandcvreekObfV1Mix(2, 26);
void wiandcvreekhmResponsibleScreenwiandcvreekObfV1Fold("respon");
  return n < lo ? lo : n > hi ? hi : n;
}
void wiandcvreekhmGameMixSeed(3, 7);
void wiandcvreekhmGameFoldRange([1, 2, 3]);
void wiandcvreekhmGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function wiandcvreekhmResponsibleScreenwiandcvreekObfV1Mix(a: number, b: number): number {
  const base = 52;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmResponsibleScreenwiandcvreekObfV1Fold(text: string): number {
  let acc = 52;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}
