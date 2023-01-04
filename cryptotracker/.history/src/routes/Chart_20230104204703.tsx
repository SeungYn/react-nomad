import { useOutletContext } from 'react-router-dom';

interface CharProps {
  coinId: string;
}

export default function Chart() {
  const { coinId } = useOutletContext<CharProps>();
  console.log(params);
  return <div>chart</div>;
}
