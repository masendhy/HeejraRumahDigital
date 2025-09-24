"use client";

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

// Data contoh untuk website detail
const websiteData = [
  {
    id: 1,
    slug: 'demo-website-showroom',
    title: 'Demo Website Showroom',
    category: 'Branding,Website,App',
    image: '/showroom-display.jpg',
    description: 'Showroom digital modern yang menampilkan produk dengan antarmuka yang menarik dan mudah dinavigasi. Dilengkapi dengan fitur katalog produk lengkap, pencarian cerdas, dan sistem manajemen inventaris real-time.',
    features: [
      'Desain responsif untuk semua perangkat',
      'Integrasi sistem manajemen inventaris',
      'Fitur pencarian dan filter produk',
      'Galeri media interaktif',
      'Sistem manajemen konten (CMS)',
      'Optimasi SEO'
    ],
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Prisma', 'MySQL'],
    client: 'PT. Contoh Perusahaan',
    industry: 'Retail & E-commerce',
    year: '2024'
  },
  {
    id: 2,
    slug: 'demo-startup-landing-page',
    title: 'Demo Startup Landing Page',
    category: 'App,Marketing',
    image: '/travel.jpg',
    description: 'Landing page profesional untuk startup yang menawarkan solusi berbasis aplikasi. Fokus pada konversi tinggi dengan desain yang menarik, call-to-action yang jelas, dan pengalaman pengguna yang optimal.',
    features: [
      'Desain landing page yang dioptimalkan untuk konversi',
      'Integrasi dengan platform email marketing',
      'Formulir kontak dan lead capture',
      'Testimoni dan studi kasus pelanggan',
      'Blog dan sistem manajemen konten',
      'Analytics dan pelacakan performa'
    ],
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Firebase', 'Framer Motion'],
    client: 'Startup Tech Indonesia',
    industry: 'Technology',
    year: '2024'
  }
];

