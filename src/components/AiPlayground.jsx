import React, { useState } from 'react';
import { Bot, Sparkles, Send, Lock, Cpu, Database, ArrowRight } from 'lucide-react';

const PROMPTS = [
  {
    q: "How much did I spend on dining out this week?",
    a: "Based on your local transaction ledger, you spent ₹2,840 across 6 food orders (Swiggy, Zomato, Starbucks) this week. You are 14% under your weekly Food Envelope limit.",
    tag: "Local RAG Query (Sub-3ms)"
  },
  {
    q: "Simulate a ₹4,500 shopping purchase on my monthly budget.",
    a: "Simulating ₹4,500 under 'Shopping & Lifestyle'. This will put your Shopping envelope at 92% cap (🔴 Red Zone), leaving ₹400 for the remaining 14 days of the month.",
    tag: "ReAct Expense Simulator"
  },
  {
    q: "Can I reach my ₹50,000 Emergency Fund goal by December?",
    a: "You currently have ₹32,000 saved. At your net monthly cashflow surplus pace of ₹6,200/mo, you will reach your ₹50,000 goal in 2.9 months (by November 18, 2026).",
    tag: "Cashflow Pace Matcher"
  }
];

export default function AiPlayground() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const current = PROMPTS[selectedIdx];

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
        <span className="px-3.5 py-1 rounded-full bg-elemental-skySoft text-elemental-sky font-mono text-xs font-semibold">
          On-Device Financial Intelligence
        </span>

        <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-elemental-water tracking-tight">
          Your Private AI Financial Advisor
        </h2>

        <p className="text-sm text-sandstone-muted font-sans max-w-xl mx-auto leading-relaxed">
          Ask questions, simulate purchases, and get personalized wealth guidance from the best on-device AI financial advisor—100% offline.
        </p>
      </div>

      {/* Playground Card Container */}
      <div className="max-w-4xl mx-auto rounded-3xl glass-panel fine-border-water shadow-xl bg-canvas overflow-hidden">
        
        {/* Playground Top Bar */}
        <div className="p-4 bg-canvas-raised border-b border-elemental-water/10 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-elemental-water font-bold">
            <Bot className="w-4 h-4 text-elemental-sky" />
            <span>LiteRT-LM Execution Sandbox</span>
          </div>

          <div className="flex items-center gap-2 font-mono text-[11px] text-sandstone-muted">
            <span className="px-2 py-0.5 rounded bg-elemental-skySoft text-elemental-sky font-semibold">Gemma 4 E2B</span>
            <span>•</span>
            <span className="flex items-center gap-1 text-elemental-sky font-bold">
              <Lock className="w-3 h-3" /> 100% Offline
            </span>
          </div>
        </div>

        {/* Prompt Selector Pills */}
        <div className="p-4 border-b border-elemental-water/10 flex flex-wrap gap-2 bg-canvas/60">
          {PROMPTS.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedIdx(idx)}
              className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
                selectedIdx === idx
                  ? 'bg-elemental-water text-canvas shadow-xs font-semibold'
                  : 'bg-canvas-raised text-sandstone-muted hover:text-elemental-water'
              }`}
            >
              "{item.q}"
            </button>
          ))}
        </div>

        {/* Interactive Chat Window */}
        <div className="p-6 sm:p-8 space-y-4 font-sans text-xs">
          
          {/* User Prompt */}
          <div className="flex justify-end">
            <div className="max-w-md p-3.5 rounded-2xl bg-elemental-water text-canvas font-medium shadow-xs">
              {current.q}
            </div>
          </div>

          {/* AI Response */}
          <div className="flex justify-start">
            <div className="max-w-lg p-4 rounded-2xl bg-canvas-raised border border-elemental-sky/30 space-y-3 shadow-xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-elemental-sky font-bold text-[11px]">
                  <Sparkles className="w-3.5 h-3.5" /> LiteRT-LM Local Response
                </div>
                <span className="text-[10px] font-mono text-sandstone-faint px-2 py-0.5 rounded bg-canvas border border-elemental-water/10">
                  {current.tag}
                </span>
              </div>

              <p className="text-elemental-water leading-relaxed font-sans text-xs">
                {current.a}
              </p>

              <div className="pt-2 border-t border-elemental-water/10 flex items-center justify-between text-[10px] font-mono text-sandstone-muted">
                <span>⚡ Latency: &lt;8ms</span>
                <span>🔒 Cloud Egress: 0 Bytes</span>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
