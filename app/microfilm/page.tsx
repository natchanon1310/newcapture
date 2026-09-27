
"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  ShieldCheck,
  DollarSign,
  Layers,
  MapPin,
} from "lucide-react";
import { useRef, useState } from "react";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
} as const;

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
} as const;

export default function PhotoFilmScanPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  const videoRef3 = useRef<HTMLVideoElement>(null);

  // เมื่อ Mouse เข้า Card
  const handleMouseEnter = (
    cardNum: number,
    ref: React.RefObject<HTMLVideoElement | null>
  ) => {
    setHoveredCard(cardNum);

    if (ref.current) {
      // เริ่มเล่นจากเฟรมแรกทุกครั้ง
      ref.current.currentTime = 0;

      ref.current.play().catch((err) => {
        console.log(`Video ${cardNum} play interrupted:`, err);
      });
    }
  };

  // เมื่อ Mouse ออกจาก Card
  const handleMouseLeave = (
    ref: React.RefObject<HTMLVideoElement | null>
  ) => {
    setHoveredCard(null);

    if (ref.current) {
      // หยุดวิดีโอ
      ref.current.pause();

      // กลับไปเฟรมแรก
      ref.current.currentTime = 0;
    }
  };

  // บังคับให้ Video อยู่ที่เฟรมแรกเมื่อโหลดเสร็จ
  const handleVideoLoaded = (
    event: React.SyntheticEvent<HTMLVideoElement>
  ) => {
    const video = event.currentTarget;

    video.pause();
    video.currentTime = 0;
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
            สแกนรูปถ่าย ฟิล์มถ่ายรูป ฟิล์มสไลด์
          </h1>

          <p className="text-lg text-slate-600 leading-8">
            บริการรับสแกนรูป ภาพถ่าย ขนาดต่าง ๆ ตั้งแต่{" "}
            <span className="text-blue-700 font-semibold mx-1">
              4x6, 3x5, A4, A3
            </span>
            รวมถึงรับสแกนฟิล์มถ่ายรูป และฟิล์มสไลด์ด้วยเครื่องมือที่ทันสมัยสำหรับสแกนฟิล์มโดยเฉพาะ
            มีความละเอียดสูง รองรับทั้งแบบสี ขาว-ดำ หรือเกรย์สเกล
            สามารถนำไปพรินต์หรือใช้งานดิจิทัลได้อย่างสมบูรณ์แบบ
            บันทึกเป็นไฟล์{" "}
            <span className="font-semibold text-slate-800">TIFF</span> หรือ{" "}
            <span className="font-semibold text-slate-800">JPEG File</span>
          </p>
        </motion.div>

        {/* ================= BENEFITS SECTION ================= */}
        <section className="mb-24">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-slate-950 mb-10 text-center md:text-left"
          >
            ประเภทสื่อและฟิล์มที่รองรับการแปลงดิจิทัล
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "รูปภาพและภาพถ่ายโบราณ",
                desc: "รองรับขนาดภาพถ่ายมาตรฐานทั่วไป 3x5, 4x6 นิ้ว ไปจนถึงขนาดใหญ่ A4 และ A3",
              },
              {
                title: "ฟิล์มเนกาทิฟ (Negative Film)",
                desc: "แปลงม้วนฟิล์มถ่ายรูปมาตรฐาน ทั้งฟิล์มสีและฟิล์มขาว-ดำ ให้กลับมามีชีวิตชีวา",
              },
              {
                title: "ฟิล์มโพสิทิฟ (Positive Film)",
                desc: "บริการสแกนและแปลงไฟล์จากฟิล์มสไลด์ (Slide Film) คุณภาพสูง คมชัดแม่นยำ",
              },
              {
                title: "ฟิล์มขนาด 35 mm",
                desc: "รองรับฟิล์มถ่ายภาพยอดนิยมขนาด 35 มิลลิเมตร ยอดนิยมของกล้องอนาล็อกยุคคลาสสิก",
              },
              {
                title: "ฟิล์มขนาด 120 mm",
                desc: "สแกนฟิล์ม Medium Format (120 mm) สำหรับช่างภาพระดับมืออาชีพที่เน้นรายละเอียด",
              },
              {
                title: "ไฟล์ฟอร์แมตคุณภาพสูง",
                desc: "เลือกบันทึกผลงานปลายทางได้ตามการใช้งาน ทั้งไฟล์ JPEG ขนาดกะทัดรัด หรือ TIFF ไร้การบีบอัด",
              },
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover="hover"
                className="relative bg-white p-8 rounded-2xl shadow-sm border border-slate-100 overflow-hidden group transition-all duration-300 hover:shadow-xl"
              >
                <motion.div
                  variants={{
                    hover: {
                      width: 35,
                      height: 35,
                    },
                  }}
                  className="absolute top-0 right-0 w-0 h-0 bg-gradient-to-bl from-slate-200 to-white shadow-[-2px_2px_5px_rgba(0,0,0,0.08)] rounded-bl-xl transition-all duration-300 z-10 before:content-[''] before:absolute before:inset-0 before:bg-slate-300/30"
                />

                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-5 transition-transform group-hover:scale-110">
                  <CheckCircle2 size={20} />
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {benefit.title}
                </h3>

                <p className="text-slate-600 text-sm leading-6">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ================= SERVICE MODELS SECTION ================= */}
        <section className="mb-24 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-bold text-slate-950 mb-4">
              รูปแบบการให้บริการ
            </h2>

            <p className="text-slate-600">
              เนื่องจากต้องการความละเอียดและความปลอดภัยของตัวฟิล์มขั้นสูง
              เราจึงมีบริการรูปแบบเฉพาะ
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  ให้บริการแบบ Offsite Service เท่านั้น
                </h3>
              </div>

              <p className="text-slate-600 leading-7 text-sm mb-4">
                การบริการประเภทนี้จะให้บริการแบบ{" "}
                <strong>Offsite Service เท่านั้น</strong>{" "}
                โดยลูกค้าจะต้องจัดส่งรูปถ่ายหรือม้วนฟิล์มเข้ามาดำเนินงานที่ศูนย์สแกนเฉพาะทางของบริษัทฯ
                เพื่อการเข้าถึงเครื่องมือที่ถูกต้องและมีความละเอียดแม่นยำสูงสุด
              </p>

              <p className="text-blue-700 leading-7 text-sm font-semibold bg-blue-50/75 p-4 rounded-xl border border-blue-100">
                💡 พิเศษ! ในกรณีที่เอกสารหรือฟิล์มมีจำนวนมาก
                ทางบริษัทฯ มีบริการจัดส่งเจ้าหน้าที่เข้าไป รับ-ส่ง
                ม้วนฟิล์มและรูปภาพให้ ฟรี! โดยไม่คิดค่าใช้จ่ายเพิ่มเติม
              </p>
            </motion.div>
          </div>

          {/* NDA Security Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 max-w-3xl mx-auto p-6 bg-emerald-50 border border-emerald-100 rounded-2xl flex flex-col sm:flex-row items-center gap-4 text-emerald-950"
          >
            <ShieldCheck
              size={32}
              className="text-emerald-600 shrink-0"
            />

            <p className="text-sm leading-6 text-center sm:text-left">
              <strong>ความปลอดภัยคือสิ่งสำคัญที่สุด:</strong>{" "}
              ความปลอดภัยข้อมูลของลูกค้าเป็นสิ่งสำคัญที่สุด
              เราจึงมีสัญญาว่าด้วยการไม่เปิดเผยข้อมูล{" "}
              <span className="underline decoration-wavy decoration-emerald-500 font-semibold">
                (NON-DISCLOSURE AGREEMENT: NDA)
              </span>{" "}
              ทั้งสองฝ่าย
              เพื่อความมั่นใจเรื่องความปลอดภัยสูงสุด
            </p>
          </motion.div>
        </section>

        {/* ================= PORTFOLIO / SHOWCASE SECTION ================= */}
        <section className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-slate-950 mb-4">
              ภาพผลงานการดำเนินงานของเรา
            </h2>

            <p className="text-slate-600">
              ตัวอย่างกระบวนการทำความสะอาดฟิล์ม เครื่องสแกนเฉพาะทาง
              และการส่งมอบงานดิจิทัล
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-3 gap-8"
          >
            {/* ================= CARD 1 ================= */}
            <motion.div
              variants={fadeInUp}
              whileHover={{
                scale: 1.1,
                boxShadow:
                  "0 25px 50px -12px rgba(59, 130, 246, 0.25)",
              }}
              onMouseEnter={() =>
                handleMouseEnter(1, videoRef1)
              }
              onMouseLeave={() =>
                handleMouseLeave(videoRef1)
              }
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 18,
              }}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden group transition-all duration-300 cursor-pointer relative z-10 hover:z-20"
            >
              <div className="h-56 bg-slate-900 flex items-center justify-center relative overflow-hidden">
                <video
                  ref={videoRef1}
                  src="/image/microflim1.mp4"
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster="/image/film-portfolio-1.jpg"
                  onLoadedMetadata={handleVideoLoaded}
                  className="w-full h-full object-cover absolute inset-0 transition-all duration-700 ease-out transform group-hover:scale-125"
                  style={{
                    opacity: hoveredCard === 1 ? 1 : 0.85,
                  }}
                />

                <div className="absolute inset-0 bg-blue-950/10 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
              </div>

              <div className="p-6 bg-white relative z-10">
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                  ขั้นตอนการเตรียมและทำความสะอาดฟิล์ม
                </h3>

                <p className="text-slate-600 text-xs leading-6">
                  เจ้าหน้าที่ตรวจสอบและเตรียมฟิล์มอย่างละเอียดก่อนเข้าสู่กระบวนการสแกน
                  เพื่อให้ได้คุณภาพของภาพที่ดีที่สุด
                </p>
              </div>
            </motion.div>

            {/* ================= CARD 2 ================= */}
            <motion.div
              variants={fadeInUp}
              whileHover={{
                scale: 1.1,
                boxShadow:
                  "0 25px 50px -12px rgba(59, 130, 246, 0.25)",
              }}
              onMouseEnter={() =>
                handleMouseEnter(2, videoRef2)
              }
              onMouseLeave={() =>
                handleMouseLeave(videoRef2)
              }
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 18,
              }}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden group transition-all duration-300 cursor-pointer relative z-10 hover:z-20"
            >
              <div className="h-56 bg-slate-900 flex items-center justify-center relative overflow-hidden">
                <video
                  ref={videoRef2}
                  src="/image/microflim2.mp4"
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster="/image/film-portfolio-2.jpg"
                  onLoadedMetadata={handleVideoLoaded}
                  className="w-full h-full object-cover absolute inset-0 transition-all duration-700 ease-out transform group-hover:scale-125"
                  style={{
                    opacity: hoveredCard === 2 ? 1 : 0.85,
                  }}
                />

                <div className="absolute inset-0 bg-blue-950/10 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
              </div>

              <div className="p-6 bg-white relative z-10">
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                  การสแกนฟิล์มด้วยเครื่องมือเฉพาะทาง
                </h3>

                <p className="text-slate-600 text-xs leading-6">
                  ใช้เครื่องสแกนฟิล์มเฉพาะทางเพื่อเก็บรายละเอียดของเนื้อฟิล์ม
                  และแปลงภาพอนาล็อกให้เป็นไฟล์ดิจิทัลคุณภาพสูง
                </p>
              </div>
            </motion.div>

            {/* ================= CARD 3 ================= */}
            <motion.div
              variants={fadeInUp}
              whileHover={{
                scale: 1.1,
                boxShadow:
                  "0 25px 50px -12px rgba(59, 130, 246, 0.25)",
              }}
              onMouseEnter={() =>
                handleMouseEnter(3, videoRef3)
              }
              onMouseLeave={() =>
                handleMouseLeave(videoRef3)
              }
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 18,
              }}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden group transition-all duration-300 cursor-pointer relative z-10 hover:z-20"
            >
              <div className="h-56 bg-slate-900 flex items-center justify-center relative overflow-hidden">
                <video
                  ref={videoRef3}
                  src="/image/microflim3.mp4"
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster="/image/film-portfolio-3.jpg"
                  onLoadedMetadata={handleVideoLoaded}
                  className="w-full h-full object-cover absolute inset-0 transition-all duration-700 ease-out transform group-hover:scale-125"
                  style={{
                    opacity: hoveredCard === 3 ? 1 : 0.85,
                  }}
                />

                <div className="absolute inset-0 bg-blue-950/10 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
              </div>

              <div className="p-6 bg-white relative z-10">
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                  การตรวจสอบคุณภาพและจัดเตรียมไฟล์
                </h3>

                <p className="text-slate-600 text-xs leading-6">
                  ตรวจสอบความคมชัดและคุณภาพของไฟล์ก่อนส่งมอบ
                  พร้อมจัดเตรียมไฟล์ TIFF หรือ JPEG ตามความต้องการของลูกค้า
                </p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ================= PRICING FACTOR SECTION ================= */}
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
              อัตราค่าบริการจะขึ้นอยู่กับรายละเอียดโครงสร้างความยากง่ายของปริมาณและประเภทวัสดุ
              โดยพิจารณาตามหัวข้อดังนี้:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 text-sm text-slate-200">
              <div className="flex items-center gap-3 bg-white/5 px-4 py-3 rounded-xl border border-white/10">
                <span className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold font-mono text-white shrink-0">
                  1
                </span>
                <span>
                  ประเภทของสื่อ (ภาพถ่าย / ฟิล์มถ่ายรูป / ฟิล์มสไลด์)
                </span>
              </div>

              <div className="flex items-center gap-3 bg-white/5 px-4 py-3 rounded-xl border border-white/10">
                <span className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold font-mono text-white shrink-0">
                  2
                </span>
                <span>
                  จำนวนรวมของสื่อ (ปริมาณมาก ราคาต่อชิ้นจะถูกลง)
                </span>
              </div>

              <div className="flex items-center gap-3 bg-white/5 px-4 py-3 rounded-xl border border-white/10 sm:col-span-2">
                <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold font-mono text-white shrink-0">
                  3
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                  <span>ความละเอียดในการสแกนตามมาตรฐาน:</span>
                  <span className="text-blue-300 font-semibold">
                    รูปภาพ: 600 dpi
                  </span>
                  <span className="text-amber-400 font-semibold">
                    ฟิล์ม: 2,400 dpi
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/5 px-4 py-3 rounded-xl border border-white/10 sm:col-span-2">
                <span className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold font-mono text-white shrink-0">
                  4
                </span>

                <span>
                  รูปแบบการส่งมอบข้อมูลที่เลือก (เช่น แผ่น DVD, Flash Drive,
                  Cloud Storage)
                </span>
              </div>
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

