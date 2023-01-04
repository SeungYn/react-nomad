import { useOutletContext } from 'react-router-dom';

interface CharProps {
  coinId: string;
}

export default function Chart() {
  const { coinId } = useOutletContext<CharProps>();
  console.log(coinId);
  return <div>chart</div>;
}
