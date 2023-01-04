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

export async function fetchCoinHistory(coinId: string) {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 24 * 7;

  return fetch(`${TEST_BASE_URL}?coinId=${coinId}`).then((res) => res.json());
}
