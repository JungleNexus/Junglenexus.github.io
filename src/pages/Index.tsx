
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Quality from '@/components/Quality';
import Faq from '@/components/Faq';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <div className="bg-gradient-warm">
        <About />
      </div>
      <div className="bg-dot-pattern">
        <Services />
      </div>
      <div className="bg-gradient-cool">
        <Quality />
      </div>
      <div className="bg-wave-pattern">
        <Faq />
      </div>
      <div className="bg-gradient-soft">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
