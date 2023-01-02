import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
}
