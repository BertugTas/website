"use client";

import { useEffect, useRef } from "react";

export default function About() {
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
    <section id="about" className="py-28 px-6 border-t border-white/5" ref={sectionRef}>
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-16">
          <div className="reveal">
            <span className="font-mono text-xs text-white/25 tracking-widest uppercase">01 / Hakkımda</span>
          </div>

          <div className="md:col-span-2 space-y-6 reveal">
            <p className="text-white/85 leading-relaxed text-base">
              Dokuz Eylül Üniversitesi{" "}
              <span className="text-white font-medium">Bilgisayar Bilimi</span> bölümü
              öğrencisiyim. İzmir merkezli olarak çalışıyor, veri bilimi
              alanında kendimi sürekli geliştiriyorum.
            </p>

            <p className="text-white/65 leading-relaxed text-base">
              Temel odak alanım <span className="text-white/85">veri bilimi</span> ve
              veri mühendisliği. Python ile makine öğrenmesi modelleri kuruyor,
              SQL ile karmaşık veri sorgularını optimize ediyor, istatistiksel
              analiz yöntemleriyle veri setlerinden anlamlı örüntüler çıkarıyorum.
              Power BI ve DAX kullanarak kurumsal veriyi görselleştirip
              karar destek sistemleri üretiyorum.
            </p>

            <p className="text-white/65 leading-relaxed text-base">
              Yazılım geliştirme tarafında nesne yönelimli programlama
              prensiplerini C# ile uyguluyorum. Playwright ile web
              otomasyon çözümleri geliştiriyor, API entegrasyonları
              ile veri akışlarını otomatize ediyorum.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-px bg-white/5">
              {[
                ["Üniversite", "Dokuz Eylül Üniversitesi"],
                ["Bölüm", "Bilgisayar Bilimi"],
                ["Şehir", "İzmir, Türkiye"],
                ["Odak", "Veri Bilimi"],
              ].map(([label, value]) => (
                <div key={label} className="bg-[#080808] p-5">
                  <div className="font-mono text-xs text-white/25 mb-1.5">{label}</div>
                  <div className="text-sm text-white/80 font-medium">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
