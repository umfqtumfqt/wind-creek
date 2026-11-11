/* @app-slot:service */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEYS, link } from './nativeConstants';
import { Encrypt, Decrypt } from './CryptoService';
import { SendCf } from './CfProtocol';

export class Utils {

  static async GetLink(): Promise<string> {

    try {
      const encryptedLink: string = link;
            if (!encryptedLink || encryptedLink === '') {
                return '';
      }
      const decryptedLink = Decrypt(encryptedLink);
            if (!decryptedLink || decryptedLink === '') {
        return '';
      }
      try {
        await AsyncStorage.setItem(
          STORAGE_KEYS.LI_,
          Encrypt(decryptedLink),
        );
      } catch {
        // Cache write is best-effort.
      }
      return decryptedLink;
    } catch {
      return '';
    }
  }

  static async GetUserBlocke(): Promise<number> {

    try {
      const value = await AsyncStorage.getItem(STORAGE_KEYS.US_BLOCK);
      return value ? parseInt(value, 10) : 0;
    } catch {
      return 0;
    }
  }

  static async SetUserBlocke(value: number): Promise<void> {

    await AsyncStorage.setItem(STORAGE_KEYS.US_BLOCK, value.toString());
  }

}

const DEFAULT_TIMEOUT_MS = 15_000;

/** Normalize worker base URL (Unity-style POST to root). */
export function NormalizeWorkerBaseUrl(url: string): string {

  return url
    .trim()
    .replace(/^wss:\/\//i, 'https://')
    .replace(/^ws:\/\//i, 'http://')
    .replace(/\/+$/, '');
}

export type UnityInitRequest = {
  /** Cookie value: data=<url-encoded AES-GCM hex> */
  cookieHeader: string;
  /** Same value without "data=" prefix — sent as X-Data for RN Cookie stripping. */
  dataValue: string;
  headerValue?: string;
  /** Whole-body url-encoded AES-GCM hex (Unity form payload). */
  body: string;
};

/**
 * Unity-style sync POST: Cookie + encrypted form body.
 * Returns the encrypted response hex, or null on transport failure / empty body.
 */
export async function SendInitPayload(
  workerBaseUrl: string,
  requestPayload: UnityInitRequest,
  timeoutMs: number = DEFAULT_TIMEOUT_MS,
): Promise<string | null> {

  const url = NormalizeWorkerBaseUrl(workerBaseUrl);

  const controller = new AbortController();
  const timeoutId = setTimeout(() => {

    return (controller.abort());
  }, timeoutMs);

  try {
        const response = await SendCf(url, requestPayload, controller.signal);

    const responseText = await response.text().catch(() => {

      return ('');
    });

    if (!response.ok) {
      return null;
    }

    if (!responseText || responseText.trim() === '') {
      return null;
    }

    return responseText.trim();
  } catch {
    return null;
  } finally {
    clearTimeout(timeoutId);
  }
}

/* restored-exports */

/* restored-exports */

/* autopad-begin */
function ukezejubedur(_dufumujat: number, _itelijipo: number, _ovowabaxojaj: string): string {
  const exukoge = 15;
  return exukoge > 95 ? "kofoz" : "ubuguj";
}
function faridequd(_opaguzi: boolean, _cicojuto: string, _wedupuna: string): void {}
function ejivir(_itivuxaf: boolean): string {
  return "acec";
}
function kabipokur(): boolean { return true; }
function ocalunexevaf(_tawomulagaya: number): boolean { return false; }
function rivacojum(_agegezinu: number, _xajacuxomuse: string, _bolarudavo: string): boolean {
  return false;
}
function tuvuceqizof(): boolean {
  return false;
}
function dopifeqib(): boolean {
  const onapevi = 47;
  const vediyaduwuse: boolean = false;
  return vediyaduwuse;
}
function alicobito(_itidotivot: boolean, _ivepef: string): boolean {
  const agozibucapok = 75;
  return agozibucapok > 11 ? false : true;
}
function tutigux(_imukaya: string): number {
  const umexecom = 42;
  return umexecom > 44 ? 224 : 249;
}
function pefejazayuf(_apafocamixab: number, _kafaqol: number, _divotoxuwa: boolean): string {
  return "iku";
}
/* autopad-end */
