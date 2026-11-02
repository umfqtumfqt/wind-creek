import React, { useEffect, useRef } from 'react';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';
import type { LucideIcon } from 'lucide-react-native';
import { theme } from '../constants/theme';
import { ICON_SIZE } from './GoldButton';

const HIT = { top: 8, bottom: 8, left: 8, right: 8 };

type Props = { Icon: LucideIcon; label: string; value: boolean; onToggle: () => void };

function ToggleRow({ Icon, label, value, onToggle }: Props) {
  const x = useRef(new Animated.Value(value ? 1 : 0)).current;

  useEffect(() => {
    const anim = Animated.spring(x, {
      toValue: value ? 1 : 0,
      tension: 160,
      friction: 12,
      useNativeDriver: true,
    });
    anim.start();
    return () => anim.stop();
  }, [value, x]);

  return (
    <Pressable
      accessibilityRole="switch"
      accessibilityLabel={label}
      accessibilityState={{ checked: value }}
      hitSlop={HIT}
      onPress={onToggle}
      style={styles.row}>
      <Icon size={ICON_SIZE} color={theme.colors.gold.primary} strokeWidth={2.2} />
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
    borderRadius: theme.radius.lg,
    backgroundColor: theme.colors.bg.raised,
    borderWidth: 1,
    borderColor: theme.colors.line.brass,
  },
  label: {
    flex: 1,
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 1.4,
    lineHeight: ICON_SIZE,
    color: theme.colors.text.secondary,
  },
  track: {
    width: 52,
    height: 30,
    borderRadius: 15,
    padding: 3,
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderWidth: 1,
    borderColor: theme.colors.line.brass,
  },
  trackOn: { backgroundColor: 'rgba(212,175,55,0.35)' },
  knob: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: theme.colors.gold.light,
  },
});

export default React.memo(ToggleRow);
