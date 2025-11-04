"use client";

import {
    Clock,
    Facebook,
    HeadphonesIcon,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    MessageSquare,
    Phone,
    Send
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validasi sederhana
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        type: "error",
        message: "Mohon lengkapi nama, email, dan pesan Anda."
      });
      return;
    }

    // Simulasi pengiriman form
    setFormStatus({
      type: "success",
      message: "Terima kasih! Pesan Anda telah terkirim. Tim kami akan menghubungi Anda segera."
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: ""
    });

    // Clear status after 5 seconds
    setTimeout(() => {
      setFormStatus({ type: null, message: "" });
    }, 5000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telepon",
      details: [
        "+62 819-5016-666",
        "+62 22-1234-5678"
      ],
      action: "tel:+628195016666"
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
      title: "Alamat Kantor",
      details: [
        "Jl. Teknologi No. 123",
        "Bandung, Jawa Barat 40132"
      ],
      action: null
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      details: [
        "Senin - Jumat: 08:00 - 17:00",
        "Sabtu: 08:00 - 12:00"
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
      link: "/services#faq",
      linkText: "Lihat FAQ"
    }
  ];

  return (
    <main className="min-h-screen bg-[#001B33] text-gray-100">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 bg-gradient-to-b from-[#002244] to-[#001B33] border-b border-white/5 overflow-hidden">
        {/* Gradient Accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#0cc0df]/20 to-[#ffde59]/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#ffde59]/10 to-[#0cc0df]/10 blur-3xl rounded-full" />
        
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#0cc0df]/20 to-[#ffde59]/20 border border-[#0cc0df]/30 rounded-full">
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#0cc0df] to-[#ffde59] text-sm font-medium">
              Hubungi Kami
            </p>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Mari Diskusikan{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0cc0df] to-[#ffde59]">
              Kebutuhan IT Anda
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Tim ahli kami siap memberikan konsultasi dan solusi terbaik untuk transformasi digital bisnis Anda.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-[#000F1F] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-[#0cc0df]/20 bg-gradient-to-br from-[#0cc0df]/5 to-transparent hover:border-[#0cc0df]/40 hover:from-[#0cc0df]/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0cc0df]/20 to-[#ffde59]/20 flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-[#0cc0df]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
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
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Kirim Pesan
                </h2>
                <p className="text-gray-400">
                  Isi form di bawah ini dan tim kami akan menghubungi Anda dalam 1x24 jam.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nama Lengkap <span className="text-[#ffde59]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#0cc0df]/50 focus:ring-2 focus:ring-[#0cc0df]/20 transition-all"
                    placeholder="Masukkan nama lengkap Anda"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email <span className="text-[#ffde59]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#0cc0df]/50 focus:ring-2 focus:ring-[#0cc0df]/20 transition-all"
                    placeholder="nama@perusahaan.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Nomor Telepon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#0cc0df]/50 focus:ring-2 focus:ring-[#0cc0df]/20 transition-all"
                    placeholder="+62 812-3456-7890"
                  />
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Nama Perusahaan
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#0cc0df]/50 focus:ring-2 focus:ring-[#0cc0df]/20 transition-all"
                    placeholder="PT. Nama Perusahaan"
                  />
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Layanan yang Diminati
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#0cc0df]/50 focus:ring-2 focus:ring-[#0cc0df]/20 transition-all"
                  >
                    <option value="" className="bg-[#001B33]">Pilih layanan</option>
                    {services.map((service, index) => (
                      <option key={index} value={service} className="bg-[#001B33]">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Pesan <span className="text-[#ffde59]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#0cc0df]/50 focus:ring-2 focus:ring-[#0cc0df]/20 transition-all resize-none"
                    placeholder="Ceritakan kebutuhan IT bisnis Anda..."
                  />
                </div>

                {/* Status Message */}
                {formStatus.type && (
                  <div
                    className={`p-4 rounded-lg ${
                      formStatus.type === "success"
                        ? "bg-green-500/10 border border-green-500/20 text-green-400"
                        : "bg-red-500/10 border border-red-500/20 text-red-400"
                    }`}
                  >
                    {formStatus.message}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center bg-gradient-to-r from-[#0cc0df] to-[#ffde59] text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-[#0cc0df]/30 hover:scale-[1.02] transition-all duration-300"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Kirim Pesan
                </button>
              </form>
            </div>

            {/* Map + Additional Info */}
            <div className="space-y-8">
              {/* Map */}
              <div className="rounded-2xl border border-[#0cc0df]/20 overflow-hidden bg-gradient-to-br from-[#0cc0df]/5 to-transparent">
                <div className="aspect-video bg-gradient-to-br from-[#0cc0df]/20 to-[#ffde59]/20 flex items-center justify-center">
                  {/* Placeholder for Google Maps */}
                  <div className="text-center space-y-2">
                    <MapPin className="w-12 h-12 text-[#0cc0df] mx-auto" />
                    <p className="text-gray-400">Google Maps</p>
                    <p className="text-gray-500 text-sm">Jl. Teknologi No. 123, Bandung</p>
                  </div>
                  {/* 
                  Uncomment dan ganti dengan embed code Google Maps yang sebenarnya:
                  <iframe
                    src="https://www.google.com/maps/embed?pb=..."
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                  */}
                </div>
              </div>

              {/* Quick Links */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.link}
                    className="p-6 rounded-xl border border-white/10 bg-white/[0.02] hover:border-[#0cc0df]/30 hover:bg-gradient-to-br hover:from-[#0cc0df]/5 hover:to-transparent transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0cc0df]/20 to-[#ffde59]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <link.icon className="w-6 h-6 text-[#0cc0df]" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {link.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {link.description}
                    </p>
                    <span className="text-[#0cc0df] text-sm font-medium">
                      {link.linkText} →
                    </span>
                  </Link>
                ))}
              </div>

              {/* Social Media */}
              <div className="p-6 rounded-xl border border-[#0cc0df]/20 bg-gradient-to-br from-[#0cc0df]/5 to-transparent">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Ikuti Kami
                </h3>
                <div className="flex items-center space-x-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0cc0df]/20 to-[#ffde59]/20 flex items-center justify-center text-[#0cc0df] hover:scale-110 transition-all duration-300"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0cc0df]/20 to-[#ffde59]/20 flex items-center justify-center text-[#0cc0df] hover:scale-110 transition-all duration-300"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0cc0df]/20 to-[#ffde59]/20 flex items-center justify-center text-[#0cc0df] hover:scale-110 transition-all duration-300"
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
      <section className="py-20 sm:py-24 bg-gradient-to-r from-[#0cc0df] to-[#ffde59] border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Butuh Respons Cepat?
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Untuk kebutuhan mendesak, hubungi langsung tim support kami yang siap membantu 24/7.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="tel:+628195016666"
              className="inline-flex items-center bg-white text-gray-900 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 hover:scale-105 transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Telepon Sekarang
            </a>
            <a
              href="mailto:info@nti.co.id"
              className="inline-flex items-center border-2 border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Kami
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}