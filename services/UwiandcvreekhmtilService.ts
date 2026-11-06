import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORwiandcvreekhmAGE_KEYS, liwiandcvreekhmnk, wiandcvreekhmConstTouch } from './constants/constwiandcvreekhmntsVariable';
import { wiandcvreekhmEncrypt, wiandcvreekhmDecrypt } from './CryptoServicwiandcvreekhme';
import { wiandcvreekhmSendCf } from './wiandcvreekhmCfProtocol';
import { wiandcvreekhmSumSquares, wiandcvreekhmAverageAbsoluteDeviation, wiandcvreekhmGcdPair, wiandcvreekhmXorFold, wiandcvreekhmModSpan, wiandcvreekhmStrLenSum, wiandcvreekhmLcmPair, wiandcvreekhmAbsDiff, wiandcvreekhmDotFold, wiandcvreekhmMinPair, wiandcvreekhmMaxPair, wiandcvreekhmSignVal, wiandcvreekhmRevStr, wiandcvreekhmSumDiff, wiandcvreekhmConcatLen, wiandcvreekhmNormMod, wiandcvreekhmPairAvg, wiandcvreekhmCharCodeSum, wiandcvreekhmEvenCount, wiandcvreekhmTrimLen, wiandcvreekhmOddCount, wiandcvreekhmMidAvg, wiandcvreekhmStrHash, wiandcvreekhmFloorDiv, wiandcvreekhmPowSum, wiandcvreekhmPrefixLen, wiandcvreekhmJoinLen, wiandcvreekhmIsEven, wiandcvreekhmRangeSpan, wiandcvreekhmHalfSum, wiandcvreekhmDigitSum, wiandcvreekhmBoolOr, wiandcvreekhmSqDiff, wiandcvreekhmLerpVal, wiandcvreekhmWrapIndex, wiandcvreekhmCountTruthy } from './UtilwiandcvreekhmServicePart01';
// autosetup-split-begin
import { UtilServiObfV30Miwiandcvreekhmx, UtilwiandcvreekhmServiObfV30Fold, UtilSeObfV33SumOdwiandcvreekhmds, UtilSeObfV33ClampMowiandcvreekhmd, UtilSeObfV33SwiandcvreekhmhiftXor, UtilSeObfV33BwiandcvreekhmyteFold, wiandcvreekhmUtilServicetowebrnObfV34ByteFold, wiandcvreekhmUtilServicetowebrnObfV34HashMix, UtilServiceObfV14SumOddswiandcvreekhm, UtilServiceObfV11SumOwiandcvreekhmdds, UtilServwiandcvreekhmiceObfV2SumOdds, UtilServiceParwiandcvreekhmt02ObfV23HashMix, UtilServicePart02ObfV24SumOddwiandcvreekhms, UtilSerwiandcvreekhmvicePart02ObfV24ClampMod, UtilServicwiandcvreekhmePart02ObfV25ShiftXor, UtilServwiandcvreekhmicePart02ObfV25ByteFold, UtilServicePawiandcvreekhmrt02ObfV25HashMix, UtilServicePart02ObfV26ByteFowiandcvreekhmld, UtilServicePwiandcvreekhmart02ObfV26HashMix, UtilServicePart02wiandcvreekhmObfV27SumOdds, UtiwiandcvreekhmlServicePart02ObfV27ClampMod, UtilServicePart02ObfV27wiandcvreekhmShiftXor, UtiwiandcvreekhmlServObfV28Mix, UtilSerwiandcvreekhmvObfV28Fold, UtilSerObfV2wiandcvreekhm9Mix, UtilSerObfV29Fowiandcvreekhmld, wiandcvreekhmUtilServicePapmvqkObfV31HashMix, wiandcvreekhmUtilServicePapmvqkObfV31SumOdds, wiandcvreekhmUtilServicePart02iObfV32ByteFold, wiandcvreekhmUtilStowebrnsignmaObfV34HashMix, wiandcvreekhmUtilStowebrnsignmaObfV34SumOdds, wiandcvreekhmUtilStowebrnsignmaObfV34ClampMod, wiandcvreekhmUtilServicprissmgecmsgallierObfV28Mix, wiandcvreekhmUtilServicprissmgecmsgallierObfV28Fold, wiandcvreekhmUtilServipzurisymgeqmgallsefObfV29Mix, wiandcvreekhmUtilServipzurisymgeqmgallsefObfV29Fold, wiandcvreekhmUtilServicepmvqkrmObfV31HashMix, wiandcvreekhmUtilServicepmvqkrmObfV31SumOdds, wiandcvreekhmUtilServicichyikowObfV32SumOdds, wiandcvreekhmUtilServicichyikowObfV32ClampMod, wiandcvreekhmUtilServicichyikowObfV32ShiftXor, UwiandcvreekhmtilServicePart02ObfV6HashMix, UtilwiandcvreekhmServiceObfV7ClampMod, UtiwiandcvreekhmObfV3ClampMod, UtilServiceObfV2ClampMwiandcvreekhmod, UtilServicewiandcvreekhmPart02ObfV14HashMix, UtilSerwiandcvreekhmviceObfV14ClampMod, UtilServiceObfV14ShifwiandcvreekhmtXor, UtilServiceObfV14ByteFowiandcvreekhmld, UtilServiceObfV13ShiftwiandcvreekhmXor, UtilServiceObfV1wiandcvreekhm1ClampMod, UtilSewiandcvreekhmrviceObfV2HashMix, UtiObfV4ClwiandcvreekhmampMod, UtiObfV3SumOddwiandcvreekhms, UtilServicePart02ObfV21wiandcvreekhmSumOdds, UtilServicePart02ObfV2wiandcvreekhm1ClampMod, UtilServicePart02ObfV21ShifwiandcvreekhmtXor, UtilServicePart0wiandcvreekhm2ObfV21ByteFold, UtilServicePawiandcvreekhmrt02ObfV22ByteFold, UtilwiandcvreekhmServicePart02ObfV22HashMix } from './UtilwiandcvreekhmServicePart01';
import { wiandcvreekhmMinValue, wiandcvreekhmMaxValue, wiandcvreekhmRangeValue, wiandcvreekhmBitMix, wiandcvreekhmBoolAnd, wiandcvreekhmBoolXor, wiandcvreekhmMeanVal, wiandcvreekhmRotSum, wiandcvreekhmProductFold, UtilSerwiandcvreekhmviceObfV27ByteFold, UtilServiceObfV27HawiandcvreekhmshMix, UtilServiceObfV26SumOddswiandcvreekhm, UtilServiceObfV2wiandcvreekhm6ClampMod, UtilSewiandcvreekhmrviceObfV25ByteFold, UtilServiceObfV25SumOdwiandcvreekhmds, UtilwiandcvreekhmServiceObfV25ClampMod, UtilServiceObfV24HashMiwiandcvreekhmx, UtilServiceObfV24SumOwiandcvreekhmdds, UtilServiceObfV24ClwiandcvreekhmampMod, UtiwiandcvreekhmlServiceObfV23HashMix1, UtilServiceObfV23SumwiandcvreekhmOdds2, UtilServicewiandcvreekhmObfV22SumOdds, UtilServiceObfV22ShiwiandcvreekhmftXor, UwiandcvreekhmtilServiceObfV21ShiftXor, UtilServiceObfV21ByteFowiandcvreekhmld, UtilServiceObfV21HaswiandcvreekhmhMix, UtilSerwiandcvreekhmviceObfV21SumOdds, UtilSewiandcvreekhmrviceObfV20HashMix, UtilServiceObfV19ShiftwiandcvreekhmXor, UtilServwiandcvreekhmiceObfV18ShiftXor, UwiandcvreekhmtilServiceObfV18ByteFold, UtwiandcvreekhmilServiceObfV17SumOdds, UwiandcvreekhmtilServiceObfV17ClampMod, UtilServicewiandcvreekhmObfV17ShiftXor, UtilServwiandcvreekhmiceObfV16ByteFold, UtilSerwiandcvreekhmviceObfV16HashMix, UtilServiceObfV15HashMixwiandcvreekhm, UtwiandcvreekhmilServiceObfV12HashMix, UtiwiandcvreekhmlServiceObfV12SumOdds, UtilServiceObfV12ClampwiandcvreekhmMod, UtilServiceObfV11wiandcvreekhmHashMix, UtilServiceObfV7HashwiandcvreekhmMix, UtilSwiandcvreekhmerviceObfV7SumOdds, UwiandcvreekhmtilServiceObfV8HashMix, UtilServwiandcvreekhmiceObfV8SumOdds, UtilSerwiandcvreekhmviceObfV8ClampMod, UtilServicwiandcvreekhmeObfV9HashMix, UtilServiceObfV9ClampwiandcvreekhmMod, UtilServiwiandcvreekhmceObfV10HashMix, UtilServiceObfV10SuwiandcvreekhmmOdds, UtilServicwiandcvreekhmeObfV10ClampMod, UtilSwiandcvreekhmerviceObfV5HashMix, UtilServiceObfV5SumOddswiandcvreekhm, UtilSewiandcvreekhmrviceObfV5ClampMod, UtiwiandcvreekhmlServiceObfV6HashMix, UtilServicewiandcvreekhmObfV6SumOdds, UwiandcvreekhmtilServiceObfV6ClampMod, UtiObfV4HwiandcvreekhmashMix, UtiObfV4SumOddwiandcvreekhms, UtilServicewiandcvreekhmObfV1HashMix, UtilServiceObfV1SwiandcvreekhmumOdds, UtilServiceObfV1ClampMowiandcvreekhmd, UtilServicwiandcvreekhmePart02ObfV6SumOdds, UtilSerwiandcvreekhmvicePart02ObfV6ClampMod, UtilServicePartwiandcvreekhm01ObfV21ByteFold, UtilServicwiandcvreekhmePart01ObfV21HashMix, UtiwiandcvreekhmlServicePart01ObfV22ShiftXor, UtilServicePart0wiandcvreekhm1ObfV22ByteFold, UtiwiandcvreekhmlServicePart01ObfV22HashMix, UtilServicePart01ObfV23HashwiandcvreekhmMix, UtilServicePart01ObfV23wiandcvreekhmSumOdds1, UtilServicePart01ObfV23ClampMod2wiandcvreekhm, UtilServicePart01ObfV23ShiftXorwiandcvreekhm3, UwiandcvreekhmtilServiceObfV26HashMix, UtilServiceObfV25HashMixwiandcvreekhm, UtilServicwiandcvreekhmeObfV23ClampMod3, UtilServiceObfV18wiandcvreekhmClampMod, UtilServiceObfV18wiandcvreekhmHashMix, UtilServiceObfV9SwiandcvreekhmumOdds, UtiObfV3HawiandcvreekhmshMix, UtilServiceObfV23ByteFowiandcvreekhmld } from './UtilSerwiandcvreekhmvicePart01';
// autosetup-split-end

export class Uwiandcvreekhmtils {

