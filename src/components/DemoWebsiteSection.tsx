import React from 'react';

const DemoWebsiteSection = () => {
  // Data untuk demo website - hanya 2 card yang tersisa
  const demoData = [
    {
      id: 1,
      image: '/showroom-display.jpg',
      category: 'Branding,Website,App',
      title: 'Demo Website Showroom',
    },
    {
      id: 2,
      image: '/travel.jpg',
      category: 'App,Marketing',
      title: 'Demo Startup Landing Page',
    }
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
            `}
          >
            <div className="relative">
              <img 
                src={demo.image} 
                alt={demo.title} 
                className="w-full h-64 object-cover"
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
              <button className="text-[20px] bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-pink-600 transition-all duration-300 w-fit">
                Detail Website
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DemoWebsiteSection;