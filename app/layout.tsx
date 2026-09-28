import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "NewCapture | Digital Document Solutions",
    template: "%s | NewCapture",
  },

  description:
    "ผู้เชี่ยวชาญด้านบริการสแกนเอกสาร สแกนไมโครฟิล์ม และสแกนเอกสารขนาดใหญ่ A0 ด้วยมาตรฐานระดับมืออาชีพ",

  keywords: [
    "Scan Document",
    "Document Scanning",
    "Microfilm Scanning",
    "Large Format Scanning",
    "A0 Scanning",
    "OCR",
    "NewCapture",
  ],

  icons: {
    icon: "/icon.png",
  },


 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 text-slate-800`}
      >
        <Navbar />

        <main className="min-h-screen pt-20">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}