"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, DollarSign, Layers, MapPin, Building2 } from "lucide-react";
import { useRef, useState } from "react";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
} as const;

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
} as const;

export default function DocumentScanPage() {
  // 🌟 สร้างระบบควบคุมการเล่นและสเตตแยกอิสระครบทั้ง 3 การ์ด
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  const videoRef3 = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = (cardNum: number, ref: React.RefObject<HTMLVideoElement | null>) => {
    setHoveredCard(cardNum);
    if (ref.current) {
      ref.current.play().catch((err) => console.log(`Video ${cardNum} play interrupted:`, err));
    }
  };

  const handleMouseLeave = (ref: React.RefObject<HTMLVideoElement | null>) => {
    setHoveredCard(null);
    if (ref.current) {
      ref.current.pause();
    }
  };

  return (
    <main className="bg-slate-50 min-h-screen pt-28 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* ================= HERO SECTION ================= */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <span className="text-blue-700 font-semibold uppercase tracking-wider bg-blue-50 px-4 py-1.5 rounded-full text-sm">
            Services
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4 mb-6 tracking-tight">
            สแกนเอกสารทั่วไป
          </h1>
          <p className="text-lg text-slate-600 leading-8">
            บริการสแกนเอกสารทั่วไปและเอกสารจำนวนมากภายในองค์กร รองรับขนาดมาตรฐาน 
            <span className="text-blue-700 font-semibold mx-1">A4, A3, F14</span> 
            เช่น เอกสารประวัตินักศึกษา ใบสมัครสมาชิก ฝ่ายบุคคล ประกันภัย เวชระเบียน หน่วยงานราชการ 
            แบบสอบถาม รายงาน และเอกสารบัญชี/สัญญาต่าง ๆ บันทึกเป็นไฟล์ <span className="font-semibold text-slate-800">PDF</span> หรือ <span className="font-semibold text-slate-800">TIFF File</span>
          </p>
        </motion.div>

        {/* ================= 🌟 BENEFITS SECTION WITH PAPER CURL EFFECT ================= */}
        <section className="mb-24">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-slate-950 mb-10 text-center md:text-left"
          >
            ข้อดีของการเปลี่ยนเอกสารเป็นดิจิทัล
          </motion.h2>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { title: "เพิ่มพื้นที่ว่างให้สำนักงาน", desc: "ลดตู้เก็บเอกสาร เปลี่ยนพื้นที่ทับถมให้เป็นพื้นที่ใช้สอย" },
              { title: "ประหยัดเวลาการจัดการ", desc: "ลดความยุ่งยากในการค้นหาเอกสารเก่า ๆ รวดเร็วในไม่กี่คลิก" },
              { title: "เข้าถึงข้อมูลได้ทันที", desc: "เรียกดูเอกสารผ่านระบบออนไลน์ได้ทุกที่ทุกเวลาอย่างมีประสิทธิภาพ" },
              { title: "ป้องกันข้อมูลสูญหาย", desc: "ปลอดภัยจากอัคคีภัย ภัยธรรมชาติ หรือเอกสารเปื่อยยุ่ยตามกาลเวลา" },
              { title: "แบ่งปันและทำงานร่วมกันง่าย", desc: "ส่งต่อข้อมูลภายในทีมหรือข้ามแผนกได้อย่างสะดวกรวดเร็ว" },
              { title: "ควบคุมค่าใช้จ่ายได้ดี", desc: "ประหยัดงบประมาณการพิมพ์ การทำสำเนา และการจัดส่งกระดาษ" }
            ].map((benefit, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                whileHover="hover"
                className="relative bg-white p-8 rounded-2xl shadow-sm border border-slate-100 overflow-hidden group transition-all duration-300 hover:shadow-xl"
              >
                <motion.div 
                  variants={{
                    hover: { width: 35, height: 35 }
                  }}
                  className="absolute top-0 right-0 w-0 h-0 bg-gradient-to-bl from-slate-200 to-white shadow-[-2px_2px_5px_rgba(0,0,0,0.08)] rounded-bl-xl transition-all duration-300 z-10 before:content-[''] before:absolute before:inset-0 before:bg-slate-300/30"
                />
                
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-5 transition-transform group-hover:scale-110">
                  <CheckCircle2 size={20} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600 text-sm leading-6">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ================= 🏢 SERVICE MODELS SECTION ================= */}
        <section className="mb-24 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-bold text-slate-950 mb-4">รูปแบบการให้บริการ</h2>
            <p className="text-slate-600">เราปรับเปลี่ยนรูปแบบงานสแกนตามความเหมาะสมและพื้นที่ขององค์กรท่าน</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* 1. Onsite Service */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-100 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-700 text-white rounded-xl flex items-center justify-center shrink-0 shadow-md shadow-blue-200">
                    <Building2 size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">1. แบบ Onsite Service</h3>
                </div>
                <p className="text-slate-600 leading-7 text-sm">
                  ทางบริษัทฯ จะทำการจัดตั้งสถานที่ทำงาน และติดตั้งอุปกรณ์ที่จำเป็นในการทำงาน ณ สำนักงานของลูกค้า ซึ่งจำเป็นต้องมีพื้นที่ในการทำงานที่เหมาะสมกับจำนวนเจ้าหน้าที่และอุปกรณ์ โดยพื้นที่แต่ละโครงการจะแตกต่างกันขึ้นอยู่กับปริมาณเอกสาร ใช้สำหรับจัดเตรียม สแกน และตรวจสอบคุณภาพตามมาตรฐานสูงสุด
                </p>
              </div>
            </motion.div>

            {/* 2. Offsite Service */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-100 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">2. แบบ Offsite Service</h3>
                </div>
                <p className="text-slate-600 leading-7 text-sm">
                  สำหรับลูกค้าที่ไม่มีพื้นที่เพียงพอ เรามีศูนย์สแกนเอกสารที่ได้มาตรฐาน พร้อมเจ้าหน้าที่ผู้เชี่ยวชาญและเครื่องมือระดับโปรองรับงานทุกประเภท มั่นใจได้ด้วยระบบรักษาความปลอดภัยรัดกุม <strong>พร้อมบริการรับ-ส่งเอกสารฟรี! ไม่มีค่าใช้จ่ายเพิ่มเติม</strong>
                </p>
              </div>
            </motion.div>
          </div>

          {/* NDA Security Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 p-6 bg-emerald-50 border border-emerald-100 rounded-2xl flex flex-col sm:flex-row items-center gap-4 text-emerald-950"
          >
            <ShieldCheck size={32} className="text-emerald-600 shrink-0" />
            <p className="text-sm leading-6 text-center sm:text-left">
              <strong>ความปลอดภัยคือสิ่งสำคัญที่สุด:</strong> เรามีการทำสัญญาว่าด้วยการไม่เปิดเผยข้อมูล <span className="underline decoration-wavy decoration-emerald-500 font-semibold">(NON-DISCLOSURE AGREEMENT: NDA)</span> ทั้งสองฝ่าย เพื่อการันตีความปลอดภัยสูงสุดของข้อมูลและเอกสารของท่าน
            </p>
          </motion.div>
        </section>

        {/* ================= 📸 PORTFOLIO / SHOWCASE SECTION ================= */}
        <section className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-slate-950 mb-4">ภาพผลงานการดำเนินงานของเรา</h2>
            <p className="text-slate-600">ตัวอย่างขั้นตอนการปฏิบัติงาน มาตรฐานเครื่องมือ และการจัดเตรียมระบบข้อมูล</p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-3 gap-8"
          >
            {/* 🌟 ผลงานชิ้นที่ 1 */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.10, boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)" }}
              onMouseEnter={() => handleMouseEnter(1, videoRef1)}
              onMouseLeave={() => handleMouseLeave(videoRef1)}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden group transition-all duration-300 cursor-pointer relative z-10 hover:z-20"
            >
              <div className="h-56 bg-slate-900 flex items-center justify-center relative overflow-hidden">
                <video
                  ref={videoRef1}
                  src="/image/จัดเตรียมเอกสาร.mp4" // 🌟 เปลี่ยนชื่อไฟล์ตามวิดีโอจริงชิ้นที่ 1
                  muted
                  loop
                  playsInline
                  poster="/image/portfolio-1.jpg"
                  className="w-full h-full object-cover absolute inset-0 transition-all duration-700 ease-out transform group-hover:scale-125"
                  style={{ opacity: hoveredCard === 1 ? 1 : 0.85 }}
                />
                <div className="absolute inset-0 bg-blue-950/10 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
              </div>
              <div className="p-6 bg-white relative z-10">
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                  ขั้นตอนการจัดเตรียมและจำแนกเอกสาร
                </h3>
                <p className="text-slate-600 text-xs leading-6">
                  เจ้าหน้าที่ผู้เชี่ยวชาญตรวจสอบความสมบูรณ์และคัดแยกหมวดหมู่ก่อนเข้าสู่ระบบสแกน
                </p>
              </div>
            </motion.div>

            {/* 🌟 ผลงานชิ้นที่ 2 */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.10, boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)" }}
              onMouseEnter={() => handleMouseEnter(2, videoRef2)}
              onMouseLeave={() => handleMouseLeave(videoRef2)}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden group transition-all duration-300 cursor-pointer relative z-10 hover:z-20"
            >
              <div className="h-56 bg-slate-900 flex items-center justify-center relative overflow-hidden">
                <video
                  ref={videoRef2}
                  src="/image/แสกนแบบตัดขอบ.mp4"
                  muted
                  loop
                  playsInline
                  poster="/image/สแกนหนังสือแบบตัดขอบ.png"
                  className="w-full h-full object-cover absolute inset-0 transition-all duration-700 ease-out transform group-hover:scale-125"
                  style={{ opacity: hoveredCard === 2 ? 1 : 0.85 }}
                />
                <div className="absolute inset-0 bg-blue-950/10 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
              </div>
              <div className="p-6 bg-white relative z-10">
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                  การปฏิบัติงานด้วยเครื่องสแกนมาตรฐานสูง
                </h3>
                <p className="text-slate-600 text-xs leading-6">
                  แปลงเอกสารสู่ไฟล์ดิจิทัลด้วยเครื่องสแกนเนอร์ความเร็วสูงที่ถนอมเนื้อกระดาษ
                </p>
              </div>
            </motion.div>

            {/* 🌟 ผลงานชิ้นที่ 3 */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.10, boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)" }}
              onMouseEnter={() => handleMouseEnter(3, videoRef3)}
              onMouseLeave={() => handleMouseLeave(videoRef3)}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden group transition-all duration-300 cursor-pointer relative z-10 hover:z-20"
            >
              <div className="h-56 bg-slate-900 flex items-center justify-center relative overflow-hidden">
                <video
                  ref={videoRef3}
                  src="/image/ตรวจเช็คคุณภาพ.mp4" // 🌟 เปลี่ยนชื่อไฟล์ตามวิดีโอจริงชิ้นที่ 3
                  muted
                  loop
                  playsInline
                  poster="/image/portfolio-3.jpg"
                  className="w-full h-full object-cover absolute inset-0 transition-all duration-700 ease-out transform group-hover:scale-125"
                  style={{ opacity: hoveredCard === 3 ? 1 : 0.85 }}
                />
                <div className="absolute inset-0 bg-blue-950/10 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
              </div>
              <div className="p-6 bg-white relative z-10">
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                  การตรวจสอบคุณภาพและทำ Indexing
                </h3>
                <p className="text-slate-600 text-xs leading-6">
                  ทีมงาน QC ตรวจเช็กความคมชัดของไฟล์ PDF/TIFF พร้อมจัดทำข้อมูลสืบค้น
                </p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ================= 💰 PRICING FACTOR SECTION ================= */}
        <section className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-3xl p-8 md:p-10 shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 text-white">
              <DollarSign size={160} />
            </div>
            
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Layers className="text-blue-400" /> อัตราค่าบริการ
            </h2>
            <p className="text-slate-300 text-sm leading-6 mb-8">
              อัตราค่าบริการจะขึ้นอยู่กับรายละเอียดโครงสร้างของแต่ละโครงการ โดยเราพิจารณาจากความยากง่ายและขอบเขตงานจริง เพื่อให้ลูกค้าได้รับความคุ้มค่าสูงสุด ดังนี้:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 text-sm text-slate-200">
              {[
                "สถานที่ปฏิบัติงาน (Onsite / Offsite)",
                "ประเภทของเอกสารและจำนวนหน้าทั้งหมด",
                "ขนาดของหน้าเอกสาร (A4, A3, F14 ฯลฯ)",
                "ความยากง่ายต่อการเตรียมและสแกนต่อชุด",
                "รูปแบบการจัดเก็บข้อมูลไฟล์ปลายทาง",
                "ข้อกำหนดในการจัดทำทำดัชนี (Index)",
                "เงื่อนไขและช่องทางการส่งมอบข้อมูล"
              ].map((factor, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white/5 px-4 py-3 rounded-xl border border-white/10">
                  <span className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold font-mono text-white shrink-0">{idx + 1}</span>
                  <span>{factor}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 text-center">
              <a 
                href="/contact" 
                className="inline-flex px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition shadow-lg shadow-blue-900/40"
              >
                ติดต่อขอประเมินราคาโครงการ
              </a>
            </div>
          </motion.div>
        </section>

      </div>
    </main>
  );
}