"use client";
import { motion } from "framer-motion";
import Image from "next/image";
const socials = [
  { href: "mailto:symbianslab@gmail.com", label: "Email", icon: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"><rect x="2" y="4" width="20" height="16"/><polyline points="2,4 12,13 22,4"/></svg>) },
  { href: "https://linkedin.com/in/sudnyeshnehare", label: "LinkedIn", icon: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"><rect x="2" y="2" width="20" height="20"/><line x1="7" y1="10" x2="7" y2="17"/><line x1="7" y1="7" x2="7" y2="7.5"/><line x1="11" y1="10" x2="11" y2="17"/><path d="M11 13c0-2 6-2 6 0v4"/></svg>) },
  { href: "https://x.com/sudnyesh_", label: "X", icon: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"><line x1="4" y1="4" x2="20" y2="20"/><line x1="20" y1="4" x2="4" y2="20"/></svg>) },
  { href: "https://www.instagram.com/iamsudnyesh", label: "Instagram", icon: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"><rect x="2" y="2" width="20" height="20" rx="4"/><circle cx="12" cy="12" r="5"/><rect x="17" y="5" width="2" height="2" fill="currentColor"/></svg>) },
  { href: "https://www.youtube.com/@SymbiansLab", label: "YouTube", icon: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"><rect x="2" y="5" width="20" height="14" rx="3"/><polygon points="10,9 16,12 10,15" fill="currentColor" stroke="none"/></svg>) },
];
export default function Contact() {
  return (
    <>
      <section id="contact" className="bg-black text-white py-24 md:py-40 px-6 md:px-24 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-white/8" />
        <div className="w-full max-w-4xl mx-auto flex flex-col gap-16 md:gap-24">

          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="font-mono text-[10px] text-white/25 tracking-[0.4em] uppercase">
            — Contact
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} viewport={{ once: true }} className="flex flex-col gap-2">
            <span className="font-pixel text-[clamp(1.6rem,6vw,2.8rem)] text-white leading-snug">Bring your</span>
            <span className="font-pixel text-[clamp(1.6rem,6vw,2.8rem)] text-transparent leading-snug" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}>hardest problem.</span>
          </motion.div>

          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} className="font-mono text-[14px] md:text-lg text-white/40 leading-[1.9] max-w-xs">
            No forms. No filters.<br />Just a direct conversation.
          </motion.p>

          {/* Social icons — clean 2 col on mobile */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }} className="grid grid-cols-2 md:flex md:flex-wrap gap-3">
            {socials.map((s, i) => (
              <motion.a key={i} href={s.href} target={s.href.startsWith("mailto") ? "_self" : "_blank"} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }} viewport={{ once: true }} className="group flex items-center gap-3 border border-white/10 px-4 py-4 hover:border-white hover:bg-white transition-all duration-300">
                <span className="text-white/40 group-hover:text-black transition-colors duration-300 shrink-0">{s.icon}</span>
                <span className="font-mono text-[11px] text-white/40 group-hover:text-black transition-colors duration-300 tracking-wider uppercase">{s.label}</span>
              </motion.a>
            ))}
          </motion.div>

        </div>
      </section>

      {/* Final screen */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black px-6">
        <Image src="/images/final-bg.jpg" alt="Final" fill className="object-cover object-center opacity-10" quality={90} />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black" />
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} className="relative z-10 flex flex-col items-center text-center gap-10 w-full max-w-xs md:max-w-2xl mx-auto">
          <p className="font-mono text-[10px] text-white/20 tracking-[0.4em] uppercase">— End</p>
          <div className="flex flex-col gap-3">
            <span className="font-mono text-[13px] text-white/25 leading-relaxed">The story is still</span>
            <span className="font-pixel text-[clamp(1.4rem,6vw,3.5rem)] text-white leading-snug">being written.</span>
            <span className="font-mono text-[13px] text-white/30 leading-relaxed">Will you be part of it?</span>
          </div>
          <a href="mailto:symbianslab@gmail.com" className="font-mono text-[12px] md:text-base text-black bg-white px-10 py-4 hover:bg-white/85 transition-all tracking-widest uppercase">
            Start Now
          </a>
        </motion.div>
      </section>
    </>
  );
}
