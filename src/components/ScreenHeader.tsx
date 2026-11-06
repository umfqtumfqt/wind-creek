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
import {ChevronLeft} from 'lucide-react-native';
import {THEME} from '../constants/theme';
import {usePressScale} from '../hooks/usePressScale';

type Props = {
  title: string;
  onBack?: () => void;
  right?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

/**
 * One header for every screen — paddingTop 44 clears the status bar.
 * Inline per-screen header markup drifts; this does not.
 */
export const ScreenHeader: React.FC<Props> = ({title, onBack, right, style}) => {
  const {scale, onPressIn, onPressOut} = usePressScale(0.92);

  return (
    <View style={[styles.header, style]}>
      <View style={styles.side}>
        {onBack ? (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Back"
            onPress={onBack}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
            style={styles.backPress}>
            <Animated.View style={[styles.backInner, {transform: [{scale}]}]}>
              <ChevronLeft size={22} color={THEME.accent} strokeWidth={2.6} />
            </Animated.View>
          </Pressable>
        ) : null}
      </View>

      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>

      <View style={styles.sideRight}>{right}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 96,
    paddingTop: 44,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(10,3,6,0.55)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(244,201,93,0.22)',
  },
  side: {
    width: 86,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  sideRight: {
    width: 86,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  backPress: {
    width: 44,
    height: 44,
  },
  backInner: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,245,230,0.07)',
    borderWidth: 1,
    borderColor: 'rgba(244,201,93,0.24)',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 2.4,
    color: THEME.text,
  },
});
