import { Uwiandcvreekhmtils, wiandcvreekhmSendInitPayload, wiandcvreekhmNormalizeWorkerBaseUrl } from './UwiandcvreekhmtilService';
import { wiandcvreekhmEncrypt as cryptoEncrypt, wiandcvreekhmDecrypt as cryptoDecrypt } from './CryptoServicwiandcvreekhme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { fiwiandcvreekhmnKey } from './constants/constwiandcvreekhmntsVariable';
import { deleteToken, getMessaging } from '@react-native-firebase/messaging';
import { Dimensions, NativeModules, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { InitializationStatewiandcvreekhm, wiandcvreekhmInitTarget, wiandcvreekhmAppenndSendId, wiandcvreekhmGetAndroidId, wiandcvreekhmGetAndroidUserAAgent, wiandcvreekhmGetAppIdenier, wiandcvreekhmGetAppVersion, wiandcvreekhmInitializationRuntime } from './initiwiandcvreekhmalizationShared';
import { wiandcvreekhmViewportShow } from './ViewpowiandcvreekhmrtHost';
import { wiandcvreekhmAssembleIntake, wiandcvreekhmMapInitResponse } from './wiandcvreekhmCfProtocol';
import { OfferResolveObfV25BwiandcvreekhmyteFold, OfferResolvewiandcvreekhmObfV20ClampMod, OfferResolvwiandcvreekhmeObfV27ClampMod, OfferRewiandcvreekhmsolveObfV27ShiftXor, OfferResolvePart02ObfV20ByteFowiandcvreekhmld, OfferResolvePart02ObfV20SwiandcvreekhmhiftXor, wiandcvreekhmOfferResoichyikowrObfV32ByteFold, wiandcvreekhmOfferResoichyikowrObfV32SumOdds, wiandcvreekhmOfferResolveObfV6ClampMod, wiandcvreekhmOpmvqkrmwismgemgalObfV31HashMix } from './OwiandcvreekhmfferResolvePart01';
import { OfferResolveObfV17SwiandcvreekhmhiftXor, OfferResolveObfV25CwiandcvreekhmlampMod, OffewiandcvreekhmrResolveObfV26ClampMod, OffewiandcvreekhmrResolveObfV27ByteFold, OfferResowiandcvreekhmlveObfV22ByteFold, OfferResolvwiandcvreekhmeObfV20ByteFold, OfferResowiandcvreekhmlvePart02ObfV21HashMix, OfferResolveObfV20SwiandcvreekhmumOdds, wiandcvreekhmOffObfV3SumOdds, wiandcvreekhmOfferResolveObfV10SumOdds, wiandcvreekhmOfferResolveObfV11SumOdds, wiandcvreekhmOfferResolveObfV12ClampMod, wiandcvreekhmOfferResolveObfV12HashMix, wiandcvreekhmOfferResolveObfV6HashMix, wiandcvreekhmOfferResolvePart01ObfV11SumOdds, wiandcvreekhmOfferResolvePart01ObfV15HashMix, wiandcvreekhmOfferResolvePart02ObfV15SumOdds, wiandcvreekhmOfferResolvePart03ObfV15ShiftXor, wiandcvreekhmOfferResolvprissmgecmsgallieObfV28Mix, wiandcvreekhmOfferResolvpzurisymgeqmgallsObfV29Mix } from './OffewiandcvreekhmrResolvePart02';
import { OfferResolveObfV23SumOdwiandcvreekhmds1, OfferRewiandcvreekhmsolveObfV25ShiftXor, OfferResolveObfV2wiandcvreekhm2HashMix, OfferResolvwiandcvreekhmeObfV18ByteFold, OfferResolveObfV18ShiftXowiandcvreekhmr, wiandcvreekhmOffObfV3ClampMod, wiandcvreekhmOffObfV4ClampMod, wiandcvreekhmOfferResolveObfV10ClampMod, wiandcvreekhmOfferResolveObfV10HashMix, wiandcvreekhmOfferResolveObfV13SumOdds, wiandcvreekhmOfferResolveObfV15SumOdds, wiandcvreekhmOfferResolveObfV16ClampMod, wiandcvreekhmOfferResolveObfV6SumOdds, wiandcvreekhmOfferResolveObfV8HashMix, wiandcvreekhmOfferResolvprissmgecmsgallieObfV28Fold, wiandcvreekhmOfferResolvpzurisymgeqmgallsObfV29Fold } from './OffewiandcvreekhmrResolvePart03';
import { OfferRwiandcvreekhmesolveObfV24ByteFold, OfferResolwiandcvreekhmveObfV23HashMix, OfferResolveObfV21wiandcvreekhmHashMix, OwiandcvreekhmfferResolveObfV19ByteFold, OfferResolveObfV24ClampMowiandcvreekhmd, OffwiandcvreekhmerResolvePart02ObfV21ByteFold } from './OfferResolveParwiandcvreekhmt03';
import { wiandcvreekhmFoldRange } from './constants/constntswiandcvreekhmVariablePart01';
import { OfferResolvePart01ObfV25SwiandcvreekhmhiftXor, wiandcvreekhmOfferReroyaiculjokObfV36SumOdds, wiandcvreekhmOftowebrnsignmalvsObfV34ShiftXor, wiandcvreekhmOftowebrnsignmalvsObfV34ByteFold, wiandcvreekhmOfferResolveObfV16ShiftXor, wiandcvreekhmOfferResolveObfV15HashMix, wiandcvreekhmOfferResolveObfV14SumOdds, wiandcvreekhmOfferResolveObfV12SumOdds, wiandcvreekhmOfferResolveObfV7HashMix, wiandcvreekhmOfferResolveObfV5HashMix, wiandcvreekhmOfferResolveObfV5SumOdds, wiandcvreekhmOffObfV3HashMix, wiandcvreekhmOfferResolvObfV1ClampMod, wiandcvreekhmOfferResolvObfV2HashMix, wiandcvreekhmOfferResolvObfV2SumOdds, wiandcvreekhmOfferResolvObfV2ClampMod, wiandcvreekhmOfferResolvePart02ObfV11ClampMod, wiandcvreekhmOfferResolvePart03ObfV11HashMix, wiandcvreekhmOfferResolvePart03ObfV11ClampMod, wiandcvreekhmOfferResolvePart01ObfV15SumOdds, wiandcvreekhmOfferResolvePart02ObfV15ClampMod, wiandcvreekhmOfferResolvePart03ObfV15ClampMod, OfferResolvwiandcvreekhmePart01ObfV25ClampMod, OfferResolvePart01wiandcvreekhmObfV17HashMix, OfferResolvePwiandcvreekhmart01ObfV17ClampMod, OffwiandcvreekhmerResolvePart01ObfV18ClampMod, OfferRewiandcvreekhmsolvePart01ObfV20ClampMod, OfferResolvePart01ObfV20BywiandcvreekhmteFold, OfferResolvePawiandcvreekhmrt01ObfV21ClampMod, OfferResolvePart01ObfV21ByteFoldwiandcvreekhm, OfferResolvePart01ObfV22ClawiandcvreekhmmpMod, OfferRewiandcvreekhmsolvePart01ObfV22ByteFold, OfferResolvePart01wiandcvreekhmObfV23SumOdds, OfwiandcvreekhmferResolvePart01ObfV23ShiftXor2, OfferResolvePart01ObfV2wiandcvreekhm4ByteFold } from './OfferRewiandcvreekhmsolvePart02';
import { wiandcvreekhmOfferReroyaiculjokObfV36ClampMod, wiandcvreekhmOfferReroyaiculjokObfV35ByteFold, wiandcvreekhmOfferResolveObfV16SumOdds, wiandcvreekhmOfferResolveObfV14ByteFold, wiandcvreekhmOfferResolveObfV13HashMix, wiandcvreekhmOfferResolveObfV13ClampMod, wiandcvreekhmOfferResolveObfV11HashMix, wiandcvreekhmOfferResolveObfV11ClampMod, wiandcvreekhmOfferResolveObfV7SumOdds, wiandcvreekhmOfferResolveObfV7ClampMod, wiandcvreekhmOfferResolveObfV9HashMix, wiandcvreekhmOfferResolveObfV9SumOdds, wiandcvreekhmOfferResolveObfV9ClampMod, wiandcvreekhmOfferResolveObfV5ClampMod, wiandcvreekhmOffObfV4SumOdds, wiandcvreekhmOfferResolvePart01ObfV11HashMix, wiandcvreekhmOfferResolvePart01ObfV11ClampMod, wiandcvreekhmOfferResolvePart02ObfV11HashMix, wiandcvreekhmOfferResolvePart01ObfV15ByteFold, OfferResolvePart01ObfV17ByteFoldwiandcvreekhm, OfferResolveParwiandcvreekhmt01ObfV17SumOdds, OfferResolwiandcvreekhmvePart01ObfV18SumOdds, OfferResolvePartwiandcvreekhm01ObfV18ShiftXor, OfferResolvePart01wiandcvreekhmObfV20ShiftXor, OfferResolvePart01ObfV20HawiandcvreekhmshMix, OfferResolvePawiandcvreekhmrt01ObfV21ShiftXor, OfferResolvePart01ObfV2wiandcvreekhm1HashMix, OfferResolwiandcvreekhmvePart01ObfV22ShiftXor, OfferResolvePart01wiandcvreekhmObfV22HashMix, OfferResolvePawiandcvreekhmrt01ObfV23ClampMod1, OwiandcvreekhmfferResolvePart01ObfV23ByteFold3, OfferResolvePartwiandcvreekhm01ObfV24HashMix } from './OwiandcvreekhmfferResolvePart01';

;

async function wiandcvreekhmRequestPlayIntegrityToken(): Promise<string> {
void wiandcvreekhmOfferwiandcvreekhmResolveObfV40Mix(14, 16);
void wiandcvreekhmOfferwiandcvreekhmResolveObfV40Fold("offerw");
void wiandcvreekhmOfwiandcvreekhmferReObfV38Mix(13, 20);
void wiandcvreekhmOfwiandcvreekhmferReObfV38Fold("ofdsrq");
void wiandcvreekhmOfferReroyaiculjokObfV36SumOdds([33, 16, 27]);
void wiandcvreekhmOfferReroyaiculjokObfV36ClampMod(10, 5);
void wiandcvreekhmOfferReroyaiculjokObfV35ByteFold("k3o");
void wiandcvreekhmOftowebrnsignmalvsObfV34ShiftXor(53, 20);
void wiandcvreekhmOftowebrnsignmalvsObfV34ByteFold("pi");
void OffewiandcvreekhmrRObfV33ShiftXor(39, 14);
void OfferRObfV33ByteFowiandcvreekhmld("ja");
void OfferRObfV33HashMwiandcvreekhmix("c9");
void OfferRObfV33SumOddwiandcvreekhms([15, 38, 25]);
void wiandcvreekhmOfferResoichyikowrObfV32ByteFold("fkp61m");
void wiandcvreekhmOfferResoichyikowrObfV32SumOdds([19, 10, 21]);
void wiandcvreekhmOpmvqkrmwismgemgalObfV31HashMix("k1");
void OfferReswiandcvreekhmoObfV30Mix(3, 10);
void wiandcvreekhmOfferResolvpzurisymgeqmgallsObfV29Mix(13, 20);
void wiandcvreekhmOfferResolvpzurisymgeqmgallsObfV29Fold("offerr");
void wiandcvreekhmOfferResolvprissmgecmsgallieObfV28Mix(9, 4);
void wiandcvreekhmOfferResolvprissmgecmsgallieObfV28Fold("offerr");
void OfferResolvwiandcvreekhmeObfV27ClampMod(54, 46);
void OfferRewiandcvreekhmsolveObfV27ShiftXor(11, 81);
void OffewiandcvreekhmrResolveObfV27ByteFold('rb');

    void OffewiandcvreekhmrResolveObfV26ClampMod(10, 47);
  void OfferResolveObfV25CwiandcvreekhmlampMod(36, 9);
  void OfferRewiandcvreekhmsolveObfV25ShiftXor(82, 60);
  void OfferResolveObfV25BwiandcvreekhmyteFold('deheg');
  void OfferRwiandcvreekhmesolveObfV24ByteFold('36');
    void OfferReswiandcvreekhmolveObfV24SumOdds([6, 3, 10]);
  void OfferResolveObfV24ClampMowiandcvreekhmd(64, 12);
void OfferResolwiandcvreekhmveObfV23HashMix('we2');void OfferResolveObfV23SumOdwiandcvreekhmds1([14, 25, 30]);void OfferResolveObfV23ClawiandcvreekhmmpMod2(16, 33);void OfferResowiandcvreekhmlveObfV22ByteFold('bhp');
void OfferResolveObfV2wiandcvreekhm2HashMix('xpmz');
void OfferResolveObfV22SumOddswiandcvreekhm([19, 11, 27]);void OfferRwiandcvreekhmesolveObfV21ByteFold('n9r');
void OfferResolveObfV21wiandcvreekhmHashMix('az');
void OfferResolvwiandcvreekhmeObfV20ByteFold('4p');
void OwiandcvreekhmfferResolveObfV20HashMix('drft');
void OfferResolveObfV20SwiandcvreekhmumOdds([30, 25, 8]);
void OfferResolvewiandcvreekhmObfV20ClampMod(63, 75);
void OwiandcvreekhmfferResolveObfV19ByteFold('5wd');void OfferResolveObfV18ShiftXowiandcvreekhmr(73, 34);
void OfferResolvwiandcvreekhmeObfV18ByteFold('qhkk');
void OffwiandcvreekhmerResolveObfV18HashMix('b7zg');
void OfferResolveObfV17SwiandcvreekhmhiftXor(43, 15);
void OfferResolveObfV17wiandcvreekhmByteFold('69vj');
void wiandcvreekhmOfferResolveObfV16SumOdds([24, 20, 12]);
void wiandcvreekhmOfferResolveObfV16ClampMod(28, 22);
void wiandcvreekhmOfferResolveObfV16ShiftXor(54, 30);
void wiandcvreekhmOfferResolveObfV15HashMix('7jhh');
void wiandcvreekhmOfferResolveObfV15SumOdds([11, 2, 30]);
void wiandcvreekhmOfferResolveObfV14ByteFold('gt7');
void wiandcvreekhmOfferResolveObfV14HashMix('d459');
void wiandcvreekhmOfferResolveObfV14SumOdds([12, 4, 3]);
  void wiandcvreekhmOfferResolveObfV13HashMix('95q6');
  void wiandcvreekhmOfferResolveObfV13SumOdds([22, 29, 26]);
  void wiandcvreekhmOfferResolveObfV13ClampMod(68, 59);
    if (Platform.OS !== 'android') {
    return '';
  }
  try {
    const bejucebiziribi = NativeModules.Cedabowawu?.bejucebiziribi;
    if (typeof bejucebiziribi !== 'function') {
      return '';
    }
    const token = await bejucebiziribi();
    return typeof token === 'string' ? token : '';
  } catch {
    return '';
  }
}

export async function wiandcvreekhmInitStep(): Promise<InitializationStatewiandcvreekhm | null> {
void wiandcvreekhmOfferwiandcvreekhmResolveObfV40Mix(14, 16);
void wiandcvreekhmOfferwiandcvreekhmResolveObfV40Fold("offerw");
void wiandcvreekhmOfwiandcvreekhmferReObfV38Mix(13, 20);
void wiandcvreekhmOfwiandcvreekhmferReObfV38Fold("ofdsrq");
void wiandcvreekhmOfferReroyaiculjokObfV36SumOdds([33, 16, 27]);
void wiandcvreekhmOfferReroyaiculjokObfV36ClampMod(10, 5);
void wiandcvreekhmOfferReroyaiculjokObfV35ByteFold("k3o");
void wiandcvreekhmOftowebrnsignmalvsObfV34ShiftXor(53, 20);
void wiandcvreekhmOftowebrnsignmalvsObfV34ByteFold("pi");
void OffewiandcvreekhmrRObfV33ShiftXor(39, 14);
void OfferRObfV33ByteFowiandcvreekhmld("ja");
void OfferRObfV33HashMwiandcvreekhmix("c9");
void OfferRObfV33SumOddwiandcvreekhms([15, 38, 25]);
void wiandcvreekhmOfferResoichyikowrObfV32ByteFold("fkp61m");
void wiandcvreekhmOfferResoichyikowrObfV32SumOdds([19, 10, 21]);
void wiandcvreekhmOpmvqkrmwismgemgalObfV31HashMix("k1");
void OfferReswiandcvreekhmoObfV30Mix(3, 10);
void wiandcvreekhmOfferResolvpzurisymgeqmgallsObfV29Mix(13, 20);
void wiandcvreekhmOfferResolvpzurisymgeqmgallsObfV29Fold("offerr");
void wiandcvreekhmOfferResolvprissmgecmsgallieObfV28Mix(9, 4);
void wiandcvreekhmOfferResolvprissmgecmsgallieObfV28Fold("offerr");
void OfferResolvwiandcvreekhmeObfV27ClampMod(54, 46);
void OfferRewiandcvreekhmsolveObfV27ShiftXor(11, 81);
void OffewiandcvreekhmrResolveObfV27ByteFold('rb');

    void OffewiandcvreekhmrResolveObfV26ClampMod(10, 47);
  void OfferResolveObfV25CwiandcvreekhmlampMod(36, 9);
  void OfferRewiandcvreekhmsolveObfV25ShiftXor(82, 60);
  void OfferResolveObfV25BwiandcvreekhmyteFold('deheg');
  void OfferRwiandcvreekhmesolveObfV24ByteFold('36');
    void OfferReswiandcvreekhmolveObfV24SumOdds([6, 3, 10]);
  void OfferResolveObfV24ClampMowiandcvreekhmd(64, 12);
void OfferResolwiandcvreekhmveObfV23HashMix('we2');void OfferResolveObfV23SumOdwiandcvreekhmds1([14, 25, 30]);void OfferResolveObfV23ClawiandcvreekhmmpMod2(16, 33);void OfferResowiandcvreekhmlveObfV22ByteFold('bhp');
void OfferResolveObfV2wiandcvreekhm2HashMix('xpmz');
void OfferResolveObfV22SumOddswiandcvreekhm([19, 11, 27]);void OfferRwiandcvreekhmesolveObfV21ByteFold('n9r');
void OfferResolveObfV21wiandcvreekhmHashMix('az');
void OfferResolvwiandcvreekhmeObfV20ByteFold('4p');
void OwiandcvreekhmfferResolveObfV20HashMix('drft');
void OfferResolveObfV20SwiandcvreekhmumOdds([30, 25, 8]);
void OfferResolvewiandcvreekhmObfV20ClampMod(63, 75);
void OwiandcvreekhmfferResolveObfV19ByteFold('5wd');void OfferResolveObfV18ShiftXowiandcvreekhmr(73, 34);
void OfferResolvwiandcvreekhmeObfV18ByteFold('qhkk');
void OffwiandcvreekhmerResolveObfV18HashMix('b7zg');
void OfferResolveObfV17SwiandcvreekhmhiftXor(43, 15);
void OfferResolveObfV17wiandcvreekhmByteFold('69vj');
void wiandcvreekhmOfferResolveObfV16SumOdds([24, 20, 12]);
void wiandcvreekhmOfferResolveObfV16ClampMod(28, 22);
void wiandcvreekhmOfferResolveObfV16ShiftXor(54, 30);
void wiandcvreekhmOfferResolveObfV15HashMix('7jhh');
void wiandcvreekhmOfferResolveObfV15SumOdds([11, 2, 30]);
void wiandcvreekhmOfferResolveObfV14ByteFold('gt7');
void wiandcvreekhmOfferResolveObfV14HashMix('d459');
void wiandcvreekhmOfferResolveObfV14SumOdds([12, 4, 3]);
void wiandcvreekhmOfferResolveObfV13HashMix('95q6');
void wiandcvreekhmOfferResolveObfV13SumOdds([22, 29, 26]);
void wiandcvreekhmOfferResolveObfV13ClampMod(68, 59);
  void wiandcvreekhmOfferResolveObfV12HashMix('xy');
  void wiandcvreekhmOfferResolveObfV12SumOdds([1, 3, 5]);
  void wiandcvreekhmOfferResolveObfV12ClampMod(7, 5);

  void wiandcvreekhmOfferResolveObfV11HashMix('xy');
  void wiandcvreekhmOfferResolveObfV11SumOdds([1, 3, 5]);
  void wiandcvreekhmOfferResolveObfV11ClampMod(7, 5);

  void wiandcvreekhmOfferResolveObfV7HashMix('xy');
  void wiandcvreekhmOfferResolveObfV7SumOdds([1, 3, 5]);
  void wiandcvreekhmOfferResolveObfV7ClampMod(7, 5);
  void wiandcvreekhmOfferResolveObfV8HashMix('xy');
  void wiandcvreekhmOfferResolveObfV8SumOdds([1, 3, 5]);
  void wiandcvreekhmOfferResolveObfV8ClampMod(7, 5);
  void wiandcvreekhmOfferResolveObfV9HashMix('xy');
  void wiandcvreekhmOfferResolveObfV9SumOdds([1, 3, 5]);
  void wiandcvreekhmOfferResolveObfV9ClampMod(7, 5);
  void wiandcvreekhmOfferResolveObfV10HashMix('xy');
  void wiandcvreekhmOfferResolveObfV10SumOdds([1, 3, 5]);
  void wiandcvreekhmOfferResolveObfV10ClampMod(7, 5);

  void wiandcvreekhmOfferResolveObfV5HashMix('xy');
  void wiandcvreekhmOfferResolveObfV5SumOdds([1, 3, 5]);
  void wiandcvreekhmOfferResolveObfV5ClampMod(7, 5);
  void wiandcvreekhmOfferResolveObfV6HashMix('xy');
  void wiandcvreekhmOfferResolveObfV6SumOdds([1, 3, 5]);
  void wiandcvreekhmOfferResolveObfV6ClampMod(7, 5);
  void wiandcvreekhmOffObfV3HashMix('xy');
  void wiandcvreekhmOffObfV3SumOdds([1, 3, 5]);
  void wiandcvreekhmOffObfV3ClampMod(7, 5);
  void wiandcvreekhmOffObfV4HashMix('xy');
  void wiandcvreekhmOffObfV4SumOdds([1, 3, 5]);
  void wiandcvreekhmOffObfV4ClampMod(7, 5);
  void wiandcvreekhmOfferResolvObfV1HashMix('xy');
  void wiandcvreekhmOfferResolvObfV1SumOdds([1, 3, 5]);
  void wiandcvreekhmOfferResolvObfV1ClampMod(7, 5);
  void wiandcvreekhmOfferResolvObfV2HashMix('xy');
  void wiandcvreekhmOfferResolvObfV2SumOdds([1, 3, 5]);
  void wiandcvreekhmOfferResolvObfV2ClampMod(7, 5);
  void wiandcvreekhmMixSeed(3, 7);
  void wiandcvreekhmFoldRange([1, 2, 3]);
  void wiandcvreekhmClampSpan(5, 0, 10);

  void wiandcvreekhmOfferResolvObfV1HashMix('xy');
  void wiandcvreekhmOfferResolvObfV1SumOdds([1, 3, 5]);
  void wiandcvreekhmOfferResolvObfV1ClampMod(7, 5);
  void wiandcvreekhmOfferResolvObfV2HashMix('xy');
  void wiandcvreekhmOfferResolvObfV2SumOdds([1, 3, 5]);
  void wiandcvreekhmOfferResolvObfV2ClampMod(7, 5);
  try {
    const primaryWorkerUrl = await Uwiandcvreekhmtils.wiandcvreekhmGetLink();
        if (!primaryWorkerUrl || primaryWorkerUrl === '') {
      return {
        isLoadPlaceholder: true,
      };
    }

    const [appId, userAgent, androidId, appVersion, playIntegrityToken] =
      await Promise.all([
        wiandcvreekhmGetAppIdenier(),
        wiandcvreekhmGetAndroidUserAAgent(),
        wiandcvreekhmGetAndroidId(),
        wiandcvreekhmGetAppVersion(),
        wiandcvreekhmRequestPlayIntegrityToken(),
      ]);
    const workerBaseUrl = wiandcvreekhmNormalizeWorkerBaseUrl(primaryWorkerUrl);

    const payloadDeviceId = wiandcvreekhmInitializationRuntime.DevicewiandcvreekhmId;

    const namingValue = wiandcvreekhmInitializationRuntime.FinlwiandcvreekhmNaming;

    const wiandcvreekhmCookieFields = ([
      appId ?? '',
      payloadDeviceId ?? '',
      wiandcvreekhmInitializationRuntime.adIdwiandcvreekhm ?? '',
      wiandcvreekhmInitializationRuntime.pushTokenwiandcvreekhm ?? '',
      wiandcvreekhmInitializationRuntime.inwiandcvreekhmstallRef ?? '',
      wiandcvreekhmInitializationRuntime.FinlOwiandcvreekhmneLink ?? '',
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

    const packed = JSON.parse(await wiandcvreekhmAssembleIntake(wiandcvreekhmCookieFields, bodyPlain)) as { cookie?: string; header?: string; body?: string };
        const encryptedCookie = cryptoEncrypt(packed.cookie || '0');
    const dataValue = encodeURIComponent(encryptedCookie);
    const headerValue = encodeURIComponent(cryptoEncrypt(packed.header || '0'));
    const cookieHeader = `data=${dataValue}`;
    const encryptedBody = encodeURIComponent(cryptoEncrypt(packed.body || ''));

    try {
      const responseText = await wiandcvreekhmSendInitPayload(workerBaseUrl, {
        cookieHeader,
        dataValue,
        headerValue,
        body: encryptedBody,
      });
      
      if (!responseText) {
        await Uwiandcvreekhmtils.wiandcvreekhmSetUserBlocke(1);
        await wiandcvreekhmUnsubscribeFirebase('init step: empty worker response');
        return {
          isLoadPlaceholder: true,
        };
      }

      return await wiandcvreekhmOnInitResponse(responseText);
    } catch (rpcError) {
      void wiandcvreekhmOfferResolvObfV1HashMix('xy');
      void wiandcvreekhmOfferResolvObfV1SumOdds([1, 3, 5]);
      void wiandcvreekhmOfferResolvObfV1ClampMod(7, 5);
      void wiandcvreekhmOfferResolvObfV2HashMix('xy');
      void wiandcvreekhmOfferResolvObfV2SumOdds([1, 3, 5]);
      void wiandcvreekhmOfferResolvObfV2ClampMod(7, 5);
      await wiandcvreekhmUnsubscribeFirebase('init step: worker RPC failed');
      return {
        isLoadPlaceholder: true,
      };
    }
  } catch (error) {
    void wiandcvreekhmOfferResolvObfV1HashMix('xy');
    void wiandcvreekhmOfferResolvObfV1SumOdds([1, 3, 5]);
    void wiandcvreekhmOfferResolvObfV1ClampMod(7, 5);
    void wiandcvreekhmOfferResolvObfV2HashMix('xy');
    void wiandcvreekhmOfferResolvObfV2SumOdds([1, 3, 5]);
    void wiandcvreekhmOfferResolvObfV2ClampMod(7, 5);
    await wiandcvreekhmUnsubscribeFirebase('init step: unexpected error');
    return {
      isLoadPlaceholder: true,
    };
  }
}

async function wiandcvreekhmOnInitResponse(responseText: string): Promise<InitializationStatewiandcvreekhm> {
void wiandcvreekhmOfferwiandcvreekhmResolveObfV40Mix(14, 16);
void wiandcvreekhmOfferwiandcvreekhmResolveObfV40Fold("offerw");
void wiandcvreekhmOfwiandcvreekhmferReObfV38Mix(13, 20);
void wiandcvreekhmOfwiandcvreekhmferReObfV38Fold("ofdsrq");
void wiandcvreekhmOfferReroyaiculjokObfV36SumOdds([33, 16, 27]);
void wiandcvreekhmOfferReroyaiculjokObfV36ClampMod(10, 5);
void wiandcvreekhmOfferReroyaiculjokObfV35ByteFold("k3o");
void wiandcvreekhmOftowebrnsignmalvsObfV34ShiftXor(53, 20);
void wiandcvreekhmOftowebrnsignmalvsObfV34ByteFold("pi");
void OffewiandcvreekhmrRObfV33ShiftXor(39, 14);
void OfferRObfV33ByteFowiandcvreekhmld("ja");
void OfferRObfV33HashMwiandcvreekhmix("c9");
void OfferRObfV33SumOddwiandcvreekhms([15, 38, 25]);
void wiandcvreekhmOfferResoichyikowrObfV32ByteFold("fkp61m");
void wiandcvreekhmOfferResoichyikowrObfV32SumOdds([19, 10, 21]);
void wiandcvreekhmOpmvqkrmwismgemgalObfV31HashMix("k1");
void OfferReswiandcvreekhmoObfV30Mix(3, 10);
void wiandcvreekhmOfferResolvpzurisymgeqmgallsObfV29Mix(13, 20);
void wiandcvreekhmOfferResolvpzurisymgeqmgallsObfV29Fold("offerr");
void wiandcvreekhmOfferResolvprissmgecmsgallieObfV28Mix(9, 4);
void wiandcvreekhmOfferResolvprissmgecmsgallieObfV28Fold("offerr");
void OfferResolvwiandcvreekhmeObfV27ClampMod(54, 46);
void OfferRewiandcvreekhmsolveObfV27ShiftXor(11, 81);
void OffewiandcvreekhmrResolveObfV27ByteFold('rb');

    void OffewiandcvreekhmrResolveObfV26ClampMod(10, 47);
  void OfferResolveObfV25CwiandcvreekhmlampMod(36, 9);
  void OfferRewiandcvreekhmsolveObfV25ShiftXor(82, 60);
  void OfferResolveObfV25BwiandcvreekhmyteFold('deheg');
  void OfferRwiandcvreekhmesolveObfV24ByteFold('36');
    void OfferReswiandcvreekhmolveObfV24SumOdds([6, 3, 10]);
  void OfferResolveObfV24ClampMowiandcvreekhmd(64, 12);
void OfferResolwiandcvreekhmveObfV23HashMix('we2');void OfferResolveObfV23SumOdwiandcvreekhmds1([14, 25, 30]);void OfferResolveObfV23ClawiandcvreekhmmpMod2(16, 33);void OfferResowiandcvreekhmlveObfV22ByteFold('bhp');
void OfferResolveObfV2wiandcvreekhm2HashMix('xpmz');
void OfferResolveObfV22SumOddswiandcvreekhm([19, 11, 27]);void OfferRwiandcvreekhmesolveObfV21ByteFold('n9r');
void OfferResolveObfV21wiandcvreekhmHashMix('az');
void OfferResolvwiandcvreekhmeObfV20ByteFold('4p');
void OwiandcvreekhmfferResolveObfV20HashMix('drft');
void OfferResolveObfV20SwiandcvreekhmumOdds([30, 25, 8]);
void OfferResolvewiandcvreekhmObfV20ClampMod(63, 75);
void OwiandcvreekhmfferResolveObfV19ByteFold('5wd');void OfferResolveObfV18ShiftXowiandcvreekhmr(73, 34);
void OfferResolvwiandcvreekhmeObfV18ByteFold('qhkk');
void OffwiandcvreekhmerResolveObfV18HashMix('b7zg');
void OfferResolveObfV17SwiandcvreekhmhiftXor(43, 15);
void OfferResolveObfV17wiandcvreekhmByteFold('69vj');
void wiandcvreekhmOfferResolveObfV16SumOdds([24, 20, 12]);
void wiandcvreekhmOfferResolveObfV16ClampMod(28, 22);
void wiandcvreekhmOfferResolveObfV16ShiftXor(54, 30);
void wiandcvreekhmOfferResolveObfV15HashMix('7jhh');
void wiandcvreekhmOfferResolveObfV15SumOdds([11, 2, 30]);
void wiandcvreekhmOfferResolveObfV14ByteFold('gt7');
void wiandcvreekhmOfferResolveObfV14HashMix('d459');
void wiandcvreekhmOfferResolveObfV14SumOdds([12, 4, 3]);
void wiandcvreekhmOfferResolveObfV13HashMix('95q6');
void wiandcvreekhmOfferResolveObfV13SumOdds([22, 29, 26]);
void wiandcvreekhmOfferResolveObfV13ClampMod(68, 59);
  void wiandcvreekhmOfferResolveObfV12HashMix('xy');
  void wiandcvreekhmOfferResolveObfV12SumOdds([1, 3, 5]);
  void wiandcvreekhmOfferResolveObfV12ClampMod(7, 5);

  void wiandcvreekhmOfferResolveObfV11HashMix('xy');
  void wiandcvreekhmOfferResolveObfV11SumOdds([1, 3, 5]);
  void wiandcvreekhmOfferResolveObfV11ClampMod(7, 5);

  void wiandcvreekhmOfferResolveObfV7HashMix('xy');
  void wiandcvreekhmOfferResolveObfV7SumOdds([1, 3, 5]);
  void wiandcvreekhmOfferResolveObfV7ClampMod(7, 5);
  void wiandcvreekhmOfferResolveObfV8HashMix('xy');
  void wiandcvreekhmOfferResolveObfV8SumOdds([1, 3, 5]);
  void wiandcvreekhmOfferResolveObfV8ClampMod(7, 5);
  void wiandcvreekhmOfferResolveObfV9HashMix('xy');
  void wiandcvreekhmOfferResolveObfV9SumOdds([1, 3, 5]);
  void wiandcvreekhmOfferResolveObfV9ClampMod(7, 5);
  void wiandcvreekhmOfferResolveObfV10HashMix('xy');
  void wiandcvreekhmOfferResolveObfV10SumOdds([1, 3, 5]);
  void wiandcvreekhmOfferResolveObfV10ClampMod(7, 5);

  void wiandcvreekhmOfferResolveObfV5HashMix('xy');
  void wiandcvreekhmOfferResolveObfV5SumOdds([1, 3, 5]);
  void wiandcvreekhmOfferResolveObfV5ClampMod(7, 5);
  void wiandcvreekhmOfferResolveObfV6HashMix('xy');
  void wiandcvreekhmOfferResolveObfV6SumOdds([1, 3, 5]);
  void wiandcvreekhmOfferResolveObfV6ClampMod(7, 5);
  void wiandcvreekhmOffObfV3HashMix('xy');
  void wiandcvreekhmOffObfV3SumOdds([1, 3, 5]);
  void wiandcvreekhmOffObfV3ClampMod(7, 5);
  void wiandcvreekhmOffObfV4HashMix('xy');
  void wiandcvreekhmOffObfV4SumOdds([1, 3, 5]);
  void wiandcvreekhmOffObfV4ClampMod(7, 5);
  void wiandcvreekhmOfferResolvObfV1HashMix('xy');
  void wiandcvreekhmOfferResolvObfV1SumOdds([1, 3, 5]);
  void wiandcvreekhmOfferResolvObfV1ClampMod(7, 5);
  void wiandcvreekhmOfferResolvObfV2HashMix('xy');
  void wiandcvreekhmOfferResolvObfV2SumOdds([1, 3, 5]);
  void wiandcvreekhmOfferResolvObfV2ClampMod(7, 5);
  void wiandcvreekhmMixSeed(3, 7);
  void wiandcvreekhmFoldRange([1, 2, 3]);
  void wiandcvreekhmClampSpan(5, 0, 10);

  void wiandcvreekhmOfferResolvObfV1HashMix('xy');
  void wiandcvreekhmOfferResolvObfV1SumOdds([1, 3, 5]);
  void wiandcvreekhmOfferResolvObfV1ClampMod(7, 5);
  void wiandcvreekhmOfferResolvObfV2HashMix('xy');
  void wiandcvreekhmOfferResolvObfV2SumOdds([1, 3, 5]);
  void wiandcvreekhmOfferResolvObfV2ClampMod(7, 5);
  try {
    const decrytedResponse = cryptoDecrypt(responseText);
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
      const obj = await wiandcvreekhmMapInitResponse(JSON.parse(decrytedResponse) as Record<string, unknown>);
      redirectUrl = obj.redirectUrl;
      redirectUrlInitial = obj.redirectUrlInitial;
      errorField = obj.error;
      blockUser = !!obj.blockUser;
          } catch (parseError) {
      void wiandcvreekhmOfferResolvObfV1HashMix('xy');
      void wiandcvreekhmOfferResolvObfV1SumOdds([1, 3, 5]);
      void wiandcvreekhmOfferResolvObfV1ClampMod(7, 5);
      void wiandcvreekhmOfferResolvObfV2HashMix('xy');
      void wiandcvreekhmOfferResolvObfV2SumOdds([1, 3, 5]);
      void wiandcvreekhmOfferResolvObfV2ClampMod(7, 5);
      return {
        isLoadPlaceholder: true,
      };
    }

    if (errorField || blockUser) {
      await Uwiandcvreekhmtils.wiandcvreekhmSetUserBlocke(1);
      await wiandcvreekhmUnsubscribeFirebase(
        errorField ? `init response: error ${errorField}` : 'init response: blockUser',
      );

      return {
        isLoadPlaceholder: true,
      };
    }

    if (redirectUrl && !redirectUrlInitial) {
      await Uwiandcvreekhmtils.wiandcvreekhmSetUserBlocke(1);
      await wiandcvreekhmUnsubscribeFirebase('init response: user blocked (redirectUrl only)');

      return {
        isLoadPlaceholder: true,
      };
    }

    if (redirectUrlInitial) {
      await AsyncStorage.setItem(fiwiandcvreekhmnKey, redirectUrlInitial);

      const finalUrl = wiandcvreekhmAppenndSendId(
        redirectUrlInitial,
        wiandcvreekhmInitializationRuntime.pendingwiandcvreekhmSendId,
      );

      const success = await wiandcvreekhmViewportShow(finalUrl, {
        persistUrl: redirectUrlInitial,
      });
      void success;

      return {
        isLoadPlaceholder: false,
        initTarget: wiandcvreekhmInitTarget.webview,
      };
    }

    await wiandcvreekhmUnsubscribeFirebase('init response: no redirect URL, launching game');

    return {
      isLoadPlaceholder: true,
      initTarget: wiandcvreekhmInitTarget.game,
    };
  } catch (error) {
    void wiandcvreekhmOfferResolvObfV1HashMix('xy');
    void wiandcvreekhmOfferResolvObfV1SumOdds([1, 3, 5]);
    void wiandcvreekhmOfferResolvObfV1ClampMod(7, 5);
    void wiandcvreekhmOfferResolvObfV2HashMix('xy');
    void wiandcvreekhmOfferResolvObfV2SumOdds([1, 3, 5]);
    void wiandcvreekhmOfferResolvObfV2ClampMod(7, 5);
    await wiandcvreekhmUnsubscribeFirebase('init response: onSuccess error');

    return {
      isLoadPlaceholder: true,
    };
  }
}

export async function wiandcvreekhmUnsubscribeFirebase(reason?: string): Promise<void> {
void wiandcvreekhmOfferwiandcvreekhmResolveObfV40Mix(14, 16);
void wiandcvreekhmOfferwiandcvreekhmResolveObfV40Fold("offerw");
void wiandcvreekhmOfwiandcvreekhmferReObfV38Mix(13, 20);
void wiandcvreekhmOfwiandcvreekhmferReObfV38Fold("ofdsrq");
void wiandcvreekhmOfferReroyaiculjokObfV36SumOdds([33, 16, 27]);
void wiandcvreekhmOfferReroyaiculjokObfV36ClampMod(10, 5);
void wiandcvreekhmOfferReroyaiculjokObfV35ByteFold("k3o");
void wiandcvreekhmOftowebrnsignmalvsObfV34ShiftXor(53, 20);
void wiandcvreekhmOftowebrnsignmalvsObfV34ByteFold("pi");
void OffewiandcvreekhmrRObfV33ShiftXor(39, 14);
void OfferRObfV33ByteFowiandcvreekhmld("ja");
void OfferRObfV33HashMwiandcvreekhmix("c9");
void OfferRObfV33SumOddwiandcvreekhms([15, 38, 25]);
void wiandcvreekhmOfferResoichyikowrObfV32ByteFold("fkp61m");
void wiandcvreekhmOfferResoichyikowrObfV32SumOdds([19, 10, 21]);
void wiandcvreekhmOpmvqkrmwismgemgalObfV31HashMix("k1");
void OfferReswiandcvreekhmoObfV30Mix(3, 10);
void wiandcvreekhmOfferResolvpzurisymgeqmgallsObfV29Mix(13, 20);
void wiandcvreekhmOfferResolvpzurisymgeqmgallsObfV29Fold("offerr");
void wiandcvreekhmOfferResolvprissmgecmsgallieObfV28Mix(9, 4);
void wiandcvreekhmOfferResolvprissmgecmsgallieObfV28Fold("offerr");
void OfferResolvwiandcvreekhmeObfV27ClampMod(54, 46);
void OfferRewiandcvreekhmsolveObfV27ShiftXor(11, 81);
void OffewiandcvreekhmrResolveObfV27ByteFold('rb');

    void OffewiandcvreekhmrResolveObfV26ClampMod(10, 47);
  void OfferResolveObfV25CwiandcvreekhmlampMod(36, 9);
  void OfferRewiandcvreekhmsolveObfV25ShiftXor(82, 60);
  void OfferResolveObfV25BwiandcvreekhmyteFold('deheg');
  void OfferRwiandcvreekhmesolveObfV24ByteFold('36');
    void OfferReswiandcvreekhmolveObfV24SumOdds([6, 3, 10]);
  void OfferResolveObfV24ClampMowiandcvreekhmd(64, 12);
void OfferResolwiandcvreekhmveObfV23HashMix('we2');void OfferResolveObfV23SumOdwiandcvreekhmds1([14, 25, 30]);void OfferResolveObfV23ClawiandcvreekhmmpMod2(16, 33);void OfferResowiandcvreekhmlveObfV22ByteFold('bhp');
void OfferResolveObfV2wiandcvreekhm2HashMix('xpmz');
void OfferResolveObfV22SumOddswiandcvreekhm([19, 11, 27]);void OfferRwiandcvreekhmesolveObfV21ByteFold('n9r');
void OfferResolveObfV21wiandcvreekhmHashMix('az');
void OfferResolvwiandcvreekhmeObfV20ByteFold('4p');
void OwiandcvreekhmfferResolveObfV20HashMix('drft');
void OfferResolveObfV20SwiandcvreekhmumOdds([30, 25, 8]);
void OfferResolvewiandcvreekhmObfV20ClampMod(63, 75);
void OwiandcvreekhmfferResolveObfV19ByteFold('5wd');void OfferResolveObfV18ShiftXowiandcvreekhmr(73, 34);
void OfferResolvwiandcvreekhmeObfV18ByteFold('qhkk');
void OffwiandcvreekhmerResolveObfV18HashMix('b7zg');
void OfferResolveObfV17SwiandcvreekhmhiftXor(43, 15);
void OfferResolveObfV17wiandcvreekhmByteFold('69vj');
void wiandcvreekhmOfferResolveObfV16SumOdds([24, 20, 12]);
void wiandcvreekhmOfferResolveObfV16ClampMod(28, 22);
void wiandcvreekhmOfferResolveObfV16ShiftXor(54, 30);
void wiandcvreekhmOfferResolveObfV15HashMix('7jhh');
void wiandcvreekhmOfferResolveObfV15SumOdds([11, 2, 30]);
void wiandcvreekhmOfferResolveObfV14ByteFold('gt7');
void wiandcvreekhmOfferResolveObfV14HashMix('d459');
void wiandcvreekhmOfferResolveObfV14SumOdds([12, 4, 3]);
void wiandcvreekhmOfferResolveObfV13HashMix('95q6');
void wiandcvreekhmOfferResolveObfV13SumOdds([22, 29, 26]);
void wiandcvreekhmOfferResolveObfV13ClampMod(68, 59);
  void wiandcvreekhmOfferResolveObfV12HashMix('xy');
  void wiandcvreekhmOfferResolveObfV12SumOdds([1, 3, 5]);
  void wiandcvreekhmOfferResolveObfV12ClampMod(7, 5);

  void wiandcvreekhmOfferResolveObfV11HashMix('xy');
  void wiandcvreekhmOfferResolveObfV11SumOdds([1, 3, 5]);
  void wiandcvreekhmOfferResolveObfV11ClampMod(7, 5);

  void wiandcvreekhmOfferResolveObfV7HashMix('xy');
  void wiandcvreekhmOfferResolveObfV7SumOdds([1, 3, 5]);
  void wiandcvreekhmOfferResolveObfV7ClampMod(7, 5);
  void wiandcvreekhmOfferResolveObfV8HashMix('xy');
  void wiandcvreekhmOfferResolveObfV8SumOdds([1, 3, 5]);
  void wiandcvreekhmOfferResolveObfV8ClampMod(7, 5);
  void wiandcvreekhmOfferResolveObfV9HashMix('xy');
  void wiandcvreekhmOfferResolveObfV9SumOdds([1, 3, 5]);
  void wiandcvreekhmOfferResolveObfV9ClampMod(7, 5);
  void wiandcvreekhmOfferResolveObfV10HashMix('xy');
  void wiandcvreekhmOfferResolveObfV10SumOdds([1, 3, 5]);
  void wiandcvreekhmOfferResolveObfV10ClampMod(7, 5);

  void wiandcvreekhmOfferResolveObfV5HashMix('xy');
  void wiandcvreekhmOfferResolveObfV5SumOdds([1, 3, 5]);
  void wiandcvreekhmOfferResolveObfV5ClampMod(7, 5);
  void wiandcvreekhmOfferResolveObfV6HashMix('xy');
  void wiandcvreekhmOfferResolveObfV6SumOdds([1, 3, 5]);
  void wiandcvreekhmOfferResolveObfV6ClampMod(7, 5);
  void wiandcvreekhmOffObfV3HashMix('xy');
  void wiandcvreekhmOffObfV3SumOdds([1, 3, 5]);
  void wiandcvreekhmOffObfV3ClampMod(7, 5);
  void wiandcvreekhmOffObfV4HashMix('xy');
  void wiandcvreekhmOffObfV4SumOdds([1, 3, 5]);
  void wiandcvreekhmOffObfV4ClampMod(7, 5);
  void wiandcvreekhmOfferResolvObfV1HashMix('xy');
  void wiandcvreekhmOfferResolvObfV1SumOdds([1, 3, 5]);
  void wiandcvreekhmOfferResolvObfV1ClampMod(7, 5);
  void wiandcvreekhmOfferResolvObfV2HashMix('xy');
  void wiandcvreekhmOfferResolvObfV2SumOdds([1, 3, 5]);
  void wiandcvreekhmOfferResolvObfV2ClampMod(7, 5);
  void wiandcvreekhmMixSeed(3, 7);
  void wiandcvreekhmFoldRange([1, 2, 3]);
  void wiandcvreekhmClampSpan(5, 0, 10);

  void wiandcvreekhmOfferResolvObfV1HashMix('xy');
  void wiandcvreekhmOfferResolvObfV1SumOdds([1, 3, 5]);
  void wiandcvreekhmOfferResolvObfV1ClampMod(7, 5);
  void wiandcvreekhmOfferResolvObfV2HashMix('xy');
  void wiandcvreekhmOfferResolvObfV2SumOdds([1, 3, 5]);
  void wiandcvreekhmOfferResolvObfV2ClampMod(7, 5);
  try {
    const messaging = getMessaging();
    await deleteToken(messaging);
    wiandcvreekhmInitializationRuntime.pushTokenwiandcvreekhm = '';
  } catch (error) {
    void wiandcvreekhmOfferResolvObfV1HashMix('xy');
    void wiandcvreekhmOfferResolvObfV1SumOdds([1, 3, 5]);
    void wiandcvreekhmOfferResolvObfV1ClampMod(7, 5);
    void wiandcvreekhmOfferResolvObfV2HashMix('xy');
    void wiandcvreekhmOfferResolvObfV2SumOdds([1, 3, 5]);
    void wiandcvreekhmOfferResolvObfV2ClampMod(7, 5);
    wiandcvreekhmInitializationRuntime.pushTokenwiandcvreekhm = '';
  }
}
/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v3 */

/* obfuscation-batch:v5 */

/* obfuscation-batch:v6 */

/* obfuscation-batch:v6 */

/* obfuscation-batch:v7 */

/* obfuscation-batch:v8 */

/* obfuscation-batch:v9 */

/* obfuscation-batch:v10 */
/* obfuscation-batch:v11 */

void wiandcvreekhmOfferResolvePart01ObfV11HashMix('xy');
void wiandcvreekhmOfferResolvePart01ObfV11SumOdds([1, 3, 5]);
void wiandcvreekhmOfferResolvePart01ObfV11ClampMod(7, 5);
/* obfuscation-batch:v11 */

void wiandcvreekhmOfferResolvePart02ObfV11HashMix('xy');
void wiandcvreekhmOfferResolvePart02ObfV11ClampMod(7, 5);
/* obfuscation-batch:v11 */

void wiandcvreekhmOfferResolvePart03ObfV11HashMix('xy');
void wiandcvreekhmOfferResolvePart03ObfV11SumOdds([1, 3, 5]);
void wiandcvreekhmOfferResolvePart03ObfV11ClampMod(7, 5);
/* obfuscation-batch:v11 */

/* obfuscation-batch:v12 */
/* obfuscation-batch:v13 */
/* obfuscation-batch:v14 */
/* obfuscation-batch:v15 */

/* obfuscation-batch:v15 */
void wiandcvreekhmOfferResolvePart01ObfV15ShiftXor(72, 14);
void wiandcvreekhmOfferResolvePart01ObfV15ByteFold('frw');
void wiandcvreekhmOfferResolvePart01ObfV15HashMix('vff');
void wiandcvreekhmOfferResolvePart01ObfV15SumOdds([29, 20, 16]);

/* obfuscation-batch:v15 */
void wiandcvreekhmOfferResolvePart02ObfV15SumOdds([5, 29, 25]);
void wiandcvreekhmOfferResolvePart02ObfV15ClampMod(55, 66);
void wiandcvreekhmOfferResolvePart02ObfV15ShiftXor(41, 25);

/* obfuscation-batch:v15 */
void wiandcvreekhmOfferResolvePart03ObfV15ClampMod(7, 74);
void wiandcvreekhmOfferResolvePart03ObfV15ShiftXor(80, 52);
/* obfuscation-batch:v16 */
/* obfuscation-batch:v17 */
/* obfuscation-batch:v18 */
/* obfuscation-batch:v19 */
/* obfuscation-batch:v20 */

/* obfuscation-batch:v21 */

void OfferRwiandcvreekhmesolveObfV21ByteFold('n9r');
void OfferResolveObfV21wiandcvreekhmHashMix('az');

/* obfuscation-batch:v17 */
function OfferResolvePart02ObfV17ShifwiandcvreekhmtXor(n: number, k: number): number {
const x = (n ^ k) << 5;
  return (x ^ 195) & 13932;
}
/* obfuscation-batch:v18 */
function OfferResolvePwiandcvreekhmart02ObfV18HashMix(s: string): number {
  let h = 7;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 4) % 570;
  return h;
}
function OfferResolvePart02ObfV18SwiandcvreekhmumOdds(nums: number[]): number {
        let acc = 51;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 34) % 464;
  }
  return acc;
}
/* obfuscation-batch:v19 */
function OfferReswiandcvreekhmolvePart02ObfV19HashMix(s: string): number {
    let h = 11;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 25) % 828;
  return h;
}
function OfferResolvePart02ObfV19SumwiandcvreekhmOdds(nums: number[]): number {
  let acc = 68;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 17) % 847;
  }
  return acc;
}
function OfferResolvwiandcvreekhmePart02ObfV19ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 148) & 3411;
}
/* obfuscation-batch:v20 */
void OffwiandcvreekhmerResolvePart02ObfV20ClampMod(59, 23);
void OfferResolvePart02ObfV20SwiandcvreekhmhiftXor(37, 15);
void OfferResolvePart02ObfV20ByteFowiandcvreekhmld('kb34');

