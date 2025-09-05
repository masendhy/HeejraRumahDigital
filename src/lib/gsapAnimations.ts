import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const animateHeroSection = () => {
  // Animate the main title with a stagger effect for each word
  gsap.fromTo(
    ".hero-title .animated-word",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, delay: 0.2 }
  );
  
  gsap.fromTo(
    ".hero-subtitle",
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 1, delay: 0.4 }
  );
  
  gsap.fromTo(
    ".hero-buttons",
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 1, delay: 0.6 }
  );
};

export const animateServicesSection = () => {
  gsap.fromTo(
    ".services-title",
    { opacity: 0, y: 30 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 1, 
      scrollTrigger: {
        trigger: ".services-title",
        start: "top 80%"
      }
    }
  );
  
  gsap.fromTo(
    ".service-card",
    { opacity: 0, y: 50 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 0.8, 
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".service-card",
        start: "top 80%"
      }
    }
  );
};

export const animateTechStackSection = () => {
  gsap.fromTo(
    ".tech-stack-item",
    { opacity: 0, y: 30 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 0.8, 
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".tech-stack-item",
        start: "top 80%"
      }
    }
  );
};

export const animateTestimonialsSection = () => {
  gsap.fromTo(
    ".testimonial-card",
    { opacity: 0, y: 30 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 0.8, 
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".testimonial-card",
        start: "top 80%"
      }
    }
  );
};

export const initScrollAnimations = () => {
  if (typeof window !== 'undefined') {
    // Refresh ScrollTrigger on route changes or DOM updates
    ScrollTrigger.refresh();
  }
};