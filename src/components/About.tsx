
import React from 'react';

const About = () => {
  return (
    <section id="about" className="section bg-neutral-lightGray/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8 relative z-10">
              <div className="absolute top-0 left-0 right-0 h-1/3 bg-jungle-gradient rounded-t-2xl"></div>
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-tech-gradient opacity-40 rounded-b-2xl"></div>
              
              <div className="relative z-10 h-full flex flex-col items-center justify-center">
                <div className="bg-white rounded-full p-4 shadow-lg mb-6">
                  <div className="text-4xl font-bold">
                    <span className="gradient-text-jungle">Jungle</span>
                    <span className="gradient-text-tech">Nexus</span>
                  </div>
                </div>
                
                <div className="space-y-2 text-center">
                  <p className="text-xl font-medium text-neutral-charcoal">Founded 2018</p>
                  <p className="text-neutral-gray">Distribution Excellence</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-jungle-orange/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-tech-blue/20 rounded-full blur-xl"></div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl custom-heading">
              About <span className="gradient-text-jungle">Jungle</span><span className="gradient-text-tech">Nexus</span>
            </h2>
            
            <p className="text-lg text-neutral-charcoal/80 leading-relaxed">
              At Jungle Nexus, we are a modern distribution partner rooted in reliability, flexibility, and growth. 
              Beginning as a specialized grocery distributor, we've evolved into a multi-category powerhouse, 
              leveraging our deep marketplace expertise and logistical capabilities to help brands thrive in 
              the digital ecosystem.
            </p>
            
            <p className="text-lg text-neutral-charcoal/80 leading-relaxed">
              Our name reflects our dual heritage—"Jungle" for the Amazon marketplace that launched our journey 
              and the natural growth systems we emulate, and "Nexus" for the interconnected network of relationships, 
              technologies, and services that power our success and that of our partners.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-2 gradient-text-jungle">Our Mission</h3>
                <p className="text-neutral-charcoal/80">To create seamless connections between quality products and consumers through strategic distribution.</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-2 gradient-text-tech">Our Vision</h3>
                <p className="text-neutral-charcoal/80">To cultivate the most resilient, adaptable, and growth-oriented distribution network in the industry.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
