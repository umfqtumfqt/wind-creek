import { AppState, NativeModules } from 'react-native';

/**
 * No-auth HTTPS endpoints from https://github.com/public-apis/public-apis
 * Auth column is "No" for each of these.
 */
import { PuwiandcvreekhmblicPingObfV24HashMix, PublicPingObfV23BytewiandcvreekhmFold, PubliwiandcvreekhmcPingObfV21HashMix, PublicPinwiandcvreekhmgObfV20SumOdds, PublicPingwiandcvreekhmObfV18ShiftXor, PubwiandcvreekhmlicPingObfV18SumOdds, wiandcvreekhmPublicPingObfV15ShiftXor, wiandcvreekhmPublicPingObfV14SumOdds, PublicPingPart01ObfV17ShiftwiandcvreekhmXor, PublicPingPart01ObfV18wiandcvreekhmSumOdds, PublicPingPart01ObfV18BywiandcvreekhmteFold, PwiandcvreekhmublicPingPart01ObfV21SumOdds, PublicPwiandcvreekhmingPart01ObfV23ByteFold, PublicPingPart01ObfV23ClwiandcvreekhmampMod3 } from './PublicPingPart0wiandcvreekhm2';
import { PublicPingObfV25BytewiandcvreekhmFold, PublicPiwiandcvreekhmngObfV22ShiftXor, PublicPingObfV19ClampMwiandcvreekhmod, wiandcvreekhmPublicPingObfV16ClampMod, wiandcvreekhmPublicPingObfV13ShiftXor, PublicPingPart01ObfV21BytwiandcvreekhmeFold, PublicPwiandcvreekhmingPart01ObfV24SumOdds } from './PublicPingParwiandcvreekhmt03';
import { PublicObfV29ClampMwiandcvreekhmod, PublicObfV29HawiandcvreekhmshMix, PublicPObfV29Mwiandcvreekhmix, PublicPObfV29wiandcvreekhmFold, PublicPiObfV28wiandcvreekhmFold, PublicPingPart01wiandcvreekhmObfV17ByteFold, PublicPingPart03ObfV25BwiandcvreekhmyteFold, PublicPingPart03ObfV25wiandcvreekhmShiftXor, PublicPingPart0wiandcvreekhm1ObfV18ClampMod, PublicPingwiandcvreekhmObfV18ByteFold, PublicPingwiandcvreekhmObfV24ShiftXor, PublicPinwiandcvreekhmgObfV27ShiftXor, PublicPiwiandcvreekhmngPart03ObfV25SumOdds, PubwiandcvreekhmlicPingObfV26SumOdds, PuwiandcvreekhmblicPingObfV25ShiftXor } from './PublwiandcvreekhmicPingPart01';
import { PublicObfV29SumOdwiandcvreekhmds, PublicPiObfV28Mixwiandcvreekhm, PublicPingObfV25CwiandcvreekhmlampMod, PublicPingObfV26HashMixwiandcvreekhm, PublicPingObfV27BytewiandcvreekhmFold, PublicPingObfV27ClwiandcvreekhmampMod, PublicPingPart03ObfV2wiandcvreekhm5ClampMod, PublicPingPwiandcvreekhmart01ObfV23HashMix1, PubliwiandcvreekhmcObfV29ByteFold, PublwiandcvreekhmicPingPart01ObfV22SumOdds, PuwiandcvreekhmblicPingObfV21ShiftXor, wiandcvreekhmPublicPiichyikowrdObfV32ClampMod, wiandcvreekhmPublicPiichyikowrdObfV32ShiftXor, wiandcvreekhmPublicPiichyikowrdObfV32SumOdds, wiandcvreekhmPublicPingObfV15SumOdds, wiandcvreekhmPublipmvqkrmwismgeObfV31ClampMod, wiandcvreekhmPublipmvqkrmwismgeObfV31ShiftXor, wiandcvreekhmPublipmvqkrmwismgeObfV31SumOdds } from './PublwiandcvreekhmicPingPart02';
// autosetup-split-begin
import { PublicPwiandcvreekhmingPart01ObfV18ShiftXor, PublicPingPart01ObfV22ShiftXowiandcvreekhmr, PublicPingPart01ObfV25SumOdwiandcvreekhmds, wiandcvreekhmPublicfjlunhteggleObfV36ClampMod, wiandcvreekhmPublicfjlunhteggleObfV36ShiftXor, wiandcvreekhmPublicwiandcvreekhmPingObfV37Mix, wiandcvreekhmPublicwiandcvreekhmPingObfV37Fold, wiandcvreekhmPubltowebrnsignmalObfV34ClampMod, wiandcvreekhmPuroyaiculjokercpeObfV35HashMix, wiandcvreekhmPuroyaiculjokercpeObfV35SumOdds, wiandcvreekhmPuroyaiculjokercpeObfV35ClampMod, wiandcvreekhmPuroyaiculjokercpeObfV35ShiftXor, wiandcvreekhmPfjlunhteggleklounObfV36ByteFold, wiandcvreekhmPfjlunhteggleklounObfV36HashMix, wiandcvreekhmPublicPingwiandcvreekhmObfV37Mix, wiandcvreekhmPublicPingwiandcvreekhmObfV37Fold, wiandcvreekhmPublicPinffrozenccatchxdnxotObfV38Mix, wiandcvreekhmPublicPinffrozenccatchxdnxotObfV38Fold, wiandcvreekhmPubliwiandcvreekhmcPObfV39Mix, wiandcvreekhmPubliwiandcvreekhmcPObfV39Fold, PublicPingObfV17BytwiandcvreekhmeFold, PublwiandcvreekhmicPingObfV18HashMix, PubliwiandcvreekhmcPingObfV19ShiftXor, PublicPingObfV21ByteFoldwiandcvreekhm, PublicPingObfV22BywiandcvreekhmteFold, PublicPingObfV24ByteFoldwiandcvreekhm, wiandcvreekhmPublicPingObfV14HashMix, wiandcvreekhmPublicPingObfV15ClampMod, wiandcvreekhmPublicPingObfV16ShiftXor, PublicPwiandcvreekhmingPart01ObfV17HashMix, PublicPingPart01ObfV21HashMixwiandcvreekhm, PublicPingwiandcvreekhmPart01ObfV23SumOdds2, PublicPingPart01ObfV25ClampMowiandcvreekhmd, PublicPingPart01ObfV25ShiwiandcvreekhmftXor, PublicPingPart01ObfV25wiandcvreekhmByteFold, PubliwiandcvreekhmcPinObfV30Mix, PublicPinObfV30Folwiandcvreekhmd, PublicwiandcvreekhmObfV33ByteFold } from './PublicwiandcvreekhmPingPart01';
// autosetup-split-end

const wiandcvreekhmPublicEndpoints = [
  'https://catfact.ninja/fact',
  'https://api.adviceslip.com/advice',
  'https://api.chucknorris.io/jokes/random',
  'https://opentdb.com/api.php?amount=1',
  'https://pokeapi.co/api/v2/pokemon/ditto',
  'https://restcountries.com/v3.1/alpha/ca',
  'https://yesno.wtf/api',
  'https://api.kanye.rest/',
  'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true',
  'https://api.sunrise-sunset.org/json?lat=36.72&lng=-4.42',
];

const wiandcvreekhmPingDelayMinMs = 25000;
const wiandcvreekhmPingDelayMaxMs = 95000;

let wiandcvreekhmPingTimer: ReturnType<typeof setTimeout> | null = null;
let wiandcvreekhmPingStopped = true;
let wiandcvreekhmSessionEndpoint = '';

