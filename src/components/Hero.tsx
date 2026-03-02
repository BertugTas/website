"use client";

import { useEffect, useRef } from "react";
import { Github, Linkedin, Mail, ArrowDown, Code2, Database, BarChart3 } from "lucide-react";

const roles = ["Data Scientist", "Business Intelligence", "ML Engineer", "Full-Stack Developer"];

export default function Hero() {
  const roleRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const type = () => {
      const current = roles[roleIndex];
      if (roleRef.current) {
        if (!isDeleting) {
          roleRef.current.textContent = current.slice(0, charIndex + 1);
          charIndex++;
          if (charIndex === current.length) {
            isDeleting = true;
            timer = setTimeout(type, 2000);
            return;
          }
        } else {
          roleRef.current.textContent = current.slice(0, charIndex - 1);
          charIndex--;
          if (charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
          }
        }
      }
      timer = setTimeout(type, isDeleting ? 60 : 100);
    };

    timer = setTimeout(type, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Background orbs */}
      <div
        className="orb w-96 h-96 bg-indigo-600"
        style={{ top: "10%", left: "-10%", animationDelay: "0s" }}
      />
      <div
        className="orb w-72 h-72 bg-purple-600"
        style={{ top: "60%", right: "-5%", animationDelay: "3s" }}
      />
      <div
        className="orb w-64 h-64 bg-pink-600"
        style={{ bottom: "10%", left: "40%", animationDelay: "5s" }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-indigo-500/30 text-sm text-indigo-300 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Dokuz Eylül Üniversitesi · Bilgisayar Mühendisliği
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <span className="text-white">Bertuğ </span>
          <span className="gradient-text">Taş</span>
        </h1>

        {/* Typewriter role */}
        <div className="text-2xl md:text-3xl font-mono text-indigo-400 mb-6 h-10 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <span ref={roleRef} />
          <span className="animate-pulse">|</span>
        </div>

        {/* Description */}
        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: "0.3s" }}>
          Veri bilimi ve iş zekası alanında uzmanlaşan, makine öğrenmesi modelleri
          geliştiren ve veriden anlamlı içgörüler çıkaran bir yazılım geliştiricisiyim.
          İzmir merkezli, global ölçekte çalışıyorum.
        </p>

        {/* Feature chips */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 animate-slide-up" style={{ animationDelay: "0.4s" }}>
          {[
            { icon: <Database size={14} />, label: "SQL & PostgreSQL" },
            { icon: <BarChart3 size={14} />, label: "Power BI & DAX" },
            { icon: <Code2 size={14} />, label: "Python & ML" },
          ].map((chip) => (
            <span
              key={chip.label}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-slate-300 border border-slate-700"
            >
              <span className="text-indigo-400">{chip.icon}</span>
              {chip.label}
            </span>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: "0.5s" }}>
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5"
          >
            Projelerimi Gör
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-xl glass border border-slate-700 hover:border-indigo-500/50 text-slate-200 font-semibold transition-all duration-200 hover:-translate-y-0.5"
          >
            İletişime Geç
          </a>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-5 animate-slide-up" style={{ animationDelay: "0.6s" }}>
          {[
            { icon: <Github size={20} />, href: "https://github.com/BertugTas", label: "GitHub" },
            { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/bertuğ-taş-bb20562b5", label: "LinkedIn" },
            { icon: <Mail size={20} />, href: "mailto:bertugtaas@gmail.com", label: "Email" },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="w-11 h-11 flex items-center justify-center rounded-xl glass border border-slate-700 text-slate-400 hover:text-indigo-400 hover:border-indigo-500/50 transition-all duration-200 hover:-translate-y-1"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-indigo-400 transition-colors animate-bounce"
        aria-label="Aşağı kaydır"
      >
        <ArrowDown size={22} />
      </a>
    </section>
  );
}
