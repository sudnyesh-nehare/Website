"use client";
import { motion } from "framer-motion";
const items = [
  { code: "01", title: "Find the gap.", desc: "The problem hiding in plain sight. Everyone accepts it. We don't." },
  { code: "02", title: "Build it right.", desc: "No shortcuts. No hacks. Clean systems built to last." },
  { code: "03", title: "Ship it real.", desc: "Not a prototype. A real product. Real users. Real impact." },
];
export default function WhatsComing() {
  return (
    <section id="work" className="bg-black text-white py-24 md:py-40 px-6 md:px-24 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-white/8" />
      <div className="w-full max-w-4xl mx-auto flex flex-col gap-16 md:gap-24">

        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="font-mono text-[10px] text-white/25 tracking-[0.4em] uppercase">
          — How we work
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} viewport={{ once: true }} className="flex flex-col gap-2">
          <span className="font-pixel text-[clamp(1.6rem,6vw,2.8rem)] text-white leading-snug">The</span>
          <span className="font-pixel text-[clamp(1.6rem,6vw,2.8rem)] text-transparent leading-snug" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}>process.</span>
        </motion.div>

        <div className="flex flex-col gap-0">
          {items.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.15 }} viewport={{ once: true }} className="flex flex-col gap-3 py-10 border-b border-white/5 group">
              <span className="font-mono text-[10px] text-white/20 tracking-widest">{item.code}</span>
              <h3 className="font-pixel text-[15px] md:text-xl text-white group-hover:text-white/50 transition-colors duration-500">{item.title}</h3>
              <p className="font-mono text-[13px] md:text-base text-white/35 leading-relaxed max-w-xs">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
