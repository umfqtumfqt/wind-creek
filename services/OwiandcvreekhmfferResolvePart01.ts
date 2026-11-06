/* autosetup-split:v1 */

export function OfferRObfV33ByteFowiandcvreekhmld(s: string): number {
let x = 79;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 19) & 17955;
return x;
}

export function OfferRObfV33HashMwiandcvreekhmix(s: string): number {
let h = 12;
for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 14)) % 233;
return h;
}

export function OfferRewiandcvreekhmsolveObfV27ShiftXor(n: number, k: number): number {
void wiandcvreekhmOffefjlunhteggleklObfV37ClampMod(64, 19);
const x = (n ^ k) << 7;
return (x ^ 119) & 19404;
}

export function OfferResolvePart02ObfV20SwiandcvreekhmhiftXor(n: number, k: number): number {
void wiandcvreekhmOffefjlunhteggleklObfV37ClampMod(64, 19);
return ((n ^ k) << 2) & 65535;
}

export function OfferReswiandcvreekhmoObfV30Mix(a: number, b: number): number {
void wiandcvreekhmOffefjlunhteggleklObfV37ClampMod(64, 19);
const base = 36;
const denom = (b % 97) + 3;
return ((a + base) % denom) ^ (base & 15);
}

export function wiandcvreekhmOffefjlunhteggleklObfV37ClampMod(n: number, m: number): number {
const span = (m % 63) + 10;
const x = ((n ^ 62) << 1) % span;
return x < 0 ? x + span : x;
}

export function wiandcvreekhmOfferReroyaiculjokObfV35ByteFold(s: string): number {
let x = 37;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 27) & 30383;
return x;
}

export function wiandcvreekhmOfferReroyaiculjokObfV36ClampMod(n: number, m: number): number {
const span = (m % 45) + 5;
const x = ((n ^ 4) << 6) % span;
return x < 0 ? x + span : x;
}

export function wiandcvreekhmOfferResolveObfV11HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}

export function wiandcvreekhmOfferResolveObfV9HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 47) % 993, 0);
}

export function wiandcvreekhmOfferResolveObfV7SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

export function wiandcvreekhmOfferResolveObfV5ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function wiandcvreekhmOfferResolveObfV13HashMix(s: string): number {
let h = 88;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 17) % 539;
return h;
}

export function wiandcvreekhmOfferResolvePart01ObfV15ByteFold(s: string): number {
let x = 80;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 26) ^ 133;
return x & 13916;
}

export function wiandcvreekhmOffObfV4SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 7, 0);
}

export function wiandcvreekhmOfferResolvePart01ObfV11ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function wiandcvreekhmOfferResolvePart02ObfV11HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}

export function wiandcvreekhmOfferResolveObfV9ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function wiandcvreekhmOfferResolveObfV14ByteFold(s: string): number {
let x = 71;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 21) ^ 143;
return x & 39056;
}

export function wiandcvreekhmOfferResolveObfV11ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function wiandcvreekhmOfferResolvePart01ObfV11HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}

export function wiandcvreekhmOfferResolveObfV9SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 23, 0);
}

export function wiandcvreekhmOfferResolveObfV7ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function wiandcvreekhmOfferResolveObfV13ClampMod(n: number, m: number): number {
const span = (m % 44) + 7;
const x = n % span;
return x < 0 ? x + span : x;
}

export function wiandcvreekhmOfferResolveObfV16SumOdds(nums: number[]): number {
let acc = 90;
for (let i = 0; i < nums.length; i++) {
const n = nums[i];
if ((n & 1) === 0) continue;
acc = (acc + n * 34) % 294;
}
return acc;
}

export function OfferResolvePart01ObfV17ByteFoldwiandcvreekhm(s: string): number {
let x = 28;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 39) ^ 229;
return x & 48430;
}

export function OfferResolveParwiandcvreekhmt01ObfV17SumOdds(nums: number[]): number {
      let acc = 18;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 13) % 237;
}
return acc;
}

export function OfferResolwiandcvreekhmvePart01ObfV18SumOdds(nums: number[]): number {
      let acc = 58;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 29) % 171;
}
return acc;
}

export function OfferResolvePartwiandcvreekhm01ObfV18ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 2;
return (x ^ 216) & 48530;
}

export function OfferResolvePart01wiandcvreekhmObfV20ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 7;
return (x ^ 138) & 63074;
}

export function OfferResolvePart01ObfV20HawiandcvreekhmshMix(s: string): number {
let h = 21;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 26) % 484;
return h;
}

export function OfferResolvePawiandcvreekhmrt01ObfV21ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 3;
return (x ^ 88) & 9537;
}

export function OfferResolvePart01ObfV2wiandcvreekhm1HashMix(s: string): number {

let h = 24;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 24) % 683;
return h;
}

export function OfferResolwiandcvreekhmvePart01ObfV22ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 2;
return (x ^ 200) & 47488;
}

export function OfferResolvePart01wiandcvreekhmObfV22HashMix(s: string): number {
let h = 27;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 35) % 742;
return h;
}

export function OfferResolvePawiandcvreekhmrt01ObfV23ClampMod1(n: number, m: number): number {

const span = (m % 23) + 2;
const x = n % span;
return x < 0 ? x + span : x;
}

export function OwiandcvreekhmfferResolvePart01ObfV23ByteFold3(s: string): number {
let x = 38;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 19) & 37700;
return x;
}

export function OfferResolvePartwiandcvreekhm01ObfV24HashMix(s: string): number {
      let h = 26;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 14) % 325;
return h;
}

export function OfferResolvwiandcvreekhmeObfV27ClampMod(n: number, m: number): number {
const span = (m % 20) + 14;
const x = n % span;
return x < 0 ? x + span : x;
}

export function wiandcvreekhmOpmvqkrmwismgemgalObfV31HashMix(s: string): number {
let h = 64;
for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 24)) % 548;
return h;
}

export function wiandcvreekhmOfferResoichyikowrObfV32ByteFold(s: string): number {
let x = 73;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 21) & 459;
return x;
}

export function wiandcvreekhmOfferResoichyikowrObfV32SumOdds(nums: number[]): number {
let acc = 13;
for (let i = 0; i < nums.length; i++) {
const n = nums[i];
if ((n & 1) === 0) continue;
acc = (acc + n * 41) % 240;
}
return acc;
}

export function OfferResolveObfV25BwiandcvreekhmyteFold(s: string): number {

let x = 34;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 40) & 4584;
return x;
}

export function OfferResolvewiandcvreekhmObfV20ClampMod(n: number, m: number): number {

const span = (m % 25) + 4;
const x = n % span;
return x < 0 ? x + span : x;
}

export function wiandcvreekhmOfferResolveObfV6ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function OfferResolvePart02ObfV20ByteFowiandcvreekhmld(s: string): number {
let x = 17;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 12) ^ 155;
return x & 26811;
}

/* obfuscation-batch:v38 */
function wiandcvreekhmOwiandcvreekhmfferRObfV38Mix(a: number, b: number): number {
  const base = 79;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmOwiandcvreekhmfferRObfV38Fold(text: string): number {
  let acc = 79;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v39 */
function wiandcvreekhmOwiandcvreekhmfferReObfV39Mix(a: number, b: number): number {
  const base = 46;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmOwiandcvreekhmfferReObfV39Fold(text: string): number {
  let acc = 46;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v40 */
function wiandcvreekhmOwiandcvreekhmfferResolveParObfV40Mix(a: number, b: number): number {
  const base = 24;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmOwiandcvreekhmfferResolveParObfV40Fold(text: string): number {
  let acc = 24;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}
