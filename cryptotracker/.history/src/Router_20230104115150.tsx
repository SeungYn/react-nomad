import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Coins from './routes/Coins';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Coins />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
