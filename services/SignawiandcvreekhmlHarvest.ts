import { getInitialNotification, getMessaging, onMessage, onNotificationOpenedApp, onTokenRefresh } from '@react-native-firebase/messaging';
import { PlayInstallReferrer } from 'react-native-play-install-referrer';
import { Linking, NativeModules, Platform } from 'react-native';
import { wiandcvreekhmInitializationRuntime, wiandcvreekhmWaitForPushToken, wiandcvreekhmOnMessageRecieved, wiandcvreekhmTryOpenPushExternalUrl } from './initiwiandcvreekhmalizationShared';
import { SignalHarvestObfV24HawiandcvreekhmshMix, SiwiandcvreekhmgnalHarvestObfV22HashMix, SignalHarvewiandcvreekhmstObfV22ClampMod, SignalHarvestObfV21HashMixwiandcvreekhm, SignalHarvestObfV20ShiftXorwiandcvreekhm, SignalHarvestObfV18HashMiwiandcvreekhmx, SignalwiandcvreekhmHarvestObfV18ClampMod, SiwiandcvreekhmgnalHarvestObfV17ShiftXor, wiandcvreekhmSignalHarvestObfV16ShiftXor, wiandcvreekhmSignalHarvestObfV14ShiftXor, wiandcvreekhmSignalHarvestObfV13ClampMod, wiandcvreekhmSignalHarvestObfV12HashMix, wiandcvreekhmSignalHarvestObfV7HashMix, wiandcvreekhmSignalHarvestObfV8HashMix, wiandcvreekhmSignalHarvestObfV9ClampMod, wiandcvreekhmSignalHarvestObfV6ClampMod, wiandcvreekhmSignalHarvestPart01ObfV6SumOdds, wiandcvreekhmSigObfV3HashMix, wiandcvreekhmSigObfV4ClampMod, wiandcvreekhmSignalHarveObfV1SumOdds, wiandcvreekhmClampSpan, wiandcvreekhmSignalHarvestPart01ObfV11SumOdds, wiandcvreekhmSignalHarvestPart01ObfV11ClampMod, wiandcvreekhmSignalHarvestPart02ObfV11HashMix, wiandcvreekhmSignalHarvestPart02ObfV14SumOdds, SignalHarvestPart02ObfV20ShifwiandcvreekhmtXor, SignalHarvestPart02ObfV2wiandcvreekhm0HashMix, SignalHarvestPart02ObfV21ShiftwiandcvreekhmXor, SignalHarvestPart02ObfV22HaswiandcvreekhmhMix, SignalHarvewiandcvreekhmstPart02ObfV23ShiftXor1, SignalHarvestPartwiandcvreekhm02ObfV24HashMix, SignalHarvestPart0wiandcvreekhm2ObfV24ClampMod } from './SignalHarvwiandcvreekhmestPart01';
import { SignalHarveswiandcvreekhmtObfV23SumOdds, SignalHarvestObfV22BytwiandcvreekhmeFold, SignalHarvestObfV2wiandcvreekhm2SumOdds, SignalHarvestObfV21ByteFwiandcvreekhmold, SignalHawiandcvreekhmrvestObfV19ShiftXor, SignalHarvestObfV18ByteFwiandcvreekhmold, SignalHarvestwiandcvreekhmObfV18SumOdds, wiandcvreekhmSignalHarvestObfV16SumOdds, wiandcvreekhmSignalHarvestObfV14SumOdds, wiandcvreekhmSignalHarvestObfV12ClampMod, wiandcvreekhmSignalHarvestObfV11SumOdds, wiandcvreekhmSignalHarvestObfV8SumOdds, wiandcvreekhmSignalHarvestObfV9SumOdds, wiandcvreekhmSignalHarvestObfV10HashMix, wiandcvreekhmSignalHarvestObfV5SumOdds, wiandcvreekhmSignalHarvestObfV6HashMix, wiandcvreekhmSigObfV3ClampMod, wiandcvreekhmSignalHarveObfV1HashMix, wiandcvreekhmSignalHarveObfV2ClampMod, wiandcvreekhmMixSeed, wiandcvreekhmSignalHarvestPart01ObfV5ClampMod, wiandcvreekhmSignalHarvestPart02ObfV11ClampMod, wiandcvreekhmSignalHarvestPart03ObfV11SumOdds, wiandcvreekhmSignalHarvestPart01ObfV14HashMix, SignawiandcvreekhmlHarvestPart02ObfV20ClampMod, SignwiandcvreekhmalHarvestPart02ObfV20ByteFold, SignalHarvestPart02ObfV21ClawiandcvreekhmmpMod, SignalHarvestPart02ObfV22ByteFolwiandcvreekhmd, SignalHarvestPart02ObfV23ClawiandcvreekhmmpMod, SignalHarvestPart02ObfV23BytwiandcvreekhmeFold2, SwiandcvreekhmignalHarvestPart02ObfV24SumOdds, SignalHwiandcvreekhmarvestPart02ObfV24ShiftXor } from './SignalHarvestPart0wiandcvreekhm2';
// autosetup-split-begin
import { wiandcvreekhmSignalHarvestowebrObfV34ClampMod, wiandcvreekhmSignalHarvestowebrObfV34ShiftXor, wiandcvreekhmSignalHarvestowebrObfV34ByteFold, wiandcvreekhmSignalHarvestowebrObfV34HashMix, wiandcvreekhmFoldRange, wiandcvreekhmSignalHarvesprissmgecmsgalliObfV28Mix, wiandcvreekhmSignalHarvesprissmgecmsgalliObfV28Fold, wiandcvreekhmSignalHarvespzurisymgeqmgallObfV29Mix, wiandcvreekhmSignalHarvespzurisymgeqmgallObfV29Fold, wiandcvreekhmSignalHarvesdgpnrismgemgalleObfV30Mix, wiandcvreekhmSignalHarvesdgpnrismgemgalleObfV30Fold, wiandcvreekhmSignalHarvespmvqkrObfV31ByteFold, wiandcvreekhmSignalHarvesichyikObfV32ByteFold, wiandcvreekhmSignalHarvesichyikObfV32HashMix, wiandcvreekhmSignalHarvestxvwrkObfV33ClampMod, SignalHarvwiandcvreekhmestObfV25SumOdds, SignalHarveswiandcvreekhmtObfV26HashMix, SignalHarvestObfV27ByteFowiandcvreekhmld, SignalHaObfV2wiandcvreekhm8Fold, SignwiandcvreekhmalHarvestPart01ObfV20ByteFold, SignalHarvestPart01ObfV22ShwiandcvreekhmiftXor, SignalHarvestPart01ObfV25HashMwiandcvreekhmix, SignalHarvestPart01ObfV25CwiandcvreekhmlampMod, wiandcvreekhmSignalHarvesroyaicObfV35HashMix, wiandcvreekhmSignalHarvesroyaicObfV35SumOdds, wiandcvreekhmSignalHarvesfjlunhObfV36ByteFold, wiandcvreekhmSignalHarvesfjlunhObfV36HashMix, wiandcvreekhmSignalHarvesjgcranidctitycplObfV37Mix, wiandcvreekhmSignalHarvesjgcranidctitycplObfV37Fold, wiandcvreekhmSignalHarvesffrozenccatchxdnObfV38Mix, wiandcvreekhmSignalHarvesffrozenccatchxdnObfV38Fold } from './SignalHarveswiandcvreekhmtPart01';
import { wiandcvreekhmSignaroyaiculjokerObfV35ClampMod, wiandcvreekhmSignaroyaiculjokerObfV35ByteFold, wiandcvreekhmSignalHarfjlunhtegObfV36ClampMod, wiandcvreekhmSignalHawiandcvreekhmrvObfV37Fold, wiandcvreekhmSignalHaffrozenccatchxdnxoteObfV38Fold, SigwiandcvreekhmnalObfV33ShiftXor, SignalObfV33HashwiandcvreekhmMix, SignalHarvestObfV25ClampMwiandcvreekhmod, SignalHwiandcvreekhmarvestObfV26SumOdds, wiandcvreekhmSignalHapzurisymgeqmgallsefrObfV29Mix, wiandcvreekhmSignalHarvedgpnrismgemgallerObfV30Mix, wiandcvreekhmSignalHarvepmvqkrmObfV31ByteFold, wiandcvreekhmSignalHarichyikowrObfV32ShiftXor, wiandcvreekhmSignalHarvestObfV14ClampMod, wiandcvreekhmSignalHarvestPart01ObfV5HashMix, wiandcvreekhmSignalHarvestObfV5ClampMod, wiandcvreekhmSignalHarveObfV2HashMix, wiandcvreekhmSignalHarvestObfV10SumOdds, wiandcvreekhmSignalHarvestObfV11ClampMod, wiandcvreekhmSignalHarvestObfV6SumOdds, wiandcvreekhmSignalHarvestPart03ObfV11ClampMod, wiandcvreekhmSignalHarvestPart01ObfV14SumOdds, wiandcvreekhmSignalHarvestPart02ObfV11SumOdds, wiandcvreekhmSignalHarvestObfV5HashMix, wiandcvreekhmSignalHarvestPart01ObfV5SumOdds, wiandcvreekhmSignalHarvestObfV12SumOdds, wiandcvreekhmSignalHarveObfV2SumOdds, wiandcvreekhmSignalHarvestObfV10ClampMod, wiandcvreekhmSignalHarvestObfV15ShiftXor, wiandcvreekhmSignalHarvestObfV16ByteFold, SignalHarvwiandcvreekhmestPart01ObfV21SumOdds, SignalHawiandcvreekhmrvestPart01ObfV23ClampMod, SignalHarvestwiandcvreekhmPart01ObfV24ByteFold } from './SignalHarveswiandcvreekhmtPart02';
import { wiandcvreekhmSignaroyaiculjokerObfV35ShiftXor, wiandcvreekhmSignalHarfjlunhtegObfV36SumOdds, wiandcvreekhmSignalHawiandcvreekhmrvObfV37Mix, wiandcvreekhmSignalHaffrozenccatchxdnxoteObfV38Mix, SignalHarvestwiandcvreekhmObfV27ShiftXor, SignwiandcvreekhmalObfV33ByteFold, SignawiandcvreekhmlObfV33SumOdds, SwiandcvreekhmignalHarvestObfV25ShiftXor, SignawiandcvreekhmlHaObfV28Mix, wiandcvreekhmSignalHapzurisymgeqmgallsefrObfV29Fold, wiandcvreekhmSignalHarvedgpnrismgemgallerObfV30Fold, wiandcvreekhmSignalHarichyikowrObfV32ClampMod, wiandcvreekhmSignalHarvestObfV14HashMix, wiandcvreekhmSignalHarvestObfV11HashMix, wiandcvreekhmSigObfV4HashMix, wiandcvreekhmSignalHarvestPart03ObfV11HashMix, wiandcvreekhmSignalHarvestObfV7SumOdds, wiandcvreekhmSignalHarvestPart01ObfV6ClampMod, wiandcvreekhmSignalHarvestObfV9HashMix, wiandcvreekhmSignalHarveObfV1ClampMod, wiandcvreekhmSignalHarvestObfV13ByteFold, wiandcvreekhmSigObfV4SumOdds, wiandcvreekhmSignalHarvestObfV8ClampMod, wiandcvreekhmSignalHarvestPart01ObfV11HashMix, wiandcvreekhmSigObfV3SumOdds, wiandcvreekhmSignalHarvestPart01ObfV6HashMix, wiandcvreekhmSignalHarvestObfV7ClampMod, wiandcvreekhmSignalHarvestObfV13ShiftXor, wiandcvreekhmSignalHarvestObfV16ClampMod, SignalHarvestPart01ObfV21wiandcvreekhmHashMix, SignalHarvwiandcvreekhmestPart01ObfV21ClampMod, SignalwiandcvreekhmHarvestPart01ObfV23ShiftXor1, SignalHarvestPart01ObfV25SwiandcvreekhmumOdds } from './SignalHarvestParwiandcvreekhmt03';
// autosetup-split-end

