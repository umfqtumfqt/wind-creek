import { useEffect, useState } from 'react';
import store from '../game/store';

/** Narrow selector — components subscribe to the single value they render. */
export function useBalance(): number {
  const [balance, setBalance] = useState(() => store.getBalance());
  useEffect(() => store.subscribe(() => setBalance(store.getBalance())), []);
  return balance;
}

export function useTokens(): boolean[] {
  const [tokens, setTokens] = useState(() => store.get().tokens);
  useEffect(() => store.subscribe(() => setTokens(store.get().tokens)), []);
  return tokens;
}

export function useBestWin(): number {
  const [best, setBest] = useState(() => store.get().bestWin);
  useEffect(() => store.subscribe(() => setBest(store.get().bestWin)), []);
  return best;
}

export default useBalance;
