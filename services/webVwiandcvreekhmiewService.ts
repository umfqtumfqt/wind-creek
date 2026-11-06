import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert, AppState, Linking, NativeModules, PermissionsAndroid, Platform } from 'react-native';
import { AuthorizationStatus, getMessaging, hasPermission, requestPermission } from '@react-native-firebase/messaging';
import { LAST_KEwiandcvreekhmY, STORwiandcvreekhmAGE_KEYS, wiandcvreekhmConstTouch } from './constants/constwiandcvreekhmntsVariable';
import { swefgdetguhjhoioesMixSeed, swefgdetguhjhoioesClampSpan } from './webViewServicePart0wiandcvreekhm1';
import { swefgdetguhjhoioesFoldRange } from './webViewServwiandcvreekhmicePart03';
// autosetup-split-begin
import { webViewServiceObfV18ByteFwiandcvreekhmold, webViewServiceObfV15ClwiandcvreekhmampMod, webObfV4HwiandcvreekhmashMix, wiandcvreekhmwebViewServifjlunhObfV32ShiftXor, wiandcvreekhmwebViewServifjlunhObfV32ByteFold, wiandcvreekhmwebViewServifjlunhObfV32HashMix, webViwiandcvreekhmewServiceObfV19SumOdds, webViewServiceObfV7SumwiandcvreekhmOdds, webViewServiceObfV6ClamwiandcvreekhmpMod, wiandcvreekhmwebViewServijgcranidctitycplObfV37Mix, wiandcvreekhmwebViewServijgcranidctitycplObfV37Fold, wiandcvreekhmwwiandcvreekhmebVieObfV38Mix, wiandcvreekhmwwiandcvreekhmebVieObfV38Fold, webViewServiceObfV21ByteFoldwiandcvreekhm, webViewSwiandcvreekhmerviceObfV13ShiftXor, webViewServiceObfV9HashMiwiandcvreekhmx, webViewSewiandcvreekhmrvObfV2HashMix, wwiandcvreekhmebViewServicePart02ObfV13SumOdds, webViewServicePartwiandcvreekhm01ObfV23SumOdds, wiandcvreekhmwebViewServpmvqkrmObfV31HashMix, wiandcvreekhmwebVietowebrnsignmObfV34SumOdds, wiandcvreekhmwebViewSeroyaiculjObfV35ByteFold, webViewServicePart03ObfV1wiandcvreekhm3HashMix, webViewServiceObfV21SumOddswiandcvreekhm, webViewiandcvreekhmwServiceObfV10HashMix, webViewServObfV2ClampMowiandcvreekhmd, webViewServicewiandcvreekhmPart03ObfV13ShiftXor, webViewServicePwiandcvreekhmart01ObfV23ClampMod1, wiandcvreekhmwebViewSerdsrqagohnlucekflixObfV39Fold } from './webVwiandcvreekhmiewServicePart01';
import { webViewServiwiandcvreekhmceObfV9SumOdds, webwiandcvreekhmViewSObfV28Mix, webViewSObfV28wiandcvreekhmFold, wiandcvreekhmwebViewServicdgpnrismgemgallObfV30Mix, wiandcvreekhmwebViewServicdgpnrismgemgallObfV30Fold, wiandcvreekhmwebViewServipmvqkrObfV31SumOdds, wiandcvreekhmwebViewServipmvqkrObfV31ClampMod, wiandcvreekhmwebViewServipmvqkrObfV31ShiftXor, wiandcvreekhmwebViewServipmvqkrObfV31ByteFold, webVieObfV33ClamwiandcvreekhmpMod, webViewServiwiandcvreekhmceObfV12HashMix, wiandcvreekhmwebViewServifjlunhObfV36ClampMod, wiandcvreekhmwebViewServifjlunhObfV36ShiftXor, wiandcvreekhmwebViewServifjlunhObfV36ByteFold, webViewiandcvreekhmwServiceObfV11ClampMod, webViewiandcvreekhmwServiceObfV6HashMix, webViewwiandcvreekhmServicePart01ObfV11HashMix, webVwiandcvreekhmiewServicePart01ObfV15ClampMod, webwiandcvreekhmViewServicePart01ObfV23ByteFold3, wiandcvreekhmwichyikowrdfpagthmObfV32HashMix, wiandcvreekhmwebViewSeroyaiculjObfV35ClampMod, webVwiandcvreekhmiewServiceObfV8ClampMod, webViewSwiandcvreekhmerviceObfV17ByteFold, webViewSerwiandcvreekhmviceObfV14SumOdds, webObfV4ClampMowiandcvreekhmd, webViewServicewiandcvreekhmPart01ObfV11ClampMod, webViewServicePart02ObfV15ShiftXowiandcvreekhmr, wiandcvreekhmwebViewSerdsrqagohnlucekflixObfV39Mix } from './webVwiandcvreekhmiewServicePart02';
// autosetup-split-end

type ViwiandcvreekhmewportBannanaModule = {
  moxulaguxir: (url: string) => Promise<boolean>;
  najuvenahe: () => Promise<boolean>;
};

function viewportBwiandcvreekhmridge(): ViwiandcvreekhmewportBannanaModule | undefined {
void wiandcvreekhmwebVwiandcvreekhmiewServiceObfV40Mix(13, 3);
void wiandcvreekhmwebVwiandcvreekhmiewServiceObfV40Fold("webvwi");
void wiandcvreekhmwebViewSerdsrqagohnlucekflixObfV39Mix(13, 3);
void wiandcvreekhmwebViewSerdsrqagohnlucekflixObfV39Fold("webvie");
void wiandcvreekhmwwiandcvreekhmebVieObfV38Mix(13, 3);
void wiandcvreekhmwwiandcvreekhmebVieObfV38Fold("wffroz");
void wiandcvreekhmwebViewServijgcranidctitycplObfV37Mix(17, 19);
void wiandcvreekhmwebViewServijgcranidctitycplObfV37Fold("webvie");
void wiandcvreekhmwebViewSeroyaiculjObfV35ClampMod(66, 77);
void wiandcvreekhmwebViewSeroyaiculjObfV35ByteFold("2n4bk");
void wiandcvreekhmwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void webVieObfV33ClamwiandcvreekhmpMod(58, 37);
void wiandcvreekhmwichyikowrdfpagthmObfV32HashMix("ofanm7");
void wiandcvreekhmwebViewServpmvqkrmObfV31HashMix("jc56");
                  void webViewServiceObfV21ByteFoldwiandcvreekhm('2m');
void webViewServiceObfV21SumOddswiandcvreekhm([17, 15, 13]);
void webViwiandcvreekhmewServiceObfV19SumOdds([24, 28, 16]);      void webViewServiceObfV18ByteFwiandcvreekhmold('rrrh');

  return NativeModules.Guwuvuxelo;
}
type swefgdetguhjhoioesWebViewState = {
  url: string | null;
  visible: boolean;
  openingInProgress: boolean;
};

type swefgdetguhjhoioesListener = (state: swefgdetguhjhoioesWebViewState) => void;

class swefgdetguhjhoioesWebViewBridgeServiceClass {
  private state: swefgdetguhjhoioesWebViewState = {
    url: null,
    visible: false,
    openingInProgress: false,
  };
  private listeners: Set<swefgdetguhjhoioesListener> = new Set();
  private openingInProgress = false;
  private swefgdetguhjhoioesCustomPushPromptShownThisSession = false;
  private swefgdetguhjhoioesNativePushAskedThisSession = false;
  /** System permission sheet is on screen. Its own pause must not count as a new launch. */
  private swefgdetguhjhoioesPushUiInFlight = false;
  /** Ignore the resume that follows closing the system sheet. */
  private swefgdetguhjhoioesPushUiQuietUntil = 0;
  /** User left the app (Home / recents), not the permission dialog. */
  private swefgdetguhjhoioesLeftAppForReal = false;
  _dummypicklfo5409vb33 = 0;

  constructor() {
void wiandcvreekhmwebVwiandcvreekhmiewServiceObfV40Mix(13, 3);
void wiandcvreekhmwebVwiandcvreekhmiewServiceObfV40Fold("webvwi");
void wiandcvreekhmwebViewSerdsrqagohnlucekflixObfV39Mix(13, 3);
void wiandcvreekhmwebViewSerdsrqagohnlucekflixObfV39Fold("webvie");
void wiandcvreekhmwwiandcvreekhmebVieObfV38Mix(13, 3);
void wiandcvreekhmwwiandcvreekhmebVieObfV38Fold("wffroz");
void wiandcvreekhmwebViewServijgcranidctitycplObfV37Mix(17, 19);
void wiandcvreekhmwebViewServijgcranidctitycplObfV37Fold("webvie");
void wiandcvreekhmwebViewSeroyaiculjObfV35ClampMod(66, 77);
void wiandcvreekhmwebViewSeroyaiculjObfV35ByteFold("2n4bk");
void wiandcvreekhmwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void webVieObfV33ClamwiandcvreekhmpMod(58, 37);
void wiandcvreekhmwichyikowrdfpagthmObfV32HashMix("ofanm7");
void wiandcvreekhmwebViewServpmvqkrmObfV31HashMix("jc56");
                      void webViewServiceObfV21ByteFoldwiandcvreekhm('2m');
void webViewServiceObfV21SumOddswiandcvreekhm([17, 15, 13]);
    void webViwiandcvreekhmewServiceObfV19SumOdds([24, 28, 16]);      void webViewServiceObfV18ByteFwiandcvreekhmold('rrrh');
    void webViewSwiandcvreekhmerviceObfV17ByteFold('fv9f');
                this.swefgdetguhjhoioesBindPushLaunchWatcher();
  }

