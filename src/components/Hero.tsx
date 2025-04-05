import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText } from 'lucide-react';

const Hero = () => {
  // Calculate base path for assets
  console.log("🔥Hero Component Rendered");
  const basePath = import.meta.env.DEV ? '' : '/scalable-stories-website';
  
  return (
    <div className="relative overflow-hidden pt-16">
      <div className="section-container pt-10 md:pt-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="mb-4 inline-block">
              <div className="px-3 py-1 text-sm font-medium bg-white-50 text-white-700 rounded-full">
              </div>
            </div>
            <h1 className="heading-xl mb-6">
              What If You Got <span className="text-coral-600 relative">AI Advice</span> That Actually Fit <span className="italic">Your Business</span>?
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              A weekly newsletter built just for solopreneurs who want to work smarter, not harder—with the help of AI, smart workflows, and zero BS.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-coral-600 hover:bg-coral-500 text-white">
                <a href="#newsletter" className="flex items-center gap-2">
                  <span className="flex items-center gap-1">✓ Add Me to the Early List</span>
                </a>
              </Button>
              
              <Button asChild size="lg" variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
              <a
                href={`${basePath}/lovable-uploads/2025 Dream Life.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <FileText className="h-4 w-4" /> View a Sample Newsletter
              </a>
            </Button>

            </div>
            
            <div className="mt-8 text-sm text-muted-foreground">
            </div>
          </div>

          <div className="md:col-span-5 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <div className="relative">
              <img 
                src={`${basePath}/lovable-uploads/Hero-Founder-Image.png`}
                alt="Solopreneur thinking about AI advice" 
                className="w-full rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;