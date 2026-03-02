"use client";

import { useEffect, useRef, useState } from "react";

type LineType = "command" | "output" | "success" | "info" | "blank";

type ScriptLine = { text: string; type: LineType };
type DisplayLine = ScriptLine & { id: number; partial?: string };

const PROMPT = "bertuğ@deu:~$";

const SCRIPTS: ScriptLine[][] = [
  [
    { text: "python ml_pipeline.py", type: "command" },
    { text: "", type: "blank" },
    { text: "[INFO] Loading dataset...", type: "info" },
    { text: "  → 1,247 samples  |  30 features", type: "output" },
    { text: "  → Train: 997  |  Test: 250", type: "output" },
    { text: "", type: "blank" },
    { text: "[INFO] Training classifiers...", type: "info" },
    { text: "", type: "blank" },
    { text: "  Random Forest    ████████████  96.4%", type: "success" },
    { text: "  SVM              ██████████░░  91.2%", type: "output" },
    { text: "  Logistic Reg.    █████████░░░  88.7%", type: "output" },
    { text: "  KNN              ████████░░░░  85.3%", type: "output" },
    { text: "", type: "blank" },
    { text: "  Best model → Random Forest", type: "info" },
    { text: "  Precision : 0.967  |  Recall : 0.961", type: "output" },
    { text: "  F1 Score  : 0.964  ✓", type: "success" },
    { text: "", type: "blank" },
    { text: "Saved → rf_model_v2.pkl", type: "success" },
  ],
  [
    { text: "python cnn_train.py --data brain_mri/", type: "command" },
    { text: "", type: "blank" },
    { text: "[INFO] Loading MRI dataset...", type: "info" },
    { text: "  → 253 images  |  2 classes", type: "output" },
    { text: "  → Resize: 224×224  |  Augmentation: ✓", type: "output" },
    { text: "", type: "blank" },
    { text: "[INFO] CNN training started...", type: "info" },
    { text: "  Epoch  1/10   loss: 0.6821   acc: 0.712", type: "output" },
    { text: "  Epoch  3/10   loss: 0.4102   acc: 0.823", type: "output" },
    { text: "  Epoch  6/10   loss: 0.2341   acc: 0.891", type: "output" },
    { text: "  Epoch 10/10   loss: 0.0987   acc: 0.971", type: "success" },
    { text: "", type: "blank" },
    { text: "  Test Accuracy → 96.8%  ✓", type: "success" },
    { text: "  Saved → brain_cnn_v1.h5", type: "success" },
  ],
  [
    { text: "python analyze.py sales_data.csv", type: "command" },
    { text: "", type: "blank" },
    { text: "[INFO] Importing data...", type: "info" },
    { text: "  → 18,420 rows  |  12 columns", type: "output" },
    { text: "  → Null values: 0  |  Duplicates: 0", type: "output" },
    { text: "", type: "blank" },
    { text: "[INFO] Statistical analysis...", type: "info" },
    { text: "  Correlation matrix computed", type: "output" },
    { text: "  Outliers detected: 23  →  cleaned", type: "output" },
    { text: "  Skewness corrected via log-transform", type: "output" },
    { text: "", type: "blank" },
    { text: "[INFO] Exporting to Power BI...", type: "info" },
    { text: "  → 4 KPI visualizations created", type: "output" },
    { text: "  → Dashboard exported  ✓", type: "success" },
  ],
];

function getColor(type: LineType): string {
  if (type === "success") return "text-green-400";
  if (type === "info")    return "text-cyan-400";
  return "text-slate-400";
}

export default function MLTerminal() {
  const [lines, setLines] = useState<DisplayLine[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const idRef = useRef(0);

  // Auto-scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    let sIdx = 0, lIdx = 0, cIdx = 0;
    let cur: DisplayLine[] = [];
    const id = () => ++idRef.current;

    const tick = () => {
      const script = SCRIPTS[sIdx];

      if (lIdx >= script.length) {
        timer = setTimeout(() => {
          sIdx = (sIdx + 1) % SCRIPTS.length;
          lIdx = 0; cIdx = 0; cur = [];
          setLines([]);
          timer = setTimeout(tick, 500);
        }, 3500);
        return;
      }

      const line = script[lIdx];

      if (line.type === "command") {
        if (cIdx === 0) {
          cur = [...cur, { ...line, id: id(), partial: "" }];
          setLines([...cur]);
        }
        if (cIdx < line.text.length) {
          const partial = line.text.slice(0, cIdx + 1);
          cur = [...cur.slice(0, -1), { ...cur[cur.length - 1], partial }];
          setLines([...cur]);
          cIdx++;
          timer = setTimeout(tick, 60);
        } else {
          cIdx = 0; lIdx++;
          timer = setTimeout(tick, 380);
        }
      } else {
        cur = [...cur, { ...line, id: id() }];
        setLines([...cur]);
        lIdx++;
        const delay = line.type === "blank" ? 80
          : line.type === "info" ? 280
          : 150;
        timer = setTimeout(tick, delay);
      }
    };

    timer = setTimeout(tick, 900);
    return () => clearTimeout(timer);
  }, []);

  const lastLine = lines[lines.length - 1];
  const isTyping = lastLine?.type === "command" &&
    (lastLine.partial ?? "").length < lastLine.text.length;

  return (
    <div className="w-full h-full flex items-center justify-center py-20 px-8 lg:px-10">
      <div
        className="w-full font-mono text-sm rounded-lg overflow-hidden"
        style={{ border: "1px solid rgba(255,255,255,0.08)", background: "#0d1117" }}
      >
        {/* ── Title bar ─────────────────────────────────── */}
        <div
          className="flex items-center gap-2 px-4 py-3"
          style={{ background: "#161b22", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
        >
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          <span className="ml-4 text-white/25 text-xs tracking-wider">bertuğ@deu: ~</span>
          <span className="ml-auto text-white/15 text-xs tabular-nums">
            {new Date().toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" })}
          </span>
        </div>

        {/* ── Terminal content ───────────────────────────── */}
        <div
          ref={scrollRef}
          className="p-5 overflow-y-auto"
          style={{ height: "420px", scrollbarWidth: "none" }}
        >
          {lines.map((line) => {
            if (line.type === "blank") return <div key={line.id} className="h-2" />;

            if (line.type === "command") {
              const typed = line.partial ?? line.text;
              const stillTyping = typed.length < line.text.length;
              return (
                <div key={line.id} className="flex items-center gap-2 leading-6">
                  <span className="text-green-400 select-none shrink-0">{PROMPT}</span>
                  <span className="text-white">{typed}</span>
                  {stillTyping && (
                    <span className="inline-block w-[7px] h-[15px] bg-white/75 animate-pulse" />
                  )}
                </div>
              );
            }

            return (
              <div key={line.id} className={`leading-6 ${getColor(line.type)}`}>
                {line.text}
              </div>
            );
          })}

          {/* Idle cursor after output completes */}
          {lines.length > 0 && !isTyping && (
            <div className="flex items-center gap-2 leading-6 mt-1">
              <span className="text-green-400 select-none shrink-0">{PROMPT}</span>
              <span className="inline-block w-[7px] h-[15px] bg-white/70 animate-pulse" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