  static async wiandcvreekhmGetLink(): Promise<string> {
void wiandcvreekhmUwiandcvreekhmtilServiceObfV40Mix(1, 8);
void wiandcvreekhmUwiandcvreekhmtilServiceObfV40Fold("uwiand");
void wiandcvreekhmUtiwiandcvreekhmlSerObfV39Mix(4, 11);
void wiandcvreekhmUtiwiandcvreekhmlSerObfV39Fold("utidsr");
void wiandcvreekhmUtilServiceffrozenccatchxdnxObfV38Mix(9, 21);
void wiandcvreekhmUtilServiceffrozenccatchxdnxObfV38Fold("utilse");
void wiandcvreekhmUtilSewiandcvreekhmrvicObfV37Mix(16, 18);
void wiandcvreekhmUtilSewiandcvreekhmrvicObfV37Fold("utilse");
void wiandcvreekhmUtilServicfjlunhteObfV36ByteFold("125i");
void wiandcvreekhmUtilServicfjlunhteObfV36HashMix("01alo");
void wiandcvreekhmUtilSroyaiculjokerObfV35SumOdds([23, 6, 9]);
void wiandcvreekhmUtilSroyaiculjokerObfV35ClampMod(40, 75);
void wiandcvreekhmUtilSroyaiculjokerObfV35ShiftXor(26, 5);
void wiandcvreekhmUtilSroyaiculjokerObfV35ByteFold("2b");
void wiandcvreekhmUtilServicetowebrnObfV34ByteFold("7kbc");
void wiandcvreekhmUtilServicetowebrnObfV34HashMix("cfmdm");
void UtilSeObfV33SumOdwiandcvreekhmds([3, 18, 21]);
void UtilSeObfV33ClampMowiandcvreekhmd(60, 31);
void UtilSeObfV33SwiandcvreekhmhiftXor(46, 41);
void UtilSeObfV33BwiandcvreekhmyteFold("k5");
void wiandcvreekhmUtilServicichyikowObfV32SumOdds([2, 21, 4]);
void wiandcvreekhmUtilServicichyikowObfV32ClampMod(7, 62);
void wiandcvreekhmUtilServicichyikowObfV32ShiftXor(1, 80);
void wiandcvreekhmUtilServicepmvqkrmObfV31HashMix("lehib");
void wiandcvreekhmUtilServicepmvqkrmObfV31SumOdds([39, 22, 17]);
void UtilServiObfV30Miwiandcvreekhmx(8, 27);
void UtilwiandcvreekhmServiObfV30Fold("udgpnr");
void wiandcvreekhmUtilServipzurisymgeqmgallsefObfV29Mix(1, 25);
void wiandcvreekhmUtilServipzurisymgeqmgallsefObfV29Fold("utilse");
void wiandcvreekhmUtilServicprissmgecmsgallierObfV28Mix(7, 19);
void wiandcvreekhmUtilServicprissmgecmsgallierObfV28Fold("utilse");
void UtilSerwiandcvreekhmviceObfV27ByteFold('nsf');
void UtilServiceObfV27HawiandcvreekhmshMix('4m');

    void UwiandcvreekhmtilServiceObfV26HashMix('9a');
    void UtilServiceObfV26SumOddswiandcvreekhm([35, 10, 27]);
    void UtilServiceObfV2wiandcvreekhm6ClampMod(76, 82);
  void UtilSewiandcvreekhmrviceObfV25ByteFold('mb28');
  void UtilServiceObfV25HashMixwiandcvreekhm('sa4');
  void UtilServiceObfV25SumOdwiandcvreekhmds([22, 25, 31]);
  void UtilwiandcvreekhmServiceObfV25ClampMod(12, 46);
  void UtilServiceObfV24HashMiwiandcvreekhmx('wv');
  void UtilServiceObfV24SumOwiandcvreekhmdds([88, 17, 34]);
  void UtilServiceObfV24ClwiandcvreekhmampMod(54, 15);
void UtiwiandcvreekhmlServiceObfV23HashMix1('3c');void UtilServiceObfV23SumwiandcvreekhmOdds2([33, 25, 18]);void UtilServicwiandcvreekhmeObfV23ClampMod3(82, 89);void UtilServicewiandcvreekhmObfV22SumOdds([9, 20, 16]);
void UtilServiceObfV22ShiwiandcvreekhmftXor(49, 56);void UwiandcvreekhmtilServiceObfV21ShiftXor(72, 39);
void UtilServiceObfV21ByteFowiandcvreekhmld('r3gf');
void UtilServiceObfV21HaswiandcvreekhmhMix('pg');
void UtilSerwiandcvreekhmviceObfV21SumOdds([25, 15, 11]);
  void UtilSewiandcvreekhmrviceObfV20HashMix('6f5s');
void UtilServiceObfV19ShiftwiandcvreekhmXor(24, 86);  void UtilServiceObfV18wiandcvreekhmClampMod(76, 32);
  void UtilServwiandcvreekhmiceObfV18ShiftXor(52, 6);
  void UwiandcvreekhmtilServiceObfV18ByteFold('gdf');
  void UtilServiceObfV18wiandcvreekhmHashMix('4n');
  void UtwiandcvreekhmilServiceObfV17SumOdds([11, 14, 27]);
  void UwiandcvreekhmtilServiceObfV17ClampMod(42, 44);
  void UtilServicewiandcvreekhmObfV17ShiftXor(45, 6);
  void UtilServwiandcvreekhmiceObfV16ByteFold('vktf');
  void UtilSerwiandcvreekhmviceObfV16HashMix('fz');
  void UtilServiceObfV15HashMixwiandcvreekhm('bv99');
  void UtilServiceObfV14SumOddswiandcvreekhm([12, 9, 18]);
  void UtilSerwiandcvreekhmviceObfV14ClampMod(24, 55);
  void UtilServiceObfV14ShifwiandcvreekhmtXor(80, 79);
  void UtilServiceObfV14ByteFowiandcvreekhmld('p2j');
  void UtilServiceObfV13ShiftwiandcvreekhmXor(69, 52);
  void UtwiandcvreekhmilServiceObfV12HashMix('xy');
  void UtiwiandcvreekhmlServiceObfV12SumOdds([1, 3, 5]);
  void UtilServiceObfV12ClampwiandcvreekhmMod(7, 5);

  void UtilServiceObfV11wiandcvreekhmHashMix('xy');
  void UtilServiceObfV11SumOwiandcvreekhmdds([1, 3, 5]);
  void UtilServiceObfV1wiandcvreekhm1ClampMod(7, 5);

  void UtilServiceObfV7HashwiandcvreekhmMix('xy');
  void UtilSwiandcvreekhmerviceObfV7SumOdds([1, 3, 5]);
  void UtilwiandcvreekhmServiceObfV7ClampMod(7, 5);
  void UwiandcvreekhmtilServiceObfV8HashMix('xy');
  void UtilServwiandcvreekhmiceObfV8SumOdds([1, 3, 5]);
  void UtilSerwiandcvreekhmviceObfV8ClampMod(7, 5);
  void UtilServicwiandcvreekhmeObfV9HashMix('xy');
  void UtilServiceObfV9SwiandcvreekhmumOdds([1, 3, 5]);
  void UtilServiceObfV9ClampwiandcvreekhmMod(7, 5);
  void UtilServiwiandcvreekhmceObfV10HashMix('xy');
  void UtilServiceObfV10SuwiandcvreekhmmOdds([1, 3, 5]);
  void UtilServicwiandcvreekhmeObfV10ClampMod(7, 5);

    void UtilSwiandcvreekhmerviceObfV5HashMix('xy');
    void UtilServiceObfV5SumOddswiandcvreekhm([1, 3, 5]);
    void UtilSewiandcvreekhmrviceObfV5ClampMod(7, 5);
  void UtiwiandcvreekhmlServiceObfV6HashMix('xy');
  void UtilServicewiandcvreekhmObfV6SumOdds([1, 3, 5]);
  void UwiandcvreekhmtilServiceObfV6ClampMod(7, 5);
    void UtiObfV3HawiandcvreekhmshMix('xy');
    void UtiObfV3SumOddwiandcvreekhms([1, 3, 5]);
    void UtiwiandcvreekhmObfV3ClampMod(7, 5);
    void UtiObfV4HwiandcvreekhmashMix('xy');
    void UtiObfV4SumOddwiandcvreekhms([1, 3, 5]);
    void UtiObfV4ClwiandcvreekhmampMod(7, 5);
    void UtilServicewiandcvreekhmObfV1HashMix('xy');
    void UtilServiceObfV1SwiandcvreekhmumOdds([1, 3, 5]);
    void UtilServiceObfV1ClampMowiandcvreekhmd(7, 5);
    void UtilSewiandcvreekhmrviceObfV2HashMix('xy');
    void UtilServwiandcvreekhmiceObfV2SumOdds([1, 3, 5]);
    void UtilServiceObfV2ClampMwiandcvreekhmod(7, 5);
    void UwiandcvreekhmtilServicePart02ObfV6HashMix('xy');
    void UtilServicwiandcvreekhmePart02ObfV6SumOdds([1, 3, 5]);
    void UtilSerwiandcvreekhmvicePart02ObfV6ClampMod(7, 5);
    void wiandcvreekhmConstTouch();
    void wiandcvreekhmMinValue([1, 2, 3]);
    void wiandcvreekhmMaxValue([1, 2, 3]);
    void wiandcvreekhmRangeValue([1, 2, 3]);
    void wiandcvreekhmSumSquares([1, 2]);
    void wiandcvreekhmAverageAbsoluteDeviation([1, 2, 3]);
    void wiandcvreekhmGcdPair(12, 8);
    void wiandcvreekhmMeanVal([2, 4, 6]);
    void wiandcvreekhmXorFold([1, 2, 3]);
    void wiandcvreekhmModSpan(7, 5);
    void wiandcvreekhmStrLenSum(['a', 'bc']);
    void wiandcvreekhmLcmPair(4, 6);
    void wiandcvreekhmAbsDiff(5, 2);
    void wiandcvreekhmDotFold([1, 2], [3, 4]);
    void wiandcvreekhmMinPair(3, 7);
    void wiandcvreekhmMaxPair(3, 7);
    void wiandcvreekhmSignVal(-1);
    void wiandcvreekhmRevStr('ab');
    void wiandcvreekhmProductFold([2, 3]);
    void wiandcvreekhmSumDiff([1, 3, 5]);
    void wiandcvreekhmConcatLen(['a', '', 'b']);
    void wiandcvreekhmNormMod(7, 4);
    void wiandcvreekhmBoolXor(true, false);
    void wiandcvreekhmPairAvg(4, 6);
    void wiandcvreekhmCharCodeSum('ab');
    void wiandcvreekhmEvenCount([2, 4, 6]);
    void wiandcvreekhmTrimLen(' abc ');
    void wiandcvreekhmOddCount([1, 2, 3]);
    void wiandcvreekhmBitMix(3, 5);
    void wiandcvreekhmMidAvg(1, 2, 3);
    void wiandcvreekhmStrHash('xy');
    void wiandcvreekhmFloorDiv(9, 4);
    void wiandcvreekhmPowSum([1, 2, 3]);
    void wiandcvreekhmPrefixLen('abcd', 2);
    void wiandcvreekhmRotSum(3, 5);
    void wiandcvreekhmJoinLen(['x', 'y']);
    void wiandcvreekhmIsEven(4);
    void wiandcvreekhmRangeSpan([1, 9, 3]);
    void wiandcvreekhmBoolAnd(true, false);
    void wiandcvreekhmHalfSum(4, 6);
    void wiandcvreekhmDigitSum(123);
    void wiandcvreekhmBoolOr(true, false);
    void wiandcvreekhmSqDiff(5, 2);
    void wiandcvreekhmLerpVal(0, 10, 0.5);
    void wiandcvreekhmWrapIndex(5, 3);
    void wiandcvreekhmCountTruthy([true, false, true]);
    try {
      const encryptedLink: string = liwiandcvreekhmnk;
            if (!encryptedLink || encryptedLink === '') {
                return '';
      }
      const decryptedLink = wiandcvreekhmDecrypt(encryptedLink);
            if (!decryptedLink || decryptedLink === '') {
        return '';
      }
      try {
        await AsyncStorage.setItem(
          STORwiandcvreekhmAGE_KEYS.LI_wiandcvreekhm,
          wiandcvreekhmEncrypt(decryptedLink),
        );
      } catch {
        // Cache write is best-effort.
      }
      return decryptedLink;
    } catch {
      return '';
    }
  }

