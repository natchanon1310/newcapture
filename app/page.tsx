"use client";

import { motion } from "framer-motion";

// แก้ไข: ใส่ 'as const' ท้าย Object เพื่อเคลียร์ปัญหาประเภทข้อมูล (Type Error 2322) ของ TypeScript
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
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
    transition: {
      staggerChildren: 0.2
    }
  }
} as const;

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* 1. Hero Section */}
      <section
        id="hero"
        className="relative h-[600px] bg-cover bg-center bg-no-repeat flex items-center"
        style={{ backgroundImage: "url('/image/scan.png')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-center items-center text-center px-6 text-white w-full">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-6 tracking-wider"
          >
            NEW CAPTURE
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-3xl mx-auto text-lg text-slate-300 leading-8"
          >
            ผู้เชี่ยวชาญด้านการสแกนเอกสาร แปลงข้อมูลเป็นดิจิทัล
            พร้อมบริการจัดการเอกสารอย่างครบวงจร
            เพื่อช่วยให้องค์กรสามารถเข้าถึงข้อมูลได้รวดเร็ว
            ปลอดภัย และมีประสิทธิภาพ
          </motion.p>
        </div>
      </section>

      {/* 2. About Section (เราคือใคร) */}
      <section id="about-us" className="py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6 relative inline-block">
              เราคือใคร
              <span className="absolute bottom-[-8px] left-0 w-12 h-1 bg-blue-700 rounded"></span>
            </h2>

            <p className="text-slate-600 leading-8 mb-5 mt-4">
              NewCapture ให้บริการด้านการสแกนเอกสารและจัดเก็บข้อมูลดิจิทัล
              สำหรับหน่วยงานภาครัฐและเอกชน
              ด้วยเทคโนโลยีที่ทันสมัยและมาตรฐานการทำงานระดับมืออาชีพ
            </p>

            <p className="text-slate-600 leading-8">
              เราให้ความสำคัญกับคุณภาพ ความถูกต้องของข้อมูล
              และความปลอดภัยของเอกสารทุกชิ้น
              เพื่อให้ลูกค้าได้รับบริการที่ดีที่สุด
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-100 rounded-2xl h-96 flex items-center justify-center bg-cover bg-center shadow-md relative overflow-hidden group" 
            style={{ backgroundImage: "url('/image/3.png')" }}
          >
            {/* Overlay effect on hover */}
            <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-300" />
          </motion.div>
        </div>
      </section>

      {/* 3. Services Section */}
      <section id="services" className="bg-slate-50 py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl font-bold text-center mb-16 text-slate-900"
          >
            บริการของเรา
          </motion.h2>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { title: "สแกนเอกสาร", desc: "แปลงเอกสารกระดาษเป็นไฟล์ดิจิทัล รองรับ OCR เพื่อค้นหาข้อมูลได้ง่าย" },
              { title: "สแกนไมโครฟิล์ม", desc: "แปลงไมโครฟิล์มเป็นไฟล์คุณภาพสูง พร้อมจัดเก็บอย่างเป็นระบบ" },
              { title: "สแกนเอกสารขนาดใหญ่", desc: "รองรับแบบแปลน แผนที่ และเอกสารขนาด A0 ด้วยความละเอียดสูง" }
            ].map((service, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-xl hover:border-blue-500/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold text-lg mb-6">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-slate-900">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-7">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Why Us Section */}
      <section id="why-us" className="py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl font-bold text-center mb-16 text-slate-900"
          >
            ทำไมต้องเลือกเรา
          </motion.h2>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { stat: "20+", label: "ปีแห่งประสบการณ์" },
              { stat: "1M+", label: "เอกสารที่สแกนแล้ว" },
              { stat: "30", label: "องค์กรชั้นนำมากกว่า" },
              { stat: "100%", label: "ความพึงพอใจของลูกค้า" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="text-center p-6 bg-slate-50/50 rounded-2xl border border-slate-100"
              >
                <h3 className="text-4xl font-extrabold text-blue-700">
                  {item.stat}
                </h3>
                <p className="mt-3 text-slate-600 font-medium">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}