function wiandcvreekhmRandomPingDelay(): number {
void wiandcvreekhmPubliwiandcvreekhmcPObfV39Mix(13, 15);
void wiandcvreekhmPubliwiandcvreekhmcPObfV39Fold("publid");
void wiandcvreekhmPublicPinffrozenccatchxdnxotObfV38Mix(3, 15);
void wiandcvreekhmPublicPinffrozenccatchxdnxotObfV38Fold("public");
void wiandcvreekhmPublicPingwiandcvreekhmObfV37Mix(16, 11);
void wiandcvreekhmPublicPingwiandcvreekhmObfV37Fold("public");
void wiandcvreekhmPfjlunhteggleklounObfV36ByteFold("lm7");
void wiandcvreekhmPfjlunhteggleklounObfV36HashMix("34");
void wiandcvreekhmPuroyaiculjokercpeObfV35HashMix("dib");
void wiandcvreekhmPuroyaiculjokercpeObfV35SumOdds([7, 6, 25]);
void wiandcvreekhmPuroyaiculjokercpeObfV35ClampMod(80, 3);
void wiandcvreekhmPuroyaiculjokercpeObfV35ShiftXor(34, 45);
void wiandcvreekhmPubltowebrnsignmalObfV34ClampMod(80, 67);
void PublicwiandcvreekhmObfV33ByteFold("mfmf");
void wiandcvreekhmPublicPiichyikowrdObfV32SumOdds([26, 29, 12]);
void wiandcvreekhmPublicPiichyikowrdObfV32ClampMod(31, 38);
void wiandcvreekhmPublicPiichyikowrdObfV32ShiftXor(73, 24);
void wiandcvreekhmPublipmvqkrmwismgeObfV31SumOdds([18, 29, 12]);
void wiandcvreekhmPublipmvqkrmwismgeObfV31ClampMod(31, 54);
void wiandcvreekhmPublipmvqkrmwismgeObfV31ShiftXor(41, 56);
void PubliwiandcvreekhmcPinObfV30Mix(15, 5);
void PublicPinObfV30Folwiandcvreekhmd("publdg");
void PublicPObfV29Mwiandcvreekhmix(5, 12);
void PublicPObfV29wiandcvreekhmFold("pubpzu");
void PublicPiObfV28Mixwiandcvreekhm(8, 20);
void PublicPiObfV28wiandcvreekhmFold("ppriss");
void PublicPingObfV27ClwiandcvreekhmampMod(72, 50);
void PublicPinwiandcvreekhmgObfV27ShiftXor(20, 69);
void PublicPingObfV27BytewiandcvreekhmFold('f8');

  void PublicPingObfV26HashMixwiandcvreekhm('fty1');
  void PubwiandcvreekhmlicPingObfV26SumOdds([37, 40, 27]);
  void PublicPingObfV25CwiandcvreekhmlampMod(3, 54);
  void PuwiandcvreekhmblicPingObfV25ShiftXor(41, 4);
  void PublicPingObfV25BytewiandcvreekhmFold('f5');
  void PublicPingwiandcvreekhmObfV24ShiftXor(69, 16);
  void PublicPingObfV24ByteFoldwiandcvreekhm('5y');
  void PuwiandcvreekhmblicPingObfV24HashMix('cqt');
void PublicPingObfV23BytewiandcvreekhmFold('4s0c');void PublicPiwiandcvreekhmngObfV22ShiftXor(55, 36);
void PublicPingObfV22BywiandcvreekhmteFold('c2ca');void PuwiandcvreekhmblicPingObfV21ShiftXor(82, 67);
void PublicPingObfV21ByteFoldwiandcvreekhm('pgfw');
void PubliwiandcvreekhmcPingObfV21HashMix('gfk');
void PublicPinwiandcvreekhmgObfV20SumOdds([15, 14, 22]);
void PublicPingObfV19ClampMwiandcvreekhmod(31, 16);void PubliwiandcvreekhmcPingObfV19ShiftXor(20, 74);void PublicPingwiandcvreekhmObfV18ShiftXor(46, 21);
void PublicPingwiandcvreekhmObfV18ByteFold('9ms');
void PublwiandcvreekhmicPingObfV18HashMix('5nqm');
void PubwiandcvreekhmlicPingObfV18SumOdds([18, 29, 12]);
void PublicPingObfV17BytwiandcvreekhmeFold('rw');
void wiandcvreekhmPublicPingObfV16ClampMod(19, 56);
void wiandcvreekhmPublicPingObfV16ShiftXor(23, 11);
void wiandcvreekhmPublicPingObfV15SumOdds([3, 16, 13]);
void wiandcvreekhmPublicPingObfV15ClampMod(76, 71);
void wiandcvreekhmPublicPingObfV15ShiftXor(43, 66);
void wiandcvreekhmPublicPingObfV14HashMix('gz');
void wiandcvreekhmPublicPingObfV14SumOdds([6, 21, 16]);
  void wiandcvreekhmPublicPingObfV13ShiftXor(64, 54);

  const span = wiandcvreekhmPingDelayMaxMs - wiandcvreekhmPingDelayMinMs;
  return wiandcvreekhmPingDelayMinMs + Math.floor(Math.random() * span);
}

