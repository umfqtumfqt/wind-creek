import {useEffect, useRef, useState} from 'react';
import {Animated} from 'react-native';
import {COUNT_UP_MS} from '../constants/config';

/**
 * Animates a displayed integer towards `value`. The Animated.Value is the
 * source of truth; the visible text is throttled so React does not re-render
 * on every frame.
 */
export function useCountUp(value: number, duration = COUNT_UP_MS): number {
  const driver = useRef(new Animated.Value(value)).current;
  const [shown, setShown] = useState(value);
  const lastPush = useRef(0);
  const latest = useRef(value);

  useEffect(() => {
    latest.current = value;
    const id = driver.addListener(({value: v}) => {
      const now = Date.now();
      if (now - lastPush.current >= 60) {
        lastPush.current = now;
        setShown(Math.round(v));
      }
    });
    const anim = Animated.timing(driver, {
      toValue: value,
      duration,
      useNativeDriver: false,
    });
    anim.start(() => {
      setShown(latest.current);
    });
    return () => {
      anim.stop();
      driver.removeListener(id);
    };
  }, [value, duration, driver]);

  return shown;
}

export const formatCoins = (n: number): string =>
  Math.max(0, Math.round(n))
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
