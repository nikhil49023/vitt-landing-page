import React from 'react';
import { Smartphone, Zap, Sparkles, ArrowRight, Bell, PieChart, Bot, CheckCircle2 } from 'lucide-react';
import { ScrollReveal, HoverEffect } from './animations';

export default function HowItWorks() {
  const STEPS = [
    {
      step: '01',
      icon: Smartphone,
      title: 'Pay via UPI as Usual',
      description: 'Scan any QR code or send money on GPay, PhonePe, Paytm, or CRED. VITT detects your payments automatically the instant you spend.',
      accent: 'border-earth-sage/30 bg-earth-sageSoft text-earth-sage',
      preview: (
        <div className="p-3.5 rounded-2xl bg-canvas-raised border border-earth-forest/10 shadow-xs space-y-2 text-left">
          <div className="flex items-center justify-between text-xs font-bold text-earth-forest">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-earth-sage animate-ping" /> GPay Payment
            </span>
            <span className="font-mono text-sandstone-muted text-[10px]">Just now</span>
          </div>
          <p className="text-xs text-earth-forest font-semibold">₹150 sent to Chai Point</p>
          <div className="text-[10px] font-mono text-earth-sage font-bold flex items-center justify-between border-t border-earth-forest/5 pt-1.5">
            <span>✓ Auto-logged</span>
            <span>0 SMS read</span>
          </div>
        </div>
      )
    },
    {
      step: '02',
      icon: Zap,
      title: 'Expenses Sort Into Budgets Instantly',
      description: 'Every rupee is automatically organized into your grocery, dining, bills, or shopping budgets with gentle warnings before you overspend.',
      accent: 'border-earth-terracotta/30 bg-earth-terracottaSoft text-earth-terracotta',
      preview: (
        <div className="p-3.5 rounded-2xl bg-canvas-raised border border-earth-forest/10 shadow-xs space-y-2 text-left">
          <div className="flex items-center justify-between text-xs font-bold text-earth-forest">
            <span>Monthly Food & Dining</span>
            <span className="font-mono text-[11px] text-earth-forest font-bold">64% used</span>
          </div>
          <div className="w-full h-2 rounded-full bg-canvas-subtle overflow-hidden">
            <div className="h-full bg-earth-sage rounded-full" style={{ width: '64%' }} />
          </div>
          <div className="text-[10px] font-mono text-sandstone-muted flex justify-between">
            <span>Safe Spending Pace</span>
            <span className="text-earth-forest font-bold">₹3,550 left</span>
          </div>
        </div>
      )
    },
    {
      step: '03',
      icon: Sparkles,
      title: 'Get Honest Advice from Your AI Coach',
      description: 'Ask questions like "How much did I spend on Swiggy this month?" or "Can I afford this trip?" and get instant answers 100% offline.',
      accent: 'border-earth-ochre/30 bg-earth-ochreSoft text-earth-ochre',
      preview: (
        <div className="p-3.5 rounded-2xl bg-canvas-raised border border-earth-forest/10 shadow-xs space-y-1.5 text-left">
          <div className="text-[11px] font-semibold text-earth-forest font-mono flex items-center gap-1">
            <Bot className="w-3.5 h-3.5 text-earth-ochre" /> Offline AI Advisor
          </div>
          <p className="text-xs text-earth-forest font-medium">
            "You saved ₹12,400 more than last month. Ready to invest ₹5,000 in your SIP!"
          </p>
        </div>
      )
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Section Header */}
      <ScrollReveal>
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="px-3.5 py-1 rounded-full bg-earth-sageSoft text-earth-forest border border-earth-sage/30 font-mono text-xs font-semibold">
            Simple & Effortless Setup
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-earth-forest tracking-tight">
            How VITT Works in 3 Simple Steps
          </h2>

          <p className="text-sm sm:text-base text-sandstone-muted font-sans max-w-xl mx-auto leading-relaxed">
            No bank passwords. No manual typing. No cloud signups. Just install and let VITT quietly organize your financial life.
          </p>
        </div>
      </ScrollReveal>

      {/* 3 Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {STEPS.map((item, idx) => {
          const StepIcon = item.icon;
          return (
            <ScrollReveal key={idx} delay={idx * 0.12}>
              <HoverEffect scale={1.02} y={-6}>
                <div className="p-6 sm:p-8 rounded-3xl bg-canvas-card border border-earth-forest/15 shadow-xs flex flex-col justify-between space-y-6 hover:-translate-y-1.5 transition-all duration-300 relative group h-full">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${item.accent}`}>
                        <StepIcon className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-3xl font-extrabold text-earth-forest/20">
                        {item.step}
                      </span>
                    </div>

                    {/* Clean UI Card Preview */}
                    <div className="my-3">
                      {item.preview}
                    </div>

                    <h3 className="text-lg font-bold font-serif text-earth-forest">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-sandstone-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {idx < 2 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20 text-earth-forest/30">
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
