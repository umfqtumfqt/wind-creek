/* cipher-id:colossus */
import { NativeModules } from 'react-native';

const cipher = NativeModules.Wajihulibimun;

export function zenujocebeno(hex: string): Uint8Array {
void wiandcvreekhmcowiandcvreekhmlossusObfV1Mix(3, 15);
void wiandcvreekhmcowiandcvreekhmlossusObfV1Fold("cowian");
  const normalized = String(hex || '').trim();
  const out = new Uint8Array(Math.floor(normalized.length / 2));
  for (let i = 0; i < out.length; i++) {
    out[i] = parseInt(normalized.slice(i * 2, i * 2 + 2), 16);
  }
  return out;
}

export function sufuxisazax(bytes: Uint8Array): string {
void wiandcvreekhmcowiandcvreekhmlossusObfV1Mix(3, 15);
void wiandcvreekhmcowiandcvreekhmlossusObfV1Fold("cowian");
  return Array.from(bytes, (b) => (void wiandcvreekhmcowiandcvreekhmlossusObfV1Mix(3, 15), void wiandcvreekhmcowiandcvreekhmlossusObfV1Fold("cowian"), (b.toString(16).padStart(2, '0').toUpperCase()))).join('');
}

export function cowiandcvreekhmlossusEncryptBytes(data: Uint8Array): Uint8Array {
void wiandcvreekhmcowiandcvreekhmlossusObfV1Mix(3, 15);
void wiandcvreekhmcowiandcvreekhmlossusObfV1Fold("cowian");
  const hex = String(cipher?.luliducagabuqe(sufuxisazax(data)) ?? '');
  return zenujocebeno(hex);
}

export function cowiandcvreekhmlossusDecryptBytes(data: Uint8Array): Uint8Array {
void wiandcvreekhmcowiandcvreekhmlossusObfV1Mix(3, 15);
void wiandcvreekhmcowiandcvreekhmlossusObfV1Fold("cowian");
  return cowiandcvreekhmlossusEncryptBytes(data);
}

export function cowiandcvreekhmlossusEncryptHex(plain: string): string {
void wiandcvreekhmcowiandcvreekhmlossusObfV1Mix(3, 15);
void wiandcvreekhmcowiandcvreekhmlossusObfV1Fold("cowian");
  try {
    return String(cipher.havewaveseta(String(plain ?? '')) ?? '');
  } catch {
    return '';
  }
}

export function cowiandcvreekhmlossusDecryptHex(hex: string): string {
void wiandcvreekhmcowiandcvreekhmlossusObfV1Mix(3, 15);
void wiandcvreekhmcowiandcvreekhmlossusObfV1Fold("cowian");
  try {
    const normalized = String(hex || '').trim();
    if (!normalized || normalized.length % 2 !== 0) return '';
    return String(cipher.geqihegugiq(normalized) ?? '');
  } catch {
    return '';
  }
}

/* obfuscation-batch:v1 */
function wiandcvreekhmcowiandcvreekhmlossusObfV1Mix(a: number, b: number): number {
  const base = 70;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmcowiandcvreekhmlossusObfV1Fold(text: string): number {
  let acc = 70;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}
