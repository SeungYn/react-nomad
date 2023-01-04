import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';

type RoutesParams = {
  coinId: string | undefined;
};

interface RouteState {
  state: { name: string };
}

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
  const { state } = useLocation() as RouteState;

  useEffect(() => {
    (async () => {
      const infoData = await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      ).json();
      const priceData = await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      ).json();
      console.log(priceData);
    })();
  }, []);

  return (
    <Container>
      <Header>
        <Title>{state?.name || 'loading...'}</Title>
      </Header>

      {loading ? <Loader>'loading...'</Loader> : null}
    </Container>
  );
}
