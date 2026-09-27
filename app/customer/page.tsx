"use client";

import { motion } from "framer-motion";

// 🌟 ตัวควบคุมแอนิเมชันสำหรับ Container หลัก เพื่อสั่งให้ลูก ๆ ค่อย ๆ โผล่เรียงตามลำดับ
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // 🌟 ความเร็วในการเยื้องลำดับการโผล่ (0.05 วินาทีต่อชิ้น)
      delayChildren: 0.1     // หน่วงเวลาก่อนเริ่มโผล่เล็กน้อยหลังจากเห็นคอมโพเนนต์
    }
  }
} as const;

// 🌟 แอนิเมชันสำหรับโลโก้แต่ละชิ้น: ค่อย ๆ เฟดและขยายตัวขึ้นจากด้านล่างอย่างนุ่มนวล
const minimalFadeIn = {
  hidden: { 
    opacity: 0, 
    y: 12,      // ขยับลงไปด้านล่างเล็กน้อยก่อนโผล่
    scale: 0.97  // ย่อขนาดลงเล็กน้อย
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: [0.16, 1, 0.3, 1] // คิวบิกเบซิเยร์สไตล์โมเดิร์น (EaseOut Quart) ให้ความรู้สึกลื่นไหลสม่ำเสมอ
    }
  }
} as const;

const clients = [
  { id: 1, name: "สจล. (KMITL)", type: "Educational", logoUrl: "/image/KMITL (1).png" },
  { id: 2, name: "หอสมุดมหาวิทยาลัยธรรมศาสตร์", type: "Educational", logoUrl: "/image/หอสมุดมหาวิทยาลัยธรรมศาสตร์ (1).png" },
  { id: 3, name: "หอสมุดดำรงราชานุภาพ", type: "Educational", logoUrl: "/image/หอสมุดดำรงราชานุภาพ.jpg" },
  { id: 4, name: "Wayfit", type: "Corporate", logoUrl: "/image/wayfit (1).png" },
  { id: 5, name: "สสส.", type: "Educational", logoUrl: "/image/สสส (1).png" },
  { id: 6, name: "สภากาชาดไทย", type: "Corporate", logoUrl: "/image/สภากาชาดไทย.jpg" },
  { id: 7, name: "ศูนย์มานุษยวิทยาสิรินธร", type: "Educational", logoUrl: "/image/ศูนย์มานุษยวิทยาสิรินธร.png" },
  { id: 8, name: "มหาวิทยาลัยเกษตรศาสตร์", type: "Corporate", logoUrl: "/image/มหาวิทยาลัยเกษตราศาสตร์ (1).png" },
  { id: 9, name: "กรมอุทยานแห่งชาติ สัตว์ป่า และพันธุ์พืช", type: "Educational", logoUrl: "/image/กรมอุทยานแห่งชาติ สัตว์ป่า และพันธุ์พิช.png" },
  { id: 10, name: "กรมสารบรรณทหารเรือ", type: "Corporate", logoUrl: "/image/กรมสารบรรณทหารเรือ (1).png" },
  { id: 11, name: "กรมส่งเสริมวัฒนธรรม", type: "Educational", logoUrl: "/image/กรมส่งเสริมวัฒธรรม.png" },
  { id: 12, name: "กรมส่งเสริมการเกษตร", type: "Corporate", logoUrl: "/image/กรมส่งเสริมการเกษตร.jpg" },
  { id: 13, name: "กรมยุทธศึกษาทหารเรือ", type: "Educational", logoUrl: "/image/กรมยุทธศึกษาทหารเรือ.png" },
  { id: 14, name: "กรมปศุสัตว์", type: "Corporate", logoUrl: "/image/กรมปศุสัตว์.png" },
  { id: 15, name: "กพฐ.", type: "Educational", logoUrl: "/image/กพฐ (1).png" },
  { id: 16, name: "มหาวิทยาลัยมหิดล", type: "Corporate", logoUrl: "/image/มหาวิทยาลัยมหิดล.png" },
  { id: 17, name: "หอสมุดแห่งชาติ มหาวิทยาลัยธรรมศาสตร์", type: "Educational", logoUrl: "/image/หอสมุดแห่งชาติมหาวิทยลัยธรรมศาสตร์.png" },
  { id: 18, name: "กรมปศุสัตว์", type: "Corporate", logoUrl: "/image/กรมปศุสัตว์.png" },
];

export default function CustomerPage() {
  return (
    <main className="bg-white min-h-screen pt-40 pb-32 text-slate-900 select-none">
      <div className="max-w-6xl mx-auto px-8">
        
        {/* ================= 📸 BRAND GRID CONTAINER ================= */}
        <section>
          {/* เปิดใช้งานระบบผ่อนแรงโผล่แบบแอนิเมชันเยื้องเวลาด้วย variants */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }} // โผล่ครั้งเดียวเมื่อเลื่อนเจอ และเริ่มเล่นเมื่อชิ้นงานพ้นขอบล่างมาแล้ว 120px
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-12 gap-y-20"
          >
            {clients.map((client) => (
              <motion.div
                key={client.id}
                variants={minimalFadeIn} // 🌟 สั่งให้การ์ดพาร์ทเนอร์แต่ละช่องใช้เอฟเฟกต์เฟดพุ่งขึ้นเบา ๆ ตามคิว
                whileHover="hover"
                className="group flex flex-col items-center justify-center cursor-pointer"
              >
                {/* ตัวภาพโลโก้: มิติเงาสามชั้นสไตล์ซอฟต์ลักชูรี พร้อมระบบขยายตัวเมื่อชี้ */}
                <motion.div 
                  variants={{
                    hover: { 
                      scale: 1.1, 
                      filter: "brightness(1.03) drop-shadow(0 20px 16px rgba(59, 130, 246, 0.18)) drop-shadow(0 4px 6px rgba(0, 0, 0, 0.04))"
                    }
                  }}
                  initial={{ 
                    filter: "brightness(0.98) drop-shadow(0 4px 6px rgba(0, 0, 0, 0.04)) drop-shadow(0 1px 2px rgba(0, 0, 0, 0.02))" 
                  }}
                  transition={{ type: "spring", stiffness: 240, damping: 24 }}
                  className="w-full h-20 bg-contain bg-center bg-no-repeat opacity-90 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
                  style={{ 
                    backgroundImage: `url('${client.logoUrl}')`
                  }}
                />

                {/* ข้อความกำกับใต้โลโก้ */}
                <div className="mt-6 text-center w-full px-1">
                  <p className="text-[11px] font-normal tracking-wide text-slate-800 truncate group-hover:text-blue-700 transition-colors duration-300">
                    {client.name}
                  </p>
                  <p className="text-[9px] text-slate-400 font-light tracking-widest uppercase mt-1 opacity-80">
                    {client.type}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

      </div>
    </main>
  );
}