export default function WebsiteDetail() {
  const params = useParams();
  const { slug } = params;
  const [website, setWebsite] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulasi fetching data berdasarkan slug
    const foundWebsite = websiteData.find(site => site.slug === slug);
    if (foundWebsite) {
      setWebsite(foundWebsite);
    } else {
      // Handle case when website is not found
      setWebsite(null);
    }
    setLoading(false);
  }, [slug]);

  // Force light mode styling by using only light mode colors
  useEffect(() => {
    // Add a class to force light mode styles
    document.documentElement.classList.add('force-light-mode');
    
    // Cleanup function
    return () => {
      // Remove the force-light-mode class when component unmounts
      document.documentElement.classList.remove('force-light-mode');
    };
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (!website) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Website Tidak Ditemukan</h1>
          <p className="text-gray-600 mb-6">Maaf, website yang Anda cari tidak tersedia.</p>
          <Link 
            href="http://localhost:3000/" 
            className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-pink-600 transition-all duration-300"
            style={{ fontSize: '20px' }}
          >
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-6">
      <style jsx global>{`
        /* Force light mode colors for this page */
        .force-light-mode {
          --text-primary: #101829;
          --text-secondary: #6b7280;
          --bg-light: #f3f4f6;
        }
        
        /* Override dark mode styles for this page */
        .force-light-mode .text-gray-900,
        .force-light-mode .dark\:text-white {
          color: #101829 !important;
        }
        
        .force-light-mode .text-gray-700,
        .force-light-mode .dark\:text-gray-300 {
          color: #6b7280 !important;
        }
        
        .force-light-mode .text-gray-600,
        .force-light-mode .dark\:text-gray-400 {
          color: #6b7280 !important;
        }
        
        .force-light-mode .bg-gray-100,
        .force-light-mode .dark\:bg-gray-800 {
          background-color: #f3f4f6 !important;
        }
        
        .force-light-mode .text-purple-600,
        .force-light-mode .dark\:text-purple-400 {
          color: #9333ea !important;
        }
        
        .force-light-mode .hover\:text-purple-800:hover,
        .force-light-mode .dark\:hover\:text-purple-300:hover {
          color: #7e22ce !important;
        }
        
        /* Custom button styles */
        .demo-button-wrapper {
          position: relative;
          display: inline-block;
          margin: 20px;
        }

        .demo-button-link {
          color: white; /* Warna teks putih untuk kontras dengan background gelap */
          font-family: 'Jost', Helvetica, sans-serif;
          font-weight: bold;
          font-size: 24px;
          text-align: center;
          text-decoration: none;
          background: #568C69; /* Warna #568C69 */
          display: block;
          position: relative;
          padding: 20px 40px;
          
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          text-shadow: 0px 1px 0px #000;
          filter: dropshadow(color=#000, offx=0px, offy=1px);
          
          -webkit-box-shadow: inset 0 1px 0 #8cb099, 0 10px 0 #3d634a; /* Shadow disesuaikan */
          -moz-box-shadow: inset 0 1px 0 #8cb099, 0 10px 0 #3d634a;
          box-shadow: inset 0 1px 0 #8cb099, 0 10px 0 #3d634a;
          
          -webkit-border-radius: 5px;
          -moz-border-radius: 5px;
          border-radius: 5px;
          
          /* Responsive styling for mobile */
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 100%;
        }
        
        .demo-button-admin {
          padding: 20px 60px; /* Lebih panjang di sisi kanan-kiri */
        }

        .demo-button-link:active {
          top: 10px;
          background: #457055; /* Warna sedikit lebih gelap saat ditekan */
          
          -webkit-box-shadow: inset 0 1px 0 #8cb099, inset 0 -3px 0 #3d634a;
          -moz-box-shadow: inset 0 1px 0 #8cb099, inset 0 -3px 0 #3d634a;
          box-shadow: inset 0 1px 0 #8cb099, inset 0 -3px 0 #3d634a;
        }

        .demo-button-wrapper:after {
          content: "";
          height: 100%;
          width: 100%;
          padding: 4px;
          position: absolute;
          bottom: -15px;
          left: -4px;
          z-index: -1;
          background-color: #3d634a; /* Shadow bawah disesuaikan */
          -webkit-border-radius: 5px;
          -moz-border-radius: 5px;
          border-radius: 5px;
        }
        
        .justify-self-start {
          justify-self: start;
        }
        
        .justify-self-end {
          justify-self: end;
        }
        
        /* Desktop styles for better spacing */
        @media (min-width: 1024px) {
          .grid.grid-cols-2 {
            gap: 100px; /* Jarak besar antara tombol di desktop */
          }
          
          .demo-button-wrapper {
            margin: 20px 10px; /* Margin tambahan untuk tombol */
          }
        }
        
        /* Laptop styles */
        @media (min-width: 769px) and (max-width: 1023px) {
          .grid.grid-cols-2 {
            gap: 60px; /* Jarak sedang antara tombol di laptop */
          }
          
          .demo-button-wrapper {
            margin: 20px 10px;
          }
        }
        
        /* Tablet styles */
        @media (max-width: 768px) {
          .demo-button-link {
            font-size: 18px;
            padding: 15px 25px;
          }
          
          .demo-button-admin {
            padding: 15px 35px;
          }
          
          .demo-button-wrapper {
            margin: 10px 5px;
          }
        }
        
        @media (max-width: 480px) {
          .demo-button-link {
            font-size: 16px;
            padding: 12px 20px;
          }
          
          .demo-button-admin {
            padding: 12px 30px;
          }
          
          .grid.grid-cols-2 {
            grid-template-columns: 1fr;
            gap: 10px;
          }
          
          .justify-self-start,
          .justify-self-end {
            justify-self: center;
          }
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto">
        <Link 
          href="http://localhost:3000/" 
          className="inline-flex items-center text-purple-600 hover:text-purple-800 mb-8 transition-colors duration-300 font-bold"
          style={{ fontSize: '20px' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 20 20" fill="#9333ea">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Kembali ke Beranda
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="flex items-center mb-4">
              <div className="h-0.5 w-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
              <div className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent ml-3">
                {website.category}
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {website.title}
            </h1>
            
            <p className="text-xl text-gray-700 mb-8">
              {website.description}
            </p>
          </div>
          
          <div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src={website.image} 
                alt={website.title} 
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Fitur Utama</h2>
            <ul className="space-y-4">
              {website.features.map((feature: string, index: number) => (
                <li key={index} className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span 
                    className="text-gray-700"
                    style={{ fontSize: '20px' }}
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Teknologi</h2>
            <div className="flex flex-wrap gap-3 mb-8">
              {website.technologies.map((tech: string, index: number) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full text-sm font-medium"
                  style={{ fontSize: '18px' }}
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="demo-button-wrapper justify-self-start">
                <a 
                  href="/admin-demo" 
                  target="_blank"
                  className="demo-button-link demo-button-admin"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open('/admin-demo', '_blank');
                  }}
                >
                  Demo Admin Page
                </a>
              </div>
              <div className="demo-button-wrapper justify-self-end">
                <a 
                  href="/website-demo" 
                  target="_blank"
                  className="demo-button-link"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open('/website-demo', '_blank');
                  }}
                >
                  Demo Website
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}