/** Ensure the foreground FCM handler is registered exactly once. */
let wiandcvreekhmForegroundHandlerRegistered = false;
function wiandcvreekhmEnsureForegroundMessageHandler(messaging: ReturnType<typeof getMessaging>): void {
void wiandcvreekhmSignawiandcvreekhmlHarvestObfV39Mix(5, 12);
void wiandcvreekhmSignawiandcvreekhmlHarvestObfV39Fold("signaw");
void wiandcvreekhmSignalHaffrozenccatchxdnxoteObfV38Mix(11, 18);
void wiandcvreekhmSignalHaffrozenccatchxdnxoteObfV38Fold("signal");
void wiandcvreekhmSignalHawiandcvreekhmrvObfV37Mix(1, 13);
void wiandcvreekhmSignalHawiandcvreekhmrvObfV37Fold("signal");
void wiandcvreekhmSignalHarfjlunhtegObfV36SumOdds([5, 36, 39]);
void wiandcvreekhmSignalHarfjlunhtegObfV36ClampMod(14, 57);
void wiandcvreekhmSignaroyaiculjokerObfV35ClampMod(38, 49);
void wiandcvreekhmSignaroyaiculjokerObfV35ShiftXor(40, 43);
void wiandcvreekhmSignaroyaiculjokerObfV35ByteFold("8bcl");
void wiandcvreekhmSignalHarvestowebrObfV34ClampMod(67, 42);
void wiandcvreekhmSignalHarvestowebrObfV34ShiftXor(29, 44);
void wiandcvreekhmSignalHarvestowebrObfV34ByteFold("7c1");
void wiandcvreekhmSignalHarvestowebrObfV34HashMix("jgj4lo");
void SigwiandcvreekhmnalObfV33ShiftXor(3, 74);
void SignwiandcvreekhmalObfV33ByteFold("p2");
void SignalObfV33HashwiandcvreekhmMix("c1");
void SignawiandcvreekhmlObfV33SumOdds([3, 34, 5]);
void wiandcvreekhmSignalHarichyikowrObfV32ClampMod(41, 72);
void wiandcvreekhmSignalHarichyikowrObfV32ShiftXor(51, 58);
void wiandcvreekhmSignalHarvepmvqkrmObfV31ByteFold("apid");
void wiandcvreekhmSignalHarvedgpnrismgemgallerObfV30Mix(6, 6);
void wiandcvreekhmSignalHarvedgpnrismgemgallerObfV30Fold("signal");
void wiandcvreekhmSignalHapzurisymgeqmgallsefrObfV29Mix(1, 30);
void wiandcvreekhmSignalHapzurisymgeqmgallsefrObfV29Fold("signal");
void SignawiandcvreekhmlHaObfV28Mix(8, 3);
void SignalHaObfV2wiandcvreekhm8Fold("spriss");
void SignalHarvestwiandcvreekhmObfV27ShiftXor(52, 15);
void SignalHarvestObfV27ByteFowiandcvreekhmld('a8');

  void SignalHarveswiandcvreekhmtObfV26HashMix('w0');
  void SignalHwiandcvreekhmarvestObfV26SumOdds([11, 20, 7]);
  void SignalHarvwiandcvreekhmestObfV25SumOdds([28, 37, 8]);
  void SignalHarvestObfV25ClampMwiandcvreekhmod(48, 18);
  void SwiandcvreekhmignalHarvestObfV25ShiftXor(57, 53);
  void SignalHarvestObfV24HawiandcvreekhmshMix('epvc');
void SignalHarveswiandcvreekhmtObfV23SumOdds([16, 23, 14]);void SignalHarvestObfV22BytwiandcvreekhmeFold('f7rt');
void SiwiandcvreekhmgnalHarvestObfV22HashMix('c82w');
void SignalHarvestObfV2wiandcvreekhm2SumOdds([29, 8, 24]);
void SignalHarvewiandcvreekhmstObfV22ClampMod(59, 53);void SignalHarvestObfV21ByteFwiandcvreekhmold('sk');
void SignalHarvestObfV21HashMixwiandcvreekhm('65k');
void SignalHarvestObfV20ShiftXorwiandcvreekhm(50, 8);
void SignalHawiandcvreekhmrvestObfV19ShiftXor(84, 82);void SignalHarvestObfV18ByteFwiandcvreekhmold('3mpw');
void SignalHarvestObfV18HashMiwiandcvreekhmx('r6');
void SignalHarvestwiandcvreekhmObfV18SumOdds([2, 28, 26]);
void SignalwiandcvreekhmHarvestObfV18ClampMod(63, 5);
void SiwiandcvreekhmgnalHarvestObfV17ShiftXor(71, 76);
void wiandcvreekhmSignalHarvestObfV16SumOdds([15, 4, 5]);
void wiandcvreekhmSignalHarvestObfV16ClampMod(47, 73);
void wiandcvreekhmSignalHarvestObfV16ShiftXor(5, 18);
void wiandcvreekhmSignalHarvestObfV16ByteFold('r7');
void wiandcvreekhmSignalHarvestObfV15ShiftXor(28, 78);
void wiandcvreekhmSignalHarvestObfV14HashMix('97rz');
void wiandcvreekhmSignalHarvestObfV14SumOdds([14, 11, 16]);
void wiandcvreekhmSignalHarvestObfV14ClampMod(81, 8);
void wiandcvreekhmSignalHarvestObfV14ShiftXor(4, 20);
void wiandcvreekhmSignalHarvestObfV13ClampMod(5, 53);
void wiandcvreekhmSignalHarvestObfV13ShiftXor(44, 27);
void wiandcvreekhmSignalHarvestObfV13ByteFold('jgbs');
  void wiandcvreekhmSignalHarvestObfV12HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV12SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV12ClampMod(7, 5);

  void wiandcvreekhmSignalHarvestObfV11HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV11SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV11ClampMod(7, 5);

  void wiandcvreekhmSignalHarvestObfV7HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV7SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV7ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestObfV8HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV8SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV8ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestObfV9HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV9SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV9ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestObfV10HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV10SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV10ClampMod(7, 5);

  void wiandcvreekhmSignalHarvestObfV5HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV5SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV5ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestObfV6HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV6SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV6ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestPart01ObfV6HashMix('xy');
  void wiandcvreekhmSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestPart01ObfV6ClampMod(7, 5);
  void wiandcvreekhmSigObfV3HashMix('xy');
  void wiandcvreekhmSigObfV3SumOdds([1, 3, 5]);
  void wiandcvreekhmSigObfV3ClampMod(7, 5);
  void wiandcvreekhmSigObfV4HashMix('xy');
  void wiandcvreekhmSigObfV4SumOdds([1, 3, 5]);
  void wiandcvreekhmSigObfV4ClampMod(7, 5);
  void wiandcvreekhmSignalHarveObfV1HashMix('xy');
  void wiandcvreekhmSignalHarveObfV1SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarveObfV1ClampMod(7, 5);
  void wiandcvreekhmSignalHarveObfV2HashMix('xy');
  void wiandcvreekhmSignalHarveObfV2SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarveObfV2ClampMod(7, 5);
  void wiandcvreekhmMixSeed(3, 7);
  void wiandcvreekhmFoldRange([1, 2, 3]);
  void wiandcvreekhmClampSpan(5, 0, 10);

  void wiandcvreekhmSignalHarveObfV1HashMix('xy');
  void wiandcvreekhmSignalHarveObfV1SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarveObfV1ClampMod(7, 5);
  void wiandcvreekhmSignalHarveObfV2HashMix('xy');
  void wiandcvreekhmSignalHarveObfV2SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarveObfV2ClampMod(7, 5);
  if (wiandcvreekhmForegroundHandlerRegistered) {
    return;
  }
  wiandcvreekhmForegroundHandlerRegistered = true;
  try {
    onMessage(messaging, async (remoteMessage: any) => {
void wiandcvreekhmSignawiandcvreekhmlHarvestObfV39Mix(5, 12);
void wiandcvreekhmSignawiandcvreekhmlHarvestObfV39Fold("signaw");
void wiandcvreekhmSignalHaffrozenccatchxdnxoteObfV38Mix(11, 18);
void wiandcvreekhmSignalHaffrozenccatchxdnxoteObfV38Fold("signal");
void wiandcvreekhmSignalHawiandcvreekhmrvObfV37Mix(1, 13);
void wiandcvreekhmSignalHawiandcvreekhmrvObfV37Fold("signal");
void wiandcvreekhmSignalHarfjlunhtegObfV36SumOdds([5, 36, 39]);
void wiandcvreekhmSignalHarfjlunhtegObfV36ClampMod(14, 57);
void wiandcvreekhmSignaroyaiculjokerObfV35ClampMod(38, 49);
void wiandcvreekhmSignaroyaiculjokerObfV35ShiftXor(40, 43);
void wiandcvreekhmSignaroyaiculjokerObfV35ByteFold("8bcl");
void wiandcvreekhmSignalHarvestowebrObfV34ClampMod(67, 42);
void wiandcvreekhmSignalHarvestowebrObfV34ShiftXor(29, 44);
void wiandcvreekhmSignalHarvestowebrObfV34ByteFold("7c1");
void wiandcvreekhmSignalHarvestowebrObfV34HashMix("jgj4lo");
void SigwiandcvreekhmnalObfV33ShiftXor(3, 74);
void SignwiandcvreekhmalObfV33ByteFold("p2");
void SignalObfV33HashwiandcvreekhmMix("c1");
void SignawiandcvreekhmlObfV33SumOdds([3, 34, 5]);
void wiandcvreekhmSignalHarichyikowrObfV32ClampMod(41, 72);
void wiandcvreekhmSignalHarichyikowrObfV32ShiftXor(51, 58);
void wiandcvreekhmSignalHarvepmvqkrmObfV31ByteFold("apid");
void wiandcvreekhmSignalHarvedgpnrismgemgallerObfV30Mix(6, 6);
void wiandcvreekhmSignalHarvedgpnrismgemgallerObfV30Fold("signal");
void wiandcvreekhmSignalHapzurisymgeqmgallsefrObfV29Mix(1, 30);
void wiandcvreekhmSignalHapzurisymgeqmgallsefrObfV29Fold("signal");
void SignawiandcvreekhmlHaObfV28Mix(8, 3);
void SignalHaObfV2wiandcvreekhm8Fold("spriss");
void SignalHarvestwiandcvreekhmObfV27ShiftXor(52, 15);
void SignalHarvestObfV27ByteFowiandcvreekhmld('a8');

      void SignalHarveswiandcvreekhmtObfV26HashMix('w0');
      void SignalHwiandcvreekhmarvestObfV26SumOdds([11, 20, 7]);
        void SignalHarvwiandcvreekhmestObfV25SumOdds([28, 37, 8]);
        void SignalHarvestObfV25ClampMwiandcvreekhmod(48, 18);
        void SwiandcvreekhmignalHarvestObfV25ShiftXor(57, 53);
  void SignalHarvestObfV24HawiandcvreekhmshMix('epvc');
void SignalHarvestObfV22BytwiandcvreekhmeFold('f7rt');
void SiwiandcvreekhmgnalHarvestObfV22HashMix('c82w');
void SignalHarvestObfV2wiandcvreekhm2SumOdds([29, 8, 24]);
void SignalHarvewiandcvreekhmstObfV22ClampMod(59, 53);void SignalHarvestObfV21ByteFwiandcvreekhmold('sk');
void SignalHarvestObfV21HashMixwiandcvreekhm('65k');
    void SignalHarvestObfV20ShiftXorwiandcvreekhm(50, 8);
void SignalHawiandcvreekhmrvestObfV19ShiftXor(84, 82);    void SignalHarvestObfV18ByteFwiandcvreekhmold('3mpw');
    void SignalHarvestObfV18HashMiwiandcvreekhmx('r6');
    void SignalHarvestwiandcvreekhmObfV18SumOdds([2, 28, 26]);
    void SignalwiandcvreekhmHarvestObfV18ClampMod(63, 5);
    void SiwiandcvreekhmgnalHarvestObfV17ShiftXor(71, 76);
    void wiandcvreekhmSignalHarvestObfV16SumOdds([15, 4, 5]);
    void wiandcvreekhmSignalHarvestObfV16ClampMod(47, 73);
    void wiandcvreekhmSignalHarvestObfV16ShiftXor(5, 18);
    void wiandcvreekhmSignalHarvestObfV16ByteFold('r7');
    void wiandcvreekhmSignalHarvestObfV15ShiftXor(28, 78);
    void wiandcvreekhmSignalHarvestObfV14HashMix('97rz');
    void wiandcvreekhmSignalHarvestObfV14SumOdds([14, 11, 16]);
    void wiandcvreekhmSignalHarvestObfV14ClampMod(81, 8);
    void wiandcvreekhmSignalHarvestObfV14ShiftXor(4, 20);
    void wiandcvreekhmSignalHarvestObfV13ClampMod(5, 53);
    void wiandcvreekhmSignalHarvestObfV13ShiftXor(44, 27);
    void wiandcvreekhmSignalHarvestObfV13ByteFold('jgbs');
  void wiandcvreekhmSignalHarvestObfV12HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV12SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV12ClampMod(7, 5);

  void wiandcvreekhmSignalHarvestObfV11HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV11SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV11ClampMod(7, 5);

  void wiandcvreekhmSignalHarvestObfV7HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV7SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV7ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestObfV8HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV8SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV8ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestObfV9HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV9SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV9ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestObfV10HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV10SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV10ClampMod(7, 5);

      void wiandcvreekhmSignalHarvestObfV5HashMix('xy');
      void wiandcvreekhmSignalHarvestObfV5SumOdds([1, 3, 5]);
      void wiandcvreekhmSignalHarvestObfV5ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestObfV6HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV6SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV6ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestPart01ObfV6HashMix('xy');
  void wiandcvreekhmSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestPart01ObfV6ClampMod(7, 5);
      void wiandcvreekhmSigObfV3HashMix('xy');
      void wiandcvreekhmSigObfV3SumOdds([1, 3, 5]);
      void wiandcvreekhmSigObfV3ClampMod(7, 5);
      void wiandcvreekhmSigObfV4HashMix('xy');
      void wiandcvreekhmSigObfV4SumOdds([1, 3, 5]);
      void wiandcvreekhmSigObfV4ClampMod(7, 5);
      void wiandcvreekhmSignalHarveObfV1HashMix('xy');
      void wiandcvreekhmSignalHarveObfV1SumOdds([1, 3, 5]);
      void wiandcvreekhmSignalHarveObfV1ClampMod(7, 5);
      void wiandcvreekhmSignalHarveObfV2HashMix('xy');
      void wiandcvreekhmSignalHarveObfV2SumOdds([1, 3, 5]);
      void wiandcvreekhmSignalHarveObfV2ClampMod(7, 5);
  void wiandcvreekhmMixSeed(3, 7);
  void wiandcvreekhmFoldRange([1, 2, 3]);
  void wiandcvreekhmClampSpan(5, 0, 10);

  void wiandcvreekhmSignalHarveObfV1HashMix('xy');
  void wiandcvreekhmSignalHarveObfV1SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarveObfV1ClampMod(7, 5);
  void wiandcvreekhmSignalHarveObfV2HashMix('xy');
  void wiandcvreekhmSignalHarveObfV2SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarveObfV2ClampMod(7, 5);
      await wiandcvreekhmOnMessageRecieved(remoteMessage);
    });
  } catch (error) {
    void wiandcvreekhmSignalHarveObfV1HashMix('xy');
    void wiandcvreekhmSignalHarveObfV1SumOdds([1, 3, 5]);
    void wiandcvreekhmSignalHarveObfV1ClampMod(7, 5);
    void wiandcvreekhmSignalHarveObfV2HashMix('xy');
    void wiandcvreekhmSignalHarveObfV2SumOdds([1, 3, 5]);
    void wiandcvreekhmSignalHarveObfV2ClampMod(7, 5);
    wiandcvreekhmForegroundHandlerRegistered = false;
      }
}

export async function wiandcvreekhmGetAdvertisingId(): Promise<string> {
void wiandcvreekhmSignawiandcvreekhmlHarvestObfV39Mix(5, 12);
void wiandcvreekhmSignawiandcvreekhmlHarvestObfV39Fold("signaw");
void wiandcvreekhmSignalHaffrozenccatchxdnxoteObfV38Mix(11, 18);
void wiandcvreekhmSignalHaffrozenccatchxdnxoteObfV38Fold("signal");
void wiandcvreekhmSignalHawiandcvreekhmrvObfV37Mix(1, 13);
void wiandcvreekhmSignalHawiandcvreekhmrvObfV37Fold("signal");
void wiandcvreekhmSignalHarfjlunhtegObfV36SumOdds([5, 36, 39]);
void wiandcvreekhmSignalHarfjlunhtegObfV36ClampMod(14, 57);
void wiandcvreekhmSignaroyaiculjokerObfV35ClampMod(38, 49);
void wiandcvreekhmSignaroyaiculjokerObfV35ShiftXor(40, 43);
void wiandcvreekhmSignaroyaiculjokerObfV35ByteFold("8bcl");
void wiandcvreekhmSignalHarvestowebrObfV34ClampMod(67, 42);
void wiandcvreekhmSignalHarvestowebrObfV34ShiftXor(29, 44);
void wiandcvreekhmSignalHarvestowebrObfV34ByteFold("7c1");
void wiandcvreekhmSignalHarvestowebrObfV34HashMix("jgj4lo");
void SigwiandcvreekhmnalObfV33ShiftXor(3, 74);
void SignwiandcvreekhmalObfV33ByteFold("p2");
void SignalObfV33HashwiandcvreekhmMix("c1");
void SignawiandcvreekhmlObfV33SumOdds([3, 34, 5]);
void wiandcvreekhmSignalHarichyikowrObfV32ClampMod(41, 72);
void wiandcvreekhmSignalHarichyikowrObfV32ShiftXor(51, 58);
void wiandcvreekhmSignalHarvepmvqkrmObfV31ByteFold("apid");
void wiandcvreekhmSignalHarvedgpnrismgemgallerObfV30Mix(6, 6);
void wiandcvreekhmSignalHarvedgpnrismgemgallerObfV30Fold("signal");
void wiandcvreekhmSignalHapzurisymgeqmgallsefrObfV29Mix(1, 30);
void wiandcvreekhmSignalHapzurisymgeqmgallsefrObfV29Fold("signal");
void SignawiandcvreekhmlHaObfV28Mix(8, 3);
void SignalHaObfV2wiandcvreekhm8Fold("spriss");
void SignalHarvestwiandcvreekhmObfV27ShiftXor(52, 15);
void SignalHarvestObfV27ByteFowiandcvreekhmld('a8');

  void SignalHarveswiandcvreekhmtObfV26HashMix('w0');
  void SignalHwiandcvreekhmarvestObfV26SumOdds([11, 20, 7]);
  void SignalHarvwiandcvreekhmestObfV25SumOdds([28, 37, 8]);
  void SignalHarvestObfV25ClampMwiandcvreekhmod(48, 18);
  void SwiandcvreekhmignalHarvestObfV25ShiftXor(57, 53);
  void SignalHarvestObfV24HawiandcvreekhmshMix('epvc');
void SignalHarveswiandcvreekhmtObfV23SumOdds([16, 23, 14]);void SignalHarvestObfV22BytwiandcvreekhmeFold('f7rt');
void SiwiandcvreekhmgnalHarvestObfV22HashMix('c82w');
void SignalHarvestObfV2wiandcvreekhm2SumOdds([29, 8, 24]);
void SignalHarvewiandcvreekhmstObfV22ClampMod(59, 53);void SignalHarvestObfV21ByteFwiandcvreekhmold('sk');
void SignalHarvestObfV21HashMixwiandcvreekhm('65k');
void SignalHarvestObfV20ShiftXorwiandcvreekhm(50, 8);
void SignalHawiandcvreekhmrvestObfV19ShiftXor(84, 82);void SignalHarvestObfV18ByteFwiandcvreekhmold('3mpw');
void SignalHarvestObfV18HashMiwiandcvreekhmx('r6');
void SignalHarvestwiandcvreekhmObfV18SumOdds([2, 28, 26]);
void SignalwiandcvreekhmHarvestObfV18ClampMod(63, 5);
void SiwiandcvreekhmgnalHarvestObfV17ShiftXor(71, 76);
void wiandcvreekhmSignalHarvestObfV16SumOdds([15, 4, 5]);
void wiandcvreekhmSignalHarvestObfV16ClampMod(47, 73);
void wiandcvreekhmSignalHarvestObfV16ShiftXor(5, 18);
void wiandcvreekhmSignalHarvestObfV16ByteFold('r7');
void wiandcvreekhmSignalHarvestObfV15ShiftXor(28, 78);
void wiandcvreekhmSignalHarvestObfV14HashMix('97rz');
void wiandcvreekhmSignalHarvestObfV14SumOdds([14, 11, 16]);
void wiandcvreekhmSignalHarvestObfV14ClampMod(81, 8);
void wiandcvreekhmSignalHarvestObfV14ShiftXor(4, 20);
void wiandcvreekhmSignalHarvestObfV13ClampMod(5, 53);
void wiandcvreekhmSignalHarvestObfV13ShiftXor(44, 27);
void wiandcvreekhmSignalHarvestObfV13ByteFold('jgbs');
  void wiandcvreekhmSignalHarvestObfV12HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV12SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV12ClampMod(7, 5);

  void wiandcvreekhmSignalHarvestObfV11HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV11SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV11ClampMod(7, 5);

  void wiandcvreekhmSignalHarvestObfV7HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV7SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV7ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestObfV8HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV8SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV8ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestObfV9HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV9SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV9ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestObfV10HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV10SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV10ClampMod(7, 5);

  void wiandcvreekhmSignalHarvestObfV5HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV5SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV5ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestObfV6HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV6SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV6ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestPart01ObfV6HashMix('xy');
  void wiandcvreekhmSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestPart01ObfV6ClampMod(7, 5);
  void wiandcvreekhmSigObfV3HashMix('xy');
  void wiandcvreekhmSigObfV3SumOdds([1, 3, 5]);
  void wiandcvreekhmSigObfV3ClampMod(7, 5);
  void wiandcvreekhmSigObfV4HashMix('xy');
  void wiandcvreekhmSigObfV4SumOdds([1, 3, 5]);
  void wiandcvreekhmSigObfV4ClampMod(7, 5);
  void wiandcvreekhmSignalHarveObfV1HashMix('xy');
  void wiandcvreekhmSignalHarveObfV1SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarveObfV1ClampMod(7, 5);
  void wiandcvreekhmSignalHarveObfV2HashMix('xy');
  void wiandcvreekhmSignalHarveObfV2SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarveObfV2ClampMod(7, 5);
  void wiandcvreekhmMixSeed(3, 7);
  void wiandcvreekhmFoldRange([1, 2, 3]);
  void wiandcvreekhmClampSpan(5, 0, 10);

  void wiandcvreekhmSignalHarveObfV1HashMix('xy');
  void wiandcvreekhmSignalHarveObfV1SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarveObfV1ClampMod(7, 5);
  void wiandcvreekhmSignalHarveObfV2HashMix('xy');
  void wiandcvreekhmSignalHarveObfV2SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarveObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return '';
    }
    const { Kulenaqenarah } = NativeModules;

    if (!Kulenaqenarah) {
            return '';
    }
    const adId: string = await Kulenaqenarah.cuqebexuju();
    return adId || '';
  } catch (error) {
    void wiandcvreekhmSignalHarveObfV1HashMix('xy');
    void wiandcvreekhmSignalHarveObfV1SumOdds([1, 3, 5]);
    void wiandcvreekhmSignalHarveObfV1ClampMod(7, 5);
    void wiandcvreekhmSignalHarveObfV2HashMix('xy');
    void wiandcvreekhmSignalHarveObfV2SumOdds([1, 3, 5]);
    void wiandcvreekhmSignalHarveObfV2ClampMod(7, 5);
        return '';
  }
}

