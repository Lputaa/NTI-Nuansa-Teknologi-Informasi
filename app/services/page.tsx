"use client";

import {
  ArrowRight,
  Check,
  ChevronDown,
  Cloud,
  HardDrive,
  Lock,
  Monitor,
  Moon,
  Package,
  Radio,
  Server,
  Settings,
  Shield,
  Smartphone,
  Sun,
  Wifi,
  Zap
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
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

  const services = [
    {
      id: "komputer",
      icon: Package,
      title: "Perdagangan Komputer & Software",
      subtitle: "Hardware & Software Berkualitas untuk Bisnis",
      description: "Menyediakan solusi komputer, perangkat IT, dan software berlisensi untuk mendukung operasional bisnis Anda dengan performa optimal dan harga kompetitif.",
      features: [
        {
          icon: Monitor,
          title: "Komputer & Laptop",
          desc: "Desktop, workstation, dan laptop untuk berbagai kebutuhan bisnis"
        },
        {
          icon: HardDrive,
          title: "Server & Storage",
          desc: "Perangkat server dan storage dengan kapasitas dan reliabilitas tinggi"
        },
        {
          icon: Smartphone,
          title: "Peripheral & Aksesoris",
          desc: "Printer, scanner, UPS, dan aksesoris pendukung lainnya"
        },
        {
          icon: Settings,
          title: "Software Berlisensi",
          desc: "Software original dengan lisensi resmi dan support penuh"
        }
      ],
      benefits: [
        "Produk original bergaransi resmi",
        "Harga kompetitif dengan kualitas terjamin",
        "Konsultasi gratis untuk kebutuhan IT",
        "After-sales support dan maintenance",
        "Instalasi dan konfigurasi sistem",
        "Trade-in program untuk upgrade perangkat"
      ]
    },
    {
      id: "cloud",
      icon: Server,
      title: "Cloud Server Management",
      subtitle: "Infrastruktur Cloud yang Scalable & Aman",
      description: "Layanan cloud server dengan teknologi terkini, keamanan berlapis, dan performa tinggi untuk mendukung aplikasi dan data bisnis Anda dengan uptime 99.9%.",
      features: [
        {
          icon: Cloud,
          title: "Virtual Private Server",
          desc: "VPS dengan resource dedicated dan kontrol penuh atas server"
        },
        {
          icon: Lock,
          title: "Security & Backup",
          desc: "Proteksi berlapis dengan backup otomatis dan disaster recovery"
        },
        {
          icon: Zap,
          title: "High Performance",
          desc: "SSD storage dan bandwidth unlimited untuk performa maksimal"
        },
        {
          icon: Settings,
          title: "Managed Service",
          desc: "Tim expert yang mengelola dan memantau server 24/7"
        }
      ],
      benefits: [
        "Uptime guarantee 99.9% dengan SLA",
        "Scalable resource sesuai kebutuhan",
        "Daily backup otomatis",
        "DDoS protection & firewall",
        "24/7 monitoring & support",
        "Control panel yang user-friendly",
        "Migration service gratis"
      ]
    },
    {
      id: "internet",
      icon: Wifi,
      title: "Internet Kabel & Nirkabel",
      subtitle: "Konektivitas Cepat & Stabil untuk Bisnis",
      description: "Layanan internet dedicated dengan kecepatan tinggi, koneksi stabil, dan dukungan teknis 24/7 untuk mendukung produktivitas bisnis Anda tanpa gangguan.",
      features: [
        {
          icon: Wifi,
          title: "Fiber Optic",
          desc: "Koneksi fiber optic berkecepatan hingga 1 Gbps"
        },
        {
          icon: Radio,
          title: "Wireless Internet",
          desc: "Solusi wireless untuk area yang sulit dijangkau kabel"
        },
        {
          icon: Shield,
          title: "Dedicated Connection",
          desc: "Bandwidth dedicated tanpa sharing untuk performa stabil"
        },
        {
          icon: Settings,
          title: "Managed Router",
          desc: "Router enterprise dengan konfigurasi dan monitoring profesional"
        }
      ],
      benefits: [
        "Bandwidth dedicated 1:1 ratio",
        "Latency rendah untuk aplikasi real-time",
        "Static IP address included",
        "24/7 network monitoring",
        "SLA guarantee dengan kompensasi",
        "Free installation & router",
        "Teknisi standby untuk troubleshooting"
      ]
    }
  ];

  const faqs = [
    {
      question: "Berapa lama proses instalasi layanan?",
      answer: "Untuk internet dan cloud server biasanya 3-5 hari kerja setelah survei lokasi. Untuk pembelian komputer/software bisa langsung atau maksimal 2 hari kerja tergantung ketersediaan stock."
    },
    {
      question: "Apakah ada biaya tambahan selain harga paket?",
      answer: "Tidak ada biaya tersembunyi. Harga sudah termasuk instalasi, konfigurasi awal, dan peralatan standar. Biaya tambahan hanya untuk permintaan khusus atau perangkat tambahan yang diminta pelanggan."
    },
    {
      question: "Bagaimana sistem support dan maintenance?",
      answer: "Kami menyediakan support 24/7 melalui telepon, email, dan ticketing system. Untuk maintenance, tim teknis kami melakukan monitoring proaktif dan akan menginformasikan jika ada maintenance terjadwal."
    },
    {
      question: "Apakah bisa upgrade atau downgrade paket?",
      answer: "Ya, Anda bisa melakukan upgrade atau downgrade kapan saja. Untuk cloud server bisa real-time, untuk internet perlu koordinasi teknis 1-2 hari kerja."
    },
    {
      question: "Apakah ada kontrak jangka panjang?",
      answer: "Kami menawarkan fleksibilitas kontrak mulai dari 1 bulan hingga tahunan. Kontrak jangka panjang mendapat benefit harga lebih baik dan terms khusus."
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
            <p className="text-[#0cc0df] text-sm font-bold">Layanan Profesional</p>
          </div>
          
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-black ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Solusi IT Komprehensif untuk <span className="bg-linear-to-r from-[#0cc0df] to-[#ffde59] bg-clip-text text-transparent">Bisnis Anda</span>
          </h1>
          
          <p className={`text-lg sm:text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Dari infrastruktur hardware hingga cloud dan konektivitas, kami menyediakan semua yang Anda butuhkan untuk transformasi digital.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20 sm:py-28 relative ${
            index % 2 === 0 
              ? darkMode ? 'bg-[#0A1628]' : 'bg-white'
              : darkMode ? 'bg-[#142B47]/30' : 'bg-gray-50'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {/* Service Header */}
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fade-in-up">
              <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-[#0cc0df]/10 to-[#ffde59]/10 border border-[#0cc0df]/30 flex items-center justify-center mx-auto shadow-lg shadow-[#0cc0df]/20">
                <service.icon className="w-8 h-8 text-[#0cc0df]" />
              </div>
              <h2 className={`text-3xl sm:text-4xl font-black ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {service.title}
              </h2>
              <p className="text-[#0cc0df] text-lg font-bold">
                {service.subtitle}
              </p>
              <p className={`leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {service.description}
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {service.features.map((feature, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-xl border transition-all duration-500 group animate-fade-in-up ${
                    darkMode
                      ? 'border-[#0cc0df]/20 bg-[#142B47]/30 hover:border-[#0cc0df]/40 hover:bg-[#142B47]/50'
                      : 'border-gray-200 bg-white hover:border-[#0cc0df]/40 hover:shadow-lg'
                  }`}
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-linear-to-br from-[#0cc0df]/10 to-[#ffde59]/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#0cc0df]/20 transition-all duration-500">
                    <feature.icon className="w-6 h-6 text-[#0cc0df]" />
                  </div>
                  <h3 className={`text-lg font-bold mb-2 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {feature.title}
                  </h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <div className={`mb-16 p-8 rounded-2xl border animate-fade-in-up ${
              darkMode
                ? 'border-[#0cc0df]/20 bg-[#142B47]/30'
                : 'border-gray-200 bg-gray-50'
            }`}>
              <h3 className={`text-2xl font-black mb-6 text-center ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Keuntungan Layanan
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start space-x-3 group">
                    <div className="w-6 h-6 rounded-full bg-[#0cc0df]/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#0cc0df]/30 transition-all duration-300">
                      <Check className="w-4 h-4 text-[#0cc0df]" />
                    </div>
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact CTA */}
            <div className="text-center animate-fade-in-up">
              <Link
                href="/contact"
                    className={`inline-flex items-center px-8 py-4 text-lg font-bold rounded-xl transition-all duration-300 transform hover:scale-105 ${
                  darkMode
                    ? 'bg-linear-to-r from-[#0cc0df] to-[#ffde59] text-gray-900 hover:shadow-lg hover:shadow-[#0cc0df]/50'
                    : 'bg-linear-to-r from-[#0cc0df] to-[#ffde59] text-gray-900 hover:shadow-lg'
                }`}
              >
                Diskusikan Kebutuhan Anda
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      ))}

      {/* FAQ Section */}
      <section className={`py-20 sm:py-28 border-t ${
        darkMode ? 'bg-[#142B47]/30 border-[#0cc0df]/10' : 'bg-gray-50 border-gray-200'
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className={`text-3xl sm:text-4xl font-black mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Pertanyaan Umum
            </h2>
            <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Jawaban untuk pertanyaan yang sering diajukan
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border rounded-xl overflow-hidden transition-all duration-300 animate-fade-in-up ${
                  darkMode
                    ? 'border-[#0cc0df]/20 bg-[#0A1628]/50 hover:border-[#0cc0df]/40'
                    : 'border-gray-200 bg-white hover:border-[#0cc0df]/40 hover:shadow-lg'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className={`w-full flex items-center justify-between p-6 text-left transition-colors ${
                    darkMode ? 'hover:bg-[#142B47]/30' : 'hover:bg-gray-50'
                  }`}
                >
                  <span className={`font-bold pr-4 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#0cc0df] shrink-0 transition-transform duration-300 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className={`px-6 pb-6 border-t animate-fade-in-up ${
                    darkMode ? 'border-[#0cc0df]/20' : 'border-gray-200'
                  }`}>
                    <p className={`leading-relaxed pt-4 ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-[#0cc0df] to-[#ffde59]" />
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 space-y-6 relative z-10 animate-fade-in-up">
          <h2 className={`text-3xl sm:text-4xl font-black ${
            darkMode ? 'text-[#0A1628]' : 'text-white'
          }`}>
            Butuh Konsultasi Lebih Lanjut?
          </h2>
          <p className={`text-lg max-w-2xl mx-auto font-medium ${
            darkMode ? 'text-[#0A1628]/80' : 'text-white/90'
          }`}>
            Tim ahli kami siap membantu Anda memilih solusi IT yang tepat sesuai kebutuhan dan budget bisnis Anda.
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
              Hubungi Kami
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

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </main>
  );
}