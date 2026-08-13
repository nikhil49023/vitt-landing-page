import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Download, ArrowRight, Lock, EyeOff, Cpu, Star, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import PhoneMockup3D from './PhoneMockup3D';
import FloatingRupeeCanvas from './FloatingRupeeCanvas';

export default function HeroSection({ onOpenTechnical, onOpenLegal }) {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-anim-item', {
        y: 35,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.12
      });

      gsap.from('.hero-badge-anim', {
        scale: 0.85,
        opacity: 0,
        duration: 0.7,
        ease: 'back.out(1.8)',
        delay: 0.1
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-[92vh] pt-12 pb-20 px-4 md:px-8 flex flex-col justify-center overflow-hidden bg-canvas">
      {/* Interactive Parallax Canvas (3D Rupee Coins & Banking Badges) */}
      <FloatingRupeeCanvas />

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: High-Impact Promotional Value Stack */}
        <div className="lg:col-span-7 space-y-7 text-left">
          
          {/* Top Pill: Rating & Social Proof */}
          <div className="hero-badge-anim inline-flex items-center gap-3 p-1.5 pr-4 rounded-full glass-panel fine-border-water shadow-sm">
            <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 font-mono text-[11px] font-bold">
              <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
              <span>4.9 / 5.0</span>
            </div>
            <span className="text-xs font-mono text-elemental-water">
              Sovereign Finance • Built by <strong className="text-elemental-sky font-semibold">Kilani Sai Nikhil</strong>
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="hero-anim-item font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-elemental-water leading-[1.12]">
              Track Every Rupee.<br />
              <span className="bg-gradient-to-r from-elemental-water via-elemental-sky to-elemental-sky bg-clip-text text-transparent">
                Keep Every Byte Private.
              </span>
            </h1>

            <p className="hero-anim-item font-sans text-base sm:text-lg text-sandstone-muted max-w-2xl leading-relaxed">
              India’s premier 100% free, local-first finance companion. Auto-parse GPay, PhonePe, Paytm & bank alerts instantly—no cloud uploads, no monthly fees, no SMS inbox reading.
            </p>
          </div>

          {/* Key Promotional Guarantees Bar */}
          <div className="hero-anim-item grid grid-cols-3 gap-3 pt-1 max-w-xl">
            <div className="p-3 rounded-2xl bg-canvas-raised border border-elemental-water/10 flex items-center gap-2.5 shadow-xs">
              <Lock className="w-4 h-4 text-elemental-sky shrink-0" />
              <div>
                <p className="text-xs font-bold text-elemental-water">100% Offline</p>
                <p className="text-[10px] text-sandstone-muted font-mono">Encrypted SQLite</p>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-canvas-raised border border-elemental-water/10 flex items-center gap-2.5 shadow-xs">
              <EyeOff className="w-4 h-4 text-elemental-sky shrink-0" />
              <div>
                <p className="text-xs font-bold text-elemental-water">0 SMS Reading</p>
                <p className="text-[10px] text-sandstone-muted font-mono">Notification Listener</p>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-canvas-raised border border-elemental-water/10 flex items-center gap-2.5 shadow-xs">
              <Cpu className="w-4 h-4 text-elemental-sky shrink-0" />
              <div>
                <p className="text-xs font-bold text-elemental-water">Local AI</p>
                <p className="text-[10px] text-sandstone-muted font-mono">Gemma / Qwen RAG</p>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="hero-anim-item flex flex-wrap items-center gap-4 pt-2">
            <a
              href="https://github.com/nikhil49023/VITT/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl bg-elemental-water text-canvas font-extrabold text-sm flex items-center gap-3 shadow-xl shadow-elemental-water/20 hover:bg-elemental-sky hover:scale-[1.02] active:scale-95 transition-all"
            >
              <Download className="w-5 h-5" />
              <span>Download VITT v3.0.0 APK</span>
            </a>

            <a
              href="#spotlight"
              className="px-6 py-4 rounded-2xl glass-panel fine-border text-elemental-water font-semibold text-sm flex items-center gap-2 hover:border-elemental-sky/50 transition-all"
            >
              <span>Explore Features</span>
              <ArrowRight className="w-4 h-4 text-elemental-sky" />
            </a>
          </div>

          {/* Open Source & Compliance Pill */}
          <div className="hero-anim-item flex items-center gap-4 text-[11px] text-sandstone-muted font-mono pt-1">
            <span className="flex items-center gap-1 text-elemental-sky font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" /> 100% Free Forever
            </span>
            <span>• Zero In-App Ads</span>
            <span>• DPDP Act 2023 Compliant</span>
          </div>

        </div>

        {/* Right Column: 3D Smartphone Container */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <PhoneMockup3D />
        </div>

      </div>
    </section>
  );
}
