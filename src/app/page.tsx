"use client";

import { useState, useEffect, useRef } from "react";
import { 
  animateHeroSection, 
  animateServicesSection, 
  animateTestimonialsSection,
  initScrollAnimations,
  animateServiceCardHover
} from "@/lib/gsapAnimations";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WhyChooseUs from "@/components/WhyChooseUs";
import DemoWebsiteSection from "@/components/DemoWebsiteSection";

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

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const serviceCardRefs = useRef<(HTMLDivElement | null)[]>([]);

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
  const heroTitleWords = ["Solusi", "Web", "&", "App", "Kustom", "untuk", "Bisnis", "Modern"];

  // Deteksi perangkat mobile
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

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
        <div
          ref={cursorRef}
          className="fixed w-4 h-4 rounded-full bg-violet-500 pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2"
        />
      )}

      {/* Hero Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="hero-title text-4xl md:text-6xl font-bold mb-6">
            {heroTitleWords.map((word, index) => (
              <span key={index} className="animated-word inline-block mr-2">
                {word}
              </span>
            ))}
          </h1>
          <p className="hero-subtitle text-2xl text-gray-600 mb-10">
            Kami membangun aplikasi dan website yang skalabel menggunakan teknologi terkini.
          </p>
          <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors text-lg font-medium hover-target">
              Mulai Proyek Anda
            </button>
            <button className="border-2 border-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg font-medium hover-target">
              Lihat Karya Kami
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="services-title text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Layanan Kami
          </h2>
          <p className="text-2xl text-gray-600 max-w-2xl mx-auto">
            Kami menyediakan solusi pengembangan end-to-end yang disesuaikan dengan kebutuhan bisnis Anda
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index} 
              ref={(el) => {
                if (el) {
                  serviceCardRefs.current[index] = el;
                }
              }}
              className="service-item flex flex-row items-start p-8 bg-[#FFFFFFC0] rounded-2xl shadow-lg transition-all duration-300 group hover-target w-full"
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

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Apa Kata Klien Kami</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Jangan hanya mengambil kata kami - dengar dari bisnis yang telah kami bantu mentransformasi
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover-target">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-600 mb-6 italic">&quot;{testimonial.content}&quot;</p>
              <div>
                <div className="font-bold">{testimonial.name}</div>
                <div className="text-gray-500">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Siap Memulai Proyek Anda?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Mari kita diskusikan bagaimana kami dapat membantu mewujudkan visi Anda dengan layanan pengembangan ahli kami.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-200 transition-colors text-lg font-medium hover-target">
              Hubungi Kami
            </button>
            <button className="border-2 border-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors text-lg font-medium hover-target">
              Jadwalkan Panggilan
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-green-800 to-purple-700"></div>
                <span className="text-xl font-bold">TechCraft</span>
              </div>
              <p className="text-gray-600">
                Membangun solusi web dan mobile kustom untuk bisnis di seluruh dunia.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Layanan</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-gray-900 hover-target">Pengembangan Web</a></li>
                <li><a href="#" className="hover:text-gray-900 hover-target">Pengembangan Aplikasi</a></li>
                <li><a href="#" className="hover:text-gray-900 hover-target">Desain Database</a></li>
                <li><a href="#" className="hover:text-gray-900 hover-target">DevOps</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Perusahaan</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-gray-900 hover-target">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-gray-900 hover-target">Portofolio</a></li>
                <li><a href="#" className="hover:text-gray-900 hover-target">Karir</a></li>
                <li><a href="#" className="hover:text-gray-900 hover-target">Kontak</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Terhubung</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-gray-900 hover-target">Twitter</a></li>
                <li><a href="#" className="hover:text-gray-900 hover-target">LinkedIn</a></li>
                <li><a href="#" className="hover:text-gray-900 hover-target">GitHub</a></li>
                <li><a href="#" className="hover:text-gray-900 hover-target">Instagram</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600">
            <p>© {new Date().getFullYear()} TechCraft Solutions. Hak cipta dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}