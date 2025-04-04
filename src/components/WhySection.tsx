
import React from 'react';

const WhySection = () => {
  return (
    <div className="bg-white">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-6">This isn't another AI hype digest.</h2>
            <p className="text-xl text-muted-foreground">
              It's the email you'll actually read—and use.
            </p>
          </div>
          
          <div className="bg-gray-50 border border-gray-100 p-8 rounded-xl mb-12">
            <h3 className="heading-md mb-6 text-center">Solopreneurs Don't Need More Tools.<br/>They Need Better Guidance.</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg border border-gray-100">
                <div className="flex items-start gap-3 mb-2">
                  <div className="bg-coral-100 text-coral-700 w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-medium">1</span>
                  </div>
                  <h4 className="font-semibold">Wearing all the hats?</h4>
                </div>
                <p className="text-muted-foreground ml-10">
                  We show you what to prioritize when you're doing it all yourself.
                </p>
              </div>
              
              <div className="bg-white p-5 rounded-lg border border-gray-100">
                <div className="flex items-start gap-3 mb-2">
                  <div className="bg-coral-100 text-coral-700 w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-medium">2</span>
                  </div>
                  <h4 className="font-semibold">DIYing without direction?</h4>
                </div>
                <p className="text-muted-foreground ml-10">
                  Get clear frameworks that work for real businesses, not theory.
                </p>
              </div>
              
              <div className="bg-white p-5 rounded-lg border border-gray-100">
                <div className="flex items-start gap-3 mb-2">
                  <div className="bg-coral-100 text-coral-700 w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-medium">3</span>
                  </div>
                  <h4 className="font-semibold">Can't afford expert help yet?</h4>
                </div>
                <p className="text-muted-foreground ml-10">
                  Access practical advice that doesn't require a huge budget.
                </p>
              </div>
              
              <div className="bg-white p-5 rounded-lg border border-gray-100">
                <div className="flex items-start gap-3 mb-2">
                  <div className="bg-coral-100 text-coral-700 w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-medium">4</span>
                  </div>
                  <h4 className="font-semibold">Feeling tech overwhelm?</h4>
                </div>
                <p className="text-muted-foreground ml-10">
                  Cut through the noise with only the tools worth your time.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="heading-md mb-4">Get Clarity. Save Time. Build Smarter.</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Weekly emails that cut the fluff and give you step-by-step, actionable ideas to work less and earn more—powered by AI.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhySection;
