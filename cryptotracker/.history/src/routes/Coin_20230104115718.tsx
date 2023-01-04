import { useParams } from 'react-router-dom';

interface RouterParams {
  coinId: string;
}

export default function Coin() {
  const { coinId } = useParams<RouterParams>();
  console.log(coinId);
  return <div>Coin</div>;
}
