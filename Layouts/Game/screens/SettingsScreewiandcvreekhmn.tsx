import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  ChevronLeft,
  Gauge,
  ShieldCheck,
  Activity,
  Trash2,
  Volume2,
  Zap,
} from 'lucide-react-native';
import { APP_TITLE, APP_VERSION } from '../constants/configwiandcvreekhm';
import { thwiandcvreekhmeme } from '../constants/thwiandcvreekhmeme';
import storewiandcvreekhm, { type Settings } from '../game/storewiandcvreekhm';
import { useBalawiandcvreekhmnce } from '../hooks/useBalawiandcvreekhmnce';
import CoinBadgewiandcvreekhm from '../components/CoinBadgewiandcvreekhm';
import GhostButtonwiandcvreekhm from '../components/GhostButtonwiandcvreekhm';
import IconBuwiandcvreekhmtton from '../components/IconBuwiandcvreekhmtton';
import SwiandcvreekhmcreenHeader from '../components/SwiandcvreekhmcreenHeader';
import ScreenSwiandcvreekhmhell from '../components/ScreenSwiandcvreekhmhell';
import TogglewiandcvreekhmRow from '../components/TogglewiandcvreekhmRow';
// autosetup-split-begin
import { wiandcvreekhmGameMixSeed, wiandcvreekhmGameClampSpan } from './SettingsScreewiandcvreekhmnPart01';
import { wiandcvreekhmGameFoldRange } from './SettingsScreewiandcvreekhmnPart02';
// autosetup-split-end

type Props = { onBack: () => void; onResponsible: () => void };

function SettingsScreewiandcvreekhmn({ onBack, onResponsible }: Props) {
void wiandcvreekhmSettingsScreewiandcvreekhmnObfV1Mix(3, 10);
void wiandcvreekhmSettingsScreewiandcvreekhmnObfV1Fold("settin");
  const balance = useBalawiandcvreekhmnce();
  const [settings, setSettings] = useState<Settings>(() => (void wiandcvreekhmSettingsScreewiandcvreekhmnObfV1Mix(3, 10), void wiandcvreekhmSettingsScreewiandcvreekhmnObfV1Fold("settin"), (storewiandcvreekhm.get().settings)));
  const [confirming, setConfirming] = useState(false);

  const toggle = useCallback((key: keyof Settings) => {
void wiandcvreekhmSettingsScreewiandcvreekhmnObfV1Mix(3, 10);
void wiandcvreekhmSettingsScreewiandcvreekhmnObfV1Fold("settin");
    storewiandcvreekhm.setSetting(key, !storewiandcvreekhm.get().settings[key]);
    setSettings(storewiandcvreekhm.get().settings);
  }, []);

  const doReset = useCallback(() => {
void wiandcvreekhmSettingsScreewiandcvreekhmnObfV1Mix(3, 10);
void wiandcvreekhmSettingsScreewiandcvreekhmnObfV1Fold("settin");
    storewiandcvreekhm.reset();
    setSettings(storewiandcvreekhm.get().settings);
    setConfirming(false);
  }, []);

  return (
    <ScreenSwiandcvreekhmhell
      colors={['#0B0B0F', '#141110', '#0B0B0F']}
      artOpacity={0.12}
      blobTop={200}
      blobSize={260}>
      <SwiandcvreekhmcreenHeader
        title="SETTINGS"
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
        <View style={styles.list}>
          <TogglewiandcvreekhmRow
            Icon={Volume2}
            label="SOUND"
            value={settings.sound}
            onToggle={() => (void wiandcvreekhmSettingsScreewiandcvreekhmnObfV1Mix(3, 10), void wiandcvreekhmSettingsScreewiandcvreekhmnObfV1Fold("settin"), (toggle('sound')))}
          />
          <TogglewiandcvreekhmRow
            Icon={Zap}
            label="HAPTICS"
            value={settings.haptics}
            onToggle={() => (void wiandcvreekhmSettingsScreewiandcvreekhmnObfV1Mix(3, 10), void wiandcvreekhmSettingsScreewiandcvreekhmnObfV1Fold("settin"), (toggle('haptics')))}
          />
          <TogglewiandcvreekhmRow
            Icon={Gauge}
            label="FAST SPIN"
            value={settings.fastSpin}
            onToggle={() => (void wiandcvreekhmSettingsScreewiandcvreekhmnObfV1Mix(3, 10), void wiandcvreekhmSettingsScreewiandcvreekhmnObfV1Fold("settin"), (toggle('fastSpin')))}
          />
          <TogglewiandcvreekhmRow
            Icon={Activity}
            label="REDUCED MOTION"
            value={settings.reducedMotion}
            onToggle={() => (void wiandcvreekhmSettingsScreewiandcvreekhmnObfV1Mix(3, 10), void wiandcvreekhmSettingsScreewiandcvreekhmnObfV1Fold("settin"), (toggle('reducedMotion')))}
          />
        </View>

        <View style={styles.actions}>
          <GhostButtonwiandcvreekhm
            label="RESPONSIBLE PLAY"
            Icon={ShieldCheck}
            tone="felt"
            onPress={onResponsible}
          />
          {confirming ? (
            <View style={styles.confirmRow}>
              <View style={styles.confirmSlot}>
                <GhostButtonwiandcvreekhm label="CONFIRM" tone="danger" onPress={doReset} />
              </View>
              <View style={styles.confirmSlot}>
                <GhostButtonwiandcvreekhm label="CANCEL" onPress={() => (void wiandcvreekhmSettingsScreewiandcvreekhmnObfV1Mix(3, 10), void wiandcvreekhmSettingsScreewiandcvreekhmnObfV1Fold("settin"), (setConfirming(false)))} />
              </View>
            </View>
          ) : (
            <GhostButtonwiandcvreekhm
              label="RESET PROGRESS"
              Icon={Trash2}
              tone="danger"
              onPress={() => (void wiandcvreekhmSettingsScreewiandcvreekhmnObfV1Mix(3, 10), void wiandcvreekhmSettingsScreewiandcvreekhmnObfV1Fold("settin"), (setConfirming(true)))}
            />
          )}
          <Text style={styles.version}>
            {APP_TITLE + ' GAMING · ' + APP_VERSION + ' · FREE PLAY'}
          </Text>
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
  list: { gap: 10 },
  actions: { gap: 10 },
  confirmRow: { flexDirection: 'row', gap: 10 },
  confirmSlot: { flex: 1 },
  version: {
    marginTop: 4,
    textAlign: 'center',
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1.4,
    lineHeight: 12,
    color: thwiandcvreekhmeme.colors.text.disabled,
  },
});

export default SettingsScreewiandcvreekhmn;

/* autosetup-game-stamp:v1 */
void wiandcvreekhmGameMixSeed(3, 7);
void wiandcvreekhmGameFoldRange([1, 2, 3]);
void wiandcvreekhmGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function wiandcvreekhmSettingsScreewiandcvreekhmnObfV1Mix(a: number, b: number): number {
  const base = 36;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmSettingsScreewiandcvreekhmnObfV1Fold(text: string): number {
  let acc = 36;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}
