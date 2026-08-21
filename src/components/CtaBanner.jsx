import React from 'react';
import { Download, Lock, ShieldCheck, ArrowRight, Github, CheckCircle2, Sparkles } from 'lucide-react';
import { ScrollReveal } from './animations';

export default function CtaBanner({ onOpenTechnical }) {
  return (
    <section className="py-16 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto relative z-10">
      
      <ScrollReveal>
        <div className="p-8 sm:p-12 md:p-14 rounded-[36px] bg-earth-forest text-canvas relative overflow-hidden shadow-2xl border border-earth-forest/40">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-earth-sage/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-canvas/10 text-canvas border border-canvas/20 text-xs font-mono">
                <Lock className="w-3.5 h-3.5 text-earth-ochre" />
                <span>100% Free Forever • Zero Ads • No Sign-up Required</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight text-canvas">
                Take Full Sovereign Control of Your Money Today
              </h2>

              <p className="text-sm sm:text-base text-canvas/80 font-sans leading-relaxed max-w-2xl">
                Download VITT free for Android. Experience effortless automatic UPI tracking, proactive envelope budgets, and your own private offline AI coach with zero cloud leaks and zero spam.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="https://github.com/nikhil49023/VITT/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-4 rounded-2xl bg-canvas text-earth-forest font-extrabold text-sm flex items-center gap-2.5 shadow-lg hover:bg-earth-ochre hover:text-earth-forest hover:scale-[1.02] active:scale-95 transition-all"
                >
                  <Download className="w-4.5 h-4.5" />
                  <span>Download Free for Android</span>
                </a>

                <button
                  onClick={onOpenTechnical}
                  className="px-6 py-4 rounded-2xl bg-canvas/10 text-canvas font-semibold text-sm flex items-center gap-2 hover:bg-canvas/20 border border-canvas/20 transition-all"
                >
                  <span>Technical Specs</span>
                  <ArrowRight className="w-4 h-4 text-earth-ochre" />
                </button>
              </div>
            </div>

            {/* Right Clean Spec Card */}
            <div className="lg:col-span-4 flex justify-center items-center">
              <div className="w-full max-w-sm p-6 rounded-3xl bg-canvas/10 backdrop-blur-md border border-canvas/20 space-y-4 text-left shadow-xl">
                <div className="flex items-center justify-between pb-3 border-b border-canvas/10">
                  <div className="flex items-center gap-2 font-mono font-bold text-sm text-canvas">
                    <ShieldCheck className="w-5 h-5 text-earth-sage" />
                    <span>VITT v3.0.0</span>
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-earth-sage/30 text-canvas font-bold">Stable</span>
                </div>

                <div className="space-y-2.5 text-xs text-canvas/90">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-earth-sage shrink-0" />
                    <span>Android 5.0+ (Universal APK)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-earth-sage shrink-0" />
                    <span>Zero Cloud Accounts or Logins</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-earth-sage shrink-0" />
                    <span>Hardware-Locked AES-256 Storage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-earth-sage shrink-0" />
                    <span>DPDP Act 2023 Compliant</span>
                  </div>
                </div>

                <div className="pt-2 text-[11px] font-mono text-canvas/60">
                  100% Open-Source Public Utility
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Footer Metadata */}
          <div className="mt-8 pt-6 border-t border-canvas/10 flex flex-wrap items-center justify-between text-xs font-mono text-canvas/70 gap-4 relative z-10">
            <div className="flex flex-wrap items-center gap-4">
              <span>• Android 5.0+ (API 21 minSdk)</span>
              <span>• Package: com.vitt.app</span>
              <span>• No Ads Forever</span>
            </div>

            <a 
              href="https://github.com/nikhil49023/VITT" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-canvas transition-colors flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" /> GitHub Repository
            </a>
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
}