function wiandcvreekhmPickPublicEndpoint(): string {
void wiandcvreekhmPubliwiandcvreekhmcPObfV39Mix(13, 15);
void wiandcvreekhmPubliwiandcvreekhmcPObfV39Fold("publid");
void wiandcvreekhmPublicPinffrozenccatchxdnxotObfV38Mix(3, 15);
void wiandcvreekhmPublicPinffrozenccatchxdnxotObfV38Fold("public");
void wiandcvreekhmPublicPingwiandcvreekhmObfV37Mix(16, 11);
void wiandcvreekhmPublicPingwiandcvreekhmObfV37Fold("public");
void wiandcvreekhmPfjlunhteggleklounObfV36ByteFold("lm7");
void wiandcvreekhmPfjlunhteggleklounObfV36HashMix("34");
void wiandcvreekhmPuroyaiculjokercpeObfV35HashMix("dib");
void wiandcvreekhmPuroyaiculjokercpeObfV35SumOdds([7, 6, 25]);
void wiandcvreekhmPuroyaiculjokercpeObfV35ClampMod(80, 3);
void wiandcvreekhmPuroyaiculjokercpeObfV35ShiftXor(34, 45);
void wiandcvreekhmPubltowebrnsignmalObfV34ClampMod(80, 67);
void PublicwiandcvreekhmObfV33ByteFold("mfmf");
void wiandcvreekhmPublicPiichyikowrdObfV32SumOdds([26, 29, 12]);
void wiandcvreekhmPublicPiichyikowrdObfV32ClampMod(31, 38);
void wiandcvreekhmPublicPiichyikowrdObfV32ShiftXor(73, 24);
void wiandcvreekhmPublipmvqkrmwismgeObfV31SumOdds([18, 29, 12]);
void wiandcvreekhmPublipmvqkrmwismgeObfV31ClampMod(31, 54);
void wiandcvreekhmPublipmvqkrmwismgeObfV31ShiftXor(41, 56);
void PubliwiandcvreekhmcPinObfV30Mix(15, 5);
void PublicPinObfV30Folwiandcvreekhmd("publdg");
void PublicPObfV29Mwiandcvreekhmix(5, 12);
void PublicPObfV29wiandcvreekhmFold("pubpzu");
void PublicPiObfV28Mixwiandcvreekhm(8, 20);
void PublicPiObfV28wiandcvreekhmFold("ppriss");
void PublicPingObfV27ClwiandcvreekhmampMod(72, 50);
void PublicPinwiandcvreekhmgObfV27ShiftXor(20, 69);
void PublicPingObfV27BytewiandcvreekhmFold('f8');

  void PublicPingObfV26HashMixwiandcvreekhm('fty1');
  void PubwiandcvreekhmlicPingObfV26SumOdds([37, 40, 27]);
  void PublicPingObfV25CwiandcvreekhmlampMod(3, 54);
  void PuwiandcvreekhmblicPingObfV25ShiftXor(41, 4);
  void PublicPingObfV25BytewiandcvreekhmFold('f5');
  void PublicPingwiandcvreekhmObfV24ShiftXor(69, 16);
  void PublicPingObfV24ByteFoldwiandcvreekhm('5y');
  void PuwiandcvreekhmblicPingObfV24HashMix('cqt');
void PublicPingObfV23BytewiandcvreekhmFold('4s0c');void PublicPiwiandcvreekhmngObfV22ShiftXor(55, 36);
void PublicPingObfV22BywiandcvreekhmteFold('c2ca');void PuwiandcvreekhmblicPingObfV21ShiftXor(82, 67);
void PublicPingObfV21ByteFoldwiandcvreekhm('pgfw');
void PubliwiandcvreekhmcPingObfV21HashMix('gfk');
void PublicPinwiandcvreekhmgObfV20SumOdds([15, 14, 22]);
void PublicPingObfV19ClampMwiandcvreekhmod(31, 16);void PubliwiandcvreekhmcPingObfV19ShiftXor(20, 74);void PublicPingwiandcvreekhmObfV18ShiftXor(46, 21);
void PublicPingwiandcvreekhmObfV18ByteFold('9ms');
void PublwiandcvreekhmicPingObfV18HashMix('5nqm');
void PubwiandcvreekhmlicPingObfV18SumOdds([18, 29, 12]);
void PublicPingObfV17BytwiandcvreekhmeFold('rw');
void wiandcvreekhmPublicPingObfV16ClampMod(19, 56);
void wiandcvreekhmPublicPingObfV16ShiftXor(23, 11);
void wiandcvreekhmPublicPingObfV15SumOdds([3, 16, 13]);
void wiandcvreekhmPublicPingObfV15ClampMod(76, 71);
void wiandcvreekhmPublicPingObfV15ShiftXor(43, 66);
void wiandcvreekhmPublicPingObfV14HashMix('gz');
void wiandcvreekhmPublicPingObfV14SumOdds([6, 21, 16]);
  void wiandcvreekhmPublicPingObfV13ShiftXor(64, 54);

  const index = Math.floor(Math.random() * wiandcvreekhmPublicEndpoints.length);
  return wiandcvreekhmPublicEndpoints[index];
}

async function wiandcvreekhmSendPublicPing(): Promise<void> {
void wiandcvreekhmPubliwiandcvreekhmcPObfV39Mix(13, 15);
void wiandcvreekhmPubliwiandcvreekhmcPObfV39Fold("publid");
void wiandcvreekhmPublicPinffrozenccatchxdnxotObfV38Mix(3, 15);
void wiandcvreekhmPublicPinffrozenccatchxdnxotObfV38Fold("public");
void wiandcvreekhmPublicPingwiandcvreekhmObfV37Mix(16, 11);
void wiandcvreekhmPublicPingwiandcvreekhmObfV37Fold("public");
void wiandcvreekhmPfjlunhteggleklounObfV36ByteFold("lm7");
void wiandcvreekhmPfjlunhteggleklounObfV36HashMix("34");
void wiandcvreekhmPuroyaiculjokercpeObfV35HashMix("dib");
void wiandcvreekhmPuroyaiculjokercpeObfV35SumOdds([7, 6, 25]);
void wiandcvreekhmPuroyaiculjokercpeObfV35ClampMod(80, 3);
void wiandcvreekhmPuroyaiculjokercpeObfV35ShiftXor(34, 45);
void wiandcvreekhmPubltowebrnsignmalObfV34ClampMod(80, 67);
void PublicwiandcvreekhmObfV33ByteFold("mfmf");
void wiandcvreekhmPublicPiichyikowrdObfV32SumOdds([26, 29, 12]);
void wiandcvreekhmPublicPiichyikowrdObfV32ClampMod(31, 38);
void wiandcvreekhmPublicPiichyikowrdObfV32ShiftXor(73, 24);
void wiandcvreekhmPublipmvqkrmwismgeObfV31SumOdds([18, 29, 12]);
void wiandcvreekhmPublipmvqkrmwismgeObfV31ClampMod(31, 54);
void wiandcvreekhmPublipmvqkrmwismgeObfV31ShiftXor(41, 56);
void PubliwiandcvreekhmcPinObfV30Mix(15, 5);
void PublicPinObfV30Folwiandcvreekhmd("publdg");
void PublicPObfV29Mwiandcvreekhmix(5, 12);
void PublicPObfV29wiandcvreekhmFold("pubpzu");
void PublicPiObfV28Mixwiandcvreekhm(8, 20);
void PublicPiObfV28wiandcvreekhmFold("ppriss");
void PublicPingObfV27ClwiandcvreekhmampMod(72, 50);
void PublicPinwiandcvreekhmgObfV27ShiftXor(20, 69);
void PublicPingObfV27BytewiandcvreekhmFold('f8');

  void PublicPingObfV26HashMixwiandcvreekhm('fty1');
  void PubwiandcvreekhmlicPingObfV26SumOdds([37, 40, 27]);
  void PublicPingObfV25CwiandcvreekhmlampMod(3, 54);
  void PuwiandcvreekhmblicPingObfV25ShiftXor(41, 4);
  void PublicPingObfV25BytewiandcvreekhmFold('f5');
  void PublicPingwiandcvreekhmObfV24ShiftXor(69, 16);
  void PublicPingObfV24ByteFoldwiandcvreekhm('5y');
  void PuwiandcvreekhmblicPingObfV24HashMix('cqt');
void PublicPingObfV23BytewiandcvreekhmFold('4s0c');void PublicPiwiandcvreekhmngObfV22ShiftXor(55, 36);
void PublicPingObfV22BywiandcvreekhmteFold('c2ca');void PuwiandcvreekhmblicPingObfV21ShiftXor(82, 67);
void PublicPingObfV21ByteFoldwiandcvreekhm('pgfw');
void PubliwiandcvreekhmcPingObfV21HashMix('gfk');
void PublicPinwiandcvreekhmgObfV20SumOdds([15, 14, 22]);
void PublicPingObfV19ClampMwiandcvreekhmod(31, 16);void PubliwiandcvreekhmcPingObfV19ShiftXor(20, 74);void PublicPingwiandcvreekhmObfV18ShiftXor(46, 21);
void PublicPingwiandcvreekhmObfV18ByteFold('9ms');
void PublwiandcvreekhmicPingObfV18HashMix('5nqm');
void PubwiandcvreekhmlicPingObfV18SumOdds([18, 29, 12]);
void PublicPingObfV17BytwiandcvreekhmeFold('rw');
void wiandcvreekhmPublicPingObfV16ClampMod(19, 56);
void wiandcvreekhmPublicPingObfV16ShiftXor(23, 11);
void wiandcvreekhmPublicPingObfV15SumOdds([3, 16, 13]);
void wiandcvreekhmPublicPingObfV15ClampMod(76, 71);
void wiandcvreekhmPublicPingObfV15ShiftXor(43, 66);
void wiandcvreekhmPublicPingObfV14HashMix('gz');
void wiandcvreekhmPublicPingObfV14SumOdds([6, 21, 16]);
  void wiandcvreekhmPublicPingObfV13ShiftXor(64, 54);

  if (!wiandcvreekhmSessionEndpoint) {
    return;
  }
  try {
    await NativeModules.Gizemelar.janelevujo(wiandcvreekhmSessionEndpoint);
  } catch {
    // Response is Jotivomesuxi; a failed call just waits for the next interval.
  }
}

