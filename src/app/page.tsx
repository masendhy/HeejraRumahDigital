"use client";

import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      title: "Web Development",
      description: "Custom websites built with modern technologies for optimal performance and user experience.",
      icon: "🌐",
    },
    {
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps designed to engage your audience on any device.",
      icon: "📱",
    },
    {
      title: "Database Solutions",
      description: "Scalable database architectures using MySQL with Prisma ORM for efficient data management.",
      icon: "🗄️",
    },
    {
      title: "DevOps & Deployment",
      description: "Containerized solutions with Docker for seamless deployment and scaling.",
      icon: "🐳",
    },
  ];

  const testimonials = [
    {
      name: "Alex Johnson",
      role: "CEO, TechStart Inc.",
      content: "The team delivered our project on time and exceeded our expectations. Their expertise in Next.js and Docker is impressive.",
    },
    {
      name: "Sarah Williams",
      role: "Product Manager, InnovateCo",
      content: "Working with this team was a game-changer for our business. Their attention to detail and technical skills are top-notch.",
    },
    {
      name: "Michael Chen",
      role: "Founder, StartupHub",
      content: "The custom application they built for us has streamlined our operations significantly. Highly recommended!",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-lg hero-gradient"></div>
          <span className="text-xl font-bold">TechCraft</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="hover:text-gray-600 transition-colors">Services</a>
          <a href="#portfolio" className="hover:text-gray-600 transition-colors">Portfolio</a>
          <a href="#testimonials" className="hover:text-gray-600 transition-colors">Testimonials</a>
          <a href="#contact" className="hover:text-gray-600 transition-colors">Contact</a>
        </div>
        
        <button className="hidden md:block bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
          Get Started
        </button>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white p-6 absolute top-20 left-0 right-0 shadow-lg">
          <div className="flex flex-col space-y-4">
            <a href="#services" className="hover:text-gray-600 transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-gray-600 transition-colors">Portfolio</a>
            <a href="#testimonials" className="hover:text-gray-600 transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-gray-600 transition-colors">Contact</a>
            <button className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors w-full">
              Get Started
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Custom <span className="hero-gradient text-transparent bg-clip-text">Web & App Solutions</span> for Modern Businesses
          </h1>
          <p className="text-xl text-gray-600 mb-10">
            We build scalable applications and websites using cutting-edge technologies like Next.js, MySQL with Prisma ORM, and Docker containerization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors text-lg font-medium">
              Start Your Project
            </button>
            <button className="border-2 border-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg font-medium">
              View Our Work
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide end-to-end development solutions tailored to your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Technology Stack</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We use modern, industry-standard technologies to build robust and scalable solutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow">
              <div className="text-4xl mb-4">⚡</div>
              <span className="font-medium">Next.js</span>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow">
              <div className="text-4xl mb-4">🐬</div>
              <span className="font-medium">MySQL</span>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow">
              <div className="text-4xl mb-4">🔗</div>
              <span className="font-medium">Prisma ORM</span>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow">
              <div className="text-4xl mb-4">🐳</div>
              <span className="font-medium">Docker</span>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow">
              <div className="text-4xl mb-4">☁️</div>
              <span className="font-medium">Cloud</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from businesses we've helped transform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Let's discuss how we can help bring your vision to life with our expert development services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-200 transition-colors text-lg font-medium">
              Contact Us
            </button>
            <button className="border-2 border-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors text-lg font-medium">
              Schedule a Call
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
                Building custom web and mobile solutions for businesses worldwide.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Web Development</a></li>
                <li><a href="#" className="hover:text-gray-900">App Development</a></li>
                <li><a href="#" className="hover:text-gray-900">Database Design</a></li>
                <li><a href="#" className="hover:text-gray-900">DevOps</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-gray-900">About Us</a></li>
                <li><a href="#" className="hover:text-gray-900">Portfolio</a></li>
                <li><a href="#" className="hover:text-gray-900">Careers</a></li>
                <li><a href="#" className="hover:text-gray-900">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Connect</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Twitter</a></li>
                <li><a href="#" className="hover:text-gray-900">LinkedIn</a></li>
                <li><a href="#" className="hover:text-gray-900">GitHub</a></li>
                <li><a href="#" className="hover:text-gray-900">Instagram</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600">
            <p>© {new Date().getFullYear()} TechCraft Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}