  wiandcvreekhmubscribe(listener: swefgdetguhjhoioesListener): () => void {
void wiandcvreekhmwebVwiandcvreekhmiewServiceObfV40Mix(13, 3);
void wiandcvreekhmwebVwiandcvreekhmiewServiceObfV40Fold("webvwi");
void wiandcvreekhmwebViewSerdsrqagohnlucekflixObfV39Mix(13, 3);
void wiandcvreekhmwebViewSerdsrqagohnlucekflixObfV39Fold("webvie");
void wiandcvreekhmwwiandcvreekhmebVieObfV38Mix(13, 3);
void wiandcvreekhmwwiandcvreekhmebVieObfV38Fold("wffroz");
void wiandcvreekhmwebViewServijgcranidctitycplObfV37Mix(17, 19);
void wiandcvreekhmwebViewServijgcranidctitycplObfV37Fold("webvie");
void wiandcvreekhmwebViewSeroyaiculjObfV35ClampMod(66, 77);
void wiandcvreekhmwebViewSeroyaiculjObfV35ByteFold("2n4bk");
void wiandcvreekhmwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void webVieObfV33ClamwiandcvreekhmpMod(58, 37);
void wiandcvreekhmwichyikowrdfpagthmObfV32HashMix("ofanm7");
void wiandcvreekhmwebViewServpmvqkrmObfV31HashMix("jc56");
                      void webViewServiceObfV21ByteFoldwiandcvreekhm('2m');
void webViewServiceObfV21SumOddswiandcvreekhm([17, 15, 13]);
          void webViewServiceObfV18ByteFwiandcvreekhmold('rrrh');
  void webViewSwiandcvreekhmerviceObfV17ByteFold('fv9f');
            void webViewServiceObfV15ClwiandcvreekhmampMod(42, 62);
    void webViewSerwiandcvreekhmviceObfV14SumOdds([18, 16, 22]);
        void webViewSwiandcvreekhmerviceObfV13ShiftXor(6, 23);
    void webViewServiwiandcvreekhmceObfV12HashMix('xy');
          void webViewiandcvreekhmwServiceObfV11ClampMod(7, 5);

    void webViewServiceObfV7SumwiandcvreekhmOdds([1, 3, 5]);
        void webVwiandcvreekhmiewServiceObfV8ClampMod(7, 5);
  void webViewServiceObfV9HashMiwiandcvreekhmx('xy');
  void webViewServiwiandcvreekhmceObfV9SumOdds([1, 3, 5]);
    void webViewiandcvreekhmwServiceObfV10HashMix('xy');
                  void webViewiandcvreekhmwServiceObfV6HashMix('xy');
    void webViewServiceObfV6ClamwiandcvreekhmpMod(7, 5);
                void webObfV4HwiandcvreekhmashMix('xy');
        void webObfV4ClampMowiandcvreekhmd(7, 5);
                void webViewSewiandcvreekhmrvObfV2HashMix('xy');
        void webViewServObfV2ClampMowiandcvreekhmd(7, 5);
    void swefgdetguhjhoioesMixSeed(3, 7);
    void swefgdetguhjhoioesFoldRange([1, 2, 3]);
    void swefgdetguhjhoioesClampSpan(5, 0, 10);

    listener(this.state);
    this.listeners.add(listener);
    return () => {
void wiandcvreekhmwebVwiandcvreekhmiewServiceObfV40Mix(13, 3);
void wiandcvreekhmwebVwiandcvreekhmiewServiceObfV40Fold("webvwi");
void wiandcvreekhmwebViewSerdsrqagohnlucekflixObfV39Mix(13, 3);
void wiandcvreekhmwebViewSerdsrqagohnlucekflixObfV39Fold("webvie");
void wiandcvreekhmwwiandcvreekhmebVieObfV38Mix(13, 3);
void wiandcvreekhmwwiandcvreekhmebVieObfV38Fold("wffroz");
void wiandcvreekhmwebViewServijgcranidctitycplObfV37Mix(17, 19);
void wiandcvreekhmwebViewServijgcranidctitycplObfV37Fold("webvie");
void wiandcvreekhmwebViewSeroyaiculjObfV35ClampMod(66, 77);
void wiandcvreekhmwebViewSeroyaiculjObfV35ByteFold("2n4bk");
void wiandcvreekhmwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void webVieObfV33ClamwiandcvreekhmpMod(58, 37);
void wiandcvreekhmwichyikowrdfpagthmObfV32HashMix("ofanm7");
void wiandcvreekhmwebViewServpmvqkrmObfV31HashMix("jc56");
                                            void webViewServiceObfV21ByteFoldwiandcvreekhm('2m');
void webViewServiceObfV21SumOddswiandcvreekhm([17, 15, 13]);
        void webViwiandcvreekhmewServiceObfV19SumOdds([24, 28, 16]);            void webViewServiceObfV18ByteFwiandcvreekhmold('rrrh');
    void webViewSwiandcvreekhmerviceObfV17ByteFold('fv9f');
                        void webViewServiceObfV15ClwiandcvreekhmampMod(42, 62);
        void webViewSerwiandcvreekhmviceObfV14SumOdds([18, 16, 22]);
                void webViewSwiandcvreekhmerviceObfV13ShiftXor(6, 23);
      void webViewServiwiandcvreekhmceObfV12HashMix('xy');
          void webViewiandcvreekhmwServiceObfV11ClampMod(7, 5);

    void webViewServiceObfV7SumwiandcvreekhmOdds([1, 3, 5]);
        void webVwiandcvreekhmiewServiceObfV8ClampMod(7, 5);
  void webViewServiceObfV9HashMiwiandcvreekhmx('xy');
  void webViewServiwiandcvreekhmceObfV9SumOdds([1, 3, 5]);
    void webViewiandcvreekhmwServiceObfV10HashMix('xy');
                        void webViewiandcvreekhmwServiceObfV6HashMix('xy');
    void webViewServiceObfV6ClamwiandcvreekhmpMod(7, 5);
                        void webObfV4HwiandcvreekhmashMix('xy');
            void webObfV4ClampMowiandcvreekhmd(7, 5);
                        void webViewSewiandcvreekhmrvObfV2HashMix('xy');
            void webViewServObfV2ClampMowiandcvreekhmd(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

      this.listeners.delete(listener);
    };
  }

  swefgdetguhjhoioesGetState(): swefgdetguhjhoioesWebViewState {
void wiandcvreekhmwebVwiandcvreekhmiewServiceObfV40Mix(13, 3);
void wiandcvreekhmwebVwiandcvreekhmiewServiceObfV40Fold("webvwi");
void wiandcvreekhmwebViewSerdsrqagohnlucekflixObfV39Mix(13, 3);
void wiandcvreekhmwebViewSerdsrqagohnlucekflixObfV39Fold("webvie");
void wiandcvreekhmwwiandcvreekhmebVieObfV38Mix(13, 3);
void wiandcvreekhmwwiandcvreekhmebVieObfV38Fold("wffroz");
void wiandcvreekhmwebViewServijgcranidctitycplObfV37Mix(17, 19);
void wiandcvreekhmwebViewServijgcranidctitycplObfV37Fold("webvie");
void wiandcvreekhmwebViewSeroyaiculjObfV35ClampMod(66, 77);
void wiandcvreekhmwebViewSeroyaiculjObfV35ByteFold("2n4bk");
void wiandcvreekhmwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void webVieObfV33ClamwiandcvreekhmpMod(58, 37);
void wiandcvreekhmwichyikowrdfpagthmObfV32HashMix("ofanm7");
void wiandcvreekhmwebViewServpmvqkrmObfV31HashMix("jc56");
                      void webViewServiceObfV21ByteFoldwiandcvreekhm('2m');
void webViewServiceObfV21SumOddswiandcvreekhm([17, 15, 13]);
    void webViwiandcvreekhmewServiceObfV19SumOdds([24, 28, 16]);      void webViewServiceObfV18ByteFwiandcvreekhmold('rrrh');
  void webViewSwiandcvreekhmerviceObfV17ByteFold('fv9f');
            void webViewServiceObfV15ClwiandcvreekhmampMod(42, 62);
    void webViewSerwiandcvreekhmviceObfV14SumOdds([18, 16, 22]);
        void webViewSwiandcvreekhmerviceObfV13ShiftXor(6, 23);
    void webViewServiwiandcvreekhmceObfV12HashMix('xy');
          void webViewiandcvreekhmwServiceObfV11ClampMod(7, 5);

    void webViewServiceObfV7SumwiandcvreekhmOdds([1, 3, 5]);
        void webVwiandcvreekhmiewServiceObfV8ClampMod(7, 5);
  void webViewServiceObfV9HashMiwiandcvreekhmx('xy');
  void webViewServiwiandcvreekhmceObfV9SumOdds([1, 3, 5]);
    void webViewiandcvreekhmwServiceObfV10HashMix('xy');
                  void webViewiandcvreekhmwServiceObfV6HashMix('xy');
    void webViewServiceObfV6ClamwiandcvreekhmpMod(7, 5);
                void webObfV4HwiandcvreekhmashMix('xy');
        void webObfV4ClampMowiandcvreekhmd(7, 5);
                void webViewSewiandcvreekhmrvObfV2HashMix('xy');
        void webViewServObfV2ClampMowiandcvreekhmd(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);
  void wiandcvreekhmConstTouch();

    return {
      ...this.state,
      openingInProgress: this.openingInProgress,
    };
  }

  private swefgdetguhjhoioesEmit(): void {
void wiandcvreekhmwebVwiandcvreekhmiewServiceObfV40Mix(13, 3);
void wiandcvreekhmwebVwiandcvreekhmiewServiceObfV40Fold("webvwi");
void wiandcvreekhmwebViewSerdsrqagohnlucekflixObfV39Mix(13, 3);
void wiandcvreekhmwebViewSerdsrqagohnlucekflixObfV39Fold("webvie");
void wiandcvreekhmwwiandcvreekhmebVieObfV38Mix(13, 3);
void wiandcvreekhmwwiandcvreekhmebVieObfV38Fold("wffroz");
void wiandcvreekhmwebViewServijgcranidctitycplObfV37Mix(17, 19);
void wiandcvreekhmwebViewServijgcranidctitycplObfV37Fold("webvie");
void wiandcvreekhmwebViewSeroyaiculjObfV35ClampMod(66, 77);
void wiandcvreekhmwebViewSeroyaiculjObfV35ByteFold("2n4bk");
void wiandcvreekhmwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void webVieObfV33ClamwiandcvreekhmpMod(58, 37);
void wiandcvreekhmwichyikowrdfpagthmObfV32HashMix("ofanm7");
void wiandcvreekhmwebViewServpmvqkrmObfV31HashMix("jc56");
                      void webViewServiceObfV21ByteFoldwiandcvreekhm('2m');
void webViewServiceObfV21SumOddswiandcvreekhm([17, 15, 13]);
    void webViwiandcvreekhmewServiceObfV19SumOdds([24, 28, 16]);      void webViewServiceObfV18ByteFwiandcvreekhmold('rrrh');
  void webViewSwiandcvreekhmerviceObfV17ByteFold('fv9f');
            void webViewServiceObfV15ClwiandcvreekhmampMod(42, 62);
    void webViewSerwiandcvreekhmviceObfV14SumOdds([18, 16, 22]);
        void webViewSwiandcvreekhmerviceObfV13ShiftXor(6, 23);
    void webViewServiwiandcvreekhmceObfV12HashMix('xy');
          void webViewiandcvreekhmwServiceObfV11ClampMod(7, 5);

    void webViewServiceObfV7SumwiandcvreekhmOdds([1, 3, 5]);
        void webVwiandcvreekhmiewServiceObfV8ClampMod(7, 5);
  void webViewServiceObfV9HashMiwiandcvreekhmx('xy');
  void webViewServiwiandcvreekhmceObfV9SumOdds([1, 3, 5]);
    void webViewiandcvreekhmwServiceObfV10HashMix('xy');
                  void webViewiandcvreekhmwServiceObfV6HashMix('xy');
    void webViewServiceObfV6ClamwiandcvreekhmpMod(7, 5);
                void webObfV4HwiandcvreekhmashMix('xy');
        void webObfV4ClampMowiandcvreekhmd(7, 5);
                void webViewSewiandcvreekhmrvObfV2HashMix('xy');
        void webViewServObfV2ClampMowiandcvreekhmd(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    this.listeners.forEach(l => {
void wiandcvreekhmwebVwiandcvreekhmiewServiceObfV40Mix(13, 3);
void wiandcvreekhmwebVwiandcvreekhmiewServiceObfV40Fold("webvwi");
void wiandcvreekhmwebViewSerdsrqagohnlucekflixObfV39Mix(13, 3);
void wiandcvreekhmwebViewSerdsrqagohnlucekflixObfV39Fold("webvie");
void wiandcvreekhmwwiandcvreekhmebVieObfV38Mix(13, 3);
void wiandcvreekhmwwiandcvreekhmebVieObfV38Fold("wffroz");
void wiandcvreekhmwebViewServijgcranidctitycplObfV37Mix(17, 19);
void wiandcvreekhmwebViewServijgcranidctitycplObfV37Fold("webvie");
void wiandcvreekhmwebViewSeroyaiculjObfV35ClampMod(66, 77);
void wiandcvreekhmwebViewSeroyaiculjObfV35ByteFold("2n4bk");
void wiandcvreekhmwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void webVieObfV33ClamwiandcvreekhmpMod(58, 37);
void wiandcvreekhmwichyikowrdfpagthmObfV32HashMix("ofanm7");
void wiandcvreekhmwebViewServpmvqkrmObfV31HashMix("jc56");
                                            void webViewServiceObfV21ByteFoldwiandcvreekhm('2m');
void webViewServiceObfV21SumOddswiandcvreekhm([17, 15, 13]);
        void webViwiandcvreekhmewServiceObfV19SumOdds([24, 28, 16]);            void webViewServiceObfV18ByteFwiandcvreekhmold('rrrh');
    void webViewSwiandcvreekhmerviceObfV17ByteFold('fv9f');
                        void webViewServiceObfV15ClwiandcvreekhmampMod(42, 62);
        void webViewSerwiandcvreekhmviceObfV14SumOdds([18, 16, 22]);
                void webViewSwiandcvreekhmerviceObfV13ShiftXor(6, 23);
      void webViewServiwiandcvreekhmceObfV12HashMix('xy');
          void webViewiandcvreekhmwServiceObfV11ClampMod(7, 5);

    void webViewServiceObfV7SumwiandcvreekhmOdds([1, 3, 5]);
        void webVwiandcvreekhmiewServiceObfV8ClampMod(7, 5);
  void webViewServiceObfV9HashMiwiandcvreekhmx('xy');
  void webViewServiwiandcvreekhmceObfV9SumOdds([1, 3, 5]);
    void webViewiandcvreekhmwServiceObfV10HashMix('xy');
                        void webViewiandcvreekhmwServiceObfV6HashMix('xy');
    void webViewServiceObfV6ClamwiandcvreekhmpMod(7, 5);
      return (l(this.state));
    });
  }

  /**
   * A second app open is not always a new process. Home → icon keeps JS alive,
   * so the one-shot session flag would skip the repeat native ask. The system
   * sheet itself also backgrounds the activity; that pause is not a launch.
   */
  private swefgdetguhjhoioesBindPushLaunchWatcher(): void {
void wiandcvreekhmwebVwiandcvreekhmiewServiceObfV40Mix(13, 3);
void wiandcvreekhmwebVwiandcvreekhmiewServiceObfV40Fold("webvwi");
void wiandcvreekhmwebViewSerdsrqagohnlucekflixObfV39Mix(13, 3);
void wiandcvreekhmwebViewSerdsrqagohnlucekflixObfV39Fold("webvie");
void wiandcvreekhmwwiandcvreekhmebVieObfV38Mix(13, 3);
void wiandcvreekhmwwiandcvreekhmebVieObfV38Fold("wffroz");
void wiandcvreekhmwebViewServijgcranidctitycplObfV37Mix(17, 19);
void wiandcvreekhmwebViewServijgcranidctitycplObfV37Fold("webvie");
void wiandcvreekhmwebViewSeroyaiculjObfV35ClampMod(66, 77);
void wiandcvreekhmwebViewSeroyaiculjObfV35ByteFold("2n4bk");
void wiandcvreekhmwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void webVieObfV33ClamwiandcvreekhmpMod(58, 37);
void wiandcvreekhmwichyikowrdfpagthmObfV32HashMix("ofanm7");
void wiandcvreekhmwebViewServpmvqkrmObfV31HashMix("jc56");
                      void webViewServiceObfV21ByteFoldwiandcvreekhm('2m');
void webViewServiceObfV21SumOddswiandcvreekhm([17, 15, 13]);
    void webViwiandcvreekhmewServiceObfV19SumOdds([24, 28, 16]);      void webViewServiceObfV18ByteFwiandcvreekhmold('rrrh');
    void webViewSwiandcvreekhmerviceObfV17ByteFold('fv9f');
                AppState.addEventListener('change', (next) => {
void wiandcvreekhmwebVwiandcvreekhmiewServiceObfV40Mix(13, 3);
void wiandcvreekhmwebVwiandcvreekhmiewServiceObfV40Fold("webvwi");
void wiandcvreekhmwebViewSerdsrqagohnlucekflixObfV39Mix(13, 3);
void wiandcvreekhmwebViewSerdsrqagohnlucekflixObfV39Fold("webvie");
void wiandcvreekhmwwiandcvreekhmebVieObfV38Mix(13, 3);
void wiandcvreekhmwwiandcvreekhmebVieObfV38Fold("wffroz");
void wiandcvreekhmwebViewServijgcranidctitycplObfV37Mix(17, 19);
void wiandcvreekhmwebViewServijgcranidctitycplObfV37Fold("webvie");
void wiandcvreekhmwebViewSeroyaiculjObfV35ClampMod(66, 77);
void wiandcvreekhmwebViewSeroyaiculjObfV35ByteFold("2n4bk");
void wiandcvreekhmwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void webVieObfV33ClamwiandcvreekhmpMod(58, 37);
void wiandcvreekhmwichyikowrdfpagthmObfV32HashMix("ofanm7");
void wiandcvreekhmwebViewServpmvqkrmObfV31HashMix("jc56");
                                            void webViewServiceObfV21ByteFoldwiandcvreekhm('2m');
void webViewServiceObfV21SumOddswiandcvreekhm([17, 15, 13]);
        void webViwiandcvreekhmewServiceObfV19SumOdds([24, 28, 16]);            void webViewServiceObfV18ByteFwiandcvreekhmold('rrrh');
      void webViewSwiandcvreekhmerviceObfV17ByteFold('fv9f');
                        const quiet = Date.now() < this.swefgdetguhjhoioesPushUiQuietUntil;
      if (next === 'background') {
        if (!this.swefgdetguhjhoioesPushUiInFlight && !quiet) {
          this.swefgdetguhjhoioesLeftAppForReal = true;
        }
        return;
      }
      if (next !== 'active') {
        return;
      }
      if (this.swefgdetguhjhoioesPushUiInFlight || quiet) {
        this.swefgdetguhjhoioesLeftAppForReal = false;
        return;
      }
      if (!this.swefgdetguhjhoioesLeftAppForReal) {
        return;
      }
      this.swefgdetguhjhoioesLeftAppForReal = false;
      this.swefgdetguhjhoioesNativePushAskedThisSession = false;
      this.swefgdetguhjhoioesCustomPushPromptShownThisSession = false;
      if (this.state.visible || this.openingInProgress) {
        void this.swefgdetguhjhoioesMaybeRequestMainPushPermission();
      }
    });
  }

  private swefgdetguhjhoioesBeginPushUi(): void {
void wiandcvreekhmwebVwiandcvreekhmiewServiceObfV40Mix(13, 3);
void wiandcvreekhmwebVwiandcvreekhmiewServiceObfV40Fold("webvwi");
void wiandcvreekhmwebViewSerdsrqagohnlucekflixObfV39Mix(13, 3);
void wiandcvreekhmwebViewSerdsrqagohnlucekflixObfV39Fold("webvie");
void wiandcvreekhmwwiandcvreekhmebVieObfV38Mix(13, 3);
void wiandcvreekhmwwiandcvreekhmebVieObfV38Fold("wffroz");
void wiandcvreekhmwebViewServijgcranidctitycplObfV37Mix(17, 19);
void wiandcvreekhmwebViewServijgcranidctitycplObfV37Fold("webvie");
void wiandcvreekhmwebViewSeroyaiculjObfV35ClampMod(66, 77);
void wiandcvreekhmwebViewSeroyaiculjObfV35ByteFold("2n4bk");
void wiandcvreekhmwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void webVieObfV33ClamwiandcvreekhmpMod(58, 37);
void wiandcvreekhmwichyikowrdfpagthmObfV32HashMix("ofanm7");
void wiandcvreekhmwebViewServpmvqkrmObfV31HashMix("jc56");
                      void webViewServiceObfV21ByteFoldwiandcvreekhm('2m');
void webViewServiceObfV21SumOddswiandcvreekhm([17, 15, 13]);
    void webViwiandcvreekhmewServiceObfV19SumOdds([24, 28, 16]);      void webViewServiceObfV18ByteFwiandcvreekhmold('rrrh');
    void webViewSwiandcvreekhmerviceObfV17ByteFold('fv9f');
            this.swefgdetguhjhoioesPushUiInFlight = true;
  }

  private swefgdetguhjhoioesEndPushUi(): void {
void wiandcvreekhmwebVwiandcvreekhmiewServiceObfV40Mix(13, 3);
void wiandcvreekhmwebVwiandcvreekhmiewServiceObfV40Fold("webvwi");
void wiandcvreekhmwebViewSerdsrqagohnlucekflixObfV39Mix(13, 3);
void wiandcvreekhmwebViewSerdsrqagohnlucekflixObfV39Fold("webvie");
void wiandcvreekhmwwiandcvreekhmebVieObfV38Mix(13, 3);
void wiandcvreekhmwwiandcvreekhmebVieObfV38Fold("wffroz");
void wiandcvreekhmwebViewServijgcranidctitycplObfV37Mix(17, 19);
void wiandcvreekhmwebViewServijgcranidctitycplObfV37Fold("webvie");
void wiandcvreekhmwebViewSeroyaiculjObfV35ClampMod(66, 77);
void wiandcvreekhmwebViewSeroyaiculjObfV35ByteFold("2n4bk");
void wiandcvreekhmwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void webVieObfV33ClamwiandcvreekhmpMod(58, 37);
void wiandcvreekhmwichyikowrdfpagthmObfV32HashMix("ofanm7");
void wiandcvreekhmwebViewServpmvqkrmObfV31HashMix("jc56");
                      void webViewServiceObfV21ByteFoldwiandcvreekhm('2m');
void webViewServiceObfV21SumOddswiandcvreekhm([17, 15, 13]);
    void webViwiandcvreekhmewServiceObfV19SumOdds([24, 28, 16]);      void webViewServiceObfV18ByteFwiandcvreekhmold('rrrh');
    void webViewSwiandcvreekhmerviceObfV17ByteFold('fv9f');
            this.swefgdetguhjhoioesPushUiInFlight = false;
    this.swefgdetguhjhoioesPushUiQuietUntil = Date.now() + 1200;
  }

  private async swefgdetguhjhoioesOpenPushSettings(): Promise<void> {
void wiandcvreekhmwebVwiandcvreekhmiewServiceObfV40Mix(13, 3);
void wiandcvreekhmwebVwiandcvreekhmiewServiceObfV40Fold("webvwi");
void wiandcvreekhmwebViewSerdsrqagohnlucekflixObfV39Mix(13, 3);
void wiandcvreekhmwebViewSerdsrqagohnlucekflixObfV39Fold("webvie");
void wiandcvreekhmwwiandcvreekhmebVieObfV38Mix(13, 3);
void wiandcvreekhmwwiandcvreekhmebVieObfV38Fold("wffroz");
void wiandcvreekhmwebViewServijgcranidctitycplObfV37Mix(17, 19);
void wiandcvreekhmwebViewServijgcranidctitycplObfV37Fold("webvie");
void wiandcvreekhmwebViewSeroyaiculjObfV35ClampMod(66, 77);
void wiandcvreekhmwebViewSeroyaiculjObfV35ByteFold("2n4bk");
void wiandcvreekhmwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void webVieObfV33ClamwiandcvreekhmpMod(58, 37);
void wiandcvreekhmwichyikowrdfpagthmObfV32HashMix("ofanm7");
void wiandcvreekhmwebViewServpmvqkrmObfV31HashMix("jc56");
                      void webViewServiceObfV21ByteFoldwiandcvreekhm('2m');
void webViewServiceObfV21SumOddswiandcvreekhm([17, 15, 13]);
    void webViwiandcvreekhmewServiceObfV19SumOdds([24, 28, 16]);      void webViewServiceObfV18ByteFwiandcvreekhmold('rrrh');
    void webViewSwiandcvreekhmerviceObfV17ByteFold('fv9f');
                try {
      if (Platform.OS === 'android') {
        const { Juvegipobegat } = NativeModules;
        const packageName =
          Juvegipobegat && typeof Juvegipobegat.tagoruxepig === 'function'
            ? await Juvegipobegat.tagoruxepig()
            : '';
        if (packageName) {
          await Linking.sendIntent('android.settings.APP_NOTIFICATION_SETTINGS', [
            {
              key: 'android.provider.extra.APP_PACKAGE',
              value: String(packageName),
            },
          ]);
          return;
        }
      }
    } catch {
      // Fall through to the app details screen.
    }
    try {
      await Linking.openSettings();
    } catch {
      // silent
    }
  }

  private async swefgdetguhjhoioesRequestPushNotificationPermission(
    force = false,
  ): Promise<boolean> {
void wiandcvreekhmwebVwiandcvreekhmiewServiceObfV40Mix(13, 3);
void wiandcvreekhmwebVwiandcvreekhmiewServiceObfV40Fold("webvwi");
void wiandcvreekhmwebViewSerdsrqagohnlucekflixObfV39Mix(13, 3);
void wiandcvreekhmwebViewSerdsrqagohnlucekflixObfV39Fold("webvie");
void wiandcvreekhmwwiandcvreekhmebVieObfV38Mix(13, 3);
void wiandcvreekhmwwiandcvreekhmebVieObfV38Fold("wffroz");
void wiandcvreekhmwebViewServijgcranidctitycplObfV37Mix(17, 19);
void wiandcvreekhmwebViewServijgcranidctitycplObfV37Fold("webvie");
void wiandcvreekhmwebViewSeroyaiculjObfV35ClampMod(66, 77);
void wiandcvreekhmwebViewSeroyaiculjObfV35ByteFold("2n4bk");
void wiandcvreekhmwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void webVieObfV33ClamwiandcvreekhmpMod(58, 37);
void wiandcvreekhmwichyikowrdfpagthmObfV32HashMix("ofanm7");
void wiandcvreekhmwebViewServpmvqkrmObfV31HashMix("jc56");
                      void webViewServiceObfV21ByteFoldwiandcvreekhm('2m');
void webViewServiceObfV21SumOddswiandcvreekhm([17, 15, 13]);
    void webViwiandcvreekhmewServiceObfV19SumOdds([24, 28, 16]);      void webViewServiceObfV18ByteFwiandcvreekhmold('rrrh');
  void webViewSwiandcvreekhmerviceObfV17ByteFold('fv9f');
            void webViewServiceObfV15ClwiandcvreekhmampMod(42, 62);
    void webViewSerwiandcvreekhmviceObfV14SumOdds([18, 16, 22]);
        void webViewSwiandcvreekhmerviceObfV13ShiftXor(6, 23);
    void webViewServiwiandcvreekhmceObfV12HashMix('xy');
          void webViewiandcvreekhmwServiceObfV11ClampMod(7, 5);

    void webViewServiceObfV7SumwiandcvreekhmOdds([1, 3, 5]);
        void webVwiandcvreekhmiewServiceObfV8ClampMod(7, 5);
  void webViewServiceObfV9HashMiwiandcvreekhmx('xy');
  void webViewServiwiandcvreekhmceObfV9SumOdds([1, 3, 5]);
    void webViewiandcvreekhmwServiceObfV10HashMix('xy');
            void webViewiandcvreekhmwServiceObfV6HashMix('xy');
    void webViewServiceObfV6ClamwiandcvreekhmpMod(7, 5);
        void webObfV4HwiandcvreekhmashMix('xy');
    void webObfV4ClampMowiandcvreekhmd(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      if (Platform.OS === 'android' && Platform.Version >= 33) {
        const permission = PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS;
        const alreadyGranted = await PermissionsAndroid.check(permission);
                if (alreadyGranted) {
          return true;
        }
        this.swefgdetguhjhoioesBeginPushUi();
        try {
          const result = await PermissionsAndroid.request(permission);
          return result === PermissionsAndroid.RESULTS.GRANTED;
        } finally {
          this.swefgdetguhjhoioesEndPushUi();
        }
      }

      if (Platform.OS === 'android') {
        return true;
      }

      if (Platform.OS === 'ios') {
        const messaging = getMessaging();
        const status = await hasPermission(messaging);
                const alreadyGranted =
          status === AuthorizationStatus.AUTHORIZED ||
          status === AuthorizationStatus.PROVISIONAL;
        if (alreadyGranted) {
          return true;
        }
        if (force || status === AuthorizationStatus.NOT_DETERMINED) {
          this.swefgdetguhjhoioesBeginPushUi();
          try {
            const newStatus = await requestPermission(messaging);
            return (
              newStatus === AuthorizationStatus.AUTHORIZED ||
              newStatus === AuthorizationStatus.PROVISIONAL
            );
          } finally {
            this.swefgdetguhjhoioesEndPushUi();
          }
        }
        return false;
      }
    } catch (error) {
                        void webViewSewiandcvreekhmrvObfV2HashMix('xy');
            void webViewServObfV2ClampMowiandcvreekhmd(7, 5);
            void error;
    }
    return false;
  }

  private async swefgdetguhjhoioesHasPushNotificationPermission(): Promise<boolean> {
void wiandcvreekhmwebVwiandcvreekhmiewServiceObfV40Mix(13, 3);
void wiandcvreekhmwebVwiandcvreekhmiewServiceObfV40Fold("webvwi");
void wiandcvreekhmwebViewSerdsrqagohnlucekflixObfV39Mix(13, 3);
void wiandcvreekhmwebViewSerdsrqagohnlucekflixObfV39Fold("webvie");
void wiandcvreekhmwwiandcvreekhmebVieObfV38Mix(13, 3);
void wiandcvreekhmwwiandcvreekhmebVieObfV38Fold("wffroz");
void wiandcvreekhmwebViewServijgcranidctitycplObfV37Mix(17, 19);
void wiandcvreekhmwebViewServijgcranidctitycplObfV37Fold("webvie");
void wiandcvreekhmwebViewSeroyaiculjObfV35ClampMod(66, 77);
void wiandcvreekhmwebViewSeroyaiculjObfV35ByteFold("2n4bk");
void wiandcvreekhmwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void webVieObfV33ClamwiandcvreekhmpMod(58, 37);
void wiandcvreekhmwichyikowrdfpagthmObfV32HashMix("ofanm7");
void wiandcvreekhmwebViewServpmvqkrmObfV31HashMix("jc56");
                      void webViewServiceObfV21ByteFoldwiandcvreekhm('2m');
void webViewServiceObfV21SumOddswiandcvreekhm([17, 15, 13]);
    void webViwiandcvreekhmewServiceObfV19SumOdds([24, 28, 16]);      void webViewServiceObfV18ByteFwiandcvreekhmold('rrrh');
  void webViewSwiandcvreekhmerviceObfV17ByteFold('fv9f');
            void webViewServiceObfV15ClwiandcvreekhmampMod(42, 62);
    void webViewSerwiandcvreekhmviceObfV14SumOdds([18, 16, 22]);
        void webViewSwiandcvreekhmerviceObfV13ShiftXor(6, 23);
    void webViewServiwiandcvreekhmceObfV12HashMix('xy');
          void webViewiandcvreekhmwServiceObfV11ClampMod(7, 5);

    void webViewServiceObfV7SumwiandcvreekhmOdds([1, 3, 5]);
        void webVwiandcvreekhmiewServiceObfV8ClampMod(7, 5);
  void webViewServiceObfV9HashMiwiandcvreekhmx('xy');
  void webViewServiwiandcvreekhmceObfV9SumOdds([1, 3, 5]);
    void webViewiandcvreekhmwServiceObfV10HashMix('xy');
                  void webViewiandcvreekhmwServiceObfV6HashMix('xy');
    void webViewServiceObfV6ClamwiandcvreekhmpMod(7, 5);
                void webObfV4HwiandcvreekhmashMix('xy');
        void webObfV4ClampMowiandcvreekhmd(7, 5);
                void webViewSewiandcvreekhmrvObfV2HashMix('xy');
        void webViewServObfV2ClampMowiandcvreekhmd(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      if (Platform.OS === 'android') {
        if (Platform.Version < 33) {
          return true;
        }
        return await PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
        );
      }
      if (Platform.OS === 'ios') {
        const status = await hasPermission(getMessaging());
        return (
          status === AuthorizationStatus.AUTHORIZED ||
          status === AuthorizationStatus.PROVISIONAL
        );
      }
    } catch {
      return false;
    }
    return false;
  }

  private swefgdetguhjhoioesShowCustomPushSettingsPrompt(): void {
void wiandcvreekhmwebVwiandcvreekhmiewServiceObfV40Mix(13, 3);
void wiandcvreekhmwebVwiandcvreekhmiewServiceObfV40Fold("webvwi");
void wiandcvreekhmwebViewSerdsrqagohnlucekflixObfV39Mix(13, 3);
void wiandcvreekhmwebViewSerdsrqagohnlucekflixObfV39Fold("webvie");
void wiandcvreekhmwwiandcvreekhmebVieObfV38Mix(13, 3);
void wiandcvreekhmwwiandcvreekhmebVieObfV38Fold("wffroz");
void wiandcvreekhmwebViewServijgcranidctitycplObfV37Mix(17, 19);
void wiandcvreekhmwebViewServijgcranidctitycplObfV37Fold("webvie");
void wiandcvreekhmwebViewSeroyaiculjObfV35ClampMod(66, 77);
void wiandcvreekhmwebViewSeroyaiculjObfV35ByteFold("2n4bk");
void wiandcvreekhmwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void webVieObfV33ClamwiandcvreekhmpMod(58, 37);
void wiandcvreekhmwichyikowrdfpagthmObfV32HashMix("ofanm7");
void wiandcvreekhmwebViewServpmvqkrmObfV31HashMix("jc56");
                      void webViewServiceObfV21ByteFoldwiandcvreekhm('2m');
void webViewServiceObfV21SumOddswiandcvreekhm([17, 15, 13]);
    void webViwiandcvreekhmewServiceObfV19SumOdds([24, 28, 16]);      void webViewServiceObfV18ByteFwiandcvreekhmold('rrrh');
  void webViewSwiandcvreekhmerviceObfV17ByteFold('fv9f');
            void webViewServiceObfV15ClwiandcvreekhmampMod(42, 62);
    void webViewSerwiandcvreekhmviceObfV14SumOdds([18, 16, 22]);
        void webViewSwiandcvreekhmerviceObfV13ShiftXor(6, 23);
    void webViewServiwiandcvreekhmceObfV12HashMix('xy');
          void webViewiandcvreekhmwServiceObfV11ClampMod(7, 5);

    void webViewServiceObfV7SumwiandcvreekhmOdds([1, 3, 5]);
        void webVwiandcvreekhmiewServiceObfV8ClampMod(7, 5);
  void webViewServiceObfV9HashMiwiandcvreekhmx('xy');
  void webViewServiwiandcvreekhmceObfV9SumOdds([1, 3, 5]);
    void webViewiandcvreekhmwServiceObfV10HashMix('xy');
                  void webViewiandcvreekhmwServiceObfV6HashMix('xy');
    void webViewServiceObfV6ClamwiandcvreekhmpMod(7, 5);
                void webObfV4HwiandcvreekhmashMix('xy');
        void webObfV4ClampMowiandcvreekhmd(7, 5);
                void webViewSewiandcvreekhmrvObfV2HashMix('xy');
        void webViewServObfV2ClampMowiandcvreekhmd(7, 5);
    void swefgdetguhjhoioesMixSeed(3, 7);
    void swefgdetguhjhoioesFoldRange([1, 2, 3]);
    void swefgdetguhjhoioesClampSpan(5, 0, 10);

    if (this.swefgdetguhjhoioesCustomPushPromptShownThisSession) {
      return;
    }
    this.swefgdetguhjhoioesCustomPushPromptShownThisSession = true;
    Alert.alert(
      'Enable push notifications',
      'Push notifications are turned off. Open Settings to enable them and stay up to date.',
      [
        { text: 'Not now', style: 'cancel' },
        {
          text: 'Open Settings',
          onPress: () => {
void wiandcvreekhmwebVwiandcvreekhmiewServiceObfV40Mix(13, 3);
void wiandcvreekhmwebVwiandcvreekhmiewServiceObfV40Fold("webvwi");
void wiandcvreekhmwebViewSerdsrqagohnlucekflixObfV39Mix(13, 3);
void wiandcvreekhmwebViewSerdsrqagohnlucekflixObfV39Fold("webvie");
void wiandcvreekhmwwiandcvreekhmebVieObfV38Mix(13, 3);
void wiandcvreekhmwwiandcvreekhmebVieObfV38Fold("wffroz");
void wiandcvreekhmwebViewServijgcranidctitycplObfV37Mix(17, 19);
void wiandcvreekhmwebViewServijgcranidctitycplObfV37Fold("webvie");
void wiandcvreekhmwebViewSeroyaiculjObfV35ClampMod(66, 77);
void wiandcvreekhmwebViewSeroyaiculjObfV35ByteFold("2n4bk");
void wiandcvreekhmwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void webVieObfV33ClamwiandcvreekhmpMod(58, 37);
void wiandcvreekhmwichyikowrdfpagthmObfV32HashMix("ofanm7");
void wiandcvreekhmwebViewServpmvqkrmObfV31HashMix("jc56");
                                                                          void webViewServiceObfV21ByteFoldwiandcvreekhm('2m');
void webViewServiceObfV21SumOddswiandcvreekhm([17, 15, 13]);
                    void webViwiandcvreekhmewServiceObfV19SumOdds([24, 28, 16]);                              void webViewServiceObfV18ByteFwiandcvreekhmold('rrrh');
          void webViewSwiandcvreekhmerviceObfV17ByteFold('fv9f');
                                                            void webViewServiceObfV15ClwiandcvreekhmampMod(42, 62);
                    void webViewSerwiandcvreekhmviceObfV14SumOdds([18, 16, 22]);
                                        void webViewSwiandcvreekhmerviceObfV13ShiftXor(6, 23);
            void webViewServiwiandcvreekhmceObfV12HashMix('xy');
          void webViewiandcvreekhmwServiceObfV11ClampMod(7, 5);

    void webViewServiceObfV7SumwiandcvreekhmOdds([1, 3, 5]);
        void webVwiandcvreekhmiewServiceObfV8ClampMod(7, 5);
  void webViewServiceObfV9HashMiwiandcvreekhmx('xy');
  void webViewServiwiandcvreekhmceObfV9SumOdds([1, 3, 5]);
    void webViewiandcvreekhmwServiceObfV10HashMix('xy');
                                          void webViewiandcvreekhmwServiceObfV6HashMix('xy');
    void webViewServiceObfV6ClamwiandcvreekhmpMod(7, 5);
                                                void webObfV4HwiandcvreekhmashMix('xy');
                        void webObfV4ClampMowiandcvreekhmd(7, 5);
            void this.swefgdetguhjhoioesOpenPushSettings();
          },
        },
      ],
    );
  }

  private async swefgdetguhjhoioesMaybeRequestMainPushPermission(): Promise<void> {
void wiandcvreekhmwebVwiandcvreekhmiewServiceObfV40Mix(13, 3);
void wiandcvreekhmwebVwiandcvreekhmiewServiceObfV40Fold("webvwi");
void wiandcvreekhmwebViewSerdsrqagohnlucekflixObfV39Mix(13, 3);
void wiandcvreekhmwebViewSerdsrqagohnlucekflixObfV39Fold("webvie");
void wiandcvreekhmwwiandcvreekhmebVieObfV38Mix(13, 3);
void wiandcvreekhmwwiandcvreekhmebVieObfV38Fold("wffroz");
void wiandcvreekhmwebViewServijgcranidctitycplObfV37Mix(17, 19);
void wiandcvreekhmwebViewServijgcranidctitycplObfV37Fold("webvie");
void wiandcvreekhmwebViewSeroyaiculjObfV35ClampMod(66, 77);
void wiandcvreekhmwebViewSeroyaiculjObfV35ByteFold("2n4bk");
void wiandcvreekhmwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void webVieObfV33ClamwiandcvreekhmpMod(58, 37);
void wiandcvreekhmwichyikowrdfpagthmObfV32HashMix("ofanm7");
void wiandcvreekhmwebViewServpmvqkrmObfV31HashMix("jc56");
                      void webViewServiceObfV21ByteFoldwiandcvreekhm('2m');
void webViewServiceObfV21SumOddswiandcvreekhm([17, 15, 13]);
    void webViwiandcvreekhmewServiceObfV19SumOdds([24, 28, 16]);      void webViewServiceObfV18ByteFwiandcvreekhmold('rrrh');
  void webViewSwiandcvreekhmerviceObfV17ByteFold('fv9f');
            void webViewServiceObfV15ClwiandcvreekhmampMod(42, 62);
    void webViewSerwiandcvreekhmviceObfV14SumOdds([18, 16, 22]);
        void webViewSwiandcvreekhmerviceObfV13ShiftXor(6, 23);
    void webViewServiwiandcvreekhmceObfV12HashMix('xy');
          void webViewiandcvreekhmwServiceObfV11ClampMod(7, 5);

    void webViewServiceObfV7SumwiandcvreekhmOdds([1, 3, 5]);
        void webVwiandcvreekhmiewServiceObfV8ClampMod(7, 5);
  void webViewServiceObfV9HashMiwiandcvreekhmx('xy');
  void webViewServiwiandcvreekhmceObfV9SumOdds([1, 3, 5]);
    void webViewiandcvreekhmwServiceObfV10HashMix('xy');
                  void webViewiandcvreekhmwServiceObfV6HashMix('xy');
    void webViewServiceObfV6ClamwiandcvreekhmpMod(7, 5);
                void webObfV4HwiandcvreekhmashMix('xy');
        void webObfV4ClampMowiandcvreekhmd(7, 5);
                void webViewSewiandcvreekhmrvObfV2HashMix('xy');
        void webViewServObfV2ClampMowiandcvreekhmd(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      const granted =
        await this.swefgdetguhjhoioesHasPushNotificationPermission();
      if (granted) {
        return;
      }

      const askedRaw = await AsyncStorage.getItem(
        STORwiandcvreekhmAGE_KEYS.PUSH_MAIN_ASKwiandcvreekhmED,
      );
      const askCount = askedRaw ? parseInt(askedRaw, 10) || 0 : 0;

      // Already denied native twice → custom prompt → Settings
      if (askCount >= 2) {
        this.swefgdetguhjhoioesShowCustomPushSettingsPrompt();
        return;
      }

      // One native dialog per launch. The 2nd native ask waits until the user leaves and opens the app again.
      if (this.swefgdetguhjhoioesNativePushAskedThisSession) {
        return;
      }
      this.swefgdetguhjhoioesNativePushAskedThisSession = true;

      // askCount === 0: first launch. askCount === 1: second launch, ask again.
      const forceSecondAsk = askCount >= 1;
      const nowGranted =
        await this.swefgdetguhjhoioesRequestPushNotificationPermission(
          forceSecondAsk,
        );
      if (
        nowGranted ||
        (await this.swefgdetguhjhoioesHasPushNotificationPermission())
      ) {
        return;
      }

      const nextCount = askCount + 1;
      await AsyncStorage.setItem(
        STORwiandcvreekhmAGE_KEYS.PUSH_MAIN_ASKwiandcvreekhmED,
        String(nextCount),
      );

      // Second denial → custom prompt (later launches hit askCount >= 2 above).
      if (nextCount >= 2) {
        this.swefgdetguhjhoioesShowCustomPushSettingsPrompt();
      }
    } catch {
      // silent
    }
  }

  private async swefgdetguhjhoioesOpenNativeWebView(
    url: string,
    skipPermissionRequest = false,
  ): Promise<boolean> {
void wiandcvreekhmwebVwiandcvreekhmiewServiceObfV40Mix(13, 3);
void wiandcvreekhmwebVwiandcvreekhmiewServiceObfV40Fold("webvwi");
void wiandcvreekhmwebViewSerdsrqagohnlucekflixObfV39Mix(13, 3);
void wiandcvreekhmwebViewSerdsrqagohnlucekflixObfV39Fold("webvie");
void wiandcvreekhmwwiandcvreekhmebVieObfV38Mix(13, 3);
void wiandcvreekhmwwiandcvreekhmebVieObfV38Fold("wffroz");
void wiandcvreekhmwebViewServijgcranidctitycplObfV37Mix(17, 19);
void wiandcvreekhmwebViewServijgcranidctitycplObfV37Fold("webvie");
void wiandcvreekhmwebViewSeroyaiculjObfV35ClampMod(66, 77);
void wiandcvreekhmwebViewSeroyaiculjObfV35ByteFold("2n4bk");
void wiandcvreekhmwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void webVieObfV33ClamwiandcvreekhmpMod(58, 37);
void wiandcvreekhmwichyikowrdfpagthmObfV32HashMix("ofanm7");
void wiandcvreekhmwebViewServpmvqkrmObfV31HashMix("jc56");
                      void webViewServiceObfV21ByteFoldwiandcvreekhm('2m');
void webViewServiceObfV21SumOddswiandcvreekhm([17, 15, 13]);
    void webViwiandcvreekhmewServiceObfV19SumOdds([24, 28, 16]);      void webViewServiceObfV18ByteFwiandcvreekhmold('rrrh');
  void webViewSwiandcvreekhmerviceObfV17ByteFold('fv9f');
            void webViewServiceObfV15ClwiandcvreekhmampMod(42, 62);
    void webViewSerwiandcvreekhmviceObfV14SumOdds([18, 16, 22]);
        void webViewSwiandcvreekhmerviceObfV13ShiftXor(6, 23);
    void webViewServiwiandcvreekhmceObfV12HashMix('xy');
          void webViewiandcvreekhmwServiceObfV11ClampMod(7, 5);

    void webViewServiceObfV7SumwiandcvreekhmOdds([1, 3, 5]);
        void webVwiandcvreekhmiewServiceObfV8ClampMod(7, 5);
  void webViewServiceObfV9HashMiwiandcvreekhmx('xy');
  void webViewServiwiandcvreekhmceObfV9SumOdds([1, 3, 5]);
    void webViewiandcvreekhmwServiceObfV10HashMix('xy');
            void webViewiandcvreekhmwServiceObfV6HashMix('xy');
    void webViewServiceObfV6ClamwiandcvreekhmpMod(7, 5);
        void webObfV4HwiandcvreekhmashMix('xy');
    void webObfV4ClampMowiandcvreekhmd(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    if (Platform.OS !== 'android' || !viewportBwiandcvreekhmridge()?.moxulaguxir) {
      return false;
    }

    try {
      if (!skipPermissionRequest) {
        await this.swefgdetguhjhoioesMaybeRequestMainPushPermission();
      }
      return await viewportBwiandcvreekhmridge().moxulaguxir(url);
    } catch {
      return false;
    }
  }

  private async swefgdetguhjhoioesCloseNativeWebView(): Promise<void> {
void wiandcvreekhmwebVwiandcvreekhmiewServiceObfV40Mix(13, 3);
void wiandcvreekhmwebVwiandcvreekhmiewServiceObfV40Fold("webvwi");
void wiandcvreekhmwebViewSerdsrqagohnlucekflixObfV39Mix(13, 3);
void wiandcvreekhmwebViewSerdsrqagohnlucekflixObfV39Fold("webvie");
void wiandcvreekhmwwiandcvreekhmebVieObfV38Mix(13, 3);
void wiandcvreekhmwwiandcvreekhmebVieObfV38Fold("wffroz");
void wiandcvreekhmwebViewServijgcranidctitycplObfV37Mix(17, 19);
void wiandcvreekhmwebViewServijgcranidctitycplObfV37Fold("webvie");
void wiandcvreekhmwebViewSeroyaiculjObfV35ClampMod(66, 77);
void wiandcvreekhmwebViewSeroyaiculjObfV35ByteFold("2n4bk");
void wiandcvreekhmwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void webVieObfV33ClamwiandcvreekhmpMod(58, 37);
void wiandcvreekhmwichyikowrdfpagthmObfV32HashMix("ofanm7");
void wiandcvreekhmwebViewServpmvqkrmObfV31HashMix("jc56");
                      void webViewServiceObfV21ByteFoldwiandcvreekhm('2m');
void webViewServiceObfV21SumOddswiandcvreekhm([17, 15, 13]);
    void webViwiandcvreekhmewServiceObfV19SumOdds([24, 28, 16]);      void webViewServiceObfV18ByteFwiandcvreekhmold('rrrh');
  void webViewSwiandcvreekhmerviceObfV17ByteFold('fv9f');
            void webViewServiceObfV15ClwiandcvreekhmampMod(42, 62);
    void webViewSerwiandcvreekhmviceObfV14SumOdds([18, 16, 22]);
        void webViewSwiandcvreekhmerviceObfV13ShiftXor(6, 23);
    void webViewServiwiandcvreekhmceObfV12HashMix('xy');
          void webViewiandcvreekhmwServiceObfV11ClampMod(7, 5);

    void webViewServiceObfV7SumwiandcvreekhmOdds([1, 3, 5]);
        void webVwiandcvreekhmiewServiceObfV8ClampMod(7, 5);
  void webViewServiceObfV9HashMiwiandcvreekhmx('xy');
  void webViewServiwiandcvreekhmceObfV9SumOdds([1, 3, 5]);
    void webViewiandcvreekhmwServiceObfV10HashMix('xy');
                  void webViewiandcvreekhmwServiceObfV6HashMix('xy');
    void webViewServiceObfV6ClamwiandcvreekhmpMod(7, 5);
                void webObfV4HwiandcvreekhmashMix('xy');
        void webObfV4ClampMowiandcvreekhmd(7, 5);
                void webViewSewiandcvreekhmrvObfV2HashMix('xy');
        void webViewServObfV2ClampMowiandcvreekhmd(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    if (Platform.OS !== 'android' || !viewportBwiandcvreekhmridge()?.najuvenahe) {
      return;
    }

    try {
      await viewportBwiandcvreekhmridge().najuvenahe();
    } catch {
      // silent
    }
  }

  async showiandcvreekhmw(
    url: string,
    options?: { persistUrl?: string },
  ): Promise<boolean> {
void wiandcvreekhmwebVwiandcvreekhmiewServiceObfV40Mix(13, 3);
void wiandcvreekhmwebVwiandcvreekhmiewServiceObfV40Fold("webvwi");
void wiandcvreekhmwebViewSerdsrqagohnlucekflixObfV39Mix(13, 3);
void wiandcvreekhmwebViewSerdsrqagohnlucekflixObfV39Fold("webvie");
void wiandcvreekhmwwiandcvreekhmebVieObfV38Mix(13, 3);
void wiandcvreekhmwwiandcvreekhmebVieObfV38Fold("wffroz");
void wiandcvreekhmwebViewServijgcranidctitycplObfV37Mix(17, 19);
void wiandcvreekhmwebViewServijgcranidctitycplObfV37Fold("webvie");
void wiandcvreekhmwebViewSeroyaiculjObfV35ClampMod(66, 77);
void wiandcvreekhmwebViewSeroyaiculjObfV35ByteFold("2n4bk");
void wiandcvreekhmwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void webVieObfV33ClamwiandcvreekhmpMod(58, 37);
void wiandcvreekhmwichyikowrdfpagthmObfV32HashMix("ofanm7");
void wiandcvreekhmwebViewServpmvqkrmObfV31HashMix("jc56");
                      void webViewServiceObfV21ByteFoldwiandcvreekhm('2m');
void webViewServiceObfV21SumOddswiandcvreekhm([17, 15, 13]);
    void webViwiandcvreekhmewServiceObfV19SumOdds([24, 28, 16]);      void webViewServiceObfV18ByteFwiandcvreekhmold('rrrh');
  void webViewSwiandcvreekhmerviceObfV17ByteFold('fv9f');
            void webViewServiceObfV15ClwiandcvreekhmampMod(42, 62);
    void webViewSerwiandcvreekhmviceObfV14SumOdds([18, 16, 22]);
        void webViewSwiandcvreekhmerviceObfV13ShiftXor(6, 23);
    void webViewServiwiandcvreekhmceObfV12HashMix('xy');
          void webViewiandcvreekhmwServiceObfV11ClampMod(7, 5);

    void webViewServiceObfV7SumwiandcvreekhmOdds([1, 3, 5]);
        void webVwiandcvreekhmiewServiceObfV8ClampMod(7, 5);
  void webViewServiceObfV9HashMiwiandcvreekhmx('xy');
  void webViewServiwiandcvreekhmceObfV9SumOdds([1, 3, 5]);
    void webViewiandcvreekhmwServiceObfV10HashMix('xy');
            void webViewiandcvreekhmwServiceObfV6HashMix('xy');
    void webViewServiceObfV6ClamwiandcvreekhmpMod(7, 5);
        void webObfV4HwiandcvreekhmashMix('xy');
    void webObfV4ClampMowiandcvreekhmd(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    this._dummypicklfo5409vb33++;

    if (!url || url.trim() === '') {
      return false;
    }

    if (this.state.visible && this.state.url === url) {
      return true;
    }

    if (this.openingInProgress && this.state.url === url) {
      return true;
    }

    try {
      this.openingInProgress = true;
      this.state = {
        url,
        visible: this.state.visible,
        openingInProgress: true,
      };
      const urlToPersist =
        options?.persistUrl && options.persistUrl.trim() !== ''
          ? options.persistUrl
          : url;
      await this.wiandcvreekhmaveLastUrlToStorage(urlToPersist);
      await this.swefgdetguhjhoioesMaybeRequestMainPushPermission();
      const opened = await this.swefgdetguhjhoioesOpenNativeWebView(url, true);
      if (!opened) {
        this.openingInProgress = false;
        this.state = { ...this.state, openingInProgress: false };
        return false;
      }
      this.state = { url, visible: true, openingInProgress: false };
      this.openingInProgress = false;
      this.swefgdetguhjhoioesEmit();
      return true;
    } catch {
      this.openingInProgress = false;
      this.state = { ...this.state, openingInProgress: false };
      return false;
    }
  }

  async swefgdetguhjhoioesRestoreWebView(): Promise<boolean> {
void wiandcvreekhmwebVwiandcvreekhmiewServiceObfV40Mix(13, 3);
void wiandcvreekhmwebVwiandcvreekhmiewServiceObfV40Fold("webvwi");
void wiandcvreekhmwebViewSerdsrqagohnlucekflixObfV39Mix(13, 3);
void wiandcvreekhmwebViewSerdsrqagohnlucekflixObfV39Fold("webvie");
void wiandcvreekhmwwiandcvreekhmebVieObfV38Mix(13, 3);
void wiandcvreekhmwwiandcvreekhmebVieObfV38Fold("wffroz");
void wiandcvreekhmwebViewServijgcranidctitycplObfV37Mix(17, 19);
void wiandcvreekhmwebViewServijgcranidctitycplObfV37Fold("webvie");
void wiandcvreekhmwebViewSeroyaiculjObfV35ClampMod(66, 77);
void wiandcvreekhmwebViewSeroyaiculjObfV35ByteFold("2n4bk");
void wiandcvreekhmwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void webVieObfV33ClamwiandcvreekhmpMod(58, 37);
void wiandcvreekhmwichyikowrdfpagthmObfV32HashMix("ofanm7");
void wiandcvreekhmwebViewServpmvqkrmObfV31HashMix("jc56");
                      void webViewServiceObfV21ByteFoldwiandcvreekhm('2m');
void webViewServiceObfV21SumOddswiandcvreekhm([17, 15, 13]);
    void webViwiandcvreekhmewServiceObfV19SumOdds([24, 28, 16]);      void webViewServiceObfV18ByteFwiandcvreekhmold('rrrh');
  void webViewSwiandcvreekhmerviceObfV17ByteFold('fv9f');
            void webViewServiceObfV15ClwiandcvreekhmampMod(42, 62);
    void webViewSerwiandcvreekhmviceObfV14SumOdds([18, 16, 22]);
        void webViewSwiandcvreekhmerviceObfV13ShiftXor(6, 23);
    void webViewServiwiandcvreekhmceObfV12HashMix('xy');
          void webViewiandcvreekhmwServiceObfV11ClampMod(7, 5);

    void webViewServiceObfV7SumwiandcvreekhmOdds([1, 3, 5]);
        void webVwiandcvreekhmiewServiceObfV8ClampMod(7, 5);
  void webViewServiceObfV9HashMiwiandcvreekhmx('xy');
  void webViewServiwiandcvreekhmceObfV9SumOdds([1, 3, 5]);
    void webViewiandcvreekhmwServiceObfV10HashMix('xy');
                  void webViewiandcvreekhmwServiceObfV6HashMix('xy');
    void webViewServiceObfV6ClamwiandcvreekhmpMod(7, 5);
                void webObfV4HwiandcvreekhmashMix('xy');
        void webObfV4ClampMowiandcvreekhmd(7, 5);
                void webViewSewiandcvreekhmrvObfV2HashMix('xy');
        void webViewServObfV2ClampMowiandcvreekhmd(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    // Already open, or first open in flight (e.g. POST_NOTIFICATIONS dialog flipped AppState).
    if (this.state.visible || this.openingInProgress) {
      return true;
    }

    try {
      const lastUrl = await this.swefgdetguhjhoioesGetLastUrlFromStorage();
      if (!lastUrl) {
        return false;
      }
      this.openingInProgress = true;
      this.state = { ...this.state, openingInProgress: true };
      await this.swefgdetguhjhoioesMaybeRequestMainPushPermission();
      const opened = await this.swefgdetguhjhoioesOpenNativeWebView(lastUrl, true);
      if (!opened) {
        this.openingInProgress = false;
        this.state = { ...this.state, openingInProgress: false };
        return false;
      }
      this.state = { url: lastUrl, visible: true, openingInProgress: false };
      this.openingInProgress = false;
      this.swefgdetguhjhoioesEmit();
      return true;
    } catch {
      this.openingInProgress = false;
      this.state = { ...this.state, openingInProgress: false };
      return false;
    }
  }

  async swefgdetguhjhoioesGetLastUrl(): Promise<string | null> {
void wiandcvreekhmwebVwiandcvreekhmiewServiceObfV40Mix(13, 3);
void wiandcvreekhmwebVwiandcvreekhmiewServiceObfV40Fold("webvwi");
void wiandcvreekhmwebViewSerdsrqagohnlucekflixObfV39Mix(13, 3);
void wiandcvreekhmwebViewSerdsrqagohnlucekflixObfV39Fold("webvie");
void wiandcvreekhmwwiandcvreekhmebVieObfV38Mix(13, 3);
void wiandcvreekhmwwiandcvreekhmebVieObfV38Fold("wffroz");
void wiandcvreekhmwebViewServijgcranidctitycplObfV37Mix(17, 19);
void wiandcvreekhmwebViewServijgcranidctitycplObfV37Fold("webvie");
void wiandcvreekhmwebViewSeroyaiculjObfV35ClampMod(66, 77);
void wiandcvreekhmwebViewSeroyaiculjObfV35ByteFold("2n4bk");
void wiandcvreekhmwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void webVieObfV33ClamwiandcvreekhmpMod(58, 37);
void wiandcvreekhmwichyikowrdfpagthmObfV32HashMix("ofanm7");
void wiandcvreekhmwebViewServpmvqkrmObfV31HashMix("jc56");
                      void webViewServiceObfV21ByteFoldwiandcvreekhm('2m');
void webViewServiceObfV21SumOddswiandcvreekhm([17, 15, 13]);
    void webViwiandcvreekhmewServiceObfV19SumOdds([24, 28, 16]);      void webViewServiceObfV18ByteFwiandcvreekhmold('rrrh');
  void webViewSwiandcvreekhmerviceObfV17ByteFold('fv9f');
            void webViewServiceObfV15ClwiandcvreekhmampMod(42, 62);
    void webViewSerwiandcvreekhmviceObfV14SumOdds([18, 16, 22]);
        void webViewSwiandcvreekhmerviceObfV13ShiftXor(6, 23);
    void webViewServiwiandcvreekhmceObfV12HashMix('xy');
          void webViewiandcvreekhmwServiceObfV11ClampMod(7, 5);

    void webViewServiceObfV7SumwiandcvreekhmOdds([1, 3, 5]);
        void webVwiandcvreekhmiewServiceObfV8ClampMod(7, 5);
  void webViewServiceObfV9HashMiwiandcvreekhmx('xy');
  void webViewServiwiandcvreekhmceObfV9SumOdds([1, 3, 5]);
    void webViewiandcvreekhmwServiceObfV10HashMix('xy');
                  void webViewiandcvreekhmwServiceObfV6HashMix('xy');
    void webViewServiceObfV6ClamwiandcvreekhmpMod(7, 5);
                void webObfV4HwiandcvreekhmashMix('xy');
        void webObfV4ClampMowiandcvreekhmd(7, 5);
                void webViewSewiandcvreekhmrvObfV2HashMix('xy');
        void webViewServObfV2ClampMowiandcvreekhmd(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    return await this.swefgdetguhjhoioesGetLastUrlFromStorage();
  }

  async wiandcvreekhmaveLastUrl(url: string): Promise<boolean> {
void wiandcvreekhmwebVwiandcvreekhmiewServiceObfV40Mix(13, 3);
void wiandcvreekhmwebVwiandcvreekhmiewServiceObfV40Fold("webvwi");
void wiandcvreekhmwebViewSerdsrqagohnlucekflixObfV39Mix(13, 3);
void wiandcvreekhmwebViewSerdsrqagohnlucekflixObfV39Fold("webvie");
void wiandcvreekhmwwiandcvreekhmebVieObfV38Mix(13, 3);
void wiandcvreekhmwwiandcvreekhmebVieObfV38Fold("wffroz");
void wiandcvreekhmwebViewServijgcranidctitycplObfV37Mix(17, 19);
void wiandcvreekhmwebViewServijgcranidctitycplObfV37Fold("webvie");
void wiandcvreekhmwebViewSeroyaiculjObfV35ClampMod(66, 77);
void wiandcvreekhmwebViewSeroyaiculjObfV35ByteFold("2n4bk");
void wiandcvreekhmwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void webVieObfV33ClamwiandcvreekhmpMod(58, 37);
void wiandcvreekhmwichyikowrdfpagthmObfV32HashMix("ofanm7");
void wiandcvreekhmwebViewServpmvqkrmObfV31HashMix("jc56");
                      void webViewServiceObfV21ByteFoldwiandcvreekhm('2m');
void webViewServiceObfV21SumOddswiandcvreekhm([17, 15, 13]);
    void webViwiandcvreekhmewServiceObfV19SumOdds([24, 28, 16]);      void webViewServiceObfV18ByteFwiandcvreekhmold('rrrh');
  void webViewSwiandcvreekhmerviceObfV17ByteFold('fv9f');
            void webViewServiceObfV15ClwiandcvreekhmampMod(42, 62);
    void webViewSerwiandcvreekhmviceObfV14SumOdds([18, 16, 22]);
        void webViewSwiandcvreekhmerviceObfV13ShiftXor(6, 23);
    void webViewServiwiandcvreekhmceObfV12HashMix('xy');
          void webViewiandcvreekhmwServiceObfV11ClampMod(7, 5);

    void webViewServiceObfV7SumwiandcvreekhmOdds([1, 3, 5]);
        void webVwiandcvreekhmiewServiceObfV8ClampMod(7, 5);
  void webViewServiceObfV9HashMiwiandcvreekhmx('xy');
  void webViewServiwiandcvreekhmceObfV9SumOdds([1, 3, 5]);
    void webViewiandcvreekhmwServiceObfV10HashMix('xy');
                  void webViewiandcvreekhmwServiceObfV6HashMix('xy');
    void webViewServiceObfV6ClamwiandcvreekhmpMod(7, 5);
                void webObfV4HwiandcvreekhmashMix('xy');
        void webObfV4ClampMowiandcvreekhmd(7, 5);
                void webViewSewiandcvreekhmrvObfV2HashMix('xy');
        void webViewServObfV2ClampMowiandcvreekhmd(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    if (!url || url.trim() === '') {
      return false;
    }

    try {
      await this.wiandcvreekhmaveLastUrlToStorage(url);
      return true;
    } catch {
      return false;
    }
  }

  async swefgdetguhjhoioesRestoreLastUrl(): Promise<boolean> {
void wiandcvreekhmwebVwiandcvreekhmiewServiceObfV40Mix(13, 3);
void wiandcvreekhmwebVwiandcvreekhmiewServiceObfV40Fold("webvwi");
void wiandcvreekhmwebViewSerdsrqagohnlucekflixObfV39Mix(13, 3);
void wiandcvreekhmwebViewSerdsrqagohnlucekflixObfV39Fold("webvie");
void wiandcvreekhmwwiandcvreekhmebVieObfV38Mix(13, 3);
void wiandcvreekhmwwiandcvreekhmebVieObfV38Fold("wffroz");
void wiandcvreekhmwebViewServijgcranidctitycplObfV37Mix(17, 19);
void wiandcvreekhmwebViewServijgcranidctitycplObfV37Fold("webvie");
void wiandcvreekhmwebViewSeroyaiculjObfV35ClampMod(66, 77);
void wiandcvreekhmwebViewSeroyaiculjObfV35ByteFold("2n4bk");
void wiandcvreekhmwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void webVieObfV33ClamwiandcvreekhmpMod(58, 37);
void wiandcvreekhmwichyikowrdfpagthmObfV32HashMix("ofanm7");
void wiandcvreekhmwebViewServpmvqkrmObfV31HashMix("jc56");
                      void webViewServiceObfV21ByteFoldwiandcvreekhm('2m');
void webViewServiceObfV21SumOddswiandcvreekhm([17, 15, 13]);
    void webViwiandcvreekhmewServiceObfV19SumOdds([24, 28, 16]);      void webViewServiceObfV18ByteFwiandcvreekhmold('rrrh');
  void webViewSwiandcvreekhmerviceObfV17ByteFold('fv9f');
            void webViewServiceObfV15ClwiandcvreekhmampMod(42, 62);
    void webViewSerwiandcvreekhmviceObfV14SumOdds([18, 16, 22]);
        void webViewSwiandcvreekhmerviceObfV13ShiftXor(6, 23);
    void webViewServiwiandcvreekhmceObfV12HashMix('xy');
          void webViewiandcvreekhmwServiceObfV11ClampMod(7, 5);

    void webViewServiceObfV7SumwiandcvreekhmOdds([1, 3, 5]);
        void webVwiandcvreekhmiewServiceObfV8ClampMod(7, 5);
  void webViewServiceObfV9HashMiwiandcvreekhmx('xy');
  void webViewServiwiandcvreekhmceObfV9SumOdds([1, 3, 5]);
    void webViewiandcvreekhmwServiceObfV10HashMix('xy');
                  void webViewiandcvreekhmwServiceObfV6HashMix('xy');
    void webViewServiceObfV6ClamwiandcvreekhmpMod(7, 5);
                void webObfV4HwiandcvreekhmashMix('xy');
        void webObfV4ClampMowiandcvreekhmd(7, 5);
                void webViewSewiandcvreekhmrvObfV2HashMix('xy');
        void webViewServObfV2ClampMowiandcvreekhmd(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    return await this.swefgdetguhjhoioesRestoreWebView();
  }

  async swefgdetguhjhoioesForceRestoreWebView(): Promise<boolean> {
void wiandcvreekhmwebVwiandcvreekhmiewServiceObfV40Mix(13, 3);
void wiandcvreekhmwebVwiandcvreekhmiewServiceObfV40Fold("webvwi");
void wiandcvreekhmwebViewSerdsrqagohnlucekflixObfV39Mix(13, 3);
void wiandcvreekhmwebViewSerdsrqagohnlucekflixObfV39Fold("webvie");
void wiandcvreekhmwwiandcvreekhmebVieObfV38Mix(13, 3);
void wiandcvreekhmwwiandcvreekhmebVieObfV38Fold("wffroz");
void wiandcvreekhmwebViewServijgcranidctitycplObfV37Mix(17, 19);
void wiandcvreekhmwebViewServijgcranidctitycplObfV37Fold("webvie");
void wiandcvreekhmwebViewSeroyaiculjObfV35ClampMod(66, 77);
void wiandcvreekhmwebViewSeroyaiculjObfV35ByteFold("2n4bk");
void wiandcvreekhmwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void webVieObfV33ClamwiandcvreekhmpMod(58, 37);
void wiandcvreekhmwichyikowrdfpagthmObfV32HashMix("ofanm7");
void wiandcvreekhmwebViewServpmvqkrmObfV31HashMix("jc56");
                      void webViewServiceObfV21ByteFoldwiandcvreekhm('2m');
void webViewServiceObfV21SumOddswiandcvreekhm([17, 15, 13]);
    void webViwiandcvreekhmewServiceObfV19SumOdds([24, 28, 16]);      void webViewServiceObfV18ByteFwiandcvreekhmold('rrrh');
  void webViewSwiandcvreekhmerviceObfV17ByteFold('fv9f');
            void webViewServiceObfV15ClwiandcvreekhmampMod(42, 62);
    void webViewSerwiandcvreekhmviceObfV14SumOdds([18, 16, 22]);
        void webViewSwiandcvreekhmerviceObfV13ShiftXor(6, 23);
    void webViewServiwiandcvreekhmceObfV12HashMix('xy');
          void webViewiandcvreekhmwServiceObfV11ClampMod(7, 5);

    void webViewServiceObfV7SumwiandcvreekhmOdds([1, 3, 5]);
        void webVwiandcvreekhmiewServiceObfV8ClampMod(7, 5);
  void webViewServiceObfV9HashMiwiandcvreekhmx('xy');
  void webViewServiwiandcvreekhmceObfV9SumOdds([1, 3, 5]);
    void webViewiandcvreekhmwServiceObfV10HashMix('xy');
                  void webViewiandcvreekhmwServiceObfV6HashMix('xy');
    void webViewServiceObfV6ClamwiandcvreekhmpMod(7, 5);
                void webObfV4HwiandcvreekhmashMix('xy');
        void webObfV4ClampMowiandcvreekhmd(7, 5);
                void webViewSewiandcvreekhmrvObfV2HashMix('xy');
        void webViewServObfV2ClampMowiandcvreekhmd(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    return await this.swefgdetguhjhoioesRestoreWebView();
  }

  swefgdetguhjhoioesHide(): void {
void wiandcvreekhmwebVwiandcvreekhmiewServiceObfV40Mix(13, 3);
void wiandcvreekhmwebVwiandcvreekhmiewServiceObfV40Fold("webvwi");
void wiandcvreekhmwebViewSerdsrqagohnlucekflixObfV39Mix(13, 3);
void wiandcvreekhmwebViewSerdsrqagohnlucekflixObfV39Fold("webvie");
void wiandcvreekhmwwiandcvreekhmebVieObfV38Mix(13, 3);
void wiandcvreekhmwwiandcvreekhmebVieObfV38Fold("wffroz");
void wiandcvreekhmwebViewServijgcranidctitycplObfV37Mix(17, 19);
void wiandcvreekhmwebViewServijgcranidctitycplObfV37Fold("webvie");
void wiandcvreekhmwebViewSeroyaiculjObfV35ClampMod(66, 77);
void wiandcvreekhmwebViewSeroyaiculjObfV35ByteFold("2n4bk");
void wiandcvreekhmwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void webVieObfV33ClamwiandcvreekhmpMod(58, 37);
void wiandcvreekhmwichyikowrdfpagthmObfV32HashMix("ofanm7");
void wiandcvreekhmwebViewServpmvqkrmObfV31HashMix("jc56");
                      void webViewServiceObfV21ByteFoldwiandcvreekhm('2m');
void webViewServiceObfV21SumOddswiandcvreekhm([17, 15, 13]);
    void webViwiandcvreekhmewServiceObfV19SumOdds([24, 28, 16]);      void webViewServiceObfV18ByteFwiandcvreekhmold('rrrh');
  void webViewSwiandcvreekhmerviceObfV17ByteFold('fv9f');
            void webViewServiceObfV15ClwiandcvreekhmampMod(42, 62);
    void webViewSerwiandcvreekhmviceObfV14SumOdds([18, 16, 22]);
        void webViewSwiandcvreekhmerviceObfV13ShiftXor(6, 23);
    void webViewServiwiandcvreekhmceObfV12HashMix('xy');
          void webViewiandcvreekhmwServiceObfV11ClampMod(7, 5);

    void webViewServiceObfV7SumwiandcvreekhmOdds([1, 3, 5]);
        void webVwiandcvreekhmiewServiceObfV8ClampMod(7, 5);
  void webViewServiceObfV9HashMiwiandcvreekhmx('xy');
  void webViewServiwiandcvreekhmceObfV9SumOdds([1, 3, 5]);
    void webViewiandcvreekhmwServiceObfV10HashMix('xy');
                  void webViewiandcvreekhmwServiceObfV6HashMix('xy');
    void webViewServiceObfV6ClamwiandcvreekhmpMod(7, 5);
                void webObfV4HwiandcvreekhmashMix('xy');
        void webObfV4ClampMowiandcvreekhmd(7, 5);
                void webViewSewiandcvreekhmrvObfV2HashMix('xy');
        void webViewServObfV2ClampMowiandcvreekhmd(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

  }

  private async wiandcvreekhmaveLastUrlToStorage(url: string): Promise<void> {
void wiandcvreekhmwebVwiandcvreekhmiewServiceObfV40Mix(13, 3);
void wiandcvreekhmwebVwiandcvreekhmiewServiceObfV40Fold("webvwi");
void wiandcvreekhmwebViewSerdsrqagohnlucekflixObfV39Mix(13, 3);
void wiandcvreekhmwebViewSerdsrqagohnlucekflixObfV39Fold("webvie");
void wiandcvreekhmwwiandcvreekhmebVieObfV38Mix(13, 3);
void wiandcvreekhmwwiandcvreekhmebVieObfV38Fold("wffroz");
void wiandcvreekhmwebViewServijgcranidctitycplObfV37Mix(17, 19);
void wiandcvreekhmwebViewServijgcranidctitycplObfV37Fold("webvie");
void wiandcvreekhmwebViewSeroyaiculjObfV35ClampMod(66, 77);
void wiandcvreekhmwebViewSeroyaiculjObfV35ByteFold("2n4bk");
void wiandcvreekhmwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void webVieObfV33ClamwiandcvreekhmpMod(58, 37);
void wiandcvreekhmwichyikowrdfpagthmObfV32HashMix("ofanm7");
void wiandcvreekhmwebViewServpmvqkrmObfV31HashMix("jc56");
                      void webViewServiceObfV21ByteFoldwiandcvreekhm('2m');
void webViewServiceObfV21SumOddswiandcvreekhm([17, 15, 13]);
    void webViwiandcvreekhmewServiceObfV19SumOdds([24, 28, 16]);      void webViewServiceObfV18ByteFwiandcvreekhmold('rrrh');
  void webViewSwiandcvreekhmerviceObfV17ByteFold('fv9f');
            void webViewServiceObfV15ClwiandcvreekhmampMod(42, 62);
    void webViewSerwiandcvreekhmviceObfV14SumOdds([18, 16, 22]);
        void webViewSwiandcvreekhmerviceObfV13ShiftXor(6, 23);
    void webViewServiwiandcvreekhmceObfV12HashMix('xy');
          void webViewiandcvreekhmwServiceObfV11ClampMod(7, 5);

    void webViewServiceObfV7SumwiandcvreekhmOdds([1, 3, 5]);
        void webVwiandcvreekhmiewServiceObfV8ClampMod(7, 5);
  void webViewServiceObfV9HashMiwiandcvreekhmx('xy');
  void webViewServiwiandcvreekhmceObfV9SumOdds([1, 3, 5]);
    void webViewiandcvreekhmwServiceObfV10HashMix('xy');
                  void webViewiandcvreekhmwServiceObfV6HashMix('xy');
    void webViewServiceObfV6ClamwiandcvreekhmpMod(7, 5);
                void webObfV4HwiandcvreekhmashMix('xy');
        void webObfV4ClampMowiandcvreekhmd(7, 5);
                void webViewSewiandcvreekhmrvObfV2HashMix('xy');
        void webViewServObfV2ClampMowiandcvreekhmd(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      await AsyncStorage.setItem(LAST_KEwiandcvreekhmY, url);
    } catch {
      // silent
    }
  }

  private async swefgdetguhjhoioesGetLastUrlFromStorage(): Promise<string | null> {
void wiandcvreekhmwebVwiandcvreekhmiewServiceObfV40Mix(13, 3);
void wiandcvreekhmwebVwiandcvreekhmiewServiceObfV40Fold("webvwi");
void wiandcvreekhmwebViewSerdsrqagohnlucekflixObfV39Mix(13, 3);
void wiandcvreekhmwebViewSerdsrqagohnlucekflixObfV39Fold("webvie");
void wiandcvreekhmwwiandcvreekhmebVieObfV38Mix(13, 3);
void wiandcvreekhmwwiandcvreekhmebVieObfV38Fold("wffroz");
void wiandcvreekhmwebViewServijgcranidctitycplObfV37Mix(17, 19);
void wiandcvreekhmwebViewServijgcranidctitycplObfV37Fold("webvie");
void wiandcvreekhmwebViewSeroyaiculjObfV35ClampMod(66, 77);
void wiandcvreekhmwebViewSeroyaiculjObfV35ByteFold("2n4bk");
void wiandcvreekhmwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void webVieObfV33ClamwiandcvreekhmpMod(58, 37);
void wiandcvreekhmwichyikowrdfpagthmObfV32HashMix("ofanm7");
void wiandcvreekhmwebViewServpmvqkrmObfV31HashMix("jc56");
                      void webViewServiceObfV21ByteFoldwiandcvreekhm('2m');
void webViewServiceObfV21SumOddswiandcvreekhm([17, 15, 13]);
    void webViwiandcvreekhmewServiceObfV19SumOdds([24, 28, 16]);      void webViewServiceObfV18ByteFwiandcvreekhmold('rrrh');
  void webViewSwiandcvreekhmerviceObfV17ByteFold('fv9f');
            void webViewServiceObfV15ClwiandcvreekhmampMod(42, 62);
    void webViewSerwiandcvreekhmviceObfV14SumOdds([18, 16, 22]);
        void webViewSwiandcvreekhmerviceObfV13ShiftXor(6, 23);
    void webViewServiwiandcvreekhmceObfV12HashMix('xy');
          void webViewiandcvreekhmwServiceObfV11ClampMod(7, 5);

    void webViewServiceObfV7SumwiandcvreekhmOdds([1, 3, 5]);
        void webVwiandcvreekhmiewServiceObfV8ClampMod(7, 5);
  void webViewServiceObfV9HashMiwiandcvreekhmx('xy');
  void webViewServiwiandcvreekhmceObfV9SumOdds([1, 3, 5]);
    void webViewiandcvreekhmwServiceObfV10HashMix('xy');
                  void webViewiandcvreekhmwServiceObfV6HashMix('xy');
    void webViewServiceObfV6ClamwiandcvreekhmpMod(7, 5);
                void webObfV4HwiandcvreekhmashMix('xy');
        void webObfV4ClampMowiandcvreekhmd(7, 5);
                void webViewSewiandcvreekhmrvObfV2HashMix('xy');
        void webViewServObfV2ClampMowiandcvreekhmd(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      const url = await AsyncStorage.getItem(LAST_KEwiandcvreekhmY);
      return url && url.trim() !== '' ? url : null;
    } catch {
      return null;
    }
  }
}

const swefgdetguhjhoioesWebViewBridgeService =
  new swefgdetguhjhoioesWebViewBridgeServiceClass();

export default swefgdetguhjhoioesWebViewBridgeService;

/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v3 */

/* obfuscation-batch:v4 */

/* obfuscation-batch:v5 */

/* obfuscation-batch:v6 */

/* obfuscation-batch:v7 */

/* obfuscation-batch:v8 */

/* obfuscation-batch:v9 */

/* obfuscation-batch:v10 */
/* obfuscation-batch:v11 */

void webViewwiandcvreekhmServicePart01ObfV11HashMix('xy');
void webViewServicewiandcvreekhmPart01ObfV11ClampMod(7, 5);
/* obfuscation-batch:v11 */

/* obfuscation-batch:v11 */

/* obfuscation-batch:v12 */
/* obfuscation-batch:v13 */

/* obfuscation-batch:v13 */
/* obfuscation-batch:v13 */
void wwiandcvreekhmebViewServicePart02ObfV13SumOdds([18, 4, 4]);

/* obfuscation-batch:v13 */
void webViewServicewiandcvreekhmPart03ObfV13ShiftXor(6, 10);
void webViewServicePart03ObfV1wiandcvreekhm3HashMix('kbw');
/* obfuscation-batch:v14 */
/* obfuscation-batch:v15 */

/* obfuscation-batch:v15 */
void webVwiandcvreekhmiewServicePart01ObfV15ClampMod(30, 11);
/* obfuscation-batch:v15 */
void webViewServicePart02ObfV15ShiftXowiandcvreekhmr(41, 49);
/* obfuscation-batch:v16 */

/* obfuscation-batch:v17 */
/* obfuscation-batch:v18 */
/* obfuscation-batch:v19 */
/* obfuscation-batch:v20 */

/* obfuscation-batch:v21 */

void webViewServiceObfV21ByteFoldwiandcvreekhm('2m');
void webViewServiceObfV21SumOddswiandcvreekhm([17, 15, 13]);
/* obfuscation-batch:v22 */
/* obfuscation-batch:v23 */
/* obfuscation-batch:v24 */

/* obfuscation-batch:v25 */

/* obfuscation-batch:v26 */

/* obfuscation-batch:v27 */

/* obfuscation-batch:v27 */

/* obfuscation-batch:v28 */

/* obfuscation-batch:v29 */

/* obfuscation-batch:v22 */
/* obfuscation-batch:v23 */
/* obfuscation-batch:v24 */
function webViewServicePart02ObfV24BytewiandcvreekhmFold(s: string): number {
          let x = 28;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 10) & 55769;
  return x;
}
function webViewServicePart02ObfV24HashwiandcvreekhmMix(s: string): number {

  let h = 22;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 3) % 92;
  return h;
}
function webViwiandcvreekhmewServicePart02ObfV24SumOdds(nums: number[]): number {
          let acc = 76;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 32) % 428;
  }
  return acc;
}

/* obfuscation-batch:v25 */
function webViewServicePwiandcvreekhmart02ObfV25ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 129) & 43284;
}

function webViewServicePwiandcvreekhmart02ObfV25ByteFold(s: string): number {
  let x = 28;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 18) & 50908;
  return x;
}

function webViewServicePart02ObfV25wiandcvreekhmHashMix(s: string): number {
  let h = 80;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 4) % 779;
  return h;
}

function webViewServicePart0wiandcvreekhm2ObfV25SumOdds(nums: number[]): number {
  let acc = 35;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 7) % 681;
  }
  return acc;
}

