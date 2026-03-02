import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6">
      <div className="max-w-5xl mx-auto w-full pt-24 pb-16">
        <p className="font-mono text-sm text-white/30 mb-6">
          Merhaba, ben
        </p>

        <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight mb-4">
          Bertuğ Taş
        </h1>

        <h2 className="text-xl md:text-2xl text-white/40 font-light mb-8">
          Veri Bilimi & İş Zekası
        </h2>

        <p className="text-white/50 text-base max-w-xl leading-relaxed mb-12">
          Dokuz Eylül Üniversitesi Bilgisayar Bilimi öğrencisi.
          Makine öğrenmesi modelleri geliştiriyor, SQL ve Python
          ile veri analizi yapıyor, Power BI ile içgörüler üretiyorum.
        </p>

        <div className="flex items-center gap-6">
          <a
            href="#projects"
            className="text-sm font-medium text-white border border-white/20 px-5 py-2.5 hover:bg-white hover:text-black transition-all duration-200"
          >
            Projeler
          </a>
          <a
            href="#contact"
            className="text-sm text-white/40 hover:text-white transition-colors"
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
              className="text-white/25 hover:text-white transition-colors"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
