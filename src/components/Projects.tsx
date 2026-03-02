"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "ML Meme Kanseri Sınıflandırma",
    description:
      "Logistic Regression, Random Forest, KNN ve SVM algoritmalarıyla karşılaştırmalı meme kanseri teşhis sistemi.",
    tags: ["Python", "scikit-learn", "pandas"],
    href: "https://github.com/BertugTas/ML-BreastCancer-Classification",
  },
  {
    title: "Beyin MRI Sınıflandırma",
    description:
      "Python tabanlı tıbbi görüntü sınıflandırma projesi. Beyin MRI verisiyle derin öğrenme uygulaması.",
    tags: ["Python", "Deep Learning", "CNN"],
    href: "https://github.com/BertugTas/Brain-MRI-Classification",
  },
  {
    title: "Kariyer İlan Botu",
    description:
      "Playwright ile iş ilanlarını tarayan, Twilio API üzerinden SMS bildirimi gönderen otomasyon aracı.",
    tags: ["Python", "Playwright", "Twilio"],
    href: "https://github.com/BertugTas/Kariyer-ilan-Botu",
  },
  {
    title: "Database Yönetim Arayüzü",
    description:
      "C# Windows Forms ile geliştirilen fatura yönetim sistemi. MS SQL Server backend.",
    tags: ["C#", "SQL Server", "Windows Forms"],
    href: "https://github.com/BertugTas/DataBaseUI",
  },
  {
    title: "AI İçerik Araçları Rehberi",
    description:
      "İçerik üretimi için ücretsiz ve demo AI araçlarını kategorize eden kapsamlı rehber.",
    tags: ["AI", "İçerik", "Araştırma"],
    href: "https://github.com/BertugTas/AI-icerik-araclari",
  },
  {
    title: "Power BI Eğitim Dashboard'ları",
    description:
      "Kurumsal eğitim verilerini DAX ölçümleri ve KPI'larla analiz eden interaktif Power BI raporları.",
    tags: ["Power BI", "DAX", "Excel"],
    href: "https://github.com/BertugTas",
  },
];

export default function Projects() {
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
    <section id="projects" className="py-28 px-6 border-t border-white/5" ref={sectionRef}>
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-16">
          <div className="reveal">
            <span className="font-mono text-xs text-white/20 tracking-widest uppercase">03 / Projeler</span>
          </div>

          <div className="md:col-span-2 reveal">
            <div className="divide-y divide-white/5">
              {projects.map((project) => (
                <a
                  key={project.title}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start justify-between py-6 gap-4 hover:bg-white/[0.02] -mx-4 px-4 transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-white/80 group-hover:text-white transition-colors mb-1.5">
                      {project.title}
                    </h3>
                    <p className="text-sm text-white/35 leading-relaxed mb-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="font-mono text-xs text-white/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="text-white/20 group-hover:text-white/60 flex-shrink-0 mt-0.5 transition-colors"
                  />
                </a>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-white/5">
              <a
                href="https://github.com/BertugTas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/30 hover:text-white transition-colors"
              >
                Tüm projeler GitHub&apos;da →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
