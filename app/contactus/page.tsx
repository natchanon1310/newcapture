"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Mail, Clock, Send } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
} as const;

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // เพิ่ม Logic การส่งข้อมูลฟอร์มตรงนี้ (เช่น API Route)
    alert("ระบบได้รับข้อมูลการติดต่อของท่านแล้ว ทางเราจะติดต่อกลับโดยเร็วที่สุด");
  };

  return (
    <main className="bg-slate-50 min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* หัวข้อหน้า */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            ติดต่อเรา
          </h1>
          <p className="text-lg text-slate-600">
            ยินดีให้คำปรึกษาด้านการสแกนเอกสารและจัดการระบบข้อมูลดิจิทัลครบวงจร 
            สามารถติดต่อหรือส่งข้อมูลเพื่อขอใบเสนอราคาได้ทันที
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* ฝั่งซ้าย: ข้อมูลการติดต่อ (5 คอลัมน์) */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 space-y-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                ข้อมูลการติดต่อ
              </h2>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">ที่อยู่สำนักงาน</h3>
                  <p className="text-slate-600 leading-7">
                    บริษัท นิวแคปเจอร์ จำกัด (Newcapture Co., Ltd.) <br />
                    เลขที่ 552/125 ถนนกาญจนาภิเษก แขวงประเวศ <br />
                    เขตประเวศ กรุงเทพมหานคร 10250
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">เบอร์โทรศัพท์</h3>
                  <a href="tel:0819257519" className="text-slate-600 hover:text-blue-700 transition leading-7 block font-medium text-lg">
                    081-925-7519
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">อีเมล</h3>
                  <p className="text-slate-600 leading-7">contact@newcapture.co.th</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">เวลาทำการ</h3>
                  <p className="text-slate-600 leading-7">จันทร์ - ศุกร์ | 08:30 น. - 17:30 น.</p>
                </div>
              </div>
            </div>

            {/* ปุ่มนำทาง Google Maps ลิงก์ตรง */}
            <a 
              href="https://maps.app.goo.gl/MGJFApbZBC3pEAjn8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 bg-slate-900 text-white font-medium rounded-2xl shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <MapPin size={20} />
              เปิดนำทางด้วย Google Maps
            </a>
          </motion.div>

          {/* ฝั่งขวา: ฟอร์มติดต่อ / ขอใบเสนอราคา (7 คอลัมน์) */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 space-y-6">
              <h2 className="text-2xl font-bold text-slate-900">
                ส่งข้อความหาเรา / ขอใบเสนอราคา
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-2">
                  <label className="text-sm font-medium text-slate-700">ชื่อ-นามสกุล / ชื่อผู้ติดต่อ</label>
                  <input required type="text" className="px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 bg-slate-50/50" />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-sm font-medium text-slate-700">ชื่อองค์กร / บริษัท (ถ้ามี)</label>
                  <input type="text" className="px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 bg-slate-50/50" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-2">
                  <label className="text-sm font-medium text-slate-700">เบอร์โทรศัพท์ติดต่อ</label>
                  <input required type="tel" className="px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 bg-slate-50/50" />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-sm font-medium text-slate-700">อีเมล</label>
                  <input required type="email" className="px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 bg-slate-50/50" />
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium text-slate-700">บริการที่สนใจ</label>
                <select className="px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 bg-slate-50/50">
                  <option>สแกนเอกสารทั่วไป (แปลงเป็นดิจิทัล / OCR)</option>
                  <option>สแกนไมโครฟิล์ม</option>
                  <option>สแกนเอกสารขนาดใหญ่ (แบบแปลน A0-A4)</option>
                  <option>บริการอื่น ๆ / สอบถามข้อมูลเพิ่มเติม</option>
                </select>
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium text-slate-700">รายละเอียดเพิ่มเติม / ปริมาณเอกสารที่ต้องการสแกน</label>
                <textarea rows={4} className="px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 bg-slate-50/50 resize-none" placeholder="เช่น จำนวนกี่แฟ้ม, ขนาดเอกสาร, หรือประเภทระบบจัดเก็บข้อมูลที่ต้องการ"></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full flex items-center justify-center gap-2 py-4 bg-blue-700 text-white font-medium rounded-2xl shadow-lg shadow-blue-200 hover:bg-blue-800 transition duration-300"
              >
                <Send size={18} />
                ส่งข้อมูลติดต่อ
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </main>
  );
}