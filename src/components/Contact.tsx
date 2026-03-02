"use client";

import { useEffect, useRef } from "react";
import { Mail, Github, Linkedin, BookOpen, Send } from "lucide-react";

const contactLinks = [
  {
    icon: <Mail size={20} />,
    label: "E-posta",
    value: "bertugtaas@gmail.com",
    href: "mailto:bertugtaas@gmail.com",
    color: "hover:border-red-500/50 hover:text-red-400",
  },
  {
    icon: <Github size={20} />,
    label: "GitHub",
    value: "github.com/BertugTas",
    href: "https://github.com/BertugTas",
    color: "hover:border-slate-400/50 hover:text-slate-200",
  },
  {
    icon: <Linkedin size={20} />,
    label: "LinkedIn",
    value: "Bertuğ Taş",
    href: "https://linkedin.com/in/bertuğ-taş-bb20562b5",
    color: "hover:border-blue-500/50 hover:text-blue-400",
  },
  {
    icon: <BookOpen size={20} />,
    label: "ResearchGate",
    value: "Akademik Profil",
    href: "https://www.researchgate.net",
    color: "hover:border-green-500/50 hover:text-green-400",
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );

    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="py-24 px-6 relative bg-[#070e1a]" ref={sectionRef}>
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-64 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="text-indigo-400 text-sm font-mono font-medium tracking-widest uppercase">
            04. İletişim
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Benimle İletişime Geçin
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left - Text */}
          <div className="reveal">
            <h3 className="text-2xl font-bold text-white mb-4">
              Birlikte Çalışalım
            </h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              Veri bilimi projeleri, iş zekası çözümleri veya yazılım geliştirme
              konularında iş birliği yapmak ister misiniz? Her türlü proje
              fikri ve fırsat için benimle iletişime geçebilirsiniz.
            </p>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              Staj fırsatları, freelance projeler veya akademik iş birlikleri
              konusunda açık kapı politikam var.
            </p>

            {/* Feature list */}
            <div className="space-y-3">
              {[
                "Veri Analizi & Görselleştirme",
                "Machine Learning Model Geliştirme",
                "Power BI Dashboard Tasarımı",
                "Veritabanı Tasarımı & Optimizasyon",
                "Python Otomasyon Çözümleri",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                  <span className="text-slate-400 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Contact cards */}
          <div className="space-y-4 reveal">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className={`flex items-center gap-4 p-4 rounded-xl glass border border-slate-700 transition-all duration-200 group ${link.color} hover:-translate-x-1`}
              >
                <div className="text-slate-400 group-hover:scale-110 transition-transform duration-200">
                  {link.icon}
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-mono">{link.label}</div>
                  <div className="text-sm text-slate-200 font-medium">{link.value}</div>
                </div>
                <Send size={14} className="ml-auto text-slate-700 group-hover:text-current transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
