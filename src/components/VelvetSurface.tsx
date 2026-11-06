import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {GRADIENTS, THEME} from '../constants/theme';

type Props = {
  children?: React.ReactNode;
  radius?: number;
  /** Background fill; defaults to the controls-panel velvet. */
  fill?: string;
  borderColor?: string;
  borderWidth?: number;
  style?: StyleProp<ViewStyle>;
};

/**
 * The SKEUOMORPHISM primitive: a solid velvet fill, a lit top edge and a
 * shaded bottom. Three stacked layers are what make a flat colour read as
 * fabric without shipping a texture.
 */
export const VelvetSurface: React.FC<Props> = ({
  children,
  radius = 20,
  fill = THEME.surface,
  borderColor = 'rgba(244,201,93,0.3)',
  borderWidth = 1,
  style,
}) => {
  return (
    <View
      style={[
        styles.base,
        {
          borderRadius: radius,
          backgroundColor: fill,
          borderColor,
          borderWidth,
        },
        style,
      ]}>
      <LinearGradient
        colors={GRADIENTS.sheen}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        pointerEvents="none"
        style={[styles.sheen, {borderTopLeftRadius: radius, borderTopRightRadius: radius}]}
      />
      <LinearGradient
        colors={GRADIENTS.vignette}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        pointerEvents="none"
        style={[
          styles.vignette,
          {borderBottomLeftRadius: radius, borderBottomRightRadius: radius},
        ]}
      />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    overflow: 'hidden',
  },
  sheen: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 10,
  },
  vignette: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 26,
  },
});
