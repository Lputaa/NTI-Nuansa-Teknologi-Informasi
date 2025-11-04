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
    Shield,
    Target,
    TrendingUp,
    Users
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
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
    <main className="min-h-screen bg-[#001B33] text-gray-100">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 bg-gradient-to-b from-[#002244] to-[#001B33] border-b border-white/5 overflow-hidden">
        {/* Gradient Accent */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#0cc0df]/20 to-[#ffde59]/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#ffde59]/10 to-[#0cc0df]/10 blur-3xl rounded-full" />
        
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#0cc0df]/20 to-[#ffde59]/20 border border-[#0cc0df]/30 rounded-full">
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#0cc0df] to-[#ffde59] text-sm font-medium">
              Tentang Kami
            </p>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Partner Transformasi Digital{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0cc0df] to-[#ffde59]">
              Terpercaya
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Sejak 2018, kami telah membantu ratusan perusahaan dalam perjalanan transformasi digital mereka dengan solusi IT yang inovatif, aman, dan efisien.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#000F1F] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center space-y-3 p-6 rounded-xl border border-[#0cc0df]/20 bg-gradient-to-br from-[#0cc0df]/5 to-transparent"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0cc0df]/20 to-[#ffde59]/20 flex items-center justify-center mx-auto">
                  <stat.icon className="w-6 h-6 text-[#0cc0df]" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0cc0df] to-[#ffde59]">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm font-medium">
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
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Tentang <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0cc0df] to-[#ffde59]">NTI</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Nuansa Teknologi Informasi
            </p>
          </div>

          <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
            <p>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0cc0df] to-[#ffde59] font-semibold">Nuansa Teknologi Informasi (NTI)</span> adalah perusahaan penyedia solusi IT yang berfokus pada transformasi digital bisnis. Kami menghadirkan layanan komprehensif mulai dari penyediaan hardware & software, cloud server management, hingga konektivitas internet untuk mendukung operasional bisnis modern.
            </p>
            <p>
              Dengan pengalaman lebih dari 6 tahun dan telah melayani 500+ klien dari berbagai industri, kami memahami bahwa setiap bisnis memiliki kebutuhan IT yang unik. Oleh karena itu, kami berkomitmen untuk memberikan solusi yang disesuaikan dengan kebutuhan spesifik setiap klien.
            </p>
            <p>
              Tim profesional kami yang bersertifikat siap memberikan konsultasi, implementasi, dan dukungan teknis untuk memastikan infrastruktur IT Anda berjalan optimal. Kami percaya bahwa teknologi yang tepat dapat menjadi pengungkit utama pertumbuhan bisnis di era digital ini.
            </p>
          </div>
        </div>
      </section>

      {/* Visi Misi */}
      <section className="py-20 sm:py-28 bg-[#000F1F] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Visi */}
            <div className="p-8 rounded-2xl border border-[#0cc0df]/20 bg-gradient-to-br from-[#0cc0df]/5 to-transparent space-y-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0cc0df]/20 to-[#ffde59]/20 flex items-center justify-center">
                <Eye className="w-7 h-7 text-[#0cc0df]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Visi Kami</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Menjadi partner transformasi digital terdepan yang memberdayakan bisnis Indonesia untuk berkembang melalui solusi teknologi informasi yang inovatif, terpercaya, dan berkelanjutan.
                </p>
              </div>
            </div>

            {/* Misi */}
            <div className="p-8 rounded-2xl border border-[#0cc0df]/20 bg-gradient-to-br from-[#ffde59]/5 to-transparent space-y-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0cc0df]/20 to-[#ffde59]/20 flex items-center justify-center">
                <Target className="w-7 h-7 text-[#ffde59]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Misi Kami</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#0cc0df] flex-shrink-0 mt-1" />
                    <span>Menyediakan solusi IT berkualitas tinggi yang sesuai dengan kebutuhan bisnis klien</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#0cc0df] flex-shrink-0 mt-1" />
                    <span>Memberikan layanan support profesional dengan respons cepat dan solusi efektif</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#0cc0df] flex-shrink-0 mt-1" />
                    <span>Terus berinovasi mengikuti perkembangan teknologi terkini</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#0cc0df] flex-shrink-0 mt-1" />
                    <span>Membangun partnership jangka panjang berdasarkan kepercayaan dan mutual benefit</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Nilai-Nilai Perusahaan
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Prinsip yang menjadi fondasi dalam setiap keputusan dan tindakan kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl border border-white/10 bg-white/[0.02] hover:border-[#0cc0df]/30 hover:bg-gradient-to-br hover:from-[#0cc0df]/5 hover:to-transparent transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0cc0df]/20 to-[#ffde59]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-6 h-6 text-[#0cc0df]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-[#001B33] to-[#000F1F] border-y border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Perjalanan Kami
            </h2>
            <p className="text-gray-400 text-lg">
              Milestone dan pencapaian NTI dari tahun ke tahun
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line with Gradient */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0cc0df] via-[#0cc0df]/50 to-transparent hidden md:block rounded-full" />

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className="relative flex items-start space-x-6 group"
                >
                  {/* Year Indicator */}
                  <div className="hidden md:flex w-16 h-16 rounded-full bg-gradient-to-br from-[#0cc0df] to-[#ffde59] items-center justify-center flex-shrink-0 relative z-10 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#0cc0df]/30">
                    <span className="text-white font-bold text-sm">{item.year}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 rounded-xl border border-white/10 bg-white/[0.02] hover:border-[#0cc0df]/30 hover:bg-gradient-to-br hover:from-[#0cc0df]/5 hover:to-transparent transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-2 md:hidden">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0cc0df] to-[#ffde59] font-bold text-lg">{item.year}</span>
                      <div className="h-px flex-1 bg-gradient-to-r from-[#0cc0df]/50 to-transparent" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
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
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Tim Kepemimpinan
            </h2>
            <p className="text-gray-400 text-lg">
              Dipimpin oleh profesional berpengalaman di industri IT
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl border border-white/10 bg-white/[0.02] hover:border-[#0cc0df]/30 hover:bg-gradient-to-br hover:from-[#0cc0df]/5 hover:to-transparent transition-all duration-300"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#0cc0df] to-[#ffde59] flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#0cc0df]/20">
                  <span className="text-white text-2xl font-bold">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#0cc0df] to-[#ffde59] text-sm font-medium mb-3">
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
      <section className="py-20 sm:py-28 bg-[#000F1F] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Mengapa Memilih NTI?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Keunggulan yang membuat kami menjadi partner IT pilihan utama
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-white/10 bg-white/[0.02] hover:border-[#0cc0df]/30 hover:bg-gradient-to-br hover:from-[#0cc0df]/5 hover:to-transparent transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0cc0df]/20 to-[#ffde59]/20 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-[#0cc0df]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-24 bg-gradient-to-r from-[#0cc0df] to-[#ffde59]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Mari Bergabung dengan 500+ Klien Kami
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Wujudkan transformasi digital bisnis Anda bersama partner IT yang terpercaya dan berpengalaman.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/services"
              className="inline-flex items-center bg-white text-gray-900 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 hover:scale-105 transition-all duration-300"
            >
              Lihat Layanan Kami
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center border-2 border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}