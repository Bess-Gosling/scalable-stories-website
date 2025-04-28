import React from 'react';
import { CheckCircle, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';

const ThankYouPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      
      {/* ✅ Consistent Navbar at the top */}
      <Navbar />

      {/* ✅ Main Content Centered */}
      <main className="flex-grow flex items-center justify-center px-4 py-24 bg-white">
        <div className="w-full max-w-3xl flex flex-col items-center text-center space-y-8">

          {/* Top Icon */}
          <div className="flex justify-center">
            <CheckCircle className="h-16 w-16 text-coral-600" />
          </div>

          {/* Headline */}
          <h1 className="heading-xl">
            You're In! 🎉
          </h1>

          {/* Subheadline */}
          <p className="text-lg text-muted-foreground max-w-2xl">
            Your Founder Vault is ready. Download your templates, AI workflows, and 90-day sprint plan below — and start scaling smarter today.
          </p>

          {/* Download Button */}
          <div>
            <Button asChild size="lg" className="bg-coral-600 hover:bg-coral-500 text-white px-8 py-4">
              <a
                href="/lovable-uploads/Founder-Vault.zip"
                download
                className="flex items-center gap-2"
              >
                <Download className="h-5 w-5" /> Download the Vault
              </a>
            </Button>
          </div>

          {/* 
          ✅ Secondary Offer (commented out)

          <h2 className="heading-lg">
            Ready to Build Momentum Even Faster?
          </h2>

          <p className="text-lg text-muted-foreground max-w-xl">
            Join the free 5-Day Founder Sprint — tiny actions each day to create unstoppable progress.
          </p>

          <div>
            <Button asChild variant="outline" size="lg" className="border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-4">
              <a href="/founder-sprint" className="flex items-center gap-2">
                <Rocket className="h-5 w-5" /> Join the 5-Day Sprint
              </a>
            </Button>
          </div>
          */}

        </div>
      </main>
    </div>
  );
};

export default ThankYouPage;

