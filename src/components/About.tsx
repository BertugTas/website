"use client";

import { useEffect, useRef } from "react";
import { GraduationCap, MapPin, Briefcase, Target } from "lucide-react";

const highlights = [
  {
    icon: <GraduationCap size={20} />,
    title: "Eğitim",
    value: "Dokuz Eylül Üniversitesi",
    sub: "Bilgisayar Mühendisliği · İzmir",
  },
  {
    icon: <MapPin size={20} />,
    title: "Konum",
    value: "İzmir, Türkiye",
    sub: "UTC +03:00",
  },
  {
    icon: <Briefcase size={20} />,
    title: "Odak Alanı",
    value: "Veri Bilimi & İş Zekası",
    sub: "Data Science · BI · ML",
  },
  {
    icon: <Target size={20} />,
    title: "Hedef",
    value: "Veriden Değer Üretmek",
    sub: "Analitik · Görselleştirme · Otomasyon",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 px-6 relative" ref={sectionRef}>
      {/* Section background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <span className="text-indigo-400 text-sm font-mono font-medium tracking-widest uppercase">
            01. Hakkımda
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Kim Olduğumu Öğrenin
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-5 reveal">
            <p className="text-slate-300 text-lg leading-relaxed">
              Merhaba! Ben <span className="text-indigo-400 font-semibold">Bertuğ Taş</span>.
              Dokuz Eylül Üniversitesi Bilgisayar Mühendisliği bölümü öğrencisiyim.
              Veri bilimi ve iş zekası konularına derin bir ilgi duyuyor, bu alanlarda
              kendimi sürekli geliştirmeye çalışıyorum.
            </p>

            <p className="text-slate-400 leading-relaxed">
              <strong className="text-slate-300">Veri odaklı</strong> bir yaklaşımla çalışıyor;
              SQL ve Python kullanarak veri analizi yapıyor, makine öğrenmesi modelleri
              geliştiriyor ve Power BI ile etkileyici dashboard&apos;lar oluşturuyorum.
              Ham veriden anlamlı içgörüler çıkarmak beni heyecanlandırıyor.
            </p>

            <p className="text-slate-400 leading-relaxed">
              Yazılım geliştirme tarafında C# ile masaüstü uygulamalar, Python ile
              otomasyon çözümleri üretiyorum. Tıbbi görüntü sınıflandırmasından iş
              ilanı takibine kadar geniş bir yelpazede projeler üretiyorum.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {["Veri Analizi", "Machine Learning", "Power BI", "Python", "SQL", "C#"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-950/60 text-indigo-300 border border-indigo-800/50"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Info cards */}
          <div className="grid grid-cols-2 gap-4 reveal">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="glass rounded-xl p-5 glow group hover:-translate-y-1 transition-transform duration-200"
              >
                <div className="text-indigo-400 mb-3 group-hover:scale-110 transition-transform duration-200">
                  {item.icon}
                </div>
                <div className="text-xs text-slate-500 font-mono mb-1">{item.title}</div>
                <div className="text-sm font-semibold text-white mb-0.5">{item.value}</div>
                <div className="text-xs text-slate-500">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
