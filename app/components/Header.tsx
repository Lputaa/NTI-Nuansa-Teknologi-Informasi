"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navLinks = [
  { name: "Beranda", href: "/" },
  { name: "Layanan", href: "/services" },
  { name: "Tentang", href: "/about" },
  { name: "Kontak", href: "/contact" },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md shadow-lg"
            : "bg-transparent hover:bg-gray-900/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/ntilogo.png"
                  alt="Logo NTI"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="hidden lg:block">
                <span className="block text-gray-800 font-bold text-lg leading-tight">
                  NTI
                </span>
                <span className="block text-gray-600 text-xs">
                  Nuansa Teknologi Informasi
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    pathname === link.href
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  {link.name}
                  {pathname === link.href && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-700 hover:text-gray-900 transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-20 right-0 w-full max-w-sm h-[calc(100vh-5rem)] bg-white/90 backdrop-blur-xl border-l border-gray-200 shadow-2xl z-40 md:hidden transform transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="relative h-full">
          {/* Background Gradient */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl bg-linear-to-bl from-[#0cc0df]/10 to-[#ffde59]/5 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl bg-linear-to-tr from-[#0cc0df]/5 to-[#ffde59]/5" />
          </div>

          <nav className="relative z-10 flex flex-col p-6 h-full">
            <div className="space-y-2 py-6">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`group flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 animate-fade-in-right ${
                    pathname === link.href
                      ? "bg-linear-to-r from-[#0cc0df]/10 to-[#ffde59]/10 text-[#0cc0df] border border-[#0cc0df]/20"
                      : "text-gray-700 hover:bg-gray-50/50"
                  }`}
                  style={{ animationDelay: `${index * 100 + 100}ms` }}
                >
                  <span className="relative">
                    {link.name}
                    {pathname === link.href && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-linear-to-r from-[#0cc0df] to-[#ffde59] rounded-full transform origin-left" />
                    )}
                  </span>
                  {pathname === link.href && (
                    <span className="ml-auto text-[#0cc0df]">•</span>
                  )}
                </Link>
              ))}
            </div>

            <div className="mt-auto">
              <div className="bg-linear-to-r from-[#0cc0df]/5 to-[#ffde59]/5 rounded-2xl p-6 backdrop-blur-sm border border-[#0cc0df]/10">
                <p className="text-gray-600 text-sm mb-4">
                  Butuh bantuan? Hubungi kami
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-4 py-2 rounded-lg bg-linear-to-r from-[#0cc0df] to-[#ffde59] text-white font-medium text-sm hover:shadow-lg hover:shadow-[#0cc0df]/20 transition-all duration-300"
                >
                  Kontak Kami
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fade-in-right {
          animation: fade-in-right 0.5s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Header;
