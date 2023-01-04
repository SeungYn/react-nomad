import { useParams } from 'react-router-dom';

interface Params{
	{ coinId: string }
}

export default function Coin() {
  const { coinId } = useParams<Params>();
  console.log(coinId);
  return <div>Coin</div>;
}
