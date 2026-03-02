"use client";

import { useEffect, useRef } from "react";

const skillGroups = [
  {
    category: "Programlama Dilleri",
    emoji: "💻",
    skills: [
      { name: "Python", level: 85, color: "from-blue-500 to-cyan-400" },
      { name: "SQL (T-SQL / PL/pgSQL)", level: 90, color: "from-indigo-500 to-blue-400" },
      { name: "C#", level: 75, color: "from-purple-500 to-indigo-400" },
    ],
  },
  {
    category: "Veri Bilimi & ML",
    emoji: "🤖",
    skills: [
      { name: "Pandas & NumPy", level: 85, color: "from-green-500 to-emerald-400" },
      { name: "Scikit-learn", level: 80, color: "from-orange-500 to-amber-400" },
      { name: "Matplotlib & Seaborn", level: 78, color: "from-pink-500 to-rose-400" },
    ],
  },
  {
    category: "İş Zekası & Veritabanı",
    emoji: "📊",
    skills: [
      { name: "Power BI & DAX", level: 88, color: "from-yellow-500 to-amber-400" },
      { name: "MS SQL Server", level: 85, color: "from-red-500 to-orange-400" },
      { name: "PostgreSQL", level: 80, color: "from-teal-500 to-cyan-400" },
    ],
  },
  {
    category: "Araçlar & Platformlar",
    emoji: "🛠️",
    skills: [
      { name: "Git & GitHub", level: 82, color: "from-slate-400 to-slate-300" },
      { name: "Visual Studio / VS Code", level: 90, color: "from-blue-400 to-indigo-300" },
      { name: "Excel (İleri Düzey)", level: 85, color: "from-green-400 to-emerald-300" },
    ],
  },
];

const techBadges = [
  "Python", "SQL", "C#", "Power BI", "DAX", "pandas",
  "scikit-learn", "matplotlib", "PostgreSQL", "MS SQL Server",
  "Git", "Playwright", "Twilio API", "Windows Forms", "pgAdmin", "SSMS",
];

function SkillBar({ name, level, color }: { name: string; level: number; color: string }) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && barRef.current) {
            barRef.current.style.width = `${level}%`;
          }
        });
      },
      { threshold: 0.5 }
    );

    if (barRef.current) observer.observe(barRef.current);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1.5">
        <span className="text-sm text-slate-300 font-medium">{name}</span>
        <span className="text-xs text-slate-500 font-mono">{level}%</span>
      </div>
      <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
        <div
          ref={barRef}
          className={`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-1000 ease-out`}
          style={{ width: "0%" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );

    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 px-6 relative bg-[#070e1a]" ref={sectionRef}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="text-indigo-400 text-sm font-mono font-medium tracking-widest uppercase">
            02. Beceriler
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Teknik Yetkinliklerim
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mx-auto mt-4" />
        </div>

        {/* Skill groups grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skillGroups.map((group) => (
            <div key={group.category} className="glass rounded-2xl p-6 glow reveal">
              <h3 className="text-white font-semibold mb-5 flex items-center gap-2">
                <span>{group.emoji}</span>
                {group.category}
              </h3>
              {group.skills.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          ))}
        </div>

        {/* Tech badge cloud */}
        <div className="text-center reveal">
          <p className="text-slate-500 text-sm font-mono mb-5">// Kullandığım tüm teknolojiler</p>
          <div className="flex flex-wrap justify-center gap-2">
            {techBadges.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium glass border border-slate-700/50 text-slate-400 hover:text-indigo-300 hover:border-indigo-500/40 transition-all duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
