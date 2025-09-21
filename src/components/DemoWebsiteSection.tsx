import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

// Custom hook untuk mendeteksi tema
const useTheme = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const updateTheme = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setTheme(isDark ? 'dark' : 'light');
    };

    // Cek awal
    updateTheme();

    // Listen perubahan
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  return theme;
};

const DemoWebsiteSection = () => {
  // Gunakan custom hook untuk mendeteksi tema
  const theme = useTheme();
  
  // Data untuk demo website - hanya 2 card yang tersisa
  const demoData = [
    {
      id: 1,
      slug: 'demo-website-showroom',
      image: '/showroom-display.jpg',
      category: 'Branding,Website,App',
      title: 'Demo Website Showroom',
    },
    {
      id: 2,
      slug: 'demo-startup-landing-page',
      image: '/travel.jpg',
      category: 'App,Marketing',
      title: 'Demo Startup Landing Page',
    }
  ];

  // Ref untuk animasi scroll
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Animasi saat card muncul
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
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
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .demo-card {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.1);
        }
        
        .demo-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        
        .demo-card-img {
          transition: transform 0.5s ease;
        }
        
        .demo-card:hover .demo-card-img {
          transform: scale(1.05);
        }
        
        .demo-card-button {
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .demo-card-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: all 0.6s ease;
        }
        
        .demo-card-button:hover::before {
          left: 100%;
        }
      `}</style>
      
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: theme === 'dark' ? '#ffffff' : '#101829' }}>
          Jelajahi Demo Website Kami
        </h2>
        <p className="text-[24px] max-w-3xl mx-auto" style={{ color: theme === 'dark' ? '#d1d5db' : '#101829' }}>
          Rasakan bagaimana solusi digital kami dapat membantu mengoptimalkan bisnis Anda.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {demoData.map((demo, index) => (
          <div
            key={demo.id}
            ref={(el) => { if (el) cardRefs.current[index] = el; }}
            className={`
              demo-card rounded-2xl overflow-hidden shadow-lg opacity-0
              ${index === 0 ? 'md:translate-y-4' : ''}
            `}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="relative overflow-hidden">
              <img 
                src={demo.image} 
                alt={demo.title} 
                className="demo-card-img w-full h-64 object-cover"
              />
            </div>
            <div className="bg-[#101829] dark:bg-[#101829] p-6">
              <div className="flex items-center mb-3">
                <div className="h-0.5 w-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
                <div className="text-[24px] font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent ml-3">
                  {demo.category}
                </div>
              </div>
              <h3 className="text-[30px] font-bold text-white mb-4">
                {demo.title}
              </h3>
              <Link 
                href={`/website/${demo.slug}`}
                className="demo-card-button text-[20px] bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-pink-600 transition-all duration-300 w-fit inline-block"
              >
                Detail Website
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DemoWebsiteSection;