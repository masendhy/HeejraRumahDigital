"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface AnimatedListProps {
  items: React.ReactNode[];
  className?: string;
  animationType?: 'stagger' | 'wave' | 'bounce';
  delay?: number;
  duration?: number;
  direction?: 'vertical' | 'horizontal';
}

export default function AnimatedList({
  items,
  className = '',
  animationType = 'stagger',
  delay = 0,
  duration = 0.8,
  direction = 'vertical'
}: AnimatedListProps) {
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!listRef.current) return;

    const listItems = listRef.current.children;

    // Hide all items initially
    gsap.set(listItems, { opacity: 0 });

    const animateItems = () => {
      switch (animationType) {
        case 'stagger':
          gsap.to(listItems, {
            opacity: 1,
            y: 0,
            duration,
            delay,
            stagger: 0.1,
            ease: "power2.out"
          });
          break;

        case 'wave':
          gsap.set(listItems, { y: direction === 'vertical' ? 20 : 0, x: direction === 'horizontal' ? 20 : 0 });
          gsap.to(listItems, {
            opacity: 1,
            y: 0,
            x: 0,
            duration,
            delay,
            stagger: 0.1,
            ease: "elastic.out(1, 0.3)"
          });
          break;

        case 'bounce':
          gsap.set(listItems, { y: 50 });
          gsap.to(listItems, {
            opacity: 1,
            y: 0,
            duration,
            delay,
            stagger: 0.1,
            ease: "bounce.out"
          });
          break;

        default:
          gsap.to(listItems, {
            opacity: 1,
            duration,
            delay,
            stagger: 0.1,
            ease: "power2.out"
          });
      }
    };

    // Animate when list is in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateItems();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(listRef.current);

    return () => {
      observer.disconnect();
    };
  }, [items, animationType, delay, duration, direction]);

  return (
    <ul ref={listRef} className={className}>
      {items.map((item, index) => (
        <li 
          key={index} 
          className={direction === 'horizontal' ? 'inline-block mr-4' : ''}
          style={{ 
            opacity: 0,
            transform: direction === 'vertical' ? 'translateY(20px)' : 'translateX(20px)'
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}