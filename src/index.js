import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import "./styles/themes/bootstrap.scss";
import ThemeChangeProvider from "./providers/theme-change";

ReactDOM.render(
  <React.StrictMode>
    <ThemeChangeProvider>
        <App />
    </ThemeChangeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
