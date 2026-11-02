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
import { APP_TITLE, APP_VERSION } from '../constants/config';
import { theme } from '../constants/theme';
import store, { type Settings } from '../game/store';
import { useBalance } from '../hooks/useBalance';
import CoinBadge from '../components/CoinBadge';
import GhostButton from '../components/GhostButton';
import IconButton from '../components/IconButton';
import ScreenHeader from '../components/ScreenHeader';
import ScreenShell from '../components/ScreenShell';
import ToggleRow from '../components/ToggleRow';

type Props = { onBack: () => void; onResponsible: () => void };

function SettingsScreen({ onBack, onResponsible }: Props) {
  const balance = useBalance();
  const [settings, setSettings] = useState<Settings>(() => store.get().settings);
  const [confirming, setConfirming] = useState(false);

  const toggle = useCallback((key: keyof Settings) => {
    store.setSetting(key, !store.get().settings[key]);
    setSettings(store.get().settings);
  }, []);

  const doReset = useCallback(() => {
    store.reset();
    setSettings(store.get().settings);
    setConfirming(false);
  }, []);

  return (
    <ScreenShell
      colors={['#0B0B0F', '#141110', '#0B0B0F']}
      artOpacity={0.12}
      blobTop={200}
      blobSize={260}>
      <ScreenHeader
        title="SETTINGS"
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
        <View style={styles.list}>
          <ToggleRow
            Icon={Volume2}
            label="SOUND"
            value={settings.sound}
            onToggle={() => toggle('sound')}
          />
          <ToggleRow
            Icon={Zap}
            label="HAPTICS"
            value={settings.haptics}
            onToggle={() => toggle('haptics')}
          />
          <ToggleRow
            Icon={Gauge}
            label="FAST SPIN"
            value={settings.fastSpin}
            onToggle={() => toggle('fastSpin')}
          />
          <ToggleRow
            Icon={Activity}
            label="REDUCED MOTION"
            value={settings.reducedMotion}
            onToggle={() => toggle('reducedMotion')}
          />
        </View>

        <View style={styles.actions}>
          <GhostButton
            label="RESPONSIBLE PLAY"
            Icon={ShieldCheck}
            tone="felt"
            onPress={onResponsible}
          />
          {confirming ? (
            <View style={styles.confirmRow}>
              <View style={styles.confirmSlot}>
                <GhostButton label="CONFIRM" tone="danger" onPress={doReset} />
              </View>
              <View style={styles.confirmSlot}>
                <GhostButton label="CANCEL" onPress={() => setConfirming(false)} />
              </View>
            </View>
          ) : (
            <GhostButton
              label="RESET PROGRESS"
              Icon={Trash2}
              tone="danger"
              onPress={() => setConfirming(true)}
            />
          )}
          <Text style={styles.version}>
            {APP_TITLE + ' GAMING · ' + APP_VERSION + ' · FREE PLAY'}
          </Text>
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
    color: theme.colors.text.disabled,
  },
});

export default SettingsScreen;
