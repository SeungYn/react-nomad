const BASE_URL = 'https://api.coinpaprika.com/v1';

export async function fetchCoins() {
  return fetch(`${BASE_URL}/coins`).then((res) => res.json());
}
export async function fetchCoinInfo(coninId: string) {
  return fetch(`${BASE_URL}/coins/${coninId}`).then((res) => res.json());
}

export async function fetchCoinTickers(coninId: string) {
  return fetch(`${BASE_URL}/tickers/${coninId}`).then((res) => res.json());
}

const TEST_BASE_URL = 'https://ohlcv-api.nomadcoders.workers.dev';

export function fetchCoinHistory(coinId: string) {
  return fetch(`${TEST_BASE_URL}?coinId=${coinId}`).then((res) => res.json());
}
