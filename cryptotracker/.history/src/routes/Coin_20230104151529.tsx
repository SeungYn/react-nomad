import { useParams } from 'react-router-dom';
import styled from 'styled-components';

type RoutesParams = {
  coinId: string | undefined;
};

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
`;

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
