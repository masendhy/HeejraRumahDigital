"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface TextAnimationProps {
  text: string;
  className?: string;
  animationType?: 'fadeIn' | 'slideUp' | 'letterByLetter';
  delay?: number;
  duration?: number;
}

export default function TextAnimation({
  text,
  className = '',
  animationType = 'fadeIn',
  delay = 0,
  duration = 1
}: TextAnimationProps) {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const element = textRef.current;

    switch (animationType) {
      case 'fadeIn':
        gsap.fromTo(
          element,
          { opacity: 0 },
          { 
            opacity: 1, 
            duration, 
            delay,
            ease: "power2.out"
          }
        );
        break;

      case 'slideUp':
        gsap.fromTo(
          element,
          { opacity: 0, y: 30 },
          { 
            opacity: 1, 
            y: 0, 
            duration, 
            delay,
            ease: "power2.out"
          }
        );
        break;

      case 'letterByLetter':
        // Split text into individual letters
        const letters = text.split('');
        element.innerHTML = letters
          .map(letter => `<span class="inline-block">${letter === ' ' ? '&nbsp;' : letter}</span>`)
          .join('');

        gsap.fromTo(
          element.children,
          { opacity: 0, y: 20 },
          { 
            opacity: 1, 
            y: 0, 
            duration, 
            delay,
            stagger: 0.05,
            ease: "power2.out"
          }
        );
        break;

      default:
        gsap.fromTo(
          element,
          { opacity: 0 },
          { 
            opacity: 1, 
            duration, 
            delay,
            ease: "power2.out"
          }
        );
    }
  }, [text, animationType, delay, duration]);

  return (
    <div ref={textRef} className={className}>
      {animationType !== 'letterByLetter' && text}
    </div>
  );
}