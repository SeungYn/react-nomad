import { useOutlet } from 'react-router-dom';

export default function Chart() {
  const params = useOutlet();
  console.log(params);
  return <div>chart</div>;
}
