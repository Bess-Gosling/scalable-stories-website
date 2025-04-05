import React from 'react';

const DuctTapeResourceLibrary = () => {
  return (
      <section id="resources" className="py-16">
      <div className="section-container py-20">
      <h2 className="heading-lg text-center mb-6">🧰 Duct Tape Resource Library</h2>
      <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto">
        Your one-stop library for practical tools, frameworks, and templates that help solopreneurs build smarter—even if you're strapped for time and duct taping your workflow together.
      </p>

      {/* Placeholder resource items */}
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="font-semibold text-lg mb-2">AI-Powered Email Templates</h3>
          <p className="text-sm text-muted-foreground">Use these to write persuasive emails in minutes, not hours.</p>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Content Repurposing Workflow</h3>
          <p className="text-sm text-muted-foreground">Turn one blog into 5+ pieces across platforms.</p>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Solopreneur Launch Checklist</h3>
          <p className="text-sm text-muted-foreground">Everything you need to prep for a smooth offer launch.</p>
        </div>
      </div>
    </div>
    </section>
  );
};

export default DuctTapeResourceLibrary;
