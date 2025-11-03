import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from './components/Footer';
import Header from './components/Header';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NTI - Nuansa Teknologi Informasi | Solusi IT Profesional",
  description: "Penyedia layanan perdagangan komputer & software, cloud server management, dan internet kabel & nirkabel untuk bisnis modern.",
  keywords: "IT solutions, cloud server, networking, komputer, software, internet provider",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <div className="pt-20">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}