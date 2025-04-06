import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import DuctTapeResourceLibrary from './pages/Resources';
import './index.css';
import { Toaster } from '@/components/ui/toaster';

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/resources" element={<DuctTapeResourceLibrary />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Toaster /> {/* ✅ Correct placement */}
  </>
);

export default App;
