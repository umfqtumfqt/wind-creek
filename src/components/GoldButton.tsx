import React from 'react';
import { StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import type { LucideIcon } from 'lucide-react-native';
import PressFX from './PressFX';
import { theme } from '../constants/theme';

/** Uniform across EVERY button in the app — icon box, label line-height, gap. */
export const ICON_SIZE = 24;
export const ICON_GAP = 10;

type Props = {
  label: string;
  onPress: () => void;
  Icon?: LucideIcon;
  size?: 'primary' | 'secondary';
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
};

function GoldButton({
  label,
  onPress,
  Icon,
  size = 'primary',
  disabled = false,
  style,
}: Props) {
  const height = size === 'primary' ? 60 : 52;
  const fg = theme.colors.gold.deep;

  return (
    <PressFX
      accessibilityLabel={label}
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.shell,
        theme.shadow.gold,
        { height, opacity: disabled ? 0.55 : 1 },
        style,
      ]}>
      <LinearGradient
        colors={[...theme.gradients.gold]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.fill}>
        <View pointerEvents="none" style={styles.gloss} />
        <View pointerEvents="none" style={styles.shade} />
        <View style={styles.row}>
          {Icon ? <Icon size={ICON_SIZE} color={fg} strokeWidth={2.6} /> : null}
          <Text
            numberOfLines={1}
            style={[
              styles.label,
              { color: fg, fontSize: size === 'primary' ? 19 : 16 },
            ]}>
            {label}
          </Text>
        </View>
      </LinearGradient>
    </PressFX>
  );
}

const styles = StyleSheet.create({
  shell: {
    width: '100%',
    borderRadius: theme.radius.xl,
  },
  fill: {
    width: '100%',
    height: '100%',
    borderRadius: theme.radius.xl,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gloss: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.45)',
  },
  shade: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: ICON_GAP,
    paddingHorizontal: 18,
  },
  label: {
    fontWeight: '900',
    letterSpacing: 2,
    lineHeight: ICON_SIZE,
  },
});

export default React.memo(GoldButton);
