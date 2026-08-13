import React from 'react';
import { Quote, ShieldCheck, Heart, User, Sparkles } from 'lucide-react';
import { ScrollReveal, HoverEffect } from './animations';

const PRINCIPLES = [
  {
    quote: "As a student managing rent and group dinners, I needed instant UPI bill splitting and khata debt tracking without feeding my spending habits to ad networks.",
    role: "Student & Youth Demographic",
    tag: "Group Bill Splitting & UPI Intents",
    author: "User Persona: College Student"
  },
  {
    quote: "Having envelope budget warnings with green, yellow, and red status bars gives our household complete clarity without uploading bank statements to remote cloud servers.",
    role: "Indian Household Demographic",
    tag: "Envelope Budgeting & Auto Alerts",
    author: "User Persona: Family Home Manager"
  },
  {
    quote: "The informal debt ledger (Khata) with auto-formatted WhatsApp reminders makes settling IOUs with friends respectful and hassle-free.",
    role: "General Individual Demographic",
    tag: "Khata Udhar & WhatsApp Reminders",
    author: "User Persona: Working Professional"
  }
];

export default function TestimonialSection() {
  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Landify Header */}
      <ScrollReveal>
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-canvas-raised border border-elemental-sky/30 text-elemental-sky text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Landify Sovereign Use-Cases</span>
          </div>

          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-elemental-water tracking-tight">
            Tailored for Indian Economic Life
          </h2>

          <p className="text-sm text-sandstone-muted font-sans max-w-2xl mx-auto leading-relaxed">
            Designed specifically for household budgeting, student bill splitting, and informal debt tracking.
          </p>
        </div>
      </ScrollReveal>

      {/* 3-Column Landify Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PRINCIPLES.map((item, idx) => (
          <ScrollReveal key={idx} delay={idx * 0.15}>
            <HoverEffect scale={1.02} y={-8}>
              <div className="p-8 rounded-3xl bg-canvas glass-panel fine-border-water shadow-md flex flex-col justify-between space-y-6 hover:-translate-y-1 transition-all duration-300">
                <div className="space-y-4">
                  <Quote className="w-8 h-8 text-elemental-sky/40" />
                  <p className="text-xs text-elemental-water leading-relaxed font-serif italic">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-elemental-water/10 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-elemental-water">
                    <User className="w-3.5 h-3.5 text-elemental-sky" />
                    <span>{item.author}</span>
                  </div>
                  <p className="text-[11px] text-sandstone-muted font-mono">{item.role}</p>
                  <span className="inline-block mt-2 px-2.5 py-0.5 rounded-full bg-elemental-skySoft text-elemental-sky font-mono text-[10px] font-semibold">
                    {item.tag}
                  </span>
                </div>
              </div>
            </HoverEffect>
          </ScrollReveal>
        ))}
      </div>

    </section>
  );
}
