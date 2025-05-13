
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-neutral-charcoal text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              <span className="gradient-text-jungle">Jungle</span>
              <span className="gradient-text-tech">Nexus</span>
            </div>
            <p className="text-white/70">
              Modern distribution solutions connecting quality products to global marketplaces.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-white/70 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-white/70 hover:text-white transition-colors">Services</a></li>
              <li><a href="#quality" className="text-white/70 hover:text-white transition-colors">Quality & Compliance</a></li>
              <li><a href="#faq" className="text-white/70 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-white/70 hover:text-white transition-colors">Distribution</a></li>
              <li><a href="#services" className="text-white/70 hover:text-white transition-colors">Inventory Management</a></li>
              <li><a href="#services" className="text-white/70 hover:text-white transition-colors">Marketing Support</a></li>
              <li><a href="#services" className="text-white/70 hover:text-white transition-colors">Brand Solutions</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-white/70">info@thejunglenexus.com</li>
              <li className="text-white/70">(734) 732-5192</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-white/70 text-sm">
            &copy; {currentYear} Jungle Nexus. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/70 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
