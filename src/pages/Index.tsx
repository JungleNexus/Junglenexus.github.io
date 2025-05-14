
import React, { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Quality from '@/components/Quality';
import Faq from '@/components/Faq';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { initScrollAnimations } from '@/utils/scrollAnimations';

const Index = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Initialize scroll animations
    initScrollAnimations();
    
    // Setup scroll-based background animations
    const handleScroll = () => {
      if (!pageRef.current) return;
      
      // Calculate scroll percentage
      const scrollTop = window.scrollY;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      // Update background gradient based on scroll position
      pageRef.current.style.setProperty('--scroll-percent', `${scrollPercent}%`);
      
      // Add more visible animation gradients when further down the page
      if (scrollPercent > 20) {
        pageRef.current.classList.add('bg-enhanced');
      } else {
        pageRef.current.classList.remove('bg-enhanced');
      }
    };
    
    // Initial call to set background on page load
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      ref={pageRef} 
      className="min-h-screen flex flex-col scroll-container"
    >
      <div className="background-animation"></div>
      <div className="floating-elements">
        <div className="floating-circle circle-1"></div>
        <div className="floating-circle circle-2"></div>
        <div className="floating-circle circle-3"></div>
        <div className="floating-circle circle-4"></div>
        <div className="floating-circle circle-5"></div>
      </div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Quality />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
