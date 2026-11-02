import React from 'react';
import { StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';
import type { LucideIcon } from 'lucide-react-native';
import PressFX from './PressFX';
import { theme } from '../constants/theme';
import { ICON_GAP, ICON_SIZE } from './GoldButton';

type Props = {
  label: string;
  onPress: () => void;
  Icon?: LucideIcon;
  tone?: 'neutral' | 'danger' | 'felt';
  height?: number;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
};

function GhostButton({
  label,
  onPress,
  Icon,
  tone = 'neutral',
  height = 48,
  disabled = false,
  style,
}: Props) {
  const fg =
    tone === 'danger'
      ? theme.colors.negative
      : tone === 'felt'
      ? theme.colors.felt.light
      : '#E6DCC4';
  const border =
    tone === 'danger'
      ? 'rgba(201,132,122,0.45)'
      : tone === 'felt'
      ? 'rgba(46,125,91,0.45)'
      : theme.colors.line.brassStrong;

  return (
    <PressFX
      accessibilityLabel={label}
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.shell,
        { height, borderColor: border, opacity: disabled ? 0.5 : 1 },
        style,
      ]}>
      <View style={styles.row}>
        {Icon ? <Icon size={ICON_SIZE} color={fg} strokeWidth={2.4} /> : null}
        <Text numberOfLines={1} style={[styles.label, { color: fg }]}>
          {label}
        </Text>
      </View>
    </PressFX>
  );
}

const styles = StyleSheet.create({
  shell: {
    width: '100%',
    borderRadius: theme.radius.lg,
    borderWidth: 1,
    backgroundColor: 'rgba(255,255,255,0.05)',
  },
  row: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: ICON_GAP,
    paddingHorizontal: 12,
  },
  label: {
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 1.4,
    lineHeight: ICON_SIZE,
  },
});

export default React.memo(GhostButton);
