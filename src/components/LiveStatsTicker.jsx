import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Zap, Lock, EyeOff } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function LiveStatsTicker() {
  const tickerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.stat-card', {
        scrollTrigger: {
          trigger: tickerRef.current,
          start: 'top 80%',
        },
        y: 35,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      });
    }, tickerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={tickerRef} className="py-16 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
      <div className="p-8 md:p-12 rounded-[36px] glass-panel fine-border shadow-lg bg-canvas-raised/80">
        
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <h3 className="font-sans text-2xl md:text-3xl font-extrabold text-elemental-water">
            Sovereignty by the Numbers
          </h3>
          <p className="text-xs text-sandstone-muted font-mono">
            Empirical benchmark metrics of VITT's local execution stack
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Stat 1: 0 Cloud Uploads */}
          <div className="stat-card p-6 rounded-2xl bg-canvas fine-border text-center space-y-2 shadow-xs">
            <div className="w-10 h-10 mx-auto rounded-xl bg-elemental-skySoft border border-elemental-sky/30 flex items-center justify-center text-elemental-sky">
              <Shield className="w-5 h-5" />
            </div>
            <div className="font-mono text-4xl font-extrabold text-elemental-water tracking-tight">0</div>
            <p className="text-xs font-semibold text-elemental-water">Cloud Data Uploads</p>
            <p className="text-[10px] text-sandstone-muted font-mono">100% On-Device Storage</p>
          </div>

          {/* Stat 2: 130M+ ops/sec SIMD */}
          <div className="stat-card p-6 rounded-2xl bg-canvas fine-border text-center space-y-2 shadow-xs">
            <div className="w-10 h-10 mx-auto rounded-xl bg-elemental-skySoft border border-elemental-sky/30 flex items-center justify-center text-elemental-sky">
              <Zap className="w-5 h-5" />
            </div>
            <div className="font-mono text-4xl font-extrabold text-elemental-sky tracking-tight">130M+</div>
            <p className="text-xs font-semibold text-elemental-water">Ops/Sec Rust SIMD</p>
            <p className="text-[10px] text-sandstone-muted font-mono">Sub-3ms Vector Search</p>
          </div>

          {/* Stat 3: 100% AES-256 */}
          <div className="stat-card p-6 rounded-2xl bg-canvas fine-border text-center space-y-2 shadow-xs">
            <div className="w-10 h-10 mx-auto rounded-xl bg-elemental-skySoft border border-elemental-sky/30 flex items-center justify-center text-elemental-sky">
              <Lock className="w-5 h-5" />
            </div>
            <div className="font-mono text-4xl font-extrabold text-elemental-water tracking-tight">100%</div>
            <p className="text-xs font-semibold text-elemental-water">AES-256 SQLCipher</p>
            <p className="text-[10px] text-sandstone-muted font-mono">Hardware Key Protected</p>
          </div>

          {/* Stat 4: 0 READ_SMS */}
          <div className="stat-card p-6 rounded-2xl bg-canvas fine-border text-center space-y-2 shadow-xs">
            <div className="w-10 h-10 mx-auto rounded-xl bg-elemental-fireSoft border border-elemental-fire/30 flex items-center justify-center text-elemental-fire">
              <EyeOff className="w-5 h-5" />
            </div>
            <div className="font-mono text-4xl font-extrabold text-elemental-fire tracking-tight">0</div>
            <p className="text-xs font-semibold text-elemental-water">SMS Permissions</p>
            <p className="text-[10px] text-sandstone-muted font-mono">Notification Listener Only</p>
          </div>

        </div>

      </div>
    </section>
  );
}
