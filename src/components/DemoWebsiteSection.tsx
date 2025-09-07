import React from 'react';

const DemoWebsiteSection = () => {
  // Data untuk demo website
  const demoData = [
    {
      id: 1,
      image: '/showroom-new.jpg',
      category: 'E-Commerce',
      title: 'Demo Toko Online Modern',
    },
    {
      id: 2,
      image: '/showroom-new.jpg',
      category: 'Landing Page',
      title: 'Demo Startup Landing Page',
    },
    {
      id: 3,
      image: '/showroom-new.jpg',
      category: 'Company Profile',
      title: 'Demo Website Perusahaan',
    },
    {
      id: 4,
      image: '/showroom-new.jpg',
      category: 'Marketing',
      title: 'Demo Katalog Produk Digital',
    },
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#101829] dark:text-[#101829] mb-6">
          Jelajahi Demo Website Kami
        </h2>
        <p className="text-[24px] text-[#414b59] dark:text-[#414b59] max-w-3xl mx-auto">
          Rasakan bagaimana solusi digital kami dapat membantu mengoptimalkan bisnis Anda.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {demoData.map((demo, index) => (
          <div
            key={demo.id}
            className={`
              rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl
              ${index === 0 ? 'md:translate-y-4' : ''}
              ${index === 3 ? 'md:-translate-y-4' : ''}
            `}
          >
            <div className="relative">
              <img 
                src={demo.image} 
                alt={demo.title} 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="text-sm font-medium text-purple-300 dark:text-purple-300 mb-2">
                  {demo.category}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {demo.title}
                </h3>
                <button className="text-sm bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-pink-600 transition-all duration-300 w-fit">
                  Lihat Demo
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DemoWebsiteSection;