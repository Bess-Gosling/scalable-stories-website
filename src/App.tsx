import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import DuctTapeResourceLibrary from './pages/Blog';
import './index.css';
import { Toaster } from '@/components/ui/toaster';
import ThankYouPage from './components/ThankYou';
import BlogFullPage from '@/components/blog/BlogFullPage';
import BlogGrid from '@/pages/Blog';
import ProductFullPage from '@/components/product/ProductFullPage';
import ProductGrid from '@/pages/Product';

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/blog" element={<BlogGrid />} />
      <Route path="/blog/:slug" element={<BlogFullPage />} />
      <Route path="/resources" element={<ProductGrid />} />
      <Route path="/resources/:slug" element={<ProductFullPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Toaster /> {/* ✅ Correct placement */}
  </>
);

export default App;
