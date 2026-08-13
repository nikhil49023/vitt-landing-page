import React from 'react';
import { Smartphone, Zap, Sparkles, ArrowRight } from 'lucide-react';
import { ScrollReveal, HoverEffect } from './animations';

export default function HowItWorks() {
  const STEPS = [
    {
      step: '01',
      icon: Smartphone,
      title: 'Download & Enable Notifications',
      description: 'Install VITT in seconds. Enable notification access with one tap—zero invasive SMS permissions required.',
      accent: 'border-elemental-sky/40 text-elemental-sky'
    },
    {
      step: '02',
      icon: Zap,
      title: 'Watch Expenses Categorize Automatically',
      description: 'Make payments via GPay, PhonePe, Paytm, or bank card. VITT automatically detects and categorizes every rupee in real time.',
      accent: 'border-elemental-fire/40 text-elemental-fire'
    },
    {
      step: '03',
      icon: Sparkles,
      title: 'Chat with Your Local AI & Save More',
      description: 'Ask your on-device AI advisor where your money went, set smart envelope budget limits, and watch your monthly savings grow.',
      accent: 'border-elemental-water/40 text-elemental-water'
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Promotional Section Header */}
      <ScrollReveal>
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="px-3.5 py-1 rounded-full bg-elemental-skySoft text-elemental-sky font-mono text-xs font-semibold">
            Simple 3-Step Setup
          </span>

          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-elemental-water tracking-tight">
            How VITT Makes Money Management Effortless
          </h2>

          <p className="text-sm text-sandstone-muted font-sans max-w-xl mx-auto leading-relaxed">
            No manual expense typing. No cloud account signup. No invasive SMS reading.
          </p>
        </div>
      </ScrollReveal>

      {/* 3 Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {STEPS.map((item, idx) => {
          const StepIcon = item.icon;
          return (
            <ScrollReveal key={idx} delay={idx * 0.15}>
              <HoverEffect scale={1.02} y={-8}>
                <div className="p-8 rounded-3xl bg-canvas glass-panel fine-border-water shadow-md flex flex-col justify-between space-y-6 hover:-translate-y-1.5 transition-all duration-300 relative group">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-2xl bg-canvas-raised border flex items-center justify-center ${item.accent}`}>
                        <StepIcon className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-3xl font-extrabold text-sandstone-faint/40">
                        {item.step}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-elemental-water">
                      {item.title}
                    </h3>

                    <p className="text-xs text-sandstone-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {idx < 2 && (
                    <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-20 text-elemental-water/30">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  )}
                </div>
              </HoverEffect>
            </ScrollReveal>
          );
        })}
      </div>

    </section>
  );
}
