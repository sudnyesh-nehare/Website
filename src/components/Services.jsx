"use client";
import { motion } from "framer-motion";
const services = [
  { title: "Web Development", desc: "Fast, modern, scalable web apps built with Next.js and React.", icon: "01" },
  { title: "Mobile Apps", desc: "Cross-platform mobile apps that work seamlessly on all devices.", icon: "02" },
  { title: "Backend & APIs", desc: "Secure REST APIs, databases, and server infrastructure.", icon: "03" },
  { title: "Cybersecurity", desc: "Network security, vulnerability assessment, and secure system design.", icon: "04" },
  { title: "Dev Tools", desc: "Custom tools and automation to make your workflow faster.", icon: "05" },
  { title: "AI & ML", desc: "Data-driven models and intelligent systems for real problems.", icon: "06" },
];
export default function Services() {
  return (
    <section id="services" className="bg-black text-white py-32 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-white/30 mb-4 font-body">What We Do</p>
          <h2 className="font-display font-bold">
            <span className="block text-[clamp(2.5rem,6vw,5rem)] text-white">Our</span>
            <span className="block text-[clamp(2.5rem,6vw,5rem)] text-transparent" style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.3)" }}>Services.</span>
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-violet-500/40 hover:bg-white/8 transition-all group">
              <p className="font-display text-4xl font-bold text-white/10 group-hover:text-violet-500/30 transition-all mb-4">{s.icon}</p>
              <h3 className="font-display text-lg font-bold text-white mb-2">{s.title}</h3>
              <p className="font-body text-sm text-white/40 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
