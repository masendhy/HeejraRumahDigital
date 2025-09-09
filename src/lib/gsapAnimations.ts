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
    ".service-item",
    { opacity: 0, y: 50, scale: 0.9 },
    { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      duration: 0.8, 
      stagger: 0.2,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".service-item",
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

// Fungsi untuk animasi hover card layanan
export const animateServiceCardHover = (element: HTMLElement) => {
  if (typeof window !== 'undefined') {
    // Animasi saat mouse masuk
    const onMouseEnter = () => {
      gsap.to(element, {
        y: -15,
        scale: 1.02,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        duration: 0.4,
        ease: "power2.out"
      });
    };

    // Animasi saat mouse keluar
    const onMouseLeave = () => {
      gsap.to(element, {
        y: 0,
        scale: 1,
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
        duration: 0.4,
        ease: "power2.out"
      });
    };

    // Tambahkan event listeners
    element.addEventListener('mouseenter', onMouseEnter);
    element.addEventListener('mouseleave', onMouseLeave);

    // Return fungsi untuk menghapus event listeners
    return () => {
      element.removeEventListener('mouseenter', onMouseEnter);
      element.removeEventListener('mouseleave', onMouseLeave);
    };
  }
  return () => {};
};