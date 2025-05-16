
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-section min-h-screen flex items-center py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-white/40 z-0"></div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 max-w-2xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              We're always growing connections—
              <span className="gradient-text-jungle">let's start one with you.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-neutral-charcoal/80">
              Jungle Nexus connects brands and products to the world's largest marketplaces with 
              strategic distribution, inventory management, and brand-aligned solutions.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button className="btn-jungle rounded-full px-6 py-6 text-lg" asChild>
                <a href="#contact">
                  Partner With Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              
              <Button variant="outline" className="rounded-full px-6 py-6 text-lg border-2 border-tech-blue hover:bg-tech-blue/10" asChild>
                <a href="#services">Our Services</a>
              </Button>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="aspect-video bg-neutral-lightGray rounded-2xl overflow-hidden shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="absolute inset-0 bg-jungle-gradient opacity-20 mix-blend-overlay"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-lg">
                  <div className="w-20 h-20 rounded-full bg-jungle-gradient"></div>
                </div>
                <div className="w-32 h-2 bg-tech-blue absolute top-1/2 left-1/4 transform -translate-x-1/2"></div>
                <div className="w-2 h-32 bg-jungle-red absolute top-1/4 right-1/4 transform -translate-y-1/2"></div>
                <div className="w-16 h-16 rounded-full bg-tech-gradient absolute bottom-12 left-12"></div>
                <div className="w-10 h-10 rounded-full bg-jungle-orange absolute top-12 right-24"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom design elements */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-r from-jungle-red/10 to-tech-blue/10 backdrop-blur-sm"></div>
    </section>
  );
};

export default Hero;