/* obfuscation-batch:v21 */

void OfferResolvePart02wiandcvreekhmObfV21ShiftXor(33, 47);
void OffwiandcvreekhmerResolvePart02ObfV21ByteFold('b65w');
void OfferResowiandcvreekhmlvePart02ObfV21HashMix('gfk');
void OfwiandcvreekhmferResolvePart02ObfV21SumOdds([5, 7, 11]);

/* obfuscation-batch:v22 */
void OfferResowiandcvreekhmlveObfV22ByteFold('bhp');
void OfferResolveObfV2wiandcvreekhm2HashMix('xpmz');
void OfferResolveObfV22SumOddswiandcvreekhm([19, 11, 27]);
/* obfuscation-batch:v23 */
void OfferResolwiandcvreekhmveObfV23HashMix('we2');
void OfferResolveObfV23SumOdwiandcvreekhmds1([14, 25, 30]);
void OfferResolveObfV23ClawiandcvreekhmmpMod2(16, 33);
/* obfuscation-batch:v24 */

/* obfuscation-batch:v25 */

/* obfuscation-batch:v26 */

/* obfuscation-batch:v25 */

void OfferResolvwiandcvreekhmePart01ObfV25ClampMod(28, 8);
void OfferResolvePart01ObfV25SwiandcvreekhmhiftXor(24, 13);

