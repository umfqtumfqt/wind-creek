export type Mission = {
  id: string;
  title: string;
  target: number;
  reward: number;
  /** Which counter from a finished show feeds this mission. */
  metric: 'spins' | 'jokers' | 'wins' | 'cards' | 'chests';
};

const POOL: Mission[] = [
  {id: 'spin10', title: 'SPIN 10 TIMES', target: 10, reward: 200, metric: 'spins'},
  {id: 'joker3', title: 'HIT 3 JOKERS', target: 3, reward: 400, metric: 'jokers'},
  {id: 'chest1', title: 'OPEN A CHEST', target: 1, reward: 150, metric: 'chests'},
  {id: 'cards2', title: 'COLLECT 2 CARDS', target: 2, reward: 250, metric: 'cards'},
  {id: 'wins4', title: 'LAND 4 WINS', target: 4, reward: 300, metric: 'wins'},
  {id: 'spin25', title: 'SPIN 25 TIMES', target: 25, reward: 350, metric: 'spins'},
  {id: 'cards5', title: 'COLLECT 5 CARDS', target: 5, reward: 400, metric: 'cards'},
  {id: 'wins8', title: 'LAND 8 WINS', target: 8, reward: 380, metric: 'wins'},
];

export type MissionState = Mission & {
  progress: number;
  claimed: boolean;
};

/** Four missions per day, drawn from a pool of eight on the local clock. */
export function dailyMissions(seedDay?: number): MissionState[] {
  const day =
    typeof seedDay === 'number'
      ? seedDay
      : Math.floor(Date.now() / (24 * 60 * 60 * 1000));
  const picked: MissionState[] = [];
  const used: Record<number, boolean> = {};
  for (let i = 0; i < 4; i++) {
    let idx = (day * 3 + i * 5 + 1) % POOL.length;
    let guard = 0;
    while (used[idx] && guard < POOL.length) {
      idx = (idx + 1) % POOL.length;
      guard++;
    }
    used[idx] = true;
    picked.push({...POOL[idx], progress: 0, claimed: false});
  }
  // Seed a little starting progress so the panel never reads as empty.
  picked[0].progress = Math.min(picked[0].target, Math.ceil(picked[0].target * 0.7));
  picked[3].progress = picked[3].target;
  return picked;
}

export type ShowCounters = {
  spins: number;
  jokers: number;
  wins: number;
  cards: number;
  chests: number;
};

export function applyCounters(
  missions: MissionState[],
  counters: ShowCounters,
): MissionState[] {
  return missions.map(m => {
    const gained = counters[m.metric] || 0;
    if (gained <= 0) {
      return m;
    }
    return {...m, progress: Math.min(m.target, m.progress + gained)};
  });
}

export function claimMission(
  missions: MissionState[],
  id: string,
): {missions: MissionState[]; reward: number} {
  let reward = 0;
  const next = missions.map(m => {
    if (m.id !== id || m.claimed || m.progress < m.target) {
      return m;
    }
    reward = m.reward;
    return {...m, claimed: true};
  });
  return {missions: next, reward};
}

export const openMissionCount = (missions: MissionState[]): number =>
  missions.filter(m => !m.claimed && m.progress >= m.target).length;
