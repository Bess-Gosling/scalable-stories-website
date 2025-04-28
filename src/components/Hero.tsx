import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const basePath = '';

  return (
    <div className="relative overflow-hidden pt-20 pb-16 bg-white">
      <div className="section-container text-center">
        <h1 className="heading-xl mb-6 max-w-4xl mx-auto">
          Build Smarter. Work Less. Scale Faster — <span className="text-coral-600">with AI that Fits Your Flow.</span>
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Weekly action steps, smart automations, and simple frameworks to scale your business without burnout.
        </p>
        <div className="flex justify-center">
          <Button asChild size="lg" className="inline-flex items-center justify-center gap-2 rounded-md bg-coral-600 hover:bg-coral-500 text-white font-semibold text-base px-8 py-4 transition-colors">
            <a href="#newsletter" className="flex items-center gap-2">
              <ArrowRight className="h-5 w-5" /> Join Scalable Stories (Free)
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;