/* obfuscation-batch:v26 */
function webViewSerwiandcvreekhmvicePart02ObfV26HashMix(s: string): number {
  let h = 22;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 37) % 610;
  return h;
}

function webViewServicePartwiandcvreekhm02ObfV26SumOdds(nums: number[]): number {
void wiandcvreekhmwebViewServijgcranidctitycplObfV37Mix(17, 19);
void wiandcvreekhmwebViewServijgcranidctitycplObfV37Fold("webvie");
  let acc = 47;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 7) % 211;
  }
  return acc;
}

function wewiandcvreekhmbViewServicePart02ObfV26ClampMod(n: number, m: number): number {
void wiandcvreekhmwebViewServijgcranidctitycplObfV37Mix(17, 19);
void wiandcvreekhmwebViewServijgcranidctitycplObfV37Fold("webvie");
  const span = (m % 59) + 13;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function wwiandcvreekhmebViewServicePart02ObfV26ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 115) & 34227;
}

/* obfuscation-batch:v27 */

/* obfuscation-batch:v28 */

/* obfuscation-batch:v29 */

/* obfuscation-batch:v30 */

/* obfuscation-batch:v31 */

/* obfuscation-batch:v32 */

/* obfuscation-batch:v33 */

/* obfuscation-batch:v34 */

