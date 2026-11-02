/**
 * WindCreek — social-casino lounge. Entertainment only, virtual coins,
 * no real money anywhere in the app.
 *
 * @format
 */

import React, { useCallback, useRef, useState } from 'react';
import { Animated, StatusBar, StyleSheet, View } from 'react-native';
import { CABINETS } from './src/constants/config';
import { theme } from './src/constants/theme';
import { emptyResult, type SessionResult } from './src/game/session';
import useScreenFade from './src/hooks/useScreenFade';
import LoaderScreen from './src/screens/LoaderScreen';
import MenuScreen from './src/screens/MenuScreen';
import LobbyScreen from './src/screens/LobbyScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import GameScreen from './src/screens/GameScreen';
import GameOverScreen from './src/screens/GameOverScreen';
import RewardsScreen from './src/screens/RewardsScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import ResponsibleScreen from './src/screens/ResponsibleScreen';

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
  const [screen, setScreen] = useState<Screen>('loader');
  const [cabinetId, setCabinetId] = useState(CABINETS[0].id);
  const [result, setResult] = useState<SessionResult>(emptyResult);
  /** Bumped on every fresh session so GameScreen remounts with a clean hook. */
  const [sessionKey, setSessionKey] = useState(0);
  const backRef = useRef<Screen>('menu');

  const { opacity, translateY } = useScreenFade(screen + ':' + sessionKey);

  const go = useCallback((next: Screen) => setScreen(next), []);

  const openResponsible = useCallback(() => {
    backRef.current = screen === 'responsible' ? 'menu' : screen;
    setScreen('responsible');
  }, [screen]);

  const closeResponsible = useCallback(() => {
    setScreen(backRef.current === 'responsible' ? 'menu' : backRef.current);
  }, []);

  const startSession = useCallback(() => {
    setSessionKey(k => k + 1);
    setScreen('game');
  }, []);

  const handleSelectCabinet = useCallback((id: string) => {
    setCabinetId(id);
    setScreen('details');
  }, []);

  const handleGameOver = useCallback((r: SessionResult) => {
    setResult(r);
    setScreen('gameover');
  }, []);

  let content: React.ReactNode = null;
  if (screen === 'loader') {
    content = <LoaderScreen onDone={() => go('menu')} />;
  } else if (screen === 'menu') {
    content = (
      <MenuScreen
        onPlay={() => go('lobby')}
        onRewards={() => go('rewards')}
        onSettings={() => go('settings')}
        onResponsible={openResponsible}
      />
    );
  } else if (screen === 'lobby') {
    content = (
      <LobbyScreen onBack={() => go('menu')} onSelect={handleSelectCabinet} />
    );
  } else if (screen === 'details') {
    content = (
      <DetailsScreen
        cabinetId={cabinetId}
        onBack={() => go('lobby')}
        onStart={startSession}
      />
    );
  } else if (screen === 'game') {
    content = (
      <GameScreen
        key={'session' + sessionKey}
        cabinetId={cabinetId}
        onGameOver={handleGameOver}
      />
    );
  } else if (screen === 'gameover') {
    content = (
      <GameOverScreen
        result={result}
        onAgain={startSession}
        onMenu={() => go('menu')}
        onRewards={() => go('rewards')}
      />
    );
  } else if (screen === 'rewards') {
    content = <RewardsScreen onBack={() => go('menu')} />;
  } else if (screen === 'settings') {
    content = (
      <SettingsScreen onBack={() => go('menu')} onResponsible={openResponsible} />
    );
  } else {
    content = <ResponsibleScreen onBack={closeResponsible} />;
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
  root: { flex: 1, backgroundColor: theme.colors.bg.deep },
  layer: { flex: 1 },
});

export default App;
