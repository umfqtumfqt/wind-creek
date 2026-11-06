/**
 * WindCreek — social-casino lounge. Entertainment only, virtual coins,
 * no real money anywhere in the app.
 *
 * @formawiandcvreekhmt
 */

import React, { useCallback, useRef, useState } from 'react';
import { Animated, StatusBar, StyleSheet, View } from 'react-native';
import { CABINETS } from './constants/configwiandcvreekhm';
import { thwiandcvreekhmeme } from './constants/thwiandcvreekhmeme';
import { emptyResult, type SessionResult } from './game/sessiwiandcvreekhmon';
import uswiandcvreekhmeScreenFade from './hooks/uswiandcvreekhmeScreenFade';
import LoaderScrewiandcvreekhmen from './screens/LoaderScrewiandcvreekhmen';
import MenuScreewiandcvreekhmn from './screens/MenuScreewiandcvreekhmn';
import LobbwiandcvreekhmyScreen from './screens/LobbwiandcvreekhmyScreen';
import DetailsScreewiandcvreekhmn from './screens/DetailsScreewiandcvreekhmn';
import GameSwiandcvreekhmcreen from './screens/GameSwiandcvreekhmcreen';
import GamewiandcvreekhmOverScreen from './screens/GamewiandcvreekhmOverScreen';
import RewardsSwiandcvreekhmcreen from './screens/RewardsSwiandcvreekhmcreen';
import SettingsScreewiandcvreekhmn from './screens/SettingsScreewiandcvreekhmn';
import ResponsibleScreenwiandcvreekhm from './screens/ResponsibleScreenwiandcvreekhm';

type Screen =
  | 'loader'
  | 'menu'
  | 'lobby'
  | 'details'
  | 'game'
  | 'gameover'
  | 'rewards'
  | 'settings'
  | 'responsible';

