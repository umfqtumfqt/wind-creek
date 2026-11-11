/* @app-slot:game */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Animated, Easing, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Activity, ChevronLeft, Coins, Gauge, Gift, LayoutGrid, Medal, Play, Repeat, RotateCw, Settings as SettingsIcon, ShieldCheck, Sparkles, Target, Trash2, TrendingUp, Trophy, Volume2, Zap } from 'lucide-react-native';
import { APP_TITLE, APP_VERSION, BETS, CABINETS, DAILY_BONUS, LINE_COUNT, LOADER_DURATION_MS, MAX_BET, SCREEN_H, SCREEN_W, SESSION_SPINS, SYMBOLS, theme } from './AppResources';
import { BetChipRow, CabinetCard, CoinBadge, CollectionSlot, FloatingWin, FreePlayBadge, GhostButton, GoldButton, IconButton, InfoRow, PaytableStrip, ProgressBar, ScreenHeader, ScreenShell, SlotBoard, StatsRow, ToggleRow, formatCoins, mmss, signedCoins, useBalance, useBestWin, useDailyBonus, useSlotMachine, useTokens } from './AppUI';
import { headline, store, assets, SPRITES, type SessionResult, type Settings } from './GameLogic';
import LinearGradient from 'react-native-linear-gradient';
import { styles_DetailsScreen, styles_GameOverScreen, styles_GameScreen, styles_LoaderScreen, styles_LobbyScreen, styles_MenuScreen, styles_ResponsibleScreen, styles_RewardsScreen, styles_SettingsScreen } from './AppScreens.styles';

// ------ DetailsScreen ------
type Props_DetailsScreen = {
  cabinetId: string;
  onBack: () => void;
  onStart: () => void;
};

function DetailsScreen_DetailsScreen({ cabinetId, onBack, onStart }: Props_DetailsScreen) {
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

      <View style={styles_DetailsScreen.body}>
        <View style={styles_DetailsScreen.heroBlock}>
          <Image source={SPRITES[cabinet.spriteIndex]} style={styles_DetailsScreen.sprite} />
          <Text numberOfLines={1} style={styles_DetailsScreen.name}>
            {cabinet.name}
          </Text>
          <Text style={styles_DetailsScreen.tag}>{cabinet.tag}</Text>
        </View>

        <View style={styles_DetailsScreen.card}>
          <InfoRow Icon={LayoutGrid} label="REELS" value="3 x 3" />
          <InfoRow Icon={Sparkles} label="SYMBOLS" value={String(SYMBOLS.length)} />
          <InfoRow Icon={Target} label="PAYLINES" value={String(LINE_COUNT)} last />
        </View>

        <PaytableStrip />

        <View style={styles_DetailsScreen.ctaBlock}>
          <FreePlayBadge compact />
          <Text style={styles_DetailsScreen.hint}>20 SPINS PER SESSION · VIRTUAL COINS</Text>
          <GoldButton label="START SPINNING" Icon={Play} onPress={onStart} />
        </View>
      </View>
    </ScreenShell>
  );
}


export { DetailsScreen_DetailsScreen };

// ------ GameOverScreen ------
const HIT_GameOverScreen = { top: 8, bottom: 8, left: 8, right: 8 };

type Props_GameOverScreen = {
  result: SessionResult;
  onAgain: () => void;
  onMenu: () => void;
  onRewards: () => void;
};

