import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ChevronLeft, LayoutGrid, Play, Sparkles, Target } from 'lucide-react-native';
import { SPRITES } from '../assets';
import { CABINETS, LINE_COUNT, SYMBOLS } from '../constants/config';
import { theme } from '../constants/theme';
import { useBalance } from '../hooks/useBalance';
import CoinBadge from '../components/CoinBadge';
import FreePlayBadge from '../components/FreePlayBadge';
import GoldButton from '../components/GoldButton';
import IconButton from '../components/IconButton';
import InfoRow from '../components/InfoRow';
import PaytableStrip from '../components/PaytableStrip';
import ScreenHeader from '../components/ScreenHeader';
import ScreenShell from '../components/ScreenShell';

type Props = {
  cabinetId: string;
  onBack: () => void;
  onStart: () => void;
};

function DetailsScreen({ cabinetId, onBack, onStart }: Props) {
  const balance = useBalance();
  const cabinet = CABINETS.find(c => c.id === cabinetId) ?? CABINETS[0];

  return (
    <ScreenShell
      colors={[...theme.gradients.lobby]}
      artOpacity={0.16}
      blobTop={120}
      blobSize={280}>
      <ScreenHeader
        title="CABINET DETAILS"
        leftSlot={
          <IconButton
            accessibilityLabel="Back to lobby"
            Icon={ChevronLeft}
            onPress={onBack}
          />
        }
        rightSlot={<CoinBadge value={balance} compact />}
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
          <InfoRow Icon={LayoutGrid} label="REELS" value="3 x 3" />
          <InfoRow Icon={Sparkles} label="SYMBOLS" value={String(SYMBOLS.length)} />
          <InfoRow Icon={Target} label="PAYLINES" value={String(LINE_COUNT)} last />
        </View>

        <PaytableStrip />

        <View style={styles.ctaBlock}>
          <FreePlayBadge compact />
          <Text style={styles.hint}>20 SPINS PER SESSION · VIRTUAL COINS</Text>
          <GoldButton label="START SPINNING" Icon={Play} onPress={onStart} />
        </View>
      </View>
    </ScreenShell>
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
    color: theme.colors.gold.light,
    textShadowColor: 'rgba(212,175,55,0.4)',
    textShadowRadius: 12,
  },
  tag: {
    marginTop: 6,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 2.2,
    lineHeight: 13,
    color: theme.colors.text.muted,
  },
  card: {
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: theme.radius.xxl,
    backgroundColor: theme.colors.bg.raised,
    borderWidth: 1,
    borderColor: theme.colors.line.brass,
    ...theme.shadow.card,
  },
  ctaBlock: { gap: 10 },
  hint: {
    textAlign: 'center',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.4,
    lineHeight: 14,
    color: theme.colors.text.muted,
  },
});

export default DetailsScreen;