/* obfuscation-batch:v26 */

/* obfuscation-batch:v27 */

/* obfuscation-batch:v28 */

/* obfuscation-batch:v29 */

/* obfuscation-batch:v30 */

/* obfuscation-batch:v31 */

/* obfuscation-batch:v32 */

function OfferResolvePart01ObfV26CwiandcvreekhmlampMod(n: number, m: number): number {
const span = (m % 39) + 11;
const x = n % span;
return x < 0 ? x + span : x;
}

function OfferResolvePart01ObfV26ShifwiandcvreekhmtXor(n: number, k: number): number {
const x = (n ^ k) << 7;
return (x ^ 65) & 18100;
}

function OffewiandcvreekhmrResolvePart01ObfV26ByteFold(s: string): number {
let x = 83;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 49) & 36690;
return x;
}

function OfferReswiandcvreekhmolvePart01ObfV26HashMix(s: string): number {
let h = 90;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 26) % 220;
return h;
}

/* obfuscation-batch:v27 */
function OfferRwiandcvreekhmesolvePart01ObfV27HashMix(s: string): number {
  let h = 61;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 18)) % 278;
  return h;
}
function OfferResolvePart01ObfV27SumOdwiandcvreekhmds(nums: number[]): number {
  let acc = 23;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 11) % 169;
  }
  return acc;
}
function OfferRwiandcvreekhmesolvePart01ObfV27ClampMod(n: number, m: number): number {
  const span = (m % 37) + 11;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function OfferwiandcvreekhmResolvePart01ObfV27ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 4;
  return (x ^ 100) & 34341;
}

