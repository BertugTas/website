"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Hakkımda", href: "#about" },
  { label: "Beceriler", href: "#skills" },
  { label: "Projeler", href: "#projects" },
  { label: "İletişim", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#080808]/95 border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#" className="font-mono text-sm text-white/60 hover:text-white transition-colors">
          bertugtas
        </a>

        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-white/50 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-white/50 hover:text-white text-sm"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "kapat" : "menü"}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#080808] border-t border-white/5">
          <ul className="flex flex-col px-6 py-5 gap-5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-white/50 hover:text-white transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
