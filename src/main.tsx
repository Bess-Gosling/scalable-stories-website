import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx'; // ✅ This depends on the export above
import { BrowserRouter } from 'react-router-dom';
import { Buffer } from 'buffer';
window.Buffer = Buffer;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename="/">
    <App />
  </BrowserRouter>
);