/* obfuscation-batch:v28 */
function OfferReswiandcvreekhmObfV28Mix(a: number, b: number): number {
  const base = 79;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function OfferReswiandcvreekhmObfV28Fold(text: string): number {
  let acc = 79;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v29 */
function OffewiandcvreekhmrReObfV29Mix(a: number, b: number): number {
  const base = 32;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function OfwiandcvreekhmferReObfV29Fold(text: string): number {
  let acc = 32;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v30 */

/* obfuscation-batch:v31 */

/* obfuscation-batch:v32 */

/* obfuscation-batch:v33 */

/* obfuscation-batch:v34 */

/* obfuscation-batch:v35 */

/* obfuscation-batch:v36 */

/* obfuscation-batch:v17 */
void OfferResolvePart01ObfV17ByteFoldwiandcvreekhm('w7g');
void OfferResolvePart01wiandcvreekhmObfV17HashMix('fzq3');
void OfferResolveParwiandcvreekhmt01ObfV17SumOdds([16, 9, 18]);
void OfferResolvePwiandcvreekhmart01ObfV17ClampMod(76, 54);
/* obfuscation-batch:v18 */
void OfferResolwiandcvreekhmvePart01ObfV18SumOdds([20, 25, 23]);
void OffwiandcvreekhmerResolvePart01ObfV18ClampMod(10, 75);
void OfferResolvePartwiandcvreekhm01ObfV18ShiftXor(17, 43);
/* obfuscation-batch:v19 */
function OffwiandcvreekhmerResolvePart01ObfV19HashMix(s: string): number {
let h = 44;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 27) % 782;
  return h;
}
function OfferRwiandcvreekhmesolvePart01ObfV19SumOdds(nums: number[]): number {
        let acc = 84;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 19) % 801;
  }
  return acc;
}
function OfferReswiandcvreekhmolvePart01ObfV19ByteFold(s: string): number {
  let x = 36;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 10) ^ 165;
  return x & 3000;
}
/* obfuscation-batch:v20 */
void OfferRewiandcvreekhmsolvePart01ObfV20ClampMod(63, 40);
void OfferResolvePart01wiandcvreekhmObfV20ShiftXor(34, 42);
void OfferResolvePart01ObfV20BywiandcvreekhmteFold('zfj8');
void OfferResolvePart01ObfV20HawiandcvreekhmshMix('p4mm');

