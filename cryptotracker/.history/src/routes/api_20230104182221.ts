const BASE_URL = 'https://api.coinpaprika.com/v1';

export function fetchCoins() {
  return fetch(`${BASE_URL}/coin`).then((res) => res.json());
}
export function fetchCoinInfo(coninId: string) {
  return fetch(`${BASE_URL}/coins/${coninId}`).then((res) => res.json());
}