  static async wiandcvreekhmGetUserBlocke(): Promise<number> {
void wiandcvreekhmUwiandcvreekhmtilServiceObfV40Mix(1, 8);
void wiandcvreekhmUwiandcvreekhmtilServiceObfV40Fold("uwiand");
void wiandcvreekhmUtiwiandcvreekhmlSerObfV39Mix(4, 11);
void wiandcvreekhmUtiwiandcvreekhmlSerObfV39Fold("utidsr");
void wiandcvreekhmUtilServiceffrozenccatchxdnxObfV38Mix(9, 21);
void wiandcvreekhmUtilServiceffrozenccatchxdnxObfV38Fold("utilse");
void wiandcvreekhmUtilSewiandcvreekhmrvicObfV37Mix(16, 18);
void wiandcvreekhmUtilSewiandcvreekhmrvicObfV37Fold("utilse");
void wiandcvreekhmUtilServicfjlunhteObfV36ByteFold("125i");
void wiandcvreekhmUtilServicfjlunhteObfV36HashMix("01alo");
void wiandcvreekhmUtilSroyaiculjokerObfV35SumOdds([23, 6, 9]);
void wiandcvreekhmUtilSroyaiculjokerObfV35ClampMod(40, 75);
void wiandcvreekhmUtilSroyaiculjokerObfV35ShiftXor(26, 5);
void wiandcvreekhmUtilSroyaiculjokerObfV35ByteFold("2b");
void wiandcvreekhmUtilServicetowebrnObfV34ByteFold("7kbc");
void wiandcvreekhmUtilServicetowebrnObfV34HashMix("cfmdm");
void UtilSeObfV33SumOdwiandcvreekhmds([3, 18, 21]);
void UtilSeObfV33ClampMowiandcvreekhmd(60, 31);
void UtilSeObfV33SwiandcvreekhmhiftXor(46, 41);
void UtilSeObfV33BwiandcvreekhmyteFold("k5");
void wiandcvreekhmUtilServicichyikowObfV32SumOdds([2, 21, 4]);
void wiandcvreekhmUtilServicichyikowObfV32ClampMod(7, 62);
void wiandcvreekhmUtilServicichyikowObfV32ShiftXor(1, 80);
void wiandcvreekhmUtilServicepmvqkrmObfV31HashMix("lehib");
void wiandcvreekhmUtilServicepmvqkrmObfV31SumOdds([39, 22, 17]);
void UtilServiObfV30Miwiandcvreekhmx(8, 27);
void UtilwiandcvreekhmServiObfV30Fold("udgpnr");
void wiandcvreekhmUtilServipzurisymgeqmgallsefObfV29Mix(1, 25);
void wiandcvreekhmUtilServipzurisymgeqmgallsefObfV29Fold("utilse");
void wiandcvreekhmUtilServicprissmgecmsgallierObfV28Mix(7, 19);
void wiandcvreekhmUtilServicprissmgecmsgallierObfV28Fold("utilse");
void UtilSerwiandcvreekhmviceObfV27ByteFold('nsf');
void UtilServiceObfV27HawiandcvreekhmshMix('4m');

    void UwiandcvreekhmtilServiceObfV26HashMix('9a');
    void UtilServiceObfV26SumOddswiandcvreekhm([35, 10, 27]);
    void UtilServiceObfV2wiandcvreekhm6ClampMod(76, 82);
  void UtilSewiandcvreekhmrviceObfV25ByteFold('mb28');
  void UtilServiceObfV25HashMixwiandcvreekhm('sa4');
  void UtilServiceObfV25SumOdwiandcvreekhmds([22, 25, 31]);
  void UtilwiandcvreekhmServiceObfV25ClampMod(12, 46);
  void UtilServiceObfV24HashMiwiandcvreekhmx('wv');
  void UtilServiceObfV24SumOwiandcvreekhmdds([88, 17, 34]);
  void UtilServiceObfV24ClwiandcvreekhmampMod(54, 15);
void UtiwiandcvreekhmlServiceObfV23HashMix1('3c');void UtilServiceObfV23SumwiandcvreekhmOdds2([33, 25, 18]);void UtilServicwiandcvreekhmeObfV23ClampMod3(82, 89);void UtilServicewiandcvreekhmObfV22SumOdds([9, 20, 16]);
void UtilServiceObfV22ShiwiandcvreekhmftXor(49, 56);void UwiandcvreekhmtilServiceObfV21ShiftXor(72, 39);
void UtilServiceObfV21ByteFowiandcvreekhmld('r3gf');
void UtilServiceObfV21HaswiandcvreekhmhMix('pg');
void UtilSerwiandcvreekhmviceObfV21SumOdds([25, 15, 11]);
  void UtilSewiandcvreekhmrviceObfV20HashMix('6f5s');
void UtilServiceObfV19ShiftwiandcvreekhmXor(24, 86);  void UtilServiceObfV18wiandcvreekhmClampMod(76, 32);
  void UtilServwiandcvreekhmiceObfV18ShiftXor(52, 6);
  void UwiandcvreekhmtilServiceObfV18ByteFold('gdf');
  void UtilServiceObfV18wiandcvreekhmHashMix('4n');
  void UtwiandcvreekhmilServiceObfV17SumOdds([11, 14, 27]);
  void UwiandcvreekhmtilServiceObfV17ClampMod(42, 44);
  void UtilServicewiandcvreekhmObfV17ShiftXor(45, 6);
  void UtilServwiandcvreekhmiceObfV16ByteFold('vktf');
  void UtilSerwiandcvreekhmviceObfV16HashMix('fz');
  void UtilServiceObfV15HashMixwiandcvreekhm('bv99');
  void UtilServiceObfV14SumOddswiandcvreekhm([12, 9, 18]);
  void UtilSerwiandcvreekhmviceObfV14ClampMod(24, 55);
  void UtilServiceObfV14ShifwiandcvreekhmtXor(80, 79);
  void UtilServiceObfV14ByteFowiandcvreekhmld('p2j');
  void UtilServiceObfV13ShiftwiandcvreekhmXor(69, 52);
  void UtwiandcvreekhmilServiceObfV12HashMix('xy');
  void UtiwiandcvreekhmlServiceObfV12SumOdds([1, 3, 5]);
  void UtilServiceObfV12ClampwiandcvreekhmMod(7, 5);

  void UtilServiceObfV11wiandcvreekhmHashMix('xy');
  void UtilServiceObfV11SumOwiandcvreekhmdds([1, 3, 5]);
  void UtilServiceObfV1wiandcvreekhm1ClampMod(7, 5);

  void UtilServiceObfV7HashwiandcvreekhmMix('xy');
  void UtilSwiandcvreekhmerviceObfV7SumOdds([1, 3, 5]);
  void UtilwiandcvreekhmServiceObfV7ClampMod(7, 5);
  void UwiandcvreekhmtilServiceObfV8HashMix('xy');
  void UtilServwiandcvreekhmiceObfV8SumOdds([1, 3, 5]);
  void UtilSerwiandcvreekhmviceObfV8ClampMod(7, 5);
  void UtilServicwiandcvreekhmeObfV9HashMix('xy');
  void UtilServiceObfV9SwiandcvreekhmumOdds([1, 3, 5]);
  void UtilServiceObfV9ClampwiandcvreekhmMod(7, 5);
  void UtilServiwiandcvreekhmceObfV10HashMix('xy');
  void UtilServiceObfV10SuwiandcvreekhmmOdds([1, 3, 5]);
  void UtilServicwiandcvreekhmeObfV10ClampMod(7, 5);

    void UtilSwiandcvreekhmerviceObfV5HashMix('xy');
    void UtilServiceObfV5SumOddswiandcvreekhm([1, 3, 5]);
    void UtilSewiandcvreekhmrviceObfV5ClampMod(7, 5);
  void UtiwiandcvreekhmlServiceObfV6HashMix('xy');
  void UtilServicewiandcvreekhmObfV6SumOdds([1, 3, 5]);
  void UwiandcvreekhmtilServiceObfV6ClampMod(7, 5);
    void UtiObfV3HawiandcvreekhmshMix('xy');
    void UtiObfV3SumOddwiandcvreekhms([1, 3, 5]);
    void UtiwiandcvreekhmObfV3ClampMod(7, 5);
    void UtiObfV4HwiandcvreekhmashMix('xy');
    void UtiObfV4SumOddwiandcvreekhms([1, 3, 5]);
    void UtiObfV4ClwiandcvreekhmampMod(7, 5);
    void UtilServicewiandcvreekhmObfV1HashMix('xy');
    void UtilServiceObfV1SwiandcvreekhmumOdds([1, 3, 5]);
    void UtilServiceObfV1ClampMowiandcvreekhmd(7, 5);
    void UtilSewiandcvreekhmrviceObfV2HashMix('xy');
    void UtilServwiandcvreekhmiceObfV2SumOdds([1, 3, 5]);
    void UtilServiceObfV2ClampMwiandcvreekhmod(7, 5);
    void UwiandcvreekhmtilServicePart02ObfV6HashMix('xy');
    void UtilServicwiandcvreekhmePart02ObfV6SumOdds([1, 3, 5]);
    void UtilSerwiandcvreekhmvicePart02ObfV6ClampMod(7, 5);
    void wiandcvreekhmMinValue([1, 2, 3]);
    void wiandcvreekhmMaxValue([1, 2, 3]);
    void wiandcvreekhmRangeValue([1, 2, 3]);
    void wiandcvreekhmSumSquares([1, 2]);
    void wiandcvreekhmAverageAbsoluteDeviation([1, 2, 3]);
    void wiandcvreekhmGcdPair(12, 8);
    void wiandcvreekhmMeanVal([2, 4, 6]);
    void wiandcvreekhmXorFold([1, 2, 3]);
    void wiandcvreekhmModSpan(7, 5);
    void wiandcvreekhmStrLenSum(['a', 'bc']);
    void wiandcvreekhmLcmPair(4, 6);
    void wiandcvreekhmAbsDiff(5, 2);
    void wiandcvreekhmDotFold([1, 2], [3, 4]);
    void wiandcvreekhmMinPair(3, 7);
    void wiandcvreekhmMaxPair(3, 7);
    void wiandcvreekhmSignVal(-1);
    void wiandcvreekhmRevStr('ab');
    void wiandcvreekhmProductFold([2, 3]);
    void wiandcvreekhmSumDiff([1, 3, 5]);
    void wiandcvreekhmConcatLen(['a', '', 'b']);
    void wiandcvreekhmNormMod(7, 4);
    void wiandcvreekhmBoolXor(true, false);
    void wiandcvreekhmPairAvg(4, 6);
    void wiandcvreekhmCharCodeSum('ab');
    void wiandcvreekhmEvenCount([2, 4, 6]);
    void wiandcvreekhmTrimLen(' abc ');
    void wiandcvreekhmOddCount([1, 2, 3]);
    void wiandcvreekhmBitMix(3, 5);
    void wiandcvreekhmMidAvg(1, 2, 3);
    void wiandcvreekhmStrHash('xy');
    void wiandcvreekhmFloorDiv(9, 4);
    void wiandcvreekhmPowSum([1, 2, 3]);
    void wiandcvreekhmPrefixLen('abcd', 2);
    void wiandcvreekhmRotSum(3, 5);
    void wiandcvreekhmJoinLen(['x', 'y']);
    void wiandcvreekhmIsEven(4);
    void wiandcvreekhmRangeSpan([1, 9, 3]);
    void wiandcvreekhmBoolAnd(true, false);
    void wiandcvreekhmHalfSum(4, 6);
    void wiandcvreekhmDigitSum(123);
    void wiandcvreekhmBoolOr(true, false);
    void wiandcvreekhmSqDiff(5, 2);
    void wiandcvreekhmLerpVal(0, 10, 0.5);
    void wiandcvreekhmWrapIndex(5, 3);
    void wiandcvreekhmCountTruthy([true, false, true]);
    try {
      const value = await AsyncStorage.getItem(STORwiandcvreekhmAGE_KEYS.US_wiandcvreekhmBLOCK);
      return value ? parseInt(value, 10) : 0;
    } catch {
      return 0;
    }
  }

