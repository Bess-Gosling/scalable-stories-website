
import React, { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { getAllSubscribers } from '@/utils/googleSheetsApi';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AdminProtection from '@/components/AdminProtection';
import { sendNewsletter } from '@/utils/newsletterSender';

interface Subscriber {
  id?: number;
  email: string;
  timestamp: string;
  source: string;
}

const AdminPage = () => {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [newsletterSubject, setNewsletterSubject] = useState('');
  const [newsletterContent, setNewsletterContent] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    loadSubscribers();
  }, []);

  const loadSubscribers = async () => {
    setLoading(true);
    try {
      const allSubscribers = await getAllSubscribers();
      setSubscribers(allSubscribers);
    } catch (error) {
      console.error('Error loading subscribers:', error);
      toast({
        title: "Error loading subscribers",
        description: "Could not load subscriber list from database",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSendNewsletter = async () => {
    if (!newsletterSubject.trim() || !newsletterContent.trim()) {
      toast({
        title: "Missing information",
        description: "Please enter both subject and content for your newsletter",
        variant: "destructive",
      });
      return;
    }

    if (subscribers.length === 0) {
      toast({
        title: "No subscribers",
        description: "There are no subscribers to send to",
        variant: "destructive",
      });
      return;
    }

    setSending(true);
    try {
      const result = await sendNewsletter(
        subscribers.map(sub => sub.email),
        newsletterSubject,
        newsletterContent
      );
      
      toast({
        title: "Newsletter sent",
        description: `Successfully sent to ${subscribers.length} subscribers`,
        variant: "default",
      });
      
      // Reset form fields after successful send
      setNewsletterSubject('');
      setNewsletterContent('');
    } catch (error) {
      console.error('Error sending newsletter:', error);
      toast({
        title: "Failed to send",
        description: "There was an error sending the newsletter. Please try again.",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <AdminProtection>
      <div className="container mx-auto py-10 px-4 max-w-6xl">
        <h1 className="heading-xl mb-6">Scalable Stories Admin</h1>
        
        <Tabs defaultValue="subscribers" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="subscribers">Subscribers</TabsTrigger>
            <TabsTrigger value="newsletter">Send Newsletter</TabsTrigger>
          </TabsList>
          
          <TabsContent value="subscribers">
            <Card>
              <CardHeader>
                <CardTitle>All Subscribers</CardTitle>
                <CardDescription>
                  {subscribers.length} total subscribers in the database
                </CardDescription>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <p className="text-center py-8">Loading subscribers...</p>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-muted">
                          <th className="px-4 py-2 text-left">Email</th>
                          <th className="px-4 py-2 text-left">Joined</th>
                          <th className="px-4 py-2 text-left">Source</th>
                        </tr>
                      </thead>
                      <tbody>
                        {subscribers.length === 0 ? (
                          <tr>
                            <td colSpan={3} className="px-4 py-8 text-center">
                              No subscribers yet.
                            </td>
                          </tr>
                        ) : (
                          subscribers.map((subscriber, index) => (
                            <tr key={subscriber.id || index} className="border-b border-gray-200">
                              <td className="px-4 py-2">{subscriber.email}</td>
                              <td className="px-4 py-2">
                                {new Date(subscriber.timestamp).toLocaleString()}
                              </td>
                              <td className="px-4 py-2">{subscriber.source || 'Direct'}</td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <Button 
                  onClick={loadSubscribers} 
                  disabled={loading}
                  variant="outline"
                >
                  Refresh List
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="newsletter">
            <Card>
              <CardHeader>
                <CardTitle>Send Newsletter</CardTitle>
                <CardDescription>
                  Compose and send a newsletter to {subscribers.length} subscribers
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                    Newsletter Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="Enter newsletter subject line"
                    value={newsletterSubject}
                    onChange={(e) => setNewsletterSubject(e.target.value)}
                  />
                </div>
                
                <div>
                  <label htmlFor="content" className="block mb-2 text-sm font-medium">
                    Newsletter Content
                  </label>
                  <Textarea
                    id="content"
                    placeholder="Enter your newsletter content (HTML supported)"
                    className="min-h-[300px]"
                    value={newsletterContent}
                    onChange={(e) => setNewsletterContent(e.target.value)}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={handleSendNewsletter}
                  disabled={sending || subscribers.length === 0}
                  className="bg-coral-500 hover:bg-coral-600 text-white"
                >
                  {sending ? "Sending..." : "Send to All Subscribers"}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminProtection>
  );
};

export default AdminPage;
