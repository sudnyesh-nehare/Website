"use client";
import { motion } from "framer-motion";
const timeline = [
  { code: "00", year: "2022", title: "Signal detected.", desc: "College. First code. Something clicked that did not unclick." },
  { code: "01", year: "2023", title: "Problem identified.", desc: "Saw the gap. Stopped accepting it. Started building instead." },
  { code: "02", year: "2024", title: "Proof of work.", desc: "DRDO. Hackforge25. A research paper. The lab started taking shape." },
  { code: "03", year: "2025", title: "SymbiansLab.", desc: "The lab is open. Bring your hardest problems." },
];
export default function Journey() {
  return (
    <section id="journey" className="relative bg-[#080808] text-white py-32 px-6 md:px-20 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <img src="/images/journey-bg.gif" alt="" className="w-full h-full object-cover object-center" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-transparent to-[#080808]" />
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <p className="font-body text-[9px] tracking-[0.4em] uppercase text-[#00FF94]/60 mb-4">// origin.log</p>
          <h2 className="font-display font-bold">
            <span className="block text-[clamp(2.5rem,7vw,6rem)] text-[#EDEDED]">How It</span>
            <span className="block text-[clamp(2.5rem,7vw,6rem)] text-[#EDEDED]/10" style={{ WebkitTextStroke: "1px rgba(237,237,237,0.2)" }}>Started.</span>
          </h2>
        </motion.div>
        <div className="flex flex-col gap-20">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-[120px_1fr] gap-6 md:gap-12 group"
            >
              <div className="flex flex-col gap-1">
                <span className="font-body text-[9px] tracking-[0.3em] text-[#00FF94]/40">{item.code}</span>
                <span className="font-body text-[11px] tracking-[0.2em] text-[#EDEDED]/20">{item.year}</span>
              </div>
              <div>
                <h3 className="font-display text-2xl md:text-4xl font-bold text-[#EDEDED] mb-3 group-hover:text-[#00FF94] transition-colors duration-500">{item.title}</h3>
                <p className="font-body text-[11px] md:text-xs tracking-wide text-[#EDEDED]/35 leading-relaxed max-w-lg">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
