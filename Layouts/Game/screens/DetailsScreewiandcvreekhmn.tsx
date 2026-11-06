import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ChevronLeft, LayoutGrid, Play, Sparkles, Target } from 'lucide-react-native';
import { SPRITES } from '../assets';
import { CABINETS, LINE_COUNT, SYMBOLS } from '../constants/configwiandcvreekhm';
import { thwiandcvreekhmeme } from '../constants/thwiandcvreekhmeme';
import { useBalawiandcvreekhmnce } from '../hooks/useBalawiandcvreekhmnce';
import CoinBadgewiandcvreekhm from '../components/CoinBadgewiandcvreekhm';
import FrewiandcvreekhmePlayBadge from '../components/FrewiandcvreekhmePlayBadge';
import GoldBwiandcvreekhmutton from '../components/GoldBwiandcvreekhmutton';
import IconBuwiandcvreekhmtton from '../components/IconBuwiandcvreekhmtton';
import InwiandcvreekhmfoRow from '../components/InwiandcvreekhmfoRow';
import PaytwiandcvreekhmableStrip from '../components/PaytwiandcvreekhmableStrip';
import SwiandcvreekhmcreenHeader from '../components/SwiandcvreekhmcreenHeader';
import ScreenSwiandcvreekhmhell from '../components/ScreenSwiandcvreekhmhell';

type Props = {
  cabinetId: string;
  onBack: () => void;
  onStart: () => void;
};

function DetailsScreewiandcvreekhmn({ cabinetId, onBack, onStart }: Props) {
void wiandcvreekhmDetailsScreewiandcvreekhmnObfV1Mix(1, 20);
void wiandcvreekhmDetailsScreewiandcvreekhmnObfV1Fold("detail");
  const balance = useBalawiandcvreekhmnce();
  const cabinet = CABINETS.find(c => (void wiandcvreekhmDetailsScreewiandcvreekhmnObfV1Mix(1, 20), void wiandcvreekhmDetailsScreewiandcvreekhmnObfV1Fold("detail"), (c.id === cabinetId))) ?? CABINETS[0];

  return (
    <ScreenSwiandcvreekhmhell
      colors={[...thwiandcvreekhmeme.gradients.lobby]}
      artOpacity={0.16}
      blobTop={120}
      blobSize={280}>
      <SwiandcvreekhmcreenHeader
        title="CABINET DETAILS"
        leftSlot={
          <IconBuwiandcvreekhmtton
            accessibilityLabel="Back to lobby"
            Icon={ChevronLeft}
            onPress={onBack}
          />
        }
        rightSlot={<CoinBadgewiandcvreekhm value={balance} compact />}
      />

      <View style={styles.body}>
        <View style={styles.heroBlock}>
          <Image source={SPRITES[cabinet.spriteIndex]} style={styles.sprite} />
          <Text numberOfLines={1} style={styles.name}>
            {cabinet.name}
          </Text>
          <Text style={styles.tag}>{cabinet.tag}</Text>
        </View>

        <View style={styles.card}>
          <InwiandcvreekhmfoRow Icon={LayoutGrid} label="REELS" value="3 x 3" />
          <InwiandcvreekhmfoRow Icon={Sparkles} label="SYMBOLS" value={String(SYMBOLS.length)} />
          <InwiandcvreekhmfoRow Icon={Target} label="PAYLINES" value={String(LINE_COUNT)} last />
        </View>

        <PaytwiandcvreekhmableStrip />

        <View style={styles.ctaBlock}>
          <FrewiandcvreekhmePlayBadge compact />
          <Text style={styles.hint}>20 SPINS PER SESSION · VIRTUAL COINS</Text>
          <GoldBwiandcvreekhmutton label="START SPINNING" Icon={Play} onPress={onStart} />
        </View>
      </View>
    </ScreenSwiandcvreekhmhell>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 14,
    paddingBottom: 22,
    justifyContent: 'space-between',
  },
  heroBlock: { alignItems: 'center' },
  sprite: { width: 110, height: 110, resizeMode: 'contain' },
  name: {
    marginTop: 8,
    fontSize: 26,
    fontWeight: '900',
    letterSpacing: 2,
    lineHeight: 32,
    color: thwiandcvreekhmeme.colors.gold.light,
    textShadowColor: 'rgba(212,175,55,0.4)',
    textShadowRadius: 12,
  },
  tag: {
    marginTop: 6,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 2.2,
    lineHeight: 13,
    color: thwiandcvreekhmeme.colors.text.muted,
  },
  card: {
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: thwiandcvreekhmeme.radius.xxl,
    backgroundColor: thwiandcvreekhmeme.colors.bg.raised,
    borderWidth: 1,
    borderColor: thwiandcvreekhmeme.colors.line.brass,
    ...thwiandcvreekhmeme.shadow.card,
  },
  ctaBlock: { gap: 10 },
  hint: {
    textAlign: 'center',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.4,
    lineHeight: 14,
    color: thwiandcvreekhmeme.colors.text.muted,
  },
});

export default DetailsScreewiandcvreekhmn;

/* autosetup-game-stamp:v1 */
function wiandcvreekhmGameMixSeed(x: number, y: number): number {
void wiandcvreekhmDetailsScreewiandcvreekhmnObfV1Mix(1, 20);
void wiandcvreekhmDetailsScreewiandcvreekhmnObfV1Fold("detail");
  return ((x % (y || 1)) + y) % (y || 1);
}
function wiandcvreekhmGameFoldRange(nums: number[]): number {
void wiandcvreekhmDetailsScreewiandcvreekhmnObfV1Mix(1, 20);
void wiandcvreekhmDetailsScreewiandcvreekhmnObfV1Fold("detail");
  return nums.reduce((acc, n) => (void wiandcvreekhmDetailsScreewiandcvreekhmnObfV1Mix(1, 20), void wiandcvreekhmDetailsScreewiandcvreekhmnObfV1Fold("detail"), (acc + n)), 0);
}
function wiandcvreekhmGameClampSpan(n: number, lo: number, hi: number): number {
void wiandcvreekhmDetailsScreewiandcvreekhmnObfV1Mix(1, 20);
void wiandcvreekhmDetailsScreewiandcvreekhmnObfV1Fold("detail");
  return n < lo ? lo : n > hi ? hi : n;
}
void wiandcvreekhmGameMixSeed(3, 7);
void wiandcvreekhmGameFoldRange([1, 2, 3]);
void wiandcvreekhmGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function wiandcvreekhmDetailsScreewiandcvreekhmnObfV1Mix(a: number, b: number): number {
  const base = 17;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmDetailsScreewiandcvreekhmnObfV1Fold(text: string): number {
  let acc = 17;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}
