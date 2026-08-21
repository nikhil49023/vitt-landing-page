import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Download, ArrowRight, Lock, EyeOff, Cpu, CheckCircle2 } from 'lucide-react';
import PhoneMockupFrame from './PhoneMockupFrame';
import InteractiveCanvasBackground from './InteractiveCanvasBackground';
import { TextGenerateEffect, Sparkles as SparklesEffect } from './animations';

export default function HeroSection({ onOpenTechnical, onOpenLegal }) {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-anim-item', {
        y: 40,
        opacity: 0,
        duration: 1.0,
        ease: 'power3.out',
        stagger: 0.14
      });

      gsap.from('.hero-badge-anim', {
        scale: 0.85,
        opacity: 0,
        duration: 0.8,
        ease: 'back.out(2.0)',
        delay: 0.1
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 md:px-8 overflow-hidden bg-canvas"
    >
      {/* Subtle Sandstone Canvas Background */}
      <InteractiveCanvasBackground />

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: High-Impact Promotional Value Stack */}
        <div className="lg:col-span-7 space-y-7 text-left">
          
          {/* Top Pill: Production Build Status & Sovereignty Guarantee */}
          <div className="hero-badge-anim inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-canvas-raised border border-earth-forest/15 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-earth-sage animate-pulse" />
            <span className="text-xs font-mono text-earth-forest font-semibold">
              Universal Android Build · 100% Free & Open-Source Utility
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="hero-anim-item font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-earth-forest leading-[1.14]">
              <TextGenerateEffect 
                words={["Track Every Rupee Automatically.", "Zero Manual Typing. Zero Spam. 100% Private."]} 
                speed={55}
              />
            </h1>

            <p className="hero-anim-item font-sans text-base sm:text-lg text-sandstone-muted max-w-2xl leading-relaxed">
              Pay for chai, groceries, or bills as usual. VITT automatically detects your UPI payments from GPay, PhonePe, Paytm, and bank alerts. No manual typing, zero reading of your personal SMS, and your financial data never leaves your phone.
            </p>
          </div>

          {/* Key Promotional Guarantees Bar - Human Benefits */}
          <div className="hero-anim-item grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 max-w-xl">
            <div className="p-3.5 rounded-2xl bg-canvas-card border border-earth-forest/10 flex items-center gap-2.5 shadow-xs">
              <div className="w-8 h-8 rounded-xl bg-earth-sageSoft text-earth-sage flex items-center justify-center shrink-0">
                <Lock className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-earth-forest">100% Private</p>
                <p className="text-[10px] text-sandstone-muted font-mono">Data stays on your phone</p>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-canvas-card border border-earth-forest/10 flex items-center gap-2.5 shadow-xs">
              <div className="w-8 h-8 rounded-xl bg-earth-terracottaSoft text-earth-terracotta flex items-center justify-center shrink-0">
                <EyeOff className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-earth-forest">Zero SMS Access</p>
                <p className="text-[10px] text-sandstone-muted font-mono">Never reads private texts</p>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-canvas-card border border-earth-forest/10 flex items-center gap-2.5 shadow-xs">
              <div className="w-8 h-8 rounded-xl bg-earth-ochreSoft text-earth-ochre flex items-center justify-center shrink-0">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-earth-forest">Offline AI Coach</p>
                <p className="text-[10px] text-sandstone-muted font-mono">100% on-device inference</p>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="hero-anim-item flex flex-wrap items-center gap-4 pt-2">
            <SparklesEffect count={8}>
              <a
                href="https://github.com/nikhil49023/VITT/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl bg-earth-forest text-canvas font-extrabold text-sm flex items-center gap-3 shadow-xl shadow-earth-forest/20 hover:bg-earth-sage hover:scale-[1.02] active:scale-95 transition-all"
              >
                <Download className="w-5 h-5" />
                <span>Download Free for Android</span>
              </a>
            </SparklesEffect>

            <a
              href="#how-it-works"
              className="px-6 py-4 rounded-2xl bg-canvas-raised border border-earth-forest/15 text-earth-forest font-semibold text-sm flex items-center gap-2 hover:bg-canvas-subtle transition-all"
            >
              <span>See How It Works</span>
              <ArrowRight className="w-4 h-4 text-earth-forest" />
            </a>
          </div>

          {/* Open Source & Peace of Mind Pill */}
          <div className="hero-anim-item flex flex-wrap items-center gap-4 text-[11px] text-sandstone-muted font-mono pt-1">
            <span className="flex items-center gap-1 text-earth-sage font-bold">
              <CheckCircle2 className="w-3.5 h-3.5" /> 100% Free Forever
            </span>
            <span>• Zero In-App Ads</span>
            <span>• Zero Spam Calls</span>
          </div>

        </div>

        {/* Right Column: Clean Realistic Phone Mockup Frame */}
        <div className="lg:col-span-5 relative flex items-center justify-center pt-6 lg:pt-0">
          <PhoneMockupFrame imageSrc="/mockups/hero-phone.png" />
        </div>

      </div>
    </section>
  );
}
