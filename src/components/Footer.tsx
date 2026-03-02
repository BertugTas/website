import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/50 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Brand */}
        <div className="font-mono text-slate-500 text-sm">
          <span className="gradient-text font-bold">Bertuğ Taş</span>
          <span className="ml-2">· Data Science & Software Development</span>
        </div>

        {/* Social */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/BertugTas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-slate-300 transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/bertuğ-taş-bb20562b5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-slate-300 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:bertugtaas@gmail.com"
            className="text-slate-600 hover:text-slate-300 transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-slate-600 text-xs font-mono">
          © {year} · İzmir, Türkiye
        </p>
      </div>
    </footer>
  );
}