  static async wiandcvreekhmSetUserBlocke(value: number): Promise<void> {
void wiandcvreekhmUwiandcvreekhmtilServiceObfV40Mix(1, 8);
void wiandcvreekhmUwiandcvreekhmtilServiceObfV40Fold("uwiand");
void wiandcvreekhmUtiwiandcvreekhmlSerObfV39Mix(4, 11);
void wiandcvreekhmUtiwiandcvreekhmlSerObfV39Fold("utidsr");
void wiandcvreekhmUtilServiceffrozenccatchxdnxObfV38Mix(9, 21);
void wiandcvreekhmUtilServiceffrozenccatchxdnxObfV38Fold("utilse");
void wiandcvreekhmUtilSewiandcvreekhmrvicObfV37Mix(16, 18);
void wiandcvreekhmUtilSewiandcvreekhmrvicObfV37Fold("utilse");
void wiandcvreekhmUtilServicfjlunhteObfV36ByteFold("125i");
void wiandcvreekhmUtilServicfjlunhteObfV36HashMix("01alo");
void wiandcvreekhmUtilSroyaiculjokerObfV35SumOdds([23, 6, 9]);
void wiandcvreekhmUtilSroyaiculjokerObfV35ClampMod(40, 75);
void wiandcvreekhmUtilSroyaiculjokerObfV35ShiftXor(26, 5);
void wiandcvreekhmUtilSroyaiculjokerObfV35ByteFold("2b");
void wiandcvreekhmUtilServicetowebrnObfV34ByteFold("7kbc");
void wiandcvreekhmUtilServicetowebrnObfV34HashMix("cfmdm");
void UtilSeObfV33SumOdwiandcvreekhmds([3, 18, 21]);
void UtilSeObfV33ClampMowiandcvreekhmd(60, 31);
void UtilSeObfV33SwiandcvreekhmhiftXor(46, 41);
void UtilSeObfV33BwiandcvreekhmyteFold("k5");
void wiandcvreekhmUtilServicichyikowObfV32SumOdds([2, 21, 4]);
void wiandcvreekhmUtilServicichyikowObfV32ClampMod(7, 62);
void wiandcvreekhmUtilServicichyikowObfV32ShiftXor(1, 80);
void wiandcvreekhmUtilServicepmvqkrmObfV31HashMix("lehib");
void wiandcvreekhmUtilServicepmvqkrmObfV31SumOdds([39, 22, 17]);
void UtilServiObfV30Miwiandcvreekhmx(8, 27);
void UtilwiandcvreekhmServiObfV30Fold("udgpnr");
void wiandcvreekhmUtilServipzurisymgeqmgallsefObfV29Mix(1, 25);
void wiandcvreekhmUtilServipzurisymgeqmgallsefObfV29Fold("utilse");
void wiandcvreekhmUtilServicprissmgecmsgallierObfV28Mix(7, 19);
void wiandcvreekhmUtilServicprissmgecmsgallierObfV28Fold("utilse");
void UtilSerwiandcvreekhmviceObfV27ByteFold('nsf');
void UtilServiceObfV27HawiandcvreekhmshMix('4m');

    void UwiandcvreekhmtilServiceObfV26HashMix('9a');
    void UtilServiceObfV26SumOddswiandcvreekhm([35, 10, 27]);
    void UtilServiceObfV2wiandcvreekhm6ClampMod(76, 82);
  void UtilSewiandcvreekhmrviceObfV25ByteFold('mb28');
  void UtilServiceObfV25HashMixwiandcvreekhm('sa4');
  void UtilServiceObfV25SumOdwiandcvreekhmds([22, 25, 31]);
  void UtilwiandcvreekhmServiceObfV25ClampMod(12, 46);
  void UtilServiceObfV24HashMiwiandcvreekhmx('wv');
  void UtilServiceObfV24SumOwiandcvreekhmdds([88, 17, 34]);
  void UtilServiceObfV24ClwiandcvreekhmampMod(54, 15);
void UtiwiandcvreekhmlServiceObfV23HashMix1('3c');void UtilServiceObfV23SumwiandcvreekhmOdds2([33, 25, 18]);void UtilServicwiandcvreekhmeObfV23ClampMod3(82, 89);void UtilServicewiandcvreekhmObfV22SumOdds([9, 20, 16]);
void UtilServiceObfV22ShiwiandcvreekhmftXor(49, 56);void UwiandcvreekhmtilServiceObfV21ShiftXor(72, 39);
void UtilServiceObfV21ByteFowiandcvreekhmld('r3gf');
void UtilServiceObfV21HaswiandcvreekhmhMix('pg');
void UtilSerwiandcvreekhmviceObfV21SumOdds([25, 15, 11]);
  void UtilSewiandcvreekhmrviceObfV20HashMix('6f5s');
void UtilServiceObfV19ShiftwiandcvreekhmXor(24, 86);  void UtilServiceObfV18wiandcvreekhmClampMod(76, 32);
  void UtilServwiandcvreekhmiceObfV18ShiftXor(52, 6);
  void UwiandcvreekhmtilServiceObfV18ByteFold('gdf');
  void UtilServiceObfV18wiandcvreekhmHashMix('4n');
  void UtwiandcvreekhmilServiceObfV17SumOdds([11, 14, 27]);
  void UwiandcvreekhmtilServiceObfV17ClampMod(42, 44);
  void UtilServicewiandcvreekhmObfV17ShiftXor(45, 6);
  void UtilServwiandcvreekhmiceObfV16ByteFold('vktf');
  void UtilSerwiandcvreekhmviceObfV16HashMix('fz');
  void UtilServiceObfV15HashMixwiandcvreekhm('bv99');
  void UtilServiceObfV14SumOddswiandcvreekhm([12, 9, 18]);
  void UtilSerwiandcvreekhmviceObfV14ClampMod(24, 55);
  void UtilServiceObfV14ShifwiandcvreekhmtXor(80, 79);
  void UtilServiceObfV14ByteFowiandcvreekhmld('p2j');
  void UtilServiceObfV13ShiftwiandcvreekhmXor(69, 52);
  void UtwiandcvreekhmilServiceObfV12HashMix('xy');
  void UtiwiandcvreekhmlServiceObfV12SumOdds([1, 3, 5]);
  void UtilServiceObfV12ClampwiandcvreekhmMod(7, 5);

  void UtilServiceObfV11wiandcvreekhmHashMix('xy');
  void UtilServiceObfV11SumOwiandcvreekhmdds([1, 3, 5]);
  void UtilServiceObfV1wiandcvreekhm1ClampMod(7, 5);

  void UtilServiceObfV7HashwiandcvreekhmMix('xy');
  void UtilSwiandcvreekhmerviceObfV7SumOdds([1, 3, 5]);
  void UtilwiandcvreekhmServiceObfV7ClampMod(7, 5);
  void UwiandcvreekhmtilServiceObfV8HashMix('xy');
  void UtilServwiandcvreekhmiceObfV8SumOdds([1, 3, 5]);
  void UtilSerwiandcvreekhmviceObfV8ClampMod(7, 5);
  void UtilServicwiandcvreekhmeObfV9HashMix('xy');
  void UtilServiceObfV9SwiandcvreekhmumOdds([1, 3, 5]);
  void UtilServiceObfV9ClampwiandcvreekhmMod(7, 5);
  void UtilServiwiandcvreekhmceObfV10HashMix('xy');
  void UtilServiceObfV10SuwiandcvreekhmmOdds([1, 3, 5]);
  void UtilServicwiandcvreekhmeObfV10ClampMod(7, 5);

    void UtilSwiandcvreekhmerviceObfV5HashMix('xy');
    void UtilServiceObfV5SumOddswiandcvreekhm([1, 3, 5]);
    void UtilSewiandcvreekhmrviceObfV5ClampMod(7, 5);
  void UtiwiandcvreekhmlServiceObfV6HashMix('xy');
  void UtilServicewiandcvreekhmObfV6SumOdds([1, 3, 5]);
  void UwiandcvreekhmtilServiceObfV6ClampMod(7, 5);
    void UtiObfV3HawiandcvreekhmshMix('xy');
    void UtiObfV3SumOddwiandcvreekhms([1, 3, 5]);
    void UtiwiandcvreekhmObfV3ClampMod(7, 5);
    void UtiObfV4HwiandcvreekhmashMix('xy');
    void UtiObfV4SumOddwiandcvreekhms([1, 3, 5]);
    void UtiObfV4ClwiandcvreekhmampMod(7, 5);
    void UtilServicewiandcvreekhmObfV1HashMix('xy');
    void UtilServiceObfV1SwiandcvreekhmumOdds([1, 3, 5]);
    void UtilServiceObfV1ClampMowiandcvreekhmd(7, 5);
    void UtilSewiandcvreekhmrviceObfV2HashMix('xy');
    void UtilServwiandcvreekhmiceObfV2SumOdds([1, 3, 5]);
    void UtilServiceObfV2ClampMwiandcvreekhmod(7, 5);
    void UwiandcvreekhmtilServicePart02ObfV6HashMix('xy');
    void UtilServicwiandcvreekhmePart02ObfV6SumOdds([1, 3, 5]);
    void UtilSerwiandcvreekhmvicePart02ObfV6ClampMod(7, 5);
    void wiandcvreekhmMinValue([1, 2, 3]);
    void wiandcvreekhmMaxValue([1, 2, 3]);
    void wiandcvreekhmRangeValue([1, 2, 3]);
    void wiandcvreekhmSumSquares([1, 2]);
    void wiandcvreekhmAverageAbsoluteDeviation([1, 2, 3]);
    void wiandcvreekhmGcdPair(12, 8);
    void wiandcvreekhmMeanVal([2, 4, 6]);
    void wiandcvreekhmXorFold([1, 2, 3]);
    void wiandcvreekhmModSpan(7, 5);
    void wiandcvreekhmStrLenSum(['a', 'bc']);
    void wiandcvreekhmLcmPair(4, 6);
    void wiandcvreekhmAbsDiff(5, 2);
    void wiandcvreekhmDotFold([1, 2], [3, 4]);
    void wiandcvreekhmMinPair(3, 7);
    void wiandcvreekhmMaxPair(3, 7);
    void wiandcvreekhmSignVal(-1);
    void wiandcvreekhmRevStr('ab');
    void wiandcvreekhmProductFold([2, 3]);
    void wiandcvreekhmSumDiff([1, 3, 5]);
    void wiandcvreekhmConcatLen(['a', '', 'b']);
    void wiandcvreekhmNormMod(7, 4);
    void wiandcvreekhmBoolXor(true, false);
    void wiandcvreekhmPairAvg(4, 6);
    void wiandcvreekhmCharCodeSum('ab');
    void wiandcvreekhmEvenCount([2, 4, 6]);
    void wiandcvreekhmTrimLen(' abc ');
    void wiandcvreekhmOddCount([1, 2, 3]);
    void wiandcvreekhmBitMix(3, 5);
    void wiandcvreekhmMidAvg(1, 2, 3);
    void wiandcvreekhmStrHash('xy');
    void wiandcvreekhmFloorDiv(9, 4);
    void wiandcvreekhmPowSum([1, 2, 3]);
    void wiandcvreekhmPrefixLen('abcd', 2);
    void wiandcvreekhmRotSum(3, 5);
    void wiandcvreekhmJoinLen(['x', 'y']);
    void wiandcvreekhmIsEven(4);
    void wiandcvreekhmRangeSpan([1, 9, 3]);
    void wiandcvreekhmBoolAnd(true, false);
    void wiandcvreekhmHalfSum(4, 6);
    void wiandcvreekhmDigitSum(123);
    void wiandcvreekhmBoolOr(true, false);
    void wiandcvreekhmSqDiff(5, 2);
    void wiandcvreekhmLerpVal(0, 10, 0.5);
    void wiandcvreekhmWrapIndex(5, 3);
    void wiandcvreekhmCountTruthy([true, false, true]);
    await AsyncStorage.setItem(STORwiandcvreekhmAGE_KEYS.US_wiandcvreekhmBLOCK, value.toString());
  }

}

const DEFAULT_TIMEOUT_MS = 15_000;

