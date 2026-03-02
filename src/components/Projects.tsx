"use client";

import { useEffect, useRef } from "react";
import { Github, ExternalLink, Database, Bot, Brain, Search, FileText, Cpu } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "ML Meme Kanseri Sınıflandırma",
    description:
      "Birden fazla makine öğrenmesi algoritması kullanılarak meme kanseri teşhisi yapan sınıflandırma sistemi. Logistic Regression, Random Forest, KNN ve SVM algoritmalarıyla karşılaştırmalı analiz.",
    tags: ["Python", "scikit-learn", "pandas", "ML"],
    icon: <Cpu size={22} />,
    color: "from-pink-500/20 to-rose-600/20",
    borderColor: "border-pink-500/30",
    iconColor: "text-pink-400",
    github: "https://github.com/BertugTas/ML-BreastCancer-Classification",
    featured: true,
  },
  {
    id: 2,
    title: "Beyin MRI Sınıflandırma",
    description:
      "Beyin MRI görüntülerini analiz eden tıbbi görüntü sınıflandırma projesi. Python tabanlı derin öğrenme ile medikal görüntü işleme alanında çalışma.",
    tags: ["Python", "Deep Learning", "Medical Imaging", "CNN"],
    icon: <Brain size={22} />,
    color: "from-violet-500/20 to-purple-600/20",
    borderColor: "border-violet-500/30",
    iconColor: "text-violet-400",
    github: "https://github.com/BertugTas/Brain-MRI-Classification",
    featured: true,
  },
  {
    id: 3,
    title: "Kariyer İlan Botu",
    description:
      "Playwright kullanarak iş ilanı platformlarını otomatik tarayan, yeni ilanları SMS ile bildiren Python tabanlı web scraping ve otomasyon aracı.",
    tags: ["Python", "Playwright", "Twilio", "Otomasyon"],
    icon: <Search size={22} />,
    color: "from-green-500/20 to-emerald-600/20",
    borderColor: "border-green-500/30",
    iconColor: "text-green-400",
    github: "https://github.com/BertugTas/Kariyer-ilan-Botu",
    featured: true,
  },
  {
    id: 4,
    title: "Database Yönetim Arayüzü",
    description:
      "C# Windows Forms ile geliştirilen veritabanı yönetim uygulaması. MS SQL Server backend ile fatura yönetim sistemi ve kurumsal raporlama.",
    tags: ["C#", "Windows Forms", "SQL Server", "SSMS"],
    icon: <Database size={22} />,
    color: "from-blue-500/20 to-cyan-600/20",
    borderColor: "border-blue-500/30",
    iconColor: "text-blue-400",
    github: "https://github.com/BertugTas/DataBaseUI",
    featured: false,
  },
  {
    id: 5,
    title: "AI İçerik Araçları Rehberi",
    description:
      "İçerik üretimi için ücretsiz ve demo AI araçlarını derleyen kapsamlı rehber. Kategorize edilmiş araç listesi ve kullanım kılavuzları.",
    tags: ["AI Tools", "Content Creation", "Araştırma"],
    icon: <Bot size={22} />,
    color: "from-amber-500/20 to-orange-600/20",
    borderColor: "border-amber-500/30",
    iconColor: "text-amber-400",
    github: "https://github.com/BertugTas/AI-icerik-araclari",
    featured: false,
  },
  {
    id: 6,
    title: "Power BI Eğitim Dashboard'ları",
    description:
      "Kurumsal eğitim verilerini analiz eden Power BI dashboard'ları. DAX ölçümleri, KPI takibi ve interaktif veri görselleştirme.",
    tags: ["Power BI", "DAX", "Excel", "Veri Analizi"],
    icon: <FileText size={22} />,
    color: "from-indigo-500/20 to-blue-600/20",
    borderColor: "border-indigo-500/30",
    iconColor: "text-indigo-400",
    github: "https://github.com/BertugTas",
    featured: false,
  },
];

export default function Projects() {
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

  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 px-6 relative" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="text-indigo-400 text-sm font-mono font-medium tracking-widest uppercase">
            03. Projeler
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Öne Çıkan Çalışmalarım
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mx-auto mt-4" />
        </div>

        {/* Featured projects */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {featured.map((project, i) => (
            <div
              key={project.id}
              className={`glass rounded-2xl p-6 border ${project.borderColor} glow group hover:-translate-y-2 transition-all duration-300 reveal`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center ${project.iconColor}`}>
                  {project.icon}
                </div>
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-white transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-indigo-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-md bg-slate-800/80 text-slate-400 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Other projects */}
        <div className="grid md:grid-cols-3 gap-4">
          {others.map((project, i) => (
            <div
              key={project.id}
              className={`glass rounded-xl p-5 border ${project.borderColor} hover:-translate-y-1 transition-all duration-200 reveal group`}
              style={{ transitionDelay: `${(i + 3) * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className={`${project.iconColor} opacity-80`}>{project.icon}</div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-slate-300 transition-colors"
                >
                  <ExternalLink size={15} />
                </a>
              </div>
              <h3 className="text-white font-semibold text-sm mb-1.5 group-hover:text-indigo-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed mb-3 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-500 font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12 reveal">
          <a
            href="https://github.com/BertugTas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-slate-700 hover:border-indigo-500/50 text-slate-300 hover:text-indigo-300 font-medium transition-all duration-200 hover:-translate-y-0.5"
          >
            <Github size={18} />
            Tüm Projeler için GitHub&apos;ı Ziyaret Et
          </a>
        </div>
      </div>
    </section>
  );
}
