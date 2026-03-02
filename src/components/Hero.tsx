import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6">
      <div className="max-w-5xl mx-auto w-full pt-24 pb-16">
        <p className="font-mono text-base text-white/60 mb-5 tracking-wide">
          Ben
        </p>

        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-4 leading-none">
          <span className="text-white">Bertuğ </span>
          <span className="text-white font-black">TAŞ</span>
        </h1>

        <h2 className="text-lg md:text-xl text-white/55 font-normal mb-10 tracking-wide">
          Veri Bilimi & Veri Mühendisi
        </h2>

        <p className="text-white/70 text-base max-w-xl leading-relaxed mb-4">
          Dokuz Eylül Üniversitesi Bilgisayar Bilimi öğrencisiyim. Veri
          bilimi alanında makine öğrenmesi modelleri geliştiriyor, Python
          ve SQL ile büyük veri setlerini analiz ediyor, istatistiksel
          yöntemlerle veriden anlamlı içgörüler çıkarıyorum.
        </p>

        <p className="text-white/45 text-sm max-w-xl leading-relaxed mb-12">
          Nesne yönelimli programlama prensiplerini C# ile uygulayan,
          veri mühendisliği süreçlerini otomatize eden çözümler üretiyorum.
        </p>

        <div className="flex items-center gap-6">
          <a
            href="#projects"
            className="text-sm font-medium text-white border border-white/25 px-6 py-2.5 hover:bg-white hover:text-black transition-all duration-200 tracking-wide"
          >
            Projeler
          </a>
          <a
            href="#contact"
            className="text-sm text-white/50 hover:text-white transition-colors"
          >
            İletişim →
          </a>
        </div>

        <div className="flex items-center gap-5 mt-14">
          {[
            { icon: <Github size={16} />, href: "https://github.com/BertugTas", label: "GitHub" },
            { icon: <Linkedin size={16} />, href: "https://linkedin.com/in/bertuğ-taş-bb20562b5", label: "LinkedIn" },
            { icon: <Mail size={16} />, href: "mailto:bertugtaas@gmail.com", label: "E-posta" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={s.label}
              className="text-white/35 hover:text-white transition-colors"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
