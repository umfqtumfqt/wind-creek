import React from 'react';
import {
  Animated,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import {THEME} from '../constants/theme';
import {usePressScale} from '../hooks/usePressScale';
import {ICON_SIZE} from './PrimaryButton';

type Props = {
  label: string;
  Icon?: React.ComponentType<any>;
  height?: number;
  onPress: () => void;
  accessibilityLabel?: string;
  style?: StyleProp<ViewStyle>;
};

export const SecondaryButton: React.FC<Props> = ({
  label,
  Icon,
  height = 50,
  onPress,
  accessibilityLabel,
  style,
}) => {
  const {scale, onPressIn, onPressOut} = usePressScale(0.97);

  return (
    <Pressable
      accessible
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel || label}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
      style={[styles.press, {height}, style]}>
      <Animated.View
        style={[styles.inner, {height, transform: [{scale}]}]}>
        <View style={styles.row}>
          {Icon ? (
            <Icon size={ICON_SIZE} color={THEME.accent} strokeWidth={2.2} />
          ) : null}
          <Text style={styles.label}>{label}</Text>
        </View>
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  press: {
    width: '100%',
    borderRadius: 14,
  },
  inner: {
    width: '100%',
    borderRadius: 14,
    backgroundColor: 'rgba(255,245,230,0.07)',
    borderWidth: 1,
    borderColor: 'rgba(244,201,93,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  label: {
    fontSize: 14,
    lineHeight: ICON_SIZE,
    fontWeight: '700',
    letterSpacing: 1.6,
    color: THEME.accent,
  },
});
