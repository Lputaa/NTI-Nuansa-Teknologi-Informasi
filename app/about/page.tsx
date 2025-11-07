"use client";

import {
  ArrowRight,
  Award,
  Briefcase,
  CheckCircle,
  Clock,
  Eye,
  Globe,
  Heart,
  Lightbulb,
  Moon,
  Shield,
  Sun,
  Target,
  TrendingUp,
  Users
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AboutPage() {
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

  const values = [
    {
      icon: Shield,
      title: "Integritas",
      description: "Menjalankan bisnis dengan transparansi, kejujuran, dan komitmen penuh terhadap kepercayaan klien."
    },
    {
      icon: Lightbulb,
      title: "Inovasi",
      description: "Selalu menghadirkan solusi teknologi terkini dan terus berinovasi untuk memberikan nilai tambah."
    },
    {
      icon: Users,
      title: "Kolaborasi",
      description: "Membangun partnership jangka panjang dengan klien melalui komunikasi dan kerjasama yang solid."
    },
    {
      icon: Award,
      title: "Kualitas",
      description: "Berkomitmen memberikan layanan dan produk berkualitas tinggi dengan standar profesional."
    },
    {
      icon: Heart,
      title: "Customer Focus",
      description: "Mengutamakan kepuasan dan kebutuhan klien sebagai prioritas utama dalam setiap keputusan."
    },
    {
      icon: TrendingUp,
      title: "Pertumbuhan",
      description: "Mendorong pertumbuhan berkelanjutan untuk klien, tim, dan perusahaan secara bersamaan."
    }
  ];

  const timeline = [
    {
      year: "2018",
      title: "Pendirian Perusahaan",
      description: "NTI didirikan dengan visi menjadi partner IT terpercaya untuk transformasi digital bisnis di Indonesia."
    },
    {
      year: "2019",
      title: "Ekspansi Layanan",
      description: "Meluncurkan layanan cloud server management dan memperluas portfolio produk hardware & software."
    },
    {
      year: "2020",
      title: "Milestone 100 Klien",
      description: "Mencapai 100+ klien aktif dari berbagai industri dan membuka kantor cabang kedua."
    },
    {
      year: "2021",
      title: "Sertifikasi ISO",
      description: "Memperoleh sertifikasi ISO 9001:2015 untuk Quality Management System dan ISO 27001 untuk Information Security."
    },
    {
      year: "2022",
      title: "Partnership Internasional",
      description: "Menjalin kerjasama dengan vendor teknologi global untuk menyediakan solusi enterprise-grade."
    },
    {
      year: "2023",
      title: "Digital Innovation Hub",
      description: "Meluncurkan innovation hub untuk riset dan development solusi teknologi terbaru bagi klien."
    },
    {
      year: "2024",
      title: "500+ Klien & Ekspansi",
      description: "Mencapai 500+ klien aktif dan memperluas jangkauan layanan ke seluruh Indonesia."
    }
  ];

  const team = [
    {
      name: "Ahmad Hidayat",
      position: "Chief Executive Officer",
      description: "20+ tahun pengalaman di industri IT dan telekomunikasi"
    },
    {
      name: "Dewi Lestari",
      position: "Chief Technology Officer",
      description: "Expert dalam cloud infrastructure dan cybersecurity"
    },
    {
      name: "Rudi Hartono",
      position: "Chief Operating Officer",
      description: "Spesialis dalam operasional dan project management"
    },
    {
      name: "Siti Nurhaliza",
      position: "Head of Customer Success",
      description: "Fokus pada customer experience dan relationship management"
    }
  ];

  const whyChooseUs = [
    {
      icon: Briefcase,
      title: "Pengalaman Terbukti",
      description: "Lebih dari 6 tahun melayani 500+ perusahaan dari berbagai skala dan industri."
    },
    {
      icon: Users,
      title: "Tim Profesional",
      description: "Didukung tim expert bersertifikat dengan kompetensi tinggi dan dedikasi penuh."
    },
    {
      icon: Clock,
      title: "Support 24/7",
      description: "Layanan support dan monitoring 24/7 untuk memastikan operasional berjalan lancar."
    },
    {
      icon: Globe,
      title: "Jangkauan Luas",
      description: "Network infrastruktur yang tersebar di berbagai kota untuk coverage optimal."
    },
    {
      icon: Shield,
      title: "Keamanan Terjamin",
      description: "Sertifikasi ISO 27001 dan compliance dengan standar keamanan internasional."
    },
    {
      icon: TrendingUp,
      title: "Solusi Scalable",
      description: "Infrastruktur yang dapat berkembang seiring pertumbuhan bisnis Anda."
    }
  ];

  const stats = [
    { value: "500+", label: "Klien Aktif", icon: Users },
    { value: "1,200+", label: "Project Selesai", icon: CheckCircle },
    { value: "99.9%", label: "Uptime Server", icon: TrendingUp },
    { value: "6+", label: "Tahun Pengalaman", icon: Award }
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
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 border-b border-[#0cc0df]/10 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl animate-pulse bg-linear-to-b from-[#0cc0df]/10 to-[#ffde59]/5" />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl bg-linear-to-t from-[#0cc0df]/5 to-[#ffde59]/5" />
        </div>
        
        <div className={`max-w-4xl mx-auto text-center space-y-6 relative z-10 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-block px-4 py-2 bg-linear-to-r from-[#0cc0df]/10 to-[#ffde59]/10 border border-[#0cc0df]/30 rounded-full backdrop-blur-sm">
            <p className="text-[#0cc0df] text-sm font-bold">Tentang Kami</p>
          </div>
          
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-black ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Partner Transformasi Digital <span className="bg-linear-to-r from-[#0cc0df] to-[#ffde59] bg-clip-text text-transparent">Terpercaya</span>
          </h1>
          
          <p className={`text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Sejak 2018, kami telah membantu ratusan perusahaan dalam perjalanan transformasi digital mereka dengan solusi IT yang inovatif, aman, dan efisien.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`py-16 border-b ${darkMode ? 'bg-[#142B47]/30 border-[#00D9FF]/10' : 'bg-gray-50 border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center space-y-3 p-6 rounded-xl border backdrop-blur-sm hover:shadow-lg transition-all duration-500 animate-fade-in-up ${
                  darkMode
                    ? 'border-[#0cc0df]/20 bg-[#0A1628]/50 hover:border-[#0cc0df]/40 hover:shadow-[#0cc0df]/20'
                    : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-gray-200'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mx-auto ${
                  darkMode
                    ? 'bg-[#00D9FF]/10 shadow-lg shadow-[#00D9FF]/10'
                    : 'bg-[#00D9FF]/5 shadow-lg shadow-[#00D9FF]/5'
                }`}>
                  <stat.icon className="w-7 h-7 text-[#0cc0df]" />
                </div>
                <div className="text-4xl sm:text-5xl font-black text-[#0cc0df]">
                  {stat.value}
                </div>
                <div className={`text-sm font-semibold uppercase tracking-wider ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-4 animate-fade-in-up">
            <h2 className={`text-3xl sm:text-4xl font-black ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Tentang <span className="bg-linear-to-r from-[#0cc0df] to-[#ffde59] bg-clip-text text-transparent">NTI</span>
            </h2>
            <p className={darkMode ? 'text-gray-400 text-lg' : 'text-gray-600 text-lg'}>
              Nuansa Teknologi Informasi
            </p>
          </div>

          <div className={`space-y-6 leading-relaxed text-lg animate-fade-in-up ${darkMode ? 'text-gray-300' : 'text-gray-600'}`} style={{ animationDelay: '200ms' }}>
            <p>
              Didorong oleh komitmen pada inovasi teknologi yang berkelanjutan, NUANSA TEKNOLOGI INFORMASI hadir sebagai mitra transformasi bisnis Anda. Tim profesional kami yang berdedikasi telah terbukti berhasil mengembangkan portofolio solusi yang telah diakui oleh industri.
            </p>
            <p>
              Kami memiliki spesialisasi dalam pengembangan perangkat lunak, kecerdasan buatan, dan keamanan siber. Sebagai bagian dari era transformasi digital, kami berfokus pada penciptaan solusi yang memberdayakan klien kami untuk bekerja lebih efektif, sekaligus memberikan dampak sosial yang positif.
            </p>
          </div>
        </div>
      </section>

      {/* Visi Misi */}
      <section className={`py-20 sm:py-28 border-y ${
        darkMode ? 'bg-[#142B47]/30 border-[#00D9FF]/10' : 'bg-gray-50 border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Visi */}
            <div className={`p-8 rounded-2xl border backdrop-blur-sm space-y-6 transition-all duration-500 animate-fade-in-up ${
              darkMode 
                ? 'border-[#00D9FF]/20 bg-[#0A1628]/50 hover:border-[#00D9FF]/40 hover:shadow-xl hover:shadow-[#00D9FF]/10'
                : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-xl hover:shadow-gray-200'
            }`}>
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                darkMode
                  ? 'bg-[#00D9FF]/10 shadow-lg shadow-[#00D9FF]/20'
                  : 'bg-[#00D9FF]/5 shadow-lg shadow-[#00D9FF]/5'
              }`}>
                <Eye className="w-8 h-8 text-[#00D9FF]" />
              </div>
              <div>
                <h3 className={`text-2xl font-black mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Visi Kami</h3>
                <p className={`leading-relaxed text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Menjadi mitra strategis dan pelopor dalam pengembangan solusi teknologi informasi yang inovatif dan berkelanjutan, guna mendukung terciptanya ekosistem bisnis yang lebih terhubung, efisien, dan cerdas.                </p>
              </div>
            </div>
            {/* Misi */}
            <div className={`p-8 rounded-2xl border backdrop-blur-sm space-y-6 transition-all duration-500 animate-fade-in-up ${
              darkMode 
                ? 'border-[#00D9FF]/20 bg-[#0A1628]/50 hover:border-[#00D9FF]/40 hover:shadow-xl hover:shadow-[#00D9FF]/10'
                : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-xl hover:shadow-gray-200'
            }`} style={{ animationDelay: '150ms' }}>
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                darkMode
                  ? 'bg-[#00D9FF]/10 shadow-lg shadow-[#00D9FF]/20'
                  : 'bg-[#00D9FF]/5 shadow-lg shadow-[#00D9FF]/5'
              }`}>
                <Target className="w-8 h-8 text-[#00D9FF]" />
              </div>
              <div>
                <h3 className={`text-2xl font-black mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Misi Kami</h3>
                <p className={`leading-relaxed text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Menciptakan inovasi berkelanjutan melalui teknologi tingkat tinggi, menjunjung tinggi keberlanjutan lingkungan, dan memberdayakan masyarakat.                
                  </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className={`text-3xl sm:text-4xl font-black mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Nilai-Nilai Perusahaan
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Prinsip yang menjadi fondasi dalam setiap keputusan dan tindakan kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className={`group p-6 rounded-xl border backdrop-blur-sm transition-all duration-500 animate-fade-in-up ${
                  darkMode 
                    ? 'border-[#00D9FF]/20 bg-[#142B47]/30 hover:border-[#00D9FF]/40 hover:bg-[#142B47]/50 hover:shadow-xl hover:shadow-[#00D9FF]/10'
                    : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50 hover:shadow-xl hover:shadow-gray-200'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-500 ${
                  darkMode
                    ? 'bg-[#00D9FF]/10 group-hover:shadow-lg group-hover:shadow-[#00D9FF]/30'
                    : 'bg-[#00D9FF]/5 group-hover:shadow-lg group-hover:shadow-[#00D9FF]/5'
                }`}>
                  <value.icon className="w-7 h-7 text-[#0cc0df]" />
                </div>
                <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {value.title}
                </h3>
                <p className={`leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className={`py-20 sm:py-28 border-y ${
        darkMode ? 'bg-[#142B47]/30 border-[#00D9FF]/10' : 'bg-gray-50 border-gray-200'
      }`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className={`text-3xl sm:text-4xl font-black mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Perjalanan Kami
            </h2>
            <p className={darkMode ? 'text-gray-400 text-lg' : 'text-gray-600 text-lg'}>
              Milestone dan pencapaian NTI dari tahun ke tahun
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line with glow */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-[#0cc0df] via-[#ffde59]/50 to-transparent hidden md:block shadow-[0_0_10px_#0cc0df]" />

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className="relative flex items-start space-x-6 group animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Year Badge */}
                  <div className="hidden md:flex w-16 h-16 rounded-full bg-linear-to-r from-[#0cc0df] to-[#ffde59] items-center justify-center shrink-0 relative z-10 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-[#0cc0df]/50 transition-all duration-500 font-black text-[#0A1628]">
                    {item.year}
                  </div>

                  {/* Content */}
                  <div className={`flex-1 p-6 rounded-xl border backdrop-blur-sm transition-all duration-500 ${
                    darkMode 
                      ? 'border-[#0cc0df]/20 bg-[#0A1628]/50 hover:border-[#0cc0df]/40 hover:shadow-xl hover:shadow-[#0cc0df]/10'
                      : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-xl hover:shadow-gray-200'
                  }`}>
                    <div className="flex items-center space-x-3 mb-2 md:hidden">
                      <span className="text-[#0cc0df] font-black text-lg">{item.year}</span>
                      <div className={`h-px flex-1 ${darkMode ? 'bg-[#0cc0df]/30' : 'bg-gray-200'}`} />
                    </div>
                    <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {item.title}
                    </h3>
                    <p className={`leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className={`text-3xl sm:text-4xl font-black mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Tim Kepemimpinan
            </h2>
            <p className={darkMode ? 'text-gray-400 text-lg' : 'text-gray-600 text-lg'}>
              Dipimpin oleh profesional berpengalaman di industri IT
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className={`text-center p-6 rounded-xl border transition-all duration-500 animate-fade-in-up ${
                  darkMode 
                    ? 'border-[#00D9FF]/20 bg-[#142B47]/30 hover:border-[#00D9FF]/40 hover:shadow-xl hover:shadow-[#00D9FF]/10'
                    : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-xl hover:shadow-gray-200'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-20 rounded-full bg-linear-to-r from-[#0cc0df] to-[#ffde59] flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#0cc0df]/30 font-black text-2xl text-[#0A1628]">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-lg font-bold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-[#0cc0df] text-sm font-bold mb-3">
                  {member.position}
                </p>
                <p className="text-gray-400 text-sm">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={`py-20 sm:py-28 border-y ${
        darkMode ? 'bg-[#142B47]/30 border-[#00D9FF]/10' : 'bg-gray-50 border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className={`text-3xl sm:text-4xl font-black mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Mengapa Memilih NTI?
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Keunggulan yang membuat kami menjadi partner IT pilihan utama
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl border backdrop-blur-sm transition-all duration-500 animate-fade-in-up ${
                  darkMode 
                    ? 'border-[#00D9FF]/20 bg-[#0A1628]/50 hover:border-[#00D9FF]/40 hover:shadow-xl hover:shadow-[#00D9FF]/10'
                    : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-xl hover:shadow-gray-200'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                  darkMode
                    ? 'bg-[#0cc0df]/10 shadow-lg shadow-[#0cc0df]/20'
                    : 'bg-[#0cc0df]/5 shadow-lg shadow-[#0cc0df]/5'
                }`}>
                  <item.icon className="w-7 h-7 text-[#0cc0df]" />
                </div>
                <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {item.title}
                </h3>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-[#0cc0df] to-[#ffde59]" />
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 space-y-6 relative z-10 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-black text-[#0A1628]">
            Mari Bergabung dengan 500+ Klien Kami
          </h2>
          <p className="text-[#0A1628]/80 text-lg max-w-2xl mx-auto font-medium">
            Wujudkan transformasi digital bisnis Anda bersama partner IT yang terpercaya dan berpengalaman.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/services"
              className="inline-flex items-center bg-[#0A1628] text-white font-bold py-3 px-8 rounded-full hover:bg-[#142B47] hover:scale-105 transition-all duration-300"
            >
              Lihat Layanan Kami
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center border-2 border-[#0A1628] text-[#0A1628] font-bold py-3 px-8 rounded-full hover:bg-[#0A1628] hover:text-white transition-all duration-300"
            >
              Hubungi Kami
            </Link>
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