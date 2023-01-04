import { createGlobalStyle } from 'styled-components';
import Router from './Router';

const GlobalStyle = createGlobalStyle`
  body{
    color:red;
  }
`;

function App() {
  return <Router />;
}

export default App;