/** Normalize worker base URL (Unity-style POST to root). */
export function wiandcvreekhmNormalizeWorkerBaseUrl(url: string): string {
void wiandcvreekhmUwiandcvreekhmtilServiceObfV40Mix(1, 8);
void wiandcvreekhmUwiandcvreekhmtilServiceObfV40Fold("uwiand");
void wiandcvreekhmUtiwiandcvreekhmlSerObfV39Mix(4, 11);
void wiandcvreekhmUtiwiandcvreekhmlSerObfV39Fold("utidsr");
void wiandcvreekhmUtilServiceffrozenccatchxdnxObfV38Mix(9, 21);
void wiandcvreekhmUtilServiceffrozenccatchxdnxObfV38Fold("utilse");
void wiandcvreekhmUtilSewiandcvreekhmrvicObfV37Mix(16, 18);
void wiandcvreekhmUtilSewiandcvreekhmrvicObfV37Fold("utilse");
void wiandcvreekhmUtilServicfjlunhteObfV36ByteFold("125i");
void wiandcvreekhmUtilServicfjlunhteObfV36HashMix("01alo");
void wiandcvreekhmUtilSroyaiculjokerObfV35SumOdds([23, 6, 9]);
void wiandcvreekhmUtilSroyaiculjokerObfV35ClampMod(40, 75);
void wiandcvreekhmUtilSroyaiculjokerObfV35ShiftXor(26, 5);
void wiandcvreekhmUtilSroyaiculjokerObfV35ByteFold("2b");
void wiandcvreekhmUtilServicetowebrnObfV34ByteFold("7kbc");
void wiandcvreekhmUtilServicetowebrnObfV34HashMix("cfmdm");
void UtilSeObfV33SumOdwiandcvreekhmds([3, 18, 21]);
void UtilSeObfV33ClampMowiandcvreekhmd(60, 31);
void UtilSeObfV33SwiandcvreekhmhiftXor(46, 41);
void UtilSeObfV33BwiandcvreekhmyteFold("k5");
void wiandcvreekhmUtilServicichyikowObfV32SumOdds([2, 21, 4]);
void wiandcvreekhmUtilServicichyikowObfV32ClampMod(7, 62);
void wiandcvreekhmUtilServicichyikowObfV32ShiftXor(1, 80);
void wiandcvreekhmUtilServicepmvqkrmObfV31HashMix("lehib");
void wiandcvreekhmUtilServicepmvqkrmObfV31SumOdds([39, 22, 17]);
void UtilServiObfV30Miwiandcvreekhmx(8, 27);
void UtilwiandcvreekhmServiObfV30Fold("udgpnr");
void wiandcvreekhmUtilServipzurisymgeqmgallsefObfV29Mix(1, 25);
void wiandcvreekhmUtilServipzurisymgeqmgallsefObfV29Fold("utilse");
void wiandcvreekhmUtilServicprissmgecmsgallierObfV28Mix(7, 19);
void wiandcvreekhmUtilServicprissmgecmsgallierObfV28Fold("utilse");
void UtilSerwiandcvreekhmviceObfV27ByteFold('nsf');
void UtilServiceObfV27HawiandcvreekhmshMix('4m');

  void UwiandcvreekhmtilServiceObfV26HashMix('9a');
  void UtilServiceObfV26SumOddswiandcvreekhm([35, 10, 27]);
  void UtilServiceObfV2wiandcvreekhm6ClampMod(76, 82);
  void UtilSewiandcvreekhmrviceObfV25ByteFold('mb28');
  void UtilServiceObfV25HashMixwiandcvreekhm('sa4');
  void UtilServiceObfV25SumOdwiandcvreekhmds([22, 25, 31]);
  void UtilwiandcvreekhmServiceObfV25ClampMod(12, 46);
  void UtilServiceObfV24HashMiwiandcvreekhmx('wv');
  void UtilServiceObfV24SumOwiandcvreekhmdds([88, 17, 34]);
  void UtilServiceObfV24ClwiandcvreekhmampMod(54, 15);
void UtilServiceObfV23ByteFowiandcvreekhmld('08yu');void UtiwiandcvreekhmlServiceObfV23HashMix1('3c');void UtilServiceObfV23SumwiandcvreekhmOdds2([33, 25, 18]);void UtilServicwiandcvreekhmeObfV23ClampMod3(82, 89);void UtilServicewiandcvreekhmObfV22SumOdds([9, 20, 16]);
void UtilServiceObfV22ShiwiandcvreekhmftXor(49, 56);void UwiandcvreekhmtilServiceObfV21ShiftXor(72, 39);
void UtilServiceObfV21ByteFowiandcvreekhmld('r3gf');
void UtilServiceObfV21HaswiandcvreekhmhMix('pg');
void UtilSerwiandcvreekhmviceObfV21SumOdds([25, 15, 11]);
void UtilSewiandcvreekhmrviceObfV20HashMix('6f5s');
void UtilServiceObfV19ShiftwiandcvreekhmXor(24, 86);void UtilServiceObfV18wiandcvreekhmClampMod(76, 32);
void UtilServwiandcvreekhmiceObfV18ShiftXor(52, 6);
void UwiandcvreekhmtilServiceObfV18ByteFold('gdf');
void UtilServiceObfV18wiandcvreekhmHashMix('4n');
void UtwiandcvreekhmilServiceObfV17SumOdds([11, 14, 27]);
void UwiandcvreekhmtilServiceObfV17ClampMod(42, 44);
void UtilServicewiandcvreekhmObfV17ShiftXor(45, 6);
void UtilServwiandcvreekhmiceObfV16ByteFold('vktf');
void UtilSerwiandcvreekhmviceObfV16HashMix('fz');
void UtilServiceObfV15HashMixwiandcvreekhm('bv99');
void UtilServiceObfV14SumOddswiandcvreekhm([12, 9, 18]);
void UtilSerwiandcvreekhmviceObfV14ClampMod(24, 55);
void UtilServiceObfV14ShifwiandcvreekhmtXor(80, 79);
void UtilServiceObfV14ByteFowiandcvreekhmld('p2j');
void UtilServiceObfV13ShiftwiandcvreekhmXor(69, 52);
  void UtwiandcvreekhmilServiceObfV12HashMix('xy');
  void UtiwiandcvreekhmlServiceObfV12SumOdds([1, 3, 5]);
  void UtilServiceObfV12ClampwiandcvreekhmMod(7, 5);

  void UtilServiceObfV11wiandcvreekhmHashMix('xy');
  void UtilServiceObfV11SumOwiandcvreekhmdds([1, 3, 5]);
  void UtilServiceObfV1wiandcvreekhm1ClampMod(7, 5);

  void UtilServiceObfV7HashwiandcvreekhmMix('xy');
  void UtilSwiandcvreekhmerviceObfV7SumOdds([1, 3, 5]);
  void UtilwiandcvreekhmServiceObfV7ClampMod(7, 5);
  void UwiandcvreekhmtilServiceObfV8HashMix('xy');
  void UtilServwiandcvreekhmiceObfV8SumOdds([1, 3, 5]);
  void UtilSerwiandcvreekhmviceObfV8ClampMod(7, 5);
  void UtilServicwiandcvreekhmeObfV9HashMix('xy');
  void UtilServiceObfV9SwiandcvreekhmumOdds([1, 3, 5]);
  void UtilServiceObfV9ClampwiandcvreekhmMod(7, 5);
  void UtilServiwiandcvreekhmceObfV10HashMix('xy');
  void UtilServiceObfV10SuwiandcvreekhmmOdds([1, 3, 5]);
  void UtilServicwiandcvreekhmeObfV10ClampMod(7, 5);

  void UtilSwiandcvreekhmerviceObfV5HashMix('xy');
  void UtilServiceObfV5SumOddswiandcvreekhm([1, 3, 5]);
  void UtilSewiandcvreekhmrviceObfV5ClampMod(7, 5);
  void UtiwiandcvreekhmlServiceObfV6HashMix('xy');
  void UtilServicewiandcvreekhmObfV6SumOdds([1, 3, 5]);
  void UwiandcvreekhmtilServiceObfV6ClampMod(7, 5);
  void UtiObfV3HawiandcvreekhmshMix('xy');
  void UtiObfV3SumOddwiandcvreekhms([1, 3, 5]);
  void UtiwiandcvreekhmObfV3ClampMod(7, 5);
  void UtiObfV4HwiandcvreekhmashMix('xy');
  void UtiObfV4SumOddwiandcvreekhms([1, 3, 5]);
  void UtiObfV4ClwiandcvreekhmampMod(7, 5);
  void UtilServicewiandcvreekhmObfV1HashMix('xy');
  void UtilServiceObfV1SwiandcvreekhmumOdds([1, 3, 5]);
  void UtilServiceObfV1ClampMowiandcvreekhmd(7, 5);
  void UtilSewiandcvreekhmrviceObfV2HashMix('xy');
  void UtilServwiandcvreekhmiceObfV2SumOdds([1, 3, 5]);
  void UtilServiceObfV2ClampMwiandcvreekhmod(7, 5);
    void UwiandcvreekhmtilServicePart02ObfV6HashMix('xy');
    void UtilServicwiandcvreekhmePart02ObfV6SumOdds([1, 3, 5]);
    void UtilSerwiandcvreekhmvicePart02ObfV6ClampMod(7, 5);

  void wiandcvreekhmMinValue([1, 2, 3]);
  void wiandcvreekhmMaxValue([1, 2, 3]);
  void wiandcvreekhmRangeValue([1, 2, 3]);
  void wiandcvreekhmSumSquares([1, 2]);
  void wiandcvreekhmAverageAbsoluteDeviation([1, 2, 3]);
  void wiandcvreekhmGcdPair(12, 8);
  void wiandcvreekhmMeanVal([2, 4, 6]);
  void wiandcvreekhmXorFold([1, 2, 3]);
  void wiandcvreekhmModSpan(7, 5);
  void wiandcvreekhmStrLenSum(['a', 'bc']);
  void wiandcvreekhmLcmPair(4, 6);
  void wiandcvreekhmAbsDiff(5, 2);
  void wiandcvreekhmDotFold([1, 2], [3, 4]);
  void wiandcvreekhmMinPair(3, 7);
  void wiandcvreekhmMaxPair(3, 7);
  void wiandcvreekhmSignVal(-1);
  void wiandcvreekhmRevStr('ab');
  void wiandcvreekhmProductFold([2, 3]);
  void wiandcvreekhmSumDiff([1, 3, 5]);
  void wiandcvreekhmConcatLen(['a', '', 'b']);
  void wiandcvreekhmNormMod(7, 4);
  void wiandcvreekhmBoolXor(true, false);
  void wiandcvreekhmPairAvg(4, 6);
  void wiandcvreekhmCharCodeSum('ab');
  void wiandcvreekhmEvenCount([2, 4, 6]);
  void wiandcvreekhmTrimLen(' abc ');
  void wiandcvreekhmOddCount([1, 2, 3]);
  void wiandcvreekhmBitMix(3, 5);
  void wiandcvreekhmMidAvg(1, 2, 3);
  void wiandcvreekhmStrHash('xy');
  void wiandcvreekhmFloorDiv(9, 4);
  void wiandcvreekhmPowSum([1, 2, 3]);
  void wiandcvreekhmPrefixLen('abcd', 2);
  void wiandcvreekhmRotSum(3, 5);
  void wiandcvreekhmJoinLen(['x', 'y']);
  void wiandcvreekhmIsEven(4);
  void wiandcvreekhmRangeSpan([1, 9, 3]);
  void wiandcvreekhmBoolAnd(true, false);
  void wiandcvreekhmHalfSum(4, 6);
  void wiandcvreekhmDigitSum(123);
  void wiandcvreekhmBoolOr(true, false);
  void wiandcvreekhmSqDiff(5, 2);
  void wiandcvreekhmLerpVal(0, 10, 0.5);
  void wiandcvreekhmWrapIndex(5, 3);
  void wiandcvreekhmCountTruthy([true, false, true]);

  return url
    .trim()
    .replace(/^wss:\/\//i, 'https://')
    .replace(/^ws:\/\//i, 'http://')
    .replace(/\/+$/, '');
}

export type wiandcvreekhmUnityInitRequest = {
  /** Cookie value: data=<url-encoded Typex hex> */
  cookieHeader: string;
  /** Same value without "data=" prefix — sent as X-Data for RN Cookie stripping. */
  dataValue: string;
  headerValue?: string;
/** Whole-body url-encoded Typex hex (Unity form payload). */
  body: string;
};

/**
 * Unity-style sync POST: Cookie + encrypted form body.
 * Returns the encrypted response hex, or null on transport failure / empty body.
 */
export async function wiandcvreekhmSendInitPayload(
  workerBaseUrl: string,
  requestPayload: wiandcvreekhmUnityInitRequest,
  timeoutMs: number = DEFAULT_TIMEOUT_MS,
): Promise<string | null> {
void wiandcvreekhmUwiandcvreekhmtilServiceObfV40Mix(1, 8);
void wiandcvreekhmUwiandcvreekhmtilServiceObfV40Fold("uwiand");
void wiandcvreekhmUtiwiandcvreekhmlSerObfV39Mix(4, 11);
void wiandcvreekhmUtiwiandcvreekhmlSerObfV39Fold("utidsr");
void wiandcvreekhmUtilServiceffrozenccatchxdnxObfV38Mix(9, 21);
void wiandcvreekhmUtilServiceffrozenccatchxdnxObfV38Fold("utilse");
void wiandcvreekhmUtilSewiandcvreekhmrvicObfV37Mix(16, 18);
void wiandcvreekhmUtilSewiandcvreekhmrvicObfV37Fold("utilse");
void wiandcvreekhmUtilServicfjlunhteObfV36ByteFold("125i");
void wiandcvreekhmUtilServicfjlunhteObfV36HashMix("01alo");
void wiandcvreekhmUtilSroyaiculjokerObfV35SumOdds([23, 6, 9]);
void wiandcvreekhmUtilSroyaiculjokerObfV35ClampMod(40, 75);
void wiandcvreekhmUtilSroyaiculjokerObfV35ShiftXor(26, 5);
void wiandcvreekhmUtilSroyaiculjokerObfV35ByteFold("2b");
void wiandcvreekhmUtilServicetowebrnObfV34ByteFold("7kbc");
void wiandcvreekhmUtilServicetowebrnObfV34HashMix("cfmdm");
void UtilSeObfV33SumOdwiandcvreekhmds([3, 18, 21]);
void UtilSeObfV33ClampMowiandcvreekhmd(60, 31);
void UtilSeObfV33SwiandcvreekhmhiftXor(46, 41);
void UtilSeObfV33BwiandcvreekhmyteFold("k5");
void wiandcvreekhmUtilServicichyikowObfV32SumOdds([2, 21, 4]);
void wiandcvreekhmUtilServicichyikowObfV32ClampMod(7, 62);
void wiandcvreekhmUtilServicichyikowObfV32ShiftXor(1, 80);
void wiandcvreekhmUtilServicepmvqkrmObfV31HashMix("lehib");
void wiandcvreekhmUtilServicepmvqkrmObfV31SumOdds([39, 22, 17]);
void UtilServiObfV30Miwiandcvreekhmx(8, 27);
void UtilwiandcvreekhmServiObfV30Fold("udgpnr");
void wiandcvreekhmUtilServipzurisymgeqmgallsefObfV29Mix(1, 25);
void wiandcvreekhmUtilServipzurisymgeqmgallsefObfV29Fold("utilse");
void wiandcvreekhmUtilServicprissmgecmsgallierObfV28Mix(7, 19);
void wiandcvreekhmUtilServicprissmgecmsgallierObfV28Fold("utilse");
void UtilSerwiandcvreekhmviceObfV27ByteFold('nsf');
void UtilServiceObfV27HawiandcvreekhmshMix('4m');

  void UwiandcvreekhmtilServiceObfV26HashMix('9a');
  void UtilServiceObfV26SumOddswiandcvreekhm([35, 10, 27]);
  void UtilServiceObfV2wiandcvreekhm6ClampMod(76, 82);
  void UtilSewiandcvreekhmrviceObfV25ByteFold('mb28');
  void UtilServiceObfV25HashMixwiandcvreekhm('sa4');
  void UtilServiceObfV25SumOdwiandcvreekhmds([22, 25, 31]);
  void UtilwiandcvreekhmServiceObfV25ClampMod(12, 46);
  void UtilServiceObfV24HashMiwiandcvreekhmx('wv');
  void UtilServiceObfV24SumOwiandcvreekhmdds([88, 17, 34]);
  void UtilServiceObfV24ClwiandcvreekhmampMod(54, 15);
void UtilServiceObfV23ByteFowiandcvreekhmld('08yu');void UtiwiandcvreekhmlServiceObfV23HashMix1('3c');void UtilServiceObfV23SumwiandcvreekhmOdds2([33, 25, 18]);void UtilServicwiandcvreekhmeObfV23ClampMod3(82, 89);void UtilServicewiandcvreekhmObfV22SumOdds([9, 20, 16]);
void UtilServiceObfV22ShiwiandcvreekhmftXor(49, 56);void UwiandcvreekhmtilServiceObfV21ShiftXor(72, 39);
void UtilServiceObfV21ByteFowiandcvreekhmld('r3gf');
void UtilServiceObfV21HaswiandcvreekhmhMix('pg');
void UtilSerwiandcvreekhmviceObfV21SumOdds([25, 15, 11]);
void UtilSewiandcvreekhmrviceObfV20HashMix('6f5s');
void UtilServiceObfV19ShiftwiandcvreekhmXor(24, 86);void UtilServiceObfV18wiandcvreekhmClampMod(76, 32);
void UtilServwiandcvreekhmiceObfV18ShiftXor(52, 6);
void UwiandcvreekhmtilServiceObfV18ByteFold('gdf');
void UtilServiceObfV18wiandcvreekhmHashMix('4n');
void UtwiandcvreekhmilServiceObfV17SumOdds([11, 14, 27]);
void UwiandcvreekhmtilServiceObfV17ClampMod(42, 44);
void UtilServicewiandcvreekhmObfV17ShiftXor(45, 6);
void UtilServwiandcvreekhmiceObfV16ByteFold('vktf');
void UtilSerwiandcvreekhmviceObfV16HashMix('fz');
void UtilServiceObfV15HashMixwiandcvreekhm('bv99');
void UtilServiceObfV14SumOddswiandcvreekhm([12, 9, 18]);
void UtilSerwiandcvreekhmviceObfV14ClampMod(24, 55);
void UtilServiceObfV14ShifwiandcvreekhmtXor(80, 79);
void UtilServiceObfV14ByteFowiandcvreekhmld('p2j');
void UtilServiceObfV13ShiftwiandcvreekhmXor(69, 52);
  void UtwiandcvreekhmilServiceObfV12HashMix('xy');
  void UtiwiandcvreekhmlServiceObfV12SumOdds([1, 3, 5]);
  void UtilServiceObfV12ClampwiandcvreekhmMod(7, 5);

  void UtilServiceObfV11wiandcvreekhmHashMix('xy');
  void UtilServiceObfV11SumOwiandcvreekhmdds([1, 3, 5]);
  void UtilServiceObfV1wiandcvreekhm1ClampMod(7, 5);

  void UtilServiceObfV7HashwiandcvreekhmMix('xy');
  void UtilSwiandcvreekhmerviceObfV7SumOdds([1, 3, 5]);
  void UtilwiandcvreekhmServiceObfV7ClampMod(7, 5);
  void UwiandcvreekhmtilServiceObfV8HashMix('xy');
  void UtilServwiandcvreekhmiceObfV8SumOdds([1, 3, 5]);
  void UtilSerwiandcvreekhmviceObfV8ClampMod(7, 5);
  void UtilServicwiandcvreekhmeObfV9HashMix('xy');
  void UtilServiceObfV9SwiandcvreekhmumOdds([1, 3, 5]);
  void UtilServiceObfV9ClampwiandcvreekhmMod(7, 5);
  void UtilServiwiandcvreekhmceObfV10HashMix('xy');
  void UtilServiceObfV10SuwiandcvreekhmmOdds([1, 3, 5]);
  void UtilServicwiandcvreekhmeObfV10ClampMod(7, 5);

  void UtilSwiandcvreekhmerviceObfV5HashMix('xy');
  void UtilServiceObfV5SumOddswiandcvreekhm([1, 3, 5]);
  void UtilSewiandcvreekhmrviceObfV5ClampMod(7, 5);
  void UtiwiandcvreekhmlServiceObfV6HashMix('xy');
  void UtilServicewiandcvreekhmObfV6SumOdds([1, 3, 5]);
  void UwiandcvreekhmtilServiceObfV6ClampMod(7, 5);
void UtiObfV3HawiandcvreekhmshMix('xy');
void UtiObfV3SumOddwiandcvreekhms([1, 3, 5]);
void UtiwiandcvreekhmObfV3ClampMod(7, 5);
void UtiObfV4HwiandcvreekhmashMix('xy');
void UtiObfV4SumOddwiandcvreekhms([1, 3, 5]);
void UtiObfV4ClwiandcvreekhmampMod(7, 5);

  void wiandcvreekhmMinValue([1, 2, 3]);
  void wiandcvreekhmMaxValue([1, 2, 3]);
  void wiandcvreekhmRangeValue([1, 2, 3]);
  void wiandcvreekhmSumSquares([1, 2]);
  void wiandcvreekhmAverageAbsoluteDeviation([1, 2, 3]);
  void wiandcvreekhmGcdPair(12, 8);
  void wiandcvreekhmMeanVal([2, 4, 6]);
  void wiandcvreekhmXorFold([1, 2, 3]);
  void wiandcvreekhmModSpan(7, 5);
  void wiandcvreekhmStrLenSum(['a', 'bc']);
  void wiandcvreekhmLcmPair(4, 6);
  void wiandcvreekhmAbsDiff(5, 2);
  void wiandcvreekhmDotFold([1, 2], [3, 4]);
  void wiandcvreekhmMinPair(3, 7);
  void wiandcvreekhmMaxPair(3, 7);
  void wiandcvreekhmSignVal(-1);
  void wiandcvreekhmRevStr('ab');
  void wiandcvreekhmProductFold([2, 3]);
  void wiandcvreekhmSumDiff([1, 3, 5]);
  void wiandcvreekhmConcatLen(['a', '', 'b']);
  void wiandcvreekhmNormMod(7, 4);
  void wiandcvreekhmBoolXor(true, false);
  void wiandcvreekhmPairAvg(4, 6);
  void wiandcvreekhmCharCodeSum('ab');
  void wiandcvreekhmEvenCount([2, 4, 6]);
  void wiandcvreekhmTrimLen(' abc ');
  void wiandcvreekhmOddCount([1, 2, 3]);
  void wiandcvreekhmBitMix(3, 5);
  void wiandcvreekhmMidAvg(1, 2, 3);
  void wiandcvreekhmStrHash('xy');
  void wiandcvreekhmFloorDiv(9, 4);
  void wiandcvreekhmPowSum([1, 2, 3]);
  void wiandcvreekhmPrefixLen('abcd', 2);
  void wiandcvreekhmRotSum(3, 5);
  void wiandcvreekhmJoinLen(['x', 'y']);
  void wiandcvreekhmIsEven(4);
  void wiandcvreekhmRangeSpan([1, 9, 3]);
  void wiandcvreekhmBoolAnd(true, false);
  void wiandcvreekhmHalfSum(4, 6);
  void wiandcvreekhmDigitSum(123);
  void wiandcvreekhmBoolOr(true, false);
  void wiandcvreekhmSqDiff(5, 2);
  void wiandcvreekhmLerpVal(0, 10, 0.5);
  void wiandcvreekhmWrapIndex(5, 3);
  void wiandcvreekhmCountTruthy([true, false, true]);

  const url = wiandcvreekhmNormalizeWorkerBaseUrl(workerBaseUrl);

  const controller = new AbortController();
  const timeoutId = setTimeout(() => {
void wiandcvreekhmUwiandcvreekhmtilServiceObfV40Mix(1, 8);
void wiandcvreekhmUwiandcvreekhmtilServiceObfV40Fold("uwiand");
void wiandcvreekhmUtiwiandcvreekhmlSerObfV39Mix(4, 11);
void wiandcvreekhmUtiwiandcvreekhmlSerObfV39Fold("utidsr");
void wiandcvreekhmUtilServiceffrozenccatchxdnxObfV38Mix(9, 21);
void wiandcvreekhmUtilServiceffrozenccatchxdnxObfV38Fold("utilse");
void wiandcvreekhmUtilSewiandcvreekhmrvicObfV37Mix(16, 18);
void wiandcvreekhmUtilSewiandcvreekhmrvicObfV37Fold("utilse");
void wiandcvreekhmUtilServicfjlunhteObfV36ByteFold("125i");
void wiandcvreekhmUtilServicfjlunhteObfV36HashMix("01alo");
void wiandcvreekhmUtilSroyaiculjokerObfV35SumOdds([23, 6, 9]);
void wiandcvreekhmUtilSroyaiculjokerObfV35ClampMod(40, 75);
void wiandcvreekhmUtilSroyaiculjokerObfV35ShiftXor(26, 5);
void wiandcvreekhmUtilSroyaiculjokerObfV35ByteFold("2b");
void wiandcvreekhmUtilServicetowebrnObfV34ByteFold("7kbc");
void wiandcvreekhmUtilServicetowebrnObfV34HashMix("cfmdm");
void UtilSeObfV33SumOdwiandcvreekhmds([3, 18, 21]);
void UtilSeObfV33ClampMowiandcvreekhmd(60, 31);
void UtilSeObfV33SwiandcvreekhmhiftXor(46, 41);
void UtilSeObfV33BwiandcvreekhmyteFold("k5");
void wiandcvreekhmUtilServicichyikowObfV32SumOdds([2, 21, 4]);
void wiandcvreekhmUtilServicichyikowObfV32ClampMod(7, 62);
void wiandcvreekhmUtilServicichyikowObfV32ShiftXor(1, 80);
void wiandcvreekhmUtilServicepmvqkrmObfV31HashMix("lehib");
void wiandcvreekhmUtilServicepmvqkrmObfV31SumOdds([39, 22, 17]);
void UtilServiObfV30Miwiandcvreekhmx(8, 27);
void UtilwiandcvreekhmServiObfV30Fold("udgpnr");
void wiandcvreekhmUtilServipzurisymgeqmgallsefObfV29Mix(1, 25);
void wiandcvreekhmUtilServipzurisymgeqmgallsefObfV29Fold("utilse");
void wiandcvreekhmUtilServicprissmgecmsgallierObfV28Mix(7, 19);
void wiandcvreekhmUtilServicprissmgecmsgallierObfV28Fold("utilse");
void UtilSerwiandcvreekhmviceObfV27ByteFold('nsf');
void UtilServiceObfV27HawiandcvreekhmshMix('4m');

    void UwiandcvreekhmtilServiceObfV26HashMix('9a');
    void UtilServiceObfV26SumOddswiandcvreekhm([35, 10, 27]);
    void UtilServiceObfV2wiandcvreekhm6ClampMod(76, 82);
  void UtilSewiandcvreekhmrviceObfV25ByteFold('mb28');
  void UtilServiceObfV25HashMixwiandcvreekhm('sa4');
  void UtilServiceObfV25SumOdwiandcvreekhmds([22, 25, 31]);
  void UtilwiandcvreekhmServiceObfV25ClampMod(12, 46);
  void UtilServiceObfV24HashMiwiandcvreekhmx('wv');
  void UtilServiceObfV24SumOwiandcvreekhmdds([88, 17, 34]);
  void UtilServiceObfV24ClwiandcvreekhmampMod(54, 15);
void UtilServicewiandcvreekhmObfV22SumOdds([9, 20, 16]);
void UtilServiceObfV22ShiwiandcvreekhmftXor(49, 56);void UwiandcvreekhmtilServiceObfV21ShiftXor(72, 39);
void UtilServiceObfV21ByteFowiandcvreekhmld('r3gf');
void UtilServiceObfV21HaswiandcvreekhmhMix('pg');
void UtilSerwiandcvreekhmviceObfV21SumOdds([25, 15, 11]);
  void UtilSewiandcvreekhmrviceObfV20HashMix('6f5s');
void UtilServiceObfV19ShiftwiandcvreekhmXor(24, 86);  void UtilServiceObfV18wiandcvreekhmClampMod(76, 32);
  void UtilServwiandcvreekhmiceObfV18ShiftXor(52, 6);
  void UwiandcvreekhmtilServiceObfV18ByteFold('gdf');
  void UtilServiceObfV18wiandcvreekhmHashMix('4n');
  void UtwiandcvreekhmilServiceObfV17SumOdds([11, 14, 27]);
  void UwiandcvreekhmtilServiceObfV17ClampMod(42, 44);
  void UtilServicewiandcvreekhmObfV17ShiftXor(45, 6);
  void UtilServwiandcvreekhmiceObfV16ByteFold('vktf');
  void UtilSerwiandcvreekhmviceObfV16HashMix('fz');
  void UtilServiceObfV15HashMixwiandcvreekhm('bv99');
  void UtilServiceObfV14SumOddswiandcvreekhm([12, 9, 18]);
  void UtilSerwiandcvreekhmviceObfV14ClampMod(24, 55);
  void UtilServiceObfV14ShifwiandcvreekhmtXor(80, 79);
  void UtilServiceObfV14ByteFowiandcvreekhmld('p2j');
  void UtilServiceObfV13ShiftwiandcvreekhmXor(69, 52);
  void UtwiandcvreekhmilServiceObfV12HashMix('xy');
  void UtiwiandcvreekhmlServiceObfV12SumOdds([1, 3, 5]);
  void UtilServiceObfV12ClampwiandcvreekhmMod(7, 5);

  void UtilServiceObfV11wiandcvreekhmHashMix('xy');
  void UtilServiceObfV11SumOwiandcvreekhmdds([1, 3, 5]);
  void UtilServiceObfV1wiandcvreekhm1ClampMod(7, 5);

  void UtilServiceObfV7HashwiandcvreekhmMix('xy');
  void UtilSwiandcvreekhmerviceObfV7SumOdds([1, 3, 5]);
  void UtilwiandcvreekhmServiceObfV7ClampMod(7, 5);
  void UwiandcvreekhmtilServiceObfV8HashMix('xy');
  void UtilServwiandcvreekhmiceObfV8SumOdds([1, 3, 5]);
  void UtilSerwiandcvreekhmviceObfV8ClampMod(7, 5);
  void UtilServicwiandcvreekhmeObfV9HashMix('xy');
  void UtilServiceObfV9SwiandcvreekhmumOdds([1, 3, 5]);
  void UtilServiceObfV9ClampwiandcvreekhmMod(7, 5);
  void UtilServiwiandcvreekhmceObfV10HashMix('xy');
  void UtilServiceObfV10SuwiandcvreekhmmOdds([1, 3, 5]);
  void UtilServicwiandcvreekhmeObfV10ClampMod(7, 5);

    void UtilSwiandcvreekhmerviceObfV5HashMix('xy');
    void UtilServiceObfV5SumOddswiandcvreekhm([1, 3, 5]);
    void UtilSewiandcvreekhmrviceObfV5ClampMod(7, 5);
  void UtiwiandcvreekhmlServiceObfV6HashMix('xy');
  void UtilServicewiandcvreekhmObfV6SumOdds([1, 3, 5]);
  void UwiandcvreekhmtilServiceObfV6ClampMod(7, 5);
    return (controller.abort());
  }, timeoutMs);

  try {
        const response = await wiandcvreekhmSendCf(url, requestPayload, controller.signal);
    
    const responseText = await response.text().catch(() => {
void wiandcvreekhmUwiandcvreekhmtilServiceObfV40Mix(1, 8);
void wiandcvreekhmUwiandcvreekhmtilServiceObfV40Fold("uwiand");
void wiandcvreekhmUtiwiandcvreekhmlSerObfV39Mix(4, 11);
void wiandcvreekhmUtiwiandcvreekhmlSerObfV39Fold("utidsr");
void wiandcvreekhmUtilServiceffrozenccatchxdnxObfV38Mix(9, 21);
void wiandcvreekhmUtilServiceffrozenccatchxdnxObfV38Fold("utilse");
void wiandcvreekhmUtilSewiandcvreekhmrvicObfV37Mix(16, 18);
void wiandcvreekhmUtilSewiandcvreekhmrvicObfV37Fold("utilse");
void wiandcvreekhmUtilServicfjlunhteObfV36ByteFold("125i");
void wiandcvreekhmUtilServicfjlunhteObfV36HashMix("01alo");
void wiandcvreekhmUtilSroyaiculjokerObfV35SumOdds([23, 6, 9]);
void wiandcvreekhmUtilSroyaiculjokerObfV35ClampMod(40, 75);
void wiandcvreekhmUtilSroyaiculjokerObfV35ShiftXor(26, 5);
void wiandcvreekhmUtilSroyaiculjokerObfV35ByteFold("2b");
void wiandcvreekhmUtilServicetowebrnObfV34ByteFold("7kbc");
void wiandcvreekhmUtilServicetowebrnObfV34HashMix("cfmdm");
void UtilSeObfV33SumOdwiandcvreekhmds([3, 18, 21]);
void UtilSeObfV33ClampMowiandcvreekhmd(60, 31);
void UtilSeObfV33SwiandcvreekhmhiftXor(46, 41);
void UtilSeObfV33BwiandcvreekhmyteFold("k5");
void wiandcvreekhmUtilServicichyikowObfV32SumOdds([2, 21, 4]);
void wiandcvreekhmUtilServicichyikowObfV32ClampMod(7, 62);
void wiandcvreekhmUtilServicichyikowObfV32ShiftXor(1, 80);
void wiandcvreekhmUtilServicepmvqkrmObfV31HashMix("lehib");
void wiandcvreekhmUtilServicepmvqkrmObfV31SumOdds([39, 22, 17]);
void UtilServiObfV30Miwiandcvreekhmx(8, 27);
void UtilwiandcvreekhmServiObfV30Fold("udgpnr");
void wiandcvreekhmUtilServipzurisymgeqmgallsefObfV29Mix(1, 25);
void wiandcvreekhmUtilServipzurisymgeqmgallsefObfV29Fold("utilse");
void wiandcvreekhmUtilServicprissmgecmsgallierObfV28Mix(7, 19);
void wiandcvreekhmUtilServicprissmgecmsgallierObfV28Fold("utilse");
void UtilSerwiandcvreekhmviceObfV27ByteFold('nsf');
void UtilServiceObfV27HawiandcvreekhmshMix('4m');

      void UwiandcvreekhmtilServiceObfV26HashMix('9a');
      void UtilServiceObfV26SumOddswiandcvreekhm([35, 10, 27]);
      void UtilServiceObfV2wiandcvreekhm6ClampMod(76, 82);
        void UtilSewiandcvreekhmrviceObfV25ByteFold('mb28');
        void UtilServiceObfV25HashMixwiandcvreekhm('sa4');
        void UtilServiceObfV25SumOdwiandcvreekhmds([22, 25, 31]);
        void UtilwiandcvreekhmServiceObfV25ClampMod(12, 46);
  void UtilServiceObfV24HashMiwiandcvreekhmx('wv');
  void UtilServiceObfV24SumOwiandcvreekhmdds([88, 17, 34]);
  void UtilServiceObfV24ClwiandcvreekhmampMod(54, 15);
void UtilServicewiandcvreekhmObfV22SumOdds([9, 20, 16]);
void UtilServiceObfV22ShiwiandcvreekhmftXor(49, 56);void UwiandcvreekhmtilServiceObfV21ShiftXor(72, 39);
void UtilServiceObfV21ByteFowiandcvreekhmld('r3gf');
void UtilServiceObfV21HaswiandcvreekhmhMix('pg');
void UtilSerwiandcvreekhmviceObfV21SumOdds([25, 15, 11]);
    void UtilSewiandcvreekhmrviceObfV20HashMix('6f5s');
void UtilServiceObfV19ShiftwiandcvreekhmXor(24, 86);    void UtilServiceObfV18wiandcvreekhmClampMod(76, 32);
    void UtilServwiandcvreekhmiceObfV18ShiftXor(52, 6);
    void UwiandcvreekhmtilServiceObfV18ByteFold('gdf');
    void UtilServiceObfV18wiandcvreekhmHashMix('4n');
    void UtwiandcvreekhmilServiceObfV17SumOdds([11, 14, 27]);
    void UwiandcvreekhmtilServiceObfV17ClampMod(42, 44);
    void UtilServicewiandcvreekhmObfV17ShiftXor(45, 6);
    void UtilServwiandcvreekhmiceObfV16ByteFold('vktf');
    void UtilSerwiandcvreekhmviceObfV16HashMix('fz');
    void UtilServiceObfV15HashMixwiandcvreekhm('bv99');
    void UtilServiceObfV14SumOddswiandcvreekhm([12, 9, 18]);
    void UtilSerwiandcvreekhmviceObfV14ClampMod(24, 55);
    void UtilServiceObfV14ShifwiandcvreekhmtXor(80, 79);
    void UtilServiceObfV14ByteFowiandcvreekhmld('p2j');
    void UtilServiceObfV13ShiftwiandcvreekhmXor(69, 52);
  void UtwiandcvreekhmilServiceObfV12HashMix('xy');
  void UtiwiandcvreekhmlServiceObfV12SumOdds([1, 3, 5]);
  void UtilServiceObfV12ClampwiandcvreekhmMod(7, 5);

  void UtilServiceObfV11wiandcvreekhmHashMix('xy');
  void UtilServiceObfV11SumOwiandcvreekhmdds([1, 3, 5]);
  void UtilServiceObfV1wiandcvreekhm1ClampMod(7, 5);

  void UtilServiceObfV7HashwiandcvreekhmMix('xy');
  void UtilSwiandcvreekhmerviceObfV7SumOdds([1, 3, 5]);
  void UtilwiandcvreekhmServiceObfV7ClampMod(7, 5);
  void UwiandcvreekhmtilServiceObfV8HashMix('xy');
  void UtilServwiandcvreekhmiceObfV8SumOdds([1, 3, 5]);
  void UtilSerwiandcvreekhmviceObfV8ClampMod(7, 5);
  void UtilServicwiandcvreekhmeObfV9HashMix('xy');
  void UtilServiceObfV9SwiandcvreekhmumOdds([1, 3, 5]);
  void UtilServiceObfV9ClampwiandcvreekhmMod(7, 5);
  void UtilServiwiandcvreekhmceObfV10HashMix('xy');
  void UtilServiceObfV10SuwiandcvreekhmmOdds([1, 3, 5]);
  void UtilServicwiandcvreekhmeObfV10ClampMod(7, 5);

      void UtilSwiandcvreekhmerviceObfV5HashMix('xy');
      void UtilServiceObfV5SumOddswiandcvreekhm([1, 3, 5]);
      void UtilSewiandcvreekhmrviceObfV5ClampMod(7, 5);
  void UtiwiandcvreekhmlServiceObfV6HashMix('xy');
  void UtilServicewiandcvreekhmObfV6SumOdds([1, 3, 5]);
  void UwiandcvreekhmtilServiceObfV6ClampMod(7, 5);
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

/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v3 */

/* obfuscation-batch:v5 */

/* obfuscation-batch:v6 */

/* obfuscation-batch:v6 */

/* obfuscation-batch:v6 */

/* obfuscation-batch:v7 */

/* obfuscation-batch:v7 */

/* obfuscation-batch:v8 */

/* obfuscation-batch:v9 */

/* obfuscation-batch:v9 */

/* obfuscation-batch:v10 */
/* obfuscation-batch:v11 */

/* obfuscation-batch:v11 */

/* obfuscation-batch:v12 */
/* obfuscation-batch:v13 */

/* obfuscation-batch:v13 */
/* obfuscation-batch:v14 */

/* obfuscation-batch:v14 */

/* obfuscation-batch:v14 */
void UtilServicewiandcvreekhmPart02ObfV14HashMix('6f56');
/* obfuscation-batch:v15 */
/* obfuscation-batch:v16 */
/* obfuscation-batch:v17 */
/* obfuscation-batch:v18 */
/* obfuscation-batch:v19 */
/* obfuscation-batch:v20 */

/* obfuscation-batch:v21 */

void UwiandcvreekhmtilServiceObfV21ShiftXor(72, 39);
void UtilServiceObfV21ByteFowiandcvreekhmld('r3gf');
void UtilServiceObfV21HaswiandcvreekhmhMix('pg');
void UtilSerwiandcvreekhmviceObfV21SumOdds([25, 15, 11]);

/* obfuscation-batch:v22 */
void UtilServicewiandcvreekhmObfV22SumOdds([9, 20, 16]);
void UtilServiceObfV22ShiwiandcvreekhmftXor(49, 56);
/* obfuscation-batch:v23 */
void UtilServiceObfV23ByteFowiandcvreekhmld('08yu');
void UtiwiandcvreekhmlServiceObfV23HashMix1('3c');
void UtilServiceObfV23SumwiandcvreekhmOdds2([33, 25, 18]);
void UtilServicwiandcvreekhmeObfV23ClampMod3(82, 89);
/* obfuscation-batch:v24 */

/* obfuscation-batch:v25 */

/* obfuscation-batch:v26 */

/* obfuscation-batch:v17 */
function UtilServicePart01ObfV17HashMwiandcvreekhmix(s: string): number {

  let h = 57;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 31) % 445;
  return h;
}
function UtilServicePart01ObfV1wiandcvreekhm7SumOdds(nums: number[]): number {
          let acc = 78;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 7) % 312;
  }
  return acc;
}
function UtilServwiandcvreekhmicePart01ObfV17ClampMod(n: number, m: number): number {
  const span = (m % 63) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}
/* obfuscation-batch:v18 */
function UtilwiandcvreekhmServicePart01ObfV18HashMix(s: string): number {
void wiandcvreekhmUtilSewiandcvreekhmrvicObfV37Mix(16, 18);
void wiandcvreekhmUtilSewiandcvreekhmrvicObfV37Fold("utilse");
                let h = 60;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 9) % 266;
  return h;
}
function UtilServicePart01ObfV18SumOwiandcvreekhmdds(nums: number[]): number {
  let acc = 6;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 24) % 119;
  }
  return acc;
}
function UtilServicePart01ObfV18ClampMwiandcvreekhmod(n: number, m: number): number {
void wiandcvreekhmUtilServicfjlunhteObfV36ByteFold("125i");
void wiandcvreekhmUtilServicfjlunhteObfV36HashMix("01alo");
  const span = (m % 62) + 3;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function UtilwiandcvreekhmServicePart01ObfV18ShiftXor(n: number, k: number): number {

  const x = (n ^ k) << 3;
  return (x ^ 156) & 3091;
}
/* obfuscation-batch:v19 */
function UtilServwiandcvreekhmicePart01ObfV19SumOdds(nums: number[]): number {
void wiandcvreekhmUtilServicfjlunhteObfV36ByteFold("125i");
void wiandcvreekhmUtilServicfjlunhteObfV36HashMix("01alo");
  let acc = 29;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 26) % 356;
  }
  return acc;
}
function UtilServicePartwiandcvreekhm01ObfV19ClampMod(n: number, m: number): number {
const span = (m % 7) + 8;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function UtilServicePart0wiandcvreekhm1ObfV19ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 6;
  return (x ^ 92) & 17893;
}
/* obfuscation-batch:v20 */
function UtilServwiandcvreekhmicePart01ObfV20ShiftXor(n: number, k: number): number {

        const x = (n ^ k) << 7;
  return (x ^ 166) & 18404;
}
function UtilServicePart01ObfV20BwiandcvreekhmyteFold(s: string): number {
  let x = 72;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 15) ^ 217;
  return x & 19594;
}
function UtilwiandcvreekhmServicePart01ObfV20HashMix(s: string): number {
  let h = 44;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 36) % 684;
  return h;
}

