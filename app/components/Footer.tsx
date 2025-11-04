"use client";

import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
    <footer className="bg-[#000A14] border-t border-white/5">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <h3 className="text-2xl font-bold text-white">NTI</h3>
              <p className="text-cyan-400 text-sm font-medium">
                Nuansa Teknologi Informasi
              </p>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Solusi teknologi terpercaya untuk transformasi digital bisnis Anda dengan layanan komprehensif dan dukungan profesional.
            </p>
            {/* Social Media */}
            <div className="flex items-center space-x-4 pt-2">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Perusahaan Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Perusahaan
            </h4>
            <ul className="space-y-3">
              {footerLinks.perusahaan.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Layanan Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Layanan
            </h4>
            <ul className="space-y-3">
              {footerLinks.layanan.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Kontak
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Jl. Teknologi No. 123<br />Bandung, Jawa Barat 40132
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-cyan-400 flex-shrink-0" />
                <a
                  href="tel:+628195016666"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  +62 819-5016-666
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-cyan-400 flex-shrink-0" />
                <a
                  href="mailto:info@nti.co.id"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  info@nti.co.id
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} NTI - Nuansa Teknologi Informasi. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              by project mangkrak'
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;