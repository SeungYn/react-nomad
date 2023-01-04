import { useParams } from 'react-router-dom';

type RoutesParams = {
  coinId: string | undefined;
};

export default function Coin() {
  const { coinId } = useParams<RoutesParams>();

  return (
    <Container>
      <Header>
        <Title>코인</Title>
      </Header>

      {loading ? <Loader>'loading...'</Loader> : null}
    </Container>
  );
}
