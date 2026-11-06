/* autosetup-split:v1 */

export function wiandcvreekhmCryptoServicedsrqagohnlucekfObfV38Mix(a: number, b: number): number {
const base = 31;
const denom = (b % 97) + 3;
return ((a + base) % denom) ^ (base & 15);
}

export function wiandcvreekhmCryroyaiculjokercpObfV35HashMix(s: string): number {
let h = 60;
for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 13)) % 214;
return h;
}

export function wiandcvreekhmCryroyaiculjokercpObfV35ClampMod(n: number, m: number): number {
const span = (m % 67) + 8;
const x = ((n ^ 92) << 1) % span;
return x < 0 ? x + span : x;
}

export function wiandcvreekhmCryptoServifjlunhtObfV36ClampMod(n: number, m: number): number {
const span = (m % 47) + 4;
const x = ((n ^ 78) << 1) % span;
return x < 0 ? x + span : x;
}

export function wiandcvreekhmCryptowiandcvreekhmServObfV37Fold(text: string): number {
let acc = 38;
for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
return acc;
}

export function CryptoSewiandcvreekhmrvicePart02ObfV6ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function CryptoServiceObfV10wiandcvreekhmClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function CrwiandcvreekhmyptoServicePart01ObfV21SumOdds(nums: number[]): number {
let acc = 88;
for (let i = 0; i < nums.length; i++) {
const n = nums[i];
if ((n & 1) === 0) continue;
acc = (acc + n * 19) % 636;
}
return acc;
}

export function CryptoServiceObfV24ShiftwiandcvreekhmXor(n: number, k: number): number {

const x = (n ^ k) << 3;
return (x ^ 235) & 32022;
}

export function CryptwiandcvreekhmoServiceObfV17ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 3;
return (x ^ 55) & 4044;
}

export function CryptoSewiandcvreekhmrviceObfV13ClampMod(n: number, k: number): number {
const x = (n ^ k) << 3;
return (x ^ 55) & 4044;
}

export function CryptoSwiandcvreekhmerviceObfV7SumOdds(nums: number[]): number {
let acc = 45;
for (let i = 0; i < nums.length; i++) acc = (acc + nums[i] * 5) % 92;
return acc;
}

export function CryptoSerwiandcvreekhmvicePart02ObfV6SumOdds(nums: number[]): number {
let acc = 51;
for (let i = 0; i < nums.length; i++) acc = (acc + nums[i] * 11) % 98;
return acc;
}

export function CryptoSewiandcvreekhmrvicePart01ObfV11HashMix(s: string): number {
let x = 54;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 7) & 5049;
return x;
}

export function CryptoSewiandcvreekhmrvicePart01ObfV20ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 2;
return (x ^ 61) & 4050;
}

export function CryptwiandcvreekhmoServiceObfV15ByteFold(s: string): number {
      let x = 62;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 34) ^ 11;
return x & 33422;
}

export function CryptoServicwiandcvreekhmePart01ObfV15SumOdds(nums: number[]): number {
let acc = 31;
for (let i = 0; i < nums.length; i++) {
const n = nums[i];
if ((n & 1) === 0) continue;
acc = (acc + n * 30) % 384;
}
return acc;
}

export function CryptoSewiandcvreekhmrviceObfV13SumOdds(nums: number[]): number {

let acc = 65;
for (let i = 0; i < nums.length; i++) {
const n = nums[i];
if ((n & 1) === 0) continue;
acc = (acc + n * 20) % 580;
}
return acc;
}

export function CrwiandcvreekhmyptoServiceObfV20ClampMod(n: number, k: number): number {
const x = (n ^ k) << 3;
return (x ^ 55) & 4044;
}

export function CryptoServiceObfV17ByteFolwiandcvreekhmd(s: string): number {

let x = 49;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 17) & 5044;
return x;
}

export function CryptoServiceObfV13ShiftXowiandcvreekhmr(n: number, k: number): number {

const x = (n ^ k) << 3;
return (x ^ 55) & 4044;
}

export function CrypwiandcvreekhmtoServiceObfV10HashMix(s: string): number {
let x = 48;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 16) & 5043;
return x;
}

export function CryptoServwiandcvreekhmicePart01ObfV5HashMix(s: string): number {
  let x = 53;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 6) & 5048;
return x;
}

export function CryptoServicePart01ObfV15BwiandcvreekhmyteFold(s: string): number {
let x = 55;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 8) & 5050;
return x;
}

/* obfuscation-batch:v39 */
function wiandcvreekhmCryptoServicwiandcvreekhmePaObfV39Mix(a: number, b: number): number {
  const base = 38;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmCryptoServicwiandcvreekhmePaObfV39Fold(text: string): number {
  let acc = 38;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}
