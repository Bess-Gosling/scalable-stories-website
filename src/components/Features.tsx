import React from 'react';
import { Zap, Layers, RefreshCw, Target } from 'lucide-react';

const featuresData = [
  {
    title: "Automate the busywork holding you back",
    description: "Discover what’s worth automating first so you can free up hours every week (without tech overwhelm).",
    icon: <Zap className="h-5 w-5 text-coral-500" />
  },
  {
    title: "Show up like a real brand (even if you’re still small)",
    description: "Practical branding strategies that make you look polished, credible, and ready to scale.",
    icon: <Layers className="h-5 w-5 text-coral-500" />
  },
  {
    title: "Use AI that fits your real workflow",
    description: "Skip the shiny object syndrome — learn exactly how to integrate AI to work smarter, not harder.",
    icon: <RefreshCw className="h-5 w-5 text-coral-500" />
  },
  {
    title: "Focus on the 20% that scales your business",
    description: "Prioritize the actions that actually grow your business — not the ones that just keep you busy.",
    icon: <Target className="h-5 w-5 text-coral-500" />
  }
];

const Features = () => {
  return (
    <div className="bg-gray-50" id="features">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">No Fluff. No Hype. Just Real Growth.</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            What you actually get inside Scalable Stories:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:translate-y-[-2px]"
            >
              <div className="flex items-center gap-4">
                <div className="bg-coral-50 p-3 rounded-full">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-muted-foreground mt-2">{feature.description}</p>
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
