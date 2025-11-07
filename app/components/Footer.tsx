"use client";

import { ArrowUp, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    perusahaan: [
      { name: "Tentang Kami", href: "/about" },
      { name: "Layanan", href: "/services" },
      { name: "Kontak", href: "/contact" },
    ],
    layanan: [
      { name: "Perdagangan Komputer", href: "/services#komputer" },
      { name: "Cloud Server", href: "/services#cloud" },
      { name: "Internet Provider", href: "/services#internet" },
    ],
  };

  return (
    <>
      <footer className="bg-[#0A1628] border-t border-[#00D9FF]/10 relative overflow-hidden">
        {/* Geometric Background */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1200 400">
            <polygon points="0,400 300,200 600,350 900,150 1200,300 1200,400" fill="#00D9FF" />
          </svg>
        </div>

        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="space-y-4">
              <Link href="/" className="inline-block group">
                <div className="relative">
                  <h3 className="text-2xl font-black text-white">NTI</h3>
                  <div className="absolute inset-0 bg-[#00D9FF] blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                </div>
                <p className="text-[#00D9FF] text-sm font-bold mt-1">
                  Nuansa Teknologi Informasi
                </p>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed">
                Solusi teknologi terpercaya untuk transformasi digital bisnis Anda dengan layanan komprehensif dan dukungan profesional.
              </p>
              
              {/* Social Media */}
              <div className="flex items-center space-x-3 pt-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-[#00D9FF]/10 flex items-center justify-center text-[#00D9FF] hover:bg-[#00D9FF]/20 hover:shadow-lg hover:shadow-[#00D9FF]/20 transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-[#00D9FF]/10 flex items-center justify-center text-[#00D9FF] hover:bg-[#00D9FF]/20 hover:shadow-lg hover:shadow-[#00D9FF]/20 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-[#00D9FF]/10 flex items-center justify-center text-[#00D9FF] hover:bg-[#00D9FF]/20 hover:shadow-lg hover:shadow-[#00D9FF]/20 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

            {/* Perusahaan Links */}
            <div>
              <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider relative inline-block">
                Perusahaan
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-[#00D9FF] rounded-full shadow-[0_0_8px_#00D9FF]" />
              </h4>
              <ul className="space-y-3">
                {footerLinks.perusahaan.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-[#00D9FF] transition-colors text-sm inline-block hover:translate-x-1 duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Layanan Links */}
            <div>
              <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider relative inline-block">
                Layanan
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-[#00D9FF] rounded-full shadow-[0_0_8px_#00D9FF]" />
              </h4>
              <ul className="space-y-3">
                {footerLinks.layanan.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-[#00D9FF] transition-colors text-sm inline-block hover:translate-x-1 duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider relative inline-block">
                Kontak
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-[#00D9FF] rounded-full shadow-[0_0_8px_#00D9FF]" />
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <MapPin size={18} className="text-[#00D9FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">
                    Indonesia Stock Exchange Tower 1 Level 3,Unit 304.Jl. Jendral Sudirman Kav. 52-53, SenayanVillage,
                      <br />Kebayoran Baru District, South Jakarta
                      Administrative City, DKI Jakarta Province,
                      Postal Code 12190, Indonesia.
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone size={18} className="text-[#00D9FF] flex-shrink-0" />
                  <a
                    href="tel:+628195016666"
                    className="text-gray-400 hover:text-[#00D9FF] transition-colors text-sm"
                  >
                    +622150106260
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail size={18} className="text-[#00D9FF] flex-shrink-0" />
                  <a
                    href="mailto:info@nti.co.id"
                    className="text-gray-400 hover:text-[#00D9FF] transition-colors text-sm"
                  >
                    info@nti.co.id
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#00D9FF]/10 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
              <p className="text-gray-500 text-sm">
                &copy; {currentYear} NTI - Nuansa Teknologi Informasi. All rights reserved.
              </p>
              <p className="text-red-800 text-sm">
                &copy; {currentYear} Developed by Mangkrak Project
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-[#00D9FF] text-white shadow-lg shadow-[#00D9FF]/30 hover:shadow-[#00D9FF]/50 hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center group"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
        </button>
      )}
    </>
  );
};

export default Footer;