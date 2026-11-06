import React, {useEffect, useRef} from 'react';
import {
  Animated,
  BackHandler,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {X} from 'lucide-react-native';
import {THEME} from '../constants/theme';
import {usePressScale} from '../hooks/usePressScale';

type Props = {
  visible: boolean;
  title: string;
  subtitle?: string;
  onClose: () => void;
  children: React.ReactNode;
};

/** Bottom sheet with a custom fade/slide — Android back closes it. */
export const OverlaySheet: React.FC<Props> = ({
  visible,
  title,
  subtitle,
  onClose,
  children,
}) => {
  const anim = useRef(new Animated.Value(0)).current;
  const {scale, onPressIn, onPressOut} = usePressScale(0.9);

  useEffect(() => {
    Animated.timing(anim, {
      toValue: visible ? 1 : 0,
      duration: visible ? 260 : 180,
      useNativeDriver: true,
    }).start();
  }, [visible, anim]);

  useEffect(() => {
    if (!visible) {
      return;
    }
    const sub = BackHandler.addEventListener('hardwareBackPress', () => {
      onClose();
      return true;
    });
    return () => sub.remove();
  }, [visible, onClose]);

  return (
    <Modal
      visible={visible}
      transparent
      animationType="none"
      statusBarTranslucent
      onRequestClose={onClose}>
      <View style={styles.root}>
        <Animated.View
          pointerEvents="box-none"
          style={[styles.backdrop, {opacity: anim}]}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Close panel"
            style={styles.backdropPress}
            onPress={onClose}
          />
        </Animated.View>

        <Animated.View
          pointerEvents="box-none"
          style={[
            styles.sheet,
            {
              opacity: anim,
              transform: [
                {
                  translateY: anim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [60, 0],
                  }),
                },
              ],
            },
          ]}>
          <View style={styles.handle} />

          <View style={styles.headRow}>
            <View style={styles.headText}>
              <Text style={styles.title}>{title}</Text>
              {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
            </View>

            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Close"
              onPress={onClose}
              onPressIn={onPressIn}
              onPressOut={onPressOut}
              hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
              style={styles.closePress}>
              <Animated.View
                style={[styles.closeInner, {transform: [{scale}]}]}>
                <X size={20} color={THEME.accent} strokeWidth={2.6} />
              </Animated.View>
            </Pressable>
          </View>

          <View style={styles.body}>{children}</View>
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(5,1,3,0.72)',
  },
  backdropPress: {
    flex: 1,
  },
  sheet: {
    backgroundColor: 'rgba(26,6,12,0.98)',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    borderTopWidth: 1.5,
    borderTopColor: 'rgba(244,201,93,0.3)',
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 26,
    maxHeight: '82%',
  },
  handle: {
    alignSelf: 'center',
    width: 46,
    height: 3,
    borderRadius: 2,
    backgroundColor: THEME.accent,
    marginBottom: 14,
  },
  headRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  headText: {
    flex: 1,
    paddingRight: 12,
  },
  title: {
    fontSize: 19,
    fontWeight: '900',
    letterSpacing: 1.6,
    color: THEME.text,
  },
  subtitle: {
    marginTop: 4,
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 1.1,
    color: THEME.textDim,
  },
  closePress: {
    width: 40,
    height: 40,
  },
  closeInner: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,245,230,0.07)',
    borderWidth: 1,
    borderColor: 'rgba(244,201,93,0.28)',
  },
  body: {
    width: '100%',
  },
});
