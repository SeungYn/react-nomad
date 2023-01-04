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

interface InfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  logo: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;
}

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USE: {
      ath_date: '2021-11-10T16:51:15Z';
      ath_price: 68692.137036932;
      market_cap: 324806740405;
      market_cap_change_24h: 0.82;
      percent_change_1h: 0.04;
      percent_change_1y: -63.68;
      percent_change_6h: 0.96;
      percent_change_7d: 1.26;
      percent_change_12h: 1.37;
      percent_change_15m: -0.03;
      percent_change_24h: 0.81;
      percent_change_30d: -0.82;
      percent_change_30m: 0.02;
      percent_from_price_ath: -75.44;
      price: 16871.450752834073;
      volume_24h: 17784774751.34948;
      volume_24h_change_24h: 37.9;
    };
  };
}

export default function Coin() {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams<RoutesParams>();
  const { state } = useLocation() as RouteState;
  const [info, setInfo] = useState<InfoData>({});
  const [price, setPriceInfo] = useState<PriceData>({});

  useEffect(() => {
    (async () => {
      const infoData = await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      ).json();
      const priceData = await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      ).json();
      console.log(infoData);
      console.log(priceData);
      setInfo(infoData);
      setPriceInfo(priceData);
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
