import React from 'react';


// Interface untuk data why_choose_us
interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
}

interface WhyChooseUsData {
  heading: string;
  items: WhyChooseUsItem[];
}

const WhyChooseUs = () => {
  // Data why choose us
  const data: WhyChooseUsData = {
    heading: "Mengapa Memilih Kami",
    items: [
      {
        id: "01",
        title: "Layanan yang Komprehensif",
        description: "Setiap bisnis punya tujuan, dan kami hadir untuk membantu Anda menyampaikannya melalui strategi digital yang efektif dan menyeluruh."
      },
      {
        id: "02",
        title: "Formulir Kontak yang Efektif",
        description: "Formulir interaktif dan mudah digunakan untuk memudahkan pelanggan menjangkau Anda, sekaligus meningkatkan peluang konversi."
      },
      {
        id: "03",
        title: "Analisis Kinerja Berbasis Data",
        description: "Setiap keputusan didukung data yang akurat, sehingga strategi yang dijalankan dapat memberikan hasil yang terukur."
      },
      {
        id: "04",
        title: "Pilihan Harga Layanan yang Fleksibel",
        description: "Kami menawarkan pilihan harga yang fleksibel dan transparan, disesuaikan dengan kebutuhan bisnis Anda tanpa kompromi terhadap kualitas layanan."
      }
    ]
  };

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
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
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Kolom Kiri - Heading */}
        <div>
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent animate-fade-in opacity-0" style={{ animationDelay: '0.1s' }}>
              Menciptakan
            </span>{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
              Solusi
            </span>{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent animate-fade-in opacity-0" style={{ animationDelay: '0.5s' }}>
              Digital
            </span>{" "}
            <span className="text-[#101829] dark:text-[#101829] animate-fade-in opacity-0" style={{ animationDelay: '0.7s' }}>
              yang Tepat dan
            </span>{" "}
            <span className="text-[#101829] dark:text-[#101829] animate-fade-in opacity-0" style={{ animationDelay: '0.9s' }}>
              Berdampak
            </span>{" "}
            <span className="text-[#101829] dark:text-[#101829] animate-fade-in opacity-0" style={{ animationDelay: '1.1s' }}>
              bagi Bisnis Anda.
            </span>
          </h2>
          {/* Elemen dekoratif shape 3D abstrak */}
          <div className="relative mt-12">
            <div className="absolute -bottom-6 left-0 w-24 h-24 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-6 right-0 w-24 h-24 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>
        </div>

        {/* Kolom Kanan - Grid 2x2 Cards */}
        <div className="grid grid-cols-2 gap-6">
          {data.items.map((item, index) => (
            <div
              key={item.id}
              className="border border-gray-200 dark:border-gray-700 rounded-2xl bg-white dark:bg-[#0f0f14] p-6 transition-all duration-500 transform hover:-translate-y-2 hover:border-purple-500 dark:hover:border-purple-500 hover:shadow-xl hover:shadow-purple-500/30 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              {/* Nomor urut dengan warna pink/ungu */}
              <div className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-4">
                {item.id}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-[24px] leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;