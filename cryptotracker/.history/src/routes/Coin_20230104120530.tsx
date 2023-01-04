import { useParams } from 'react-router-dom';

interface RoutesParams {
  coinId: string;
}

export default function Coin() {
  const { coinId } = useParams<RoutesParams>();

  return <div>Coin : {coinId}</div>;
}