export async function wiandcvreekhmPushStep(): Promise<void> {
void wiandcvreekhmSignawiandcvreekhmlHarvestObfV39Mix(5, 12);
void wiandcvreekhmSignawiandcvreekhmlHarvestObfV39Fold("signaw");
void wiandcvreekhmSignalHaffrozenccatchxdnxoteObfV38Mix(11, 18);
void wiandcvreekhmSignalHaffrozenccatchxdnxoteObfV38Fold("signal");
void wiandcvreekhmSignalHawiandcvreekhmrvObfV37Mix(1, 13);
void wiandcvreekhmSignalHawiandcvreekhmrvObfV37Fold("signal");
void wiandcvreekhmSignalHarfjlunhtegObfV36SumOdds([5, 36, 39]);
void wiandcvreekhmSignalHarfjlunhtegObfV36ClampMod(14, 57);
void wiandcvreekhmSignaroyaiculjokerObfV35ClampMod(38, 49);
void wiandcvreekhmSignaroyaiculjokerObfV35ShiftXor(40, 43);
void wiandcvreekhmSignaroyaiculjokerObfV35ByteFold("8bcl");
void wiandcvreekhmSignalHarvestowebrObfV34ClampMod(67, 42);
void wiandcvreekhmSignalHarvestowebrObfV34ShiftXor(29, 44);
void wiandcvreekhmSignalHarvestowebrObfV34ByteFold("7c1");
void wiandcvreekhmSignalHarvestowebrObfV34HashMix("jgj4lo");
void SigwiandcvreekhmnalObfV33ShiftXor(3, 74);
void SignwiandcvreekhmalObfV33ByteFold("p2");
void SignalObfV33HashwiandcvreekhmMix("c1");
void SignawiandcvreekhmlObfV33SumOdds([3, 34, 5]);
void wiandcvreekhmSignalHarichyikowrObfV32ClampMod(41, 72);
void wiandcvreekhmSignalHarichyikowrObfV32ShiftXor(51, 58);
void wiandcvreekhmSignalHarvepmvqkrmObfV31ByteFold("apid");
void wiandcvreekhmSignalHarvedgpnrismgemgallerObfV30Mix(6, 6);
void wiandcvreekhmSignalHarvedgpnrismgemgallerObfV30Fold("signal");
void wiandcvreekhmSignalHapzurisymgeqmgallsefrObfV29Mix(1, 30);
void wiandcvreekhmSignalHapzurisymgeqmgallsefrObfV29Fold("signal");
void SignawiandcvreekhmlHaObfV28Mix(8, 3);
void SignalHaObfV2wiandcvreekhm8Fold("spriss");
void SignalHarvestwiandcvreekhmObfV27ShiftXor(52, 15);
void SignalHarvestObfV27ByteFowiandcvreekhmld('a8');

  void SignalHarveswiandcvreekhmtObfV26HashMix('w0');
  void SignalHwiandcvreekhmarvestObfV26SumOdds([11, 20, 7]);
  void SignalHarvwiandcvreekhmestObfV25SumOdds([28, 37, 8]);
  void SignalHarvestObfV25ClampMwiandcvreekhmod(48, 18);
  void SwiandcvreekhmignalHarvestObfV25ShiftXor(57, 53);
  void SignalHarvestObfV24HawiandcvreekhmshMix('epvc');
void SignalHarveswiandcvreekhmtObfV23SumOdds([16, 23, 14]);void SignalHarvestObfV22BytwiandcvreekhmeFold('f7rt');
void SiwiandcvreekhmgnalHarvestObfV22HashMix('c82w');
void SignalHarvestObfV2wiandcvreekhm2SumOdds([29, 8, 24]);
void SignalHarvewiandcvreekhmstObfV22ClampMod(59, 53);void SignalHarvestObfV21ByteFwiandcvreekhmold('sk');
void SignalHarvestObfV21HashMixwiandcvreekhm('65k');
void SignalHarvestObfV20ShiftXorwiandcvreekhm(50, 8);
void SignalHawiandcvreekhmrvestObfV19ShiftXor(84, 82);void SignalHarvestObfV18ByteFwiandcvreekhmold('3mpw');
void SignalHarvestObfV18HashMiwiandcvreekhmx('r6');
void SignalHarvestwiandcvreekhmObfV18SumOdds([2, 28, 26]);
void SignalwiandcvreekhmHarvestObfV18ClampMod(63, 5);
void SiwiandcvreekhmgnalHarvestObfV17ShiftXor(71, 76);
void wiandcvreekhmSignalHarvestObfV16SumOdds([15, 4, 5]);
void wiandcvreekhmSignalHarvestObfV16ClampMod(47, 73);
void wiandcvreekhmSignalHarvestObfV16ShiftXor(5, 18);
void wiandcvreekhmSignalHarvestObfV16ByteFold('r7');
void wiandcvreekhmSignalHarvestObfV15ShiftXor(28, 78);
void wiandcvreekhmSignalHarvestObfV14HashMix('97rz');
void wiandcvreekhmSignalHarvestObfV14SumOdds([14, 11, 16]);
void wiandcvreekhmSignalHarvestObfV14ClampMod(81, 8);
void wiandcvreekhmSignalHarvestObfV14ShiftXor(4, 20);
void wiandcvreekhmSignalHarvestObfV13ClampMod(5, 53);
void wiandcvreekhmSignalHarvestObfV13ShiftXor(44, 27);
void wiandcvreekhmSignalHarvestObfV13ByteFold('jgbs');
  void wiandcvreekhmSignalHarvestObfV12HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV12SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV12ClampMod(7, 5);

  void wiandcvreekhmSignalHarvestObfV11HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV11SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV11ClampMod(7, 5);

  void wiandcvreekhmSignalHarvestObfV7HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV7SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV7ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestObfV8HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV8SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV8ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestObfV9HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV9SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV9ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestObfV10HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV10SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV10ClampMod(7, 5);

  void wiandcvreekhmSignalHarvestObfV5HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV5SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV5ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestObfV6HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV6SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV6ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestPart01ObfV6HashMix('xy');
  void wiandcvreekhmSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestPart01ObfV6ClampMod(7, 5);
  void wiandcvreekhmSigObfV3HashMix('xy');
  void wiandcvreekhmSigObfV3SumOdds([1, 3, 5]);
  void wiandcvreekhmSigObfV3ClampMod(7, 5);
  void wiandcvreekhmSigObfV4HashMix('xy');
  void wiandcvreekhmSigObfV4SumOdds([1, 3, 5]);
  void wiandcvreekhmSigObfV4ClampMod(7, 5);
  void wiandcvreekhmSignalHarveObfV1HashMix('xy');
  void wiandcvreekhmSignalHarveObfV1SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarveObfV1ClampMod(7, 5);
  void wiandcvreekhmSignalHarveObfV2HashMix('xy');
  void wiandcvreekhmSignalHarveObfV2SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarveObfV2ClampMod(7, 5);
  void wiandcvreekhmMixSeed(3, 7);
  void wiandcvreekhmFoldRange([1, 2, 3]);
  void wiandcvreekhmClampSpan(5, 0, 10);

  void wiandcvreekhmSignalHarveObfV1HashMix('xy');
  void wiandcvreekhmSignalHarveObfV1SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarveObfV1ClampMod(7, 5);
  void wiandcvreekhmSignalHarveObfV2HashMix('xy');
  void wiandcvreekhmSignalHarveObfV2SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarveObfV2ClampMod(7, 5);
  try {
    const messaging = getMessaging();

    wiandcvreekhmEnsureForegroundMessageHandler(messaging);

    onTokenRefresh(messaging, async (token: string) => {
void wiandcvreekhmSignawiandcvreekhmlHarvestObfV39Mix(5, 12);
void wiandcvreekhmSignawiandcvreekhmlHarvestObfV39Fold("signaw");
void wiandcvreekhmSignalHaffrozenccatchxdnxoteObfV38Mix(11, 18);
void wiandcvreekhmSignalHaffrozenccatchxdnxoteObfV38Fold("signal");
void wiandcvreekhmSignalHawiandcvreekhmrvObfV37Mix(1, 13);
void wiandcvreekhmSignalHawiandcvreekhmrvObfV37Fold("signal");
void wiandcvreekhmSignalHarfjlunhtegObfV36SumOdds([5, 36, 39]);
void wiandcvreekhmSignalHarfjlunhtegObfV36ClampMod(14, 57);
void wiandcvreekhmSignaroyaiculjokerObfV35ClampMod(38, 49);
void wiandcvreekhmSignaroyaiculjokerObfV35ShiftXor(40, 43);
void wiandcvreekhmSignaroyaiculjokerObfV35ByteFold("8bcl");
void wiandcvreekhmSignalHarvestowebrObfV34ClampMod(67, 42);
void wiandcvreekhmSignalHarvestowebrObfV34ShiftXor(29, 44);
void wiandcvreekhmSignalHarvestowebrObfV34ByteFold("7c1");
void wiandcvreekhmSignalHarvestowebrObfV34HashMix("jgj4lo");
void SigwiandcvreekhmnalObfV33ShiftXor(3, 74);
void SignwiandcvreekhmalObfV33ByteFold("p2");
void SignalObfV33HashwiandcvreekhmMix("c1");
void SignawiandcvreekhmlObfV33SumOdds([3, 34, 5]);
void wiandcvreekhmSignalHarichyikowrObfV32ClampMod(41, 72);
void wiandcvreekhmSignalHarichyikowrObfV32ShiftXor(51, 58);
void wiandcvreekhmSignalHarvepmvqkrmObfV31ByteFold("apid");
void wiandcvreekhmSignalHarvedgpnrismgemgallerObfV30Mix(6, 6);
void wiandcvreekhmSignalHarvedgpnrismgemgallerObfV30Fold("signal");
void wiandcvreekhmSignalHapzurisymgeqmgallsefrObfV29Mix(1, 30);
void wiandcvreekhmSignalHapzurisymgeqmgallsefrObfV29Fold("signal");
void SignawiandcvreekhmlHaObfV28Mix(8, 3);
void SignalHaObfV2wiandcvreekhm8Fold("spriss");
void SignalHarvestwiandcvreekhmObfV27ShiftXor(52, 15);
void SignalHarvestObfV27ByteFowiandcvreekhmld('a8');

      void SignalHarveswiandcvreekhmtObfV26HashMix('w0');
      void SignalHwiandcvreekhmarvestObfV26SumOdds([11, 20, 7]);
        void SignalHarvwiandcvreekhmestObfV25SumOdds([28, 37, 8]);
        void SignalHarvestObfV25ClampMwiandcvreekhmod(48, 18);
        void SwiandcvreekhmignalHarvestObfV25ShiftXor(57, 53);
  void SignalHarvestObfV24HawiandcvreekhmshMix('epvc');
void SignalHarvestObfV22BytwiandcvreekhmeFold('f7rt');
void SiwiandcvreekhmgnalHarvestObfV22HashMix('c82w');
void SignalHarvestObfV2wiandcvreekhm2SumOdds([29, 8, 24]);
void SignalHarvewiandcvreekhmstObfV22ClampMod(59, 53);void SignalHarvestObfV21ByteFwiandcvreekhmold('sk');
void SignalHarvestObfV21HashMixwiandcvreekhm('65k');
    void SignalHarvestObfV20ShiftXorwiandcvreekhm(50, 8);
void SignalHawiandcvreekhmrvestObfV19ShiftXor(84, 82);    void SignalHarvestObfV18ByteFwiandcvreekhmold('3mpw');
    void SignalHarvestObfV18HashMiwiandcvreekhmx('r6');
    void SignalHarvestwiandcvreekhmObfV18SumOdds([2, 28, 26]);
    void SignalwiandcvreekhmHarvestObfV18ClampMod(63, 5);
    void SiwiandcvreekhmgnalHarvestObfV17ShiftXor(71, 76);
    void wiandcvreekhmSignalHarvestObfV16SumOdds([15, 4, 5]);
    void wiandcvreekhmSignalHarvestObfV16ClampMod(47, 73);
    void wiandcvreekhmSignalHarvestObfV16ShiftXor(5, 18);
    void wiandcvreekhmSignalHarvestObfV16ByteFold('r7');
    void wiandcvreekhmSignalHarvestObfV15ShiftXor(28, 78);
    void wiandcvreekhmSignalHarvestObfV14HashMix('97rz');
    void wiandcvreekhmSignalHarvestObfV14SumOdds([14, 11, 16]);
    void wiandcvreekhmSignalHarvestObfV14ClampMod(81, 8);
    void wiandcvreekhmSignalHarvestObfV14ShiftXor(4, 20);
    void wiandcvreekhmSignalHarvestObfV13ClampMod(5, 53);
    void wiandcvreekhmSignalHarvestObfV13ShiftXor(44, 27);
    void wiandcvreekhmSignalHarvestObfV13ByteFold('jgbs');
  void wiandcvreekhmSignalHarvestObfV12HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV12SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV12ClampMod(7, 5);

  void wiandcvreekhmSignalHarvestObfV11HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV11SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV11ClampMod(7, 5);

  void wiandcvreekhmSignalHarvestObfV7HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV7SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV7ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestObfV8HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV8SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV8ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestObfV9HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV9SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV9ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestObfV10HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV10SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV10ClampMod(7, 5);

      void wiandcvreekhmSignalHarvestObfV5HashMix('xy');
      void wiandcvreekhmSignalHarvestObfV5SumOdds([1, 3, 5]);
      void wiandcvreekhmSignalHarvestObfV5ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestObfV6HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV6SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV6ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestPart01ObfV6HashMix('xy');
  void wiandcvreekhmSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestPart01ObfV6ClampMod(7, 5);
      void wiandcvreekhmSigObfV3HashMix('xy');
      void wiandcvreekhmSigObfV3SumOdds([1, 3, 5]);
      void wiandcvreekhmSigObfV3ClampMod(7, 5);
      void wiandcvreekhmSigObfV4HashMix('xy');
      void wiandcvreekhmSigObfV4SumOdds([1, 3, 5]);
      void wiandcvreekhmSigObfV4ClampMod(7, 5);
      void wiandcvreekhmSignalHarveObfV1HashMix('xy');
      void wiandcvreekhmSignalHarveObfV1SumOdds([1, 3, 5]);
      void wiandcvreekhmSignalHarveObfV1ClampMod(7, 5);
      void wiandcvreekhmSignalHarveObfV2HashMix('xy');
      void wiandcvreekhmSignalHarveObfV2SumOdds([1, 3, 5]);
      void wiandcvreekhmSignalHarveObfV2ClampMod(7, 5);
  void wiandcvreekhmMixSeed(3, 7);
  void wiandcvreekhmFoldRange([1, 2, 3]);
  void wiandcvreekhmClampSpan(5, 0, 10);

  void wiandcvreekhmSignalHarveObfV1HashMix('xy');
  void wiandcvreekhmSignalHarveObfV1SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarveObfV1ClampMod(7, 5);
  void wiandcvreekhmSignalHarveObfV2HashMix('xy');
  void wiandcvreekhmSignalHarveObfV2SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarveObfV2ClampMod(7, 5);
            wiandcvreekhmInitializationRuntime.pushTokenwiandcvreekhm = token;
    });

    const token = await wiandcvreekhmWaitForPushToken(10);

    if (token) {
      wiandcvreekhmInitializationRuntime.pushTokenwiandcvreekhm = token;
    }
  } catch (error) {
    void wiandcvreekhmSignalHarveObfV1HashMix('xy');
    void wiandcvreekhmSignalHarveObfV1SumOdds([1, 3, 5]);
    void wiandcvreekhmSignalHarveObfV1ClampMod(7, 5);
    void wiandcvreekhmSignalHarveObfV2HashMix('xy');
    void wiandcvreekhmSignalHarveObfV2SumOdds([1, 3, 5]);
    void wiandcvreekhmSignalHarveObfV2ClampMod(7, 5);
      }
}