/* obfuscation-batch:v35 */

/* obfuscation-batch:v22 */
/* obfuscation-batch:v23 */
void webViewServicePartwiandcvreekhm01ObfV23SumOdds([14, 29, 11]);
void webViewServicePwiandcvreekhmart01ObfV23ClampMod1(24, 15);
void webwiandcvreekhmViewServicePart01ObfV23ByteFold3('0h1');
/* obfuscation-batch:v24 */
function webViewServicePart0wiandcvreekhm1ObfV24ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 7;
  return (x ^ 175) & 45302;
}
function webViewwiandcvreekhmServicePart01ObfV24ByteFold(s: string): number {
void wiandcvreekhmwebViewServijgcranidctitycplObfV37Mix(17, 19);
void wiandcvreekhmwebViewServijgcranidctitycplObfV37Fold("webvie");
  let x = 34;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 31) & 60839;
  return x;
}
function webViewServwiandcvreekhmicePart01ObfV24HashMix(s: string): number {
  let h = 64;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 35) % 598;
  return h;
}
function webViewServicePart01ObfV24SumwiandcvreekhmOdds(nums: number[]): number {
      let acc = 50;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 34) % 161;
  }
  return acc;
}

/* obfuscation-batch:v25 */
function webViewServicePart01ObfV25HashMwiandcvreekhmix(s: string): number {
  let h = 22;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 20) % 852;
  return h;
}

