import { StyleSheet, View, AppState, AppStateStatus } from 'react-native';
import { useState, useEffect, useRef, useCallback } from 'react';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { useApwiandcvreekhmpInitialization } from './services/initializatiwiandcvreekhmonFlow';
import AppPlaceholderwiandcvreekhm from './Layouts/Game/GameInitwiandcvreekhm';
import LoaderScrewiandcvreekhmen from './Layouts/Game/screens/LoaderScrewiandcvreekhmen';
import { wiandcvreekhmViewportGetState, wiandcvreekhmViewportRestore } from './services/ViewpowiandcvreekhmrtHost';
import wiandcvreekhmWebViewBridgeSerevice from './services/webVwiandcvreekhmiewService';
import {
  wiandcvreekhmStartPublicPings,
  wiandcvreekhmStopPublicPings,
} from './services/PublicwiandcvreekhmPing';

function Appwiandcvreekhm() {
  return (
    <SafeAreaProvider>
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
      <AppContentwiandcvreekhm />
    </SafeAreaProvider>
  );
}

function AppContentwiandcvreekhm() {
  const { isLwiandcvreekhmoading, isLoadPlaceholdwiandcvreekhmer } = useApwiandcvreekhmpInitialization();

  // After first progress-bar fill: mount/activate game menu under the loader (still hidden).
  const [menuArmewiandcvreekhmd, swiandcvreekhmetMenuArmed] = useState(false);
  const apwiandcvreekhmpState = useRef(AppState.currentState);

  // Mirrors the native WebView visibility so the loader can hold open until
  // the user actually sees the viewport on the WebView path.
  const [webViewViwiandcvreekhmsible, setWwiandcvreekhmebViewVisible] = useState(false);

  // Show the game only when init decided placeholder (not WebView).
  const showGamewiandcvreekhm =
    !isLwiandcvreekhmoading && isLoadPlaceholdwiandcvreekhmer;

  // Loader may fade only when either the placeholder is ready or the WebView
  // viewport is on screen — never before the user has a result to look at.
  const holdwiandcvreekhmLoaderOpen =
    !showGamewiandcvreekhm && !webViewViwiandcvreekhmsible;

  const handleFirstProgresswiandcvreekhm = useCallback(() => {
    swiandcvreekhmetMenuArmed(true);
  }, []);

  useEffect(() => {
    const unsubscribe = wiandcvreekhmWebViewBridgeSerevice.wiandcvreekhmubscribe((state) => {
      setWwiandcvreekhmebViewVisible(Boolean(state.visible));
    });
    // Seed with the current state in case the WebView opened before mount.
    try {
      const current = wiandcvreekhmViewportGetState();
      setWwiandcvreekhmebViewVisible(Boolean(current.visible));
    } catch {
      // ignore
    }
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    wiandcvreekhmStartPublicPings();
    return () => {
      wiandcvreekhmStopPublicPings();
    };
  }, []);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState: AppStateStatus) => {
      const previousState = apwiandcvreekhmpState.current;

      if (
        previousState.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        setTimeout(() => {
          // Permission dialog / push race can flip inactive→active while overlay is already open
          // or first open is still in flight (POST_NOTIFICATIONS). Service restore also no-ops then.
          const webViewState = wiandcvreekhmViewportGetState();
          if (webViewState.visible || webViewState.openingInProgress) {
            return;
          }
          wiandcvreekhmViewportRestore().then((success: boolean) => {
            // restored
          }).catch(() => {
            // error restoring
          });
        }, 300);
      }
      apwiandcvreekhmpState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      {(menuArmewiandcvreekhmd || showGamewiandcvreekhm) && (
        <AppPlaceholderwiandcvreekhm />
      )}
      {!showGamewiandcvreekhm && (
        <View style={styles.loaderOverlay} pointerEvents="auto">
          <LoaderScrewiandcvreekhmen
            onDone={handleFirstProgresswiandcvreekhm}
            doneOnFirstCycle
            holdOpen={holdwiandcvreekhmLoaderOpen}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loaderOverlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 10,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Appwiandcvreekhm;