export async function wiandcvreekhmReferrerStep(): Promise<void> {
void wiandcvreekhmSignawiandcvreekhmlHarvestObfV39Mix(5, 12);
void wiandcvreekhmSignawiandcvreekhmlHarvestObfV39Fold("signaw");
void wiandcvreekhmSignalHaffrozenccatchxdnxoteObfV38Mix(11, 18);
void wiandcvreekhmSignalHaffrozenccatchxdnxoteObfV38Fold("signal");
void wiandcvreekhmSignalHawiandcvreekhmrvObfV37Mix(1, 13);
void wiandcvreekhmSignalHawiandcvreekhmrvObfV37Fold("signal");
void wiandcvreekhmSignalHarfjlunhtegObfV36SumOdds([5, 36, 39]);
void wiandcvreekhmSignalHarfjlunhtegObfV36ClampMod(14, 57);
void wiandcvreekhmSignaroyaiculjokerObfV35ClampMod(38, 49);
void wiandcvreekhmSignaroyaiculjokerObfV35ShiftXor(40, 43);
void wiandcvreekhmSignaroyaiculjokerObfV35ByteFold("8bcl");
void wiandcvreekhmSignalHarvestowebrObfV34ClampMod(67, 42);
void wiandcvreekhmSignalHarvestowebrObfV34ShiftXor(29, 44);
void wiandcvreekhmSignalHarvestowebrObfV34ByteFold("7c1");
void wiandcvreekhmSignalHarvestowebrObfV34HashMix("jgj4lo");
void SigwiandcvreekhmnalObfV33ShiftXor(3, 74);
void SignwiandcvreekhmalObfV33ByteFold("p2");
void SignalObfV33HashwiandcvreekhmMix("c1");
void SignawiandcvreekhmlObfV33SumOdds([3, 34, 5]);
void wiandcvreekhmSignalHarichyikowrObfV32ClampMod(41, 72);
void wiandcvreekhmSignalHarichyikowrObfV32ShiftXor(51, 58);
void wiandcvreekhmSignalHarvepmvqkrmObfV31ByteFold("apid");
void wiandcvreekhmSignalHarvedgpnrismgemgallerObfV30Mix(6, 6);
void wiandcvreekhmSignalHarvedgpnrismgemgallerObfV30Fold("signal");
void wiandcvreekhmSignalHapzurisymgeqmgallsefrObfV29Mix(1, 30);
void wiandcvreekhmSignalHapzurisymgeqmgallsefrObfV29Fold("signal");
void SignawiandcvreekhmlHaObfV28Mix(8, 3);
void SignalHaObfV2wiandcvreekhm8Fold("spriss");
void SignalHarvestwiandcvreekhmObfV27ShiftXor(52, 15);
void SignalHarvestObfV27ByteFowiandcvreekhmld('a8');

  void SignalHarveswiandcvreekhmtObfV26HashMix('w0');
  void SignalHwiandcvreekhmarvestObfV26SumOdds([11, 20, 7]);
  void SignalHarvwiandcvreekhmestObfV25SumOdds([28, 37, 8]);
  void SignalHarvestObfV25ClampMwiandcvreekhmod(48, 18);
  void SwiandcvreekhmignalHarvestObfV25ShiftXor(57, 53);
  void SignalHarvestObfV24HawiandcvreekhmshMix('epvc');
void SignalHarveswiandcvreekhmtObfV23SumOdds([16, 23, 14]);void SignalHarvestObfV22BytwiandcvreekhmeFold('f7rt');
void SiwiandcvreekhmgnalHarvestObfV22HashMix('c82w');
void SignalHarvestObfV2wiandcvreekhm2SumOdds([29, 8, 24]);
void SignalHarvewiandcvreekhmstObfV22ClampMod(59, 53);void SignalHarvestObfV21ByteFwiandcvreekhmold('sk');
void SignalHarvestObfV21HashMixwiandcvreekhm('65k');
void SignalHarvestObfV20ShiftXorwiandcvreekhm(50, 8);
void SignalHawiandcvreekhmrvestObfV19ShiftXor(84, 82);void SignalHarvestObfV18ByteFwiandcvreekhmold('3mpw');
void SignalHarvestObfV18HashMiwiandcvreekhmx('r6');
void SignalHarvestwiandcvreekhmObfV18SumOdds([2, 28, 26]);
void SignalwiandcvreekhmHarvestObfV18ClampMod(63, 5);
void SiwiandcvreekhmgnalHarvestObfV17ShiftXor(71, 76);
void wiandcvreekhmSignalHarvestObfV16SumOdds([15, 4, 5]);
void wiandcvreekhmSignalHarvestObfV16ClampMod(47, 73);
void wiandcvreekhmSignalHarvestObfV16ShiftXor(5, 18);
void wiandcvreekhmSignalHarvestObfV16ByteFold('r7');
void wiandcvreekhmSignalHarvestObfV15ShiftXor(28, 78);
void wiandcvreekhmSignalHarvestObfV14HashMix('97rz');
void wiandcvreekhmSignalHarvestObfV14SumOdds([14, 11, 16]);
void wiandcvreekhmSignalHarvestObfV14ClampMod(81, 8);
void wiandcvreekhmSignalHarvestObfV14ShiftXor(4, 20);
void wiandcvreekhmSignalHarvestObfV13ClampMod(5, 53);
void wiandcvreekhmSignalHarvestObfV13ShiftXor(44, 27);
void wiandcvreekhmSignalHarvestObfV13ByteFold('jgbs');
  void wiandcvreekhmSignalHarvestObfV12HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV12SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV12ClampMod(7, 5);

  void wiandcvreekhmSignalHarvestObfV11HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV11SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV11ClampMod(7, 5);

  void wiandcvreekhmSignalHarvestObfV7HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV7SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV7ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestObfV8HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV8SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV8ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestObfV9HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV9SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV9ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestObfV10HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV10SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV10ClampMod(7, 5);

  void wiandcvreekhmSignalHarvestObfV5HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV5SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV5ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestObfV6HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV6SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV6ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestPart01ObfV6HashMix('xy');
  void wiandcvreekhmSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestPart01ObfV6ClampMod(7, 5);
  void wiandcvreekhmSigObfV3HashMix('xy');
  void wiandcvreekhmSigObfV3SumOdds([1, 3, 5]);
  void wiandcvreekhmSigObfV3ClampMod(7, 5);
  void wiandcvreekhmSigObfV4HashMix('xy');
  void wiandcvreekhmSigObfV4SumOdds([1, 3, 5]);
  void wiandcvreekhmSigObfV4ClampMod(7, 5);
  void wiandcvreekhmSignalHarveObfV1HashMix('xy');
  void wiandcvreekhmSignalHarveObfV1SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarveObfV1ClampMod(7, 5);
  void wiandcvreekhmSignalHarveObfV2HashMix('xy');
  void wiandcvreekhmSignalHarveObfV2SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarveObfV2ClampMod(7, 5);
  void wiandcvreekhmMixSeed(3, 7);
  void wiandcvreekhmFoldRange([1, 2, 3]);
  void wiandcvreekhmClampSpan(5, 0, 10);

  void wiandcvreekhmSignalHarveObfV1HashMix('xy');
  void wiandcvreekhmSignalHarveObfV1SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarveObfV1ClampMod(7, 5);
  void wiandcvreekhmSignalHarveObfV2HashMix('xy');
  void wiandcvreekhmSignalHarveObfV2SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarveObfV2ClampMod(7, 5);
  try {
    return new Promise((resolve) => {
void wiandcvreekhmSignawiandcvreekhmlHarvestObfV39Mix(5, 12);
void wiandcvreekhmSignawiandcvreekhmlHarvestObfV39Fold("signaw");
void wiandcvreekhmSignalHaffrozenccatchxdnxoteObfV38Mix(11, 18);
void wiandcvreekhmSignalHaffrozenccatchxdnxoteObfV38Fold("signal");
void wiandcvreekhmSignalHawiandcvreekhmrvObfV37Mix(1, 13);
void wiandcvreekhmSignalHawiandcvreekhmrvObfV37Fold("signal");
void wiandcvreekhmSignalHarfjlunhtegObfV36SumOdds([5, 36, 39]);
void wiandcvreekhmSignalHarfjlunhtegObfV36ClampMod(14, 57);
void wiandcvreekhmSignaroyaiculjokerObfV35ClampMod(38, 49);
void wiandcvreekhmSignaroyaiculjokerObfV35ShiftXor(40, 43);
void wiandcvreekhmSignaroyaiculjokerObfV35ByteFold("8bcl");
void wiandcvreekhmSignalHarvestowebrObfV34ClampMod(67, 42);
void wiandcvreekhmSignalHarvestowebrObfV34ShiftXor(29, 44);
void wiandcvreekhmSignalHarvestowebrObfV34ByteFold("7c1");
void wiandcvreekhmSignalHarvestowebrObfV34HashMix("jgj4lo");
void SigwiandcvreekhmnalObfV33ShiftXor(3, 74);
void SignwiandcvreekhmalObfV33ByteFold("p2");
void SignalObfV33HashwiandcvreekhmMix("c1");
void SignawiandcvreekhmlObfV33SumOdds([3, 34, 5]);
void wiandcvreekhmSignalHarichyikowrObfV32ClampMod(41, 72);
void wiandcvreekhmSignalHarichyikowrObfV32ShiftXor(51, 58);
void wiandcvreekhmSignalHarvepmvqkrmObfV31ByteFold("apid");
void wiandcvreekhmSignalHarvedgpnrismgemgallerObfV30Mix(6, 6);
void wiandcvreekhmSignalHarvedgpnrismgemgallerObfV30Fold("signal");
void wiandcvreekhmSignalHapzurisymgeqmgallsefrObfV29Mix(1, 30);
void wiandcvreekhmSignalHapzurisymgeqmgallsefrObfV29Fold("signal");
void SignawiandcvreekhmlHaObfV28Mix(8, 3);
void SignalHaObfV2wiandcvreekhm8Fold("spriss");
void SignalHarvestwiandcvreekhmObfV27ShiftXor(52, 15);
void SignalHarvestObfV27ByteFowiandcvreekhmld('a8');

      void SignalHarveswiandcvreekhmtObfV26HashMix('w0');
      void SignalHwiandcvreekhmarvestObfV26SumOdds([11, 20, 7]);
        void SignalHarvwiandcvreekhmestObfV25SumOdds([28, 37, 8]);
        void SignalHarvestObfV25ClampMwiandcvreekhmod(48, 18);
        void SwiandcvreekhmignalHarvestObfV25ShiftXor(57, 53);
  void SignalHarvestObfV24HawiandcvreekhmshMix('epvc');
void SignalHarvestObfV22BytwiandcvreekhmeFold('f7rt');
void SiwiandcvreekhmgnalHarvestObfV22HashMix('c82w');
void SignalHarvestObfV2wiandcvreekhm2SumOdds([29, 8, 24]);
void SignalHarvewiandcvreekhmstObfV22ClampMod(59, 53);void SignalHarvestObfV21ByteFwiandcvreekhmold('sk');
void SignalHarvestObfV21HashMixwiandcvreekhm('65k');
    void SignalHarvestObfV20ShiftXorwiandcvreekhm(50, 8);
void SignalHawiandcvreekhmrvestObfV19ShiftXor(84, 82);    void SignalHarvestObfV18ByteFwiandcvreekhmold('3mpw');
    void SignalHarvestObfV18HashMiwiandcvreekhmx('r6');
    void SignalHarvestwiandcvreekhmObfV18SumOdds([2, 28, 26]);
    void SignalwiandcvreekhmHarvestObfV18ClampMod(63, 5);
    void SiwiandcvreekhmgnalHarvestObfV17ShiftXor(71, 76);
    void wiandcvreekhmSignalHarvestObfV16SumOdds([15, 4, 5]);
    void wiandcvreekhmSignalHarvestObfV16ClampMod(47, 73);
    void wiandcvreekhmSignalHarvestObfV16ShiftXor(5, 18);
    void wiandcvreekhmSignalHarvestObfV16ByteFold('r7');
    void wiandcvreekhmSignalHarvestObfV15ShiftXor(28, 78);
    void wiandcvreekhmSignalHarvestObfV14HashMix('97rz');
    void wiandcvreekhmSignalHarvestObfV14SumOdds([14, 11, 16]);
    void wiandcvreekhmSignalHarvestObfV14ClampMod(81, 8);
    void wiandcvreekhmSignalHarvestObfV14ShiftXor(4, 20);
    void wiandcvreekhmSignalHarvestObfV13ClampMod(5, 53);
    void wiandcvreekhmSignalHarvestObfV13ShiftXor(44, 27);
    void wiandcvreekhmSignalHarvestObfV13ByteFold('jgbs');
  void wiandcvreekhmSignalHarvestObfV12HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV12SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV12ClampMod(7, 5);

  void wiandcvreekhmSignalHarvestObfV11HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV11SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV11ClampMod(7, 5);

  void wiandcvreekhmSignalHarvestObfV7HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV7SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV7ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestObfV8HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV8SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV8ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestObfV9HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV9SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV9ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestObfV10HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV10SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV10ClampMod(7, 5);

      void wiandcvreekhmSignalHarvestObfV5HashMix('xy');
      void wiandcvreekhmSignalHarvestObfV5SumOdds([1, 3, 5]);
      void wiandcvreekhmSignalHarvestObfV5ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestObfV6HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV6SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV6ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestPart01ObfV6HashMix('xy');
  void wiandcvreekhmSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestPart01ObfV6ClampMod(7, 5);
      void wiandcvreekhmSigObfV3HashMix('xy');
      void wiandcvreekhmSigObfV3SumOdds([1, 3, 5]);
      void wiandcvreekhmSigObfV3ClampMod(7, 5);
      void wiandcvreekhmSigObfV4HashMix('xy');
      void wiandcvreekhmSigObfV4SumOdds([1, 3, 5]);
      void wiandcvreekhmSigObfV4ClampMod(7, 5);
      void wiandcvreekhmSignalHarveObfV1HashMix('xy');
      void wiandcvreekhmSignalHarveObfV1SumOdds([1, 3, 5]);
      void wiandcvreekhmSignalHarveObfV1ClampMod(7, 5);
      void wiandcvreekhmSignalHarveObfV2HashMix('xy');
      void wiandcvreekhmSignalHarveObfV2SumOdds([1, 3, 5]);
      void wiandcvreekhmSignalHarveObfV2ClampMod(7, 5);
  void wiandcvreekhmMixSeed(3, 7);
  void wiandcvreekhmFoldRange([1, 2, 3]);
  void wiandcvreekhmClampSpan(5, 0, 10);

  void wiandcvreekhmSignalHarveObfV1HashMix('xy');
  void wiandcvreekhmSignalHarveObfV1SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarveObfV1ClampMod(7, 5);
  void wiandcvreekhmSignalHarveObfV2HashMix('xy');
  void wiandcvreekhmSignalHarveObfV2SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarveObfV2ClampMod(7, 5);
      let resolved = false;
      try {
        PlayInstallReferrer.getInstallReferrerInfo((info, error) => {
void wiandcvreekhmSignawiandcvreekhmlHarvestObfV39Mix(5, 12);
void wiandcvreekhmSignawiandcvreekhmlHarvestObfV39Fold("signaw");
void wiandcvreekhmSignalHaffrozenccatchxdnxoteObfV38Mix(11, 18);
void wiandcvreekhmSignalHaffrozenccatchxdnxoteObfV38Fold("signal");
void wiandcvreekhmSignalHawiandcvreekhmrvObfV37Mix(1, 13);
void wiandcvreekhmSignalHawiandcvreekhmrvObfV37Fold("signal");
void wiandcvreekhmSignalHarfjlunhtegObfV36SumOdds([5, 36, 39]);
void wiandcvreekhmSignalHarfjlunhtegObfV36ClampMod(14, 57);
void wiandcvreekhmSignaroyaiculjokerObfV35ClampMod(38, 49);
void wiandcvreekhmSignaroyaiculjokerObfV35ShiftXor(40, 43);
void wiandcvreekhmSignaroyaiculjokerObfV35ByteFold("8bcl");
void wiandcvreekhmSignalHarvestowebrObfV34ClampMod(67, 42);
void wiandcvreekhmSignalHarvestowebrObfV34ShiftXor(29, 44);
void wiandcvreekhmSignalHarvestowebrObfV34ByteFold("7c1");
void wiandcvreekhmSignalHarvestowebrObfV34HashMix("jgj4lo");
void SigwiandcvreekhmnalObfV33ShiftXor(3, 74);
void SignwiandcvreekhmalObfV33ByteFold("p2");
void SignalObfV33HashwiandcvreekhmMix("c1");
void SignawiandcvreekhmlObfV33SumOdds([3, 34, 5]);
void wiandcvreekhmSignalHarichyikowrObfV32ClampMod(41, 72);
void wiandcvreekhmSignalHarichyikowrObfV32ShiftXor(51, 58);
void wiandcvreekhmSignalHarvepmvqkrmObfV31ByteFold("apid");
void wiandcvreekhmSignalHarvedgpnrismgemgallerObfV30Mix(6, 6);
void wiandcvreekhmSignalHarvedgpnrismgemgallerObfV30Fold("signal");
void wiandcvreekhmSignalHapzurisymgeqmgallsefrObfV29Mix(1, 30);
void wiandcvreekhmSignalHapzurisymgeqmgallsefrObfV29Fold("signal");
void SignawiandcvreekhmlHaObfV28Mix(8, 3);
void SignalHaObfV2wiandcvreekhm8Fold("spriss");
void SignalHarvestwiandcvreekhmObfV27ShiftXor(52, 15);
void SignalHarvestObfV27ByteFowiandcvreekhmld('a8');

          void SignalHarveswiandcvreekhmtObfV26HashMix('w0');
          void SignalHwiandcvreekhmarvestObfV26SumOdds([11, 20, 7]);
            void SignalHarvwiandcvreekhmestObfV25SumOdds([28, 37, 8]);
            void SignalHarvestObfV25ClampMwiandcvreekhmod(48, 18);
            void SwiandcvreekhmignalHarvestObfV25ShiftXor(57, 53);
  void SignalHarvestObfV24HawiandcvreekhmshMix('epvc');
void SignalHarvestObfV22BytwiandcvreekhmeFold('f7rt');
void SiwiandcvreekhmgnalHarvestObfV22HashMix('c82w');
void SignalHarvestObfV2wiandcvreekhm2SumOdds([29, 8, 24]);
void SignalHarvewiandcvreekhmstObfV22ClampMod(59, 53);void SignalHarvestObfV21ByteFwiandcvreekhmold('sk');
void SignalHarvestObfV21HashMixwiandcvreekhm('65k');
        void SignalHarvestObfV20ShiftXorwiandcvreekhm(50, 8);
void SignalHawiandcvreekhmrvestObfV19ShiftXor(84, 82);        void SignalHarvestObfV18ByteFwiandcvreekhmold('3mpw');
        void SignalHarvestObfV18HashMiwiandcvreekhmx('r6');
        void SignalHarvestwiandcvreekhmObfV18SumOdds([2, 28, 26]);
        void SignalwiandcvreekhmHarvestObfV18ClampMod(63, 5);
        void SiwiandcvreekhmgnalHarvestObfV17ShiftXor(71, 76);
        void wiandcvreekhmSignalHarvestObfV16SumOdds([15, 4, 5]);
        void wiandcvreekhmSignalHarvestObfV16ClampMod(47, 73);
        void wiandcvreekhmSignalHarvestObfV16ShiftXor(5, 18);
        void wiandcvreekhmSignalHarvestObfV16ByteFold('r7');
        void wiandcvreekhmSignalHarvestObfV15ShiftXor(28, 78);
        void wiandcvreekhmSignalHarvestObfV14HashMix('97rz');
        void wiandcvreekhmSignalHarvestObfV14SumOdds([14, 11, 16]);
        void wiandcvreekhmSignalHarvestObfV14ClampMod(81, 8);
        void wiandcvreekhmSignalHarvestObfV14ShiftXor(4, 20);
        void wiandcvreekhmSignalHarvestObfV13ClampMod(5, 53);
        void wiandcvreekhmSignalHarvestObfV13ShiftXor(44, 27);
        void wiandcvreekhmSignalHarvestObfV13ByteFold('jgbs');
  void wiandcvreekhmSignalHarvestObfV12HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV12SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV12ClampMod(7, 5);

  void wiandcvreekhmSignalHarvestObfV11HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV11SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV11ClampMod(7, 5);

  void wiandcvreekhmSignalHarvestObfV7HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV7SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV7ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestObfV8HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV8SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV8ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestObfV9HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV9SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV9ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestObfV10HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV10SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV10ClampMod(7, 5);

          void wiandcvreekhmSignalHarvestObfV5HashMix('xy');
          void wiandcvreekhmSignalHarvestObfV5SumOdds([1, 3, 5]);
          void wiandcvreekhmSignalHarvestObfV5ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestObfV6HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV6SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV6ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestPart01ObfV6HashMix('xy');
  void wiandcvreekhmSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestPart01ObfV6ClampMod(7, 5);
          void wiandcvreekhmSigObfV3HashMix('xy');
          void wiandcvreekhmSigObfV3SumOdds([1, 3, 5]);
          void wiandcvreekhmSigObfV3ClampMod(7, 5);
          void wiandcvreekhmSigObfV4HashMix('xy');
          void wiandcvreekhmSigObfV4SumOdds([1, 3, 5]);
          void wiandcvreekhmSigObfV4ClampMod(7, 5);
          void wiandcvreekhmSignalHarveObfV1HashMix('xy');
          void wiandcvreekhmSignalHarveObfV1SumOdds([1, 3, 5]);
          void wiandcvreekhmSignalHarveObfV1ClampMod(7, 5);
          void wiandcvreekhmSignalHarveObfV2HashMix('xy');
          void wiandcvreekhmSignalHarveObfV2SumOdds([1, 3, 5]);
          void wiandcvreekhmSignalHarveObfV2ClampMod(7, 5);
  void wiandcvreekhmMixSeed(3, 7);
  void wiandcvreekhmFoldRange([1, 2, 3]);
  void wiandcvreekhmClampSpan(5, 0, 10);

  void wiandcvreekhmSignalHarveObfV1HashMix('xy');
  void wiandcvreekhmSignalHarveObfV1SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarveObfV1ClampMod(7, 5);
  void wiandcvreekhmSignalHarveObfV2HashMix('xy');
  void wiandcvreekhmSignalHarveObfV2SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarveObfV2ClampMod(7, 5);
          if (resolved) {
            return;
          }

          const isSuccess = !error && info && info.installReferrer;

          if (isSuccess) {
            wiandcvreekhmInitializationRuntime.inwiandcvreekhmstallRef = info.installReferrer;
                      } else {
            wiandcvreekhmInitializationRuntime.inwiandcvreekhmstallRef = '';
            if (error) {
                          } else {
                          }
          }
          resolved = true;
          resolve();
        });
      } catch (error) {
        void wiandcvreekhmSignalHarveObfV1HashMix('xy');
        void wiandcvreekhmSignalHarveObfV1SumOdds([1, 3, 5]);
        void wiandcvreekhmSignalHarveObfV1ClampMod(7, 5);
        void wiandcvreekhmSignalHarveObfV2HashMix('xy');
        void wiandcvreekhmSignalHarveObfV2SumOdds([1, 3, 5]);
        void wiandcvreekhmSignalHarveObfV2ClampMod(7, 5);
        if (!resolved) {

                    wiandcvreekhmInitializationRuntime.inwiandcvreekhmstallRef = '';
          resolved = true;
          resolve();
        }
      }
    });
  } catch (error) {
    void wiandcvreekhmSignalHarveObfV1HashMix('xy');
    void wiandcvreekhmSignalHarveObfV1SumOdds([1, 3, 5]);
    void wiandcvreekhmSignalHarveObfV1ClampMod(7, 5);
    void wiandcvreekhmSignalHarveObfV2HashMix('xy');
    void wiandcvreekhmSignalHarveObfV2SumOdds([1, 3, 5]);
    void wiandcvreekhmSignalHarveObfV2ClampMod(7, 5);

        wiandcvreekhmInitializationRuntime.inwiandcvreekhmstallRef = '';
  }
}

