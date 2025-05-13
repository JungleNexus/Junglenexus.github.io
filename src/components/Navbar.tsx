
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center">
            <span className="text-2xl font-bold">
              <span className="gradient-text-jungle">Jungle</span>
              <span className="gradient-text-tech">Nexus</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-neutral-charcoal hover:text-jungle-red transition-colors">
              About
            </a>
            <a href="#services" className="text-neutral-charcoal hover:text-jungle-red transition-colors">
              Services
            </a>
            <a href="#quality" className="text-neutral-charcoal hover:text-jungle-red transition-colors">
              Quality
            </a>
            <a href="#faq" className="text-neutral-charcoal hover:text-jungle-red transition-colors">
              FAQ
            </a>
            <Button className="btn-jungle rounded-full" asChild>
              <a href="#contact">Contact Us</a>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-neutral-charcoal"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white py-4 px-4 absolute w-full shadow-lg animate-fade-in">
          <div className="flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-neutral-charcoal hover:text-jungle-red transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#services" 
              className="text-neutral-charcoal hover:text-jungle-red transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#quality" 
              className="text-neutral-charcoal hover:text-jungle-red transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Quality
            </a>
            <a 
              href="#faq" 
              className="text-neutral-charcoal hover:text-jungle-red transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <Button 
              className="btn-jungle rounded-full w-full" 
              onClick={() => setMobileMenuOpen(false)}
              asChild
            >
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
