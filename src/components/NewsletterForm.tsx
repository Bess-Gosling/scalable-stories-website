import React from 'react';

const NewsletterForm = () => {
  return (
    <div className="bg-coral-50" id="newsletter">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white shadow-lg rounded-2xl border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* LEFT: Info */}
              <div className="p-8 md:p-10">
                <h3 className="heading-md mb-4">Built With Founders Like You</h3>
                <p className="text-muted-foreground mb-6">
                  We're building Scalable Stories in public—with your feedback shaping the content,
                  tools, and templates.
                </p>
                <div className="space-y-4">
                  {[
                    "No spam, just weekly value",
                    "Simple, smart advice you'll actually use",
                    "First access to new tools & templates"
                  ].map((text, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="bg-coral-100 p-1.5 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-coral-600"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                      </div>
                      <span className="text-sm">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT: Beehiiv Embed */}
              <div className="bg-gray-50 p-8 md:p-10 flex flex-col justify-center items-center">
                <h3 className="heading-md mb-4 text-center">Become an Insider</h3>
                <p className="text-muted-foreground mb-6 text-center">
                  First to get tools, tips & templates when we launch. Join the early list and help shape what we build.
                </p>

                {/* ✅ Embed the Beehiiv form */}
                <iframe
                  src="https://embeds.beehiiv.com/b999be18-6b0c-481f-bac8-709079eca10d?slim=true"
                  data-test-id="beehiiv-embed"
                  height="52"
                  frameBorder="0"
                  scrolling="no"
                  style={{
                    margin: 0,
                    width: '100%',
                    maxWidth: '480px',
                    borderRadius: '8px',
                    backgroundColor: 'transparent',
                  }}
                  title="Subscribe via Beehiiv"
                />

                <p className="text-xs text-muted-foreground text-center mt-4">
                  By subscribing, you consent to receive emails from Scalable Stories via{' '}
                  <a
                    href="https://www.beehiiv.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-coral-600 hover:text-coral-500"
                  >
                    Beehiiv
                  </a>, and agree to their{' '}
                  <a
                    href="https://www.beehiiv.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-coral-600 hover:text-coral-500"
                  >
                    Privacy Policy
                  </a>.
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterForm;
