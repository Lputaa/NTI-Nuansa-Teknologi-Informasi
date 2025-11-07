"use client";

import { ArrowRight, Award, ChevronLeft, ChevronRight, Cpu, Moon, Network, Package, Quote, Server, Shield, Sun, TrendingUp, Users, Wifi } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    setIsVisible(true);
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  const banners = [
    {
      title: "Solusi IT Terpercaya",
      subtitle: "Partner Digital Transformation Bisnis Anda",
      description: "Infrastruktur teknologi modern untuk mendukung pertumbuhan bisnis yang berkelanjutan",
      cta: "Jelajahi Layanan",
      href: "/services",
    },
    {
      title: "Cloud Server Management",
      subtitle: "Skalabilitas & Keamanan Terjamin",
      description: "Server cloud dengan uptime 99.9% dan dukungan teknis 24/7 untuk operasional maksimal",
      cta: "Pelajari Lebih Lanjut",
      href: "/services#cloud",
    },
    {
      title: "Internet Berkecepatan Tinggi",
      subtitle: "Konektivitas Tanpa Batas",
      description: "Layanan internet kabel dan nirkabel dengan bandwidth besar untuk kebutuhan bisnis modern",
      cta: "Hubungi Kami",
      href: "/contact",
    },
  ];

  const services = [
    {
      icon: Package,
      title: "Perdagangan Komputer & Software",
      description: "Penyediaan hardware dan software berkualitas dengan harga kompetitif untuk kebutuhan bisnis Anda.",
      href: "/services#komputer",
    },
    {
      icon: Server,
      title: "Cloud Server Management",
      description: "Solusi cloud yang scalable, aman, dan efisien dengan uptime 99.9% untuk operasional bisnis tanpa gangguan.",
      href: "/services#cloud",
    },
    {
      icon: Wifi,
      title: "Internet Kabel & Nirkabel",
      description: "Konektivitas internet berkecepatan tinggi dengan infrastruktur modern dan dukungan teknis 24/7.",
      href: "/services#internet",
    },
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Klien Aktif" },
    { icon: Award, value: "1,200+", label: "Project Selesai" },
    { icon: TrendingUp, value: "99.9%", label: "Uptime Server" },
    { icon: Shield, value: "24/7", label: "Support" },
  ];

  const testimonials = [
    {
      name: "Budi Santoso",
      position: "IT Manager",
      company: "PT Maju Teknologi",
      content: "NTI memberikan solusi cloud server yang sangat reliable. Uptime konsisten dan support team yang responsif membuat operasional kami berjalan lancar.",
      rating: 5,
    },
    {
      name: "Siti Rahayu",
      position: "CEO",
      company: "CV Digital Sukses",
      content: "Layanan internet dari NTI sangat stabil dan cepat. Sangat membantu produktivitas tim kami dalam menjalankan bisnis online.",
      rating: 5,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [banners.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <main className={`min-h-screen overflow-hidden transition-colors duration-300 ${
      darkMode 
        ? 'bg-[#0A1628] text-gray-100' 
        : 'bg-white text-gray-900'
    }`}>
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className={`fixed top-20 right-4 z-50 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
          darkMode
            ? 'bg-gradient-to-r from-[#0cc0df]/10 to-[#ffde59]/10 border border-[#0cc0df]/30 text-[#0cc0df] hover:from-[#0cc0df]/20 hover:to-[#ffde59]/20'
            : 'bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-50 shadow-lg'
        }`}
        aria-label="Toggle theme"
      >
        {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>

      {/* Hero Carousel Section */}
      <section className="relative h-[600px] sm:h-[700px] overflow-hidden">
        {/* Geometric Background */}
        <div className="absolute inset-0">
          <div className={`absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] animate-pulse ${
            darkMode 
              ? 'bg-gradient-to-br from-[#0cc0df]/30 to-[#ffde59]/20' 
              : 'bg-gradient-to-br from-[#0cc0df]/20 to-[#ffde59]/15'
          }`} />
          <div className={`absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] ${
            darkMode
              ? 'bg-gradient-to-tr from-[#0cc0df]/20 to-[#ffde59]/10'
              : 'bg-gradient-to-tr from-[#0cc0df]/15 to-[#ffde59]/10'
          }`} />
          
          {/* Animated triangles */}
          <div className="absolute top-20 right-20 opacity-10 animate-float">
            <svg width="100" height="100" viewBox="0 0 100 100">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0cc0df" />
                  <stop offset="100%" stopColor="#ffde59" />
                </linearGradient>
              </defs>
              <polygon points="50,10 90,90 10,90" fill="url(#grad1)" />
            </svg>
          </div>
          <div className="absolute bottom-40 left-20 opacity-10 animate-float-delayed">
            <svg width="80" height="80" viewBox="0 0 100 100">
              <defs>
                <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0cc0df" />
                  <stop offset="100%" stopColor="#ffde59" />
                </linearGradient>
              </defs>
              <polygon points="50,10 90,90 10,90" fill="url(#grad2)" />
            </svg>
          </div>
        </div>

        {/* Carousel Items */}
        <div className="relative h-full">
          {banners.map((banner, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="relative h-full flex items-center justify-center px-4 sm:px-6">
                <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
                  <div className={`inline-block px-4 py-2 bg-gradient-to-r from-[#0cc0df]/10 to-[#ffde59]/10 border border-[#0cc0df]/30 rounded-full backdrop-blur-sm ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                    <p className="text-[#0cc0df] text-sm font-bold">{banner.subtitle}</p>
                  </div>
                  
                  <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-black leading-tight ${
                    darkMode 
                      ? 'bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent' 
                      : 'text-gray-900'
                  } ${isVisible ? 'animate-fade-in-up-delay-1' : 'opacity-0'}`}>
                    {banner.title}
                  </h1>
                  
                  <p className={`text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  } ${isVisible ? 'animate-fade-in-up-delay-2' : 'opacity-0'}`}>
                    {banner.description}
                  </p>
                  
                  <Link
                    href={banner.href}
                    className={`inline-flex items-center bg-gradient-to-r from-[#0cc0df] to-[#ffde59] font-bold py-3 px-8 rounded-full hover:shadow-2xl hover:shadow-[#0cc0df]/50 hover:scale-105 transition-all duration-300 ${
                      darkMode ? 'text-[#0A1628]' : 'text-white'
                    } ${isVisible ? 'animate-fade-in-up-delay-3' : 'opacity-0'}`}
                  >
                    {banner.cta}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className={`absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full backdrop-blur-sm border flex items-center justify-center text-[#0cc0df] transition-all duration-300 z-10 ${
            darkMode
              ? 'bg-gradient-to-r from-[#0cc0df]/10 to-[#ffde59]/10 border-[#0cc0df]/30 hover:from-[#0cc0df]/20 hover:to-[#ffde59]/20'
              : 'bg-white/80 border-gray-300 hover:bg-white shadow-lg'
          }`}
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className={`absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full backdrop-blur-sm border flex items-center justify-center text-[#0cc0df] transition-all duration-300 z-10 ${
            darkMode
              ? 'bg-gradient-to-r from-[#0cc0df]/10 to-[#ffde59]/10 border-[#0cc0df]/30 hover:from-[#0cc0df]/20 hover:to-[#ffde59]/20'
              : 'bg-white/80 border-gray-300 hover:bg-white shadow-lg'
          }`}
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center space-x-2 z-10">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? "w-8 h-2 bg-gradient-to-r from-[#0cc0df] to-[#ffde59] shadow-[0_0_12px_#0cc0df]"
                  : darkMode
                  ? "w-2 h-2 bg-white/40 hover:bg-white/60"
                  : "w-2 h-2 bg-gray-400 hover:bg-gray-600"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Value Proposition */}
      <section className={`py-16 sm:py-20 border-b ${
        darkMode ? 'border-[#0cc0df]/10' : 'border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              { icon: Cpu, title: "Inovasi Terdepan", desc: "Menghadirkan teknologi terkini dengan sistem yang terintegrasi untuk efisiensi operasional maksimal." },
              { icon: Shield, title: "Keamanan Berlapis", desc: "Proteksi data dan infrastruktur dengan sistem keamanan enterprise-grade dan monitoring 24/7." },
              { icon: Network, title: "Skalabilitas Tinggi", desc: "Infrastruktur yang fleksibel dan dapat berkembang seiring pertumbuhan bisnis Anda." }
            ].map((item, index) => (
              <div
                key={index}
                className={`group relative p-8 rounded-2xl border transition-all duration-500 animate-fade-in-up ${
                  darkMode
                    ? 'border-[#0cc0df]/20 bg-[#142B47]/30 hover:border-[#ffde59]/50 hover:bg-[#142B47]/50'
                    : 'border-gray-200 bg-white hover:border-[#0cc0df]/50 hover:shadow-xl'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#0cc0df]/5 via-[#ffde59]/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />
                <div className="relative z-10 space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0cc0df]/10 to-[#ffde59]/10 flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#0cc0df]/30 transition-all duration-500">
                    <item.icon className="w-7 h-7 text-[#0cc0df]" />
                  </div>
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{item.title}</h3>
                  <p className={`leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 sm:py-28 relative">
        <div className="absolute top-20 right-0 w-64 h-64 opacity-5">
          <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
            <defs>
              <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0cc0df" />
                <stop offset="100%" stopColor="#ffde59" />
              </linearGradient>
            </defs>
            <polygon points="50,10 90,90 10,90" fill="url(#grad3)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
            <h2 className={`text-3xl sm:text-4xl font-black mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Layanan Kami
            </h2>
            <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Solusi komprehensif untuk semua kebutuhan teknologi informasi bisnis Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className={`group relative p-8 rounded-2xl border transition-all duration-500 animate-fade-in-up ${
                  darkMode
                    ? 'border-[#0cc0df]/20 bg-[#142B47]/30 hover:border-[#ffde59]/50 hover:bg-[#142B47]/50'
                    : 'border-gray-200 bg-white hover:border-[#0cc0df]/50 hover:shadow-xl'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#0cc0df]/5 via-[#ffde59]/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />
                
                <div className="relative z-10 space-y-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#0cc0df]/10 to-[#ffde59]/10 flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#0cc0df]/30 transition-all duration-500">
                    <service.icon className="w-8 h-8 text-[#0cc0df]" />
                  </div>
                  
                  <h3 className={`text-xl font-bold transition-all ${
                    darkMode
                      ? 'text-white group-hover:bg-gradient-to-r group-hover:from-[#0cc0df] group-hover:to-[#ffde59] group-hover:bg-clip-text group-hover:text-transparent'
                      : 'text-gray-900 group-hover:text-[#0cc0df]'
                  }`}>
                    {service.title}
                  </h3>
                  
                  <p className={`leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {service.description}
                  </p>
                  
                  <div className="flex items-center bg-gradient-to-r from-[#0cc0df] to-[#ffde59] bg-clip-text text-transparent font-bold pt-2 group-hover:translate-x-2 transition-transform duration-300">
                    Selengkapnya
                    <ArrowRight className="ml-2 w-4 h-4 text-[#0cc0df]" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`py-20 border-y ${
        darkMode ? 'bg-[#142B47]/30 border-[#0cc0df]/10' : 'bg-gray-50 border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center space-y-3 p-6 rounded-2xl border backdrop-blur-sm transition-all duration-500 animate-fade-in-up ${
                  darkMode
                    ? 'border-[#0cc0df]/20 bg-[#0A1628]/50 hover:border-[#ffde59]/40'
                    : 'border-gray-200 bg-white hover:border-[#0cc0df]/40 shadow-sm hover:shadow-lg'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0cc0df]/10 to-[#ffde59]/10 flex items-center justify-center mx-auto">
                  <stat.icon className="w-7 h-7 text-[#0cc0df]" />
                </div>
                <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-[#0cc0df] to-[#ffde59] bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className={`text-sm font-semibold uppercase tracking-wider ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
            <h2 className={`text-3xl sm:text-4xl font-black mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Apa Kata Klien Kami
            </h2>
            <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Kepercayaan dan kepuasan klien adalah prioritas utama kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-2xl border space-y-4 transition-all duration-500 animate-fade-in-up ${
                  darkMode
                    ? 'border-[#0cc0df]/20 bg-[#142B47]/30 hover:border-[#ffde59]/40'
                    : 'border-gray-200 bg-white hover:border-[#0cc0df]/40 shadow-sm hover:shadow-lg'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Quote className="w-10 h-10 text-[#0cc0df]/30" />
                
                <p className={`leading-relaxed text-lg ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-xl bg-gradient-to-r from-[#0cc0df] to-[#ffde59] bg-clip-text text-transparent">★</span>
                  ))}
                </div>
                
                <div className={`pt-4 border-t ${
                  darkMode ? 'border-[#0cc0df]/20' : 'border-gray-200'
                }`}>
                  <div className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {testimonial.name}
                  </div>
                  <div className="text-[#0cc0df] text-sm">
                    {testimonial.position}, {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className={`py-20 sm:py-28 border-y ${
        darkMode ? 'bg-[#142B47]/30 border-[#0cc0df]/10' : 'bg-gray-50 border-gray-200'
      }`}>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 space-y-8 animate-fade-in-up">
          <h2 className={`text-3xl sm:text-4xl font-black ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Tentang <span className="bg-gradient-to-r from-[#0cc0df] to-[#ffde59] bg-clip-text text-transparent">NTI</span>
          </h2>
          
          <p className={`text-lg leading-relaxed ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Nuansa Teknologi Informasi adalah partner IT terpercaya yang telah membantu ratusan perusahaan dalam transformasi digital mereka. Dengan pengalaman dan keahlian tim profesional, kami berkomitmen menghadirkan solusi teknologi yang inovatif, aman, dan efisien.
          </p>
          
          <Link
            href="/about"
            className={`inline-block border-2 border-[#0cc0df] text-[#0cc0df] px-8 py-3 rounded-full font-bold hover:bg-gradient-to-r hover:from-[#0cc0df] hover:to-[#ffde59] hover:border-transparent hover:shadow-lg hover:shadow-[#0cc0df]/30 transition-all duration-300 ${
              darkMode ? '' : 'hover:text-white'
            }`}
          >
            Pelajari Lebih Lanjut
          </Link>
        </div>
      </section>

      {/* Certifications & Clients Sliders */}
      <section className={`py-16 border-t ${
        darkMode ? 'border-[#0cc0df]/10' : 'border-gray-200'
      }`}>
        {/* Our Certifications */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-6">
          <p className={`text-center text-sm uppercase tracking-wider font-semibold mb-8 ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Sertifikasi & Lisensi
          </p>
          <div className="relative overflow-hidden group">
            <div className="flex animate-scroll-left hover:animation-pause">
              {[
                { name: "APJII", logo: "/certified/apjii.png" },
                { name: "IDNIC", logo: "/certified/idnic.png" },
                { name: "K3", logo: "/certified/k3.png" },
                { name: "KOMDIGI", logo: "/certified/komdigi.png" },
                // Duplicate items for seamless loop
                { name: "APJII", logo: "/certified/apjii.png" },
                { name: "IDNIC", logo: "/certified/idnic.png" },
                { name: "K3", logo: "/certified/k3.png" },
                { name: "KOMDIGI", logo: "/certified/komdigi.png" },
              ].map((cert, index) => (
                <div
                  key={index}
                  className={`shrink-0 px-8 py-4 mx-4 border rounded-lg backdrop-blur-sm transition-all duration-500 hover:scale-110 ${
                    darkMode
                      ? 'bg-[#142B47]/50 border-[#0cc0df]/20 hover:border-[#0cc0df]/40 hover:bg-[#142B47]/70'
                      : 'bg-white border-gray-200 hover:border-[#0cc0df]/40 shadow-sm hover:shadow-lg hover:shadow-[#0cc0df]/20'
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={cert.logo} alt={cert.name} className="h-12 w-auto transform transition-transform duration-500 group-hover:filter group-hover:brightness-110" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Clients */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-16">
          <p className={`text-center text-sm uppercase tracking-wider font-semibold mb-8 ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Klien Kami
          </p>
          <div className="relative overflow-hidden group">
            <div className="flex animate-scroll-right hover:animation-pause">
              {[
                { name: "Kementrian Kelautan dan Perikanan", logo: "/clients/kkp.png" },
                { name: "Nusapay", logo: "/clients/nusapay.png" },
                { name: "Universitas Siliwangi", logo: "/clients/us.png" },
                { name: "Kodam III", logo: "/clients/siliwangi.png" },
                { name: "Sekolah Tinggi Keguruan dan Ilmu Pendidikan", logo: "/clients/stkip.png" },
                { name: "SMK 1 Indramayu", logo: "/clients/smk1.png" },
                // Duplicate items for seamless loop
                { name: "Kementrian Kelautan dan Perikanan", logo: "/clients/kkp.png" },
                { name: "Nusapay", logo: "/clients/nusapay.png" },
                { name: "Universitas Siliwangi", logo: "/clients/us.png" },
                { name: "Kodam III", logo: "/clients/siliwangi.png" },
                { name: "SMK 1 Indramayu", logo: "/clients/smk1.png" },
                { name: "Sekolah Tinggi Keguruan dan Ilmu Pendidikan", logo: "/clients/stkip.png" }
              ].map((client, index) => (
                <div
                  key={index}
                  className={`shrink-0 px-8 py-4 mx-4 border rounded-lg backdrop-blur-sm transition-all duration-500 hover:scale-110 ${
                    darkMode
                      ? 'bg-[#142B47]/50 border-[#0cc0df]/20 hover:border-[#0cc0df]/40 hover:bg-[#142B47]/70'
                      : 'bg-white border-gray-200 hover:border-[#0cc0df]/40 shadow-sm hover:shadow-lg hover:shadow-[#0cc0df]/20'
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={client.logo} alt={client.name} className="h-12 w-auto transform transition-transform duration-500 group-hover:filter group-hover:brightness-110" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-[#0cc0df] to-[#ffde59]" />
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 400">
            <polygon points="0,0 400,200 800,50 1200,200 1200,0" fill={darkMode ? "#0A1628" : "#ffffff"} />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 space-y-6 relative z-10 animate-fade-in-up">
          <h2 className={`text-3xl sm:text-4xl font-black ${
            darkMode ? 'text-[#0A1628]' : 'text-white'
          }`}>
            Siap Transformasi Digital?
          </h2>
          <p className={`text-lg max-w-2xl mx-auto font-medium ${
            darkMode ? 'text-[#0A1628]/80' : 'text-white/90'
          }`}>
            Konsultasikan kebutuhan IT bisnis Anda dengan tim ahli kami. Dapatkan solusi terbaik yang sesuai dengan kebutuhan dan budget Anda.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className={`inline-flex items-center font-bold py-3 px-8 rounded-full hover:scale-105 transition-all duration-300 ${
                darkMode
                  ? 'bg-[#0A1628] text-white hover:bg-[#142B47]'
                  : 'bg-white text-gray-900 hover:bg-gray-100'
              }`}
            >
              Hubungi Kami Sekarang
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href="tel:+628195016666"
              className={`inline-flex items-center border-2 font-bold py-3 px-8 rounded-full transition-all duration-300 ${
                darkMode
                  ? 'border-[#0A1628] text-[#0A1628] hover:bg-[#0A1628] hover:text-white'
                  : 'border-white text-white hover:bg-white hover:text-gray-900'
              }`}
            >
              atau Telepon Langsung
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

          @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .hover\:animation-pause:hover {
          animation-play-state: paused;
        }        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(10deg);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(20px) rotate(-10deg);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-fade-in-up-delay-1 {
          animation: fade-in-up 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }

        .animate-fade-in-up-delay-2 {
          animation: fade-in-up 0.8s ease-out 0.4s forwards;
          opacity: 0;
        }

        .animate-fade-in-up-delay-3 {
          animation: fade-in-up 0.8s ease-out 0.6s forwards;
          opacity: 0;
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </main>
  );
}