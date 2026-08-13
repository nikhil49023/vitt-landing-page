import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, Bot, PieChart, Receipt, CheckCircle2, Lock, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function PhoneShowcasePinned() {
  const sectionRef = useRef(null);
  const phoneRef = useRef(null);
  const scanLineRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const pinTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=300%',
          pin: true,
          scrub: 1.2,
          onUpdate: (self) => {
            const progress = self.progress;
            if (progress < 0.25) setActiveStep(0);
            else if (progress < 0.50) setActiveStep(1);
            else if (progress < 0.75) setActiveStep(2);
            else setActiveStep(3);
          }
        }
      });

      // 3D Perspective & Scale Scrub Sequence
      pinTimeline
        .fromTo(phoneRef.current, 
          { rotateX: 30, rotateY: -20, scale: 0.8, y: 50 }, 
          { rotateX: 0, rotateY: 0, scale: 1.1, y: 0, duration: 1, ease: 'none' }
        )
        .to(phoneRef.current, { scale: 1.0, duration: 1.5 });

      // Scan Line Laser Motion for OCR Step
      gsap.to(scanLineRef.current, {
        y: 120,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const STEPS = [
    {
      title: "01. Auto Notification Expense Detection",
      subtitle: "Captures transaction banners from GPay, PhonePe, Paytm, SBI, HDFC, ICICI, and CRED on-device without reading SMS.",
      badge: "Zero SMS Permissions (`READ_SMS` free)"
    },
    {
      title: "02. On-Device AI Advisor & ReAct Engine",
      subtitle: "Offline LLM execution (Gemma 4 E2B / Qwen 3 4B) paired with native Rust SIMD vector search (`TurboVec`) for sub-3ms RAG.",
      badge: ">130M Ops/sec SIMD Vector Similarity"
    },
    {
      title: "03. Envelope Smart Budgets & Simulator",
      subtitle: "Category spending caps with Green (<75%), Yellow (75-90%), and Red (≥90%) status bars and interactive purchase simulator.",
      badge: "Purchase Impact Simulator"
    },
    {
      title: "04. Encrypted Vault & Vision OCR",
      subtitle: "100% offline Latin + Devanagari receipt text recognition using Google ML Kit and hardware-backed SQLite SQLCipher.",
      badge: "AES-256 Hardware Keystore"
    }
  ];

  return (
    <section ref={sectionRef} className="h-screen w-full relative flex items-center justify-center overflow-hidden bg-canvas px-4 md:px-8">
      
      {/* Ambient Elemental Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[45rem] bg-elemental-sky/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* Left Side: Step Details */}
        <div className="lg:col-span-6 space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canvas-raised border border-elemental-sky/30 text-elemental-sky text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Pinned Showcase (Scroll to Scrub)</span>
          </div>

          <div className="space-y-3 min-h-[160px]">
            <h2 className="font-sans text-3xl md:text-4xl font-extrabold text-elemental-water tracking-tight transition-all duration-300">
              {STEPS[activeStep].title}
            </h2>
            
            <p className="text-sm text-sandstone-muted font-sans leading-relaxed transition-all duration-300">
              {STEPS[activeStep].subtitle}
            </p>

            <div className="pt-2">
              <span className="inline-block px-3 py-1 rounded-lg bg-elemental-skySoft text-elemental-sky border border-elemental-sky/30 font-mono text-xs font-semibold shadow-xs">
                ✓ {STEPS[activeStep].badge}
              </span>
            </div>
          </div>

          {/* Step Indicators */}
          <div className="flex gap-2 pt-4">
            {STEPS.map((_, idx) => (
              <motion.div
                key={idx}
                animate={{
                  width: activeStep === idx ? 48 : 16,
                  backgroundColor: activeStep === idx ? '#0F292F' : '#F3EFEA'
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="h-1.5 rounded-full border border-elemental-water/10"
              />
            ))}
          </div>

          {/* Feature Tags */}
          <div className="flex flex-wrap gap-2 pt-4">
            {['Notification Listener', 'On-Device AI', 'Envelope Budgets', 'AES-256'].map((tag, idx) => (
              <span
                key={tag}
                className={`px-2.5 py-1 rounded-full text-[10px] font-mono transition-all duration-300 ${
                  activeStep === idx 
                    ? 'bg-elemental-sky text-canvas shadow-sm' 
                    : 'bg-canvas-raised text-sandstone-muted border border-elemental-water/10'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>

        </div>

        {/* Right Side: Pinned 3D Phone Screen (Porcelain Light) */}
        <div className="lg:col-span-6 flex justify-center">
          <div
            ref={phoneRef}
            className="w-[320px] sm:w-[350px] rounded-[40px] bg-gradient-to-b from-canvas via-canvas-raised to-canvas-raised p-3 fine-border-water shadow-2xl transition-transform duration-200"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Speaker Notch */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 w-20 h-4 bg-canvas-raised rounded-full flex items-center justify-center z-30 border border-elemental-water/10">
              <div className="w-3 h-3 rounded-full bg-elemental-water/20 border border-elemental-water/30" />
            </div>

            {/* Screen Container */}
            <div className="rounded-[32px] bg-canvas border border-elemental-water/10 h-[520px] overflow-hidden flex flex-col justify-between p-4 shadow-inner relative">
              
              {/* Status Bar */}
              <div className="flex items-center justify-between text-[10px] text-sandstone-muted pt-2 pb-3 px-2 border-b border-elemental-water/5 font-mono">
                <span>09:41</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-elemental-skySoft text-elemental-sky font-semibold">100% OFFLINE</span>
                  <Lock className="w-3 h-3 text-elemental-sky" />
                </div>
              </div>

              {/* Dynamic Screen Scrub Content */}
              <div className="flex-1 my-3 overflow-y-auto space-y-3 font-sans relative">
                
                {activeStep === 0 && (
                  <div className="space-y-3 animate-fadeIn">
                    <div className="p-3 rounded-2xl bg-canvas-raised border border-elemental-sky/40 shadow-sm">
                      <div className="flex justify-between text-xs text-elemental-water mb-1">
                        <span className="font-semibold flex items-center gap-1">
                          <Bell className="w-3.5 h-3.5 text-elemental-sky" /> Banking Alert
                        </span>
                        <span className="text-[10px] font-mono text-sandstone-faint">Now</span>
                      </div>
                      <p className="text-xs text-elemental-water font-medium">HDFC: ₹1,450 debited at Swiggy</p>
                      <p className="text-[11px] text-elemental-sky font-mono font-semibold mt-1">✓ Category: Food & Dining</p>
                    </div>

                    <div className="p-3 rounded-2xl bg-canvas-raised/60 border border-elemental-water/5">
                      <div className="flex justify-between text-xs text-sandstone-muted mb-1">
                        <span className="font-semibold flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-elemental-sky" /> GPay Payment
                        </span>
                        <span className="text-[10px] font-mono text-sandstone-faint">1h ago</span>
                      </div>
                      <p className="text-xs text-elemental-water font-medium">Paid ₹420 at Starbucks India</p>
                    </div>
                  </div>
                )}

                {activeStep === 1 && (
                  <div className="space-y-3 text-xs animate-fadeIn">
                    <div className="p-2.5 rounded-xl bg-canvas-raised text-elemental-water ml-4 border border-elemental-water/10 font-sans">
                      What is my total dining spend this week?
                    </div>

                    <div className="p-3 rounded-2xl bg-elemental-skySoft border border-elemental-sky/30 text-elemental-water space-y-2">
                      <div className="flex items-center gap-1.5 text-elemental-sky font-semibold text-[11px]">
                        <Bot className="w-3.5 h-3.5" /> LiteRT Gemma 4 E2B
                      </div>
                      <p className="text-[11px] leading-relaxed">
                        You spent <strong className="font-mono text-elemental-water font-bold">₹2,840</strong> across 6 food orders this week.
                      </p>
                    </div>
                  </div>
                )}

                {activeStep === 2 && (
                  <div className="space-y-3 text-xs animate-fadeIn">
                    <div className="p-3 rounded-2xl bg-canvas-raised border border-elemental-water/10">
                      <div className="flex justify-between font-semibold mb-1">
                        <span className="text-elemental-water">Food Envelope</span>
                        <span className="text-elemental-sky font-mono">🟢 ₹7,200 / ₹10,000</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-canvas overflow-hidden my-2 border border-elemental-water/10">
                        <div className="h-full bg-elemental-sky w-[72%]" />
                      </div>
                    </div>
                  </div>
                )}

                {activeStep === 3 && (
                  <div className="space-y-3 text-xs animate-fadeIn relative">
                    {/* Laser Scanner Line */}
                    <div
                      ref={scanLineRef}
                      className="absolute inset-x-0 h-0.5 bg-elemental-sky shadow-[0_0_10px_#0284C7] top-2 z-20"
                    />

                    <div className="p-3 rounded-2xl bg-canvas-raised border border-elemental-sky/40">
                      <div className="flex items-center gap-2 mb-2 text-elemental-water">
                        <Receipt className="w-4 h-4 text-elemental-sky" />
                        <span className="font-semibold">Receipt ML Kit OCR</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-canvas border border-elemental-water/10 space-y-1 font-mono text-[10px]">
                        <p className="text-elemental-water font-semibold">Decathlon Sports India</p>
                        <p className="text-sandstone-muted">Date: 10 Aug 2026</p>
                        <p className="text-elemental-sky font-bold">Amount: ₹3,499.00</p>
                      </div>
                    </div>
                  </div>
                )}

              </div>

              {/* Bottom Nav */}
              <div className="pt-2 border-t border-elemental-water/10 flex justify-around text-[8px] text-sandstone-muted font-mono">
                <span className="text-elemental-sky font-bold">● Home</span>
                <span>● Budgets</span>
                <span>● AI Chat</span>
                <span>● Vault</span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