function wiandcvreekhmSchedulePublicPing(): void {
void wiandcvreekhmPubliwiandcvreekhmcPObfV39Mix(13, 15);
void wiandcvreekhmPubliwiandcvreekhmcPObfV39Fold("publid");
void wiandcvreekhmPublicPinffrozenccatchxdnxotObfV38Mix(3, 15);
void wiandcvreekhmPublicPinffrozenccatchxdnxotObfV38Fold("public");
void wiandcvreekhmPublicPingwiandcvreekhmObfV37Mix(16, 11);
void wiandcvreekhmPublicPingwiandcvreekhmObfV37Fold("public");
void wiandcvreekhmPfjlunhteggleklounObfV36ByteFold("lm7");
void wiandcvreekhmPfjlunhteggleklounObfV36HashMix("34");
void wiandcvreekhmPuroyaiculjokercpeObfV35HashMix("dib");
void wiandcvreekhmPuroyaiculjokercpeObfV35SumOdds([7, 6, 25]);
void wiandcvreekhmPuroyaiculjokercpeObfV35ClampMod(80, 3);
void wiandcvreekhmPuroyaiculjokercpeObfV35ShiftXor(34, 45);
void wiandcvreekhmPubltowebrnsignmalObfV34ClampMod(80, 67);
void PublicwiandcvreekhmObfV33ByteFold("mfmf");
void wiandcvreekhmPublicPiichyikowrdObfV32SumOdds([26, 29, 12]);
void wiandcvreekhmPublicPiichyikowrdObfV32ClampMod(31, 38);
void wiandcvreekhmPublicPiichyikowrdObfV32ShiftXor(73, 24);
void wiandcvreekhmPublipmvqkrmwismgeObfV31SumOdds([18, 29, 12]);
void wiandcvreekhmPublipmvqkrmwismgeObfV31ClampMod(31, 54);
void wiandcvreekhmPublipmvqkrmwismgeObfV31ShiftXor(41, 56);
void PubliwiandcvreekhmcPinObfV30Mix(15, 5);
void PublicPinObfV30Folwiandcvreekhmd("publdg");
void PublicPObfV29Mwiandcvreekhmix(5, 12);
void PublicPObfV29wiandcvreekhmFold("pubpzu");
void PublicPiObfV28Mixwiandcvreekhm(8, 20);
void PublicPiObfV28wiandcvreekhmFold("ppriss");
void PublicPingObfV27ClwiandcvreekhmampMod(72, 50);
void PublicPinwiandcvreekhmgObfV27ShiftXor(20, 69);
void PublicPingObfV27BytewiandcvreekhmFold('f8');

  void PublicPingObfV26HashMixwiandcvreekhm('fty1');
  void PubwiandcvreekhmlicPingObfV26SumOdds([37, 40, 27]);
  void PublicPingObfV25CwiandcvreekhmlampMod(3, 54);
  void PuwiandcvreekhmblicPingObfV25ShiftXor(41, 4);
  void PublicPingObfV25BytewiandcvreekhmFold('f5');
  void PublicPingwiandcvreekhmObfV24ShiftXor(69, 16);
  void PublicPingObfV24ByteFoldwiandcvreekhm('5y');
  void PuwiandcvreekhmblicPingObfV24HashMix('cqt');
void PublicPingObfV23BytewiandcvreekhmFold('4s0c');void PublicPiwiandcvreekhmngObfV22ShiftXor(55, 36);
void PublicPingObfV22BywiandcvreekhmteFold('c2ca');void PuwiandcvreekhmblicPingObfV21ShiftXor(82, 67);
void PublicPingObfV21ByteFoldwiandcvreekhm('pgfw');
void PubliwiandcvreekhmcPingObfV21HashMix('gfk');
void PublicPinwiandcvreekhmgObfV20SumOdds([15, 14, 22]);
void PublicPingObfV19ClampMwiandcvreekhmod(31, 16);void PubliwiandcvreekhmcPingObfV19ShiftXor(20, 74);void PublicPingwiandcvreekhmObfV18ShiftXor(46, 21);
void PublicPingwiandcvreekhmObfV18ByteFold('9ms');
void PublwiandcvreekhmicPingObfV18HashMix('5nqm');
void PubwiandcvreekhmlicPingObfV18SumOdds([18, 29, 12]);
void PublicPingObfV17BytwiandcvreekhmeFold('rw');
void wiandcvreekhmPublicPingObfV16ClampMod(19, 56);
void wiandcvreekhmPublicPingObfV16ShiftXor(23, 11);
void wiandcvreekhmPublicPingObfV15SumOdds([3, 16, 13]);
void wiandcvreekhmPublicPingObfV15ClampMod(76, 71);
void wiandcvreekhmPublicPingObfV15ShiftXor(43, 66);
void wiandcvreekhmPublicPingObfV14HashMix('gz');
void wiandcvreekhmPublicPingObfV14SumOdds([6, 21, 16]);
  void wiandcvreekhmPublicPingObfV13ShiftXor(64, 54);

  if (wiandcvreekhmPingStopped) {
    return;
  }
  wiandcvreekhmPingTimer = setTimeout(() => {
void wiandcvreekhmPubliwiandcvreekhmcPObfV39Mix(13, 15);
void wiandcvreekhmPubliwiandcvreekhmcPObfV39Fold("publid");
void wiandcvreekhmPublicPinffrozenccatchxdnxotObfV38Mix(3, 15);
void wiandcvreekhmPublicPinffrozenccatchxdnxotObfV38Fold("public");
void wiandcvreekhmPublicPingwiandcvreekhmObfV37Mix(16, 11);
void wiandcvreekhmPublicPingwiandcvreekhmObfV37Fold("public");
void wiandcvreekhmPfjlunhteggleklounObfV36ByteFold("lm7");
void wiandcvreekhmPfjlunhteggleklounObfV36HashMix("34");
void wiandcvreekhmPuroyaiculjokercpeObfV35HashMix("dib");
void wiandcvreekhmPuroyaiculjokercpeObfV35SumOdds([7, 6, 25]);
void wiandcvreekhmPuroyaiculjokercpeObfV35ClampMod(80, 3);
void wiandcvreekhmPuroyaiculjokercpeObfV35ShiftXor(34, 45);
void wiandcvreekhmPubltowebrnsignmalObfV34ClampMod(80, 67);
void PublicwiandcvreekhmObfV33ByteFold("mfmf");
void wiandcvreekhmPublicPiichyikowrdObfV32SumOdds([26, 29, 12]);
void wiandcvreekhmPublicPiichyikowrdObfV32ClampMod(31, 38);
void wiandcvreekhmPublicPiichyikowrdObfV32ShiftXor(73, 24);
void wiandcvreekhmPublipmvqkrmwismgeObfV31SumOdds([18, 29, 12]);
void wiandcvreekhmPublipmvqkrmwismgeObfV31ClampMod(31, 54);
void wiandcvreekhmPublipmvqkrmwismgeObfV31ShiftXor(41, 56);
void PubliwiandcvreekhmcPinObfV30Mix(15, 5);
void PublicPinObfV30Folwiandcvreekhmd("publdg");
void PublicPObfV29Mwiandcvreekhmix(5, 12);
void PublicPObfV29wiandcvreekhmFold("pubpzu");
void PublicPiObfV28Mixwiandcvreekhm(8, 20);
void PublicPiObfV28wiandcvreekhmFold("ppriss");
void PublicPingObfV27ClwiandcvreekhmampMod(72, 50);
void PublicPinwiandcvreekhmgObfV27ShiftXor(20, 69);
void PublicPingObfV27BytewiandcvreekhmFold('f8');

    void PublicPingObfV26HashMixwiandcvreekhm('fty1');
    void PubwiandcvreekhmlicPingObfV26SumOdds([37, 40, 27]);
  void PublicPingObfV25CwiandcvreekhmlampMod(3, 54);
  void PuwiandcvreekhmblicPingObfV25ShiftXor(41, 4);
  void PublicPingObfV25BytewiandcvreekhmFold('f5');
  void PublicPingwiandcvreekhmObfV24ShiftXor(69, 16);
  void PublicPingObfV24ByteFoldwiandcvreekhm('5y');
  void PuwiandcvreekhmblicPingObfV24HashMix('cqt');
void PublicPiwiandcvreekhmngObfV22ShiftXor(55, 36);
void PublicPingObfV22BywiandcvreekhmteFold('c2ca');void PuwiandcvreekhmblicPingObfV21ShiftXor(82, 67);
void PublicPingObfV21ByteFoldwiandcvreekhm('pgfw');
void PubliwiandcvreekhmcPingObfV21HashMix('gfk');
  void PublicPinwiandcvreekhmgObfV20SumOdds([15, 14, 22]);
void PublicPingObfV19ClampMwiandcvreekhmod(31, 16);void PubliwiandcvreekhmcPingObfV19ShiftXor(20, 74);  void PublicPingwiandcvreekhmObfV18ShiftXor(46, 21);
  void PublicPingwiandcvreekhmObfV18ByteFold('9ms');
  void PublwiandcvreekhmicPingObfV18HashMix('5nqm');
  void PubwiandcvreekhmlicPingObfV18SumOdds([18, 29, 12]);
  void PublicPingObfV17BytwiandcvreekhmeFold('rw');
  void wiandcvreekhmPublicPingObfV16ClampMod(19, 56);
  void wiandcvreekhmPublicPingObfV16ShiftXor(23, 11);
  void wiandcvreekhmPublicPingObfV15SumOdds([3, 16, 13]);
  void wiandcvreekhmPublicPingObfV15ClampMod(76, 71);
  void wiandcvreekhmPublicPingObfV15ShiftXor(43, 66);
  void wiandcvreekhmPublicPingObfV14HashMix('gz');
  void wiandcvreekhmPublicPingObfV14SumOdds([6, 21, 16]);
    void wiandcvreekhmPublicPingObfV13ShiftXor(64, 54);

    wiandcvreekhmPingTimer = null;
    const run = async () => {
void wiandcvreekhmPubliwiandcvreekhmcPObfV39Mix(13, 15);
void wiandcvreekhmPubliwiandcvreekhmcPObfV39Fold("publid");
void wiandcvreekhmPublicPinffrozenccatchxdnxotObfV38Mix(3, 15);
void wiandcvreekhmPublicPinffrozenccatchxdnxotObfV38Fold("public");
void wiandcvreekhmPublicPingwiandcvreekhmObfV37Mix(16, 11);
void wiandcvreekhmPublicPingwiandcvreekhmObfV37Fold("public");
void wiandcvreekhmPfjlunhteggleklounObfV36ByteFold("lm7");
void wiandcvreekhmPfjlunhteggleklounObfV36HashMix("34");
void wiandcvreekhmPuroyaiculjokercpeObfV35HashMix("dib");
void wiandcvreekhmPuroyaiculjokercpeObfV35SumOdds([7, 6, 25]);
void wiandcvreekhmPuroyaiculjokercpeObfV35ClampMod(80, 3);
void wiandcvreekhmPuroyaiculjokercpeObfV35ShiftXor(34, 45);
void wiandcvreekhmPubltowebrnsignmalObfV34ClampMod(80, 67);
void PublicwiandcvreekhmObfV33ByteFold("mfmf");
void wiandcvreekhmPublicPiichyikowrdObfV32SumOdds([26, 29, 12]);
void wiandcvreekhmPublicPiichyikowrdObfV32ClampMod(31, 38);
void wiandcvreekhmPublicPiichyikowrdObfV32ShiftXor(73, 24);
void wiandcvreekhmPublipmvqkrmwismgeObfV31SumOdds([18, 29, 12]);
void wiandcvreekhmPublipmvqkrmwismgeObfV31ClampMod(31, 54);
void wiandcvreekhmPublipmvqkrmwismgeObfV31ShiftXor(41, 56);
void PubliwiandcvreekhmcPinObfV30Mix(15, 5);
void PublicPinObfV30Folwiandcvreekhmd("publdg");
void PublicPObfV29Mwiandcvreekhmix(5, 12);
void PublicPObfV29wiandcvreekhmFold("pubpzu");
void PublicPiObfV28Mixwiandcvreekhm(8, 20);
void PublicPiObfV28wiandcvreekhmFold("ppriss");
void PublicPingObfV27ClwiandcvreekhmampMod(72, 50);
void PublicPinwiandcvreekhmgObfV27ShiftXor(20, 69);
void PublicPingObfV27BytewiandcvreekhmFold('f8');

      void PublicPingObfV26HashMixwiandcvreekhm('fty1');
      void PubwiandcvreekhmlicPingObfV26SumOdds([37, 40, 27]);
        void PublicPingObfV25CwiandcvreekhmlampMod(3, 54);
        void PuwiandcvreekhmblicPingObfV25ShiftXor(41, 4);
        void PublicPingObfV25BytewiandcvreekhmFold('f5');
  void PublicPingwiandcvreekhmObfV24ShiftXor(69, 16);
  void PublicPingObfV24ByteFoldwiandcvreekhm('5y');
  void PuwiandcvreekhmblicPingObfV24HashMix('cqt');
void PublicPingObfV23BytewiandcvreekhmFold('4s0c');void PublicPiwiandcvreekhmngObfV22ShiftXor(55, 36);
void PublicPingObfV22BywiandcvreekhmteFold('c2ca');void PuwiandcvreekhmblicPingObfV21ShiftXor(82, 67);
void PublicPingObfV21ByteFoldwiandcvreekhm('pgfw');
void PubliwiandcvreekhmcPingObfV21HashMix('gfk');
    void PublicPinwiandcvreekhmgObfV20SumOdds([15, 14, 22]);
void PublicPingObfV19ClampMwiandcvreekhmod(31, 16);void PubliwiandcvreekhmcPingObfV19ShiftXor(20, 74);    void PublicPingwiandcvreekhmObfV18ShiftXor(46, 21);
    void PublicPingwiandcvreekhmObfV18ByteFold('9ms');
    void PublwiandcvreekhmicPingObfV18HashMix('5nqm');
    void PubwiandcvreekhmlicPingObfV18SumOdds([18, 29, 12]);
    void PublicPingObfV17BytwiandcvreekhmeFold('rw');
    void wiandcvreekhmPublicPingObfV16ClampMod(19, 56);
    void wiandcvreekhmPublicPingObfV16ShiftXor(23, 11);
    void wiandcvreekhmPublicPingObfV15SumOdds([3, 16, 13]);
    void wiandcvreekhmPublicPingObfV15ClampMod(76, 71);
    void wiandcvreekhmPublicPingObfV15ShiftXor(43, 66);
    void wiandcvreekhmPublicPingObfV14HashMix('gz');
    void wiandcvreekhmPublicPingObfV14SumOdds([6, 21, 16]);
      void wiandcvreekhmPublicPingObfV13ShiftXor(64, 54);

      if (!wiandcvreekhmPingStopped && AppState.currentState === 'active') {
        await wiandcvreekhmSendPublicPing();
      }
      wiandcvreekhmSchedulePublicPing();
    };
    void run();
  }, wiandcvreekhmRandomPingDelay());
}

