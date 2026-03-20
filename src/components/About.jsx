"use client";
import { motion } from "framer-motion";
const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay },
  viewport: { once: true },
});
export default function About() {
  return (
    <section id="about" className="bg-black text-white py-24 md:py-40 px-6 md:px-24 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-white/8" />
      <div className="w-full max-w-4xl mx-auto flex flex-col gap-16 md:gap-24">

        {/* Label */}
        <motion.p {...fadeUp(0)} className="font-mono text-[10px] text-white/25 tracking-[0.4em] uppercase">
          — About
        </motion.p>

        {/* Headline — big, breathing */}
        <motion.div {...fadeUp(0.15)} className="flex flex-col gap-2">
          <span className="font-pixel text-[clamp(1.6rem,6vw,2.8rem)] text-white leading-snug">A lab for</span>
          <span className="font-pixel text-[clamp(1.6rem,6vw,2.8rem)] text-transparent leading-snug" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}>hard problems.</span>
        </motion.div>

        {/* One clean sentence — not a paragraph */}
        <motion.p {...fadeUp(0.25)} className="font-mono text-[15px] md:text-lg text-white/50 leading-[1.9] max-w-sm">
          We find the gaps everyone ignores.<br />Then we build something about it.
        </motion.p>

        {/* Stats — separated clearly, not cramped */}
        <motion.div {...fadeUp(0.35)} className="flex flex-col gap-8">
          <span className="font-mono text-[10px] text-white/20 tracking-[0.4em] uppercase">By the numbers</span>
          <div className="grid grid-cols-2 gap-x-8 gap-y-10">
            {[
              { val: "7mo", label: "at DRDO, Ministry of Defence" },
              { val: "2×", label: "Hackathon champion" },
              { val: "01", label: "Published research paper" },
              { val: "∞", label: "Problems still unsolved" },
            ].map((s, i) => (
              <motion.div key={i} {...fadeUp(0.4 + i * 0.1)} className="flex flex-col gap-2 border-t border-white/8 pt-4">
                <p className="font-pixel text-[clamp(1.4rem,5vw,2rem)] text-white">{s.val}</p>
                <p className="font-mono text-[11px] text-white/30 leading-relaxed">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