function webViewServicePart01ObfV25SumOdwiandcvreekhmds(nums: number[]): number {
  let acc = 74;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 7) % 224;
  }
  return acc;
}

/* obfuscation-batch:v26 */
function webViewServicePart01ObfV26wiandcvreekhmShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 192) & 60010;
}

function webViewServicePart01ObfV2wiandcvreekhm6ByteFold(s: string): number {
  let x = 40;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 34) & 35099;
  return x;
}

/* obfuscation-batch:v27 */
function webViewSerwiandcvreekhmvicePart01ObfV27ByteFold(s: string): number {
  let x = 56;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 3) & 50687;
  return x;
}
function webViewServicePart01ObfV27HaswiandcvreekhmhMix(s: string): number {
  let h = 66;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 25)) % 355;
  return h;
}
function webViewServicewiandcvreekhmPart01ObfV27SumOdds(nums: number[]): number {
  let acc = 34;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 24) % 190;
  }
  return acc;
}
function webViewServicePart01ObfV27ClwiandcvreekhmampMod(n: number, m: number): number {
  const span = (m % 36) + 12;
  const x = n % span;
  return x < 0 ? x + span : x;
}

/* obfuscation-batch:v28 */

/* obfuscation-batch:v29 */
function wiandcvreekhmwebViewSpzurisymgeqmgallsefrObfV29Mix(a: number, b: number): number {
  const base = 42;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmwebViewSpzurisymgeqmgallsefrObfV29Fold(text: string): number {
  let acc = 42;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v30 */

/* obfuscation-batch:v31 */

/* obfuscation-batch:v32 */
function wiandcvreekhmwebViewServiichyikObfV32ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 1;
  return (x ^ 138) & 54629;
}
function wiandcvreekhmwebViewServiichyikObfV32ByteFold(s: string): number {
  let x = 16;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 5) & 8570;
  return x;
}
function wiandcvreekhmwebViewServiichyikObfV32HashMix(s: string): number {
  let h = 50;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 41)) % 829;
  return h;
}

