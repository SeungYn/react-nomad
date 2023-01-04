import { useParams } from 'react-router-dom';

export default function Coin() {
  const params = useParams();
  console.log(params);
  return <div>Coin</div>;
}
