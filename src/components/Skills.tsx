"use client";

import { useEffect, useRef } from "react";

const skillGroups = [
  {
    title: "Programlama",
    skills: ["Python", "SQL (T-SQL / PL/pgSQL)", "C#"],
  },
  {
    title: "Veri Bilimi & ML",
    skills: ["pandas", "NumPy", "scikit-learn", "matplotlib", "seaborn"],
  },
  {
    title: "İş Zekası & Veritabanı",
    skills: ["Power BI", "DAX", "MS SQL Server", "PostgreSQL", "Excel"],
  },
  {
    title: "Araçlar",
    skills: ["Git", "Playwright", "Twilio API", "SSMS", "pgAdmin", "VS Code"],
  },
];

export default function Skills() {
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
    <section id="skills" className="py-28 px-6 border-t border-white/5" ref={sectionRef}>
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-16">
          <div className="reveal">
            <span className="font-mono text-xs text-white/20 tracking-widest uppercase">02 / Beceriler</span>
          </div>

          <div className="md:col-span-2 reveal">
            <div className="grid sm:grid-cols-2 gap-10">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="text-xs font-mono text-white/30 uppercase tracking-widest mb-4">
                    {group.title}
                  </h3>
                  <ul className="space-y-2">
                    {group.skills.map((skill) => (
                      <li key={skill} className="text-sm text-white/60 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-white/20 flex-shrink-0" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