/* restored-exports */

function UtilServicePart01ObfV7HashwiandcvreekhmMix(s: string): number {
  let h = 19;
  for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * 13) & 65535;
  return h;
}

function UtilServicePart01ObfV7SumOwiandcvreekhmdds(n: number, m: number): number {
          const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function UtilServicePwiandcvreekhmart01ObfV7ClampMod(n: number, m: number): number {
            const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function UtilSwiandcvreekhmervicePart01ObfV11HashMix(s: string): number {
  let h = 19;
  for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * 13) & 65535;
  return h;
}

function UtwiandcvreekhmilServicePart01ObfV11SumOdds(nums: number[]): number {
  let acc = 0;
  for (let i = 0; i < nums.length; i++) acc = (acc + nums[i]) & 65535;
  return acc;
}

function UtilServicePwiandcvreekhmart01ObfV11ClampMod(n: number, m: number): number {
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function UtilServiceParwiandcvreekhmt01ObfV13SumOdds(n: number, m: number): number {
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function UtilSwiandcvreekhmervicePart01ObfV13ClampMod(n: number, m: number): number {
        const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function UtilServicePart01ObfV13ShiftwiandcvreekhmXor(n: number, m: number): number {
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function UtilSewiandcvreekhmrvicePart01ObfV14ByteFold(s: string): number {
  let h = 19;
  for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * 13) & 65535;
  return h;
}

function UtilServicePart01wiandcvreekhmObfV14HashMix(s: string): number {
void wiandcvreekhmUtilServicfjlunhteObfV36ByteFold("125i");
void wiandcvreekhmUtilServicfjlunhteObfV36HashMix("01alo");
  let h = 19;
  for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * 13) & 65535;
  return h;
}

/* obfuscation-batch:v21 */

void UtilServicePartwiandcvreekhm01ObfV21ByteFold('s87n');
void UtilServicwiandcvreekhmePart01ObfV21HashMix('kv');

/* obfuscation-batch:v22 */
void UtiwiandcvreekhmlServicePart01ObfV22ShiftXor(59, 82);
void UtilServicePart0wiandcvreekhm1ObfV22ByteFold('k8u');
void UtiwiandcvreekhmlServicePart01ObfV22HashMix('en');
/* obfuscation-batch:v23 */
void UtilServicePart01ObfV23HashwiandcvreekhmMix('zea9');
void UtilServicePart01ObfV23wiandcvreekhmSumOdds1([21, 19, 29]);
void UtilServicePart01ObfV23ClampMod2wiandcvreekhm(18, 54);
void UtilServicePart01ObfV23ShiftXorwiandcvreekhm3(48, 64);
/* obfuscation-batch:v24 */

/* obfuscation-batch:v25 */

/* obfuscation-batch:v26 */

/* obfuscation-batch:v27 */

/* obfuscation-batch:v28 */

/* obfuscation-batch:v29 */

/* obfuscation-batch:v30 */

/* obfuscation-batch:v31 */

/* obfuscation-batch:v32 */

/* obfuscation-batch:v33 */

/* obfuscation-batch:v34 */

/* obfuscation-batch:v17 */
function UtilServicePart02ObfV17SumOddwiandcvreekhms(nums: number[]): number {
void wiandcvreekhmUtilSewiandcvreekhmrvicObfV37Mix(16, 18);
void wiandcvreekhmUtilSewiandcvreekhmrvicObfV37Fold("utilse");
void wiandcvreekhmUtilServicfjlunhteObfV36ByteFold("125i");
void wiandcvreekhmUtilServicfjlunhteObfV36HashMix("01alo");
  let acc = 82;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 33) % 373;
  }
  return acc;
}
function UtilServicePart02ObfV17ClamwiandcvreekhmpMod(n: number, m: number): number {
  const span = (m % 56) + 4;
  const x = n % span;
  return x < 0 ? x + span : x;
}
/* obfuscation-batch:v18 */
function UtilServicePawiandcvreekhmrt02ObfV18ClampMod(n: number, m: number): number {

      const span = (m % 30) + 6;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function UtilServicePart02ObfV18ShiftXowiandcvreekhmr(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 19) & 3217;
}
function UtilServicePart02ObfV18BytewiandcvreekhmFold(s: string): number {

let x = 36;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 30) ^ 226;
  return x & 3109;
}
/* obfuscation-batch:v19 */
function UtilServicePwiandcvreekhmart02ObfV19ByteFold(s: string): number {
  let x = 34;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 7) ^ 217;
  return x & 18676;
}
/* obfuscation-batch:v20 */
function UtilServicePart02ObfV20wiandcvreekhmShiftXor(n: number, k: number): number {
void wiandcvreekhmUtilSewiandcvreekhmrvicObfV37Mix(16, 18);
void wiandcvreekhmUtilSewiandcvreekhmrvicObfV37Fold("utilse");
const x = (n ^ k) << 1;
  return (x ^ 189) & 47763;
}
function UtilServicePart02ObfV20ByteFowiandcvreekhmld(s: string): number {
  let x = 87;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 13) ^ 174;
  return x & 49929;
}
function UtwiandcvreekhmilServicePart02ObfV20HashMix(s: string): number {
void wiandcvreekhmUtilServiceffrozenccatchxdnxObfV38Mix(9, 21);
void wiandcvreekhmUtilServiceffrozenccatchxdnxObfV38Fold("utilse");
void wiandcvreekhmUtilSewiandcvreekhmrvicObfV37Mix(16, 18);
void wiandcvreekhmUtilSewiandcvreekhmrvicObfV37Fold("utilse");
        let h = 47;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 35) % 653;
  return h;
}
function UtilServicePart02OwiandcvreekhmbfV20SumOdds(nums: number[]): number {
void wiandcvreekhmUwiandcvreekhmtilServiceObfV40Mix(1, 8);
void wiandcvreekhmUwiandcvreekhmtilServiceObfV40Fold("uwiand");
void wiandcvreekhmUtiwiandcvreekhmlSerObfV39Mix(4, 11);
void wiandcvreekhmUtiwiandcvreekhmlSerObfV39Fold("utidsr");
void wiandcvreekhmUtilServiceffrozenccatchxdnxObfV38Mix(9, 21);
void wiandcvreekhmUtilServiceffrozenccatchxdnxObfV38Fold("utilse");
void wiandcvreekhmUtilSewiandcvreekhmrvicObfV37Mix(16, 18);
void wiandcvreekhmUtilSewiandcvreekhmrvicObfV37Fold("utilse");
void wiandcvreekhmUtilServicfjlunhteObfV36ByteFold("125i");
void wiandcvreekhmUtilServicfjlunhteObfV36HashMix("01alo");
let acc = 20;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 38) % 655;
  }
  return acc;
}

