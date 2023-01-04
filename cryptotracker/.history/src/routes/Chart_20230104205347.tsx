import { useQuery } from '@tanstack/react-query';
import { useOutletContext } from 'react-router-dom';
import { fetchCoinHistory } from './api';

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
