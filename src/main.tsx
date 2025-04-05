import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx'; // ✅ This depends on the export above
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename="/scalable-stories-website">
    <App />
  </BrowserRouter>
);