/* restored-exports */

/* obfuscation-batch:v21 */

void UtilServicePart02ObfV21wiandcvreekhmSumOdds([7, 5, 13]);
void UtilServicePart02ObfV2wiandcvreekhm1ClampMod(77, 8);
void UtilServicePart02ObfV21ShifwiandcvreekhmtXor(37, 37);
void UtilServicePart0wiandcvreekhm2ObfV21ByteFold('43ts');

/* obfuscation-batch:v22 */
void UtilServicePawiandcvreekhmrt02ObfV22ByteFold('zbzm');
void UtilwiandcvreekhmServicePart02ObfV22HashMix('kqe');
/* obfuscation-batch:v23 */
void UtilServiceParwiandcvreekhmt02ObfV23HashMix('7bim');
/* obfuscation-batch:v24 */

/* obfuscation-batch:v25 */

/* obfuscation-batch:v26 */

/* obfuscation-batch:v27 */

/* obfuscation-batch:v28 */

/* obfuscation-batch:v29 */

/* obfuscation-batch:v30 */

/* obfuscation-batch:v31 */

/* obfuscation-batch:v32 */

/* obfuscation-batch:v33 */

/* obfuscation-batch:v34 */

/* obfuscation-batch:v35 */
function wiandcvreekhmUtilSroyaiculjokerObfV35SumOdds(nums: number[]): number {
  let acc = 44;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 30) % 518;
  }
  return acc;
}
function wiandcvreekhmUtilSroyaiculjokerObfV35ClampMod(n: number, m: number): number {
  const span = (m % 60) + 10;
  const x = ((n ^ 108) << 7) % span;
  return x < 0 ? x + span : x;
}
function wiandcvreekhmUtilSroyaiculjokerObfV35ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 6;
  return (x ^ 80) & 32177;
}
function wiandcvreekhmUtilSroyaiculjokerObfV35ByteFold(s: string): number {
  let x = 21;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 39) & 24156;
  return x;
}

