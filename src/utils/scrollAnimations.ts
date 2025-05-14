
import ScrollReveal from 'scrollreveal';

export const initScrollAnimations = () => {
  // Initialize ScrollReveal with base configuration
  const sr = ScrollReveal({
    distance: '60px',
    duration: 1000,
    delay: 100,
    easing: 'ease-in-out',
  });

  // Common element animations
  sr.reveal('.fade-up', { origin: 'bottom' });
  sr.reveal('.fade-down', { origin: 'top' });
  sr.reveal('.fade-left', { origin: 'right' });
  sr.reveal('.fade-right', { origin: 'left' });
  
  // Staggered reveals (for lists/grids)
  sr.reveal('.stagger-item', { interval: 100 });
  
  // Background animation triggers
  sr.reveal('.bg-animate', { 
    delay: 0, 
    duration: 800,
    distance: '0px',
    opacity: 1
  });

  return sr;
};
