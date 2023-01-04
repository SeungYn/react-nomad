import { useParams } from 'react-router-dom';
import styled from 'styled-components';

type RoutesParams = {
  coinId: string | undefined;
};

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
`;

export default function Coin() {
  const [loading, setLoading] = useState(true);
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
