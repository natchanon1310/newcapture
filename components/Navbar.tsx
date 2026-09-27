"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const menus = [
  { name: "หน้าแรก", href: "/" },
  { name: "สแกนเอกสาร", href: "/scandoc" },
  { name: "สแกนไมโครฟิล์ม", href: "/microfilm" },
  { name: "สแกนเอกสาร A0", href: "/large-format" },
  { name: "ลูกค้าของเรา", href: "/customer" },
  { name: "ติดต่อเรา", href: "/contactus" },
];

export default function NavbarCapsule() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 max-w-7xl mx-auto">
      <div className="bg-white/80 backdrop-blur-xl border border-slate-200/60 shadow-lg shadow-slate-100/50 rounded-2xl h-18 flex items-center justify-between px-6 transition-all">
        
        {/* Logo */}
        <Link href="/" className="flex items-center h-full py-0 transition-transform active:scale-95">
          <Image
            src="/image/logo_newcapture-removebg-preview.png"
            alt="NewCapture Logo"
            width={280}
            height={72}
            priority
            className="h-full w-auto object-contain scale-125 origin-left"
          />
        </Link>

        {/* Desktop Menu with Hover Pill Effect */}
        <nav className="hidden md:flex items-center gap-2 relative">
          {menus.map((menu, idx) => {
            const isActive = pathname === menu.href;
            return (
              <Link
                key={menu.href}
                href={menu.href}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-colors duration-300 ${
                  isActive ? "text-blue-700" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {hoveredIndex === idx && (
                  <motion.span
                    layoutId="hoverBackground"
                    className="absolute inset-0 bg-slate-100 rounded-xl -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}

                <span>{menu.name}</span>

                {isActive && (
                  <motion.span
                    className="absolute bottom-1 left-1/2 w-1.5 h-1.5 bg-blue-900 rounded-full"
                    animate={{ x: ["-50%", "-120%", "20%", "-50%"] }}
                    transition={{
                      repeat: Infinity,
                      duration: 0.6,
                      ease: "linear",
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

       

        {/* Mobile Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-slate-700 p-1">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown matching Capsule style */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-2 bg-white/95 backdrop-blur-lg border border-slate-200/60 rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="flex flex-col p-4 space-y-2">
              {menus.map((menu) => (
                <Link
                  key={menu.href}
                  href={menu.href}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-3 rounded-xl text-base transition-colors ${
                    pathname === menu.href ? "bg-blue-50 text-blue-700 font-semibold" : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {menu.name}
                </Link>
              ))}
              
            
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}