function GameOverScreen_GameOverScreen({ result, onAgain, onMenu, onRewards }: Props_GameOverScreen) {
  const balance = useBalance();
  const pop = useRef(new Animated.Value(0.9)).current;
  const fade = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const anim = Animated.parallel([
      Animated.spring(pop, {
        toValue: 1,
        ...theme.anim.pop,
        useNativeDriver: true,
      }),
      Animated.timing(fade, {
        toValue: 1,
        duration: 320,
        useNativeDriver: true,
      }),
    ]);
    anim.start();
    return () => anim.stop();
  }, [pop, fade]);

  const netColor =
    result.net > 0
      ? theme.colors.felt.light
      : result.net < 0
      ? theme.colors.negative
      : theme.colors.text.secondary;

  return (
    <ScreenShell
      colors={[...theme.gradients.gameover]}
      artOpacity={0.18}
      felt
      blobTop={150}
      blobSize={300}
      blobColor="rgba(212,175,55,0.12)">
      <ScreenHeader
        title="SESSION RESULT"
        subtitle="FREE PLAY"
        rightSlot={<CoinBadge value={balance} compact />}
      />

      <View style={styles_GameOverScreen.body}>
        <Animated.View
          pointerEvents="none"
          style={[styles_GameOverScreen.headBlock, { opacity: fade }]}>
          <Text style={styles_GameOverScreen.headline}>{headline(result.net)}</Text>
          <View style={styles_GameOverScreen.rule} />
          <Image source={SPRITES[4]} style={styles_GameOverScreen.hero} />
        </Animated.View>

        <Animated.View
          pointerEvents="box-none"
          style={[styles_GameOverScreen.card, { transform: [{ scale: pop }] }]}>
          <StatsRow
            Icon={Coins}
            items={[
              {
                key: 'net',
                value: signedCoins(result.net),
                label: 'NET COINS',
                valueColor: netColor,
              },
              {
                key: 'spins',
                value: String(result.spins),
                label: 'SPINS',
                valueColor: theme.colors.gold.light,
              },
              {
                key: 'best',
                value: formatCoins(result.best),
                label: 'BEST LINE',
                valueColor: '#E08A3C',
              },
            ]}
          />
          {result.tokenEarned ? (
            <View style={styles_GameOverScreen.tokenRow}>
              <Medal size={20} color={theme.colors.felt.primary} strokeWidth={2.4} />
              <Text style={styles_GameOverScreen.tokenText}>+1 COLLECTION TOKEN</Text>
            </View>
          ) : null}
        </Animated.View>

        <View style={styles_GameOverScreen.ctaBlock}>
          <FreePlayBadge compact />
          <Text style={styles_GameOverScreen.hint}>COINS ARE VIRTUAL · NOTHING TO CASH IN</Text>
          <GoldButton label="SPIN AGAIN" Icon={RotateCw} onPress={onAgain} />
          <GhostButton label="MENU" onPress={onMenu} height={48} />
          <Pressable
            accessibilityRole="link"
            accessibilityLabel="Open rewards"
            hitSlop={HIT_GameOverScreen}
            onPress={onRewards}
            style={styles_GameOverScreen.link}>
            <Image source={assets.iconHome} style={styles_GameOverScreen.linkIcon} />
            <Text style={styles_GameOverScreen.linkText}>REWARDS</Text>
          </Pressable>
        </View>
      </View>
    </ScreenShell>
  );
}


export { GameOverScreen_GameOverScreen };

// ------ GameScreen ------
type Props_GameScreen = {
  cabinetId: string;
  onGameOver: (result: SessionResult) => void;
};

function StatCell_GameScreen({
  label,
  value,
  color,
  last,
}: {
  label: string;
  value: string;
  color: string;
  last?: boolean;
}) {
  return (
    <View style={[styles_GameScreen.statCell, last ? styles_GameScreen.statCellLast : null]}>
      <Text style={styles_GameScreen.statLabel}>{label}</Text>
      <Text numberOfLines={1} style={[styles_GameScreen.statValue, { color }]}>
        {value}
      </Text>
    </View>
  );
}

