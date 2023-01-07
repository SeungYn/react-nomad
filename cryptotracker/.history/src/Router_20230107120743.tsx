import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Chart from './routes/Chart';
import Coin from './routes/Coin';
import Coins from './routes/Coins';
import CoinsFetch from './routes/CoinsFetch';
import Price from './routes/Price';

interface IRouterProps {
  toggleDark: () => void;
  isDark: boolean;
}

export default function Router({ toggleDark, isDark }: IRouterProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/:coinId' element={<Coin isDark={isDark} />}>
          <Route path={`price`} element={<Price />} />
          <Route path={`chart`} element={<Chart isDark={isDark} />} />
        </Route>
        <Route path='/' element={<Coins toggleDark={toggleDark} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
