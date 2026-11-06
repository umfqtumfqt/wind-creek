import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {
  Animated,
  Easing,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  Vibration,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Info, RotateCw} from 'lucide-react-native';
import {GRADIENTS, THEME} from '../constants/theme';
import {
  BETS,
  IDLE_FIRST_SPIN_MS,
  IDLE_REPEAT_SPIN_MS,
  REEL_LOOPS,
  REELS,
  REEL_STOP_MS,
  STRIP_LEN,
  TOTAL_CARDS,
} from '../constants/config';
import {ART} from '../assets';
import {BalanceBadge} from '../components/BalanceBadge';
import {ScreenHeader} from '../components/ScreenHeader';
import {BetChip} from '../components/BetChip';
import {PrimaryButton} from '../components/PrimaryButton';
import {ReelCabinet, BOARD_W} from '../components/ReelCabinet';
import {SparkBurst} from '../components/SparkBurst';
import {OverlaySheet} from '../components/OverlaySheet';
import {PaytablePanel} from '../components/MenuPanels';
import {usePressScale} from '../hooks/usePressScale';
import {formatCoins} from '../hooks/useCountUp';
import {ShowSummary, useSlotMachine} from '../hooks/useSlotMachine';

type Props = {
  balance: number;
  bet: number;
  cardsOwned: boolean[];
  haptics: boolean;
  onBetChange: (bet: number) => void;
  onShowEnd: (summary: ShowSummary) => void;
  onBack: (balance: number) => void;
};

/**
 * G3 split panel: the gilded cabinet on top, one big action below.
 * One tap on SPIN is the entire input — the reels auto-stop left to right.
 */