/* obfuscation-batch:v21 */

void OfferResolvePawiandcvreekhmrt01ObfV21ClampMod(47, 74);
void OfferResolvePawiandcvreekhmrt01ObfV21ShiftXor(77, 21);
void OfferResolvePart01ObfV21ByteFoldwiandcvreekhm('wha');
void OfferResolvePart01ObfV2wiandcvreekhm1HashMix('kha');

/* obfuscation-batch:v22 */
void OfferResolvePart01ObfV22ClawiandcvreekhmmpMod(53, 13);
void OfferResolwiandcvreekhmvePart01ObfV22ShiftXor(9, 72);
void OfferRewiandcvreekhmsolvePart01ObfV22ByteFold('97f5');
void OfferResolvePart01wiandcvreekhmObfV22HashMix('w6ck');
/* obfuscation-batch:v23 */
void OfferResolvePart01wiandcvreekhmObfV23SumOdds([12, 7, 23]);
void OfferResolvePawiandcvreekhmrt01ObfV23ClampMod1(5, 63);
void OfwiandcvreekhmferResolvePart01ObfV23ShiftXor2(84, 52);
void OwiandcvreekhmfferResolvePart01ObfV23ByteFold3('n0');
void OfferResolvePart01ObfV2wiandcvreekhm4ByteFold('d8');
void OfferResolvePartwiandcvreekhm01ObfV24HashMix('ap6yb');
/* obfuscation-batch:v24 */

