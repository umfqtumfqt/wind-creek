import React, {useState} from 'react';
import {
  Animated,
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Check, Gift, Lock, Music, Vibrate, Volume2} from 'lucide-react-native';
import {THEME} from '../constants/theme';
import {TOTAL_CARDS} from '../constants/config';
import {MissionState} from '../game/missions';
import {countOwned, sceneFor} from '../game/collection';
import {PAYTABLE} from '../game/slotEngine';
import {ART} from '../assets';
import {usePressScale} from '../hooks/usePressScale';
import {formatCoins} from '../hooks/useCountUp';
import {PrimaryButton} from './PrimaryButton';
import {SecondaryButton} from './SecondaryButton';

const SCREEN_W = Dimensions.get('window').width;
const SHEET_W = SCREEN_W - 40;
const TILE = Math.floor((SHEET_W - 2 * 10) / 3);

/* ------------------------------------------------------------------ */
/* Missions                                                            */
/* ------------------------------------------------------------------ */

type MissionRowProps = {
  mission: MissionState;
  onClaim: (id: string) => void;
};

const MissionRow: React.FC<MissionRowProps> = ({mission, onClaim}) => {
  const {scale, onPressIn, onPressOut} = usePressScale(0.95);
  const done = mission.progress >= mission.target;
  const ratio = Math.min(1, mission.progress / mission.target);
  const barColor = done ? THEME.accent : THEME.secondary;

  return (
    <View style={[styles.missionRow, {borderLeftColor: barColor}]}>
      <View style={styles.missionText}>
        <Text style={styles.missionTitle}>{mission.title}</Text>
        <View style={styles.track}>
          <View
            style={[styles.trackFill, {flex: ratio, backgroundColor: barColor}]}
          />
          <View style={{flex: 1 - ratio}} />
        </View>
        <Text style={styles.missionMeta}>
          {mission.progress}/{mission.target}
          {mission.claimed ? '  ·  CLAIMED' : ''}
        </Text>
      </View>

      <Pressable
        accessibilityRole="button"
        accessibilityLabel={`Claim ${mission.reward} coins`}
        disabled={!done || mission.claimed}
        onPress={() => onClaim(mission.id)}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
        style={[
          styles.claimPress,
          {opacity: done && !mission.claimed ? 1 : 0.4},
        ]}>
        <Animated.View style={[styles.claimInner, {transform: [{scale}]}]}>
          <Text style={styles.claimText}>
            {mission.claimed ? 'DONE' : `CLAIM ${mission.reward}`}
          </Text>
        </Animated.View>
      </Pressable>
    </View>
  );
};

export const MissionsPanel: React.FC<{
  missions: MissionState[];
  onClaim: (id: string) => void;
}> = ({missions, onClaim}) => (
  <View style={styles.panelBody}>
    {missions.map(m => (
      <MissionRow key={m.id} mission={m} onClaim={onClaim} />
    ))}
    <Text style={styles.footNote}>MISSIONS REDRAW AT LOCAL MIDNIGHT</Text>
  </View>
);

/* ------------------------------------------------------------------ */
/* Album                                                               */
/* ------------------------------------------------------------------ */

export const AlbumPanel: React.FC<{owned: boolean[]}> = ({owned}) => {
  const have = countOwned(owned);
  const scene = sceneFor(have);
  const togo = Math.max(0, scene.needed - have);

  return (
    <View style={styles.panelBody}>
      <View style={[styles.sceneBar, {borderColor: scene.accent + '66'}]}>
        <Text style={[styles.sceneTitle, {color: scene.accent}]}>
          {scene.title}
        </Text>
        <Text style={styles.sceneMeta}>
          {togo > 0 ? `${togo} CARDS TO GO` : 'SCENE UNLOCKED'}
        </Text>
      </View>

      <ScrollView
        style={styles.grid}
        contentContainerStyle={styles.gridInner}
        showsVerticalScrollIndicator={false}>
        {owned.map((isOwned, i) => (
          <View
            key={`card-${i}`}
            style={[
              styles.slot,
              isOwned ? styles.slotOwned : styles.slotLocked,
            ]}>
            {isOwned ? (
              <Image
                source={ART.cardJoker}
                style={styles.slotArt}
                resizeMode="contain"
              />
            ) : (
              <Lock size={20} color="#5E444A" strokeWidth={2.2} />
            )}
          </View>
        ))}
      </ScrollView>

      <Text style={styles.footNote}>
        {have} / {TOTAL_CARDS} COLLECTED · DUPLICATES PAY COINS
      </Text>
    </View>
  );
};

/* ------------------------------------------------------------------ */
/* Chest                                                               */
/* ------------------------------------------------------------------ */