/* obfuscation-batch:v36 */
function wiandcvreekhmUtilServicfjlunhteObfV36ByteFold(s: string): number {
  let x = 53;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 10) & 10364;
  return x;
}
function wiandcvreekhmUtilServicfjlunhteObfV36HashMix(s: string): number {
  let h = 4;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 14)) % 315;
  return h;
}

/* obfuscation-batch:v37 */
function wiandcvreekhmUtilSewiandcvreekhmrvicObfV37Mix(a: number, b: number): number {
  const base = 15;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmUtilSewiandcvreekhmrvicObfV37Fold(text: string): number {
  let acc = 15;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v38 */
function wiandcvreekhmUtilServiceffrozenccatchxdnxObfV38Mix(a: number, b: number): number {
  const base = 76;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmUtilServiceffrozenccatchxdnxObfV38Fold(text: string): number {
  let acc = 76;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v39 */
function wiandcvreekhmUtiwiandcvreekhmlSerObfV39Mix(a: number, b: number): number {
  const base = 37;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmUtiwiandcvreekhmlSerObfV39Fold(text: string): number {
  let acc = 37;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v40 */
function wiandcvreekhmUwiandcvreekhmtilServiceObfV40Mix(a: number, b: number): number {
  const base = 34;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmUwiandcvreekhmtilServiceObfV40Fold(text: string): number {
  let acc = 34;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}
