
import React from 'react';
import { Button } from "@/components/ui/button";
import { Mail, Phone, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section bg-neutral-lightGray/30 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-jungle-gradient opacity-5 rounded-r-full"></div>
      <div className="absolute bottom-0 right-0 w-1/4 h-2/3 bg-tech-gradient opacity-5 rounded-tl-full"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl custom-heading">
              Let's <span className="gradient-text-jungle">Connect</span>
            </h2>
            
            <p className="text-lg text-neutral-charcoal/80 leading-relaxed">
              We're here to help—whether you're interested in partnering with us, have questions about 
              our services, or just want to learn more. Reach out and let's start a conversation about 
              how Jungle Nexus can support your distribution needs.
            </p>
            
            <div className="space-y-4 pt-2">
              <div className="flex items-center space-x-3">
                <div className="bg-jungle-gradient rounded-full p-2">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <a href="mailto:info@junglenexus.com" className="text-neutral-charcoal hover:text-jungle-red transition-colors">
                  info@junglenexus.com
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-tech-gradient rounded-full p-2">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <a href="tel:+15551234567" className="text-neutral-charcoal hover:text-tech-blue transition-colors">
                  (555) 123-4567
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-charcoal">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-neutral-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-jungle-red/50"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-charcoal">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-neutral-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-jungle-red/50"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="company" className="block text-sm font-medium text-neutral-charcoal">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-3 border border-neutral-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-jungle-red/50"
                  placeholder="Your company name"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-neutral-charcoal">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-neutral-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-jungle-red/50"
                  placeholder="Tell us about your distribution needs"
                ></textarea>
              </div>
              
              <Button type="submit" className="btn-jungle rounded-full px-6 w-full">
                Send Message
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
