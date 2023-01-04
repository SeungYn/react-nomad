import { useOutletContext } from 'react-router-dom';

export default function Chart() {
  const params = useOutletContext();
  console.log(params);
  return <div>chart</div>;
}
