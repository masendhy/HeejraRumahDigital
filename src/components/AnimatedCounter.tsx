"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

export default function AnimatedCounter({
  end,
  duration = 2,
  prefix = "",
  suffix = ""
}: AnimatedCounterProps) {
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!counterRef.current) return;

    const counter = counterRef.current;
    counter.textContent = "0";

    const animateValue = () => {
      gsap.fromTo(
        counter,
        { innerText: 0 },
        {
          innerText: end,
          duration,
          snap: { innerText: 1 },
          ease: "power1.out"
        }
      );
    };

    // Animate when element is in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateValue();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(counter);

    return () => {
      observer.disconnect();
    };
  }, [end, duration]);

  return (
    <span ref={counterRef}>
      {prefix}0{suffix}
    </span>
  );
}