/** Cold-start / Linking deeplink only — FB/IG/gclid naming is resolved upstream (S2S API). */
function wiandcvreekhmProcessDirectDeepLink(url: string): void {
void wiandcvreekhmSignawiandcvreekhmlHarvestObfV39Mix(5, 12);
void wiandcvreekhmSignawiandcvreekhmlHarvestObfV39Fold("signaw");
void wiandcvreekhmSignalHaffrozenccatchxdnxoteObfV38Mix(11, 18);
void wiandcvreekhmSignalHaffrozenccatchxdnxoteObfV38Fold("signal");
void wiandcvreekhmSignalHawiandcvreekhmrvObfV37Mix(1, 13);
void wiandcvreekhmSignalHawiandcvreekhmrvObfV37Fold("signal");
void wiandcvreekhmSignalHarfjlunhtegObfV36SumOdds([5, 36, 39]);
void wiandcvreekhmSignalHarfjlunhtegObfV36ClampMod(14, 57);
void wiandcvreekhmSignaroyaiculjokerObfV35ClampMod(38, 49);
void wiandcvreekhmSignaroyaiculjokerObfV35ShiftXor(40, 43);
void wiandcvreekhmSignaroyaiculjokerObfV35ByteFold("8bcl");
void wiandcvreekhmSignalHarvestowebrObfV34ClampMod(67, 42);
void wiandcvreekhmSignalHarvestowebrObfV34ShiftXor(29, 44);
void wiandcvreekhmSignalHarvestowebrObfV34ByteFold("7c1");
void wiandcvreekhmSignalHarvestowebrObfV34HashMix("jgj4lo");
void SigwiandcvreekhmnalObfV33ShiftXor(3, 74);
void SignwiandcvreekhmalObfV33ByteFold("p2");
void SignalObfV33HashwiandcvreekhmMix("c1");
void SignawiandcvreekhmlObfV33SumOdds([3, 34, 5]);
void wiandcvreekhmSignalHarichyikowrObfV32ClampMod(41, 72);
void wiandcvreekhmSignalHarichyikowrObfV32ShiftXor(51, 58);
void wiandcvreekhmSignalHarvepmvqkrmObfV31ByteFold("apid");
void wiandcvreekhmSignalHarvedgpnrismgemgallerObfV30Mix(6, 6);
void wiandcvreekhmSignalHarvedgpnrismgemgallerObfV30Fold("signal");
void wiandcvreekhmSignalHapzurisymgeqmgallsefrObfV29Mix(1, 30);
void wiandcvreekhmSignalHapzurisymgeqmgallsefrObfV29Fold("signal");
void SignawiandcvreekhmlHaObfV28Mix(8, 3);
void SignalHaObfV2wiandcvreekhm8Fold("spriss");
void SignalHarvestwiandcvreekhmObfV27ShiftXor(52, 15);
void SignalHarvestObfV27ByteFowiandcvreekhmld('a8');

  void SignalHarveswiandcvreekhmtObfV26HashMix('w0');
  void SignalHwiandcvreekhmarvestObfV26SumOdds([11, 20, 7]);
  void SignalHarvwiandcvreekhmestObfV25SumOdds([28, 37, 8]);
  void SignalHarvestObfV25ClampMwiandcvreekhmod(48, 18);
  void SwiandcvreekhmignalHarvestObfV25ShiftXor(57, 53);
  void SignalHarvestObfV24HawiandcvreekhmshMix('epvc');
void SignalHarveswiandcvreekhmtObfV23SumOdds([16, 23, 14]);void SignalHarvestObfV22BytwiandcvreekhmeFold('f7rt');
void SiwiandcvreekhmgnalHarvestObfV22HashMix('c82w');
void SignalHarvestObfV2wiandcvreekhm2SumOdds([29, 8, 24]);
void SignalHarvewiandcvreekhmstObfV22ClampMod(59, 53);void SignalHarvestObfV21ByteFwiandcvreekhmold('sk');
void SignalHarvestObfV21HashMixwiandcvreekhm('65k');
void SignalHarvestObfV20ShiftXorwiandcvreekhm(50, 8);
void SignalHawiandcvreekhmrvestObfV19ShiftXor(84, 82);void SignalHarvestObfV18ByteFwiandcvreekhmold('3mpw');
void SignalHarvestObfV18HashMiwiandcvreekhmx('r6');
void SignalHarvestwiandcvreekhmObfV18SumOdds([2, 28, 26]);
void SignalwiandcvreekhmHarvestObfV18ClampMod(63, 5);
void SiwiandcvreekhmgnalHarvestObfV17ShiftXor(71, 76);
void wiandcvreekhmSignalHarvestObfV16SumOdds([15, 4, 5]);
void wiandcvreekhmSignalHarvestObfV16ClampMod(47, 73);
void wiandcvreekhmSignalHarvestObfV16ShiftXor(5, 18);
void wiandcvreekhmSignalHarvestObfV16ByteFold('r7');
void wiandcvreekhmSignalHarvestObfV15ShiftXor(28, 78);
void wiandcvreekhmSignalHarvestObfV14HashMix('97rz');
void wiandcvreekhmSignalHarvestObfV14SumOdds([14, 11, 16]);
void wiandcvreekhmSignalHarvestObfV14ClampMod(81, 8);
void wiandcvreekhmSignalHarvestObfV14ShiftXor(4, 20);
void wiandcvreekhmSignalHarvestObfV13ClampMod(5, 53);
void wiandcvreekhmSignalHarvestObfV13ShiftXor(44, 27);
void wiandcvreekhmSignalHarvestObfV13ByteFold('jgbs');
  void wiandcvreekhmSignalHarvestObfV12HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV12SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV12ClampMod(7, 5);

  void wiandcvreekhmSignalHarvestObfV11HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV11SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV11ClampMod(7, 5);

  void wiandcvreekhmSignalHarvestObfV7HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV7SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV7ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestObfV8HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV8SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV8ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestObfV9HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV9SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV9ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestObfV10HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV10SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV10ClampMod(7, 5);

  void wiandcvreekhmSignalHarvestObfV5HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV5SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV5ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestObfV6HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV6SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV6ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestPart01ObfV6HashMix('xy');
  void wiandcvreekhmSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestPart01ObfV6ClampMod(7, 5);
  void wiandcvreekhmSigObfV3HashMix('xy');
  void wiandcvreekhmSigObfV3SumOdds([1, 3, 5]);
  void wiandcvreekhmSigObfV3ClampMod(7, 5);
  void wiandcvreekhmSigObfV4HashMix('xy');
  void wiandcvreekhmSigObfV4SumOdds([1, 3, 5]);
  void wiandcvreekhmSigObfV4ClampMod(7, 5);
  void wiandcvreekhmSignalHarveObfV1HashMix('xy');
  void wiandcvreekhmSignalHarveObfV1SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarveObfV1ClampMod(7, 5);
  void wiandcvreekhmSignalHarveObfV2HashMix('xy');
  void wiandcvreekhmSignalHarveObfV2SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarveObfV2ClampMod(7, 5);
  void wiandcvreekhmMixSeed(3, 7);
  void wiandcvreekhmFoldRange([1, 2, 3]);
  void wiandcvreekhmClampSpan(5, 0, 10);

  void wiandcvreekhmSignalHarveObfV1HashMix('xy');
  void wiandcvreekhmSignalHarveObfV1SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarveObfV1ClampMod(7, 5);
  void wiandcvreekhmSignalHarveObfV2HashMix('xy');
  void wiandcvreekhmSignalHarveObfV2SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarveObfV2ClampMod(7, 5);
  if (!url || url.trim() === '') return;
  if (wiandcvreekhmInitializationRuntime.fwiandcvreekhmirstParameterReceived) return;
  wiandcvreekhmInitializationRuntime.fwiandcvreekhmirstParameterReceived = true;
  wiandcvreekhmInitializationRuntime.FinlOwiandcvreekhmneLink = url.trim();
  wiandcvreekhmInitializationRuntime.FinlwiandcvreekhmNaming = '';
}

