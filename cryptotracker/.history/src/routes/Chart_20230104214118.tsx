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

  return (
    <div>
      {isLoading ? (
        'Loading chart...'
      ) : (
        <ApexChart
          type='line'
          series={[
            {
              name: 'price',
              data: data?.map((price) => +price.close) as number[],
            },
          ]}
          options={{
            theme: {
              mode: 'dark',
            },
            chart: {
              height: 500,
              width: 500,
              toolbar: {
                show: false,
              },
            },
            grid: { show: false },
            stroke: {
              curve: 'smooth',
              width: 5,
            },
            yaxis: {
              show: false,
            },
            xaxis: {
              labels: { show: false },
              categories: data?.map((price) =>
                new Date(+price.time_close * 1000).toISOString()
              ) as string[],
            },
            fill: {
              type: 'gradient',
              gradient: { gradientToColors: ['blue'], stops: [0, 100] },
            },
            colors: ['red'],
            tooltip: {
              y: { formatter: (value) => `$${value.toFixed(3)}` },
            },
          }}
        />
      )}
    </div>
  );
}
