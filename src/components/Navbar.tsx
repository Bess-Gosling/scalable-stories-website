
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav className={`fixed top-0 w-full z-30 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-xl font-bold text-coral-500 tracking-tight">Scalable Stories</span>
            </a>
          </div>
          <div>
            <Button asChild size="sm" variant="outline" className="mr-2 border-coral-500 text-coral-500 hover:bg-coral-50">
              <a href="#newsletter">Join Newsletter</a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