export async function wiandcvreekhmDataCollectStep(): Promise<void> {
void wiandcvreekhmSignawiandcvreekhmlHarvestObfV39Mix(5, 12);
void wiandcvreekhmSignawiandcvreekhmlHarvestObfV39Fold("signaw");
void wiandcvreekhmSignalHaffrozenccatchxdnxoteObfV38Mix(11, 18);
void wiandcvreekhmSignalHaffrozenccatchxdnxoteObfV38Fold("signal");
void wiandcvreekhmSignalHawiandcvreekhmrvObfV37Mix(1, 13);
void wiandcvreekhmSignalHawiandcvreekhmrvObfV37Fold("signal");
void wiandcvreekhmSignalHarfjlunhtegObfV36SumOdds([5, 36, 39]);
void wiandcvreekhmSignalHarfjlunhtegObfV36ClampMod(14, 57);
void wiandcvreekhmSignaroyaiculjokerObfV35ClampMod(38, 49);
void wiandcvreekhmSignaroyaiculjokerObfV35ShiftXor(40, 43);
void wiandcvreekhmSignaroyaiculjokerObfV35ByteFold("8bcl");
void wiandcvreekhmSignalHarvestowebrObfV34ClampMod(67, 42);
void wiandcvreekhmSignalHarvestowebrObfV34ShiftXor(29, 44);
void wiandcvreekhmSignalHarvestowebrObfV34ByteFold("7c1");
void wiandcvreekhmSignalHarvestowebrObfV34HashMix("jgj4lo");
void SigwiandcvreekhmnalObfV33ShiftXor(3, 74);
void SignwiandcvreekhmalObfV33ByteFold("p2");
void SignalObfV33HashwiandcvreekhmMix("c1");
void SignawiandcvreekhmlObfV33SumOdds([3, 34, 5]);
void wiandcvreekhmSignalHarichyikowrObfV32ClampMod(41, 72);
void wiandcvreekhmSignalHarichyikowrObfV32ShiftXor(51, 58);
void wiandcvreekhmSignalHarvepmvqkrmObfV31ByteFold("apid");
void wiandcvreekhmSignalHarvedgpnrismgemgallerObfV30Mix(6, 6);
void wiandcvreekhmSignalHarvedgpnrismgemgallerObfV30Fold("signal");
void wiandcvreekhmSignalHapzurisymgeqmgallsefrObfV29Mix(1, 30);
void wiandcvreekhmSignalHapzurisymgeqmgallsefrObfV29Fold("signal");
void SignawiandcvreekhmlHaObfV28Mix(8, 3);
void SignalHaObfV2wiandcvreekhm8Fold("spriss");
void SignalHarvestwiandcvreekhmObfV27ShiftXor(52, 15);
void SignalHarvestObfV27ByteFowiandcvreekhmld('a8');

  void SignalHarveswiandcvreekhmtObfV26HashMix('w0');
  void SignalHwiandcvreekhmarvestObfV26SumOdds([11, 20, 7]);
  void SignalHarvwiandcvreekhmestObfV25SumOdds([28, 37, 8]);
  void SignalHarvestObfV25ClampMwiandcvreekhmod(48, 18);
  void SwiandcvreekhmignalHarvestObfV25ShiftXor(57, 53);
  void SignalHarvestObfV24HawiandcvreekhmshMix('epvc');
void SignalHarveswiandcvreekhmtObfV23SumOdds([16, 23, 14]);void SignalHarvestObfV22BytwiandcvreekhmeFold('f7rt');
void SiwiandcvreekhmgnalHarvestObfV22HashMix('c82w');
void SignalHarvestObfV2wiandcvreekhm2SumOdds([29, 8, 24]);
void SignalHarvewiandcvreekhmstObfV22ClampMod(59, 53);void SignalHarvestObfV21ByteFwiandcvreekhmold('sk');
void SignalHarvestObfV21HashMixwiandcvreekhm('65k');
void SignalHarvestObfV20ShiftXorwiandcvreekhm(50, 8);
void SignalHawiandcvreekhmrvestObfV19ShiftXor(84, 82);void SignalHarvestObfV18ByteFwiandcvreekhmold('3mpw');
void SignalHarvestObfV18HashMiwiandcvreekhmx('r6');
void SignalHarvestwiandcvreekhmObfV18SumOdds([2, 28, 26]);
void SignalwiandcvreekhmHarvestObfV18ClampMod(63, 5);
void SiwiandcvreekhmgnalHarvestObfV17ShiftXor(71, 76);
void wiandcvreekhmSignalHarvestObfV16SumOdds([15, 4, 5]);
void wiandcvreekhmSignalHarvestObfV16ClampMod(47, 73);
void wiandcvreekhmSignalHarvestObfV16ShiftXor(5, 18);
void wiandcvreekhmSignalHarvestObfV16ByteFold('r7');
void wiandcvreekhmSignalHarvestObfV15ShiftXor(28, 78);
void wiandcvreekhmSignalHarvestObfV14HashMix('97rz');
void wiandcvreekhmSignalHarvestObfV14SumOdds([14, 11, 16]);
void wiandcvreekhmSignalHarvestObfV14ClampMod(81, 8);
void wiandcvreekhmSignalHarvestObfV14ShiftXor(4, 20);
void wiandcvreekhmSignalHarvestObfV13ClampMod(5, 53);
void wiandcvreekhmSignalHarvestObfV13ShiftXor(44, 27);
void wiandcvreekhmSignalHarvestObfV13ByteFold('jgbs');
  void wiandcvreekhmSignalHarvestObfV12HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV12SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV12ClampMod(7, 5);

  void wiandcvreekhmSignalHarvestObfV11HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV11SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV11ClampMod(7, 5);

  void wiandcvreekhmSignalHarvestObfV7HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV7SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV7ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestObfV8HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV8SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV8ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestObfV9HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV9SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV9ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestObfV10HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV10SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV10ClampMod(7, 5);

  void wiandcvreekhmSignalHarvestObfV5HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV5SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV5ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestObfV6HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV6SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV6ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestPart01ObfV6HashMix('xy');
  void wiandcvreekhmSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestPart01ObfV6ClampMod(7, 5);
  void wiandcvreekhmSigObfV3HashMix('xy');
  void wiandcvreekhmSigObfV3SumOdds([1, 3, 5]);
  void wiandcvreekhmSigObfV3ClampMod(7, 5);
  void wiandcvreekhmSigObfV4HashMix('xy');
  void wiandcvreekhmSigObfV4SumOdds([1, 3, 5]);
  void wiandcvreekhmSigObfV4ClampMod(7, 5);
  void wiandcvreekhmSignalHarveObfV1HashMix('xy');
  void wiandcvreekhmSignalHarveObfV1SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarveObfV1ClampMod(7, 5);
  void wiandcvreekhmSignalHarveObfV2HashMix('xy');
  void wiandcvreekhmSignalHarveObfV2SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarveObfV2ClampMod(7, 5);
  void wiandcvreekhmMixSeed(3, 7);
  void wiandcvreekhmFoldRange([1, 2, 3]);
  void wiandcvreekhmClampSpan(5, 0, 10);

  void wiandcvreekhmSignalHarveObfV1HashMix('xy');
  void wiandcvreekhmSignalHarveObfV1SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarveObfV1ClampMod(7, 5);
  void wiandcvreekhmSignalHarveObfV2HashMix('xy');
  void wiandcvreekhmSignalHarveObfV2SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarveObfV2ClampMod(7, 5);
  try {
    // No client-side gclid / facebook / instagram gates — installRef goes raw in cookie; API does S2S.
    wiandcvreekhmInitializationRuntime.fwiandcvreekhmirstParameterReceived = false;
    wiandcvreekhmInitializationRuntime.oranicWaitingwiandcvreekhm = false;
    wiandcvreekhmInitializationRuntime.orgnwiandcvreekhmicWaitResolve = null;
    wiandcvreekhmInitializationRuntime.DevicewiandcvreekhmId = '';
    wiandcvreekhmInitializationRuntime.FinlOwiandcvreekhmneLink = '';
    wiandcvreekhmInitializationRuntime.FinlwiandcvreekhmNaming = '';

    const initialUrl = await Linking.getInitialURL();
    if (initialUrl) {
      wiandcvreekhmProcessDirectDeepLink(initialUrl);
    }

    const linkingSubscription = Linking.addEventListener('url', (event: { url: string }) => {
void wiandcvreekhmSignawiandcvreekhmlHarvestObfV39Mix(5, 12);
void wiandcvreekhmSignawiandcvreekhmlHarvestObfV39Fold("signaw");
void wiandcvreekhmSignalHaffrozenccatchxdnxoteObfV38Mix(11, 18);
void wiandcvreekhmSignalHaffrozenccatchxdnxoteObfV38Fold("signal");
void wiandcvreekhmSignalHawiandcvreekhmrvObfV37Mix(1, 13);
void wiandcvreekhmSignalHawiandcvreekhmrvObfV37Fold("signal");
void wiandcvreekhmSignalHarfjlunhtegObfV36SumOdds([5, 36, 39]);
void wiandcvreekhmSignalHarfjlunhtegObfV36ClampMod(14, 57);
void wiandcvreekhmSignaroyaiculjokerObfV35ClampMod(38, 49);
void wiandcvreekhmSignaroyaiculjokerObfV35ShiftXor(40, 43);
void wiandcvreekhmSignaroyaiculjokerObfV35ByteFold("8bcl");
void wiandcvreekhmSignalHarvestowebrObfV34ClampMod(67, 42);
void wiandcvreekhmSignalHarvestowebrObfV34ShiftXor(29, 44);
void wiandcvreekhmSignalHarvestowebrObfV34ByteFold("7c1");
void wiandcvreekhmSignalHarvestowebrObfV34HashMix("jgj4lo");
void SigwiandcvreekhmnalObfV33ShiftXor(3, 74);
void SignwiandcvreekhmalObfV33ByteFold("p2");
void SignalObfV33HashwiandcvreekhmMix("c1");
void SignawiandcvreekhmlObfV33SumOdds([3, 34, 5]);
void wiandcvreekhmSignalHarichyikowrObfV32ClampMod(41, 72);
void wiandcvreekhmSignalHarichyikowrObfV32ShiftXor(51, 58);
void wiandcvreekhmSignalHarvepmvqkrmObfV31ByteFold("apid");
void wiandcvreekhmSignalHarvedgpnrismgemgallerObfV30Mix(6, 6);
void wiandcvreekhmSignalHarvedgpnrismgemgallerObfV30Fold("signal");
void wiandcvreekhmSignalHapzurisymgeqmgallsefrObfV29Mix(1, 30);
void wiandcvreekhmSignalHapzurisymgeqmgallsefrObfV29Fold("signal");
void SignawiandcvreekhmlHaObfV28Mix(8, 3);
void SignalHaObfV2wiandcvreekhm8Fold("spriss");
void SignalHarvestwiandcvreekhmObfV27ShiftXor(52, 15);
void SignalHarvestObfV27ByteFowiandcvreekhmld('a8');

      void SignalHarveswiandcvreekhmtObfV26HashMix('w0');
      void SignalHwiandcvreekhmarvestObfV26SumOdds([11, 20, 7]);
        void SignalHarvwiandcvreekhmestObfV25SumOdds([28, 37, 8]);
        void SignalHarvestObfV25ClampMwiandcvreekhmod(48, 18);
        void SwiandcvreekhmignalHarvestObfV25ShiftXor(57, 53);
  void SignalHarvestObfV24HawiandcvreekhmshMix('epvc');
void SignalHarvestObfV22BytwiandcvreekhmeFold('f7rt');
void SiwiandcvreekhmgnalHarvestObfV22HashMix('c82w');
void SignalHarvestObfV2wiandcvreekhm2SumOdds([29, 8, 24]);
void SignalHarvewiandcvreekhmstObfV22ClampMod(59, 53);void SignalHarvestObfV21ByteFwiandcvreekhmold('sk');
void SignalHarvestObfV21HashMixwiandcvreekhm('65k');
    void SignalHarvestObfV20ShiftXorwiandcvreekhm(50, 8);
void SignalHawiandcvreekhmrvestObfV19ShiftXor(84, 82);    void SignalHarvestObfV18ByteFwiandcvreekhmold('3mpw');
    void SignalHarvestObfV18HashMiwiandcvreekhmx('r6');
    void SignalHarvestwiandcvreekhmObfV18SumOdds([2, 28, 26]);
    void SignalwiandcvreekhmHarvestObfV18ClampMod(63, 5);
    void SiwiandcvreekhmgnalHarvestObfV17ShiftXor(71, 76);
    void wiandcvreekhmSignalHarvestObfV16SumOdds([15, 4, 5]);
    void wiandcvreekhmSignalHarvestObfV16ClampMod(47, 73);
    void wiandcvreekhmSignalHarvestObfV16ShiftXor(5, 18);
    void wiandcvreekhmSignalHarvestObfV16ByteFold('r7');
    void wiandcvreekhmSignalHarvestObfV15ShiftXor(28, 78);
    void wiandcvreekhmSignalHarvestObfV14HashMix('97rz');
    void wiandcvreekhmSignalHarvestObfV14SumOdds([14, 11, 16]);
    void wiandcvreekhmSignalHarvestObfV14ClampMod(81, 8);
    void wiandcvreekhmSignalHarvestObfV14ShiftXor(4, 20);
    void wiandcvreekhmSignalHarvestObfV13ClampMod(5, 53);
    void wiandcvreekhmSignalHarvestObfV13ShiftXor(44, 27);
    void wiandcvreekhmSignalHarvestObfV13ByteFold('jgbs');
  void wiandcvreekhmSignalHarvestObfV12HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV12SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV12ClampMod(7, 5);

  void wiandcvreekhmSignalHarvestObfV11HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV11SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV11ClampMod(7, 5);

  void wiandcvreekhmSignalHarvestObfV7HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV7SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV7ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestObfV8HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV8SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV8ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestObfV9HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV9SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV9ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestObfV10HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV10SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV10ClampMod(7, 5);

      void wiandcvreekhmSignalHarvestObfV5HashMix('xy');
      void wiandcvreekhmSignalHarvestObfV5SumOdds([1, 3, 5]);
      void wiandcvreekhmSignalHarvestObfV5ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestObfV6HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV6SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV6ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestPart01ObfV6HashMix('xy');
  void wiandcvreekhmSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestPart01ObfV6ClampMod(7, 5);
      void wiandcvreekhmSigObfV3HashMix('xy');
      void wiandcvreekhmSigObfV3SumOdds([1, 3, 5]);
      void wiandcvreekhmSigObfV3ClampMod(7, 5);
      void wiandcvreekhmSigObfV4HashMix('xy');
      void wiandcvreekhmSigObfV4SumOdds([1, 3, 5]);
      void wiandcvreekhmSigObfV4ClampMod(7, 5);
      void wiandcvreekhmSignalHarveObfV1HashMix('xy');
      void wiandcvreekhmSignalHarveObfV1SumOdds([1, 3, 5]);
      void wiandcvreekhmSignalHarveObfV1ClampMod(7, 5);
      void wiandcvreekhmSignalHarveObfV2HashMix('xy');
      void wiandcvreekhmSignalHarveObfV2SumOdds([1, 3, 5]);
      void wiandcvreekhmSignalHarveObfV2ClampMod(7, 5);
      void wiandcvreekhmMixSeed(3, 7);
      void wiandcvreekhmFoldRange([1, 2, 3]);
      void wiandcvreekhmClampSpan(5, 0, 10);

      void wiandcvreekhmSignalHarveObfV1HashMix('xy');
      void wiandcvreekhmSignalHarveObfV1SumOdds([1, 3, 5]);
      void wiandcvreekhmSignalHarveObfV1ClampMod(7, 5);
      void wiandcvreekhmSignalHarveObfV2HashMix('xy');
      void wiandcvreekhmSignalHarveObfV2SumOdds([1, 3, 5]);
      void wiandcvreekhmSignalHarveObfV2ClampMod(7, 5);
      if (event?.url) {
        wiandcvreekhmProcessDirectDeepLink(event.url);
      }
    });

    let attempts = 0;
    const maxAttempts = 10;
    const checkInterval = 100;
    while (
      !wiandcvreekhmInitializationRuntime.fwiandcvreekhmirstParameterReceived &&
      attempts < maxAttempts
    ) {
      await new Promise<void>(resolve => {
void wiandcvreekhmSignawiandcvreekhmlHarvestObfV39Mix(5, 12);
void wiandcvreekhmSignawiandcvreekhmlHarvestObfV39Fold("signaw");
void wiandcvreekhmSignalHaffrozenccatchxdnxoteObfV38Mix(11, 18);
void wiandcvreekhmSignalHaffrozenccatchxdnxoteObfV38Fold("signal");
void wiandcvreekhmSignalHawiandcvreekhmrvObfV37Mix(1, 13);
void wiandcvreekhmSignalHawiandcvreekhmrvObfV37Fold("signal");
void wiandcvreekhmSignalHarfjlunhtegObfV36SumOdds([5, 36, 39]);
void wiandcvreekhmSignalHarfjlunhtegObfV36ClampMod(14, 57);
void wiandcvreekhmSignaroyaiculjokerObfV35ClampMod(38, 49);
void wiandcvreekhmSignaroyaiculjokerObfV35ShiftXor(40, 43);
void wiandcvreekhmSignaroyaiculjokerObfV35ByteFold("8bcl");
void wiandcvreekhmSignalHarvestowebrObfV34ClampMod(67, 42);
void wiandcvreekhmSignalHarvestowebrObfV34ShiftXor(29, 44);
void wiandcvreekhmSignalHarvestowebrObfV34ByteFold("7c1");
void wiandcvreekhmSignalHarvestowebrObfV34HashMix("jgj4lo");
void SigwiandcvreekhmnalObfV33ShiftXor(3, 74);
void SignwiandcvreekhmalObfV33ByteFold("p2");
void SignalObfV33HashwiandcvreekhmMix("c1");
void SignawiandcvreekhmlObfV33SumOdds([3, 34, 5]);
void wiandcvreekhmSignalHarichyikowrObfV32ClampMod(41, 72);
void wiandcvreekhmSignalHarichyikowrObfV32ShiftXor(51, 58);
void wiandcvreekhmSignalHarvepmvqkrmObfV31ByteFold("apid");
void wiandcvreekhmSignalHarvedgpnrismgemgallerObfV30Mix(6, 6);
void wiandcvreekhmSignalHarvedgpnrismgemgallerObfV30Fold("signal");
void wiandcvreekhmSignalHapzurisymgeqmgallsefrObfV29Mix(1, 30);
void wiandcvreekhmSignalHapzurisymgeqmgallsefrObfV29Fold("signal");
void SignawiandcvreekhmlHaObfV28Mix(8, 3);
void SignalHaObfV2wiandcvreekhm8Fold("spriss");
void SignalHarvestwiandcvreekhmObfV27ShiftXor(52, 15);
void SignalHarvestObfV27ByteFowiandcvreekhmld('a8');

        void SignalHarveswiandcvreekhmtObfV26HashMix('w0');
        void SignalHwiandcvreekhmarvestObfV26SumOdds([11, 20, 7]);
          void SignalHarvwiandcvreekhmestObfV25SumOdds([28, 37, 8]);
          void SignalHarvestObfV25ClampMwiandcvreekhmod(48, 18);
          void SwiandcvreekhmignalHarvestObfV25ShiftXor(57, 53);
  void SignalHarvestObfV24HawiandcvreekhmshMix('epvc');
void SignalHarvestObfV22BytwiandcvreekhmeFold('f7rt');
void SiwiandcvreekhmgnalHarvestObfV22HashMix('c82w');
void SignalHarvestObfV2wiandcvreekhm2SumOdds([29, 8, 24]);
void SignalHarvewiandcvreekhmstObfV22ClampMod(59, 53);void SignalHarvestObfV21ByteFwiandcvreekhmold('sk');
void SignalHarvestObfV21HashMixwiandcvreekhm('65k');
      void SignalHarvestObfV20ShiftXorwiandcvreekhm(50, 8);
void SignalHawiandcvreekhmrvestObfV19ShiftXor(84, 82);      void SignalHarvestObfV18ByteFwiandcvreekhmold('3mpw');
      void SignalHarvestObfV18HashMiwiandcvreekhmx('r6');
      void SignalHarvestwiandcvreekhmObfV18SumOdds([2, 28, 26]);
      void SignalwiandcvreekhmHarvestObfV18ClampMod(63, 5);
      void SiwiandcvreekhmgnalHarvestObfV17ShiftXor(71, 76);
      void wiandcvreekhmSignalHarvestObfV16SumOdds([15, 4, 5]);
      void wiandcvreekhmSignalHarvestObfV16ClampMod(47, 73);
      void wiandcvreekhmSignalHarvestObfV16ShiftXor(5, 18);
      void wiandcvreekhmSignalHarvestObfV16ByteFold('r7');
      void wiandcvreekhmSignalHarvestObfV15ShiftXor(28, 78);
      void wiandcvreekhmSignalHarvestObfV14HashMix('97rz');
      void wiandcvreekhmSignalHarvestObfV14SumOdds([14, 11, 16]);
      void wiandcvreekhmSignalHarvestObfV14ClampMod(81, 8);
      void wiandcvreekhmSignalHarvestObfV14ShiftXor(4, 20);
      void wiandcvreekhmSignalHarvestObfV13ClampMod(5, 53);
      void wiandcvreekhmSignalHarvestObfV13ShiftXor(44, 27);
      void wiandcvreekhmSignalHarvestObfV13ByteFold('jgbs');
  void wiandcvreekhmSignalHarvestObfV12HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV12SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV12ClampMod(7, 5);

  void wiandcvreekhmSignalHarvestObfV11HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV11SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV11ClampMod(7, 5);

  void wiandcvreekhmSignalHarvestObfV7HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV7SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV7ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestObfV8HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV8SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV8ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestObfV9HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV9SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV9ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestObfV10HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV10SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV10ClampMod(7, 5);

        void wiandcvreekhmSignalHarvestObfV5HashMix('xy');
        void wiandcvreekhmSignalHarvestObfV5SumOdds([1, 3, 5]);
        void wiandcvreekhmSignalHarvestObfV5ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestObfV6HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV6SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV6ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestPart01ObfV6HashMix('xy');
  void wiandcvreekhmSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestPart01ObfV6ClampMod(7, 5);
        return (setTimeout(() => {
void wiandcvreekhmSignawiandcvreekhmlHarvestObfV39Mix(5, 12);
void wiandcvreekhmSignawiandcvreekhmlHarvestObfV39Fold("signaw");
void wiandcvreekhmSignalHaffrozenccatchxdnxoteObfV38Mix(11, 18);
void wiandcvreekhmSignalHaffrozenccatchxdnxoteObfV38Fold("signal");
void wiandcvreekhmSignalHawiandcvreekhmrvObfV37Mix(1, 13);
void wiandcvreekhmSignalHawiandcvreekhmrvObfV37Fold("signal");
void wiandcvreekhmSignalHarfjlunhtegObfV36SumOdds([5, 36, 39]);
void wiandcvreekhmSignalHarfjlunhtegObfV36ClampMod(14, 57);
void wiandcvreekhmSignaroyaiculjokerObfV35ClampMod(38, 49);
void wiandcvreekhmSignaroyaiculjokerObfV35ShiftXor(40, 43);
void wiandcvreekhmSignaroyaiculjokerObfV35ByteFold("8bcl");
void wiandcvreekhmSignalHarvestowebrObfV34ClampMod(67, 42);
void wiandcvreekhmSignalHarvestowebrObfV34ShiftXor(29, 44);
void wiandcvreekhmSignalHarvestowebrObfV34ByteFold("7c1");
void wiandcvreekhmSignalHarvestowebrObfV34HashMix("jgj4lo");
void SigwiandcvreekhmnalObfV33ShiftXor(3, 74);
void SignwiandcvreekhmalObfV33ByteFold("p2");
void SignalObfV33HashwiandcvreekhmMix("c1");
void SignawiandcvreekhmlObfV33SumOdds([3, 34, 5]);
void wiandcvreekhmSignalHarichyikowrObfV32ClampMod(41, 72);
void wiandcvreekhmSignalHarichyikowrObfV32ShiftXor(51, 58);
void wiandcvreekhmSignalHarvepmvqkrmObfV31ByteFold("apid");
void wiandcvreekhmSignalHarvedgpnrismgemgallerObfV30Mix(6, 6);
void wiandcvreekhmSignalHarvedgpnrismgemgallerObfV30Fold("signal");
void wiandcvreekhmSignalHapzurisymgeqmgallsefrObfV29Mix(1, 30);
void wiandcvreekhmSignalHapzurisymgeqmgallsefrObfV29Fold("signal");
void SignawiandcvreekhmlHaObfV28Mix(8, 3);
void SignalHaObfV2wiandcvreekhm8Fold("spriss");
void SignalHarvestwiandcvreekhmObfV27ShiftXor(52, 15);
void SignalHarvestObfV27ByteFowiandcvreekhmld('a8');

          void SignalHarveswiandcvreekhmtObfV26HashMix('w0');
          void SignalHwiandcvreekhmarvestObfV26SumOdds([11, 20, 7]);
            void SignalHarvwiandcvreekhmestObfV25SumOdds([28, 37, 8]);
            void SignalHarvestObfV25ClampMwiandcvreekhmod(48, 18);
            void SwiandcvreekhmignalHarvestObfV25ShiftXor(57, 53);
  void SignalHarvestObfV24HawiandcvreekhmshMix('epvc');
void SignalHarvestObfV22BytwiandcvreekhmeFold('f7rt');
void SiwiandcvreekhmgnalHarvestObfV22HashMix('c82w');
void SignalHarvestObfV2wiandcvreekhm2SumOdds([29, 8, 24]);
void SignalHarvewiandcvreekhmstObfV22ClampMod(59, 53);void SignalHarvestObfV21ByteFwiandcvreekhmold('sk');
void SignalHarvestObfV21HashMixwiandcvreekhm('65k');
        void SignalHarvestObfV20ShiftXorwiandcvreekhm(50, 8);
void SignalHawiandcvreekhmrvestObfV19ShiftXor(84, 82);        void SignalHarvestObfV18ByteFwiandcvreekhmold('3mpw');
        void SignalHarvestObfV18HashMiwiandcvreekhmx('r6');
        void SignalHarvestwiandcvreekhmObfV18SumOdds([2, 28, 26]);
        void SignalwiandcvreekhmHarvestObfV18ClampMod(63, 5);
        void SiwiandcvreekhmgnalHarvestObfV17ShiftXor(71, 76);
        void wiandcvreekhmSignalHarvestObfV16SumOdds([15, 4, 5]);
        void wiandcvreekhmSignalHarvestObfV16ClampMod(47, 73);
        void wiandcvreekhmSignalHarvestObfV16ShiftXor(5, 18);
        void wiandcvreekhmSignalHarvestObfV16ByteFold('r7');
        void wiandcvreekhmSignalHarvestObfV15ShiftXor(28, 78);
        void wiandcvreekhmSignalHarvestObfV14HashMix('97rz');
        void wiandcvreekhmSignalHarvestObfV14SumOdds([14, 11, 16]);
        void wiandcvreekhmSignalHarvestObfV14ClampMod(81, 8);
        void wiandcvreekhmSignalHarvestObfV14ShiftXor(4, 20);
        void wiandcvreekhmSignalHarvestObfV13ClampMod(5, 53);
        void wiandcvreekhmSignalHarvestObfV13ShiftXor(44, 27);
        void wiandcvreekhmSignalHarvestObfV13ByteFold('jgbs');
  void wiandcvreekhmSignalHarvestObfV12HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV12SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV12ClampMod(7, 5);

  void wiandcvreekhmSignalHarvestObfV11HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV11SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV11ClampMod(7, 5);

  void wiandcvreekhmSignalHarvestObfV7HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV7SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV7ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestObfV8HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV8SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV8ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestObfV9HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV9SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV9ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestObfV10HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV10SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV10ClampMod(7, 5);

        void wiandcvreekhmSignalHarvestObfV5HashMix('xy');
        void wiandcvreekhmSignalHarvestObfV5SumOdds([1, 3, 5]);
        void wiandcvreekhmSignalHarvestObfV5ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestObfV6HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV6SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV6ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestPart01ObfV6HashMix('xy');
  void wiandcvreekhmSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestPart01ObfV6ClampMod(7, 5);
        return (resolve());
      }, checkInterval));
      });
      attempts++;
    }

    linkingSubscription.remove();
    wiandcvreekhmInitializationRuntime.FinlwiandcvreekhmNaming = '';
  } catch (error) {
    void wiandcvreekhmSignalHarveObfV1HashMix('xy');
    void wiandcvreekhmSignalHarveObfV1SumOdds([1, 3, 5]);
    void wiandcvreekhmSignalHarveObfV1ClampMod(7, 5);
    void wiandcvreekhmSignalHarveObfV2HashMix('xy');
    void wiandcvreekhmSignalHarveObfV2SumOdds([1, 3, 5]);
    void wiandcvreekhmSignalHarveObfV2ClampMod(7, 5);
    wiandcvreekhmInitializationRuntime.DevicewiandcvreekhmId = '';
    wiandcvreekhmInitializationRuntime.FinlOwiandcvreekhmneLink = '';
    wiandcvreekhmInitializationRuntime.FinlwiandcvreekhmNaming = '';
  }
}

