"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  animateHeroSection, 
  animateServicesSection, 
  animateTestimonialsSection,
  initScrollAnimations,
  animateServiceCardHover
} from "@/lib/gsapAnimations";
import WhyChooseUs from "@/components/WhyChooseUs";
import DemoWebsiteSection from "@/components/DemoWebsiteSection";
import CraneAnimation from "@/components/CraneAnimation";
import GirlSVG from "@/components/GirlSVG";
import HeejraFontLogo from "@/components/HeejraFontLogo";


// Custom hook to detect theme
const useTheme = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const updateTheme = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setTheme(isDark ? 'dark' : 'light');
    };

    // Initial check
    updateTheme();

    // Listen for changes
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  return theme;
};


// Icon Components
const WebDevelopmentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1f2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
    <line x1="8" y1="21" x2="16" y2="21"></line>
    <line x1="12" y1="17" x2="12" y2="21"></line>
  </svg>
);

const MobileDevelopmentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1f2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
    <line x1="12" y1="18" x2="12" y2="18"></line>
  </svg>
);

const DatabaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1f2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
  </svg>
);

const DevOpsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1f2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>
);

const UIUXDesignIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1f2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
    <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
    <path d="M12 2v2" />
    <path d="M12 22v-2" />
    <path d="m17 20.66-1-1.73" />
    <path d="M11 10.27 7 3.34" />
    <path d="m20.66 17-1.73-1" />
    <path d="m3.34 7 1.73 1" />
    <path d="M14 12h8" />
    <path d="M2 12h2" />
    <path d="m20.66 7-1.73 1" />
    <path d="m3.34 17 1.73-1" />
    <path d="m17 3.34-1 1.73" />
    <path d="m11 13.73-4 6.93" />
  </svg>
);

// Contact Icons
const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