export const GameScreen: React.FC<Props> = ({
  balance,
  bet,
  cardsOwned,
  haptics,
  onBetChange,
  onShowEnd,
  onBack,
}) => {
  const machine = useSlotMachine({
    startBalance: balance,
    ownedCards: cardsOwned,
    onShowEnd,
  });
  const {phase, phaseRef} = machine;

  const [paytableOpen, setPaytableOpen] = useState(false);
  const enter = useRef(new Animated.Value(0)).current;
  const betRef = useRef(bet);
  betRef.current = bet;

  const drivers = useMemo(() => {
    const out: Animated.Value[] = [];
    for (let r = 0; r < REELS; r++) {
      out.push(new Animated.Value(0));
    }
    return out;
  }, []);
  const driverPos = useRef<number[]>(new Array(REELS).fill(0));

  useEffect(() => {
    Animated.timing(enter, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [enter]);

  /** Drives one reel onto its planned landing with an overshoot settle. */
  const runReel = useCallback(
    (index: number, land: number, done: () => void) => {
      const driver = drivers[index];
      const from = driverPos.current[index];
      const delta = ((land - from) % STRIP_LEN + STRIP_LEN) % STRIP_LEN;
      const target = from + REEL_LOOPS[index] * STRIP_LEN + delta;

      Animated.timing(driver, {
        toValue: target + 0.38,
        duration: REEL_STOP_MS[index],
        easing: Easing.bezier(0.08, 0.72, 0.18, 1),
        useNativeDriver: true,
      }).start(({finished}) => {
        if (!finished) {
          return;
        }
        Animated.spring(driver, {
          toValue: target,
          tension: 90,
          friction: 9,
          useNativeDriver: true,
        }).start(() => {
          driverPos.current[index] = land;
          driver.setValue(land);
          done();
        });
      });
    },
    [drivers],
  );

  const spin = useCallback(() => {
    const amount = betRef.current;
    if (!machine.canSpin(amount)) {
      return;
    }
    const plan = machine.beginSpin(amount);
    if (!plan) {
      return;
    }
    if (haptics) {
      Vibration.vibrate(12);
    }
    let stopped = 0;
    plan.lands.forEach((land, i) => {
      runReel(i, land, () => {
        stopped += 1;
        if (stopped === plan.lands.length) {
          machine.settleSpin();
        }
      });
    });
  }, [machine, runReel, haptics]);

  const spinRef = useRef(spin);
  spinRef.current = spin;

  /**
   * Idle backstop. The first auto-spin waits past the capture agent's first
   * gameplay frame, then keeps the show moving if nothing ever taps.
   */
  useEffect(() => {
    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];

    const tick = () => {
      if (cancelled) {
        return;
      }
      if (phaseRef.current === 'idle') {
        spinRef.current();
      }
      timers.push(setTimeout(tick, IDLE_REPEAT_SPIN_MS));
    };

    timers.push(setTimeout(tick, IDLE_FIRST_SPIN_MS));
    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, [phaseRef]);

  // Never leave the player staring at a disabled SPIN: if the balance can no
  // longer cover the chosen bet, drop to the largest one it still covers.
  useEffect(() => {
    if (machine.balance >= bet) {
      return;
    }
    const affordable = BETS.filter(b => b <= machine.balance);
    if (affordable.length > 0) {
      onBetChange(affordable[affordable.length - 1]);
    }
  }, [machine.balance, bet, onBetChange]);

  const spinning = phase === 'spinning';
  const celebrate = phase === 'result' && machine.lastWin > 0;
  const info = usePressScale(0.9);

  const ribbon = useMemo(() => {
    if (spinning) {
      return 'REELS IN MOTION';
    }
    if (machine.lastWin > 0) {
      return `WIN x${machine.lastMultiplier} · +${formatCoins(machine.lastWin)}`;
    }
    if (machine.spins > 0) {
      return 'NO WIN · SPIN ONCE MORE';
    }
    return 'PULL THE CURTAIN · ONE TAP';
  }, [spinning, machine.lastWin, machine.lastMultiplier, machine.spins]);

  const cardsHave = cardsOwned.reduce((n, v) => (v ? n + 1 : n), 0);
  const cardRatio = Math.min(1, cardsHave / TOTAL_CARDS);

  return (
    <View style={styles.root}>
      <ImageBackground
        source={ART.bgGame}
        style={StyleSheet.absoluteFill}
        resizeMode="cover">
        <LinearGradient
          colors={GRADIENTS.gameScrim}
          style={StyleSheet.absoluteFill}
        />
      </ImageBackground>

      <ScreenHeader
        title="SLOT REELS"
        onBack={() => {
          machine.abandonShow();
          onBack(machine.balance);
        }}
        right={<BalanceBadge amount={machine.balance} compact />}
      />

      <Animated.View
        pointerEvents="box-none"
        style={[
          styles.stage,
          {
            opacity: enter,
            transform: [
              {
                scale: enter.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.94, 1],
                }),
              },
            ],
          },
        ]}>
        <View style={styles.ribbon}>
          <Text
            style={[
              styles.ribbonText,
              machine.lastWin > 0 && !spinning
                ? styles.ribbonWin
                : styles.ribbonIdle,
            ]}
            numberOfLines={1}>
            {ribbon}
          </Text>
        </View>

        <View style={styles.cabinetWrap}>
          <ReelCabinet
            strips={machine.strips}
            drivers={drivers}
            winMask={machine.winMask}
            celebrate={celebrate}
          />
          <SparkBurst active={celebrate} />
        </View>

        <View style={styles.ticker}>
          <Text style={styles.tickerLabel}>
            JOKER CARDS {cardsHave}/{TOTAL_CARDS}
          </Text>
          <View style={styles.tickerTrack}>
            <View style={[styles.tickerFill, {flex: cardRatio}]} />
            <View style={{flex: 1 - cardRatio}} />
          </View>
        </View>
      </Animated.View>

      <View style={styles.panel}>
        <View style={styles.statStrip}>
          <View style={styles.statCell}>
            <Text style={[styles.statValue, {color: THEME.accent}]}>
              {bet}
            </Text>
            <Text style={styles.statLabel}>BET</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.statCell}>
            <Text style={styles.statValue}>{formatCoins(machine.balance)}</Text>
            <Text style={styles.statLabel}>COINS</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.statCell}>
            <Text style={styles.statValue}>{machine.spins}</Text>
            <Text style={styles.statLabel}>SPINS</Text>
          </View>
        </View>

        <View style={styles.chipRow}>
          {BETS.map(value => (
            <BetChip
              key={`bet-${value}`}
              value={value}
              active={value === bet}
              disabled={spinning || value > machine.balance}
              onPress={onBetChange}
            />
          ))}
        </View>

        <View style={styles.ctaRow}>
          <View style={styles.cta}>
            <PrimaryButton
              label={spinning ? 'SPINNING...' : 'SPIN'}
              Icon={RotateCw}
              variant="gold"
              height={64}
              disabled={spinning || machine.balance < bet}
              onPress={spin}
            />
          </View>

          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Paytable"
            onPress={() => setPaytableOpen(true)}
            onPressIn={info.onPressIn}
            onPressOut={info.onPressOut}
            hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
            style={styles.infoPress}>
            <Animated.View
              style={[styles.infoInner, {transform: [{scale: info.scale}]}]}>
              <Info size={22} color={THEME.accent} strokeWidth={2.4} />
            </Animated.View>
          </Pressable>
        </View>
      </View>

      <OverlaySheet
        visible={paytableOpen}
        title="PAYTABLE"
        subtitle="FICTIONAL COINS · NO REAL MONEY · 18+"
        onClose={() => setPaytableOpen(false)}>
        <PaytablePanel />
      </OverlaySheet>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: THEME.bg,
  },
  stage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  ribbon: {
    height: 34,
    minWidth: BOARD_W * 0.8,
    paddingHorizontal: 18,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(109,40,217,0.22)',
    borderWidth: 1,
    borderColor: 'rgba(244,201,93,0.28)',
    marginBottom: 14,
  },
  ribbonText: {
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.2,
  },
  ribbonWin: {
    color: THEME.accent,
  },
  ribbonIdle: {
    color: THEME.text,
  },
  cabinetWrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  ticker: {
    marginTop: 16,
    alignItems: 'center',
  },
  tickerLabel: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.2,
    color: THEME.textMuted,
  },
  tickerTrack: {
    marginTop: 7,
    width: 180,
    height: 5,
    borderRadius: 3,
    overflow: 'hidden',
    flexDirection: 'row',
    backgroundColor: 'rgba(255,245,230,0.1)',
  },
  tickerFill: {
    height: 5,
    borderRadius: 3,
    backgroundColor: THEME.accent,
  },
  panel: {
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    backgroundColor: 'rgba(26,6,12,0.95)',
    borderTopWidth: 1.5,
    borderTopColor: 'rgba(244,201,93,0.3)',
    paddingHorizontal: 20,
    paddingTop: 14,
    paddingBottom: 22,
  },
  statStrip: {
    height: 42,
    flexDirection: 'row',
    alignItems: 'center',
  },
  statCell: {
    flex: 1,
    alignItems: 'center',
  },
  divider: {
    width: 1,
    height: 26,
    backgroundColor: 'rgba(255,245,230,0.08)',
  },
  statValue: {
    fontSize: 15,
    lineHeight: 19,
    fontWeight: '800',
    color: THEME.text,
    fontVariant: ['tabular-nums' as const],
  },
  statLabel: {
    marginTop: 2,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1.2,
    color: THEME.textDim,
  },
  chipRow: {
    marginTop: 12,
    flexDirection: 'row',
    gap: 10,
  },
  ctaRow: {
    marginTop: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  cta: {
    flex: 1,
  },
  infoPress: {
    width: 56,
    height: 56,
  },
  infoInner: {
    width: 56,
    height: 56,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,245,230,0.07)',
    borderWidth: 1,
    borderColor: 'rgba(244,201,93,0.3)',
  },
});
