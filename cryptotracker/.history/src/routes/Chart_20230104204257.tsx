import { useParams } from 'react-router-dom';

export default function Chart() {
  const params = useParams();
  console.log(params);
  return <div>chart</div>;
}
