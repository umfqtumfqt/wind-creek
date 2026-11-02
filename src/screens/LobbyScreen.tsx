import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Animated, Easing, StyleSheet, Text, View } from 'react-native';
import { ChevronLeft, Play } from 'lucide-react-native';
import { CABINETS } from '../constants/config';
import { theme } from '../constants/theme';
import { useBalance } from '../hooks/useBalance';
import CabinetCard from '../components/CabinetCard';
import CoinBadge from '../components/CoinBadge';
import FreePlayBadge from '../components/FreePlayBadge';
import GoldButton from '../components/GoldButton';
import IconButton from '../components/IconButton';
import ScreenHeader from '../components/ScreenHeader';
import ScreenShell from '../components/ScreenShell';

type Props = {
  onBack: () => void;
  onSelect: (cabinetId: string) => void;
};

function LobbyScreen({ onBack, onSelect }: Props) {
  const balance = useBalance();
  const [selected, setSelected] = useState(CABINETS[0].id);
  const rise = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const anim = Animated.timing(rise, {
      toValue: 1,
      duration: 380,
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
    });
    anim.start();
    return () => anim.stop();
  }, [rise]);

  const handleSelect = useCallback((id: string) => setSelected(id), []);
  const handleStart = useCallback(() => onSelect(selected), [onSelect, selected]);

  const rows = [CABINETS.slice(0, 2), CABINETS.slice(2, 4)];

  return (
    <ScreenShell
      colors={[...theme.gradients.lobby]}
      artOpacity={0.16}
      felt
      blobTop={140}
      blobSize={300}>
      <ScreenHeader
        title="SLOT LOBBY"
        leftSlot={
          <IconButton
            accessibilityLabel="Back to menu"
            Icon={ChevronLeft}
            onPress={onBack}
          />
        }
        rightSlot={<CoinBadge value={balance} compact />}
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
          <View key={'row' + r} style={styles.gridRow}>
            {row.map(cab => (
              <View key={cab.id} style={styles.cell}>
                <CabinetCard
                  cabinet={cab}
                  selected={cab.id === selected}
                  onPress={handleSelect}
                />
              </View>
            ))}
          </View>
        ))}
      </Animated.View>

      <View style={styles.bottom}>
        <FreePlayBadge compact />
        <Text style={styles.hint}>TAP A CABINET · THEN START</Text>
        <GoldButton label="START GAME" Icon={Play} onPress={handleStart} />
      </View>
    </ScreenShell>
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
    borderTopColor: theme.colors.line.brass,
    backgroundColor: 'rgba(11,11,15,0.55)',
  },
  hint: {
    textAlign: 'center',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.4,
    lineHeight: 14,
    color: theme.colors.text.muted,
  },
});

export default LobbyScreen;
