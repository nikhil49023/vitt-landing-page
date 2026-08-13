import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Bot, PieChart, Receipt, Bell, CheckCircle2, Lock, Sparkles } from 'lucide-react';

export default function PhoneMockup3D() {
  const [activeTab, setActiveTab] = useState('notifications');
  const phoneRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const handleMouseMove = (e) => {
        if (!phoneRef.current) return;
        const rect = phoneRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const rotateX = ((e.clientY - centerY) / window.innerHeight) * -14;
        const rotateY = ((e.clientX - centerX) / window.innerWidth) * 14;

        gsap.to(phoneRef.current, {
          rotateX,
          rotateY,
          duration: 0.8,
          ease: 'power2.out',
          transformPerspective: 1000,
        });
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, phoneRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative w-full max-w-[360px] md:max-w-[400px] mx-auto py-6">
      {/* Tab Controls above Phone */}
      <div className="flex items-center justify-center gap-1.5 p-1.5 mb-4 rounded-2xl glass-panel fine-border text-xs">
        <button
          onClick={() => setActiveTab('notifications')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-medium transition-all ${
            activeTab === 'notifications'
              ? 'bg-elemental-water text-canvas shadow-md font-semibold'
              : 'text-sandstone-muted hover:text-elemental-water'
          }`}
        >
          <Bell className="w-3.5 h-3.5" />
          <span>Alerts</span>
        </button>

        <button
          onClick={() => setActiveTab('ai')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-medium transition-all ${
            activeTab === 'ai'
              ? 'bg-elemental-water text-canvas shadow-md font-semibold'
              : 'text-sandstone-muted hover:text-elemental-water'
          }`}
        >
          <Bot className="w-3.5 h-3.5" />
          <span>Local AI</span>
        </button>

        <button
          onClick={() => setActiveTab('budgets')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-medium transition-all ${
            activeTab === 'budgets'
              ? 'bg-elemental-water text-canvas shadow-md font-semibold'
              : 'text-sandstone-muted hover:text-elemental-water'
          }`}
        >
          <PieChart className="w-3.5 h-3.5" />
          <span>Budgets</span>
        </button>

        <button
          onClick={() => setActiveTab('ocr')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-medium transition-all ${
            activeTab === 'ocr'
              ? 'bg-elemental-water text-canvas shadow-md font-semibold'
              : 'text-sandstone-muted hover:text-elemental-water'
          }`}
        >
          <Receipt className="w-3.5 h-3.5" />
          <span>OCR Vault</span>
        </button>
      </div>

      {/* 3D Phone Chassis Container (Light Porcelain) */}
      <div
        ref={phoneRef}
        className="relative rounded-[40px] bg-gradient-to-b from-canvas via-canvas-raised to-canvas-raised p-3 fine-border-water shadow-2xl transition-transform duration-300 ease-out"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Speaker Notch */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 w-20 h-4 bg-canvas-raised rounded-full flex items-center justify-center z-30 border border-elemental-water/10">
          <div className="w-3 h-3 rounded-full bg-elemental-water/20 border border-elemental-water/30" />
        </div>

        {/* Screen Container */}
        <div className="relative rounded-[32px] bg-canvas border border-elemental-water/10 h-[560px] overflow-hidden flex flex-col justify-between p-4 shadow-inner">
          
          {/* Status Bar */}
          <div className="flex items-center justify-between text-[10px] text-sandstone-muted pt-2 pb-3 px-2 border-b border-elemental-water/5 font-mono">
            <span>09:41</span>
            <div className="flex items-center gap-1.5">
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-elemental-skySoft text-elemental-sky border border-elemental-sky/30 font-semibold">100% OFFLINE</span>
              <Lock className="w-3 h-3 text-elemental-sky" />
            </div>
          </div>

          {/* Screen Content based on Active Tab */}
          <div className="flex-1 my-3 overflow-y-auto pr-1 space-y-3 font-sans">
            {activeTab === 'notifications' && (
              <div className="space-y-3 animate-fadeIn">
                <div className="p-3 rounded-2xl bg-canvas-raised border border-elemental-sky/30 shadow-sm">
                  <div className="flex items-center justify-between text-xs text-elemental-water mb-1">
                    <span className="font-semibold flex items-center gap-1">
                      <Bell className="w-3.5 h-3.5 text-elemental-sky" /> Bank Notification Detected
                    </span>
                    <span className="text-[10px] font-mono text-sandstone-faint">Now</span>
                  </div>
                  <p className="text-xs text-elemental-water font-medium">HDFC Alert: ₹1,250 debited for Blinkit</p>
                  <div className="mt-2 pt-2 border-t border-elemental-water/5 flex items-center justify-between text-[11px]">
                    <span className="text-elemental-sky font-mono font-semibold">✓ Auto-Categorized: Groceries</span>
                    <span className="text-[10px] text-sandstone-muted font-mono">Zero SMS</span>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-canvas-raised/60 border border-elemental-water/5">
                  <div className="flex items-center justify-between text-xs text-sandstone-muted mb-1">
                    <span className="font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-elemental-sky" /> GPay Payment
                    </span>
                    <span className="text-[10px] font-mono text-sandstone-faint">2h ago</span>
                  </div>
                  <p className="text-xs text-elemental-water font-medium">Paid ₹420 at Starbucks India</p>
                  <p className="text-[11px] text-sandstone-muted mt-1 font-mono">Category: Food & Dining</p>
                </div>
              </div>
            )}

            {activeTab === 'ai' && (
              <div className="space-y-3 text-xs animate-fadeIn">
                <div className="p-2.5 rounded-xl bg-canvas-raised text-elemental-water ml-4 border border-elemental-water/10">
                  How much did I spend on dining out this week?
                </div>

                <div className="p-3 rounded-2xl bg-elemental-skySoft border border-elemental-sky/30 text-elemental-water space-y-2">
                  <div className="flex items-center gap-1.5 text-elemental-sky font-semibold text-[11px]">
                    <Sparkles className="w-3.5 h-3.5" /> LiteRT-LM (Gemma 4 E2B)
                  </div>
                  <p className="text-[11px] leading-relaxed">
                    Based on your local transaction ledger, you spent <strong className="font-mono text-elemental-water font-bold">₹2,840</strong> across 6 food orders this week.
                  </p>
                  <div className="p-2 rounded-lg bg-canvas font-mono text-[10px] text-sandstone-muted border border-elemental-water/10">
                    💡 You are 14% under your weekly Food Envelope limit.
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'budgets' && (
              <div className="space-y-3 text-xs animate-fadeIn">
                <div className="p-3 rounded-2xl bg-canvas-raised border border-elemental-water/10">
                  <div className="flex justify-between font-semibold mb-1">
                    <span className="text-elemental-water">Food & Dining</span>
                    <span className="text-elemental-sky font-mono">🟢 ₹7,200 / ₹10,000</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-canvas overflow-hidden my-2 border border-elemental-water/10">
                    <div className="h-full bg-elemental-sky w-[72%]" />
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-canvas-raised border border-elemental-water/10">
                  <div className="flex justify-between font-semibold mb-1">
                    <span className="text-elemental-water">Shopping & Lifestyle</span>
                    <span className="text-elemental-fire font-mono">🟡 ₹4,100 / ₹5,000</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-canvas overflow-hidden my-2 border border-elemental-water/10">
                    <div className="h-full bg-elemental-fire w-[82%]" />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'ocr' && (
              <div className="space-y-3 text-xs animate-fadeIn">
                <div className="p-3 rounded-2xl bg-canvas-raised border border-elemental-sky/30">
                  <div className="flex items-center gap-2 mb-2 text-elemental-water">
                    <Receipt className="w-4 h-4 text-elemental-sky" />
                    <span className="font-semibold">Receipt OCR Extracted</span>
                  </div>
                  <div className="p-2 rounded-xl bg-canvas border border-elemental-water/10 space-y-1 font-mono text-[10px]">
                    <p className="text-elemental-water font-semibold">Decathlon Sports India</p>
                    <p className="text-sandstone-muted">Date: 10 Aug 2026</p>
                    <p className="text-elemental-sky font-bold">Total: ₹3,499.00 (Devanagari/Latin)</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Nav */}
          <div className="pt-2 border-t border-elemental-water/10 flex justify-around text-sandstone-muted">
            <div className="flex flex-col items-center gap-0.5 text-elemental-sky">
              <span className="text-[9px] font-mono font-bold">Home</span>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <span className="text-[9px] font-mono">Budgets</span>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <span className="text-[9px] font-mono">AI Chat</span>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <span className="text-[9px] font-mono">Vault</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