export const ChestPanel: React.FC<{
  ready: boolean;
  cooldownLabel: string;
  lastReward: number;
  onOpen: () => void;
}> = ({ready, cooldownLabel, lastReward, onOpen}) => (
  <View style={styles.panelBody}>
    <View style={styles.chestWrap}>
      <View style={styles.chestGlow} />
      <Image source={ART.chest} style={styles.chestArt} resizeMode="contain" />
    </View>

    {lastReward > 0 ? (
      <Text style={styles.chestReward}>
        +{formatCoins(lastReward)} JOKER COINS
      </Text>
    ) : (
      <Text style={styles.chestHint}>
        A FREE CHEST EVERY FOUR HOURS · 100-500 COINS
      </Text>
    )}

    {ready ? (
      <PrimaryButton
        label="OPEN CHEST"
        Icon={Gift}
        variant="gold"
        height={56}
        onPress={onOpen}
        style={styles.chestCta}
      />
    ) : (
      <View style={styles.cooldown}>
        <Text style={styles.cooldownText}>NEXT CHEST IN {cooldownLabel}</Text>
      </View>
    )}
  </View>
);

/* ------------------------------------------------------------------ */
/* Paytable                                                            */
/* ------------------------------------------------------------------ */

export const PaytablePanel: React.FC = () => (
  <View style={styles.panelBody}>
    {PAYTABLE.map(row => (
      <View key={row.key} style={styles.payRow}>
        <Image source={row.asset} style={styles.payArt} resizeMode="contain" />
        <View style={styles.payText}>
          <Text style={styles.payName}>
            {row.name}
            {row.isWild ? '  ·  WILD' : ''}
          </Text>
          <Text style={styles.payMeta}>
            {row.isWild
              ? 'SUBSTITUTES FOR ANY SYMBOL'
              : 'THREE ON A LINE PAYS'}
          </Text>
        </View>
        <Text style={[styles.payMulti, {color: row.tintColor}]}>
          x{row.three}
        </Text>
      </View>
    ))}
    <Text style={styles.footNote}>
      THREE PAY LINES · CENTRE AND BOTH DIAGONALS
    </Text>
  </View>
);

/* ------------------------------------------------------------------ */
/* Settings                                                            */
/* ------------------------------------------------------------------ */

export type SettingsState = {
  sound: boolean;
  music: boolean;
  haptics: boolean;
};

type ToggleRowProps = {
  label: string;
  Icon: React.ComponentType<any>;
  value: boolean;
  onToggle: () => void;
};

const ToggleRow: React.FC<ToggleRowProps> = ({label, Icon, value, onToggle}) => {
  const {scale, onPressIn, onPressOut} = usePressScale(0.97);
  return (
    <Pressable
      accessibilityRole="switch"
      accessibilityLabel={label}
      accessibilityState={{checked: value}}
      onPress={onToggle}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      hitSlop={{top: 6, bottom: 6, left: 8, right: 8}}
      style={styles.togglePress}>
      <Animated.View style={[styles.toggleRow, {transform: [{scale}]}]}>
        <Icon size={20} color={THEME.accent} strokeWidth={2.2} />
        <Text style={styles.toggleLabel}>{label}</Text>
        <View
          style={[
            styles.switchTrack,
            value ? styles.switchOn : styles.switchOff,
          ]}>
          <View
            style={[
              styles.switchKnob,
              value ? styles.knobOn : styles.knobOff,
            ]}>
            {value ? (
              <Check size={12} color={THEME.bg} strokeWidth={3} />
            ) : null}
          </View>
        </View>
      </Animated.View>
    </Pressable>
  );
};

export const SettingsPanel: React.FC<{
  settings: SettingsState;
  onToggle: (key: keyof SettingsState) => void;
  onReset: () => void;
}> = ({settings, onToggle, onReset}) => {
  const [confirming, setConfirming] = useState(false);

  return (
    <View style={styles.panelBody}>
      <ToggleRow
        label="SOUND"
        Icon={Volume2}
        value={settings.sound}
        onToggle={() => onToggle('sound')}
      />
      <ToggleRow
        label="MUSIC"
        Icon={Music}
        value={settings.music}
        onToggle={() => onToggle('music')}
      />
      <ToggleRow
        label="HAPTICS"
        Icon={Vibrate}
        value={settings.haptics}
        onToggle={() => onToggle('haptics')}
      />

      {confirming ? (
        <View style={styles.confirmRow}>
          <PrimaryButton
            label="CONFIRM RESET"
            height={50}
            onPress={() => {
              setConfirming(false);
              onReset();
            }}
          />
          <SecondaryButton
            label="CANCEL"
            height={48}
            onPress={() => setConfirming(false)}
            style={styles.cancelBtn}
          />
        </View>
      ) : (
        <SecondaryButton
          label="RESET PROGRESS"
          height={48}
          onPress={() => setConfirming(true)}
          style={styles.resetBtn}
        />
      )}

      <Text style={styles.legal}>
        This app is for entertainment. Coins are fictional, cannot be purchased,
        and have no real-world value. 18+.
      </Text>
    </View>
  );
};

/* ------------------------------------------------------------------ */

