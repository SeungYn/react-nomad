import { useQuery } from '@tanstack/react-query';
import { useOutletContext } from 'react-router-dom';
import { fetchCoinHistory } from './api';

interface IHistorical {
  close: '17361.5';
  high: '17853.8';
  low: '17261.4';
  market_cap: 0;
  open: '17804.2';
  time_close: 1671063840;
  time_open: 1671062400;
  volume: '3169.19749712';
}

interface CharProps {
  coinId: string;
}

export default function Chart() {
  const { coinId } = useOutletContext<CharProps>();
  const { isLoading, data } = useQuery(['ohlcv', coinId], () =>
    fetchCoinHistory(coinId)
  );
  console.log(data);
  return <div>chart</div>;
}
