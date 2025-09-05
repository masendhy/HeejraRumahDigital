"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  animationType?: 'fadeIn' | 'slideIn' | 'scaleIn';
  delay?: number;
  duration?: number;
}

export default function AnimatedImage({
  src,
  alt,
  className = '',
  animationType = 'fadeIn',
  delay = 0,
  duration = 1
}: AnimatedImageProps) {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!imageRef.current) return;

    const image = imageRef.current;
    
    // Ensure image is hidden initially
    gsap.set(image, { opacity: 0 });

    const animateImage = () => {
      switch (animationType) {
        case 'fadeIn':
          gsap.to(image, {
            opacity: 1,
            duration,
            delay,
            ease: "power2.out"
          });
          break;

        case 'slideIn':
          gsap.set(image, { x: -50 });
          gsap.to(image, {
            x: 0,
            opacity: 1,
            duration,
            delay,
            ease: "power2.out"
          });
          break;

        case 'scaleIn':
          gsap.set(image, { scale: 0.8 });
          gsap.to(image, {
            scale: 1,
            opacity: 1,
            duration,
            delay,
            ease: "back.out(1.7)"
          });
          break;

        default:
          gsap.to(image, {
            opacity: 1,
            duration,
            delay,
            ease: "power2.out"
          });
      }
    };

    // Animate when image is in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateImage();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(image);

    return () => {
      observer.disconnect();
    };
  }, [animationType, delay, duration]);

  return (
    <img 
      ref={imageRef} 
      src={src} 
      alt={alt} 
      className={className}
      loading="lazy"
    />
  );
}