import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const basePath = ' ';
  
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="md:flex md:items-center md:justify-between">
        <div className="flex items-center gap-x-2 justify-center md:justify-start">
        <img src={`${basePath}/logo.svg`} alt="Logo" className="h-6 w-6" />
        <span className="text-xl font-bold text-coral-500">Scalable Stories</span>
        </div>

          <div className="mt-8 md:mt-0">
            <p className="text-center md:text-right text-sm text-gray-500">
              &copy; {currentYear} Scalable Stories. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;