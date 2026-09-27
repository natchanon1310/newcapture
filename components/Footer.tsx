import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-4">
        {/* Company */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            NewCapture
          </h2>

          <p className="leading-7 text-sm">
            ผู้เชี่ยวชาญด้านการสแกนเอกสาร
            สแกนไมโครฟิล์ม และแปลงเอกสารเป็นข้อมูลดิจิทัล
            ด้วยมาตรฐานคุณภาพระดับมืออาชีพ
          </p>
        </div>

        {/* Menu */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            เมนู
          </h3>

          <ul className="space-y-3">
            <li>
              <Link href="/about" className="hover:text-blue-400">
                เกี่ยวกับเรา
              </Link>
            </li>

            <li>
              <Link
                href="/document-scan"
                className="hover:text-blue-400"
              >
                สแกนเอกสาร
              </Link>
            </li>

            <li>
              <Link
                href="/microfilm"
                className="hover:text-blue-400"
              >
                สแกนไมโครฟิล์ม
              </Link>
            </li>

            <li>
              <Link
                href="/large-format"
                className="hover:text-blue-400"
              >
                สแกนเอกสาร A0
              </Link>
            </li>

            <li>
              <Link href="/contact" className="hover:text-blue-400">
                ติดต่อเรา
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact (ส่วนที่อัปเดตข้อมูลบริษัท) */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            ติดต่อเรา
          </h3>

          <div className="space-y-4 text-sm">
            {/* คลิกเพื่อโทรออกได้ทันที */}
            <div className="flex items-start gap-3">
              <Phone size={18} className="mt-0.5 text-blue-400 shrink-0" />
              <a href="tel:0819257519" className="hover:text-blue-400 transition">
                081-925-7519
              </a>
            </div>

            <div className="flex items-start gap-3">
              <Mail size={18} className="mt-0.5 text-blue-400 shrink-0" />
              <span>info@newcapture.co.th</span>
            </div>

            {/* เพิ่มที่อยู่เต็มรูปแบบพร้อมลิงก์ไปยัง Google Maps */}
            <div className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 text-blue-400 shrink-0" />
              <a 
                href="https://maps.app.goo.gl/MGJFApbZBC3pEAjn8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition leading-6"
              >
                บริษัท นิวแคปเจอร์ จำกัด <br />
                552/125 ถนนกาญจนาภิเษก <br />
                แขวงประเวศ เขตประเวศ <br />
                กรุงเทพมหานคร 10250
              </a>
            </div>
          </div>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            ติดตามเรา
          </h3>

          <div className="flex gap-4">
            <a
              href="#"
              className="w-11 h-11 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-700 transition"
            >
              <FaFacebookF size={18} />
            </a>

            <a
              href="#"
              className="w-11 h-11 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-700 transition"
            >
              <FaLinkedinIn size={18} />
            </a>
          </div>

          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-block px-5 py-3 rounded-lg bg-blue-700 text-white hover:bg-blue-800 transition shadow-md"
            >
              ขอใบเสนอราคา
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-slate-400">
          <p>
            © {new Date().getFullYear()} NewCapture Co., Ltd.
            All Rights Reserved.
          </p>

          <p>
            Digital Document Solutions
          </p>
        </div>
      </div>
    </footer>
  );
}