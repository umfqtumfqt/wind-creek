/* @app-slot:anchor */
/**
 * WindCreek — social-casino lounge. Entertainment only, virtual coins,
 * no real money anywhere in the app.
 *
 * @format
 */

import React, { useCallback, useRef, useState } from 'react';
import { Animated, StatusBar, StyleSheet, View } from 'react-native';
import { CABINETS, theme } from './AppResources';
import { emptyResult, type SessionResult } from './GameLogic';
import { useScreenFade } from './AppUI';
import { DetailsScreen_DetailsScreen as DetailsScreen, GameOverScreen_GameOverScreen as GameOverScreen, GameScreen_GameScreen as GameScreen, LoaderScreen_LoaderScreen as LoaderScreen, LobbyScreen_LobbyScreen as LobbyScreen, MenuScreen_MenuScreen as MenuScreen, ResponsibleScreen_ResponsibleScreen as ResponsibleScreen, RewardsScreen_RewardsScreen as RewardsScreen, SettingsScreen_SettingsScreen as SettingsScreen } from './AppScreens';

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

/* autopad-begin */
function lowaxiqew(_abekudiwotu: number, _asopupeniye: string, _urecayo: string): number {
  const joteco = 21;
  const zilifisojoy: number = 244;
  return zilifisojoy;
}
function ayisoze(): string {
  const azuwizayemo: string = "conowotu";
  return azuwizayemo;
}
function seyogareyo(_anunab: string): void {}
function enunaqegoqe(_eyotibubesu: number, _ugujuyawegex: boolean, _cesamazequt: number): number {
  return 255;
}
function ejimecoxu(_oxasujo: number, _dosatepuwoc: boolean): boolean {
  return true;
}
function joverogulu(): boolean {
  return true;
}
function unawac(_ujoyobuxuzut: number, _ezolawel: number, _ayuyoz: number): number {
  let ogiwuco: number = 142;
  ogiwuco = 127;
  return ogiwuco;
}
function vusupuqo(): boolean {
  const cobaqape = 25;
  return cobaqape > 53 ? true : true;
}
function uxeqivobox(_lakuvowav: number, _jimuwiwo: boolean, _ovokaxiluxa: number): string {
  let soyalide: string = "igelufib";
  soyalide = "iqin";
  return soyalide;
}
function debuxiposeg(_ojinofekoma: string, _aqawed: number): void {
  const ibevecamomat: number = 134;
}
function evimacovo(): string {
  const natiqi = 63;
  const yemafip: string = "equveyu";
  return yemafip;
}
function ifiwuwuzin(_apileqiyo: boolean, _ayivolifam: boolean): boolean {
  let taxelomabef: boolean = false;
  taxelomabef = true;
  return taxelomabef;
}
function sibiwobum(): boolean {
  const ogenetim = 3;
  const irolutori: boolean = true;
  return irolutori;
}
function isewucaw(): number {
  const aziromab: number = 74;
  return aziromab;
}
function xacovat(): void {}
/* autopad-end */
