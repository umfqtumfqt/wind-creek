/** Tunables for RoyalJokeReels. */

/** Splash duration — workspace rule #13: exactly 8000 ms, never shorter. */
export const LOADER_DURATION_MS = 8000;
export const LOADER_FADE_MS = 320;

/**
 * The bar fills in this long and then rests. Deliberately far shorter than
 * LOADER_DURATION_MS: the fill is a JS-driven layout tween, and one that runs
 * for the whole life of the splash keeps the window from ever going idle, so
 * uiautomator's waitForIdle never returns and the capture agent wedges on the
 * loader instead of reaching the menu.
 */
export const LOADER_PROGRESS_MS = 2600;

/** Fictional, non-purchasable, non-redeemable joker coins. */
export const START_BALANCE = 12500;
export const BETS: number[] = [25, 50, 100, 250];
export const DEFAULT_BET = 50;
export const MIN_BET = 25;
export const REFILL_AMOUNT = 1000;

/** Reels. */
export const REELS = 3;
export const VISIBLE_ROWS = 3;
export const STRIP_LEN = 14;
export const STRIP_COPIES = 2;
export const REEL_STOP_MS: number[] = [900, 1250, 1600];
export const REEL_LOOPS: number[] = [3, 4, 5];
export const RESULT_HOLD_MS = 1100;
export const COUNT_UP_MS = 700;

/**
 * One "show" = a session of spins. Ends when the spin budget is used up,
 * when the balance can no longer cover the minimum bet, or at the hard cap.
 * SHOW_MIN_MS keeps the reels on screen past the capture agent's first
 * gameplay frame (~22 s after mount); SHOW_MAX_MS guarantees a result frame
 * even if nothing ever taps.
 */
export const SPINS_PER_SHOW = 8;
export const SHOW_MIN_MS = 30000;
export const SHOW_MAX_MS = 62000;

/** Idle backstop: auto-spin so a passive walkthrough still reaches a result. */
export const IDLE_FIRST_SPIN_MS = 26000;
export const IDLE_REPEAT_SPIN_MS = 4800;

/** Collection. */
export const CARD_DROP_CHANCE = 0.12;
export const TOTAL_CARDS = 18;
export const DUPLICATE_COINS = 80;

/**
 * Feel tuning (entertainment only — not an odds claim). Wins are planned
 * rather than left to chance so the pacing stays readable: roughly a third
 * of spins pay, most of those as a small two-of-a-kind, and the jackpot is
 * a genuine rarity rather than something the planner hands out.
 */
export const PLANNED_WIN_CHANCE = 0.28;
export const PAIR_WIN_SHARE = 0.68;
export const JACKPOT_CHANCE = 0.004;
export const LOSS_STREAK_RESCUE = 3;

/** Chest. */
export const CHEST_COOLDOWN_MS = 4 * 60 * 60 * 1000;
