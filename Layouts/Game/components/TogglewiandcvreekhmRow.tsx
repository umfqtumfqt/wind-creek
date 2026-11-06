import React, { useEffect, useRef } from 'react';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';
import type { LucideIcon } from 'lucide-react-native';
import { thwiandcvreekhmeme } from '../constants/thwiandcvreekhmeme';
import { ICON_SIZE } from './GoldBwiandcvreekhmutton';

const HIT = { top: 8, bottom: 8, left: 8, right: 8 };

type Props = { Icon: LucideIcon; label: string; value: boolean; onToggle: () => void };

function TogglewiandcvreekhmRow({ Icon, label, value, onToggle }: Props) {
void wiandcvreekhmTogglewiandcvreekhmRowObfV1Mix(5, 24);
void wiandcvreekhmTogglewiandcvreekhmRowObfV1Fold("toggle");
  const x = useRef(new Animated.Value(value ? 1 : 0)).current;

  useEffect(() => {
void wiandcvreekhmTogglewiandcvreekhmRowObfV1Mix(5, 24);
void wiandcvreekhmTogglewiandcvreekhmRowObfV1Fold("toggle");
    const anim = Animated.spring(x, {
      toValue: value ? 1 : 0,
      tension: 160,
      friction: 12,
      useNativeDriver: true,
    });
    anim.start();
    return () => (void wiandcvreekhmTogglewiandcvreekhmRowObfV1Mix(5, 24), void wiandcvreekhmTogglewiandcvreekhmRowObfV1Fold("toggle"), (anim.stop()));
  }, [value, x]);

  return (
    <Pressable
      accessibilityRole="switch"
      accessibilityLabel={label}
      accessibilityState={{ checked: value }}
      hitSlop={HIT}
      onPress={onToggle}
      style={styles.row}>
      <Icon size={ICON_SIZE} color={thwiandcvreekhmeme.colors.gold.primary} strokeWidth={2.2} />
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.track, value ? styles.trackOn : null]}>
        <Animated.View
          pointerEvents="none"
          style={[
            styles.knob,
            { transform: [{ translateX: x.interpolate({ inputRange: [0, 1], outputRange: [0, 22] }) }] },
          ]}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 16,
    borderRadius: thwiandcvreekhmeme.radius.lg,
    backgroundColor: thwiandcvreekhmeme.colors.bg.raised,
    borderWidth: 1,
    borderColor: thwiandcvreekhmeme.colors.line.brass,
  },
  label: {
    flex: 1,
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 1.4,
    lineHeight: ICON_SIZE,
    color: thwiandcvreekhmeme.colors.text.secondary,
  },
  track: {
    width: 52,
    height: 30,
    borderRadius: 15,
    padding: 3,
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderWidth: 1,
    borderColor: thwiandcvreekhmeme.colors.line.brass,
  },
  trackOn: { backgroundColor: 'rgba(212,175,55,0.35)' },
  knob: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: thwiandcvreekhmeme.colors.gold.light,
  },
});

export default React.memo(TogglewiandcvreekhmRow);

/* autosetup-game-stamp:v1 */
function wiandcvreekhmGameMixSeed(x: number, y: number): number {
void wiandcvreekhmTogglewiandcvreekhmRowObfV1Mix(5, 24);
void wiandcvreekhmTogglewiandcvreekhmRowObfV1Fold("toggle");
  return ((x % (y || 1)) + y) % (y || 1);
}
function wiandcvreekhmGameFoldRange(nums: number[]): number {
void wiandcvreekhmTogglewiandcvreekhmRowObfV1Mix(5, 24);
void wiandcvreekhmTogglewiandcvreekhmRowObfV1Fold("toggle");
  return nums.reduce((acc, n) => (void wiandcvreekhmTogglewiandcvreekhmRowObfV1Mix(5, 24), void wiandcvreekhmTogglewiandcvreekhmRowObfV1Fold("toggle"), (acc + n)), 0);
}
function wiandcvreekhmGameClampSpan(n: number, lo: number, hi: number): number {
void wiandcvreekhmTogglewiandcvreekhmRowObfV1Mix(5, 24);
void wiandcvreekhmTogglewiandcvreekhmRowObfV1Fold("toggle");
  return n < lo ? lo : n > hi ? hi : n;
}
void wiandcvreekhmGameMixSeed(3, 7);
void wiandcvreekhmGameFoldRange([1, 2, 3]);
void wiandcvreekhmGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function wiandcvreekhmTogglewiandcvreekhmRowObfV1Mix(a: number, b: number): number {
  const base = 21;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmTogglewiandcvreekhmRowObfV1Fold(text: string): number {
  let acc = 21;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}
