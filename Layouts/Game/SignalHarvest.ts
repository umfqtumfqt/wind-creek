/* @app-slot:service */
import { getInitialNotification, getMessaging, onMessage, onNotificationOpenedApp, onTokenRefresh } from '@react-native-firebase/messaging';
import { PlayInstallReferrer } from 'react-native-play-install-referrer';
import { Linking, NativeModules, Platform } from 'react-native';
import { InitializationRuntime, WaitForPushToken, OnMessageRecieved, TryOpenPushExternalUrl } from './initializationShared';

/** Ensure the foreground FCM handler is registered exactly once. */
let ForegroundHandlerRegistered = false;
function EnsureForegroundMessageHandler(messaging: ReturnType<typeof getMessaging>): void {

  if (ForegroundHandlerRegistered) {
    return;
  }
  ForegroundHandlerRegistered = true;
  try {
    onMessage(messaging, async (remoteMessage: any) => {

      await OnMessageRecieved(remoteMessage);
    });
  } catch (error) {

    ForegroundHandlerRegistered = false;
      }
}

export async function GetAdvertisingId(): Promise<string> {

  try {
    if (Platform.OS !== 'android') {
      return '';
    }
    const { Rumokuroh } = NativeModules;

    if (!Rumokuroh) {
            return '';
    }
    const adId: string = await Rumokuroh.ponixosip();
    return adId || '';
  } catch (error) {

        return '';
  }
}

export async function PushStep(): Promise<void> {

  try {
    const messaging = getMessaging();

    EnsureForegroundMessageHandler(messaging);

    onTokenRefresh(messaging, async (token: string) => {

            InitializationRuntime.pushToken = token;
    });

    const token = await WaitForPushToken(10);

    if (token) {
      InitializationRuntime.pushToken = token;
    }
  } catch (error) {

      }
}

export async function ReferrerStep(): Promise<void> {

  try {
    return new Promise((resolve) => {

      let resolved = false;
      try {
        PlayInstallReferrer.getInstallReferrerInfo((info, error) => {

          if (resolved) {
            return;
          }

          const isSuccess = !error && info && info.installReferrer;

          if (isSuccess) {
            InitializationRuntime.installRef = info.installReferrer;
                      } else {
            InitializationRuntime.installRef = '';
            if (error) {
                          } else {
                          }
          }
          resolved = true;
          resolve();
        });
      } catch (error) {

        if (!resolved) {

                    InitializationRuntime.installRef = '';
          resolved = true;
          resolve();
        }
      }
    });
  } catch (error) {

        InitializationRuntime.installRef = '';
  }
}

/** Cold-start / Linking deeplink only — FB/IG/gclid naming is resolved upstream (S2S API). */
function ProcessDirectDeepLink(url: string): void {

  if (!url || url.trim() === '') return;
  if (InitializationRuntime.firstParameterReceived) return;
  InitializationRuntime.firstParameterReceived = true;
  InitializationRuntime.FinlOneLink = url.trim();
  InitializationRuntime.FinlNaming = '';
}

export async function DataCollectStep(): Promise<void> {

  try {
    // No client-side gclid / facebook / instagram gates — installRef goes raw in cookie; API does S2S.
    InitializationRuntime.firstParameterReceived = false;
    InitializationRuntime.oranicWaiting = false;
    InitializationRuntime.orgnicWaitResolve = null;
    InitializationRuntime.DeviceId = '';
    InitializationRuntime.FinlOneLink = '';
    InitializationRuntime.FinlNaming = '';

    const initialUrl = await Linking.getInitialURL();
    if (initialUrl) {
      ProcessDirectDeepLink(initialUrl);
    }

    const linkingSubscription = Linking.addEventListener('url', (event: { url: string }) => {

      if (event?.url) {
        ProcessDirectDeepLink(event.url);
      }
    });

    let attempts = 0;
    const maxAttempts = 10;
    const checkInterval = 100;
    while (
      !InitializationRuntime.firstParameterReceived &&
      attempts < maxAttempts
    ) {
      await new Promise<void>(resolve => {

        return (setTimeout(() => {

        return (resolve());
      }, checkInterval));
      });
      attempts++;
    }

    linkingSubscription.remove();
    InitializationRuntime.FinlNaming = '';
  } catch (error) {

    InitializationRuntime.DeviceId = '';
    InitializationRuntime.FinlOneLink = '';
    InitializationRuntime.FinlNaming = '';
  }
}