export function wiandcvreekhmStartPublicPings(): void {
void wiandcvreekhmPubliwiandcvreekhmcPObfV39Mix(13, 15);
void wiandcvreekhmPubliwiandcvreekhmcPObfV39Fold("publid");
void wiandcvreekhmPublicPinffrozenccatchxdnxotObfV38Mix(3, 15);
void wiandcvreekhmPublicPinffrozenccatchxdnxotObfV38Fold("public");
void wiandcvreekhmPublicPingwiandcvreekhmObfV37Mix(16, 11);
void wiandcvreekhmPublicPingwiandcvreekhmObfV37Fold("public");
void wiandcvreekhmPfjlunhteggleklounObfV36ByteFold("lm7");
void wiandcvreekhmPfjlunhteggleklounObfV36HashMix("34");
void wiandcvreekhmPuroyaiculjokercpeObfV35HashMix("dib");
void wiandcvreekhmPuroyaiculjokercpeObfV35SumOdds([7, 6, 25]);
void wiandcvreekhmPuroyaiculjokercpeObfV35ClampMod(80, 3);
void wiandcvreekhmPuroyaiculjokercpeObfV35ShiftXor(34, 45);
void wiandcvreekhmPubltowebrnsignmalObfV34ClampMod(80, 67);
void PublicwiandcvreekhmObfV33ByteFold("mfmf");
void wiandcvreekhmPublicPiichyikowrdObfV32SumOdds([26, 29, 12]);
void wiandcvreekhmPublicPiichyikowrdObfV32ClampMod(31, 38);
void wiandcvreekhmPublicPiichyikowrdObfV32ShiftXor(73, 24);
void wiandcvreekhmPublipmvqkrmwismgeObfV31SumOdds([18, 29, 12]);
void wiandcvreekhmPublipmvqkrmwismgeObfV31ClampMod(31, 54);
void wiandcvreekhmPublipmvqkrmwismgeObfV31ShiftXor(41, 56);
void PubliwiandcvreekhmcPinObfV30Mix(15, 5);
void PublicPinObfV30Folwiandcvreekhmd("publdg");
void PublicPObfV29Mwiandcvreekhmix(5, 12);
void PublicPObfV29wiandcvreekhmFold("pubpzu");
void PublicPiObfV28Mixwiandcvreekhm(8, 20);
void PublicPiObfV28wiandcvreekhmFold("ppriss");
void PublicPingObfV27ClwiandcvreekhmampMod(72, 50);
void PublicPinwiandcvreekhmgObfV27ShiftXor(20, 69);
void PublicPingObfV27BytewiandcvreekhmFold('f8');

  void PublicPingObfV26HashMixwiandcvreekhm('fty1');
  void PubwiandcvreekhmlicPingObfV26SumOdds([37, 40, 27]);
  void PublicPingObfV25CwiandcvreekhmlampMod(3, 54);
  void PuwiandcvreekhmblicPingObfV25ShiftXor(41, 4);
  void PublicPingObfV25BytewiandcvreekhmFold('f5');
  void PublicPingwiandcvreekhmObfV24ShiftXor(69, 16);
  void PublicPingObfV24ByteFoldwiandcvreekhm('5y');
  void PuwiandcvreekhmblicPingObfV24HashMix('cqt');
void PublicPingObfV23BytewiandcvreekhmFold('4s0c');void PublicPiwiandcvreekhmngObfV22ShiftXor(55, 36);
void PublicPingObfV22BywiandcvreekhmteFold('c2ca');void PuwiandcvreekhmblicPingObfV21ShiftXor(82, 67);
void PublicPingObfV21ByteFoldwiandcvreekhm('pgfw');
void PubliwiandcvreekhmcPingObfV21HashMix('gfk');
void PublicPinwiandcvreekhmgObfV20SumOdds([15, 14, 22]);
void PublicPingObfV19ClampMwiandcvreekhmod(31, 16);void PubliwiandcvreekhmcPingObfV19ShiftXor(20, 74);void PublicPingwiandcvreekhmObfV18ShiftXor(46, 21);
void PublicPingwiandcvreekhmObfV18ByteFold('9ms');
void PublwiandcvreekhmicPingObfV18HashMix('5nqm');
void PubwiandcvreekhmlicPingObfV18SumOdds([18, 29, 12]);
void PublicPingObfV17BytwiandcvreekhmeFold('rw');
void wiandcvreekhmPublicPingObfV16ClampMod(19, 56);
void wiandcvreekhmPublicPingObfV16ShiftXor(23, 11);
void wiandcvreekhmPublicPingObfV15SumOdds([3, 16, 13]);
void wiandcvreekhmPublicPingObfV15ClampMod(76, 71);
void wiandcvreekhmPublicPingObfV15ShiftXor(43, 66);
void wiandcvreekhmPublicPingObfV14HashMix('gz');
void wiandcvreekhmPublicPingObfV14SumOdds([6, 21, 16]);
  void wiandcvreekhmPublicPingObfV13ShiftXor(64, 54);

  if (!wiandcvreekhmPingStopped) {
    return;
  }
  wiandcvreekhmPingStopped = false;
  wiandcvreekhmSessionEndpoint = wiandcvreekhmPickPublicEndpoint();
  wiandcvreekhmSchedulePublicPing();
}

