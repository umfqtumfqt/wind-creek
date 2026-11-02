import React from 'react';
import { Image, StyleSheet, View, type ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { assets } from '../assets';
import { DUST, SCREEN_H, SCREEN_W } from '../constants/config';
import { theme } from '../constants/theme';

type Props = {
  children: React.ReactNode;
  /** Gradient laid over the venue art. Always >= 2 stops — never a flat fill. */
  colors?: string[];
  locations?: number[];
  artOpacity?: number;
  scrim?: string;
  felt?: boolean;
  blobTop?: number;
  blobSize?: number;
  blobColor?: string;
  dust?: boolean;
  style?: ViewStyle;
};

/**
 * Every screen's base: venue art -> gradient -> decor -> content.
 * Guarantees the "never a flat background" rule and keeps screens distinct
 * purely by overlay (the asset contract ships one background image).
 */
function ScreenShell({
  children,
  colors = ['#0B0B0F', '#15120B', '#0B0B0F'],
  locations,
  artOpacity = 0.16,
  scrim,
  felt = false,
  blobTop = SCREEN_H * 0.26,
  blobSize = 320,
  blobColor = 'rgba(212,175,55,0.10)',
  dust = true,
  style,
}: Props) {
  return (
    <View style={[styles.root, style]}>
      <LinearGradient
        colors={colors}
        locations={locations}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={StyleSheet.absoluteFillObject}
      />
      <Image
        source={assets.bgGame}
        style={[StyleSheet.absoluteFillObject, { opacity: artOpacity }]}
        resizeMode="cover"
      />
      {scrim ? (
        <View style={[StyleSheet.absoluteFillObject, { backgroundColor: scrim }]} />
      ) : null}
      {felt ? (
        <View
          style={[
            StyleSheet.absoluteFillObject,
            { backgroundColor: 'rgba(46,125,91,0.05)' },
          ]}
        />
      ) : null}

      <View pointerEvents="none" style={StyleSheet.absoluteFillObject}>
        <View
          style={{
            position: 'absolute',
            top: blobTop,
            left: (SCREEN_W - blobSize) / 2,
            width: blobSize,
            height: blobSize,
            borderRadius: blobSize / 2,
            backgroundColor: blobColor,
          }}
        />
        {dust
          ? DUST.map((d, i) => (
              <View
                key={'dust' + i}
                style={{
                  position: 'absolute',
                  left: d.x * SCREEN_W,
                  top: d.y * SCREEN_H,
                  width: d.s,
                  height: d.s,
                  borderRadius: d.s / 2,
                  backgroundColor: 'rgba(245,215,122,0.16)',
                }}
              />
            ))
          : null}
      </View>

      <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: theme.colors.bg.deep },
  content: { flex: 1 },
});

export default React.memo(ScreenShell);
