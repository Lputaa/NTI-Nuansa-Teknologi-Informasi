"use client";

import {
  ArrowRight,
  Award,
  ChevronLeft,
  ChevronRight,
  Cpu,
  Network,
  Package,
  Quote,
  Server,
  Shield,
  TrendingUp,
  Users,
  Wifi,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const banners = [
    {
      title: "Solusi IT Terpercaya",
      subtitle: "Partner Digital Transformation Bisnis Anda",
      description:
        "Infrastruktur teknologi modern untuk mendukung pertumbuhan bisnis yang berkelanjutan",
      cta: "Jelajahi Layanan",
      href: "/services",
      gradient: "from-[#0CC0DF] to-[#FFDE59]",
    },
    {
      title: "Cloud Server Management",
      subtitle: "Skalabilitas & Keamanan Terjamin",
      description:
        "Server cloud dengan uptime 99.9% dan dukungan teknis 24/7 untuk operasional maksimal",
      cta: "Pelajari Lebih Lanjut",
      href: "/services#cloud",
      gradient: "from-[#0CC0DF] to-[#FFDE59]",
    },
    {
      title: "Internet Berkecepatan Tinggi",
      subtitle: "Konektivitas Tanpa Batas",
      description:
        "Layanan internet kabel dan nirkabel dengan bandwidth besar untuk kebutuhan bisnis modern",
      cta: "Hubungi Kami",
      href: "/contact",
      gradient: "from-[#0CC0DF] to-[#FFDE59]",
    },
  ];

  const services = [
    {
      icon: Package,
      title: "Perdagangan Komputer & Software",
      description:
        "Penyediaan hardware dan software berkualitas dengan harga kompetitif untuk kebutuhan bisnis Anda.",
      href: "/services#komputer",
    },
    {
      icon: Server,
      title: "Cloud Server Management",
      description:
        "Solusi cloud yang scalable, aman, dan efisien dengan uptime 99.9% untuk operasional bisnis tanpa gangguan.",
      href: "/services#cloud",
    },
    {
      icon: Wifi,
      title: "Internet Kabel & Nirkabel",
      description:
        "Konektivitas internet berkecepatan tinggi dengan infrastruktur modern dan dukungan teknis 24/7.",
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
      content:
        "NTI memberikan solusi cloud server yang sangat reliable. Uptime konsisten dan support team yang responsif membuat operasional kami berjalan lancar.",
      rating: 5,
    },
    {
      name: "Siti Rahayu",
      position: "CEO",
      company: "CV Digital Sukses",
      content:
        "Layanan internet dari NTI sangat stabil dan cepat. Sangat membantu produktivitas tim kami dalam menjalankan bisnis online.",
      rating: 5,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [banners.length]);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);

  return (
    <main className="min-h-screen bg-[#001B33] text-gray-100">
      {/* Hero Carousel */}
      <section className="relative h-[600px] sm:h-[700px] overflow-hidden bg-linear-to-b from-[#002244] via-[#001B33] to-[#001B33]">
        <div className="relative h-full">
          {banners.map((banner, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${banner.gradient} opacity-10`}
              />
              <div className="relative h-full flex items-center justify-center px-4 sm:px-6">
                <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
                  <div className="inline-block px-4 py-2 bg-[#0CC0DF]/10 border border-[#0CC0DF]/20 rounded-full">
                    <p className="text-[#0CC0DF] text-sm font-medium">
                      {banner.subtitle}
                    </p>
                  </div>

                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
                    {banner.title}
                  </h1>

                  <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                    {banner.description}
                  </p>

                  <Link
                    href={banner.href}
                    className="inline-flex items-center bg-gradient-to-r from-[#0CC0DF] to-[#FFDE59] text-gray-900 font-semibold py-3 px-8 rounded-full hover:shadow-[0_0_25px_rgba(255,222,89,0.4)] hover:scale-105 transition-all duration-300"
                  >
                    {banner.cta}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigasi Carousel */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center space-x-2 z-10">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? "w-8 h-2 bg-gradient-to-r from-[#0CC0DF] to-[#FFDE59]"
                  : "w-2 h-2 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 sm:py-20 bg-[#000F1F] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {[Cpu, Shield, Network].map((Icon, i) => (
            <div
              key={i}
              className="group space-y-4 p-6 rounded-2xl border border-white/5 hover:border-[#0CC0DF]/30 hover:bg-white/[0.02] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#0CC0DF]/10 to-[#FFDE59]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-6 h-6 text-[#0CC0DF]" />
              </div>
              <h3 className="text-xl font-semibold text-white">
                {["Inovasi Terdepan", "Keamanan Berlapis", "Skalabilitas Tinggi"][i]}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {[
                  "Menghadirkan teknologi terkini dengan sistem yang terintegrasi untuk efisiensi operasional maksimal.",
                  "Proteksi data dan infrastruktur dengan sistem keamanan enterprise-grade dan monitoring 24/7.",
                  "Infrastruktur yang fleksibel dan dapat berkembang seiring pertumbuhan bisnis Anda.",
                ][i]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Layanan Kami
            </h2>
            <p className="text-gray-400 text-lg">
              Solusi komprehensif untuk semua kebutuhan teknologi informasi bisnis Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group relative p-8 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.02] to-transparent hover:border-[#0CC0DF]/30 hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="relative space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-[#0CC0DF]/10 to-[#FFDE59]/10 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-7 h-7 text-[#0CC0DF]" />
                  </div>

                  <h3 className="text-xl font-semibold text-white group-hover:text-[#FFDE59] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex items-center text-[#0CC0DF] font-medium pt-2 group-hover:translate-x-2 transition-transform duration-300">
                    Selengkapnya
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-b from-[#001B33] to-[#000F1F] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center space-y-3 p-6 rounded-2xl border border-white/5 bg-white/[0.02]"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#0CC0DF]/10 to-[#FFDE59]/10 flex items-center justify-center mx-auto">
                <stat.icon className="w-6 h-6 text-[#0CC0DF]" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-white">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Apa Kata Klien Kami
          </h2>
          <p className="text-gray-400 text-lg">
            Kepercayaan dan kepuasan klien adalah prioritas utama kami
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.02] to-transparent space-y-4"
            >
              <Quote className="w-10 h-10 text-[#0CC0DF]/40" />
              <p className="text-gray-300 leading-relaxed text-lg">
                "{testimonial.content}"
              </p>
              <div className="flex items-center space-x-1 text-[#FFDE59]">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <div className="pt-4 border-t border-white/5">
                <div className="font-semibold text-white">
                  {testimonial.name}
                </div>
                <div className="text-gray-400 text-sm">
                  {testimonial.position}, {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-[#001B33] to-[#002244] border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Tentang <span className="text-[#0CC0DF]">NTI</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Nuansa Teknologi Informasi adalah partner IT terpercaya yang telah
            membantu ratusan perusahaan dalam transformasi digital mereka. Dengan
            pengalaman dan keahlian tim profesional, kami berkomitmen menghadirkan
            solusi teknologi yang inovatif, aman, dan efisien.
          </p>
          <Link
            href="/about"
            className="inline-block border border-[#0CC0DF]/50 text-[#0CC0DF] px-8 py-3 rounded-full hover:bg-gradient-to-r hover:from-[#0CC0DF] hover:to-[#FFDE59] hover:text-gray-900 transition-all duration-300"
          >
            Pelajari Lebih Lanjut
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-gradient-to-r from-[#0CC0DF] via-[#FFDE59] to-[#0CC0DF]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Siap Transformasi Digital?
          </h2>
          <p className="text-gray-800 text-lg max-w-2xl mx-auto">
            Konsultasikan kebutuhan IT bisnis Anda dengan tim ahli kami. Dapatkan
            solusi terbaik yang sesuai dengan kebutuhan dan budget Anda.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center bg-gray-900 text-white font-semibold py-3 px-8 rounded-full hover:bg-gray-800 hover:scale-105 transition-all duration-300"
            >
              Hubungi Kami Sekarang
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href="tel:+628195016666"
              className="inline-flex items-center border-2 border-gray-900 text-gray-900 font-semibold py-3 px-8 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300"
            >
              atau Telepon Langsung
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