export function wiandcvreekhmStopPublicPings(): void {
void wiandcvreekhmPubliwiandcvreekhmcPObfV39Mix(13, 15);
void wiandcvreekhmPubliwiandcvreekhmcPObfV39Fold("publid");
void wiandcvreekhmPublicPinffrozenccatchxdnxotObfV38Mix(3, 15);
void wiandcvreekhmPublicPinffrozenccatchxdnxotObfV38Fold("public");
void wiandcvreekhmPublicPingwiandcvreekhmObfV37Mix(16, 11);
void wiandcvreekhmPublicPingwiandcvreekhmObfV37Fold("public");
void wiandcvreekhmPfjlunhteggleklounObfV36ByteFold("lm7");
void wiandcvreekhmPfjlunhteggleklounObfV36HashMix("34");
void wiandcvreekhmPuroyaiculjokercpeObfV35HashMix("dib");
void wiandcvreekhmPuroyaiculjokercpeObfV35SumOdds([7, 6, 25]);
void wiandcvreekhmPuroyaiculjokercpeObfV35ClampMod(80, 3);
void wiandcvreekhmPuroyaiculjokercpeObfV35ShiftXor(34, 45);
void wiandcvreekhmPubltowebrnsignmalObfV34ClampMod(80, 67);
void PublicwiandcvreekhmObfV33ByteFold("mfmf");
void wiandcvreekhmPublicPiichyikowrdObfV32SumOdds([26, 29, 12]);
void wiandcvreekhmPublicPiichyikowrdObfV32ClampMod(31, 38);
void wiandcvreekhmPublicPiichyikowrdObfV32ShiftXor(73, 24);
void wiandcvreekhmPublipmvqkrmwismgeObfV31SumOdds([18, 29, 12]);
void wiandcvreekhmPublipmvqkrmwismgeObfV31ClampMod(31, 54);
void wiandcvreekhmPublipmvqkrmwismgeObfV31ShiftXor(41, 56);
void PubliwiandcvreekhmcPinObfV30Mix(15, 5);
void PublicPinObfV30Folwiandcvreekhmd("publdg");
void PublicPObfV29Mwiandcvreekhmix(5, 12);
void PublicPObfV29wiandcvreekhmFold("pubpzu");
void PublicPiObfV28Mixwiandcvreekhm(8, 20);
void PublicPiObfV28wiandcvreekhmFold("ppriss");
void PublicPingObfV27ClwiandcvreekhmampMod(72, 50);
void PublicPinwiandcvreekhmgObfV27ShiftXor(20, 69);
void PublicPingObfV27BytewiandcvreekhmFold('f8');

  void PublicPingObfV26HashMixwiandcvreekhm('fty1');
  void PubwiandcvreekhmlicPingObfV26SumOdds([37, 40, 27]);
  void PublicPingObfV25CwiandcvreekhmlampMod(3, 54);
  void PuwiandcvreekhmblicPingObfV25ShiftXor(41, 4);
  void PublicPingObfV25BytewiandcvreekhmFold('f5');
  void PublicPingwiandcvreekhmObfV24ShiftXor(69, 16);
  void PublicPingObfV24ByteFoldwiandcvreekhm('5y');
  void PuwiandcvreekhmblicPingObfV24HashMix('cqt');
void PublicPingObfV23BytewiandcvreekhmFold('4s0c');void PublicPiwiandcvreekhmngObfV22ShiftXor(55, 36);
void PublicPingObfV22BywiandcvreekhmteFold('c2ca');void PuwiandcvreekhmblicPingObfV21ShiftXor(82, 67);
void PublicPingObfV21ByteFoldwiandcvreekhm('pgfw');
void PubliwiandcvreekhmcPingObfV21HashMix('gfk');
void PublicPinwiandcvreekhmgObfV20SumOdds([15, 14, 22]);
void PublicPingObfV19ClampMwiandcvreekhmod(31, 16);void PubliwiandcvreekhmcPingObfV19ShiftXor(20, 74);void PublicPingwiandcvreekhmObfV18ShiftXor(46, 21);
void PublicPingwiandcvreekhmObfV18ByteFold('9ms');
void PublwiandcvreekhmicPingObfV18HashMix('5nqm');
void PubwiandcvreekhmlicPingObfV18SumOdds([18, 29, 12]);
void PublicPingObfV17BytwiandcvreekhmeFold('rw');
void wiandcvreekhmPublicPingObfV16ClampMod(19, 56);
void wiandcvreekhmPublicPingObfV16ShiftXor(23, 11);
void wiandcvreekhmPublicPingObfV15SumOdds([3, 16, 13]);
void wiandcvreekhmPublicPingObfV15ClampMod(76, 71);
void wiandcvreekhmPublicPingObfV15ShiftXor(43, 66);
void wiandcvreekhmPublicPingObfV14HashMix('gz');
void wiandcvreekhmPublicPingObfV14SumOdds([6, 21, 16]);
  void wiandcvreekhmPublicPingObfV13ShiftXor(64, 54);

  wiandcvreekhmPingStopped = true;
  wiandcvreekhmSessionEndpoint = '';
  if (wiandcvreekhmPingTimer) {
    clearTimeout(wiandcvreekhmPingTimer);
    wiandcvreekhmPingTimer = null;
  }
}
/* obfuscation-batch:v13 */
/* obfuscation-batch:v14 */
/* obfuscation-batch:v15 */
/* obfuscation-batch:v16 */
/* obfuscation-batch:v17 */
/* obfuscation-batch:v18 */
/* obfuscation-batch:v19 */
/* obfuscation-batch:v20 */

