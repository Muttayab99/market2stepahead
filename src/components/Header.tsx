
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md py-4 shadow-md' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-bold">
          <a href="#" className="gradient-text">PIXEL<span className="text-agency-purple">PRO</span></a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {['Home', 'Services', 'Work', 'About', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-agency-charcoal hover:text-agency-purple transition-colors font-medium"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" className="text-agency-charcoal">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
