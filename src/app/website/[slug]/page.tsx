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
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Website Tidak Ditemukan</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">Maaf, website yang Anda cari tidak tersedia.</p>
          <Link 
            href="/#demo" 
            className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-pink-600 transition-all duration-300"
          >
            Kembali ke Demo
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <Link 
          href="/#demo" 
          className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 mb-8 transition-colors duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Kembali ke Demo
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="flex items-center mb-4">
              <div className="h-0.5 w-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
              <div className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent ml-3">
                {website.category}
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {website.title}
            </h1>
            
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              {website.description}
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Klien</h3>
                <p className="text-gray-600 dark:text-gray-400">{website.client}</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Industri</h3>
                <p className="text-gray-600 dark:text-gray-400">{website.industry}</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Tahun</h3>
                <p className="text-gray-600 dark:text-gray-400">{website.year}</p>
              </div>
            </div>
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
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Fitur Utama</h2>
            <ul className="space-y-4">
              {website.features.map((feature: string, index: number) => (
                <li key={index} className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Teknologi</h2>
            <div className="flex flex-wrap gap-3 mb-8">
              {website.technologies.map((tech: string, index: number) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Tertarik dengan proyek serupa?</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Kami siap membantu Anda mewujudkan solusi digital yang tepat untuk bisnis Anda.
              </p>
              <button 
                onClick={() => window.open('https://wa.me/628562985589?text=Hi%20Heejra%2C%20saya%20tertarik%20dengan%20layanan%20pembuatan%20website%20dan%20aplikasi%20nya.', '_blank')}
                className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-pink-600 transition-all duration-300 w-full"
              >
                Hubungi Kami
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}