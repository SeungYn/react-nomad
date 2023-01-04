import { useQuery } from '@tanstack/react-query';
import { useOutletContext } from 'react-router-dom';
import { fetchCoinHistory } from './api';
import ApexChart from 'react-apexcharts';

interface IHistorical {
  close: number;
  high: number;
  low: number;
  market_cap: number;
  open: number;
  time_close: string;
  time_open: string;
  volume: number;
}

interface CharProps {
  coinId: string;
}

export default function Chart() {
  const { coinId } = useOutletContext<CharProps>();
  const { isLoading, data } = useQuery<IHistorical[]>(['ohlcv', coinId], () =>
    fetchCoinHistory(coinId)
  );
  console.log(data);
  return (
    <div>
      {isLoading ? (
        'Loading chart...'
      ) : (
        <ApexChart
          type='line'
          series={[{ name: 'sales', data: data?.map((price) => price.close) }]}
          options={{
            theme: {
              mode: 'dark',
            },
            chart: {
              height: 500,
              width: 500,
            },
          }}
        />
      )}
    </div>
  );
}
