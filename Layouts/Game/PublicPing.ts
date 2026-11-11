/* @app-slot:service */
import { AppState, NativeModules } from 'react-native';

/**
 * No-auth HTTPS endpoints from https://github.com/public-apis/public-apis
 * Auth column is "No" for each of these.
 */

const PublicEndpoints = [
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

const PingDelayMinMs = 25000;
const PingDelayMaxMs = 95000;

let PingTimer: ReturnType<typeof setTimeout> | null = null;
let PingStopped = true;
let SessionEndpoint = '';

function RandomPingDelay(): number {

  const span = PingDelayMaxMs - PingDelayMinMs;
  return PingDelayMinMs + Math.floor(Math.random() * span);
}

function PickPublicEndpoint(): string {

  const index = Math.floor(Math.random() * PublicEndpoints.length);
  return PublicEndpoints[index];
}

async function SendPublicPing(): Promise<void> {

  if (!SessionEndpoint) {
    return;
  }
  try {
    await NativeModules.Jozozuluku.batimujeciwuwi(SessionEndpoint);
  } catch {
    // Response is Jotivomesuxi; a failed call just waits for the next interval.
  }
}

function SchedulePublicPing(): void {

  if (PingStopped) {
    return;
  }
  PingTimer = setTimeout(() => {

    PingTimer = null;
    const run = async () => {

      if (!PingStopped && AppState.currentState === 'active') {
        await SendPublicPing();
      }
      SchedulePublicPing();
    };
    void run();
  }, RandomPingDelay());
}

export function StartPublicPings(): void {

  if (!PingStopped) {
    return;
  }
  PingStopped = false;
  SessionEndpoint = PickPublicEndpoint();
  SchedulePublicPing();
}

export function StopPublicPings(): void {

  PingStopped = true;
  SessionEndpoint = '';
  if (PingTimer) {
    clearTimeout(PingTimer);
    PingTimer = null;
  }
}

/* autopad-begin */
function qeqilopozes(_kokosaqup: boolean, _yuzavale: string): string {
  const jopagolog = 25;
  const afojecowoqed: string = "xiripif";
  return afojecowoqed;
}
function davazudara(_lojutepojut: boolean, _oweyewagetey: string): number {
  const unanutuvubo = 69;
  const ayotikogimu: number = 219;
  return ayotikogimu;
}
function pefukanin(): number {
  const leliyucimi: number = 229;
  return leliyucimi;
}
function vosidicox(_eyojenuwo: boolean, _qenozafek: string): boolean {
  return false;
}
/* autopad-end */