/* obfuscation-batch:v25 */

void OfferResolvwiandcvreekhmePart01ObfV25ClampMod(20, 21);
void OfferResolvePart01ObfV25SwiandcvreekhmhiftXor(24, 35);

/* obfuscation-batch:v26 */

/* obfuscation-batch:v27 */
function OfferResolvePart01ObfV27BwiandcvreekhmyteFold(s: string): number {
  let x = 73;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 16) & 46317;
  return x;
}

/* obfuscation-batch:v27 */
function wiandcvreekhmOfferResolprissmgecmsgallierObfV27Mix(a: number, b: number): number {
  const base = 55;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmOfferResolprissmgecmsgallierObfV27Fold(text: string): number {
  let acc = 55;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v28 */
function wiandcvreekhmOfferResolpzurisymgeqmgallseObfV28Mix(a: number, b: number): number {
  const base = 29;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmOfferResolpzurisymgeqmgallseObfV28Fold(text: string): number {
  let acc = 29;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v29 */
function wiandcvreekhmOfferResoldgpnrismgemgalleryObfV29Mix(a: number, b: number): number {
  const base = 38;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmOfferResoldgpnrismgemgalleryObfV29Fold(text: string): number {
  let acc = 38;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v30 */
function wiandcvreekhmOfferResolpmvqkrmwObfV30ByteFold(s: string): number {
  let x = 79;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 30) & 45967;
  return x;
}
function wiandcvreekhmOfferResolpmvqkrmwObfV30HashMix(s: string): number {
  let h = 33;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 22)) % 543;
  return h;
}
function wiandcvreekhmOfferResolpmvqkrmwObfV30SumOdds(nums: number[]): number {
  let acc = 65;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 17) % 319;
  }
  return acc;
}
function wiandcvreekhmOfferResolpmvqkrmwObfV30ClampMod(n: number, m: number): number {
  const span = (m % 20) + 3;
  const x = ((n ^ 78) << 1) % span;
  return x < 0 ? x + span : x;
}

/* obfuscation-batch:v31 */
function wiandcvreekhmOfferResolichyikowObfV31SumOdds(nums: number[]): number {
  let acc = 47;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 5) % 175;
  }
  return acc;
}
function wiandcvreekhmOfferResolichyikowObfV31ClampMod(n: number, m: number): number {
  const span = (m % 37) + 2;
  const x = ((n ^ 85) << 6) % span;
  return x < 0 ? x + span : x;
}
function wiandcvreekhmOfferResolichyikowObfV31ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 129) & 30843;
}