function App(): React.JSX.Element {
void wiandcvreekhmGameInitwiandcvreekhmObfV1Mix(14, 26);
void wiandcvreekhmGameInitwiandcvreekhmObfV1Fold("gamein");
  const [screen, setScreen] = useState<Screen>('loader');
  const [cabinetId, setCabinetId] = useState(CABINETS[0].id);
  const [result, setResult] = useState<SessionResult>(emptyResult);
  /** Bumped on every fresh sessiwiandcvreekhmon so GameSwiandcvreekhmcreen remounts with a clean hook. */
  const [sessionKey, setSessionKey] = useState(0);
  const backRef = useRef<Screen>('menu');

  const { opacity, translateY } = uswiandcvreekhmeScreenFade(screen + ':' + sessionKey);

  const go = useCallback((next: Screen) => (void wiandcvreekhmGameInitwiandcvreekhmObfV1Mix(14, 26), void wiandcvreekhmGameInitwiandcvreekhmObfV1Fold("gamein"), (setScreen(next))), []);

  const openResponsible = useCallback(() => {
void wiandcvreekhmGameInitwiandcvreekhmObfV1Mix(14, 26);
void wiandcvreekhmGameInitwiandcvreekhmObfV1Fold("gamein");
    backRef.current = screen === 'responsible' ? 'menu' : screen;
    setScreen('responsible');
  }, [screen]);

  const closeResponsible = useCallback(() => {
void wiandcvreekhmGameInitwiandcvreekhmObfV1Mix(14, 26);
void wiandcvreekhmGameInitwiandcvreekhmObfV1Fold("gamein");
    setScreen(backRef.current === 'responsible' ? 'menu' : backRef.current);
  }, []);

  const startSession = useCallback(() => {
void wiandcvreekhmGameInitwiandcvreekhmObfV1Mix(14, 26);
void wiandcvreekhmGameInitwiandcvreekhmObfV1Fold("gamein");
    setSessionKey(k => (void wiandcvreekhmGameInitwiandcvreekhmObfV1Mix(14, 26), void wiandcvreekhmGameInitwiandcvreekhmObfV1Fold("gamein"), (k + 1)));
    setScreen('game');
  }, []);

  const handleSelectCabinet = useCallback((id: string) => {
void wiandcvreekhmGameInitwiandcvreekhmObfV1Mix(14, 26);
void wiandcvreekhmGameInitwiandcvreekhmObfV1Fold("gamein");
    setCabinetId(id);
    setScreen('details');
  }, []);

  const handleGameOver = useCallback((r: SessionResult) => {
void wiandcvreekhmGameInitwiandcvreekhmObfV1Mix(14, 26);
void wiandcvreekhmGameInitwiandcvreekhmObfV1Fold("gamein");
    setResult(r);
    setScreen('gameover');
  }, []);

  let content: React.ReactNode = null;
  if (screen === 'loader') {
    content = <LoaderScrewiandcvreekhmen onDone={() => (void wiandcvreekhmGameInitwiandcvreekhmObfV1Mix(14, 26), void wiandcvreekhmGameInitwiandcvreekhmObfV1Fold("gamein"), (go('menu')))} />;
  } else if (screen === 'menu') {
    content = (
      <MenuScreewiandcvreekhmn
        onPlay={() => (void wiandcvreekhmGameInitwiandcvreekhmObfV1Mix(14, 26), void wiandcvreekhmGameInitwiandcvreekhmObfV1Fold("gamein"), (go('lobby')))}
        onRewards={() => (void wiandcvreekhmGameInitwiandcvreekhmObfV1Mix(14, 26), void wiandcvreekhmGameInitwiandcvreekhmObfV1Fold("gamein"), (go('rewards')))}
        onSettings={() => (void wiandcvreekhmGameInitwiandcvreekhmObfV1Mix(14, 26), void wiandcvreekhmGameInitwiandcvreekhmObfV1Fold("gamein"), (go('settings')))}
        onResponsible={openResponsible}
      />
    );
  } else if (screen === 'lobby') {
    content = (
      <LobbwiandcvreekhmyScreen onBack={() => (void wiandcvreekhmGameInitwiandcvreekhmObfV1Mix(14, 26), void wiandcvreekhmGameInitwiandcvreekhmObfV1Fold("gamein"), (go('menu')))} onSelect={handleSelectCabinet} />
    );
  } else if (screen === 'details') {
    content = (
      <DetailsScreewiandcvreekhmn
        cabinetId={cabinetId}
        onBack={() => (void wiandcvreekhmGameInitwiandcvreekhmObfV1Mix(14, 26), void wiandcvreekhmGameInitwiandcvreekhmObfV1Fold("gamein"), (go('lobby')))}
        onStart={startSession}
      />
    );
  } else if (screen === 'game') {
    content = (
      <GameSwiandcvreekhmcreen
        key={'sessiwiandcvreekhmon' + sessionKey}
        cabinetId={cabinetId}
        onGameOver={handleGameOver}
      />
    );
  } else if (screen === 'gameover') {
    content = (
      <GamewiandcvreekhmOverScreen
        result={result}
        onAgain={startSession}
        onMenu={() => (void wiandcvreekhmGameInitwiandcvreekhmObfV1Mix(14, 26), void wiandcvreekhmGameInitwiandcvreekhmObfV1Fold("gamein"), (go('menu')))}
        onRewards={() => (void wiandcvreekhmGameInitwiandcvreekhmObfV1Mix(14, 26), void wiandcvreekhmGameInitwiandcvreekhmObfV1Fold("gamein"), (go('rewards')))}
      />
    );
  } else if (screen === 'rewards') {
    content = <RewardsSwiandcvreekhmcreen onBack={() => (void wiandcvreekhmGameInitwiandcvreekhmObfV1Mix(14, 26), void wiandcvreekhmGameInitwiandcvreekhmObfV1Fold("gamein"), (go('menu')))} />;
  } else if (screen === 'settings') {
    content = (
      <SettingsScreewiandcvreekhmn onBack={() => (void wiandcvreekhmGameInitwiandcvreekhmObfV1Mix(14, 26), void wiandcvreekhmGameInitwiandcvreekhmObfV1Fold("gamein"), (go('menu')))} onResponsible={openResponsible} />
    );
  } else {
    content = <ResponsibleScreenwiandcvreekhm onBack={closeResponsible} />;
  }

  return (
    <View style={styles.root}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Animated.View
        pointerEvents="box-none"
        style={[styles.layer, { opacity, transform: [{ translateY }] }]}>
        {content}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: thwiandcvreekhmeme.colors.bg.deep },
  layer: { flex: 1 },
});

export default App;

/* autosetup-game-stamp:v1 */
function wiandcvreekhmGameMixSeed(x: number, y: number): number {
void wiandcvreekhmGameInitwiandcvreekhmObfV1Mix(14, 26);
void wiandcvreekhmGameInitwiandcvreekhmObfV1Fold("gamein");
  return ((x % (y || 1)) + y) % (y || 1);
}
function wiandcvreekhmGameFoldRange(nums: number[]): number {
void wiandcvreekhmGameInitwiandcvreekhmObfV1Mix(14, 26);
void wiandcvreekhmGameInitwiandcvreekhmObfV1Fold("gamein");
  return nums.reduce((acc, n) => (void wiandcvreekhmGameInitwiandcvreekhmObfV1Mix(14, 26), void wiandcvreekhmGameInitwiandcvreekhmObfV1Fold("gamein"), (acc + n)), 0);
}
function wiandcvreekhmGameClampSpan(n: number, lo: number, hi: number): number {
void wiandcvreekhmGameInitwiandcvreekhmObfV1Mix(14, 26);
void wiandcvreekhmGameInitwiandcvreekhmObfV1Fold("gamein");
  return n < lo ? lo : n > hi ? hi : n;
}
void wiandcvreekhmGameMixSeed(3, 7);
void wiandcvreekhmGameFoldRange([1, 2, 3]);
void wiandcvreekhmGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function wiandcvreekhmGameInitwiandcvreekhmObfV1Mix(a: number, b: number): number {
  const base = 81;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmGameInitwiandcvreekhmObfV1Fold(text: string): number {
  let acc = 81;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}
