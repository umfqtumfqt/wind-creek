import { SESSION_SPINS } from '../constants/config';

export type SessionResult = {
  net: number;
  best: number;
  spins: number;
  tokenEarned: boolean;
  tokenIndex: number;
};

export function emptyResult(): SessionResult {
  return { net: 0, best: 0, spins: SESSION_SPINS, tokenEarned: false, tokenIndex: -1 };
}

export function headline(net: number): string {
  return net > 0 ? 'BIG NIGHT!' : 'SESSION OVER';
}