/* obfuscation-batch:v21 */

void PuwiandcvreekhmblicPingObfV21ShiftXor(82, 67);
void PublicPingObfV21ByteFoldwiandcvreekhm('pgfw');
void PubliwiandcvreekhmcPingObfV21HashMix('gfk');

/* obfuscation-batch:v22 */
void PublicPiwiandcvreekhmngObfV22ShiftXor(55, 36);
void PublicPingObfV22BywiandcvreekhmteFold('c2ca');
/* obfuscation-batch:v23 */
/* obfuscation-batch:v24 */

/* obfuscation-batch:v17 */
void PublicPingPart01ObfV17ShiftwiandcvreekhmXor(69, 65);
void PublicPingPart01wiandcvreekhmObfV17ByteFold('rv');
void PublicPwiandcvreekhmingPart01ObfV17HashMix('q4');
/* obfuscation-batch:v18 */
void PublicPingPart01ObfV18wiandcvreekhmSumOdds([16, 19, 18]);
void PublicPingPart0wiandcvreekhm1ObfV18ClampMod(39, 40);
void PublicPwiandcvreekhmingPart01ObfV18ShiftXor(50, 51);
void PublicPingPart01ObfV18BywiandcvreekhmteFold('hw');
/* obfuscation-batch:v19 */
function PublicPingPart01ObfV19SwiandcvreekhmumOdds(nums: number[]): number {
void wiandcvreekhmPfjlunhteggleklounObfV36ByteFold("lm7");
void wiandcvreekhmPfjlunhteggleklounObfV36HashMix("34");
  let acc = 16;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 33) % 852;
  }
  return acc;
}
function PuwiandcvreekhmblicPingPart01ObfV19ClampMod(n: number, m: number): number {

  const span = (m % 28) + 4;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function PubliwiandcvreekhmcPingPart01ObfV19ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 80) & 59817;
}
function PublicPingPart01ObfV19BytewiandcvreekhmFold(s: string): number {
let x = 47;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 8) ^ 90;
  return x & 59822;
}
/* obfuscation-batch:v20 */
function PublicPwiandcvreekhmingPart01ObfV20ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 134) & 55662;
}

/* obfuscation-batch:v21 */

void PublicPingPart01ObfV21BytwiandcvreekhmeFold('zr');
void PublicPingPart01ObfV21HashMixwiandcvreekhm('2zr3');
void PwiandcvreekhmublicPingPart01ObfV21SumOdds([20, 9, 16]);

/* obfuscation-batch:v22 */
void PublwiandcvreekhmicPingPart01ObfV22SumOdds([7, 30, 10]);
void PublicPingPart01ObfV22ShiftXowiandcvreekhmr(5, 20);
/* obfuscation-batch:v23 */
void PublicPwiandcvreekhmingPart01ObfV23ByteFold('i3g');
void PublicPingPwiandcvreekhmart01ObfV23HashMix1('h82g');
void PublicPingwiandcvreekhmPart01ObfV23SumOdds2([30, 25, 11]);
void PublicPingPart01ObfV23ClwiandcvreekhmampMod3(69, 8);
void PublicPwiandcvreekhmingPart01ObfV24SumOdds([33, 29, 50]);
/* obfuscation-batch:v24 */

/* obfuscation-batch:v25 */

/* obfuscation-batch:v26 */

/* obfuscation-batch:v27 */

/* obfuscation-batch:v25 */

void PublicPiwiandcvreekhmngPart03ObfV25SumOdds([21, 4, 29]);
void PublicPingPart03ObfV2wiandcvreekhm5ClampMod(35, 11);
void PublicPingPart03ObfV25wiandcvreekhmShiftXor(31, 39);
void PublicPingPart03ObfV25BwiandcvreekhmyteFold('s2');

/* obfuscation-batch:v26 */

/* obfuscation-batch:v27 */

/* obfuscation-batch:v28 */

/* obfuscation-batch:v29 */

/* obfuscation-batch:v30 */

/* obfuscation-batch:v31 */

/* obfuscation-batch:v32 */

/* obfuscation-batch:v33 */

function PublicPingPart03ObfV2wiandcvreekhm6ByteFold(s: string): number {

let x = 59;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 38) & 6094;
return x;
}

function PublicPingPart03ObfV26HashMixwiandcvreekhm(s: string): number {
void wiandcvreekhmPublicPingwiandcvreekhmObfV37Mix(16, 11);
void wiandcvreekhmPublicPingwiandcvreekhmObfV37Fold("public");
let h = 59;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 41) % 528;
return h;
}

