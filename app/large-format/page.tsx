"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  DollarSign,
  Layers,
  MapPin,
  Briefcase,
} from "lucide-react";

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
    transition: { staggerChildren: 0.12 },
  },
} as const;

export default function LargeFormatScanPage() {
  // ================= VIDEO HOVER CONTROL =================
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleMouseEnter = (index: number) => {
    setHoveredCard(index);

    const video = videoRefs.current[index];

    if (!video) return;

    // เริ่มจากเฟรมแรกทุกครั้ง
    video.currentTime = 0;

    // เล่นเมื่อ Hover
    video.play().catch((error) => {
      console.log("Video play interrupted:", error);
    });
  };

  const handleMouseLeave = (index: number) => {
    const video = videoRefs.current[index];

    if (video) {
      // หยุดวิดีโอ
      video.pause();

      // กลับไปเฟรมแรก
      try {
        video.currentTime = 0;
      } catch {
        // ignore
      }
    }

    setHoveredCard(null);
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
            สแกนแบบแปลน A0 เอกสารขนาดใหญ่
          </h1>

          <p className="text-lg text-slate-600 leading-8">
            บริการรับสแกนเอกสารขนาดใหญ่พิเศษและแบบแปลนขนาด{" "}
            <span className="text-blue-700 font-semibold mx-1">
              A2, A1, A0
            </span>{" "}
            ด้วยเครื่องสแกนหน้ากว้างสูงสุด 36 นิ้ว (90 เซนติเมตร)
            ให้ความคมชัดและความละเอียดสูง รองรับทั้งแบบสีและขาว-ดำ
            จากต้นฉบับที่เป็นกระดาษ ผ้า หรือไวนิล
            พร้อมบริการรับพรินต์และถ่ายแบบแปลน/พิมพ์เขียวอย่างครบวงจร
            ไม่มีขั้นต่ำ บันทึกไฟล์เป็น{" "}
            <span className="font-semibold text-slate-800">
              PDF, TIFF
            </span>{" "}
            หรือ{" "}
            <span className="font-semibold text-slate-800">
              JPEG File
            </span>
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
            ประเภทเอกสารขนาดใหญ่และข้อดีของระบบดิจิทัล
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
                title: "รองรับแบบแปลนและพิมพ์เขียว",
                desc: "สแกนแปลงไฟล์พิมพ์เขียว แบบแปลนวิศวกรรม/สถาปัตยกรรม และกระดาษไขทุกประเภท",
              },
              {
                title: "แผนที่และภาพถ่ายดาวเทียม",
                desc: "จัดเก็บแผนที่หน่วยงาน ภาพถ่ายทางอากาศขนาดใหญ่ที่มีความพิกเซลสูงได้อย่างคมชัด",
              },
              {
                title: "งานภาพวาด ภาพถ่าย และสิ่งพิมพ์",
                desc: "สแกนภาพขนาดใหญ่ หน้าหนังสือพิมพ์เก่า หรือผลงานศิลปะบนวัสดุกระดาษ ผ้า และไวนิล",
              },
              {
                title: "ระบบไฟล์ PDF พกพาสะดวก",
                desc: "รวมแบบก่อสร้างจำนวนหลาย ๆ แบบไว้ภายใต้ไฟล์ PDF เดียว บันทึกลง CD หรือ Flash Drive ได้ง่าย",
              },
              {
                title: "ส่งต่อข้อมูลและทำงานร่วมกัน",
                desc: "สามารถส่งอีเมลหรืออัปโหลดข้อมูลให้ทีมงานใช้งานร่วมกันได้ทันทีทุกที่ทุกเวลา",
              },
              {
                title: "พิมพ์ซ้ำได้คุณภาพสูง",
                desc: "นำไปพรินต์ออกทาง Printer หรือ Plotter เพื่อย่อ-ขยายลงกระดาษขนาดต่าง ๆ โดยยังคงความคมชัดใกล้เคียงต้นฉบับ",
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
              เราเพียบพร้อมด้วยเครื่องสแกนเนอร์หน้ากว้างพิเศษแบบเฉพาะทาง
              จึงเน้นการดูแลที่ศูนย์บริการส่วนกลาง
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
                เนื่องจากกระบวนการแปลงไฟล์เอกสารหน้ากว้างจำเป็นต้องอาศัยชุดเครื่องจักรขนาดใหญ่ในการประมวลผล
                บริการนี้จึงเปิด{" "}
                <strong>ให้บริการแบบ Offsite Service เท่านั้น</strong>{" "}
                โดยลูกค้าจัดส่งแบบแปลนหรือเอกสารเข้ามาดำเนินงานที่ศูนย์สแกนเอกสาร
              </p>

              <p className="text-blue-700 leading-7 text-sm font-semibold bg-blue-50/75 p-4 rounded-xl border border-blue-100">
                💡 พิเศษ! ในกรณีที่เอกสารขนาดใหญ่มีจำนวนมาก
                ทางบริษัทฯ จะจัดส่งเจ้าหน้าที่เข้าไปบริการ รับ-ส่ง
                เอกสารของท่าน ฟรี! ถึงที่โดยไม่มีค่าใช้จ่ายเพิ่มเติม
              </p>
            </motion.div>
          </div>
        </section>

        {/* ================= SCOPE OF WORK SECTION ================= */}
        <section className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-slate-950 mb-4">
              ตัวอย่างมาตรฐานการดำเนินงาน (Scope of Work)
            </h2>

            <p className="text-slate-600">
              โครงสร้างและขอบเขตการจัดทำระดับมืออาชีพเพื่อความพึงพอใจและมาตรฐานความปลอดภัยสูงสุด
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                label: "ขอบเขตต้นฉบับ",
                val: "เอกสารประเภทแบบแปลน ขนาด A0 จำนวน 300 แผ่น",
              },
              {
                label: "ความละเอียดการสแกน",
                val: "สแกนสี หรือ ขาว-ดำ ตามต้นฉบับ ความละเอียดมาตรฐาน 300 dpi",
              },
              {
                label: "การบริหารจัดการไฟล์",
                val: "ตั้งชื่อ File ตามชื่อหรือรหัสเอกสารเฉพาะ (1 File ต่อ 1 ชุด)",
              },
              {
                label: "ฟอร์แมตปลายทาง",
                val: "บันทึกและรวบรวมข้อมูลงวดงานในรูปแบบ PDF File",
              },
              {
                label: "สื่อในการส่งมอบ",
                val: "จัดส่งและส่งมอบงานในรูปแบบ Flash Drive จำนวน 1 ชุด",
              },
              {
                label: "สถานที่ดำเนินงาน",
                val: "ดำเนินการอย่างเป็นระบบ ณ ศูนย์ปฏิบัติการของบริษัทฯ",
              },
              {
                label: "ระยะเวลาส่งมอบ",
                val: "ระยะเวลาดำเนินงานและควบคุมคุณภาพรวมภายใน 30 วัน",
              },
              {
                label: "การรับประกันผลงาน",
                val: "รับประกันคุณภาพของงานสแกนและโครงสร้างไฟล์เป็นระยะเวลา 1 ปี",
              },
              {
                label: "ความปลอดภัยขั้นสูง",
                val: "รับประกันความปลอดภัยของข้อมูลและทำลายตามมาตรฐานข้อตกลง",
              },
            ].map((scope, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.04 }}
                className="bg-white rounded-xl p-5 border border-slate-200/60 shadow-sm flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Briefcase size={16} />
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    {scope.label}
                  </h4>

                  <p className="text-slate-800 text-sm font-medium leading-relaxed">
                    {scope.val}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= PORTFOLIO / SHOWCASE SECTION ================= */}
        <section className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-slate-950 mb-4">
              ภาพผลงานการดำเนินงานของเรา
            </h2>

            <p className="text-slate-600">
              ตัวอย่างกระบวนการสแกนเอกสารหน้ากว้าง การถ่ายแบบแปลน และผลงานพิมพ์เขียวดิจิทัล
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "งานสแกนแผนที่และแบบแปลน A0",
                desc: "ระบบสแกนหน้ากว้างพิเศษที่เก็บครบทุกรายละเอียดสเกล เส้นพิมพ์เขียวคมชัดไม่ตกหล่น",
                video: "/image/largepaper1.mp4",
              },
              {
                title: "บริการ Plot แบบแปลนและพิมพ์เขียว",
                desc: "เครื่อง Plotter ความละเอียดสูง ถ่ายเอกสารขนาดใหญ่ลงกระดาษเกรดดี รวดเร็ว ไม่มีขั้นต่ำ",
                video: "/image/largepaper2.mp4",
              },
              {
                title: "การแปลงข้อมูลดิจิทัลพร้อมใช้งาน",
                desc: "รวมเล่มแบบก่อสร้างเข้าสู่รูปแบบ PDF คัดแยกโฟลเดอร์รหัสเพื่อง่ายต่อการเปิดทำงานร่วมกัน",
                video: "/image/largepaper3.mp4",
              },
            ].map((work, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                onMouseEnter={() => handleMouseEnter(idx)}
                onMouseLeave={() => handleMouseLeave(idx)}
                whileHover={{
                  scale: 1.08,
                  boxShadow:
                    "0 25px 50px -12px rgba(59, 130, 246, 0.25)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 18,
                }}
                className="
                  bg-white
                  rounded-2xl
                  shadow-sm
                  border border-slate-100
                  overflow-hidden
                  group
                  cursor-pointer
                  relative
                  z-10
                  hover:z-20
                "
              >
                {/* ================= VIDEO AREA ================= */}
                <div className="h-56 relative overflow-hidden bg-slate-200">

                  <video
                    ref={(el) => {
                      videoRefs.current[idx] = el;
                    }}
                    src={work.video}
                    muted
                    loop
                    playsInline
                    preload="auto"
                    onLoadedData={(e) => {
                      const video = e.currentTarget;

                      // แสดงเฟรมแรกทันที
                      video.pause();
                      video.currentTime = 0;
                    }}
                    className="
                      absolute
                      inset-0
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-125
                    "
                  />

                  {/* Overlay ตอนยังไม่ได้ Hover */}
                  <div
                    className={`
                      absolute
                      inset-0
                      bg-blue-950/10
                      pointer-events-none
                      transition-opacity
                      duration-300
                      ${
                        hoveredCard === idx
                          ? "opacity-0"
                          : "opacity-100"
                      }
                    `}
                  />

                  {/* ข้อความก่อน Hover */}
                  <div
                    className={`
                      absolute
                      bottom-4
                      left-1/2
                      -translate-x-1/2
                      z-20
                      px-4
                      py-2
                      rounded-full
                      bg-black/55
                      backdrop-blur-sm
                      text-white
                      text-xs
                      font-medium
                      whitespace-nowrap
                      transition-all
                      duration-300
                      ${
                        hoveredCard === idx
                          ? "opacity-0 translate-y-2"
                          : "opacity-100 translate-y-0"
                      }
                    `}
                  >
                    ชี้เพื่อเล่นวิดีโอ
                  </div>

                  {/* สถานะกำลังเล่น */}
                  <div
                    className={`
                      absolute
                      top-4
                      right-4
                      z-20
                      px-3
                      py-1.5
                      rounded-full
                      bg-blue-600/90
                      backdrop-blur-sm
                      text-white
                      text-[10px]
                      font-semibold
                      transition-all
                      duration-300
                      ${
                        hoveredCard === idx
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 -translate-y-2"
                      }
                    `}
                  >
                    PLAYING
                  </div>
                </div>

                {/* ================= DETAIL ================= */}
                <div className="p-6 bg-white relative z-10">
                  <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {work.title}
                  </h3>

                  <p className="text-slate-600 text-xs leading-6">
                    {work.desc}
                  </p>
                </div>
              </motion.div>
            ))}
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
              อัตราค่าบริการการจัดการเอกสารขนาดใหญ่จะขึ้นอยู่กับองค์ประกอบความละเอียดและประเภทวัสดุ
              โดยมีรายละเอียดสำคัญดังนี้:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 text-sm text-slate-200">
              <div className="flex items-center gap-3 bg-white/5 px-4 py-3 rounded-xl border border-white/10">
                <span className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold font-mono text-white shrink-0">
                  1
                </span>

                <span>
                  ประเภทวัสดุ (แบบแปลน, พิมพ์เขียว, กระดาษไข, ภาพวาด, ผ้า,
                  ไวนิล ฯลฯ)
                </span>
              </div>

              <div className="flex items-center gap-3 bg-white/5 px-4 py-3 rounded-xl border border-white/10">
                <span className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold font-mono text-white shrink-0">
                  2
                </span>

                <span>ขนาดของหน้าเอกสาร (A0, A1, A2)</span>
              </div>

              <div className="flex items-center gap-3 bg-white/5 px-4 py-3 rounded-xl border border-white/10 sm:col-span-2">
                <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold font-mono text-white shrink-0">
                  3
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                  <span>ความละเอียดในการประมวลผลไฟล์สแกน:</span>

                  <span className="text-blue-300 font-semibold">
                    ค่ามาตรฐานวิศวกรรม: 300 dpi
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/5 px-4 py-3 rounded-xl border border-white/10">
                <span className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold font-mono text-white shrink-0">
                  4
                </span>

                <span>
                  จำนวนปริมาณรวม (ยิ่งสแกนมาก อัตราเฉลี่ยจะถูกลง)
                </span>
              </div>

              <div className="flex items-center gap-3 bg-white/5 px-4 py-3 rounded-xl border border-white/10">
                <span className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold font-mono text-white shrink-0">
                  5
                </span>

                <span>
                  สื่อและช่องทางส่งมอบผลงาน (DVD, Flash Drive)
                </span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 text-center">
              <a
                href="/contact"
                className="inline-flex px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition shadow-lg shadow-blue-900/40"
              >
                ติดต่อขอรับใบเสนอราคาโครงการ
              </a>
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}