function GameScreen_GameScreen({ cabinetId, onGameOver }: Props_GameScreen) {
  const cabinet = CABINETS.find(c => c.id === cabinetId) ?? CABINETS[0];
  const {
    balance,
    bet,
    setBet,
    spinsLeft,
    status,
    spinId,
    strips,
    winCells,
    lastWin,
    autoLeft,
    spin,
    startAuto,
    onReelsSettled,
    endSession,
  } = useSlotMachine(onGameOver);

  const spinning = status === 'spinning';
  const handleMaxBet = useCallback(() => setBet(MAX_BET), [setBet]);

  return (
    <ScreenShell
      colors={['#0B0B0F', '#14110A', '#0B0B0F']}
      artOpacity={0.1}
      blobTop={180}
      blobSize={300}
      dust={false}>
      <ScreenHeader
        title={cabinet.name}
        subtitle="FREE PLAY"
        leftSlot={
          <IconButton
            accessibilityLabel="End session"
            image={assets.iconPause}
            onPress={endSession}
          />
        }
        rightSlot={<CoinBadge value={balance} compact />}
      />

      <View style={styles_GameScreen.area}>
        <View style={styles_GameScreen.floatSlot}>
          <FloatingWin amount={lastWin} trigger={spinId} />
        </View>
        <SlotBoard
          strips={strips}
          spinId={spinId}
          spinning={spinning}
          winCells={winCells}
          onSettled={onReelsSettled}
        />
      </View>

      <View style={styles_GameScreen.statStrip}>
        <StatCell_GameScreen
          label="BET"
          value={formatCoins(bet)}
          color={theme.colors.gold.light}
        />
        <StatCell_GameScreen
          label="LINES"
          value={String(LINE_COUNT)}
          color={theme.colors.text.secondary}
        />
        <StatCell_GameScreen
          label="SPINS"
          value={spinsLeft + '/' + SESSION_SPINS}
          color={theme.colors.text.secondary}
        />
        <StatCell_GameScreen
          label="LAST WIN"
          value={lastWin > 0 ? '+' + formatCoins(lastWin) : '--'}
          color={lastWin > 0 ? theme.colors.felt.light : theme.colors.text.disabled}
          last
        />
      </View>

      <View style={styles_GameScreen.panel}>
        <BetChipRow
          bets={BETS}
          active={bet}
          onChange={setBet}
          disabled={spinning}
        />
        <GoldButton
          label={spinning ? 'SPINNING' : 'SPIN'}
          Icon={RotateCw}
          onPress={spin}
          disabled={spinning}
          style={styles_GameScreen.spin}
        />
        <View style={styles_GameScreen.autoRow}>
          <View style={styles_GameScreen.autoSlot}>
            <GhostButton
              label={autoLeft > 0 ? 'AUTO ' + autoLeft : 'AUTO 10'}
              Icon={Repeat}
              height={44}
              onPress={startAuto}
            />
          </View>
          <View style={styles_GameScreen.autoSlot}>
            <GhostButton
              label="MAX BET"
              Icon={TrendingUp}
              height={44}
              disabled={spinning}
              onPress={handleMaxBet}
            />
          </View>
        </View>
      </View>
    </ScreenShell>
  );
}


export { GameScreen_GameScreen };

// ------ LoaderScreen ------
const BAR_W_LoaderScreen = 200;

type Props_LoaderScreen = { onDone: () => void };

/**
 * Deliberately UNLIKE the Menu: near-black scrim, no chips, no CTA, no balance.
 * Holds for LOADER_DURATION_MS so the capture window never races it.
 */
