import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, withTheme } from 'styled-components';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const darkTheme = {
  textColor: 'white',
  backgroundColor: '#111',
};

const lightTheme = {
  textColor: '#111',
  backgroundColor: 'whitesmoke',
};

root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();