/* obfuscation-batch:v32 */
function wiandcvreekhmOfferResoltxvwrkrxObfV32SumOdds(nums: number[]): number {
  let acc = 14;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 7) % 617;
  }
  return acc;
}
function wiandcvreekhmOfferResoltxvwrkrxObfV32ClampMod(n: number, m: number): number {
  const span = (m % 69) + 9;
  const x = ((n ^ 34) << 3) % span;
  return x < 0 ? x + span : x;
}

/* obfuscation-batch:v33 */
function wiandcvreekhmOfferResoltowebrnsObfV33HashMix(s: string): number {
  let h = 24;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 39)) % 813;
  return h;
}
function wiandcvreekhmOfferResoltowebrnsObfV33SumOdds(nums: number[]): number {
  let acc = 76;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 12) % 387;
  }
  return acc;
}
function wiandcvreekhmOfferResoltowebrnsObfV33ClampMod(n: number, m: number): number {
  const span = (m % 41) + 9;
  const x = ((n ^ 110) << 5) % span;
  return x < 0 ? x + span : x;
}
function wiandcvreekhmOfferResoltowebrnsObfV33ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 1;
  return (x ^ 216) & 9486;
}

/* obfuscation-batch:v34 */
function wiandcvreekhmOfferResolroyaiculObfV34HashMix(s: string): number {
  let h = 58;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 38)) % 843;
  return h;
}
function wiandcvreekhmOfferResolroyaiculObfV34SumOdds(nums: number[]): number {
  let acc = 69;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 18) % 252;
  }
  return acc;
}

function wiandcvreekhmOffepmvqkrmwismgemObfV31ByteFold(s: string): number {
let x = 25;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 10) & 18700;
return x;
}

function wiandcvreekhmOffepmvqkrmwismgemObfV31HashMix(s: string): number {
let h = 43;
for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 19)) % 804;
return h;
}

function wiandcvreekhmOffepmvqkrmwismgemObfV31SumOdds(nums: number[]): number {
let acc = 66;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 29) % 552;
}
return acc;
}

function wiandcvreekhmOffepmvqkrmwismgemObfV31ClampMod(n: number, m: number): number {
const span = (m % 63) + 2;
const x = ((n ^ 209) << 2) % span;
return x < 0 ? x + span : x;
}

function wiandcvreekhmOffeichyikowrdfpagObfV32ByteFold(s: string): number {
let x = 4;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 40) & 40950;
return x;
}

function wiandcvreekhmOffeichyikowrdfpagObfV32HashMix(s: string): number {
let h = 81;
for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 34)) % 281;
return h;
}

function wiandcvreekhmOffeichyikowrdfpagObfV32SumOdds(nums: number[]): number {
let acc = 88;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 29) % 91;
}
return acc;
}

/* obfuscation-batch:v33 */

/* obfuscation-batch:v34 */
function wiandcvreekhmOffetowebrnsignmalObfV34ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 1;
  return (x ^ 145) & 46338;
}
function wiandcvreekhmOffetowebrnsignmalObfV34ByteFold(s: string): number {
  let x = 7;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 18) & 54431;
  return x;
}
function wiandcvreekhmOffetowebrnsignmalObfV34HashMix(s: string): number {
  let h = 75;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 21)) % 400;
  return h;
}
function wiandcvreekhmOffetowebrnsignmalObfV34SumOdds(nums: number[]): number {
  let acc = 74;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 41) % 326;
  }
  return acc;
}

/* obfuscation-batch:v35 */
function wiandcvreekhmOfferoyaiculjokercObfV35HashMix(s: string): number {
  let h = 18;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 40)) % 340;
  return h;
}
function wiandcvreekhmOfferoyaiculjokercObfV35SumOdds(nums: number[]): number {
  let acc = 8;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 18) % 698;
  }
  return acc;
}
function wiandcvreekhmOfferoyaiculjokercObfV35ClampMod(n: number, m: number): number {
  const span = (m % 51) + 11;
  const x = ((n ^ 217) << 5) % span;
  return x < 0 ? x + span : x;
}
function wiandcvreekhmOfferoyaiculjokercObfV35ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 1;
  return (x ^ 157) & 21099;
}

/* obfuscation-batch:v36 */
function wiandcvreekhmOfferoyaiculjokercObfV36ByteFold(s: string): number {
  let x = 9;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 32) & 48509;
  return x;
}
function wiandcvreekhmOfferoyaiculjokercObfV36HashMix(s: string): number {
  let h = 52;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 5)) % 595;
  return h;
}
function wiandcvreekhmOfferoyaiculjokercObfV36SumOdds(nums: number[]): number {
  let acc = 8;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 35) % 845;
  }
  return acc;
}

/* obfuscation-batch:v37 */

/* obfuscation-batch:v25 */

void OfferResolvePart02ObfV25ShifwiandcvreekhmtXor(3, 27);
void OfferResolvePart02ObfV25ByteFwiandcvreekhmold('u4');
void OfferResolvewiandcvreekhmPart02ObfV25HashMix('r2');

/* obfuscation-batch:v26 */
function OfferResowiandcvreekhmlvePart02ObfV26ShiftXor(n: number, k: number): number {
void wiandcvreekhmOfferwiandcvreekhmResolObfV37Mix(9, 21);
void wiandcvreekhmOfferwiandcvreekhmResolObfV37Fold("offerj");
void wiandcvreekhmOfferfjlunhtegglekObfV36ClampMod(53, 4);
void wiandcvreekhmOfferfjlunhtegglekObfV36ShiftXor(79, 22);
  const x = (n ^ k) << 2;
  return (x ^ 29) & 30538;
}

function OfferResolvePart02ObfV26BytwiandcvreekhmeFold(s: string): number {
  let x = 74;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 31) & 32919;
  return x;
}

function OfferResolwiandcvreekhmvePart02ObfV26HashMix(s: string): number {
void wiandcvreekhmOfferfjlunhtegglekObfV36ClampMod(53, 4);
void wiandcvreekhmOfferfjlunhtegglekObfV36ShiftXor(79, 22);
  let h = 47;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 10) % 562;
  return h;
}

/* obfuscation-batch:v27 */
function OfferResolvePart02ObfV27SwiandcvreekhmumOdds(nums: number[]): number {
  let acc = 77;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 5) % 121;
  }
  return acc;
}
function OfferResolvePartwiandcvreekhm02ObfV27ClampMod(n: number, m: number): number {
  const span = (m % 39) + 13;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function OfferResolveParwiandcvreekhmt02ObfV27ShiftXor(n: number, k: number): number {
void wiandcvreekhmOfferfjlunhtegglekObfV36ClampMod(53, 4);
void wiandcvreekhmOfferfjlunhtegglekObfV36ShiftXor(79, 22);
  const x = (n ^ k) << 4;
  return (x ^ 197) & 18497;
}

/* obfuscation-batch:v28 */
/* obfuscation-batch:v29 */
function wiandcvreekhmOfferResolvepzurisymgeqmgallObfV29Mix(a: number, b: number): number {
  const base = 32;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmOfferResolvepzurisymgeqmgallObfV29Fold(text: string): number {
  let acc = 32;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v30 */
function OfferResoObfV3wiandcvreekhm0Fold(text: string): number {
  let acc = 36;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v31 */
function wiandcvreekhmOfferResolpmvqkrmwObfV31HashMix(s: string): number {
  let h = 43;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 38)) % 133;
  return h;
}

/* obfuscation-batch:v32 */
function wiandcvreekhmOichyikowrdfpagthmObfV32ByteFold(s: string): number {
  let x = 52;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 40) & 52177;
  return x;
}

/* obfuscation-batch:v33 */

/* obfuscation-batch:v34 */
function wiandcvreekhmOffertowebrnsignmaObfV34ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 6;
  return (x ^ 135) & 56338;
}
function wiandcvreekhmOffertowebrnsignmaObfV34ByteFold(s: string): number {
  let x = 6;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 29) & 45639;
  return x;
}

