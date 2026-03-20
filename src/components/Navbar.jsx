"use client";
import { motion } from "framer-motion";
export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-5 flex items-center justify-between bg-black/80 border-b border-white/10"
    >
      <span className="font-pixel text-[10px] text-white tracking-tight">
        SL<span className="blink">_</span>
      </span>
      <div className="flex items-center gap-6">
        <a href="#about" className="font-pixel text-[7px] text-white/50 hover:text-white transition-colors hidden md:block">&gt; ABOUT</a>
        <a href="#work" className="font-pixel text-[7px] text-white/50 hover:text-white transition-colors hidden md:block">&gt; WORK</a>
        <a href="#contact" className="font-pixel text-[7px] text-white/50 hover:text-white transition-colors hidden md:block">&gt; CONTACT</a>
        <a href="mailto:symbianslab@gmail.com" className="font-pixel text-[7px] text-black bg-white px-4 py-2 hover:bg-white/80 transition-all">
          HIRE_US
        </a>
      </div>
    </motion.nav>
  );
}
