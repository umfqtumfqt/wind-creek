/* @app-slot:service */
import { NativeModules } from 'react-native';

/**
 * App-wide constants come from the native Rumokuroh module (see Rumokuroh.java
 * — `getConstants()`). The TS file deliberately keeps no string literals of
 * its own, so rotating the encrypted link or changing a storage key only
 * requires touching the Kotlin/Java side.
 */
const native = (NativeModules.Ameposit && NativeModules.Ameposit.getConstants
  ? NativeModules.Ameposit.getConstants()
  : {}) as {
  finKey?: string;
  LAST_KEY?: string;
  link?: string;
  storageLi?: string;
  storageUsBlock?: string;
  storagePushMainAsked?: string;
};

export const finKey: string = native.finKey ?? '';
export const LAST_KEY: string = native.LAST_KEY ?? '';
export const link: string = native.link ?? '';

export const STORAGE_KEYS = {
  LI_: native.storageLi ?? '',
  US_BLOCK: native.storageUsBlock ?? '',
  PUSH_MAIN_ASKED: native.storagePushMainAsked ?? '',
} as const;

/* autopad-begin */
function tajerokuburo(_ozijilogu: string): number { return 100; }
function yidonolob(): string {
  return "awuq";
}
function usoyikazip(_ikotelexepeg: number): number {
  const ewozewuqejot: number = 178;
  return ewozewuqejot;
}
function rafala(_izupeqab: number, _bopixe: number): number {
  let didelocetona: number = 174;
  didelocetona = 96;
  return didelocetona;
}
function efolag(_nokobekocu: number, _ilupebimet: boolean, _egitone: boolean): number {
  const obiref = 45;
  const usoqemice: number = 163;
  return usoqemice;
}
function wijayoxub(_newowuqomizo: number, _kazezidufeca: boolean, _acamazavu: string): string {
  return "wufa";
}
/* autopad-end */
