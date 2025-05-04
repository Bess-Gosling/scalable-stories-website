import React from 'react';

const NewsletterForm = () => {
  return (
    <div className="bg-white py-16" id="newsletter">
      <div className="section-container text-center">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 p-10 rounded-2xl shadow-lg border border-gray-200">
            <h2 className="heading-lg mb-4">
              Join Scalable Stories (Free)
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Actionable weekly emails.
            </p>

            {/* Centered Beehiiv Embed Form */}
            <div className="flex justify-center">
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
                title="Subscribe to Scalable Stories"
              />
            </div>

            <p className="text-xs text-muted-foreground mt-4">
              By subscribing, you agree to receive emails from Scalable Stories via{' '}
              <a
                href="https://www.beehiiv.com"
                className="underline text-coral-600 hover:text-coral-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Beehiiv
              </a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterForm;
