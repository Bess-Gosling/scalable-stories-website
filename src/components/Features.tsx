import React from 'react';
import { Zap, Layers, RefreshCw, Target } from 'lucide-react';

const featuresData = [
  {
    title: "Automate the stuff that slows you down",
    description: "Learn what's actually worth automating in your business, and the simplest ways to do it.",
    icon: <Zap className="h-5 w-5 text-coral-500" />
  },
  {
    title: "Show up like a real brand (not a side hustle)",
    description: "Get practical tips to level up your brand without expensive designers or endless revisions.",
    icon: <Layers className="h-5 w-5 text-coral-500" />
  },
  {
    title: "Use AI tools that actually fit your workflow",
    description: "Cut through the noise and find the AI solutions that make sense for your specific business.",
    icon: <RefreshCw className="h-5 w-5 text-coral-500" />
  },
  {
    title: "Focus on the 20% that moves the needle",
    description: "Stop spreading yourself thin. Learn what actually drives growth for solopreneurs.",
    icon: <Target className="h-5 w-5 text-coral-500" />
  }
];

const Features = () => {
  return (
    <div className="bg-gray-50" id="features">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">No hype. No overwhelm.</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Just short, actionable emails that help you:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:translate-y-[-2px]"
            >
              <div className="flex items-center justify-center gap-4">
                <div className="bg-coral-50 p-3 rounded-full">
                  {feature.icon}
                </div>
                <div>
                  {/* Removed Check icon but retained space */}
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5" /> {/* Empty spacer div */}
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                  </div>
                  <p className="text-muted-foreground ml-7">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
