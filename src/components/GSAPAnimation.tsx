"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface GSAPAnimationProps {
  children: React.ReactNode;
  animationType?: 'fadeIn' | 'slideIn' | 'bounce' | 'stagger';
  delay?: number;
  duration?: number;
  className?: string;
}

export default function GSAPAnimation({
  children,
  animationType = 'fadeIn',
  delay = 0,
  duration = 1,
  className = '',
}: GSAPAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    
    // Reset element to initial state
    gsap.set(element, { opacity: 0 });
    
    // Define animations based on type
    switch (animationType) {
      case 'fadeIn':
        gsap.to(element, {
          opacity: 1,
          duration,
          delay,
          ease: 'power2.out'
        });
        break;
        
      case 'slideIn':
        gsap.set(element, { x: -100 });
        gsap.to(element, {
          x: 0,
          opacity: 1,
          duration,
          delay,
          ease: 'power2.out'
        });
        break;
        
      case 'bounce':
        gsap.set(element, { y: -50 });
        gsap.to(element, {
          y: 0,
          opacity: 1,
          duration,
          delay,
          ease: 'bounce.out'
        });
        break;
        
      case 'stagger':
        // For stagger animations, we expect children to be an array
        gsap.set(element.children, { opacity: 0, y: 20 });
        gsap.to(element.children, {
          opacity: 1,
          y: 0,
          duration,
          delay,
          stagger: 0.2,
          ease: 'power2.out'
        });
        break;
        
      default:
        gsap.to(element, {
          opacity: 1,
          duration,
          delay,
          ease: 'power2.out'
        });
    }
  }, [animationType, delay, duration]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}