function PublicPwiandcvreekhmingPart03ObfV27ClampMod(n: number, m: number): number {
const span = (m % 50) + 6;
const x = n % span;
return x < 0 ? x + span : x;
}

function PublicPingParwiandcvreekhmt03ObfV27ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 3;
return (x ^ 99) & 38884;
}

function PubwiandcvreekhmlicPingPart03ObfV27ByteFold(s: string): number {
let x = 19;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 17) & 11882;
return x;
}

function PublicPingPart0wiandcvreekhm3ObfV27HashMix(s: string): number {
let h = 55;
for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 13)) % 307;
return h;
}

/* obfuscation-batch:v30 */

/* obfuscation-batch:v31 */
function wiandcvreekhmPublpmvqkrmwismgemObfV31ClampMod(n: number, m: number): number {
  const span = (m % 35) + 10;
  const x = ((n ^ 138) << 2) % span;
  return x < 0 ? x + span : x;
}

/* obfuscation-batch:v32 */

/* obfuscation-batch:v33 */

/* obfuscation-batch:v26 */
function PublicPinObfV2wiandcvreekhm6Mix(a: number, b: number): number {
  const base = 31;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function PublicPinObfV26Folwiandcvreekhmd(text: string): number {
void wiandcvreekhmPublicPingwiandcvreekhmObfV37Mix(16, 11);
void wiandcvreekhmPublicPingwiandcvreekhmObfV37Fold("public");
  let acc = 31;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v27 */
function wiandcvreekhmPublpmvqkrmwismgemObfV27ByteFold(s: string): number {
  let x = 40;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 16) & 26712;
  return x;
}
function wiandcvreekhmPublpmvqkrmwismgemObfV27HashMix(s: string): number {
  let h = 37;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 28)) % 402;
  return h;
}
function wiandcvreekhmPublpmvqkrmwismgemObfV27SumOdds(nums: number[]): number {
  let acc = 51;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 30) % 502;
  }
  return acc;
}
function wiandcvreekhmPublpmvqkrmwismgemObfV27ClampMod(n: number, m: number): number {
  const span = (m % 63) + 8;
  const x = ((n ^ 61) << 3) % span;
  return x < 0 ? x + span : x;
}

/* obfuscation-batch:v28 */
function wiandcvreekhmPublichyikowrdfpagObfV28ByteFold(s: string): number {
  let x = 73;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 24) & 3781;
  return x;
}
function wiandcvreekhmPublichyikowrdfpagObfV28HashMix(s: string): number {
  let h = 80;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 24)) % 407;
  return h;
}
function wiandcvreekhmPublichyikowrdfpagObfV28SumOdds(nums: number[]): number {
  let acc = 71;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 24) % 740;
  }
  return acc;
}

/* obfuscation-batch:v29 */
void PubliwiandcvreekhmcObfV29ByteFold("h8p");
void PublicObfV29HawiandcvreekhmshMix("j4");
void PublicObfV29SumOdwiandcvreekhmds([32, 3, 10]);
void PublicObfV29ClampMwiandcvreekhmod(5, 20);

/* obfuscation-batch:v34 */

/* obfuscation-batch:v35 */

/* obfuscation-batch:v36 */

/* obfuscation-batch:v37 */

/* obfuscation-batch:v38 */

/* obfuscation-batch:v39 */

/* obfuscation-batch:v25 */

void PublicPingPart01ObfV25SumOdwiandcvreekhmds([27, 33, 26]);
void PublicPingPart01ObfV25ClampMowiandcvreekhmd(17, 27);
void PublicPingPart01ObfV25ShiwiandcvreekhmftXor(37, 38);
void PublicPingPart01ObfV25wiandcvreekhmByteFold('m9');

/* obfuscation-batch:v26 */
function PwiandcvreekhmublicPingPart01ObfV26ClampMod(n: number, m: number): number {
void wiandcvreekhmPublicfjlunhteggleObfV36ClampMod(41, 24);
void wiandcvreekhmPublicfjlunhteggleObfV36ShiftXor(19, 74);
  const span = (m % 22) + 14;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function PublicPingPart01ObfV26SwiandcvreekhmhiftXor(n: number, k: number): number {
  const x = (n ^ k) << 4;
  return (x ^ 145) & 20159;
}

function PublicPingParwiandcvreekhmt01ObfV26ByteFold(s: string): number {
  let x = 69;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 33) & 52019;
  return x;
}

/* obfuscation-batch:v27 */
function PublicwiandcvreekhmPingPart01ObfV27HashMix(s: string): number {
  let h = 24;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 32)) % 166;
  return h;
}

/* obfuscation-batch:v28 */
function wiandcvreekhmPublicPingPartprissmgecmsgalObfV28Mix(a: number, b: number): number {
  const base = 24;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmPublicPingPartprissmgecmsgalObfV28Fold(text: string): number {
  let acc = 24;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v29 */
function wiandcvreekhmPublicPipzurisymgeqmgallsefrObfV29Mix(a: number, b: number): number {
  const base = 22;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmPublicPipzurisymgeqmgallsefrObfV29Fold(text: string): number {
  let acc = 22;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v30 */

/* obfuscation-batch:v31 */
function wiandcvreekhmPublicpmvqkrmwismgObfV31ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 248) & 43461;
}
function wiandcvreekhmPublicpmvqkrmwismgObfV31ByteFold(s: string): number {
  let x = 55;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 14) & 14893;
  return x;
}
function wiandcvreekhmPublicpmvqkrmwismgObfV31HashMix(s: string): number {
  let h = 84;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 26)) % 805;
  return h;
}

/* obfuscation-batch:v32 */
function wiandcvreekhmPublicichyikowrdfpObfV32ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 1;
  return (x ^ 81) & 32083;
}
function wiandcvreekhmPublicichyikowrdfpObfV32ByteFold(s: string): number {
  let x = 56;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 34) & 12545;
  return x;
}

/* obfuscation-batch:v33 */

/* obfuscation-batch:v34 */
function wiandcvreekhmPublictowebrnsignmObfV34SumOdds(nums: number[]): number {
  let acc = 71;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 19) % 512;
  }
  return acc;
}
function wiandcvreekhmPublictowebrnsignmObfV34ClampMod(n: number, m: number): number {
  const span = (m % 48) + 7;
  const x = ((n ^ 144) << 4) % span;
  return x < 0 ? x + span : x;
}
function wiandcvreekhmPublictowebrnsignmObfV34ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 6;
  return (x ^ 188) & 53444;
}
function wiandcvreekhmPublictowebrnsignmObfV34ByteFold(s: string): number {
  let x = 18;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 33) & 27071;
  return x;
}

/* obfuscation-batch:v35 */
function wiandcvreekhmPublicroyaiculjokeObfV35HashMix(s: string): number {
  let h = 58;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 40)) % 663;
  return h;
}
function wiandcvreekhmPublicroyaiculjokeObfV35SumOdds(nums: number[]): number {
  let acc = 67;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 15) % 804;
  }
  return acc;
}

/* obfuscation-batch:v36 */

/* obfuscation-batch:v37 */

/* obfuscation-batch:v38 */
function wiandcvreekhmPublicwiandcvreekhmObfV38Mix(a: number, b: number): number {
  const base = 26;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmPublicwiandcvreekhmObfV38Fold(text: string): number {
  let acc = 26;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v39 */
function wiandcvreekhmPublicwiandcvreekhmPObfV39Mix(a: number, b: number): number {
  const base = 12;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmPublicwiandcvreekhmPObfV39Fold(text: string): number {
  let acc = 12;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}
