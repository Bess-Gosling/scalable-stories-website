
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    
    setLoading(true);
    
    // Simulate API call
    try {
      // Replace with actual API integration when ready
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Success!",
        description: "You've been added to the Scalable Stories early access list!",
        variant: "default",
      });
      
      setEmail('');
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
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
              <div className="p-8 md:p-10">
                <h3 className="heading-md mb-4">Built With Founders Like You</h3>
                <p className="text-muted-foreground mb-6">
                  We're building Scalable Stories in public—with your feedback shaping the content, tools, and templates.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="bg-coral-100 p-1.5 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-coral-600">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <span className="text-sm">No spam, just weekly value</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-coral-100 p-1.5 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-coral-600">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <span className="text-sm">Simple, smart advice you'll actually use</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-coral-100 p-1.5 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-coral-600">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <span className="text-sm">First access to new tools & templates</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 md:p-10">
                <h3 className="heading-md mb-4">Become an Insider</h3>
                <p className="text-muted-foreground mb-6">
                  First to get tools, tips & templates when we launch. Join the early list and help shape what we build.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full rounded-md border-gray-300 focus:border-coral-500 focus:ring focus:ring-coral-200 focus:ring-opacity-50"
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-coral-500 hover:bg-coral-600 text-white" 
                    disabled={loading}
                  >
                    {loading ? "Joining..." : "Join the Smart List"}
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    No spam. Just simple, smart emails—and first dibs when we launch new tools.
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
