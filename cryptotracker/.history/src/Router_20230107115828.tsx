import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Chart from './routes/Chart';
import Coin from './routes/Coin';
import Coins from './routes/Coins';
import CoinsFetch from './routes/CoinsFetch';
import Price from './routes/Price';

interface IRouterProps {
  toggleDark: () => void;
}

export default function Router({ toggleDark }: IRouterProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/:coinId' element={<Coin />}>
          <Route path={`price`} element={<Price />} />
          <Route path={`chart`} element={<Chart />} />
        </Route>
        <Route path='/' element={<Coins />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
