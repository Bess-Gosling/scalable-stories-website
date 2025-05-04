
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BlogLibrary from '@/components/blog/BlogGrid';
import WhySection from '@/components/WhySection';
import NewsletterForm from '@/components/NewsletterForm';
import Footer from '@/components/Footer';
import FreeResources from '@/components/product/ProductGrid.jsx';

const ProductPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <FreeResources />
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
