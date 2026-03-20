"use client";
import { useEffect, useState } from "react";
export default function Footer() {
  const [time, setTime] = useState("--:--:--");
  useEffect(() => {
    const update = () => {
      const ist = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
      const h = String(ist.getHours()).padStart(2, "0");
      const m = String(ist.getMinutes()).padStart(2, "0");
      const s = String(ist.getSeconds()).padStart(2, "0");
      setTime(`${h}:${m}:${s}`);
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <footer className="bg-black border-t border-white/10 px-6 md:px-24 py-14">
      <div className="w-full max-w-4xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="flex flex-col gap-2">
            <span className="font-pixel text-base text-white">SymbiansLab</span>
            <span className="font-mono text-sm text-white/30">by Sudnyesh Nehare</span>
            <span className="font-mono text-sm text-white/20">Nagpur, India</span>
            <span className="font-mono text-sm text-white/20 mt-1">We build what others overlook.</span>
          </div>
          <div className="flex gap-14">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[10px] text-white/20 uppercase tracking-widest">Pages</span>
              <a href="#about" className="font-mono text-sm text-white/45 hover:text-white transition-colors">About</a>
              <a href="#work" className="font-mono text-sm text-white/45 hover:text-white transition-colors">How We Work</a>
              <a href="#contact" className="font-mono text-sm text-white/45 hover:text-white transition-colors">Contact</a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[10px] text-white/20 uppercase tracking-widest">Connect</span>
              <a href="mailto:symbianslab@gmail.com" className="font-mono text-sm text-white/45 hover:text-white transition-colors">Email</a>
              <a href="https://linkedin.com/in/sudnyeshnehare" target="_blank" className="font-mono text-sm text-white/45 hover:text-white transition-colors">LinkedIn</a>
              <a href="https://x.com/sudnyesh_" target="_blank" className="font-mono text-sm text-white/45 hover:text-white transition-colors">X</a>
              <a href="https://www.instagram.com/iamsudnyesh" target="_blank" className="font-mono text-sm text-white/45 hover:text-white transition-colors">Instagram</a>
              <a href="https://www.youtube.com/@SymbiansLab" target="_blank" className="font-mono text-sm text-white/45 hover:text-white transition-colors">YouTube</a>
            </div>
          </div>
        </div>
        <div className="w-full h-px bg-white/8" />
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <span className="font-mono text-[11px] text-white/20">© 2025 SymbiansLab. All rights reserved.</span>
          <div className="flex items-center gap-2">
            <span className="font-mono text-[11px] text-white/20 uppercase tracking-widest">Nagpur IST</span>
            <span className="font-pixel text-[11px] md:text-sm text-white/50">{time}<span className="blink text-white/25">_</span></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
