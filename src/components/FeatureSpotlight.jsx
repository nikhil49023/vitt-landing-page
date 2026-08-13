import React, { useState } from 'react';
import { Bell, Bot, PieChart, Receipt, CheckCircle2, Lock, Sparkles, ArrowRight } from 'lucide-react';

export default function FeatureSpotlight() {
  const [activeFeature, setActiveFeature] = useState(0);

  const FEATURES = [
    {
      id: 'notifications',
      icon: Bell,
      title: 'Auto Expense Detection via Notifications',
      description: 'Automatically captures and categorizes transaction alerts from SBI, HDFC, ICICI, GPay, PhonePe, Paytm, and CRED using Android Notification Listener.',
      badge: 'Zero READ_SMS Permissions',
      previewTitle: 'Live Notification Parsing',
      details: [
        'Matches merchant handles (Swiggy, Zomato, Uber, Amazon, Blinkit)',
        'Filters out OTPs and 2FA authentication alerts',
        '100% local DPDP consent audit logging'
      ]
    },
    {
      id: 'ai',
      icon: Bot,
      title: 'On-Device AI Advisor (Gemma / Qwen)',
      description: 'Conversational financial assistant running local LLMs offline via LiteRT-LM. Uses native Rust SIMD vector search (TurboVec) for transaction RAG.',
      badge: '>130M Ops/Sec Vector Search',
      previewTitle: 'LiteRT-LM Offline Chat Engine',
      details: [
        'Queries local transaction records in <3ms',
        'Dispatches local ReAct tool actions (budgets, goals, transactions)',
        'SEBI non-adviser educational compliance'
      ]
    },
    {
      id: 'budgets',
      icon: PieChart,
      title: 'Smart Envelope Budgets & Simulator',
      description: 'Category spending caps with Green (<75%), Yellow (75-90%), and Red (≥90%) visual indicators plus an interactive purchase impact simulator.',
      badge: 'Purchase Impact Simulator',
      previewTitle: 'Envelope Spending Control',
      details: [
        'Live velocity tracking across food, shopping, utilities',
        'Simulate purchase impact before spending cash',
        'Category-level warning alerts'
      ]
    },
    {
      id: 'ocr',
      icon: Receipt,
      title: 'Encrypted Vault & Vision OCR',
      description: '100% offline Latin + Devanagari receipt text recognition using Google ML Kit. Stores receipts in an encrypted vault and exports PDF reports.',
      badge: 'AES-256 Hardware Keystore',
      previewTitle: 'Offline ML Kit Text Scanner',
      details: [
        'Extracts merchant, date, and totals in English & Hindi',
        'AES-256 SQLCipher encrypted storage',
        'Syncfusion local PDF report generation'
      ]
    }
  ];

  const current = FEATURES[activeFeature];
  const IconComponent = current.icon;

  return (
    <section id="spotlight" className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Landify Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-canvas-raised border border-elemental-sky/30 text-elemental-sky text-xs font-mono">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Landify Feature Spotlight</span>
        </div>

        <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-elemental-water tracking-tight">
          How VITT Protects Your Financial Sovereignty
        </h2>

        <p className="text-sm text-sandstone-muted font-sans max-w-2xl mx-auto leading-relaxed">
          Select a feature below to explore its local architecture and on-device execution mechanics.
        </p>
      </div>

      {/* Landify Split Layout Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Side: Vertical Interactive Tab Cards */}
        <div className="lg:col-span-5 space-y-4">
          {FEATURES.map((feat, idx) => {
            const ItemIcon = feat.icon;
            const isActive = activeFeature === idx;

            return (
              <div
                key={feat.id}
                onClick={() => setActiveFeature(idx)}
                className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 fine-border ${
                  isActive
                    ? 'bg-canvas-raised border-elemental-sky/50 shadow-md translate-x-1'
                    : 'bg-canvas hover:bg-canvas-raised/50 hover:border-elemental-water/20'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl shrink-0 ${
                    isActive ? 'bg-elemental-sky text-canvas' : 'bg-canvas-raised text-elemental-water'
                  }`}>
                    <ItemIcon className="w-5 h-5" />
                  </div>

                  <div className="space-y-1">
                    <h3 className={`text-sm font-bold ${isActive ? 'text-elemental-water' : 'text-sandstone-muted'}`}>
                      {feat.title}
                    </h3>
                    <p className="text-xs text-sandstone-muted line-clamp-2 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Side: Landify Spotlight Mockup Display */}
        <div className="lg:col-span-7">
          <div className="p-8 rounded-3xl glass-panel fine-border-water shadow-xl bg-canvas space-y-6">
            
            <div className="flex items-center justify-between border-b border-elemental-water/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-elemental-skySoft text-elemental-sky">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans text-base font-bold text-elemental-water">{current.previewTitle}</h4>
                  <span className="text-[10px] font-mono text-elemental-sky font-semibold">{current.badge}</span>
                </div>
              </div>

              <span className="px-3 py-1 rounded-full bg-elemental-skySoft text-elemental-sky text-xs font-mono font-bold">
                🟢 Live Module
              </span>
            </div>

            <p className="text-xs text-sandstone-muted leading-relaxed">
              {current.description}
            </p>

            {/* Bullet List of Technical Safeguards */}
            <div className="space-y-2.5 pt-2">
              {current.details.map((detail, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-elemental-water font-medium">
                  <CheckCircle2 className="w-4 h-4 text-elemental-sky shrink-0" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>

            {/* Landify Card Sub-Box */}
            <div className="p-4 rounded-2xl bg-canvas-raised border border-elemental-water/10 flex items-center justify-between text-xs font-mono">
              <span className="text-sandstone-muted">100% Offline Execution Guarantee</span>
              <span className="text-elemental-sky font-bold flex items-center gap-1">
                Zero Cloud Uploads <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
