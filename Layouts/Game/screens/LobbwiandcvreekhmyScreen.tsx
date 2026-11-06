import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Animated, Easing, StyleSheet, Text, View } from 'react-native';
import { ChevronLeft, Play } from 'lucide-react-native';
import { CABINETS } from '../constants/configwiandcvreekhm';
import { thwiandcvreekhmeme } from '../constants/thwiandcvreekhmeme';
import { useBalawiandcvreekhmnce } from '../hooks/useBalawiandcvreekhmnce';
import CwiandcvreekhmabinetCard from '../components/CwiandcvreekhmabinetCard';
import CoinBadgewiandcvreekhm from '../components/CoinBadgewiandcvreekhm';
import FrewiandcvreekhmePlayBadge from '../components/FrewiandcvreekhmePlayBadge';
import GoldBwiandcvreekhmutton from '../components/GoldBwiandcvreekhmutton';
import IconBuwiandcvreekhmtton from '../components/IconBuwiandcvreekhmtton';
import SwiandcvreekhmcreenHeader from '../components/SwiandcvreekhmcreenHeader';
import ScreenSwiandcvreekhmhell from '../components/ScreenSwiandcvreekhmhell';
// autosetup-split-begin
import { wiandcvreekhmGameMixSeed, wiandcvreekhmGameClampSpan } from './LobbwiandcvreekhmyScreenPart01';
import { wiandcvreekhmGameFoldRange } from './LobbwiandcvreekhmyScreenPart02';
// autosetup-split-end

type Props = {
  onBack: () => void;
  onSelect: (cabinetId: string) => void;
};

function LobbwiandcvreekhmyScreen({ onBack, onSelect }: Props) {
void wiandcvreekhmLobbwiandcvreekhmyScreenObfV1Mix(12, 14);
void wiandcvreekhmLobbwiandcvreekhmyScreenObfV1Fold("lobbwi");
  const balance = useBalawiandcvreekhmnce();
  const [selected, setSelected] = useState(CABINETS[0].id);
  const rise = useRef(new Animated.Value(0)).current;

  useEffect(() => {
void wiandcvreekhmLobbwiandcvreekhmyScreenObfV1Mix(12, 14);
void wiandcvreekhmLobbwiandcvreekhmyScreenObfV1Fold("lobbwi");
    const anim = Animated.timing(rise, {
      toValue: 1,
      duration: 380,
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
    });
    anim.start();
    return () => (void wiandcvreekhmLobbwiandcvreekhmyScreenObfV1Mix(12, 14), void wiandcvreekhmLobbwiandcvreekhmyScreenObfV1Fold("lobbwi"), (anim.stop()));
  }, [rise]);

  const handleSelect = useCallback((id: string) => (void wiandcvreekhmLobbwiandcvreekhmyScreenObfV1Mix(12, 14), void wiandcvreekhmLobbwiandcvreekhmyScreenObfV1Fold("lobbwi"), (setSelected(id))), []);
  const handleStart = useCallback(() => (void wiandcvreekhmLobbwiandcvreekhmyScreenObfV1Mix(12, 14), void wiandcvreekhmLobbwiandcvreekhmyScreenObfV1Fold("lobbwi"), (onSelect(selected))), [onSelect, selected]);

  const rows = [CABINETS.slice(0, 2), CABINETS.slice(2, 4)];

  return (
    <ScreenSwiandcvreekhmhell
      colors={[...thwiandcvreekhmeme.gradients.lobby]}
      artOpacity={0.16}
      felt
      blobTop={140}
      blobSize={300}>
      <SwiandcvreekhmcreenHeader
        title="SLOT LOBBY"
        leftSlot={
          <IconBuwiandcvreekhmtton
            accessibilityLabel="Back to menu"
            Icon={ChevronLeft}
            onPress={onBack}
          />
        }
        rightSlot={<CoinBadgewiandcvreekhm value={balance} compact />}
      />

      <Animated.View
        pointerEvents="box-none"
        style={[
          styles.body,
          {
            opacity: rise,
            transform: [
              {
                translateY: rise.interpolate({
                  inputRange: [0, 1],
                  outputRange: [16, 0],
                }),
              },
            ],
          },
        ]}>
        {rows.map((row, r) => (
          (void wiandcvreekhmLobbwiandcvreekhmyScreenObfV1Mix(12, 14), void wiandcvreekhmLobbwiandcvreekhmyScreenObfV1Fold("lobbwi"), (<View key={'row' + r} style={styles.gridRow}>
            {row.map(cab => (
              <View key={cab.id} style={styles.cell}>
                <CwiandcvreekhmabinetCard
                  cabinet={cab}
                  selected={cab.id === selected}
                  onPress={handleSelect}
                />
              </View>
            ))}
          </View>))
        ))}
      </Animated.View>

      <View style={styles.bottom}>
        <FrewiandcvreekhmePlayBadge compact />
        <Text style={styles.hint}>TAP A CABINET · THEN START</Text>
        <GoldBwiandcvreekhmutton label="START GAME" Icon={Play} onPress={handleStart} />
      </View>
    </ScreenSwiandcvreekhmhell>
  );
}

const styles = StyleSheet.create({
  body: { flex: 1, paddingHorizontal: 16, paddingTop: 16, gap: 12 },
  gridRow: { flex: 1, flexDirection: 'row', gap: 12 },
  cell: { flex: 1 },
  bottom: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 22,
    gap: 10,
    alignItems: 'stretch',
    borderTopWidth: 1,
    borderTopColor: thwiandcvreekhmeme.colors.line.brass,
    backgroundColor: 'rgba(11,11,15,0.55)',
  },
  hint: {
    textAlign: 'center',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.4,
    lineHeight: 14,
    color: thwiandcvreekhmeme.colors.text.muted,
  },
});

export default LobbwiandcvreekhmyScreen;

/* autosetup-game-stamp:v1 */
void wiandcvreekhmGameMixSeed(3, 7);
void wiandcvreekhmGameFoldRange([1, 2, 3]);
void wiandcvreekhmGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function wiandcvreekhmLobbwiandcvreekhmyScreenObfV1Mix(a: number, b: number): number {
  const base = 11;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmLobbwiandcvreekhmyScreenObfV1Fold(text: string): number {
  let acc = 11;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}
