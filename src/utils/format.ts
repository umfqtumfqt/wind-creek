/** 12500 -> "12,500". Never a currency glyph — coins are virtual. */
export function formatCoins(n: number): string {
  const sign = n < 0 ? '-' : '';
  const abs = Math.abs(Math.round(n));
  return sign + abs.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function signedCoins(n: number): string {
  return (n > 0 ? '+' : '') + formatCoins(n);
}

export function mmss(ms: number): string {
  const total = Math.max(0, Math.floor(ms / 1000));
  const m = Math.floor(total / 60);
  const s = total % 60;
  return (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
}
