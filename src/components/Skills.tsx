"use client";

import { useEffect, useRef } from "react";

const skillGroups = [
  {
    index: "01",
    title: "Veri Bilimi & Makine Öğrenmesi",
    description:
      "Sınıflandırma, regresyon ve görüntü işleme problemlerine yönelik model geliştirme ve değerlendirme.",
    categories: [
      {
        label: "Algoritmalar",
        items: [
          "Logistic Regression",
          "Random Forest",
          "SVM",
          "KNN",
          "CNN",
          "Karar Ağaçları",
        ],
      },
      {
        label: "Kütüphaneler",
        items: ["scikit-learn", "pandas", "NumPy", "matplotlib", "seaborn"],
      },
    ],
  },
  {
    index: "02",
    title: "Veri Mühendisliği & Görselleştirme",
    description:
      "İlişkisel veritabanı tasarımı, sorgu optimizasyonu ve kurumsal düzeyde BI çözümleri geliştirme.",
    categories: [
      {
        label: "Veritabanları",
        items: ["MS SQL Server", "PostgreSQL", "T-SQL", "PL/pgSQL"],
      },
      {
        label: "BI & Görselleştirme",
        items: ["Power BI", "DAX", "SSMS", "pgAdmin"],
      },
    ],
  },
  {
    index: "03",
    title: "Yazılım Geliştirme",
    description:
      "Nesne yönelimli programlama prensipleri ve otomasyon çözümleri üzerine odaklanarak yazılım üretme.",
    categories: [
      {
        label: "Diller & Paradigmalar",
        items: ["Python", "C# / OOP", "SQL"],
      },
      {
        label: "Araçlar & Entegrasyon",
        items: ["Git", "Playwright", "Twilio API", "VS Code"],
      },
    ],
  },
];

export default function Skills() {
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
    <section id="skills" className="py-28 px-6 border-t border-white/5" ref={sectionRef}>
      <div className="max-w-5xl mx-auto">
        {/* Header row */}
        <div className="grid md:grid-cols-3 gap-16 mb-16">
          <div className="reveal">
            <span className="font-mono text-xs text-white/25 tracking-widest uppercase">
              02 / Beceriler
            </span>
          </div>
          <div className="md:col-span-2 reveal">
            <p className="text-white/50 text-sm leading-relaxed max-w-lg">
              Veri bilimi sürecinin tamamında — veri toplama ve temizleme,
              model geliştirme, görselleştirme ve üretime alma — aktif olarak
              çalışıyorum.
            </p>
          </div>
        </div>

        {/* Skill blocks */}
        <div className="space-y-px">
          {skillGroups.map((group, i) => (
            <div
              key={group.index}
              className="grid md:grid-cols-3 gap-0 border border-white/5 hover:border-white/10 transition-colors reveal"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {/* Left: index + title + description */}
              <div className="p-7 border-b md:border-b-0 md:border-r border-white/5">
                <div className="font-mono text-xs text-white/20 mb-4">{group.index}</div>
                <h3 className="text-white/90 font-medium text-sm mb-3 leading-snug">
                  {group.title}
                </h3>
                <p className="text-white/40 text-xs leading-relaxed">
                  {group.description}
                </p>
              </div>

              {/* Right: two sub-categories */}
              <div className="md:col-span-2 grid sm:grid-cols-2 divide-x divide-white/5">
                {group.categories.map((cat) => (
                  <div key={cat.label} className="p-7">
                    <div className="font-mono text-xs text-white/25 uppercase tracking-widest mb-5">
                      {cat.label}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cat.items.map((item) => (
                        <span
                          key={item}
                          className="text-xs text-white/65 border border-white/10 px-2.5 py-1 hover:border-white/25 hover:text-white/85 transition-colors cursor-default"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
