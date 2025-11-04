"use client";

import {
    ArrowRight,
    Check,
    ChevronDown,
    Cloud,
    HardDrive,
    Lock,
    Monitor,
    Package,
    Radio,
    Server,
    Settings,
    Shield,
    Smartphone,
    Wifi,
    Zap
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
      ],
      packages: [
        {
          name: "Basic Package",
          price: "Mulai dari 8 Juta",
          description: "Cocok untuk startup dan UMKM",
          features: [
            "PC/Laptop Entry Level",
            "Windows 11 Pro",
            "Office 365 Basic",
            "Antivirus 1 tahun",
            "Garansi 1 tahun"
          ]
        },
        {
          name: "Professional Package",
          price: "Mulai dari 15 Juta",
          description: "Untuk bisnis menengah",
          features: [
            "Workstation/Laptop High-End",
            "Windows 11 Pro",
            "Office 365 Business",
            "Antivirus Enterprise",
            "Garansi 2 tahun",
            "On-site support"
          ],
          featured: true
        },
        {
          name: "Enterprise Package",
          price: "Custom Quote",
          description: "Solusi lengkap untuk perusahaan besar",
          features: [
            "Server & Workstation",
            "Windows Server + CAL",
            "Office 365 Enterprise",
            "Security Suite Enterprise",
            "Garansi 3 tahun",
            "Dedicated support",
            "Maintenance contract"
          ]
        }
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
      ],
      packages: [
        {
          name: "Starter Cloud",
          price: "500K/bulan",
          description: "Untuk aplikasi dan website kecil",
          features: [
            "2 vCPU Cores",
            "4 GB RAM",
            "80 GB SSD Storage",
            "2 TB Bandwidth",
            "1 IPv4 Address",
            "Daily Backup"
          ]
        },
        {
          name: "Business Cloud",
          price: "1.5 Juta/bulan",
          description: "Untuk aplikasi bisnis menengah",
          features: [
            "4 vCPU Cores",
            "8 GB RAM",
            "160 GB SSD Storage",
            "4 TB Bandwidth",
            "2 IPv4 Address",
            "Daily Backup",
            "Priority Support"
          ],
          featured: true
        },
        {
          name: "Enterprise Cloud",
          price: "Custom",
          description: "Solusi cloud untuk skala besar",
          features: [
            "Custom vCPU Cores",
            "Custom RAM",
            "Custom SSD Storage",
            "Unlimited Bandwidth",
            "Multiple IPv4",
            "Hourly Backup",
            "Dedicated Support",
            "Custom Configuration"
          ]
        }
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
      ],
      packages: [
        {
          name: "SME Internet",
          price: "2 Juta/bulan",
          description: "Untuk usaha kecil menengah",
          features: [
            "Up to 20 Mbps",
            "Dedicated Connection",
            "1 Static IP",
            "Free Router",
            "Free Installation",
            "8x5 Support"
          ]
        },
        {
          name: "Corporate Internet",
          price: "5 Juta/bulan",
          description: "Untuk kantor dan perusahaan",
          features: [
            "Up to 50 Mbps",
            "Dedicated Connection",
            "2 Static IP",
            "Enterprise Router",
            "Free Installation",
            "24/7 Support",
            "SLA 99.5%"
          ],
          featured: true
        },
        {
          name: "Enterprise Internet",
          price: "Custom",
          description: "Untuk kebutuhan bandwidth besar",
          features: [
            "Up to 1 Gbps",
            "Dedicated Connection",
            "Multiple Static IP",
            "Managed Router",
            "Free Installation",
            "24/7 Priority Support",
            "SLA 99.9%",
            "Redundant Connection"
          ]
        }
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
    <main className="min-h-screen bg-[#001B33] text-gray-100">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 bg-gradient-to-b from-[#002244] to-[#001B33] border-b border-white/5 overflow-hidden">
        {/* Gradient Accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#0cc0df]/20 to-[#ffde59]/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#ffde59]/10 to-[#0cc0df]/10 blur-3xl rounded-full" />
        
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#0cc0df]/20 to-[#ffde59]/20 border border-[#0cc0df]/30 rounded-full">
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#0cc0df] to-[#ffde59] text-sm font-medium">
              Layanan Profesional
            </p>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Solusi IT Komprehensif untuk{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0cc0df] to-[#ffde59]">
              Bisnis Anda
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
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
            index % 2 === 0 ? "bg-[#001B33]" : "bg-[#000F1F]"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {/* Service Header */}
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0cc0df]/20 to-[#ffde59]/20 flex items-center justify-center mx-auto border border-[#0cc0df]/30">
                <service.icon className="w-8 h-8 text-[#0cc0df]" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                {service.title}
              </h2>
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#0cc0df] to-[#ffde59] text-lg font-medium">
                {service.subtitle}
              </p>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {service.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl border border-white/10 bg-white/[0.02] hover:border-[#0cc0df]/30 hover:bg-white/[0.04] transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0cc0df]/20 to-[#ffde59]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-[#0cc0df]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <div className="mb-16 p-8 rounded-2xl border border-[#0cc0df]/20 bg-gradient-to-br from-[#0cc0df]/5 to-transparent">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Keuntungan Layanan
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#0cc0df]/30 to-[#ffde59]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-[#0cc0df]" />
                    </div>
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing Packages */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                Paket Layanan
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {service.packages.map((pkg, idx) => (
                  <div
                    key={idx}
                    className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                      pkg.featured
                        ? "border-[#0cc0df]/50 bg-gradient-to-b from-[#0cc0df]/10 to-transparent scale-105"
                        : "border-white/10 bg-white/[0.02] hover:border-[#0cc0df]/30"
                    }`}
                  >
                    {pkg.featured && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#0cc0df] to-[#ffde59] text-white text-sm font-semibold px-4 py-1 rounded-full">
                        Populer
                      </div>
                    )}
                    
                    <div className="text-center mb-6">
                      <h4 className="text-xl font-bold text-white mb-2">
                        {pkg.name}
                      </h4>
                      <p className="text-gray-400 text-sm mb-4">
                        {pkg.description}
                      </p>
                      <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0cc0df] to-[#ffde59]">
                        {pkg.price}
                      </div>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, fidx) => (
                        <li key={fidx} className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-[#0cc0df] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                        pkg.featured
                          ? "bg-gradient-to-r from-[#0cc0df] to-[#ffde59] text-white hover:shadow-lg hover:shadow-[#0cc0df]/30"
                          : "border border-[#0cc0df]/50 text-[#0cc0df] hover:bg-[#0cc0df]/10"
                      }`}
                    >
                      Pilih Paket
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* FAQ Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-[#001B33] to-[#002244] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Pertanyaan Umum
            </h2>
            <p className="text-gray-400 text-lg">
              Jawaban untuk pertanyaan yang sering diajukan
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-white/10 rounded-xl bg-white/[0.02] overflow-hidden hover:border-[#0cc0df]/30 transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.02] transition-colors"
                >
                  <span className="text-white font-semibold pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#0cc0df] flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 border-t border-[#0cc0df]/20">
                    <p className="text-gray-400 leading-relaxed pt-4">
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
      <section className="py-20 sm:py-24 bg-gradient-to-r from-[#0cc0df] to-[#ffde59] border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Butuh Konsultasi Lebih Lanjut?
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Tim ahli kami siap membantu Anda memilih solusi IT yang tepat sesuai kebutuhan dan budget bisnis Anda.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center bg-white text-gray-900 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 hover:scale-105 transition-all duration-300"
            >
              Hubungi Kami
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href="tel:+628195016666"
              className="inline-flex items-center border-2 border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              atau Telepon Langsung
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}