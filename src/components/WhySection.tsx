import React from 'react';

const WhySection = () => {
  return (
    <div className="bg-white py-16">
      <div className="section-container text-center">
        <h2 className="heading-lg mb-4">
          Why Founders Like You Join Scalable Stories
        </h2>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Because you're tired of being overwhelmed and ready for real progress.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="font-semibold text-lg mb-2">⏳ Save Time</h3>
            <p className="text-muted-foreground">
              Automate the busywork and focus on what actually grows your business.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="font-semibold text-lg mb-2">🚀 Build Smarter</h3>
            <p className="text-muted-foreground">
              Use templates and AI workflows — no more starting from scratch.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhySection;