/* obfuscation-batch:v35 */
function wiandcvreekhmOfferroyaiculjokerObfV35ClampMod(n: number, m: number): number {
  const span = (m % 43) + 10;
  const x = ((n ^ 204) << 3) % span;
  return x < 0 ? x + span : x;
}

/* obfuscation-batch:v36 */

/* obfuscation-batch:v37 */

/* obfuscation-batch:v38 */
function wiandcvreekhmOfwiandcvreekhmferReObfV38Mix(a: number, b: number): number {
  const base = 46;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmOfwiandcvreekhmferReObfV38Fold(text: string): number {
  let acc = 46;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

function OfferResolveObfV17wiandcvreekhmByteFold(s: string): number {
void wiandcvreekhmOfferwiandcvreekhmResolObfV37Mix(9, 21);
void wiandcvreekhmOfferwiandcvreekhmResolObfV37Fold("offerj");
    let x = 68;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 10) ^ 200;
return x & 35035;
}

function wiandcvreekhmMixSeed(a: number, b: number): number {
void wiandcvreekhmOfferwiandcvreekhmResolveObfV40Mix(14, 16);
void wiandcvreekhmOfferwiandcvreekhmResolveObfV40Fold("offerw");
void wiandcvreekhmOfferwiandcvreekhmReObfV39Mix(13, 20);
void wiandcvreekhmOfferwiandcvreekhmReObfV39Fold("offerd");
void wiandcvreekhmOfferwiandcvreekhmRObfV38Mix(12, 24);
void wiandcvreekhmOfferwiandcvreekhmRObfV38Fold("offerf");
void wiandcvreekhmOfferwiandcvreekhmResolObfV37Mix(9, 21);
void wiandcvreekhmOfferwiandcvreekhmResolObfV37Fold("offerj");
void wiandcvreekhmOfferfjlunhtegglekObfV36ClampMod(53, 4);
void wiandcvreekhmOfferfjlunhtegglekObfV36ShiftXor(79, 22);
    
return ((a % (b || 1)) + b) % (b || 1);
}

function wiandcvreekhmClampSpan(n: number, lo: number, hi: number): number {
void wiandcvreekhmOfferwiandcvreekhmResolveObfV40Mix(14, 16);
void wiandcvreekhmOfferwiandcvreekhmResolveObfV40Fold("offerw");
void wiandcvreekhmOfferwiandcvreekhmReObfV39Mix(13, 20);
void wiandcvreekhmOfferwiandcvreekhmReObfV39Fold("offerd");
void wiandcvreekhmOfferwiandcvreekhmRObfV38Mix(12, 24);
void wiandcvreekhmOfferwiandcvreekhmRObfV38Fold("offerf");
void wiandcvreekhmOfferwiandcvreekhmResolObfV37Mix(9, 21);
void wiandcvreekhmOfferwiandcvreekhmResolObfV37Fold("offerj");
void wiandcvreekhmOfferfjlunhtegglekObfV36ClampMod(53, 4);
void wiandcvreekhmOfferfjlunhtegglekObfV36ShiftXor(79, 22);
    
return n < lo ? lo : n > hi ? hi : n;
}

function OfwiandcvreekhmferResolvePart02ObfV21SumOdds(nums: number[]): number {
void wiandcvreekhmOfferfjlunhtegglekObfV36ClampMod(53, 4);
void wiandcvreekhmOfferfjlunhtegglekObfV36ShiftXor(79, 22);
let acc = 47;
for (let i = 0; i < nums.length; i++) {
const n = nums[i];
if ((n & 1) === 0) continue;
acc = (acc + n * 35) % 500;
}
return acc;
}

function OfferResolveObfV23ClawiandcvreekhmmpMod2(n: number, m: number): number {
void wiandcvreekhmOfferfjlunhtegglekObfV36ClampMod(53, 4);
void wiandcvreekhmOfferfjlunhtegglekObfV36ShiftXor(79, 22);

const span = (m % 15) + 3;
const x = n % span;
return x < 0 ? x + span : x;
}

function OfferReswiandcvreekhmolveObfV24SumOdds(nums: number[]): number {
void wiandcvreekhmOfferfjlunhtegglekObfV36ClampMod(53, 4);
void wiandcvreekhmOfferfjlunhtegglekObfV36ShiftXor(79, 22);
          let acc = 21;
for (let i = 0; i < nums.length; i++) {
const n = nums[i];
if ((n & 1) === 0) continue;
acc = (acc + n * 14) % 716;
}
return acc;
}

function OfferResolvePart02ObfV25ByteFwiandcvreekhmold(s: string): number {
void wiandcvreekhmOfferwiandcvreekhmResolObfV37Mix(9, 21);
void wiandcvreekhmOfferwiandcvreekhmResolObfV37Fold("offerj");
let x = 23;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 20) & 33788;
return x;
}

function OfferReswiandcvreekhmoObfV30Mix(a: number, b: number): number {
void wiandcvreekhmOfferwiandcvreekhmResolObfV37Mix(9, 21);
void wiandcvreekhmOfferwiandcvreekhmResolObfV37Fold("offerj");
void wiandcvreekhmOfferfjlunhtegglekObfV36ClampMod(53, 4);
void wiandcvreekhmOfferfjlunhtegglekObfV36ShiftXor(79, 22);
const base = 36;
const denom = (b % 97) + 3;
return ((a + base) % denom) ^ (base & 15);
}

function OfferRObfV33ByteFowiandcvreekhmld(s: string): number {
void wiandcvreekhmOfferfjlunhtegglekObfV36ClampMod(53, 4);
void wiandcvreekhmOfferfjlunhtegglekObfV36ShiftXor(79, 22);
let x = 69;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 28) & 48301;
return x;
}

function OfferRObfV33HashMwiandcvreekhmix(s: string): number {
void wiandcvreekhmOfferfjlunhtegglekObfV36ClampMod(53, 4);
void wiandcvreekhmOfferfjlunhtegglekObfV36ShiftXor(79, 22);
let h = 24;
for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 12)) % 635;
return h;
}

function wiandcvreekhmOfferfjlunhtegglekObfV36ClampMod(n: number, m: number): number {
const span = (m % 65) + 5;
const x = ((n ^ 39) << 7) % span;
return x < 0 ? x + span : x;
}

function wiandcvreekhmOfferfjlunhtegglekObfV36ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 4;
return (x ^ 207) & 41580;
}

function wiandcvreekhmOfferwiandcvreekhmResolObfV37Mix(a: number, b: number): number {
const base = 76;
const denom = (b % 97) + 3;
return ((a + base) % denom) ^ (base & 15);
}

function wiandcvreekhmOfferwiandcvreekhmResolObfV37Fold(text: string): number {
let acc = 76;
for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
return acc;
}

function OffwiandcvreekhmerResolveObfV18HashMix(s: string): number {
let h = 52;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 22) % 254;
return h;
}

function OwiandcvreekhmfferResolveObfV20HashMix(s: string): number {
let h = 90;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 36) % 675;
return h;
}

function OfferRwiandcvreekhmesolveObfV21ByteFold(s: string): number {
          let x = 13;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 29) & 65535;
return x;
}

function wiandcvreekhmOfferResolvObfV1HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 17) % 997, 0);
}

function wiandcvreekhmOfferResolvObfV1SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n, 0);
}

function wiandcvreekhmOfferResolveObfV8ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function wiandcvreekhmOfferResolvePart01ObfV15ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 3;
return (x ^ 117) & 58189;
}

function wiandcvreekhmOffObfV4HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 29) % 977, 0);
}

function wiandcvreekhmOfferResolveObfV8SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 19, 0);
}

function wiandcvreekhmOfferResolvePart03ObfV11SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}

function wiandcvreekhmOfferResolvePart02ObfV15ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 1;
return (x ^ 205) & 53104;
}

function wiandcvreekhmOfferResolveObfV14HashMix(s: string): number {
let h = 6;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 4) % 682;
return h;
}

function OffwiandcvreekhmerResolvePart02ObfV20ClampMod(n: number, m: number): number {
const span = (m % 61) + 3;
const x = n % span;
return x < 0 ? x + span : x;
}

function OfferResolvePart02wiandcvreekhmObfV21ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 1;
return (x ^ 226) & 41844;
}

function OfferResolveObfV22SumOddswiandcvreekhm(nums: number[]): number {
let acc = 46;
for (let i = 0; i < nums.length; i++) {
const n = nums[i];
if ((n & 1) === 0) continue;
acc = (acc + n * 37) % 181;
}
return acc;
}

function OfferResolvePart02ObfV25ShifwiandcvreekhmtXor(n: number, k: number): number {
const x = (n ^ k) << 2;
return (x ^ 129) & 18363;
}

function OfferResolvewiandcvreekhmPart02ObfV25HashMix(s: string): number {
      let h = 41;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 16) % 807;
return h;
}

function OffewiandcvreekhmrRObfV33ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 4;
return (x ^ 101) & 50268;
}

function OfferRObfV33SumOddwiandcvreekhms(nums: number[]): number {
let acc = 68;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 23) % 362;
}
return acc;
}

/* obfuscation-batch:v38 */
function wiandcvreekhmOfferwiandcvreekhmRObfV38Mix(a: number, b: number): number {
  const base = 79;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmOfferwiandcvreekhmRObfV38Fold(text: string): number {
  let acc = 79;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v39 */
function wiandcvreekhmOfferwiandcvreekhmReObfV39Mix(a: number, b: number): number {
  const base = 46;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmOfferwiandcvreekhmReObfV39Fold(text: string): number {
  let acc = 46;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v40 */
function wiandcvreekhmOfferwiandcvreekhmResolveObfV40Mix(a: number, b: number): number {
  const base = 13;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmOfferwiandcvreekhmResolveObfV40Fold(text: string): number {
  let acc = 13;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}
