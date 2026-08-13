import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function FloatingRupeeCanvas() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 30;
        const yPos = (clientY / window.innerHeight - 0.5) * 30;

        gsap.to('.parallax-layer-1', {
          x: xPos * 1.5,
          y: yPos * 1.5,
          duration: 1,
          ease: 'power2.out'
        });

        gsap.to('.parallax-layer-2', {
          x: -xPos * 0.8,
          y: -yPos * 0.8,
          duration: 1.2,
          ease: 'power2.out'
        });
      };

      window.addEventListener('mousemove', handleMouseMove);

      gsap.to('.float-coin-1', {
        y: '-=15',
        rotation: 12,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      gsap.to('.float-coin-2', {
        y: '+=18',
        rotation: -15,
        duration: 4.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 0.5
      });

      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Parallax Layer 1: Terracotta Earth & Sky Blue 3D Rupee Coins */}
      <div className="parallax-layer-1 absolute inset-0">
        <div className="float-coin-1 absolute top-24 left-[5%] md:left-[8%] w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-tr from-elemental-fire via-elemental-earth to-elemental-wind p-[2px] shadow-xl opacity-90 backdrop-blur-sm">
          <div className="w-full h-full rounded-full bg-canvas/90 flex items-center justify-center border border-elemental-fire/30">
            <span className="font-mono text-2xl md:text-3xl font-extrabold text-elemental-fire drop-shadow-sm">₹</span>
          </div>
        </div>

        <div className="float-coin-2 absolute bottom-28 right-[4%] md:right-[7%] w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-tr from-elemental-sky via-sky-400 to-sky-100 p-[2px] shadow-xl opacity-85">
          <div className="w-full h-full rounded-full bg-canvas/90 flex items-center justify-center border border-elemental-sky/30">
            <span className="font-mono text-3xl md:text-4xl font-extrabold text-elemental-sky drop-shadow-sm">₹</span>
          </div>
        </div>
      </div>

      {/* Parallax Layer 2: Soft Elemental Bank Notification Cards */}
      <div className="parallax-layer-2 absolute inset-0">
        <div className="absolute top-1/3 left-[2%] md:left-[5%] max-w-[220px] p-3 rounded-xl glass-panel fine-border shadow-md hidden sm:block">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-elemental-skySoft border border-elemental-sky/30 flex items-center justify-center text-elemental-sky font-bold text-xs">
              GPay
            </div>
            <div>
              <p className="text-[11px] font-semibold text-elemental-water">Swiggy • ₹380</p>
              <p className="text-[9px] text-sandstone-muted font-mono">Auto-Categorized: Dining</p>
            </div>
          </div>
        </div>

        <div className="absolute top-1/2 right-[3%] md:right-[6%] max-w-[240px] p-3 rounded-xl glass-panel fine-border shadow-md hidden md:block">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-elemental-fireSoft border border-elemental-fire/30 flex items-center justify-center text-elemental-fire font-bold text-xs">
              HDFC
            </div>
            <div>
              <p className="text-[11px] font-semibold text-elemental-water">Salary • ₹85,000</p>
              <p className="text-[9px] text-sandstone-muted font-mono">100% On-Device Audit</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