const styles = StyleSheet.create({
  panelBody: {
    width: '100%',
  },
  footNote: {
    marginTop: 12,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.2,
    textAlign: 'center',
    color: THEME.textDim,
  },

  missionRow: {
    minHeight: 68,
    borderRadius: 14,
    backgroundColor: 'rgba(255,245,230,0.05)',
    borderLeftWidth: 4,
    paddingVertical: 12,
    paddingLeft: 14,
    paddingRight: 12,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  missionText: {
    flex: 1,
    paddingRight: 12,
  },
  missionTitle: {
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 1.1,
    color: THEME.text,
  },
  track: {
    marginTop: 8,
    height: 5,
    borderRadius: 3,
    backgroundColor: 'rgba(255,245,230,0.1)',
    overflow: 'hidden',
    flexDirection: 'row',
  },
  trackFill: {
    height: 5,
    borderRadius: 3,
  },
  missionMeta: {
    marginTop: 6,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1,
    color: THEME.textDim,
    fontVariant: ['tabular-nums' as const],
  },
  claimPress: {
    width: 104,
    height: 44,
  },
  claimInner: {
    width: 104,
    height: 44,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(178,30,53,0.3)',
    borderWidth: 1,
    borderColor: THEME.goldBorder,
  },
  claimText: {
    fontSize: 11,
    lineHeight: 14,
    fontWeight: '800',
    letterSpacing: 0.8,
    color: THEME.accent,
  },

  sceneBar: {
    borderRadius: 14,
    borderWidth: 1,
    backgroundColor: 'rgba(109,40,217,0.16)',
    paddingVertical: 10,
    paddingHorizontal: 14,
    marginBottom: 12,
  },
  sceneTitle: {
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 1.3,
  },
  sceneMeta: {
    marginTop: 4,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.1,
    color: THEME.textMuted,
  },
  grid: {
    maxHeight: TILE * 3 + 24,
  },
  gridInner: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  slot: {
    width: TILE,
    height: TILE,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slotOwned: {
    backgroundColor: 'rgba(244,201,93,0.1)',
    borderWidth: 1.5,
    borderColor: THEME.goldBorder,
  },
  slotLocked: {
    backgroundColor: 'rgba(255,245,230,0.04)',
    borderWidth: 1,
    borderColor: 'rgba(255,245,230,0.08)',
  },
  slotArt: {
    width: TILE - 18,
    height: TILE - 18,
  },

  chestWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },
  chestGlow: {
    position: 'absolute',
    width: 170,
    height: 120,
    borderRadius: 85,
    backgroundColor: 'rgba(109,40,217,0.3)',
  },
  chestArt: {
    width: 136,
    height: 136,
  },
  chestReward: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '900',
    letterSpacing: 1.4,
    color: THEME.accent,
    marginBottom: 14,
    fontVariant: ['tabular-nums' as const],
  },
  chestHint: {
    textAlign: 'center',
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 1.1,
    color: THEME.textMuted,
    marginBottom: 14,
  },
  chestCta: {
    marginTop: 2,
  },
  cooldown: {
    height: 56,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,245,230,0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255,245,230,0.1)',
  },
  cooldownText: {
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.4,
    color: THEME.textDim,
  },

  payRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 9,
    borderBottomWidth: 1,
    borderBottomColor: THEME.hairline,
  },
  payArt: {
    width: 36,
    height: 36,
  },
  payText: {
    flex: 1,
  },
  payName: {
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.1,
    color: THEME.text,
  },
  payMeta: {
    marginTop: 3,
    fontSize: 9.5,
    fontWeight: '600',
    letterSpacing: 0.9,
    color: THEME.textDim,
  },
  payMulti: {
    fontSize: 18,
    fontWeight: '900',
    letterSpacing: 0.6,
    fontVariant: ['tabular-nums' as const],
  },

  togglePress: {
    width: '100%',
    height: 56,
  },
  toggleRow: {
    width: '100%',
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 14,
    borderRadius: 14,
    backgroundColor: 'rgba(255,245,230,0.05)',
    marginBottom: 10,
  },
  toggleLabel: {
    flex: 1,
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 1.4,
    color: THEME.text,
  },
  switchTrack: {
    width: 52,
    height: 30,
    borderRadius: 15,
    padding: 3,
    justifyContent: 'center',
    borderWidth: 1,
  },
  switchOn: {
    backgroundColor: 'rgba(244,201,93,0.3)',
    borderColor: THEME.accent,
    alignItems: 'flex-end',
  },
  switchOff: {
    backgroundColor: 'rgba(255,245,230,0.06)',
    borderColor: 'rgba(255,245,230,0.12)',
    alignItems: 'flex-start',
  },
  switchKnob: {
    width: 22,
    height: 22,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
  },
  knobOn: {
    backgroundColor: THEME.accent,
  },
  knobOff: {
    backgroundColor: THEME.textDim,
  },
  resetBtn: {
    marginTop: 6,
  },
  confirmRow: {
    marginTop: 6,
  },
  cancelBtn: {
    marginTop: 10,
  },
  legal: {
    marginTop: 14,
    fontSize: 10.5,
    lineHeight: 16,
    fontWeight: '600',
    color: THEME.textFaint,
    textAlign: 'center',
  },
});