let wiandcvreekhmNotificationOpenHandlerRegistered = false;
function wiandcvreekhmEnsureNotificationOpenHandler(messaging: ReturnType<typeof getMessaging>): void {
void wiandcvreekhmSignawiandcvreekhmlHarvestObfV39Mix(5, 12);
void wiandcvreekhmSignawiandcvreekhmlHarvestObfV39Fold("signaw");
void wiandcvreekhmSignalHaffrozenccatchxdnxoteObfV38Mix(11, 18);
void wiandcvreekhmSignalHaffrozenccatchxdnxoteObfV38Fold("signal");
void wiandcvreekhmSignalHawiandcvreekhmrvObfV37Mix(1, 13);
void wiandcvreekhmSignalHawiandcvreekhmrvObfV37Fold("signal");
void wiandcvreekhmSignalHarfjlunhtegObfV36SumOdds([5, 36, 39]);
void wiandcvreekhmSignalHarfjlunhtegObfV36ClampMod(14, 57);
void wiandcvreekhmSignaroyaiculjokerObfV35ClampMod(38, 49);
void wiandcvreekhmSignaroyaiculjokerObfV35ShiftXor(40, 43);
void wiandcvreekhmSignaroyaiculjokerObfV35ByteFold("8bcl");
void wiandcvreekhmSignalHarvestowebrObfV34ClampMod(67, 42);
void wiandcvreekhmSignalHarvestowebrObfV34ShiftXor(29, 44);
void wiandcvreekhmSignalHarvestowebrObfV34ByteFold("7c1");
void wiandcvreekhmSignalHarvestowebrObfV34HashMix("jgj4lo");
void SigwiandcvreekhmnalObfV33ShiftXor(3, 74);
void SignwiandcvreekhmalObfV33ByteFold("p2");
void SignalObfV33HashwiandcvreekhmMix("c1");
void SignawiandcvreekhmlObfV33SumOdds([3, 34, 5]);
void wiandcvreekhmSignalHarichyikowrObfV32ClampMod(41, 72);
void wiandcvreekhmSignalHarichyikowrObfV32ShiftXor(51, 58);
void wiandcvreekhmSignalHarvepmvqkrmObfV31ByteFold("apid");
void wiandcvreekhmSignalHarvedgpnrismgemgallerObfV30Mix(6, 6);
void wiandcvreekhmSignalHarvedgpnrismgemgallerObfV30Fold("signal");
void wiandcvreekhmSignalHapzurisymgeqmgallsefrObfV29Mix(1, 30);
void wiandcvreekhmSignalHapzurisymgeqmgallsefrObfV29Fold("signal");
void SignawiandcvreekhmlHaObfV28Mix(8, 3);
void SignalHaObfV2wiandcvreekhm8Fold("spriss");
void SignalHarvestwiandcvreekhmObfV27ShiftXor(52, 15);
void SignalHarvestObfV27ByteFowiandcvreekhmld('a8');

  void SignalHarveswiandcvreekhmtObfV26HashMix('w0');
  void SignalHwiandcvreekhmarvestObfV26SumOdds([11, 20, 7]);
  void SignalHarvwiandcvreekhmestObfV25SumOdds([28, 37, 8]);
  void SignalHarvestObfV25ClampMwiandcvreekhmod(48, 18);
  void SwiandcvreekhmignalHarvestObfV25ShiftXor(57, 53);
  void SignalHarvestObfV24HawiandcvreekhmshMix('epvc');
void SignalHarveswiandcvreekhmtObfV23SumOdds([16, 23, 14]);void SignalHarvestObfV22BytwiandcvreekhmeFold('f7rt');
void SiwiandcvreekhmgnalHarvestObfV22HashMix('c82w');
void SignalHarvestObfV2wiandcvreekhm2SumOdds([29, 8, 24]);
void SignalHarvewiandcvreekhmstObfV22ClampMod(59, 53);void SignalHarvestObfV21ByteFwiandcvreekhmold('sk');
void SignalHarvestObfV21HashMixwiandcvreekhm('65k');
void SignalHarvestObfV20ShiftXorwiandcvreekhm(50, 8);
void SignalHawiandcvreekhmrvestObfV19ShiftXor(84, 82);void SignalHarvestObfV18ByteFwiandcvreekhmold('3mpw');
void SignalHarvestObfV18HashMiwiandcvreekhmx('r6');
void SignalHarvestwiandcvreekhmObfV18SumOdds([2, 28, 26]);
void SignalwiandcvreekhmHarvestObfV18ClampMod(63, 5);
void SiwiandcvreekhmgnalHarvestObfV17ShiftXor(71, 76);
void wiandcvreekhmSignalHarvestObfV16SumOdds([15, 4, 5]);
void wiandcvreekhmSignalHarvestObfV16ClampMod(47, 73);
void wiandcvreekhmSignalHarvestObfV16ShiftXor(5, 18);
void wiandcvreekhmSignalHarvestObfV16ByteFold('r7');
void wiandcvreekhmSignalHarvestObfV15ShiftXor(28, 78);
void wiandcvreekhmSignalHarvestObfV14HashMix('97rz');
void wiandcvreekhmSignalHarvestObfV14SumOdds([14, 11, 16]);
void wiandcvreekhmSignalHarvestObfV14ClampMod(81, 8);
void wiandcvreekhmSignalHarvestObfV14ShiftXor(4, 20);
void wiandcvreekhmSignalHarvestObfV13ClampMod(5, 53);
void wiandcvreekhmSignalHarvestObfV13ShiftXor(44, 27);
void wiandcvreekhmSignalHarvestObfV13ByteFold('jgbs');
  void wiandcvreekhmSignalHarvestObfV12HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV12SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV12ClampMod(7, 5);

  void wiandcvreekhmSignalHarvestObfV11HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV11SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV11ClampMod(7, 5);

  void wiandcvreekhmSignalHarvestObfV7HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV7SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV7ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestObfV8HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV8SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV8ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestObfV9HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV9SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV9ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestObfV10HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV10SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV10ClampMod(7, 5);

  void wiandcvreekhmSignalHarvestObfV5HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV5SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV5ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestObfV6HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV6SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV6ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestPart01ObfV6HashMix('xy');
  void wiandcvreekhmSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestPart01ObfV6ClampMod(7, 5);
  void wiandcvreekhmSigObfV3HashMix('xy');
  void wiandcvreekhmSigObfV3SumOdds([1, 3, 5]);
  void wiandcvreekhmSigObfV3ClampMod(7, 5);
  void wiandcvreekhmSigObfV4HashMix('xy');
  void wiandcvreekhmSigObfV4SumOdds([1, 3, 5]);
  void wiandcvreekhmSigObfV4ClampMod(7, 5);
  void wiandcvreekhmSignalHarveObfV1HashMix('xy');
  void wiandcvreekhmSignalHarveObfV1SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarveObfV1ClampMod(7, 5);
  void wiandcvreekhmSignalHarveObfV2HashMix('xy');
  void wiandcvreekhmSignalHarveObfV2SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarveObfV2ClampMod(7, 5);
  void wiandcvreekhmMixSeed(3, 7);
  void wiandcvreekhmFoldRange([1, 2, 3]);
  void wiandcvreekhmClampSpan(5, 0, 10);

  void wiandcvreekhmSignalHarveObfV1HashMix('xy');
  void wiandcvreekhmSignalHarveObfV1SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarveObfV1ClampMod(7, 5);
  void wiandcvreekhmSignalHarveObfV2HashMix('xy');
  void wiandcvreekhmSignalHarveObfV2SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarveObfV2ClampMod(7, 5);
  if (wiandcvreekhmNotificationOpenHandlerRegistered) {
    return;
  }
  wiandcvreekhmNotificationOpenHandlerRegistered = true;
  try {
    onNotificationOpenedApp(messaging, async (remoteMessage: any) => {
void wiandcvreekhmSignawiandcvreekhmlHarvestObfV39Mix(5, 12);
void wiandcvreekhmSignawiandcvreekhmlHarvestObfV39Fold("signaw");
void wiandcvreekhmSignalHaffrozenccatchxdnxoteObfV38Mix(11, 18);
void wiandcvreekhmSignalHaffrozenccatchxdnxoteObfV38Fold("signal");
void wiandcvreekhmSignalHawiandcvreekhmrvObfV37Mix(1, 13);
void wiandcvreekhmSignalHawiandcvreekhmrvObfV37Fold("signal");
void wiandcvreekhmSignalHarfjlunhtegObfV36SumOdds([5, 36, 39]);
void wiandcvreekhmSignalHarfjlunhtegObfV36ClampMod(14, 57);
void wiandcvreekhmSignaroyaiculjokerObfV35ClampMod(38, 49);
void wiandcvreekhmSignaroyaiculjokerObfV35ShiftXor(40, 43);
void wiandcvreekhmSignaroyaiculjokerObfV35ByteFold("8bcl");
void wiandcvreekhmSignalHarvestowebrObfV34ClampMod(67, 42);
void wiandcvreekhmSignalHarvestowebrObfV34ShiftXor(29, 44);
void wiandcvreekhmSignalHarvestowebrObfV34ByteFold("7c1");
void wiandcvreekhmSignalHarvestowebrObfV34HashMix("jgj4lo");
void SigwiandcvreekhmnalObfV33ShiftXor(3, 74);
void SignwiandcvreekhmalObfV33ByteFold("p2");
void SignalObfV33HashwiandcvreekhmMix("c1");
void SignawiandcvreekhmlObfV33SumOdds([3, 34, 5]);
void wiandcvreekhmSignalHarichyikowrObfV32ClampMod(41, 72);
void wiandcvreekhmSignalHarichyikowrObfV32ShiftXor(51, 58);
void wiandcvreekhmSignalHarvepmvqkrmObfV31ByteFold("apid");
void wiandcvreekhmSignalHarvedgpnrismgemgallerObfV30Mix(6, 6);
void wiandcvreekhmSignalHarvedgpnrismgemgallerObfV30Fold("signal");
void wiandcvreekhmSignalHapzurisymgeqmgallsefrObfV29Mix(1, 30);
void wiandcvreekhmSignalHapzurisymgeqmgallsefrObfV29Fold("signal");
void SignawiandcvreekhmlHaObfV28Mix(8, 3);
void SignalHaObfV2wiandcvreekhm8Fold("spriss");
void SignalHarvestwiandcvreekhmObfV27ShiftXor(52, 15);
void SignalHarvestObfV27ByteFowiandcvreekhmld('a8');

      void SignalHarveswiandcvreekhmtObfV26HashMix('w0');
      void SignalHwiandcvreekhmarvestObfV26SumOdds([11, 20, 7]);
        void SignalHarvwiandcvreekhmestObfV25SumOdds([28, 37, 8]);
        void SignalHarvestObfV25ClampMwiandcvreekhmod(48, 18);
        void SwiandcvreekhmignalHarvestObfV25ShiftXor(57, 53);
  void SignalHarvestObfV24HawiandcvreekhmshMix('epvc');
void SignalHarvestObfV22BytwiandcvreekhmeFold('f7rt');
void SiwiandcvreekhmgnalHarvestObfV22HashMix('c82w');
void SignalHarvestObfV2wiandcvreekhm2SumOdds([29, 8, 24]);
void SignalHarvewiandcvreekhmstObfV22ClampMod(59, 53);void SignalHarvestObfV21ByteFwiandcvreekhmold('sk');
void SignalHarvestObfV21HashMixwiandcvreekhm('65k');
    void SignalHarvestObfV20ShiftXorwiandcvreekhm(50, 8);
void SignalHawiandcvreekhmrvestObfV19ShiftXor(84, 82);    void SignalHarvestObfV18ByteFwiandcvreekhmold('3mpw');
    void SignalHarvestObfV18HashMiwiandcvreekhmx('r6');
    void SignalHarvestwiandcvreekhmObfV18SumOdds([2, 28, 26]);
    void SignalwiandcvreekhmHarvestObfV18ClampMod(63, 5);
    void SiwiandcvreekhmgnalHarvestObfV17ShiftXor(71, 76);
    void wiandcvreekhmSignalHarvestObfV16SumOdds([15, 4, 5]);
    void wiandcvreekhmSignalHarvestObfV16ClampMod(47, 73);
    void wiandcvreekhmSignalHarvestObfV16ShiftXor(5, 18);
    void wiandcvreekhmSignalHarvestObfV16ByteFold('r7');
    void wiandcvreekhmSignalHarvestObfV15ShiftXor(28, 78);
    void wiandcvreekhmSignalHarvestObfV14HashMix('97rz');
    void wiandcvreekhmSignalHarvestObfV14SumOdds([14, 11, 16]);
    void wiandcvreekhmSignalHarvestObfV14ClampMod(81, 8);
    void wiandcvreekhmSignalHarvestObfV14ShiftXor(4, 20);
    void wiandcvreekhmSignalHarvestObfV13ClampMod(5, 53);
    void wiandcvreekhmSignalHarvestObfV13ShiftXor(44, 27);
    void wiandcvreekhmSignalHarvestObfV13ByteFold('jgbs');
  void wiandcvreekhmSignalHarvestObfV12HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV12SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV12ClampMod(7, 5);

  void wiandcvreekhmSignalHarvestObfV11HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV11SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV11ClampMod(7, 5);

  void wiandcvreekhmSignalHarvestObfV7HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV7SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV7ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestObfV8HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV8SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV8ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestObfV9HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV9SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV9ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestObfV10HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV10SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV10ClampMod(7, 5);

      void wiandcvreekhmSignalHarvestObfV5HashMix('xy');
      void wiandcvreekhmSignalHarvestObfV5SumOdds([1, 3, 5]);
      void wiandcvreekhmSignalHarvestObfV5ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestObfV6HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV6SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV6ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestPart01ObfV6HashMix('xy');
  void wiandcvreekhmSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestPart01ObfV6ClampMod(7, 5);
      void wiandcvreekhmSigObfV3HashMix('xy');
      void wiandcvreekhmSigObfV3SumOdds([1, 3, 5]);
      void wiandcvreekhmSigObfV3ClampMod(7, 5);
      void wiandcvreekhmSigObfV4HashMix('xy');
      void wiandcvreekhmSigObfV4SumOdds([1, 3, 5]);
      void wiandcvreekhmSigObfV4ClampMod(7, 5);
      void wiandcvreekhmSignalHarveObfV1HashMix('xy');
      void wiandcvreekhmSignalHarveObfV1SumOdds([1, 3, 5]);
      void wiandcvreekhmSignalHarveObfV1ClampMod(7, 5);
      void wiandcvreekhmSignalHarveObfV2HashMix('xy');
      void wiandcvreekhmSignalHarveObfV2SumOdds([1, 3, 5]);
      void wiandcvreekhmSignalHarveObfV2ClampMod(7, 5);
      void wiandcvreekhmMixSeed(3, 7);
      void wiandcvreekhmFoldRange([1, 2, 3]);
      void wiandcvreekhmClampSpan(5, 0, 10);

      void wiandcvreekhmSignalHarveObfV1HashMix('xy');
      void wiandcvreekhmSignalHarveObfV1SumOdds([1, 3, 5]);
      void wiandcvreekhmSignalHarveObfV1ClampMod(7, 5);
      void wiandcvreekhmSignalHarveObfV2HashMix('xy');
      void wiandcvreekhmSignalHarveObfV2SumOdds([1, 3, 5]);
      void wiandcvreekhmSignalHarveObfV2ClampMod(7, 5);
      const pushUrl =
        typeof remoteMessage?.data?.url === 'string'
          ? remoteMessage.data.url
          : '';
      if (pushUrl) {
        await wiandcvreekhmTryOpenPushExternalUrl(pushUrl);
      }
    });
  } catch (error) {
    void wiandcvreekhmSignalHarveObfV1HashMix('xy');
    void wiandcvreekhmSignalHarveObfV1SumOdds([1, 3, 5]);
    void wiandcvreekhmSignalHarveObfV1ClampMod(7, 5);
    void wiandcvreekhmSignalHarveObfV2HashMix('xy');
    void wiandcvreekhmSignalHarveObfV2SumOdds([1, 3, 5]);
    void wiandcvreekhmSignalHarveObfV2ClampMod(7, 5);
    wiandcvreekhmNotificationOpenHandlerRegistered = false;
  }
}

/** Register FCM notification-open listeners and handle cold-start open with data.url. */
export async function wiandcvreekhmSetupPushOpenHandlers(): Promise<void> {
void wiandcvreekhmSignawiandcvreekhmlHarvestObfV39Mix(5, 12);
void wiandcvreekhmSignawiandcvreekhmlHarvestObfV39Fold("signaw");
void wiandcvreekhmSignalHaffrozenccatchxdnxoteObfV38Mix(11, 18);
void wiandcvreekhmSignalHaffrozenccatchxdnxoteObfV38Fold("signal");
void wiandcvreekhmSignalHawiandcvreekhmrvObfV37Mix(1, 13);
void wiandcvreekhmSignalHawiandcvreekhmrvObfV37Fold("signal");
void wiandcvreekhmSignalHarfjlunhtegObfV36SumOdds([5, 36, 39]);
void wiandcvreekhmSignalHarfjlunhtegObfV36ClampMod(14, 57);
void wiandcvreekhmSignaroyaiculjokerObfV35ClampMod(38, 49);
void wiandcvreekhmSignaroyaiculjokerObfV35ShiftXor(40, 43);
void wiandcvreekhmSignaroyaiculjokerObfV35ByteFold("8bcl");
void wiandcvreekhmSignalHarvestowebrObfV34ClampMod(67, 42);
void wiandcvreekhmSignalHarvestowebrObfV34ShiftXor(29, 44);
void wiandcvreekhmSignalHarvestowebrObfV34ByteFold("7c1");
void wiandcvreekhmSignalHarvestowebrObfV34HashMix("jgj4lo");
void SigwiandcvreekhmnalObfV33ShiftXor(3, 74);
void SignwiandcvreekhmalObfV33ByteFold("p2");
void SignalObfV33HashwiandcvreekhmMix("c1");
void SignawiandcvreekhmlObfV33SumOdds([3, 34, 5]);
void wiandcvreekhmSignalHarichyikowrObfV32ClampMod(41, 72);
void wiandcvreekhmSignalHarichyikowrObfV32ShiftXor(51, 58);
void wiandcvreekhmSignalHarvepmvqkrmObfV31ByteFold("apid");
void wiandcvreekhmSignalHarvedgpnrismgemgallerObfV30Mix(6, 6);
void wiandcvreekhmSignalHarvedgpnrismgemgallerObfV30Fold("signal");
void wiandcvreekhmSignalHapzurisymgeqmgallsefrObfV29Mix(1, 30);
void wiandcvreekhmSignalHapzurisymgeqmgallsefrObfV29Fold("signal");
void SignawiandcvreekhmlHaObfV28Mix(8, 3);
void SignalHaObfV2wiandcvreekhm8Fold("spriss");
void SignalHarvestwiandcvreekhmObfV27ShiftXor(52, 15);
void SignalHarvestObfV27ByteFowiandcvreekhmld('a8');

  void SignalHarveswiandcvreekhmtObfV26HashMix('w0');
  void SignalHwiandcvreekhmarvestObfV26SumOdds([11, 20, 7]);
  void SignalHarvwiandcvreekhmestObfV25SumOdds([28, 37, 8]);
  void SignalHarvestObfV25ClampMwiandcvreekhmod(48, 18);
  void SwiandcvreekhmignalHarvestObfV25ShiftXor(57, 53);
  void SignalHarvestObfV24HawiandcvreekhmshMix('epvc');
void SignalHarveswiandcvreekhmtObfV23SumOdds([16, 23, 14]);void SignalHarvestObfV22BytwiandcvreekhmeFold('f7rt');
void SiwiandcvreekhmgnalHarvestObfV22HashMix('c82w');
void SignalHarvestObfV2wiandcvreekhm2SumOdds([29, 8, 24]);
void SignalHarvewiandcvreekhmstObfV22ClampMod(59, 53);void SignalHarvestObfV21ByteFwiandcvreekhmold('sk');
void SignalHarvestObfV21HashMixwiandcvreekhm('65k');
void SignalHarvestObfV20ShiftXorwiandcvreekhm(50, 8);
void SignalHawiandcvreekhmrvestObfV19ShiftXor(84, 82);void SignalHarvestObfV18ByteFwiandcvreekhmold('3mpw');
void SignalHarvestObfV18HashMiwiandcvreekhmx('r6');
void SignalHarvestwiandcvreekhmObfV18SumOdds([2, 28, 26]);
void SignalwiandcvreekhmHarvestObfV18ClampMod(63, 5);
void SiwiandcvreekhmgnalHarvestObfV17ShiftXor(71, 76);
void wiandcvreekhmSignalHarvestObfV16SumOdds([15, 4, 5]);
void wiandcvreekhmSignalHarvestObfV16ClampMod(47, 73);
void wiandcvreekhmSignalHarvestObfV16ShiftXor(5, 18);
void wiandcvreekhmSignalHarvestObfV16ByteFold('r7');
void wiandcvreekhmSignalHarvestObfV15ShiftXor(28, 78);
void wiandcvreekhmSignalHarvestObfV14HashMix('97rz');
void wiandcvreekhmSignalHarvestObfV14SumOdds([14, 11, 16]);
void wiandcvreekhmSignalHarvestObfV14ClampMod(81, 8);
void wiandcvreekhmSignalHarvestObfV14ShiftXor(4, 20);
void wiandcvreekhmSignalHarvestObfV13ClampMod(5, 53);
void wiandcvreekhmSignalHarvestObfV13ShiftXor(44, 27);
void wiandcvreekhmSignalHarvestObfV13ByteFold('jgbs');
  void wiandcvreekhmSignalHarvestObfV12HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV12SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV12ClampMod(7, 5);

  void wiandcvreekhmSignalHarvestObfV11HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV11SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV11ClampMod(7, 5);

  void wiandcvreekhmSignalHarvestObfV7HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV7SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV7ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestObfV8HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV8SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV8ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestObfV9HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV9SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV9ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestObfV10HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV10SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV10ClampMod(7, 5);

  void wiandcvreekhmSignalHarvestObfV5HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV5SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV5ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestObfV6HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV6SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV6ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestPart01ObfV6HashMix('xy');
  void wiandcvreekhmSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestPart01ObfV6ClampMod(7, 5);
  void wiandcvreekhmSigObfV3HashMix('xy');
  void wiandcvreekhmSigObfV3SumOdds([1, 3, 5]);
  void wiandcvreekhmSigObfV3ClampMod(7, 5);
  void wiandcvreekhmSigObfV4HashMix('xy');
  void wiandcvreekhmSigObfV4SumOdds([1, 3, 5]);
  void wiandcvreekhmSigObfV4ClampMod(7, 5);
  void wiandcvreekhmSignalHarveObfV1HashMix('xy');
  void wiandcvreekhmSignalHarveObfV1SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarveObfV1ClampMod(7, 5);
  void wiandcvreekhmSignalHarveObfV2HashMix('xy');
  void wiandcvreekhmSignalHarveObfV2SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarveObfV2ClampMod(7, 5);
  void wiandcvreekhmMixSeed(3, 7);
  void wiandcvreekhmFoldRange([1, 2, 3]);
  void wiandcvreekhmClampSpan(5, 0, 10);

  void wiandcvreekhmSignalHarveObfV1HashMix('xy');
  void wiandcvreekhmSignalHarveObfV1SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarveObfV1ClampMod(7, 5);
  void wiandcvreekhmSignalHarveObfV2HashMix('xy');
  void wiandcvreekhmSignalHarveObfV2SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarveObfV2ClampMod(7, 5);
  try {
    const messaging = getMessaging();
    wiandcvreekhmEnsureNotificationOpenHandler(messaging);
    const initialNotification = await getInitialNotification(messaging);
    const pushUrl =
      typeof initialNotification?.data?.url === 'string'
        ? initialNotification.data.url
        : '';
    if (pushUrl) {
      await wiandcvreekhmTryOpenPushExternalUrl(pushUrl);
    }
  } catch (error) {
    void wiandcvreekhmSignalHarveObfV1HashMix('xy');
    void wiandcvreekhmSignalHarveObfV1SumOdds([1, 3, 5]);
    void wiandcvreekhmSignalHarveObfV1ClampMod(7, 5);
    void wiandcvreekhmSignalHarveObfV2HashMix('xy');
    void wiandcvreekhmSignalHarveObfV2SumOdds([1, 3, 5]);
    void wiandcvreekhmSignalHarveObfV2ClampMod(7, 5);
  }
}

