"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface AnimatedButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverAnimation?: boolean;
  clickAnimation?: boolean;
}

export default function AnimatedButton({
  children,
  className = '',
  onClick,
  hoverAnimation = true,
  clickAnimation = true
}: AnimatedButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!buttonRef.current) return;

    const button = buttonRef.current;

    // Hover animation
    if (hoverAnimation) {
      button.addEventListener('mouseenter', () => {
        gsap.to(button, {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out"
        });
      });

      button.addEventListener('mouseleave', () => {
        gsap.to(button, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    }

    // Click animation
    if (clickAnimation) {
      button.addEventListener('mousedown', () => {
        gsap.to(button, {
          scale: 0.95,
          duration: 0.1,
          ease: "power2.out"
        });
      });

      button.addEventListener('mouseup', () => {
        gsap.to(button, {
          scale: 1,
          duration: 0.1,
          ease: "power2.out"
        });
      });

      button.addEventListener('mouseleave', () => {
        gsap.to(button, {
          scale: 1,
          duration: 0.1,
          ease: "power2.out"
        });
      });
    }
  }, [hoverAnimation, clickAnimation]);

  return (
    <button 
      ref={buttonRef}
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
}