// Chat Icon for Contact Button
const ChatIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    <circle cx="9" cy="10" r="1"></circle>
    <circle cx="15" cy="10" r="1"></circle>
    <circle cx="12" cy="13" r="1"></circle>
  </svg>
);

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorInnerRef = useRef<HTMLDivElement>(null);
  const serviceCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const blobRefs = useRef<(HTMLDivElement | null)[]>([]);
  const contactSectionRef = useRef<HTMLDivElement>(null);
  const pulseButtonRef = useRef<HTMLButtonElement>(null);
  const theme = useTheme(); // Use the custom theme hook

  // Initialize animations when component mounts
  useEffect(() => {
    // Animate hero section
    animateHeroSection();
    
    // Animate other sections
    animateServicesSection();
    animateTestimonialsSection();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Setup custom cursor
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (!isMobile) {
      const onMouseMove = (e: MouseEvent) => {
        if (cursorRef.current) {
          // Posisi kursor langsung sesuai dengan koordinat mouse
          cursorRef.current.style.left = `${e.clientX}px`;
          cursorRef.current.style.top = `${e.clientY}px`;
        }
      };
      
      // Gunakan passive event listener untuk performa yang lebih baik
      window.addEventListener('mousemove', onMouseMove, { passive: true });
      
      return () => {
        window.removeEventListener('mousemove', onMouseMove);
      };
    }
    
    // Refresh ScrollTrigger when component unmounts
    return () => {
      if (typeof window !== 'undefined') {
        ScrollTrigger.refresh();
      }
    };
  }, []);

  // Animate blob elements in services section
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Create a single timeline for all blobs to animate sequentially
      const masterTimeline = gsap.timeline({
        repeat: -1,
        repeatDelay: 1
      });
      
      // Animate each blob sequentially
      blobRefs.current.forEach((blob, index) => {
        if (blob) {
          // Initially hide all blobs except the first one
          if (index > 0) {
            gsap.set(blob, { opacity: 0, scale: 0.8 });
          } else {
            gsap.set(blob, { opacity: 0.7, scale: 1 });
          }
          
          // Add animation to master timeline
          masterTimeline.to(blob, {
            opacity: 0.7,
            scale: 1,
            duration: 1,
            ease: "power2.inOut"
          }, index > 0 ? "+=0.5" : 0) // Stagger the animations
          .to(blob, {
            y: 40,
            x: 30,
            scale: 1.2,
            rotation: 15,
            duration: 2,
            ease: "power1.inOut"
          })
          .to(blob, {
            y: -30,
            x: -20,
            scale: 0.9,
            rotation: -10,
            duration: 2,
            ease: "power1.inOut"
          })
          .to(blob, {
            y: 0,
            x: 0,
            scale: 1,
            rotation: 0,
            opacity: 0,
            duration: 1,
            ease: "power2.inOut"
          });
        }
      });
    }
    
    // Cleanup function
    return () => {
      if (typeof window !== 'undefined') {
        blobRefs.current.forEach(blob => {
          if (blob) {
            gsap.killTweensOf(blob);
          }
        });
      }
    };
  }, []);

  // Setup hover animations for service cards
  useEffect(() => {
    const cleanupFunctions: (() => void)[] = [];
    
    serviceCardRefs.current.forEach((card) => {
      if (card) {
        const cleanup = animateServiceCardHover(card);
        cleanupFunctions.push(cleanup);
      }
    });
    
    // Cleanup function to remove event listeners
    return () => {
      cleanupFunctions.forEach(cleanup => cleanup());
    };
  }, []);

  // Animate contact section when it comes into view
  useEffect(() => {
    if (typeof window !== 'undefined' && contactSectionRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-contact-section');
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(contactSectionRef.current);

      return () => {
        if (contactSectionRef.current) {
          observer.unobserve(contactSectionRef.current);
        }
      };
    }
  }, []);

  const services = [
    {
      title: "Pengembangan Web",
      description: "Website dan aplikasi web responsif yang dibangun dengan Next.js dan teknologi modern.",
      icon: <WebDevelopmentIcon />,
    },
    {
      title: "Pengembangan Mobile",
      description: "Aplikasi mobile yang dioptimalkan untuk iOS dan Android menggunakan React Native.",
      icon: <MobileDevelopmentIcon />,
    },
    {
      title: "Desain Database",
      description: "Arsitektur database yang efisien dan skalabel menggunakan MySQL dan Prisma ORM.",
      icon: <DatabaseIcon />,
    },
    {
      title: "DevOps & Deployment",
      description: "Solusi deployment dan penskalaan yang mulus untuk aplikasi Anda.",
      icon: <DevOpsIcon />,
    },
    {
      title: "UI/UX Design",
      description: "Layanan desain UI/UX kami berfokus pada pembuatan antarmuka digital yang intuitif dan menarik.",
      icon: <UIUXDesignIcon />,
    },
  ];

  const testimonials = [
    {
      name: "Budi Santoso",
      role: "CEO, TechStart Indonesia",
      content: "Tim ini menyelesaikan proyek kami tepat waktu dan melampaui ekspektasi kami. Keahlian mereka dalam Next.js sangat mengesankan.",
    },
    {
      name: "Siti Rahayu",
      role: "Manajer Produk, InnovateCo",
      content: "Bekerja dengan tim ini adalah pengubah permainan bagi bisnis kami. Perhatian terhadap detail dan keterampilan teknis mereka sangat luar biasa.",
    },
    {
      name: "Andi Prasetyo",
      role: "Founder, StartupHub",
      content: "Aplikasi kustom yang mereka bangun untuk kami telah merampingkan operasi kami secara signifikan. Sangat direkomendasikan!",
    },
  ];

  // Split the hero title into words for animation
  const heroTitleWords = ["Selamat", "Datang", "di", "Heejra"];

  // Deteksi perangkat mobile
  const isMobile = typeof window !== 'undefined' ? /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) : false;

  // Colors for the asterisks
  const starColors = [
    '#FF6B6B', // Red
    '#4ECDC4', // Teal
    '#45B7D1', // Blue
    '#96CEB4', // Green
    '#FFEAA7', // Yellow
    '#DDA0DD', // Plum
    '#98D8C8', // Mint
    '#F7DC6F', // Gold
    '#BB8FCE', // Lavender
    '#85C1E9'  // Sky Blue
  ];

  return (
    <div className="min-h-screen">
      {/* Custom Cursor - hanya ditampilkan di desktop */}
      {!isMobile && (
        <>
          <div
            ref={cursorRef}
            className="fixed w-6 h-6 rounded-full pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2"
            style={{ 
              mixBlendMode: 'difference',
              transition: 'transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1), width 0.4s cubic-bezier(0.25, 0.1, 0.25, 1), height 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)',
              willChange: 'transform'
            }}
          >
            <div 
              ref={cursorInnerRef}
              className={`w-full h-full rounded-full ${isHovering ? 'bg-violet-400' : 'bg-violet-500'} shadow-2xl`}
              style={{ 
                transition: 'all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)',
                transform: isHovering ? 'scale(1.6)' : 'scale(1)'
              }}
            />
          </div>
        </>
      )}

      {/* Hero Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Kolom Kiri - Konten Hero */}
          <div>
            <h1 className="hero-title text-4xl md:text-6xl font-bold mb-6">
              {heroTitleWords.map((word, index) => (
                <span key={index} className={`animated-word inline-block mr-2 ${word === 'Heejra' ? 'bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent heejra-sway' : 'text-[#101829] dark:text-[#ffffff]'}`}>
                  {word}
                </span>
              ))}
            </h1>
            <p className="hero-subtitle text-2xl mb-10">
              Di <span className="font-bold text-3xl bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">Heejra</span>,kami bersemangat dalam mengubah ide menjadi pengalaman digital yang bermakna. Sebagai agensi digital yang visioner, kami spesialis dalam menyediakan solusi kreatif, strategi inovatif, dan desain yang berpusat pada pengguna untuk membantu merek berkembang di lanskap digital yang terus berubah.
            </p>
          </div>
          
          {/* Kolom Kanan - Girl SVG */}
          <div className="flex justify-center items-center">
            <div className="relative w-96 h-96 md:w-[500px] md:h-[500px] flex items-center justify-center">
              <GirlSVG />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 max-w-7xl mx-auto relative overflow-hidden">
        {/* Blob Background Animation */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <div 
              ref={(el) => { if (el) blobRefs.current[0] = el; }}
              className="blob blob-purple absolute w-64 h-64 rounded-full blur-xl bg-purple-500 opacity-70"
              style={{ top: '10%', left: '10%' }}
            ></div>
            <div 
              ref={(el) => { if (el) blobRefs.current[1] = el; }}
              className="blob blob-pink absolute w-56 h-56 rounded-full blur-xl bg-pink-500 opacity-70"
              style={{ top: '20%', right: '15%' }}
            ></div>
            <div 
              ref={(el) => { if (el) blobRefs.current[2] = el; }}
              className="blob blob-violet absolute w-48 h-48 rounded-full blur-xl bg-violet-500 opacity-70"
              style={{ bottom: '30%', left: '20%' }}
            ></div>
            <div 
              ref={(el) => { if (el) blobRefs.current[3] = el; }}
              className="blob blob-blue absolute w-40 h-40 rounded-full blur-xl bg-blue-500 opacity-70"
              style={{ bottom: '20%', right: '25%' }}
            ></div>
            <div 
              ref={(el) => { if (el) blobRefs.current[4] = el; }}
              className="blob blob-teal absolute w-56 h-56 rounded-full blur-xl bg-teal-500 opacity-70"
              style={{ top: '40%', left: '40%' }}
            ></div>
            <div 
              ref={(el) => { if (el) blobRefs.current[5] = el; }}
              className="blob blob-indigo absolute w-48 h-48 rounded-full blur-xl bg-indigo-500 opacity-70"
              style={{ top: '60%', right: '30%' }}
            ></div>
          </div>
        </div>
        
        <div className="text-center mb-16 relative z-10">
          <h2 
            className="services-title text-3xl md:text-4xl font-bold mb-4"
            style={{ color: theme === 'dark' ? '#ffffff' : '#101829' }}
          >
            Solusi Web&App Kustom untuk Bisnis Modern
          </h2>
          <p 
            className="text-2xl max-w-2xl mx-auto"
            style={{ color: theme === 'dark' ? '#ffffff' : '#101829' }}
          >
            Kami menyediakan solusi pengembangan end-to-end yang disesuaikan dengan kebutuhan bisnis Anda
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto relative z-10">
          {services.map((service, index) => (
            <div 
              key={index} 
              ref={(el) => {
                if (el) {
                  serviceCardRefs.current[index] = el;
                }
              }}
              className="service-item flex flex-row items-start p-8 bg-[#FFFFFFC0] rounded-2xl shadow-lg transition-all duration-300 group hover-target w-full"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="mr-6 mt-1 flex-shrink-0 w-16 h-16 flex items-center justify-center text-gray-800">
                {service.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-bold mb-3 text-gray-800" style={{ fontSize: '30px' }}>{service.title}</h3>
                <p className="text-gray-600 leading-relaxed" style={{ fontSize: '24px' }}>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technology Stack List */}
      <section className="py-10 px-0 overflow-hidden" style={{ backgroundColor: 'rgba(16, 24, 41, 0.9)' }}>
        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          
          @keyframes colorChange {
            0% { color: #414b59; }
            25% { color: #414b59; }
            50% { color: #414b59; }
            75% { color: #414b59; }
            100% { color: #414b59; }
          }
          
          .marquee-container {
            display: flex;
            width: 100%;
            white-space: nowrap;
          }
          
          .marquee-content {
            display: flex;
            animation: marquee 60s linear infinite;
          }
          
          .marquee-text {
            display: inline-block;
            padding: 0 30px;
          }
          
          .star {
            display: inline-block;
          }
          
          .heejra-animated {
            color: #414b59;
            display: inline-block;
          }
        `}</style>
        <div className="marquee-container">
          <div className="marquee-content">
            <span className="marquee-text text-2xl md:text-3xl font-medium" style={{ 
              WebkitTextStroke: '2px #ffffff',
              fontSize: '48px',
              fontWeight: 'bold'
            }}>
              Pengembangan Web <span className="star" style={{ color: starColors[1], WebkitTextStroke: '0px' }}>* </span>Pengembangan Mobile <span className="star" style={{ color: starColors[2], WebkitTextStroke: '0px' }}>* </span>Desain Database <span className="star" style={{ color: starColors[3], WebkitTextStroke: '0px' }}>* </span>DevOps & Deployment <span className="star" style={{ color: starColors[4], WebkitTextStroke: '0px' }}>* </span>UI/UX Design <span className="star" style={{ color: starColors[5], WebkitTextStroke: '0px' }}>* </span>&nbsp; &nbsp;
              Pengembangan Web <span className="star" style={{ color: starColors[1], WebkitTextStroke: '0px' }}>* </span>Pengembangan Mobile <span className="star" style={{ color: starColors[2], WebkitTextStroke: '0px' }}>* </span>Desain Database <span className="star" style={{ color: starColors[3], WebkitTextStroke: '0px' }}>* </span>DevOps & Deployment <span className="star" style={{ color: starColors[4], WebkitTextStroke: '0px' }}>* </span>UI/UX Design <span className="star" style={{ color: starColors[5], WebkitTextStroke: '0px' }}>* </span>&nbsp; &nbsp;
            </span>
          </div>
        </div>
      </section>

      {/* Reverse Technology Stack List */}
      <section className="py-10 px-0 overflow-hidden" style={{ backgroundColor: 'rgba(16, 24, 41, 0.9)' }}>
        <style jsx>{`
          @keyframes reverse-marquee {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          
          .reverse-marquee-container {
            display: flex;
            width: 100%;
            white-space: nowrap;
          }
          
          .reverse-marquee-content {
            display: flex;
            animation: reverse-marquee 60s linear infinite;
          }
          
          .reverse-marquee-text {
            display: inline-block;
            padding: 0 30px;
          }
          
          .reverse-star {
            display: inline-block;
          }
        `}</style>
        <div className="reverse-marquee-container">
          <div className="reverse-marquee-content">
            <span className="reverse-marquee-text text-2xl md:text-3xl font-medium" style={{ 
              WebkitTextStroke: '2px #ffffff',
              fontSize: '48px',
              fontWeight: 'bold'
            }}>
              Pengembangan Web <span className="reverse-star" style={{ color: starColors[7], WebkitTextStroke: '0px' }}>* </span>Pengembangan Mobile <span className="reverse-star" style={{ color: starColors[8], WebkitTextStroke: '0px' }}>* </span>Desain Database <span className="reverse-star" style={{ color: starColors[9], WebkitTextStroke: '0px' }}>* </span>DevOps & Deployment <span className="reverse-star" style={{ color: starColors[0], WebkitTextStroke: '0px' }}>* </span>UI/UX Design <span className="reverse-star" style={{ color: starColors[1], WebkitTextStroke: '0px' }}>* </span>&nbsp; &nbsp;
              Pengembangan Web <span className="reverse-star" style={{ color: starColors[7], WebkitTextStroke: '0px' }}>* </span>Pengembangan Mobile <span className="reverse-star" style={{ color: starColors[8], WebkitTextStroke: '0px' }}>* </span>Desain Database <span className="reverse-star" style={{ color: starColors[9], WebkitTextStroke: '0px' }}>* </span>DevOps & Deployment <span className="reverse-star" style={{ color: starColors[0], WebkitTextStroke: '0px' }}>* </span>UI/UX Design <span className="reverse-star" style={{ color: starColors[1], WebkitTextStroke: '0px' }}>* </span>&nbsp; &nbsp;
            </span>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Demo Website Section */}
      <DemoWebsiteSection />

      {/* Contact CTA */}
      <section 
        id="contact" 
        ref={contactSectionRef}
        className="py-20 px-6 text-gray-800 opacity-0 transition-opacity duration-1000 dark:bg-[#101829]/80"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.75)' }}
      >
        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes shadowRotation {
            0% {
              box-shadow: 0 0 0 0px rgba(147, 51, 234, 0.5),
                          0 0 0 4px rgba(147, 51, 234, 0.3),
                          0 0 0 8px rgba(147, 51, 234, 0.1);
            }
            25% {
              box-shadow: -8px -8px 0 0px rgba(147, 51, 234, 0.5),
                          -6px -6px 0 4px rgba(147, 51, 234, 0.3),
                          -4px -4px 0 8px rgba(147, 51, 234, 0.1);
            }
            50% {
              box-shadow: 0 0 0 0px rgba(147, 51, 234, 0.5),
                          0 0 0 4px rgba(147, 51, 234, 0.3),
                          0 0 0 8px rgba(147, 51, 234, 0.1);
            }
            75% {
              box-shadow: 8px 8px 0 0px rgba(147, 51, 234, 0.5),
                          6px 6px 0 4px rgba(147, 51, 234, 0.3),
                          4px 4px 0 8px rgba(147, 51, 234, 0.1);
            }
            100% {
              box-shadow: 0 0 0 0px rgba(147, 51, 234, 0.5),
                          0 0 0 4px rgba(147, 51, 234, 0.3),
                          0 0 0 8px rgba(147, 51, 234, 0.1);
            }
          }
          
          .animate-contact-section {
            opacity: 1 !important;
          }
          
          .animate-contact-section .animate-content {
            animation: fadeInUp 0.8s ease-out forwards;
          }
          
          .animate-contact-section .animate-content-delay-1 {
            animation: fadeInUp 0.8s ease-out 0.2s forwards;
            opacity: 0;
          }
          
          .animate-contact-section .animate-content-delay-2 {
            animation: fadeInUp 0.8s ease-out 0.4s forwards;
            opacity: 0;
          }
          
          .rotating-shadow-button {
            position: relative;
            border: 4px solid;
            border-image: linear-gradient(90deg, #9333ea, #ec4899) 1;
            color: #25313d;
            font-weight: bold;
            font-size: 20px;
            padding: 12px 24px;
            border-radius: 0.5rem;
            background-color: white;
            transition: all 0.3s ease;
          }
          
          .rotating-shadow-button:hover {
            background: linear-gradient(90deg, #9333ea, #ec4899);
            color: white;
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          }
          
          .rotating-shadow-button:active {
            transform: translateY(1px);
          }
          
          .circle-button {
            position: relative;
            border: 4px solid;
            border-image: linear-gradient(90deg, #9333ea, #ec4899) 1;
            color: #25313d;
            font-weight: bold;
            font-size: 20px;
            width: 70px;
            height: 70px;
            border-radius: 50%;
            background-color: white;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto;
          }
          
          .circle-button:hover {
            background: linear-gradient(90deg, #9333ea, #ec4899);
            color: white;
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          }
          
          .circle-button:active {
            transform: translateY(1px);
          }
          
          .glow-on-hover {
            width: 220px;
            height: 50px;
            border: none;
            outline: none;
            color: #fff;
            background: #111;
            cursor: pointer;
            position: relative;
            z-index: 0;
            border-radius: 10px;
            font-weight: bold;
            font-size: 18px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
          }

          .glow-on-hover:before {
            content: '';
            background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
            position: absolute;
            top: -2px;
            left:-2px;
            background-size: 400%;
            z-index: -1;
            filter: blur(5px);
            width: calc(100% + 4px);
            height: calc(100% + 4px);
            animation: glowing 20s linear infinite;
            opacity: 1;
            transition: opacity .3s ease-in-out;
            border-radius: 10px;
          }

          .glow-on-hover:active {
            color: #000
          }

          .glow-on-hover:active:after {
            background: transparent;
          }

          .glow-on-hover:after {
            z-index: -1;
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background: #111;
            left: 0;
            top: 0;
            border-radius: 10px;
          }

          @keyframes glowing {
            0% { background-position: 0 0; }
            50% { background-position: 400% 0; }
            100% { background-position: 0 0; }
          }
        `}</style>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-content" style={{ fontSize: '48px' }}>Siap Memulai Proyek Anda?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto animate-content-delay-1" style={{ fontSize: '24px' }}>
            Mari kita diskusikan bagaimana kami dapat membantu mewujudkan visi Anda dengan layanan pengembangan ahli kami.
          </p>
          <div className="animate-content-delay-2">
            <button 
              ref={pulseButtonRef}
              className="glow-on-hover"
              onClick={() => {
                window.open('https://wa.me/628562985589?text=Hi%20Heejra%2C%20boleh%20dong%20info%20layanan%20pembuatan%20website%20dan%20aplikasinya%20!', '_blank');
              }}
            >
              Hubungi Kami
            </button>
          </div>
        </div>
      </section>

      

      {/* Footer */}
      <footer className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image src="/HJR-black.svg" alt="Heejra Logo" width={32} height={32} />
                <span className="text-2xl font-bold">Heejra</span>
              </div>
              <p className="text-gray-600" style={{ fontSize: '20px' }}>
                Membangun solusi web dan mobile kustom untuk bisnis anda.
              </p>
            </div>
            
            <div className="md:col-start-3 md:col-span-1">
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
  <span className="mr-2 mt-1 text-gray-500">
    <LocationIcon />
  </span>
  <a 
    href="https://maps.app.goo.gl/pteoKpT1e3zkrCyVA"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-gray-900 hover-target"
    onMouseEnter={() => setIsHovering(true)}
    onMouseLeave={() => setIsHovering(false)}
    style={{ fontSize: '20px' }}
  >
    Jl. Rinjani Timur III/05 Mojosongo - Solo 57127
  </a>
</li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-gray-500">
                    <PhoneIcon />
                  </span>
                  <a 
                    href="https://wa.me/628562985589?text=Hi%20Heejra%2C%20saya%20tertarik%20dengan%20layanan%20pembuatan%20website%20dan%20aplikasi%20nya."
                    target="_blank"
    rel="noopener noreferrer"
                    className="hover:text-gray-900 hover-target"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
    style={{ fontSize: '20px' }}
                  >
                    08562985589
                  </a>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-gray-500">
                    <EmailIcon />
                  </span>
                  <a 
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=admin@heejra.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-900 hover-target"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    style={{ fontSize: '20px' }}
                  >
                    admin@heejra.dev
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-[#2b332a] mt-8 pt-8 text-center text-gray-600">
            <p>© 2025 PT. Heejra Rumah Digital. Hak cipta dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}