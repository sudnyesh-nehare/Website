"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
const PixelGame = dynamic(() => import("@/components/PixelGame"), { ssr: false });
const fade = (delay) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay },
});
export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black px-6 md:px-8">
      <PixelGame />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black z-10" />
      <div className="relative z-20 flex flex-col items-center text-center w-full max-w-3xl mx-auto">
        <motion.p {...fade(0.1)} className="font-mono text-[11px] md:text-base text-white/40 mb-6 md:mb-8 tracking-[0.3em] uppercase">
          Est. 2025 — Nagpur, India
        </motion.p>
        <motion.h1 {...fade(0.3)} className="font-pixel leading-loose mb-3">
          <span className="block text-[clamp(1.8rem,10vw,6rem)] text-white tracking-tight whitespace-nowrap">
            SymbiansLab
          </span>
        </motion.h1>
        <motion.p {...fade(0.6)} className="font-mono text-[11px] md:text-base text-white/30 mb-6 tracking-[0.2em]">
          by Sudnyesh Nehare
        </motion.p>
        <motion.div {...fade(0.7)} className="w-10 h-px bg-white/10 mb-6" />
        <motion.p {...fade(0.9)} className="font-mono text-[13px] md:text-lg text-white/60 leading-relaxed mb-10 md:mb-14 tracking-wide max-w-[280px] md:max-w-md">
          We build what others overlook.
        </motion.p>
        <motion.div {...fade(1.1)} className="flex flex-col sm:flex-row gap-3 w-full max-w-[280px] sm:max-w-none sm:w-auto">
          <a href="#about" className="font-mono text-[13px] md:text-base text-black bg-white px-8 md:px-10 py-4 hover:bg-white/80 transition-all text-center tracking-widest uppercase w-full sm:w-auto">
            Enter
          </a>
          <a href="#contact" className="font-mono text-[13px] md:text-base text-white/60 border border-white/20 px-8 md:px-10 py-4 hover:border-white/60 hover:text-white transition-all text-center tracking-widest uppercase w-full sm:w-auto">
            Contact
          </a>
        </motion.div>
      </div>
      <motion.div {...fade(1.6)} className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <motion.p animate={{ opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 1.4 }} className="font-mono text-[10px] text-white/25 tracking-[0.3em] uppercase">
          Scroll
        </motion.p>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.4 }} className="w-px h-6 bg-gradient-to-b from-white/30 to-transparent" />
      </motion.div>
    </section>
  );
}
