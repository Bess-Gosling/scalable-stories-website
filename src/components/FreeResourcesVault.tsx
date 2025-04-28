
import React from 'react';
import { FileText, Rocket } from 'lucide-react';

const FreeResources = () => {
  return (
    <div className="bg-gray-50 py-16" id="resources">
      <div className="section-container text-center">
        <h2 className="heading-lg mb-4">
          Unlock Your Free Founder Vault
        </h2>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Get proven templates, AI workflows, and simple plans to start building faster — today.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex justify-center mb-4">
              <FileText className="h-10 w-10 text-coral-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Plug-and-Play Templates</h3>
            <p className="text-muted-foreground">
              Time-blocking calendars, launch plans, scalable offer builders — ready to plug in and go.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex justify-center mb-4">
              <Rocket className="h-10 w-10 text-coral-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Smart AI Workflows</h3>
            <p className="text-muted-foreground">
              50+ AI prompts designed to free up your time and automate real business tasks — not just busywork.
            </p>
          </div>
        </div>

        <div className="mt-10">
        <a
        href="#newsletter"
        className="inline-flex items-center justify-center gap-2 rounded-md bg-coral-600 hover:bg-coral-500 text-white font-semibold text-base px-8 py-4 transition-colors"
        >
        Unlock the Vault ➔
        </a>

        </div>
      </div>
    </div>
  );
};

export default FreeResources;
