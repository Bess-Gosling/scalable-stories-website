
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import WhySection from '@/components/WhySection';
import NewsletterForm from '@/components/NewsletterForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <WhySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
