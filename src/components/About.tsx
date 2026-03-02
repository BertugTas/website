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
            <span className="font-mono text-xs text-white/20 tracking-widest uppercase">01 / Hakkımda</span>
          </div>

          <div className="md:col-span-2 space-y-5 reveal">
            <p className="text-white/70 leading-relaxed text-base">
              Dokuz Eylül Üniversitesi{" "}
              <span className="text-white">Bilgisayar Bilimi</span> bölümü
              öğrencisiyim. İzmir&apos;de yaşıyorum.
            </p>
            <p className="text-white/50 leading-relaxed text-base">
              Veri odaklı bir yaklaşımla çalışıyorum. Ham veriden anlamlı
              içgörüler çıkarmak, makine öğrenmesi modelleri geliştirmek
              ve iş zekası çözümleri üretmek ana ilgi alanlarım.
            </p>
            <p className="text-white/50 leading-relaxed text-base">
              Python, SQL ve Power BI başta olmak üzere veri bilimi
              ekosisteminde aktif olarak çalışıyor; C# ile masaüstü
              uygulamalar ve otomasyon araçları geliştiriyorum.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-px bg-white/5">
              {[
                ["Üniversite", "Dokuz Eylül Üniversitesi"],
                ["Bölüm", "Bilgisayar Bilimi"],
                ["Şehir", "İzmir, Türkiye"],
                ["Odak", "Veri Bilimi & İş Zekası"],
              ].map(([label, value]) => (
                <div key={label} className="bg-[#080808] p-4">
                  <div className="font-mono text-xs text-white/20 mb-1">{label}</div>
                  <div className="text-sm text-white/70">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
