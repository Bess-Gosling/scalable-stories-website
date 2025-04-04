
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import { checkAdminAccess } from '@/utils/adminAuth';

interface AdminProtectionProps {
  children: React.ReactNode;
}

const AdminProtection: React.FC<AdminProtectionProps> = ({ children }) => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  const { toast } = useToast();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check if the admin is already authenticated
    const checkAuth = async () => {
      const isAuth = await checkAdminAccess();
      setIsAuthenticated(isAuth);
      setIsChecking(false);
    };
    
    checkAuth();
  }, []);
  
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!password.trim()) {
      toast({
        title: "Missing password",
        description: "Please enter the admin password",
        variant: "destructive",
      });
      return;
    }
    
    setIsChecking(true);
    
    try {
      // In a real application, this would validate against a securely stored password
      const adminPassword = "scalable-stories-admin"; // This is a simple example, you should use a more secure approach
      
      if (password === adminPassword) {
        // Set authentication in localStorage (in real app, use proper auth tokens)
        localStorage.setItem('adminAuthenticated', 'true');
        setIsAuthenticated(true);
        toast({
          title: "Login successful",
          description: "Welcome to the admin area",
        });
      } else {
        toast({
          title: "Access denied",
          description: "Incorrect admin password",
          variant: "destructive",
        });
      }
    } finally {
      setIsChecking(false);
    }
  };
  
  const handleLogout = () => {
    localStorage.removeItem('adminAuthenticated');
    setIsAuthenticated(false);
    toast({
      title: "Logged out",
      description: "You have been logged out of the admin area",
    });
    navigate('/');
  };
  
  if (isChecking) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }
  
  if (!isAuthenticated) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Admin Access Required</CardTitle>
            <CardDescription>
              Enter the admin password to access this area
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleLogin}>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="password" className="block text-sm font-medium">
                    Admin Password
                  </label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter admin password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                type="submit" 
                className="w-full bg-coral-500 hover:bg-coral-600 text-white"
              >
                Login
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    );
  }
  
  return (
    <div>
      <div className="bg-gray-100 p-4 flex justify-between items-center">
        <span className="font-medium">Admin Area</span>
        <Button variant="ghost" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      {children}
    </div>
  );
};

export default AdminProtection;