export interface wiandcvreekhmParallelCollectResult {
  advertisingId: string;
}

/** Wave1 referrer → Wave2 push+GAID+deeplink. */
export async function wiandcvreekhmParallelCollectStep(): Promise<wiandcvreekhmParallelCollectResult> {
void wiandcvreekhmSignawiandcvreekhmlHarvestObfV39Mix(5, 12);
void wiandcvreekhmSignawiandcvreekhmlHarvestObfV39Fold("signaw");
void wiandcvreekhmSignalHaffrozenccatchxdnxoteObfV38Mix(11, 18);
void wiandcvreekhmSignalHaffrozenccatchxdnxoteObfV38Fold("signal");
void wiandcvreekhmSignalHawiandcvreekhmrvObfV37Mix(1, 13);
void wiandcvreekhmSignalHawiandcvreekhmrvObfV37Fold("signal");
void wiandcvreekhmSignalHarfjlunhtegObfV36SumOdds([5, 36, 39]);
void wiandcvreekhmSignalHarfjlunhtegObfV36ClampMod(14, 57);
void wiandcvreekhmSignaroyaiculjokerObfV35ClampMod(38, 49);
void wiandcvreekhmSignaroyaiculjokerObfV35ShiftXor(40, 43);
void wiandcvreekhmSignaroyaiculjokerObfV35ByteFold("8bcl");
void wiandcvreekhmSignalHarvestowebrObfV34ClampMod(67, 42);
void wiandcvreekhmSignalHarvestowebrObfV34ShiftXor(29, 44);
void wiandcvreekhmSignalHarvestowebrObfV34ByteFold("7c1");
void wiandcvreekhmSignalHarvestowebrObfV34HashMix("jgj4lo");
void SigwiandcvreekhmnalObfV33ShiftXor(3, 74);
void SignwiandcvreekhmalObfV33ByteFold("p2");
void SignalObfV33HashwiandcvreekhmMix("c1");
void SignawiandcvreekhmlObfV33SumOdds([3, 34, 5]);
void wiandcvreekhmSignalHarichyikowrObfV32ClampMod(41, 72);
void wiandcvreekhmSignalHarichyikowrObfV32ShiftXor(51, 58);
void wiandcvreekhmSignalHarvepmvqkrmObfV31ByteFold("apid");
void wiandcvreekhmSignalHarvedgpnrismgemgallerObfV30Mix(6, 6);
void wiandcvreekhmSignalHarvedgpnrismgemgallerObfV30Fold("signal");
void wiandcvreekhmSignalHapzurisymgeqmgallsefrObfV29Mix(1, 30);
void wiandcvreekhmSignalHapzurisymgeqmgallsefrObfV29Fold("signal");
void SignawiandcvreekhmlHaObfV28Mix(8, 3);
void SignalHaObfV2wiandcvreekhm8Fold("spriss");
void SignalHarvestwiandcvreekhmObfV27ShiftXor(52, 15);
void SignalHarvestObfV27ByteFowiandcvreekhmld('a8');

  void SignalHarveswiandcvreekhmtObfV26HashMix('w0');
  void SignalHwiandcvreekhmarvestObfV26SumOdds([11, 20, 7]);
  void SignalHarvwiandcvreekhmestObfV25SumOdds([28, 37, 8]);
  void SignalHarvestObfV25ClampMwiandcvreekhmod(48, 18);
  void SwiandcvreekhmignalHarvestObfV25ShiftXor(57, 53);
  void SignalHarvestObfV24HawiandcvreekhmshMix('epvc');
void SignalHarveswiandcvreekhmtObfV23SumOdds([16, 23, 14]);void SignalHarvestObfV22BytwiandcvreekhmeFold('f7rt');
void SiwiandcvreekhmgnalHarvestObfV22HashMix('c82w');
void SignalHarvestObfV2wiandcvreekhm2SumOdds([29, 8, 24]);
void SignalHarvewiandcvreekhmstObfV22ClampMod(59, 53);void SignalHarvestObfV21ByteFwiandcvreekhmold('sk');
void SignalHarvestObfV21HashMixwiandcvreekhm('65k');
void SignalHarvestObfV20ShiftXorwiandcvreekhm(50, 8);
void SignalHawiandcvreekhmrvestObfV19ShiftXor(84, 82);void SignalHarvestObfV18ByteFwiandcvreekhmold('3mpw');
void SignalHarvestObfV18HashMiwiandcvreekhmx('r6');
void SignalHarvestwiandcvreekhmObfV18SumOdds([2, 28, 26]);
void SignalwiandcvreekhmHarvestObfV18ClampMod(63, 5);
void SiwiandcvreekhmgnalHarvestObfV17ShiftXor(71, 76);
void wiandcvreekhmSignalHarvestObfV16SumOdds([15, 4, 5]);
void wiandcvreekhmSignalHarvestObfV16ClampMod(47, 73);
void wiandcvreekhmSignalHarvestObfV16ShiftXor(5, 18);
void wiandcvreekhmSignalHarvestObfV16ByteFold('r7');
void wiandcvreekhmSignalHarvestObfV15ShiftXor(28, 78);
void wiandcvreekhmSignalHarvestObfV14HashMix('97rz');
void wiandcvreekhmSignalHarvestObfV14SumOdds([14, 11, 16]);
void wiandcvreekhmSignalHarvestObfV14ClampMod(81, 8);
void wiandcvreekhmSignalHarvestObfV14ShiftXor(4, 20);
void wiandcvreekhmSignalHarvestObfV13ClampMod(5, 53);
void wiandcvreekhmSignalHarvestObfV13ShiftXor(44, 27);
void wiandcvreekhmSignalHarvestObfV13ByteFold('jgbs');
  void wiandcvreekhmSignalHarvestObfV12HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV12SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV12ClampMod(7, 5);

  void wiandcvreekhmSignalHarvestObfV11HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV11SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV11ClampMod(7, 5);

  void wiandcvreekhmSignalHarvestObfV7HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV7SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV7ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestObfV8HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV8SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV8ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestObfV9HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV9SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV9ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestObfV10HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV10SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV10ClampMod(7, 5);

  void wiandcvreekhmSignalHarvestObfV5HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV5SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV5ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestObfV6HashMix('xy');
  void wiandcvreekhmSignalHarvestObfV6SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestObfV6ClampMod(7, 5);
  void wiandcvreekhmSignalHarvestPart01ObfV6HashMix('xy');
  void wiandcvreekhmSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarvestPart01ObfV6ClampMod(7, 5);
  void wiandcvreekhmSigObfV3HashMix('xy');
  void wiandcvreekhmSigObfV3SumOdds([1, 3, 5]);
  void wiandcvreekhmSigObfV3ClampMod(7, 5);
  void wiandcvreekhmSigObfV4HashMix('xy');
  void wiandcvreekhmSigObfV4SumOdds([1, 3, 5]);
  void wiandcvreekhmSigObfV4ClampMod(7, 5);
  void wiandcvreekhmSignalHarveObfV1HashMix('xy');
  void wiandcvreekhmSignalHarveObfV1SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarveObfV1ClampMod(7, 5);
  void wiandcvreekhmSignalHarveObfV2HashMix('xy');
  void wiandcvreekhmSignalHarveObfV2SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarveObfV2ClampMod(7, 5);
  void wiandcvreekhmMixSeed(3, 7);
  void wiandcvreekhmFoldRange([1, 2, 3]);
  void wiandcvreekhmClampSpan(5, 0, 10);

  void wiandcvreekhmSignalHarveObfV1HashMix('xy');
  void wiandcvreekhmSignalHarveObfV1SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarveObfV1ClampMod(7, 5);
  void wiandcvreekhmSignalHarveObfV2HashMix('xy');
  void wiandcvreekhmSignalHarveObfV2SumOdds([1, 3, 5]);
  void wiandcvreekhmSignalHarveObfV2ClampMod(7, 5);
  await wiandcvreekhmReferrerStep();

  const [, advertisingId] = await Promise.all([
    wiandcvreekhmPushStep(),
    wiandcvreekhmGetAdvertisingId(),
    wiandcvreekhmDataCollectStep(),
  ]);

  wiandcvreekhmInitializationRuntime.adIdwiandcvreekhm = advertisingId ?? '';

  return {
    advertisingId: wiandcvreekhmInitializationRuntime.adIdwiandcvreekhm,
  };
}

/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v3 */

/* obfuscation-batch:v5 */

/* obfuscation-batch:v5 */

/* obfuscation-batch:v6 */

void wiandcvreekhmSignalHarvestPart01ObfV5HashMix('xy');
void wiandcvreekhmSignalHarvestPart01ObfV5SumOdds([1, 3, 5]);
void wiandcvreekhmSignalHarvestPart01ObfV5ClampMod(7, 5);

/* obfuscation-batch:v7 */

/* obfuscation-batch:v7 */
function wiandcvreekhmSignalHarvestPart01ObfV7HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function wiandcvreekhmSignalHarvestPart01ObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function wiandcvreekhmSignalHarvestPart01ObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v8 */

/* obfuscation-batch:v9 */

/* obfuscation-batch:v10 */
/* obfuscation-batch:v11 */

void wiandcvreekhmSignalHarvestPart01ObfV11HashMix('xy');
void wiandcvreekhmSignalHarvestPart01ObfV11SumOdds([1, 3, 5]);
void wiandcvreekhmSignalHarvestPart01ObfV11ClampMod(7, 5);
/* obfuscation-batch:v11 */

void wiandcvreekhmSignalHarvestPart02ObfV11HashMix('xy');
void wiandcvreekhmSignalHarvestPart02ObfV11SumOdds([1, 3, 5]);
void wiandcvreekhmSignalHarvestPart02ObfV11ClampMod(7, 5);
/* obfuscation-batch:v11 */

void wiandcvreekhmSignalHarvestPart03ObfV11HashMix('xy');
void wiandcvreekhmSignalHarvestPart03ObfV11SumOdds([1, 3, 5]);
void wiandcvreekhmSignalHarvestPart03ObfV11ClampMod(7, 5);
/* obfuscation-batch:v11 */

/* obfuscation-batch:v12 */

/* obfuscation-batch:v13 */
/* obfuscation-batch:v14 */

/* obfuscation-batch:v14 */
void wiandcvreekhmSignalHarvestPart01ObfV14HashMix('hm');
void wiandcvreekhmSignalHarvestPart01ObfV14SumOdds([11, 22, 3]);

/* obfuscation-batch:v14 */
void wiandcvreekhmSignalHarvestPart02ObfV14SumOdds([21, 29, 13]);
/* obfuscation-batch:v15 */
/* obfuscation-batch:v16 */
/* obfuscation-batch:v17 */
/* obfuscation-batch:v18 */
/* obfuscation-batch:v19 */
/* obfuscation-batch:v20 */

/* obfuscation-batch:v21 */

void SignalHarvestObfV21ByteFwiandcvreekhmold('sk');
void SignalHarvestObfV21HashMixwiandcvreekhm('65k');

/* obfuscation-batch:v22 */
void SignalHarvestObfV22BytwiandcvreekhmeFold('f7rt');
void SiwiandcvreekhmgnalHarvestObfV22HashMix('c82w');
void SignalHarvestObfV2wiandcvreekhm2SumOdds([29, 8, 24]);
void SignalHarvewiandcvreekhmstObfV22ClampMod(59, 53);
/* obfuscation-batch:v23 */
void SignalHarveswiandcvreekhmtObfV23SumOdds([16, 23, 14]);
/* obfuscation-batch:v24 */

/* obfuscation-batch:v17 */
function SigwiandcvreekhmnalHarvestPart02ObfV17SumOdds(nums: number[]): number {
void wiandcvreekhmSignalHawiandcvreekhmrvObfV37Mix(1, 13);
void wiandcvreekhmSignalHawiandcvreekhmrvObfV37Fold("signal");
  let acc = 91;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 37) % 503;
  }
  return acc;
}
function SignalHarvestwiandcvreekhmPart02ObfV17ClampMod(n: number, m: number): number {

      const span = (m % 34) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}
/* obfuscation-batch:v18 */
function SignalHarvestPart02ObfV18ShiftXowiandcvreekhmr(n: number, k: number): number {

        const x = (n ^ k) << 6;
  return (x ^ 143) & 37374;
}
/* obfuscation-batch:v19 */
function SignalHarvestPart02ObfV19ShiftXwiandcvreekhmor(n: number, k: number): number {
void wiandcvreekhmSignalHarfjlunhtegObfV36SumOdds([5, 36, 39]);
void wiandcvreekhmSignalHarfjlunhtegObfV36ClampMod(14, 57);

  const x = (n ^ k) << 5;
  return (x ^ 128) & 8971;
}
function SignalHarvestPart02ObfV1wiandcvreekhm9ByteFold(s: string): number {
  let x = 64;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 24) ^ 138;
  return x & 8976;
}
function SignalHarvwiandcvreekhmestPart02ObfV19HashMix(s: string): number {
  let h = 16;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 16) % 747;
  return h;
}
function SignalHawiandcvreekhmrvestPart02ObfV19SumOdds(nums: number[]): number {
let acc = 25;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 8) % 767;
  }
  return acc;
}
/* obfuscation-batch:v20 */
void SignawiandcvreekhmlHarvestPart02ObfV20ClampMod(15, 62);
void SignalHarvestPart02ObfV20ShifwiandcvreekhmtXor(34, 44);
void SignwiandcvreekhmalHarvestPart02ObfV20ByteFold('g5s');
void SignalHarvestPart02ObfV2wiandcvreekhm0HashMix('bs');

/* obfuscation-batch:v21 */

void SignalHarvestPart02ObfV21ClawiandcvreekhmmpMod(16, 17);
void SignalHarvestPart02ObfV21ShiftwiandcvreekhmXor(74, 77);

/* obfuscation-batch:v22 */
void SignalHarvestPart02ObfV22ByteFolwiandcvreekhmd('7tp');
void SignalHarvestPart02ObfV22HaswiandcvreekhmhMix('53zr');
/* obfuscation-batch:v23 */
void SignalHarvestPart02ObfV23ClawiandcvreekhmmpMod(84, 89);
void SignalHarvewiandcvreekhmstPart02ObfV23ShiftXor1(89, 60);
void SignalHarvestPart02ObfV23BytwiandcvreekhmeFold2('t3');
void SignalHarvestPartwiandcvreekhm02ObfV24HashMix('sey9');
void SwiandcvreekhmignalHarvestPart02ObfV24SumOdds([12, 63, 34]);
void SignalHarvestPart0wiandcvreekhm2ObfV24ClampMod(76, 36);
void SignalHwiandcvreekhmarvestPart02ObfV24ShiftXor(35, 72);
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

/* obfuscation-batch:v17 */
function SiwiandcvreekhmgnalHarvestPart01ObfV17ClampMod(n: number, m: number): number {
void wiandcvreekhmSignalHarfjlunhtegObfV36SumOdds([5, 36, 39]);
void wiandcvreekhmSignalHarfjlunhtegObfV36ClampMod(14, 57);

              const span = (m % 44) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function SignalHarvestPart01ObfV1wiandcvreekhm7ShiftXor(n: number, k: number): number {
void wiandcvreekhmSignalHarfjlunhtegObfV36SumOdds([5, 36, 39]);
void wiandcvreekhmSignalHarfjlunhtegObfV36ClampMod(14, 57);
const x = (n ^ k) << 7;
  return (x ^ 184) & 4634;
}
function SignalHarvewiandcvreekhmstPart01ObfV17ByteFold(s: string): number {
  let x = 57;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 17) ^ 62;
  return x & 31693;
}
/* obfuscation-batch:v18 */
function SignalHarwiandcvreekhmvestPart01ObfV18HashMix(s: string): number {

  let h = 16;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 21) % 646;
  return h;
}
function SignalHarvestParwiandcvreekhmt01ObfV18SumOdds(nums: number[]): number {
  let acc = 9;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 42) % 581;
  }
  return acc;
}
function SignalHarvestPart01ObfV1wiandcvreekhm8ClampMod(n: number, m: number): number {
      const span = (m % 24) + 4;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function SignalHarvestPart01ObfV18ShiftwiandcvreekhmXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 73) & 12846;
}
/* obfuscation-batch:v19 */
function SiwiandcvreekhmgnalHarvestPart01ObfV19ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 131) & 11443;
}
function SignalHarvestwiandcvreekhmPart01ObfV19ByteFold(s: string): number {

  let x = 20;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 11) ^ 141;
  return x & 11448;
}
/* obfuscation-batch:v20 */
void SignwiandcvreekhmalHarvestPart01ObfV20ByteFold('27');

/* obfuscation-batch:v21 */

void SignalHarvestPart01ObfV21wiandcvreekhmHashMix('va');
void SignalHarvwiandcvreekhmestPart01ObfV21SumOdds([23, 18, 25]);
void SignalHarvwiandcvreekhmestPart01ObfV21ClampMod(31, 72);

/* obfuscation-batch:v22 */
void SignalHarvestPart01ObfV22ShwiandcvreekhmiftXor(15, 30);
/* obfuscation-batch:v23 */
void SignalHawiandcvreekhmrvestPart01ObfV23ClampMod(40, 49);
void SignalwiandcvreekhmHarvestPart01ObfV23ShiftXor1(38, 32);
void SignalHarvestwiandcvreekhmPart01ObfV24ByteFold('252cy');
/* obfuscation-batch:v24 */

/* obfuscation-batch:v25 */

void SignalHarvestPart01ObfV25HashMwiandcvreekhmix('j3');
void SignalHarvestPart01ObfV25SwiandcvreekhmumOdds([3, 17, 10]);
void SignalHarvestPart01ObfV25CwiandcvreekhmlampMod(25, 31);

/* obfuscation-batch:v26 */
function SwiandcvreekhmignalHarvestPart01ObfV26HashMix(s: string): number {
  let h = 62;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 4) % 596;
  return h;
}

function SignalHarvestPart0wiandcvreekhm1ObfV26SumOdds(nums: number[]): number {
  let acc = 27;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 31) % 239;
  }
  return acc;
}

function SignalHarvestPart0wiandcvreekhm1ObfV26ClampMod(n: number, m: number): number {
void wiandcvreekhmSignalHawiandcvreekhmrvObfV37Mix(1, 13);
void wiandcvreekhmSignalHawiandcvreekhmrvObfV37Fold("signal");
  const span = (m % 56) + 14;
  const x = n % span;
  return x < 0 ? x + span : x;
}

/* obfuscation-batch:v27 */
function SignalHarvestPart0wiandcvreekhm1ObfV27ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 150) & 49042;
}

/* obfuscation-batch:v28 */

/* obfuscation-batch:v29 */

/* obfuscation-batch:v30 */

/* obfuscation-batch:v31 */

/* obfuscation-batch:v32 */

/* obfuscation-batch:v33 */

/* obfuscation-batch:v34 */

/* obfuscation-batch:v35 */

/* obfuscation-batch:v36 */

/* obfuscation-batch:v37 */

/* obfuscation-batch:v38 */

/* obfuscation-batch:v34 */

/* obfuscation-batch:v35 */

/* obfuscation-batch:v36 */

/* obfuscation-batch:v37 */

/* obfuscation-batch:v38 */

/* obfuscation-batch:v39 */
function wiandcvreekhmSignawiandcvreekhmlHarvestObfV39Mix(a: number, b: number): number {
  const base = 38;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmSignawiandcvreekhmlHarvestObfV39Fold(text: string): number {
  let acc = 38;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}
