"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/context/LanguageContext";
import type { ProjectEntry } from "@/data/projects";

const BLOCK_KEYS = ["problem", "approach", "outcome", "learnings"] as const;

export default function CaseStudyClient({ project }: { project: ProjectEntry }) {
  const { lang } = useLanguage();
  const t = project[lang];

  const blockLabels: Record<typeof BLOCK_KEYS[number], string> = {
    problem:   lang === "tr" ? "Problem"       : "Problem",
    approach:  lang === "tr" ? "Yaklaşım"      : "Approach",
    outcome:   lang === "tr" ? "Sonuç"         : "Outcome",
    learnings: lang === "tr" ? "Öğrendiklerim" : "Learnings",
  };

  return (
    <main style={{ background: "var(--bg)" }} className="relative min-h-screen">
      <Navbar />

      <section className="relative z-[1] pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">

          {/* ── Back ───────────────────────────────────────────── */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.15em] mb-10 transition-colors duration-200"
            style={{ color: "var(--muted2)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cyan)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted2)")}
          >
            ← {lang === "tr" ? "Çalışmalar" : "Projects"}
          </Link>

          {/* ── Header ─────────────────────────────────────────── */}
          <div className="mb-12">
            <span
              className="inline-block text-[0.6rem] uppercase tracking-[0.2em] px-2 py-0.5 mb-5"
              style={{ color: "var(--muted2)", border: "1px solid var(--border)" }}
            >
              {t.area}
            </span>

            <h1
              className="text-[clamp(1.8rem,5vw,3.2rem)] font-bold tracking-tight leading-[1.15] mb-6"
              style={{ color: "var(--text)" }}
            >
              {t.title}
            </h1>

            <div className="flex flex-wrap gap-1.5">
              {t.stack.map((s) => (
                <span
                  key={s}
                  className="text-[0.6rem] tracking-[0.08em] px-2 py-0.5"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid var(--border)",
                    color: "var(--muted2)",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* ── Divider ────────────────────────────────────────── */}
          <div className="h-px mb-12" style={{ background: "linear-gradient(to right, var(--cyan), transparent)" }} />

          {/* ── Content blocks ─────────────────────────────────── */}
          <div className="relative mb-12">
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-px"
              style={{ background: "var(--border)", border: "1px solid var(--border)" }}
            >
              {BLOCK_KEYS.map((key) => (
                <div
                  key={key}
                  className="p-8 transition-colors duration-200"
                  style={{
                    background: "var(--bg2)",
                    borderLeft: "3px solid var(--cyan)",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--bg3)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--bg2)")}
                >
                  <div
                    className="text-[0.65rem] uppercase tracking-[0.2em] mb-4"
                    style={{ color: "var(--muted)" }}
                  >
                    {blockLabels[key]}
                  </div>
                  <p
                    className="text-[0.82rem] leading-[1.9]"
                    style={{ color: "var(--muted2)", overflowWrap: "break-word" }}
                  >
                    {t[key]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Footer row ─────────────────────────────────────── */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={t.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 text-[0.75rem] font-bold uppercase tracking-[0.1em] transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: "var(--cyan)", color: "var(--bg)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.boxShadow =
                  "0 0 20px rgba(0,229,255,0.4), 0 0 40px rgba(0,229,255,0.15)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.boxShadow = "none")
              }
            >
              {lang === "tr" ? "GitHub'da Gör →" : "View on GitHub →"}
            </a>

            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 px-7 py-3 text-[0.75rem] uppercase tracking-[0.1em] transition-all duration-200"
              style={{ border: "1px solid var(--border)", color: "var(--muted2)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--cyan)";
                (e.currentTarget as HTMLElement).style.color = "var(--cyan)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLElement).style.color = "var(--muted2)";
              }}
            >
              ← {lang === "tr" ? "Tüm Projeler" : "All Projects"}
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
