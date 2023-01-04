const BASE_URL = 'https://api.coinpaprika.com/v1';

export async function fetchCoins() {
  return fetch(`${BASE_URL}/coin`).then((res) => res.json());
}
export function fetchCoinInfo() {}