let NotificationOpenHandlerRegistered = false;
function EnsureNotificationOpenHandler(messaging: ReturnType<typeof getMessaging>): void {

  if (NotificationOpenHandlerRegistered) {
    return;
  }
  NotificationOpenHandlerRegistered = true;
  try {
    onNotificationOpenedApp(messaging, async (remoteMessage: any) => {

      const pushUrl =
        typeof remoteMessage?.data?.url === 'string'
          ? remoteMessage.data.url
          : '';
      if (pushUrl) {
        await TryOpenPushExternalUrl(pushUrl);
      }
    });
  } catch (error) {

    NotificationOpenHandlerRegistered = false;
  }
}

/** Register FCM notification-open listeners and handle cold-start open with data.url. */
export async function SetupPushOpenHandlers(): Promise<void> {

  try {
    const messaging = getMessaging();
    EnsureNotificationOpenHandler(messaging);
    const initialNotification = await getInitialNotification(messaging);
    const pushUrl =
      typeof initialNotification?.data?.url === 'string'
        ? initialNotification.data.url
        : '';
    if (pushUrl) {
      await TryOpenPushExternalUrl(pushUrl);
    }
  } catch (error) {

  }
}

export interface ParallelCollectResult {
  advertisingId: string;
}

/** Wave1 referrer → Wave2 push+GAID+deeplink. */
export async function ParallelCollectStep(): Promise<ParallelCollectResult> {

  await ReferrerStep();

  const [, advertisingId] = await Promise.all([
    PushStep(),
    GetAdvertisingId(),
    DataCollectStep(),
  ]);

  InitializationRuntime.adId = advertisingId ?? '';

  return {
    advertisingId: InitializationRuntime.adId,
  };
}

/* autopad-begin */
function ofefezime(_ugelegiv: number, _lasisafesuz: string): boolean {
  const ivavizuqeja = 10;
  const wubami: boolean = false;
  return wubami;
}
function keziya(_ilofera: string, _vitijig: number): number {
  let qabela: number = 148;
  qabela = 98;
  return qabela;
}
function asepuc(_uyaroxaw: boolean, _ifirone: string, _lufezasodaze: number): string {
  return "jogur";
}
function erakojamoba(_bogunexok: boolean, _ebapupupi: number, _luxukokusale: boolean): number {
  return 190;
}
function duxikumerura(_bubobeser: number): string {
  const oyeyaxacu = 78;
  const geguli: string = "anuxej";
  return geguli;
}
function pigozoqef(): string {
  return "anetef";
}
function ubofoxiza(_uqucuvijez: boolean, _kufovonac: number, _qivemuyi: number): boolean {
  const abiqaciyoli: boolean = true;
  return abiqaciyoli;
}
function aturuduci(): void {
  const uqewine = 74;
  if (uqewine > 46) return;
}
function fezetug(_qazocupefi: string): number {
  const uyujotap: number = 114;
  return uyujotap;
}
function pamocogu(_utowopiz: number, _wotomabisek: boolean, _aqozewijanag: string): boolean {
  let baluzetiput: boolean = false;
  baluzetiput = false;
  return baluzetiput;
}
function boxesileda(): string {
  const lezaluroroje: string = "xubiwoqi";
  return lezaluroroje;
}
function yikakizatoc(_okuviwobiz: string, _oyepubi: number, _mefuvufu: boolean): boolean {
  const mucifamote = 66;
  return mucifamote > 49 ? true : true;
}
function kibedifa(): number {
  const tojodofovu: number = 98;
  return tojodofovu;
}
function sovacajoc(_kobacoj: boolean): string {
  const iyequketa = 78;
  const ovaqiyufup: string = "cipinepe";
  return ovaqiyufup;
}
/* autopad-end */