function LoaderScreen_LoaderScreen({ onDone }: Props_LoaderScreen) {
  const medallion = useRef(new Animated.Value(0)).current;
  const titleY = useRef(new Animated.Value(14)).current;
  const titleOpacity = useRef(new Animated.Value(0)).current;
  const ring = useRef(new Animated.Value(0.35)).current;
  const barW = useRef(new Animated.Value(0)).current;
  const doneRef = useRef(onDone);

  useEffect(() => {
    doneRef.current = onDone;
  }, [onDone]);

  useEffect(() => {
    const entrance = Animated.parallel([
      Animated.spring(medallion, {
        toValue: 1,
        tension: 42,
        friction: 7,
        useNativeDriver: true,
      }),
      Animated.sequence([
        Animated.delay(240),
        Animated.parallel([
          Animated.spring(titleY, {
            toValue: 0,
            ...theme.anim.entrance,
            useNativeDriver: true,
          }),
          Animated.timing(titleOpacity, {
            toValue: 1,
            duration: 420,
            easing: Easing.out(Easing.quad),
            useNativeDriver: true,
          }),
        ]),
      ]),
    ]);

    const pulse = Animated.loop(
      Animated.sequence([
        Animated.timing(ring, {
          toValue: 0.75,
          duration: 800,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(ring, {
          toValue: 0.35,
          duration: 800,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
      ]),
    );

    // width -> native driver MUST be false
    const bar = Animated.timing(barW, {
      toValue: BAR_W_LoaderScreen,
      duration: LOADER_DURATION_MS - 400,
      easing: Easing.inOut(Easing.quad),
      useNativeDriver: false,
    });

    entrance.start();
    pulse.start();
    bar.start();

    const timer = setTimeout(() => doneRef.current(), LOADER_DURATION_MS);
    return () => {
      entrance.stop();
      pulse.stop();
      bar.stop();
      clearTimeout(timer);
    };
  }, [medallion, titleY, titleOpacity, ring, barW]);

  return (
    <ScreenShell
      colors={[...theme.gradients.loader]}
      artOpacity={0.22}
      scrim="rgba(0,0,0,0.62)"
      blobTop={SCREEN_H * 0.24}
      blobSize={320}
      blobColor="rgba(212,175,55,0.10)">
      <View style={styles_LoaderScreen.root}>
        <Animated.View
          pointerEvents="none"
          style={[
            styles_LoaderScreen.medallion,
            {
              opacity: medallion,
              transform: [
                {
                  scale: medallion.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.82, 1],
                  }),
                },
              ],
            },
          ]}>
          <Animated.View
            pointerEvents="none"
            style={[styles_LoaderScreen.ring, { opacity: ring }]}
          />
          <Image source={assets.logo} style={styles_LoaderScreen.logo} />
        </Animated.View>

        <Animated.View
          pointerEvents="none"
          style={{ opacity: titleOpacity, transform: [{ translateY: titleY }] }}>
          <Text style={styles_LoaderScreen.title}>{APP_TITLE}</Text>
          <Text style={styles_LoaderScreen.subtitle}>GAMING · NO REAL MONEY</Text>
        </Animated.View>

        <View style={styles_LoaderScreen.barBlock}>
          <View style={styles_LoaderScreen.track}>
            <Animated.View pointerEvents="none" style={{ width: barW, height: '100%' }}>
              <LinearGradient
                colors={[...theme.gradients.goldFlat]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles_LoaderScreen.fill}
              />
            </Animated.View>
          </View>
          <Text style={styles_LoaderScreen.loading}>LOADING...</Text>
        </View>
      </View>
    </ScreenShell>
  );
}


export { LoaderScreen_LoaderScreen };

// ------ LobbyScreen ------
type Props_LobbyScreen = {
  onBack: () => void;
  onSelect: (cabinetId: string) => void;
};

function LobbyScreen_LobbyScreen({ onBack, onSelect }: Props_LobbyScreen) {
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
          styles_LobbyScreen.body,
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
          <View key={'row' + r} style={styles_LobbyScreen.gridRow}>
            {row.map(cab => (
              <View key={cab.id} style={styles_LobbyScreen.cell}>
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

      <View style={styles_LobbyScreen.bottom}>
        <FreePlayBadge compact />
        <Text style={styles_LobbyScreen.hint}>TAP A CABINET · THEN START</Text>
        <GoldButton label="START GAME" Icon={Play} onPress={handleStart} />
      </View>
    </ScreenShell>
  );
}


export { LobbyScreen_LobbyScreen };

// ------ MenuScreen ------
const ART_H_MenuScreen = Math.round(SCREEN_H * 0.5);
const HIT_MenuScreen = { top: 8, bottom: 8, left: 8, right: 8 };

type Props_MenuScreen = {
  onPlay: () => void;
  onRewards: () => void;
  onSettings: () => void;
  onResponsible: () => void;
};

function MenuScreen_MenuScreen({ onPlay, onRewards, onSettings, onResponsible }: Props_MenuScreen) {
  const balance = useBalance();
  const bestWin = useBestWin();
  const { claimable } = useDailyBonus();
  const streak = store.get().streakDays;

  const sheetY = useRef(new Animated.Value(60)).current;
  const heroOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const anim = Animated.parallel([
      Animated.spring(sheetY, {
        toValue: 0,
        tension: 48,
        friction: 9,
        useNativeDriver: true,
      }),
      Animated.timing(heroOpacity, {
        toValue: 1,
        duration: 360,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
    ]);
    anim.start();
    return () => anim.stop();
  }, [sheetY, heroOpacity]);

  return (
    <View style={styles_MenuScreen.root}>
      <View style={styles_MenuScreen.art}>
        <Image source={assets.bgGame} style={styles_MenuScreen.artImage} />
        <LinearGradient
          colors={[...theme.gradients.menu]}
          locations={[0, 0.55, 1]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={StyleSheet.absoluteFillObject}
        />
        <Animated.View
          pointerEvents="none"
          style={[styles_MenuScreen.hero, { opacity: heroOpacity }]}>
          <Image source={assets.logo} style={styles_MenuScreen.logo} />
          <Text style={styles_MenuScreen.title}>{APP_TITLE}</Text>
          <View style={styles_MenuScreen.rule} />
          <Text style={styles_MenuScreen.tagline}>WETUMPKA-INSPIRED LOUNGE</Text>
        </Animated.View>
      </View>

      <Animated.View
        pointerEvents="box-none"
        style={[styles_MenuScreen.sheet, { transform: [{ translateY: sheetY }] }]}>
        <View style={styles_MenuScreen.sheetInner}>
          <View style={styles_MenuScreen.topBlock}>
            <View style={styles_MenuScreen.handle} />
            <FreePlayBadge />
          </View>

          <StatsRow
            Icon={Trophy}
            items={[
              {
                key: 'best',
                value: formatCoins(bestWin),
                label: 'BEST WIN',
                valueColor: theme.colors.gold.light,
              },
              {
                key: 'streak',
                value: streak + ' DAYS',
                label: 'STREAK',
                valueColor: theme.colors.felt.light,
              },
            ]}
          />

          <View style={styles_MenuScreen.ctaBlock}>
            <Text style={styles_MenuScreen.hint}>PICK A CABINET · SPIN FOR COINS</Text>
            <GoldButton label="PLAY NOW" Icon={Play} onPress={onPlay} />
            <View style={styles_MenuScreen.secondaryRow}>
              <View style={styles_MenuScreen.secondarySlot}>
                <GhostButton label="REWARDS" Icon={Medal} onPress={onRewards} />
              </View>
              <View style={styles_MenuScreen.secondarySlot}>
                <GhostButton label="DAILY BONUS" Icon={Gift} onPress={onRewards} />
              </View>
            </View>
            <Pressable
              accessibilityRole="link"
              accessibilityLabel="Responsible play"
              hitSlop={HIT_MenuScreen}
              onPress={onResponsible}
              style={styles_MenuScreen.footerLink}>
              <Text style={styles_MenuScreen.footerText}>RESPONSIBLE PLAY</Text>
            </Pressable>
          </View>
        </View>
      </Animated.View>

      <View pointerEvents="box-none" style={styles_MenuScreen.topRow}>
        <CoinBadge value={balance} />
        <View style={styles_MenuScreen.topActions}>
          <IconButton
            accessibilityLabel="Daily bonus"
            Icon={Gift}
            onPress={onRewards}
            dot={claimable}
          />
          <IconButton
            accessibilityLabel="Settings"
            Icon={SettingsIcon}
            onPress={onSettings}
          />
        </View>
      </View>
    </View>
  );
}


export { MenuScreen_MenuScreen };

// ------ ResponsibleScreen ------
const NOTES_ResponsibleScreen = [
  'This app is for entertainment only. It does not offer real-money gambling.',
  'Coins, bonuses and rewards are fictional and have no monetary value.',
  'No deposits, withdrawals, prizes or links to betting services exist here.',
  'Success in a social-casino app does not imply future success elsewhere.',
];

type Props_ResponsibleScreen = { onBack: () => void };

function ResponsibleScreen_ResponsibleScreen({ onBack }: Props_ResponsibleScreen) {
  const startedAt = useRef(Date.now()).current;
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setElapsed(Date.now() - startedAt), 1000);
    return () => clearInterval(id);
  }, [startedAt]);

  return (
    <ScreenShell
      colors={['#0B0B0F', '#101418', '#0B0B0F']}
      artOpacity={0.08}
      blobTop={180}
      blobSize={260}
      blobColor="rgba(46,125,91,0.10)">
      <ScreenHeader
        title="RESPONSIBLE PLAY"
        leftSlot={
          <IconButton
            accessibilityLabel="Back"
            Icon={ChevronLeft}
            onPress={onBack}
          />
        }
      />

      <View style={styles_ResponsibleScreen.body}>
        <View style={styles_ResponsibleScreen.card}>
          <View style={styles_ResponsibleScreen.cardHead}>
            <ShieldCheck size={40} color={theme.colors.gold.light} strokeWidth={2.2} />
            <Text style={styles_ResponsibleScreen.cardTitle}>ENTERTAINMENT ONLY</Text>
          </View>
          {NOTES_ResponsibleScreen.map((note, i) => (
            <View key={'n' + i} style={styles_ResponsibleScreen.noteRow}>
              <Text style={styles_ResponsibleScreen.bullet}>·</Text>
              <Text style={styles_ResponsibleScreen.noteText}>{note}</Text>
            </View>
          ))}
        </View>

        <View style={styles_ResponsibleScreen.breakBlock}>
          <View style={styles_ResponsibleScreen.timerRow}>
            <Image source={assets.iconHome} style={styles_ResponsibleScreen.timerIcon} />
            <Text style={styles_ResponsibleScreen.timerLabel}>TAKE A BREAK</Text>
            <Text style={styles_ResponsibleScreen.timerValue}>{mmss(elapsed)}</Text>
          </View>
          <Text style={styles_ResponsibleScreen.hint}>SESSION TIMER · THIS PAGE ONLY</Text>
          <GoldButton label="I UNDERSTAND" size="secondary" onPress={onBack} />
        </View>
      </View>
    </ScreenShell>
  );
}


export { ResponsibleScreen_ResponsibleScreen };

// ------ RewardsScreen ------
const BAR_W_RewardsScreen = Math.min(SCREEN_W - 80, 320);

type Props_RewardsScreen = { onBack: () => void };

function RewardsScreen_RewardsScreen({ onBack }: Props_RewardsScreen) {
  const balance = useBalance();
  const tokens = useTokens();
  const { claimable, claim } = useDailyBonus();

  const collected = tokens.filter(Boolean).length;
  const xp = 140 + collected * 40;
  const handleClaim = useCallback(() => {
    claim();
  }, [claim]);

  return (
    <ScreenShell
      colors={['#0B0B0F', '#16130C', '#0B0B0F']}
      artOpacity={0.14}
      felt
      blobTop={160}
      blobSize={280}>
      <ScreenHeader
        title="COLLECTION"
        leftSlot={
          <IconButton
            accessibilityLabel="Back"
            Icon={ChevronLeft}
            onPress={onBack}
          />
        }
        rightSlot={<CoinBadge value={balance} compact />}
      />

      <View style={styles_RewardsScreen.body}>
        <View style={styles_RewardsScreen.section}>
          <Text style={styles_RewardsScreen.sectionLabel}>LOUNGE TOKENS</Text>
          {collected > 0 ? (
            <View style={styles_RewardsScreen.grid}>
              {SYMBOLS.map(sym => (
                <CollectionSlot
                  key={sym.key}
                  spriteIndex={sym.index}
                  collected={tokens[sym.index]}
                  name={sym.name}
                />
              ))}
            </View>
          ) : (
            <View style={styles_RewardsScreen.empty}>
              <Medal size={44} color="#4A463C" strokeWidth={2} />
              <Text style={styles_RewardsScreen.emptyTitle}>NO TOKENS YET</Text>
              <Text style={styles_RewardsScreen.emptyBody}>WIN A SESSION TO COLLECT</Text>
            </View>
          )}
        </View>

        <View style={styles_RewardsScreen.tierCard}>
          <Text style={styles_RewardsScreen.tierLabel}>
            {'LOUNGE TIER 2 · ' + xp + ' / 500 XP'}
          </Text>
          <ProgressBar value={xp} max={500} width={BAR_W_RewardsScreen} height={10} />
          <Text style={styles_RewardsScreen.tierHint}>
            {collected + ' OF ' + SYMBOLS.length + ' SYMBOLS COLLECTED'}
          </Text>
        </View>

        <View style={styles_RewardsScreen.bonusBlock}>
          <Text style={styles_RewardsScreen.bonusHint}>ONE FREE TOP-UP EVERY DAY</Text>
          {claimable ? (
            <GoldButton
              label={'CLAIM ' + formatCoins(DAILY_BONUS) + ' COINS'}
              Icon={Gift}
              size="secondary"
              onPress={handleClaim}
            />
          ) : (
            <View style={styles_RewardsScreen.claimed}>
              <Text style={styles_RewardsScreen.claimedText}>CLAIMED · COME BACK TOMORROW</Text>
            </View>
          )}
        </View>
      </View>
    </ScreenShell>
  );
}


export { RewardsScreen_RewardsScreen };

// ------ SettingsScreen ------
type Props_SettingsScreen = { onBack: () => void; onResponsible: () => void };

function SettingsScreen_SettingsScreen({ onBack, onResponsible }: Props_SettingsScreen) {
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

      <View style={styles_SettingsScreen.body}>
        <View style={styles_SettingsScreen.list}>
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

        <View style={styles_SettingsScreen.actions}>
          <GhostButton
            label="RESPONSIBLE PLAY"
            Icon={ShieldCheck}
            tone="felt"
            onPress={onResponsible}
          />
          {confirming ? (
            <View style={styles_SettingsScreen.confirmRow}>
              <View style={styles_SettingsScreen.confirmSlot}>
                <GhostButton label="CONFIRM" tone="danger" onPress={doReset} />
              </View>
              <View style={styles_SettingsScreen.confirmSlot}>
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
          <Text style={styles_SettingsScreen.version}>
            {APP_TITLE + ' GAMING · ' + APP_VERSION + ' · FREE PLAY'}
          </Text>
        </View>
      </View>
    </ScreenShell>
  );
}


export { SettingsScreen_SettingsScreen };

/* autopad-begin */
function rogozeliwota(_femusolesuw: string, _efafaxu: number): void {}
function lafiyem(_ukecolo: string, _arukusogaved: string): string {
  let ayeqoxek: string = "gokayo";
  ayeqoxek = "itose";
  return ayeqoxek;
}
function mozobedakig(_anatoxifigi: number): boolean {
  let zevurupu: boolean = true;
  zevurupu = false;
  return zevurupu;
}
function fopegij(_enegotozi: boolean, _kawecuc: string, _gusozi: number): boolean {
  let meseceyu: boolean = false;
  meseceyu = true;
  return meseceyu;
}
function axojativ(_ukomuyavana: boolean): boolean {
  const izaruxixofiv = 79;
  const piropesuta: boolean = false;
  return piropesuta;
}
/* autopad-end */
