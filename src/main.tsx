
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; 
import App from './App';
import './index.css'; 
import { CookieProvider } from './context/CookiePreferenceContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CookieProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CookieProvider>
  </React.StrictMode>,
);