import {CARD_DROP_CHANCE, DUPLICATE_COINS, TOTAL_CARDS} from '../constants/config';

export type Scene = {
  index: number;
  title: string;
  needed: number;
  accent: string;
};

export const SCENES: Scene[] = [
  {index: 1, title: 'SCENE 1: RED CURTAIN', needed: 6, accent: '#B21E35'},
  {index: 2, title: 'SCENE 2: THE GILDED BOX', needed: 12, accent: '#6D28D9'},
  {index: 3, title: "SCENE 3: JESTER'S THRONE", needed: 18, accent: '#F4C95D'},
];

export function sceneFor(owned: number): Scene {
  let current = SCENES[0];
  for (let i = 0; i < SCENES.length; i++) {
    if (owned >= SCENES[i].needed) {
      current = SCENES[Math.min(i + 1, SCENES.length - 1)];
    }
  }
  for (let i = 0; i < SCENES.length; i++) {
    if (owned < SCENES[i].needed) {
      return SCENES[i];
    }
  }
  return current;
}

export type CardDrop = {
  /** Index 0..TOTAL_CARDS-1, or -1 when the drop converted to coins. */
  index: number;
  coins: number;
};

/**
 * One roll per resolved spin. A duplicate is re-rolled twice, then pays out
 * in coins instead — the album never stalls on a card you already hold.
 */
export function rollCard(owned: boolean[]): CardDrop | null {
  if (Math.random() > CARD_DROP_CHANCE) {
    return null;
  }
  for (let attempt = 0; attempt < 3; attempt++) {
    const idx = Math.floor(Math.random() * TOTAL_CARDS);
    if (!owned[idx]) {
      return {index: idx, coins: 0};
    }
  }
  return {index: -1, coins: DUPLICATE_COINS};
}

export function initialOwned(seedCount: number): boolean[] {
  const owned: boolean[] = new Array(TOTAL_CARDS).fill(false);
  for (let i = 0; i < Math.min(seedCount, TOTAL_CARDS); i++) {
    owned[i] = true;
  }
  return owned;
}

export const countOwned = (owned: boolean[]): number =>
  owned.reduce((n, v) => (v ? n + 1 : n), 0);
