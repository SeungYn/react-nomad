import { useParams } from 'react-router-dom';

interface RoutesParams {
  coinId: string | undefined;
}

export default function Coin() {
  const { coinId } = useParams<RoutesParams>();

  return <div>Coin : {coinId}</div>;
}
