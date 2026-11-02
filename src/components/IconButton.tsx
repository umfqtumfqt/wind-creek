import React from 'react';
import { Image, StyleSheet, View, type ImageSourcePropType } from 'react-native';
import type { LucideIcon } from 'lucide-react-native';
import PressFX from './PressFX';
import { theme } from '../constants/theme';

type Props = {
  onPress: () => void;
  accessibilityLabel: string;
  Icon?: LucideIcon;
  image?: ImageSourcePropType;
  size?: number;
  dot?: boolean;
};

/** 40x40 machined brass disc used in every header. */
function IconButton({
  onPress,
  accessibilityLabel,
  Icon,
  image,
  size = 40,
  dot = false,
}: Props) {
  return (
    <PressFX
      accessibilityLabel={accessibilityLabel}
      onPress={onPress}
      style={[styles.shell, { width: size, height: size, borderRadius: size / 2 }]}>
      <View style={styles.center}>
        {Icon ? (
          <Icon size={20} color={theme.colors.gold.light} strokeWidth={2.4} />
        ) : null}
        {image ? <Image source={image} style={styles.image} /> : null}
        {dot ? <View style={styles.dot} /> : null}
      </View>
    </PressFX>
  );
}

const styles = StyleSheet.create({
  shell: {
    backgroundColor: 'rgba(20,20,24,0.82)',
    borderWidth: 1,
    borderColor: theme.colors.line.brassStrong,
  },
  center: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: { width: 24, height: 24, resizeMode: 'contain' },
  dot: {
    position: 'absolute',
    top: 5,
    right: 5,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.colors.felt.primary,
  },
});

export default React.memo(IconButton);
