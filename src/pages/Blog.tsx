
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BlogLibrary from '@/components/blog/BlogGrid';
import WhySection from '@/components/WhySection';
import NewsletterForm from '@/components/NewsletterForm';
import Footer from '@/components/Footer';
import Blog from '@/components/blog/BlogGrid.jsx';

const BlogPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Blog />
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