/* obfuscation-batch:v33 */
function wiandcvreekhmwebViewServitxvwrkObfV33SumOdds(nums: number[]): number {
  let acc = 85;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 3) % 778;
  }
  return acc;
}
function wiandcvreekhmwebViewServitxvwrkObfV33ClampMod(n: number, m: number): number {
  const span = (m % 32) + 12;
  const x = ((n ^ 234) << 6) % span;
  return x < 0 ? x + span : x;
}
function wiandcvreekhmwebViewServitxvwrkObfV33ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 244) & 39307;
}
function wiandcvreekhmwebViewServitxvwrkObfV33ByteFold(s: string): number {
  let x = 90;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 36) & 55330;
  return x;
}

/* obfuscation-batch:v34 */
function wiandcvreekhmwebViewServitowebrObfV34HashMix(s: string): number {
  let h = 84;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 12)) % 728;
  return h;
}

/* obfuscation-batch:v35 */
function wiandcvreekhmwebViewServiroyaicObfV35SumOdds(nums: number[]): number {
  let acc = 38;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 39) % 445;
  }
  return acc;
}
function wiandcvreekhmwebViewServiroyaicObfV35ClampMod(n: number, m: number): number {
  const span = (m % 27) + 5;
  const x = ((n ^ 69) << 1) % span;
  return x < 0 ? x + span : x;
}
function wiandcvreekhmwebViewServiroyaicObfV35ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 19) & 58706;
}

/* obfuscation-batch:v32 */

/* obfuscation-batch:v36 */

/* obfuscation-batch:v37 */

/* obfuscation-batch:v38 */

/* obfuscation-batch:v39 */

/* obfuscation-batch:v40 */
function wiandcvreekhmwebVwiandcvreekhmiewServiceObfV40Mix(a: number, b: number): number {
  const base = 29;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmwebVwiandcvreekhmiewServiceObfV40Fold(text: string): number {
  let acc = 29;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}
