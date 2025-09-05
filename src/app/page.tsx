"use client";

import { useState, useEffect } from "react";
import { 
  animateHeroSection, 
  animateServicesSection, 
  animateTechStackSection, 
  animateTestimonialsSection,
  initScrollAnimations
} from "@/lib/gsapAnimations";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Initialize animations when component mounts
  useEffect(() => {
    // Animate hero section
    animateHeroSection();
    
    // Animate other sections
    animateServicesSection();
    animateTechStackSection();
    animateTestimonialsSection();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Refresh ScrollTrigger when component unmounts
    return () => {
      if (typeof window !== 'undefined') {
        ScrollTrigger.refresh();
      }
    };
  }, []);

  const services = [
    {
      title: "Pengembangan Web",
      description: "Website kustom yang dibangun dengan teknologi modern untuk kinerja optimal dan pengalaman pengguna yang luar biasa.",
      icon: "🌐",
    },
    {
      title: "Aplikasi Mobile",
      description: "Aplikasi mobile native dan cross-platform yang dirancang untuk menarik audiens Anda di perangkat apa pun.",
      icon: "📱",
    },
    {
      title: "Solusi Database",
      description: "Arsitektur database yang skalabel menggunakan MySQL dengan Prisma ORM untuk manajemen data yang efisien.",
      icon: "🗄️",
    },
    {
      title: "DevOps & Deployment",
      description: "Solusi yang dikontainerisasi dengan Docker untuk deployment dan penskalaan yang mulus.",
      icon: "🐳",
    },
  ];

  const testimonials = [
    {
      name: "Budi Santoso",
      role: "CEO, TechStart Indonesia",
      content: "Tim ini menyelesaikan proyek kami tepat waktu dan melampaui ekspektasi kami. Keahlian mereka dalam Next.js dan Docker sangat mengesankan.",
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

  return (
    <div className="min-h-screen">
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
          <p className="hero-subtitle text-xl text-gray-600 mb-10">
            Kami membangun aplikasi dan website yang skalabel menggunakan teknologi terkini.
          </p>
          <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors text-lg font-medium">
              Mulai Proyek Anda
            </button>
            <button className="border-2 border-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg font-medium">
              Lihat Karya Kami
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="services-title text-3xl md:text-4xl font-bold mb-4">Layanan Kami</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Kami menyediakan solusi pengembangan end-to-end yang disesuaikan dengan kebutuhan bisnis Anda
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-item flex flex-row items-start p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="text-4xl mr-6 mt-1 flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-xl bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300">
                {service.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stack Teknologi Kami</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Kami menggunakan teknologi modern dan standar industri untuk membangun solusi yang kuat dan skalabel
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow tech-stack-item">
              <div className="text-4xl mb-4">⚡</div>
              <span className="font-medium">Next.js</span>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow tech-stack-item">
              <div className="text-4xl mb-4">🐬</div>
              <span className="font-medium">MySQL</span>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow tech-stack-item">
              <div className="text-4xl mb-4">🔗</div>
              <span className="font-medium">Prisma ORM</span>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow tech-stack-item">
              <div className="text-4xl mb-4">🐳</div>
              <span className="font-medium">Docker</span>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow tech-stack-item">
              <div className="text-4xl mb-4">☁️</div>
              <span className="font-medium">Cloud</span>
            </div>
          </div>
        </div>
      </section>

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
            <div key={index} className="testimonial-card bg-white p-8 rounded-xl shadow-lg border border-gray-100">
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
            <button className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-200 transition-colors text-lg font-medium">
              Hubungi Kami
            </button>
            <button className="border-2 border-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors text-lg font-medium">
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
                <div className="w-8 h-8 rounded-lg hero-gradient"></div>
                <span className="text-xl font-bold">TechCraft</span>
              </div>
              <p className="text-gray-600">
                Membangun solusi web dan mobile kustom untuk bisnis di seluruh dunia.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Layanan</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Pengembangan Web</a></li>
                <li><a href="#" className="hover:text-gray-900">Pengembangan Aplikasi</a></li>
                <li><a href="#" className="hover:text-gray-900">Desain Database</a></li>
                <li><a href="#" className="hover:text-gray-900">DevOps</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Perusahaan</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-gray-900">Portofolio</a></li>
                <li><a href="#" className="hover:text-gray-900">Karir</a></li>
                <li><a href="#" className="hover:text-gray-900">Kontak</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Terhubung</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Twitter</a></li>
                <li><a href="#" className="hover:text-gray-900">LinkedIn</a></li>
                <li><a href="#" className="hover:text-gray-900">GitHub</a></li>
                <li><a href="#" className="hover:text-gray-900">Instagram</a></li>
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