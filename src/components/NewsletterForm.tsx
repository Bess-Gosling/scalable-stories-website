import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { submitEmailToBeehiiv } from '@/utils/submitToBeehiiv';

const isValidName = (name: string) => /^[A-Za-z\s'-]{1,50}$/.test(name.trim());
const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const NewsletterForm = () => {
  const { toast } = useToast();
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [botField, setBotField] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (botField) return;

    if (!isValidName(firstName)) {
      toast({
        title: 'Invalid name',
        description: 'Please enter a valid first name.',
        variant: 'destructive',
      });
      return;
    }

    if (!isValidEmail(email)) {
      toast({
        title: 'Invalid email',
        description: 'Please enter a valid email address.',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);

    try {
      const result = await submitEmailToBeehiiv(email.trim(), firstName.trim());

      if (result.success) {
        toast({
          title: "You're in!",
          description: "You've been added to the early access list.",
        });
        setEmail('');
        setFirstName('');
      } else {
        toast({
          title: "Something went wrong",
          description: result.message,
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: 'Error',
        description: 'Could not connect to Beehiiv. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-coral-50" id="newsletter">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white shadow-lg rounded-2xl border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              
              {/* LEFT COLUMN – content */}
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
                    "First access to new tools & templates",
                  ].map((text, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="bg-coral-100 p-1.5 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-coral-600">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                      </div>
                      <span className="text-sm">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT COLUMN – form */}
              <div className="bg-gray-50 p-8 md:p-10">
                <h3 className="heading-md mb-4">Become an Insider</h3>
                <p className="text-muted-foreground mb-6">
                  First to get tools, tips & templates when we launch. Join the early list and help shape what we build.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot */}
                  <input
                    type="text"
                    name="company"
                    className="hidden"
                    autoComplete="off"
                    value={botField}
                    onChange={(e) => setBotField(e.target.value)}
                    tabIndex={-1}
                  />

                  <Input
                    type="text"
                    placeholder="First name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    maxLength={50}
                    className="w-full rounded-md border-gray-300 focus:border-coral-500 focus:ring focus:ring-coral-200 focus:ring-opacity-50"
                  />

                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    maxLength={254}
                    className="w-full rounded-md border-gray-300 focus:border-coral-500 focus:ring focus:ring-coral-200 focus:ring-opacity-50"
                  />

                  <Button
                    type="submit"
                    className="w-full bg-coral-600 hover:bg-coral-500 text-white"
                    disabled={loading}
                  >
                    {loading ? 'Joining...' : 'Join the Smart List'}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you consent to your info being processed via&nbsp;
                    <a href="https://www.beehiiv.com" target="_blank" className="underline text-coral-600 hover:text-coral-500">beehiiv</a>
                    &nbsp;and agree to their&nbsp;
                    <a href="https://www.beehiiv.com/terms" target="_blank" className="underline text-coral-600 hover:text-coral-500">Terms</a>
                    &nbsp;and&nbsp;
                    <a href="https://www.beehiiv.com/privacy" target="_blank" className="underline text-coral-600 hover:text-coral-500">Privacy Policy</a>.
                  </p>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterForm;
