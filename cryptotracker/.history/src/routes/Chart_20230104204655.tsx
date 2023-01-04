import { useOutletContext } from 'react-router-dom';

interface CharProps {
  coinId: string;
}

export default function Chart() {
  const params = useOutletContext<CharProps>();
  console.log(params);
  return <div>chart</div>;
}
