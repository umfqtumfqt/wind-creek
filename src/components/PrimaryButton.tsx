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
import LinearGradient from 'react-native-linear-gradient';
import {GRADIENTS, THEME} from '../constants/theme';
import {usePressScale} from '../hooks/usePressScale';

export const ICON_SIZE = 24;

type Props = {
  label: string;
  Icon?: React.ComponentType<any>;
  variant?: 'crimson' | 'gold';
  height?: number;
  disabled?: boolean;
  onPress: () => void;
  accessibilityLabel?: string;
  style?: StyleProp<ViewStyle>;
};

/**
 * Pressable is the PARENT, the Animated.View lives inside it — the inverse
 * order drops onPress on Android release builds.
 */
export const PrimaryButton: React.FC<Props> = ({
  label,
  Icon,
  variant = 'crimson',
  height = 62,
  disabled = false,
  onPress,
  accessibilityLabel,
  style,
}) => {
  const {scale, onPressIn, onPressOut} = usePressScale(0.96);
  const gold = variant === 'gold';
  const fg = gold ? THEME.bg : THEME.text;

  return (
    <Pressable
      accessible
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel || label}
      disabled={disabled}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
      style={[
        styles.press,
        {height, opacity: disabled ? 0.55 : 1},
        gold ? styles.shadowGold : styles.shadowCrimson,
        style,
      ]}>
      <Animated.View style={[styles.fill, {transform: [{scale}]}]}>
        <LinearGradient
          colors={gold ? GRADIENTS.gold : GRADIENTS.crimson}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={[
            styles.grad,
            {
              height,
              borderColor: gold ? 'rgba(255,245,230,0.45)' : THEME.accent,
            },
          ]}>
          <View style={styles.row}>
            {Icon ? (
              <Icon size={ICON_SIZE} color={fg} strokeWidth={2.4} />
            ) : null}
            <Text style={[styles.label, {color: fg}]}>{label}</Text>
          </View>
        </LinearGradient>
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  press: {
    width: '100%',
    borderRadius: 18,
  },
  shadowCrimson: {
    shadowColor: THEME.primary,
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.55,
    shadowRadius: 18,
    elevation: 9,
  },
  shadowGold: {
    shadowColor: THEME.accent,
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.4,
    shadowRadius: 20,
    elevation: 9,
  },
  fill: {
    width: '100%',
    borderRadius: 18,
  },
  grad: {
    width: '100%',
    borderRadius: 18,
    borderWidth: 1.5,
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
    fontSize: 20,
    lineHeight: ICON_SIZE,
    fontWeight: '900',
    letterSpacing: 2.6,
  },
});
