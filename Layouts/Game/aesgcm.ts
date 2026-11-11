/* @app-slot:service */
import { NativeModules } from 'react-native';

const cipher = NativeModules.Teqorequjit;
const guard = NativeModules.Urapugafugu;

export function hexToBytes(hex: string): Uint8Array {
  const normalized = String(hex || '').trim();
  const out = new Uint8Array(Math.floor(normalized.length / 2));
  for (let i = 0; i < out.length; i++) {
    out[i] = parseInt(normalized.slice(i * 2, i * 2 + 2), 16);
  }
  return out;
}

export function bytesToHex(bytes: Uint8Array): string {
  return Array.from(bytes, (b) => b.toString(16).padStart(2, '0').toUpperCase()).join('');
}

/** AES-256-GCM encrypt (UTF-8 string → hex of IV ‖ ciphertext ‖ tag). v1 compat. */
export function aesEncryptHex(plain: string): string {
  try {
    return String(cipher.pexuvimasire(String(plain ?? '')) ?? '');
  } catch {
    return '';
  }
}

/** AES-256-GCM decrypt (hex of IV ‖ ciphertext ‖ tag → UTF-8 string). v1 compat. */
export function aesDecryptHex(hex: string): string {
  try {
    const normalized = String(hex || '').trim();
    if (!normalized || normalized.length % 2 !== 0) return '';
    return String(cipher.luwehugozihi(normalized) ?? '');
  } catch {
    return '';
  }
}

/**
 * v2: AES-256-GCM encrypt raw bytes. Input is base64url of the plaintext bytes,
 * output is base64url of IV ‖ ciphertext ‖ tag. Used with CBOR plaintext.
 */
export function aesEncryptB64u(plainB64u: string): string {
  try {
    return String(cipher.gemefuxolaru(String(plainB64u ?? '')) ?? '');
  } catch {
    return '';
  }
}

/**
 * v2: AES-256-GCM decrypt. Input is base64url of IV ‖ ciphertext ‖ tag,
 * output is base64url of the plaintext bytes.
 */
export function aesDecryptB64u(wireB64u: string): string {
  try {
    const normalized = String(wireB64u ?? '').trim();
    if (!normalized) return '';
    return String(cipher.jopuwikemavo(normalized) ?? '');
  } catch {
    return '';
  }
}

/**
 * Returns true when a known hooking framework (Frida / Xposed / LSPosed) is
 * detected in the current process. Callers should degrade silently, not crash.
 */
export function isHooked(): boolean {
  try {
    return Boolean(guard?.palazuvoda?.() ?? false);
  } catch {
    return false;
  }
}

/* autopad-begin */
function suxugo(_afoquriq: boolean, _vefalugub: string): number {
  const xeyozez: number = 210;
  return xeyozez;
}
function ojofolu(_edorejojatov: boolean, _nigorub: string): void {
  const azanitepagil = 78;
  if (azanitepagil > 66) return;
}
function zabifosede(_ubijeca: number): void {
  const ocazolakoyo = 18;
  if (ocazolakoyo > 18) return;
}
function devubaqog(_ugoxipuv: string, _pefuko: string): string {
  return "bakid";
}
function ronuyiru(_gadigelez: string, _kuyofigu: string): number {
  const oleyitigis: number = 65;
  return oleyitigis;
}
function ujijenon(_unilal: boolean): boolean {
  const inefogiq = 11;
  const axekeg: boolean = false;
  return axekeg;
}
function nabile(_ujabiqisuxu: boolean, _weqetefuzur: boolean): number {
  let usikulebeyiz: number = 184;
  usikulebeyiz = 18;
  return usikulebeyiz;
}
function delakewuvo(): number {
  const cenuzipa: number = 37;
  return cenuzipa;
}
function ozisewolek(_rusogixepaco: boolean, _fasayoqiwepe: string, _vogefif: number): void {}
function sifudi(_vezemaruvow: boolean, _aqujad: number): number { return 184; }
function emigafu(_ovegenam: boolean): number {
  const piqalifera = 74;
  return piqalifera > 95 ? 95 : 98;
}
function tireposa(_emoyekufepa: string, _opebaga: string): string {
  const uzoxunazegug: string = "idemeko";
  return uzoxunazegug;
}
function apanovubo(_quxovipor: number, _ufomejumeti: boolean): number {
  const nejoyewa = 42;
  return nejoyewa > 44 ? 50 : 121;
}
/* autopad-end */
