
import React from 'react';
import Navbar from '@/components/Navbar';
import ResourceLandingPage from '@/components/DuctTapeResourceLibrary';
import Footer from '@/components/Footer';

const DuctTapeResourceLibrary = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <ResourceLandingPage />
      </main>
      <Footer />
    </div>
  );
};

export default DuctTapeResourceLibrary;
