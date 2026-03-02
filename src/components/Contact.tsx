"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const links = [
  { label: "E-posta", value: "bertugtaas@gmail.com", href: "mailto:bertugtaas@gmail.com" },
  { label: "GitHub", value: "github.com/BertugTas", href: "https://github.com/BertugTas" },
  { label: "LinkedIn", value: "Bertuğ Taş", href: "https://linkedin.com/in/bertuğ-taş-bb20562b5" },
  { label: "ResearchGate", value: "Akademik Profil", href: "https://www.researchgate.net" },
];

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="py-28 px-6 border-t border-white/5" ref={sectionRef}>
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-16">
          <div className="reveal">
            <span className="font-mono text-xs text-white/20 tracking-widest uppercase">04 / İletişim</span>
          </div>

          <div className="md:col-span-2 reveal">
            <p className="text-white/50 text-base leading-relaxed mb-10 max-w-md">
              Veri bilimi projeleri, iş zekası çözümleri veya yazılım geliştirme
              konularında iş birliği için ulaşabilirsiniz.
            </p>

            <div className="divide-y divide-white/5">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-4 hover:bg-white/[0.02] -mx-4 px-4 transition-colors"
                >
                  <div>
                    <div className="font-mono text-xs text-white/20 mb-0.5">{link.label}</div>
                    <div className="text-sm text-white/60 group-hover:text-white transition-colors">
                      {link.value}
                    </div>
                  </div>
                  <ArrowUpRight size={14} className="text-white/15 group-hover:text-white/50 transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
