import React from 'react';
import { Download, Lock, ShieldCheck, ArrowRight, Github } from 'lucide-react';

export default function CtaBanner({ onOpenTechnical }) {
  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Landify High-Contrast CTA Container */}
      <div className="p-8 md:p-14 rounded-[36px] bg-elemental-water text-canvas relative overflow-hidden shadow-2xl space-y-8">
        
        {/* Subtle Ambient Water Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-elemental-sky/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canvas/10 text-elemental-sky border border-elemental-sky/30 text-xs font-mono">
            <Lock className="w-3.5 h-3.5" />
            <span>100% Free • Zero Ads • Zero Cloud Uploads</span>
          </div>

          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Take Full Control of Your Financial Sovereignty Today
          </h2>

          <p className="text-sm text-canvas/80 font-sans leading-relaxed max-w-2xl">
            Download VITT v3.0.0 for Android 5.0+. Experience local banking notification tracking, on-device AI financial reasoning, and hardware-backed SQLCipher encryption.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 relative z-10 pt-2">
          <a
            href="https://github.com/nikhil49023/VITT/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 rounded-2xl bg-canvas text-elemental-water font-bold text-sm flex items-center gap-2 shadow-lg hover:bg-elemental-sky hover:text-canvas hover:scale-[1.02] active:scale-95 transition-all"
          >
            <Download className="w-4.5 h-4.5" />
            <span>Download VITT v3.0.0 APK</span>
          </a>

          <button
            onClick={onOpenTechnical}
            className="px-6 py-4 rounded-2xl bg-canvas/10 text-canvas font-semibold text-sm flex items-center gap-2 hover:bg-canvas/20 border border-canvas/20 transition-all"
          >
            <span>Read Technical Architecture</span>
            <ArrowRight className="w-4 h-4 text-elemental-sky" />
          </button>
        </div>

        {/* Landify Bottom Badges */}
        <div className="pt-6 border-t border-canvas/10 flex flex-wrap items-center justify-between text-xs font-mono text-canvas/70 gap-4 relative z-10">
          <div className="flex items-center gap-4">
            <span>• Android 5.0+ (API 21 minSdk)</span>
            <span>• Target API Level 35</span>
            <span>• Package: com.vitt.app</span>
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
    </section>
  );
}
