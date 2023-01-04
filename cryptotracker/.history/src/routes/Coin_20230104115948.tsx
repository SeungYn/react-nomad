import { useParams } from 'react-router-dom';

export default function Coin() {
  const { coinId } = useParams<{ coinId: string }>();
  console.log(coinId);
  return <div>Coin : {coinId}</div>;
}
