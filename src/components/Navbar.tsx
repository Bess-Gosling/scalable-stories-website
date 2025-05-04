import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const basePath = '';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-30 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo + Title */}
          <Link to="/" className="flex items-center gap-x-2 hover:opacity-80 transition">
            <img src={`${basePath}/logo.svg`} alt="Logo" className="h-6 w-6" />
            <span className="text-xl font-bold text-coral-500">Scalable Stories</span>
          </Link>

          {/* Nav Buttons (Resources + CTA) */}
          <div className="flex items-center gap-2">
                      
            {<Button
              asChild
              size="sm"
              variant="outline"
              className="border-coral-500 text-coral-500 hover:bg-coral-50"
            >
              <Link to="/blog">Blog</Link>
            </Button> }
            

            <Button
              asChild
              size="sm"
              variant="outline"
              className="border-coral-500 text-coral-500 hover:bg-coral-50"
            >
              <a href="#newsletter">Join Newsletter</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
