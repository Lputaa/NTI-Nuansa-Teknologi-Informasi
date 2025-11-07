"use client";

import {
  Facebook,
  HeadphonesIcon,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Moon,
  Phone,
  Send,
  Sun
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    setDarkMode(theme === "dark");
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("theme", !darkMode ? "dark" : "light");
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });

  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        type: "error",
        message: "Mohon lengkapi nama, email, dan pesan Anda."
      });
      return;
    }

    setFormStatus({
      type: "success",
      message: "Terima kasih! Pesan Anda telah terkirim. Tim kami akan menghubungi Anda segera."
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: ""
    });

    setTimeout(() => {
      setFormStatus({ type: null, message: "" });
    }, 5000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telepon",
      details: [
        "+622150106260",
        "+62-819-5016-666"
      ],
      action: "tel:+622150106260"
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "info@nti.co.id",
        "support@nti.co.id"
      ],
      action: "mailto:info@nti.co.id"
    },
    {
      icon: MapPin,
      title: "Head Office",
      details: [
        "Head Office",
        "Indonesia Stock Exchange Tower 1 Level 3, Unit 304.Jl. Jendral Sudirman Kav. 52-53, Senayan Village,",
        "Kebayoran Baru District, South Jakarta Administrative City, DKI Jakarta Province,Postal Code 12190, Indonesia."
      ],
      action: null
    },
    {
      icon: MapPin,
      title: "Branch Cikarang",
      details: [
        "Branch Cikarang",
        "Graha Cikarang, Blok D3 No. 3, JL. Dahlia II,",
        "Simpangan, Cikarang Utara, Bekasi Regency, West Java, Postal Code 17530, Indonesia."
      ],
      action: null
    }
  ];

  const services = [
    "Perdagangan Komputer & Software",
    "Cloud Server Management",
    "Internet Kabel & Nirkabel",
    "Konsultasi IT",
    "Maintenance & Support",
    "Lainnya"
  ];

  const quickLinks = [
    {
      icon: HeadphonesIcon,
      title: "Support 24/7",
      description: "Tim support kami siap membantu kapan saja",
      link: "tel:+628195016666",
      linkText: "Hubungi Support"
    },
    {
      icon: MessageSquare,
      title: "FAQ",
      description: "Temukan jawaban untuk pertanyaan umum",
      link: "/services",
      linkText: "Lihat FAQ"
    }
  ];

  return (
        <main className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-[#0A1628] text-gray-100' : 'bg-white text-gray-900'
    }`}>
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className={`fixed top-20 right-4 z-50 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
          darkMode
            ? 'bg-linear-to-r from-[#0cc0df]/10 to-[#ffde59]/10 border border-[#0cc0df]/30 text-[#0cc0df] hover:from-[#0cc0df]/20 hover:to-[#ffde59]/20'
            : 'bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-50 shadow-lg'
        }`}
        aria-label="Toggle theme"
      >
        {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>

      {/* Hero Section */}
      <section className={`relative py-20 sm:py-28 px-4 sm:px-6 border-b overflow-hidden ${
        darkMode ? 'border-[#0cc0df]/10' : 'border-gray-200'
      }`}>
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl animate-pulse ${
            darkMode 
              ? 'bg-linear-to-br from-[#0cc0df]/10 to-[#ffde59]/5'
              : 'bg-linear-to-br from-[#0cc0df]/15 to-[#ffde59]/10'
          }`} />
          <div className={`absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl ${
            darkMode
              ? 'bg-linear-to-tr from-[#0cc0df]/5 to-[#ffde59]/5'
              : 'bg-linear-to-tr from-[#0cc0df]/10 to-[#ffde59]/10'
          }`} />
        </div>
        
        <div className={`max-w-4xl mx-auto text-center space-y-6 relative z-10 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-block px-4 py-2 bg-linear-to-r from-[#0cc0df]/10 to-[#ffde59]/10 border border-[#0cc0df]/30 rounded-full backdrop-blur-sm">
            <p className="text-[#0cc0df] text-sm font-bold">Hubungi Kami</p>
          </div>
          
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-black ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Mari Diskusikan <span className="bg-linear-to-r from-[#0cc0df] to-[#ffde59] bg-clip-text text-transparent">Kebutuhan IT Anda</span>
          </h1>
          
          <p className={`text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Tim ahli kami siap memberikan konsultasi dan solusi terbaik untuk transformasi digital bisnis Anda.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className={`py-16 ${darkMode ? 'bg-[#142B47]/30 border-[#0cc0df]/10' : 'bg-gray-100 border-gray-200'} border-b`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl border backdrop-blur-sm hover:shadow-xl transition-all duration-500 animate-fade-in-up ${
                  darkMode 
                    ? 'border-[#0cc0df]/20 bg-[#0A1628]/50 hover:border-[#0cc0df]/40 hover:shadow-[#0cc0df]/10' 
                    : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-gray-200'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-[#0cc0df]/10 flex items-center justify-center mb-4 shadow-lg shadow-[#0cc0df]/10">
                  <info.icon className="w-6 h-6 text-[#0cc0df]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-400 text-sm">
                      {info.action && idx === 0 ? (
                        <a
                          href={info.action}
                          className="hover:text-[#0cc0df] transition-colors"
                        >
                          {detail}
                        </a>
                      ) : (
                        detail
                      )}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content: Form + Map */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in-up">
                <div className="mb-8">
                <h2 className={`text-3xl font-black mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Kirim Pesan
                </h2>
                <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                  Isi form di bawah ini dan tim kami akan menghubungi Anda dalam 1x24 jam.
                </p>
              </div>              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Nama Lengkap <span className="text-[#00D9FF]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 border rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 transition-all ${
                      darkMode
                        ? 'bg-[#142B47]/50 border-[#0cc0df]/20 text-white focus:border-[#0cc0df] focus:ring-[#0cc0df]/20'
                        : 'bg-white border-gray-200 text-gray-900 focus:border-[#0cc0df] focus:ring-[#0cc0df]/20'
                    }`}
                    placeholder="Masukkan nama lengkap Anda"
                  />
                </div>

                <div>
                  <label htmlFor="email" className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Email <span className="text-[#00D9FF]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 border rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 transition-all ${
                      darkMode
                        ? 'bg-[#142B47]/50 border-[#0cc0df]/20 text-white focus:border-[#0cc0df] focus:ring-[#0cc0df]/20'
                        : 'bg-white border-gray-200 text-gray-900 focus:border-[#0cc0df] focus:ring-[#0cc0df]/20'
                    }`}
                    placeholder="nama@perusahaan.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Nomor Telepon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 transition-all ${
                      darkMode
                        ? 'bg-[#142B47]/50 border-[#0cc0df]/20 text-white focus:border-[#0cc0df] focus:ring-[#0cc0df]/20'
                        : 'bg-white border-gray-200 text-gray-900 focus:border-[#0cc0df] focus:ring-[#0cc0df]/20'
                    }`}
                    placeholder="+62 812-3456-7890"
                  />
                </div>

                <div>
                  <label htmlFor="company" className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Nama Perusahaan
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 transition-all ${
                      darkMode
                        ? 'bg-[#142B47]/50 border-[#0cc0df]/20 text-white focus:border-[#0cc0df] focus:ring-[#0cc0df]/20'
                        : 'bg-white border-gray-200 text-gray-900 focus:border-[#0cc0df] focus:ring-[#0cc0df]/20'
                    }`}
                    placeholder="PT. Nama Perusahaan"
                  />
                </div>

                <div>
                  <label htmlFor="service" className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Layanan yang Diminati
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                      darkMode
                        ? 'bg-[#142B47]/50 border-[#0cc0df]/20 text-white focus:border-[#0cc0df] focus:ring-[#0cc0df]/20'
                        : 'bg-white border-gray-200 text-gray-900 focus:border-[#0cc0df] focus:ring-[#0cc0df]/20'
                    }`}
                  >
                    <option value="" className={darkMode ? "bg-[#0A1628]" : "bg-white"}>Pilih layanan</option>
                    {services.map((service, index) => (
                      <option key={index} value={service} className={darkMode ? "bg-[#0A1628]" : "bg-white"}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Pesan <span className="text-[#00D9FF]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`w-full px-4 py-3 border rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 transition-all resize-none ${
                      darkMode
                        ? 'bg-[#142B47]/50 border-[#0cc0df]/20 text-white focus:border-[#0cc0df] focus:ring-[#0cc0df]/20'
                        : 'bg-white border-gray-200 text-gray-900 focus:border-[#0cc0df] focus:ring-[#0cc0df]/20'
                    }`}
                    placeholder="Ceritakan kebutuhan IT bisnis Anda..."
                  />
                </div>

                {formStatus.type && (
                  <div
                    className={`p-4 rounded-lg animate-fade-in-up ${
                      formStatus.type === "success"
                        ? darkMode 
                          ? "bg-green-500/10 border border-green-500/30 text-green-400" 
                          : "bg-green-50 border border-green-200 text-green-600"
                        : darkMode
                          ? "bg-red-500/10 border border-red-500/30 text-red-400"
                          : "bg-red-50 border border-red-200 text-red-600"
                    }`}
                  >
                    {formStatus.message}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full flex items-center justify-center bg-[#0cc0df] text-[#0A1628] font-bold py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-[#0cc0df]/50 hover:scale-105 transition-all duration-300"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Kirim Pesan
                </button>
              </form>
            </div>

            {/* Map + Additional Info */}
            <div className="space-y-8">
              {/* Map */}
              <div className="space-y-6">
                <div className="relative rounded-xl border overflow-hidden backdrop-blur-sm animate-fade-in-up h-[300px]">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3966.3047645248835!2d106.8075585!3d-6.2234864!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f151bcf7200f%3A0x6ee40b271a82586a!2sIndonesia%20Stock%20Exchange!5e0!3m2!1sen!2sid!4v1762514931468!5m2!1sen!2sid"
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className={`${darkMode ? 'opacity-90' : 'opacity-100'}`}
                  />
                </div>
                 </div>  

              {/* Quick Links and Map */}
              <div className="space-y-6">
                <div className="relative rounded-xl border overflow-hidden backdrop-blur-sm animate-fade-in-up h-[300px]">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.745863724358!2d107.16607971097142!3d-6.297089661605531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e699b37701ccf41%3A0xdab61d88f6858189!2sPT.%20Graha%20Buana%20Cikarang!5e0!3m2!1sen!2sid!4v1762514513125!5m2!1sen!2sid" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className={`${darkMode ? 'opacity-90' : 'opacity-100'}`}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {quickLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.link}
                      className={`p-6 rounded-xl border transition-all duration-500 group animate-fade-in-up ${
                        darkMode
                          ? 'border-[#0cc0df]/20 bg-[#142B47]/30 hover:border-[#0cc0df]/40 hover:shadow-xl hover:shadow-[#0cc0df]/10'
                          : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-xl hover:shadow-gray-200'
                      }`}
                      style={{ animationDelay: `${(index + 3) * 100}ms` }}
                    >
                      <div className="w-12 h-12 rounded-lg bg-[#0cc0df]/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#0cc0df]/30 transition-all duration-500">
                        <link.icon className="w-6 h-6 text-[#0cc0df]" />
                      </div>
                      <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {link.title}
                      </h3>
                      <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {link.description}
                      </p>
                      <span className="text-[#0cc0df] text-sm font-bold group-hover:translate-x-2 inline-flex items-center transition-transform duration-300">
                        {link.linkText}
                        <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div className={`p-6 rounded-xl border backdrop-blur-sm animate-fade-in-up ${
                darkMode
                  ? 'border-[#0cc0df]/20 bg-[#142B47]/30'
                  : 'border-gray-200 bg-white'
              }`} style={{ animationDelay: '500ms' }}>
                <h3 className="text-lg font-bold text-white mb-4">
                  Ikuti Kami
                </h3>
                <div className="flex items-center space-x-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-[#0cc0df]/10 flex items-center justify-center text-[#0cc0df] hover:bg-[#0cc0df]/20 hover:scale-110 hover:shadow-lg hover:shadow-[#0cc0df]/30 transition-all duration-300"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-[#0cc0df]/10 flex items-center justify-center text-[#0cc0df] hover:bg-[#0cc0df]/20 hover:scale-110 hover:shadow-lg hover:shadow-[#0cc0df]/30 transition-all duration-300"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-[#0cc0df]/10 flex items-center justify-center text-[#0cc0df] hover:bg-[#0cc0df]/20 hover:scale-110 hover:shadow-lg hover:shadow-[#0cc0df]/30 transition-all duration-300"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 sm:py-24 overflow-hidden border-t border-[#0cc0df]/10">
        <div className="absolute inset-0 bg-linear-to-r from-[#0cc0df] to-[#ffde59]" />
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 space-y-6 relative z-10 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-black text-[#0A1628]">
            Butuh Respons Cepat?
          </h2>
          <p className="text-[#0A1628]/80 text-lg max-w-2xl mx-auto font-medium">
            Untuk kebutuhan mendesak, hubungi langsung tim support kami yang siap membantu 24/7.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="tel:+628195016666"
              className={`inline-flex items-center font-bold py-3 px-8 rounded-full hover:scale-105 transition-all duration-300 ${
                darkMode
                  ? 'bg-[#0A1628] text-white hover:bg-[#142B47]'
                  : 'bg-white text-gray-900 hover:bg-gray-100'
              }`}
            >
              <Phone className="w-5 h-5 mr-2" />
              Telepon Sekarang
            </a>
            <a
              href="mailto:info@nti.co.id"
              className={`inline-flex items-center border-2 font-bold py-3 px-8 rounded-full transition-all duration-300 ${
                darkMode
                  ? 'border-[#0A1628] text-[#0A1628] hover:bg-[#0A1628] hover:text-white'
                  : 'border-white text-white hover:bg-white hover:text-gray-900'
              }`}
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Kami
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

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </main>
  );
}