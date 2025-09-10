"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CraneAnimation = () => {
  const wheelLeftRef = useRef<SVGCircleElement>(null);
  const wheelRightRef = useRef<SVGCircleElement>(null);
  const bodyRef = useRef<SVGRectElement>(null);
  const armRef = useRef<SVGRectElement>(null);
  const hookLineRef = useRef<SVGLineElement>(null);
  const hookRef = useRef<SVGRectElement>(null);

  useEffect(() => {
    // Animasi roda muter
    const wheelAnimation = gsap.to([wheelLeftRef.current, wheelRightRef.current], {
      rotation: 360,
      transformOrigin: "center",
      repeat: -1,
      duration: 2,
      ease: "linear"
    });

    // Body crane sedikit goyang
    const bodyAnimation = gsap.to(bodyRef.current, {
      y: -5,
      yoyo: true,
      repeat: -1,
      duration: 1.5,
      ease: "sine.inOut"
    });

    // Lengan crane bergerak naik turun (rotasi)
    const armAnimation = gsap.to(armRef.current, {
      rotation: -20,
      transformOrigin: "260px 270px", // titik pivot
      yoyo: true,
      repeat: -1,
      duration: 2,
      ease: "power1.inOut"
    });

    // Hook bergerak naik-turun
    const hookAnimation = gsap.to([hookRef.current, hookLineRef.current], {
      y: 20,
      yoyo: true,
      repeat: -1,
      duration: 1.8,
      ease: "sine.inOut"
    });

    // Cleanup function
    return () => {
      wheelAnimation.kill();
      bodyAnimation.kill();
      armAnimation.kill();
      hookAnimation.kill();
    };
  }, []);

  return (
    <div className="flex justify-center items-center">
      <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" width="400">
        {/* Roda kiri */}
        <circle ref={wheelLeftRef} cx="150" cy="350" r="30" fill="#1f2937" />
        {/* Roda kanan */}
        <circle ref={wheelRightRef} cx="250" cy="350" r="30" fill="#1f2937" />

        {/* Body crane */}
        <rect ref={bodyRef} x="120" y="250" width="180" height="80" fill="#eafa37" rx="10" />

        {/* Lengan crane */}
        <rect ref={armRef} x="250" y="150" width="20" height="120" fill="#8B5CF6" />
        
        {/* Hook (gantungan) */}
        <line ref={hookLineRef} x1="260" y1="150" x2="260" y2="100" stroke="#6B7280" strokeWidth="4" />
        <rect ref={hookRef} x="250" y="90" width="20" height="20" fill="#1F2937" />
      </svg>
    </div>
  );
};

export default CraneAnimation;