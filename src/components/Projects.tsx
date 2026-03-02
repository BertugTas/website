"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    index: "01",
    title: "ML Meme Kanseri Sınıflandırma",
    description:
      "Birden fazla sınıflandırma algoritmasının karşılaştırmalı analizini içeren gözetimli öğrenme projesi. Logistic Regression, Random Forest, SVM ve KNN modelleri eğitilip doğruluk, hassasiyet ve geri çağırma metrikleriyle değerlendirildi.",
    area: "Makine Öğrenmesi",
    stack: ["Python", "scikit-learn", "pandas", "NumPy", "matplotlib"],
    href: "https://github.com/BertugTas/ML-BreastCancer-Classification",
  },
  {
    index: "02",
    title: "Beyin MRI Görüntü Sınıflandırma",
    description:
      "Tıbbi görüntü işleme alanında CNN mimarisi kullanan derin öğrenme projesi. Beyin MRI veri seti üzerinde eğitilen model, tümör sınıflandırmasında yüksek doğruluk oranı elde etti.",
    area: "Derin Öğrenme",
    stack: ["Python", "CNN", "Deep Learning", "NumPy", "matplotlib"],
    href: "https://github.com/BertugTas/Brain-MRI-Classification",
  },
  {
    index: "03",
    title: "Kariyer İlan Otomasyon Botu",
    description:
      "Playwright ile hedef platformları tarayan, yeni ilanları tespit edip Twilio API aracılığıyla anlık SMS bildirimi gönderen tam otomatik iş akışı. Zamanlanmış çalışma ve filtreleme desteği içeriyor.",
    area: "Otomasyon & Web Scraping",
    stack: ["Python", "Playwright", "Twilio API"],
    href: "https://github.com/BertugTas/Kariyer-ilan-Botu",
  },
  {
    index: "04",
    title: "Veritabanı Yönetim Sistemi",
    description:
      "Nesne yönelimli tasarım prensipleriyle C# üzerinde geliştirilen fatura ve stok yönetim uygulaması. MS SQL Server backend ile CRUD operasyonları, raporlama ve kullanıcı yönetimi.",
    area: "Yazılım Geliştirme",
    stack: ["C#", "OOP", "MS SQL Server", "T-SQL"],
    href: "https://github.com/BertugTas/DataBaseUI",
  },
  {
    index: "05",
    title: "Power BI Eğitim Analitik Dashboard'u",
    description:
      "Kurumsal eğitim verisini DAX ölçümleri ve hesaplanmış sütunlarla modelleyen, KPI takibi ve trend analizini interaktif görsellerle sunan iş zekası raporu.",
    area: "Veri Görselleştirme",
    stack: ["Power BI", "DAX", "MS SQL Server", "PostgreSQL"],
    href: "https://github.com/BertugTas",
  },
  {
    index: "06",
    title: "AI İçerik Araçları Rehberi",
    description:
      "İçerik üreticileri için erişilebilir yapay zeka araçlarını kategorize eden, kullanım senaryolarıyla açıklayan kapsamlı bir referans kaynağı.",
    area: "Araştırma & Dokümantasyon",
    stack: ["AI Tools", "İçerik Üretimi"],
    href: "https://github.com/BertugTas/AI-icerik-araclari",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-28 px-6 border-t border-white/5" ref={sectionRef}>
      <div className="max-w-5xl mx-auto">
        {/* Header row */}
        <div className="grid md:grid-cols-3 gap-16 mb-16">
          <div className="reveal">
            <span className="font-mono text-xs text-white/25 tracking-widest uppercase">
              03 / Projeler
            </span>
          </div>
          <div className="md:col-span-2 reveal">
            <p className="text-white/50 text-sm leading-relaxed max-w-lg">
              Makine öğrenmesi ve derin öğrenmeden otomasyon ve iş zekasına
              uzanan çalışmalar. Her proje gerçek veri setleriyle veya
              pratik problemler üzerine kurulu.
            </p>
          </div>
        </div>

        {/* Project blocks */}
        <div className="space-y-px">
          {projects.map((project, i) => (
            <a
              key={project.index}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid md:grid-cols-3 border border-white/5 hover:border-white/12 transition-colors reveal"
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              {/* Left: index + area */}
              <div className="p-7 border-b md:border-b-0 md:border-r border-white/5 flex flex-col justify-between gap-6">
                <div className="font-mono text-xs text-white/20">{project.index}</div>
                <div>
                  <div className="font-mono text-xs text-white/25 uppercase tracking-widest mb-2">
                    Alan
                  </div>
                  <div className="text-xs text-white/55">{project.area}</div>
                </div>
              </div>

              {/* Right: title + description + stack */}
              <div className="md:col-span-2 p-7 flex flex-col justify-between gap-5">
                <div>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-sm font-medium text-white/80 group-hover:text-white transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <ArrowUpRight
                      size={14}
                      className="text-white/15 group-hover:text-white/50 flex-shrink-0 mt-0.5 transition-colors"
                    />
                  </div>
                  <p className="text-sm text-white/45 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="text-xs text-white/50 border border-white/8 px-2.5 py-1 group-hover:border-white/15 group-hover:text-white/65 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* GitHub link */}
        <div className="mt-12 reveal">
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
    </section>
  );
}
