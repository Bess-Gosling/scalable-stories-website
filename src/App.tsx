import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import NotFound from './pages/NotFound';

const App = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="*" element={<NotFound />} />
    console.log('VITE_SUPABASE_URL:', import.meta.env.VITE_SUPABASE_URL);
  </Routes>
);

// ✅ This export is required
export default App;
