import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function InteractiveCanvasBackground() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle nodes for ambient fluid grid
    const numParticles = Math.min(Math.floor(width / 35), 45);
    const particles = [];
    const mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2, radius: 180 };

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 1,
        baseAlpha: Math.random() * 0.25 + 0.1,
        color: i % 3 === 0 ? 'rgba(2, 132, 199,' : i % 3 === 1 ? 'rgba(15, 41, 47,' : 'rgba(194, 65, 12,'
      });
    }

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Render loop
    const render = () => {
      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      ctx.clearRect(0, 0, width, height);

      // Draw subtle ambient radial glow around cursor
      const radialGlow = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 450);
      radialGlow.addColorStop(0, 'rgba(2, 132, 199, 0.06)');
      radialGlow.addColorStop(0.5, 'rgba(194, 65, 12, 0.02)');
      radialGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = radialGlow;
      ctx.fillRect(0, 0, width, height);

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around boundaries
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Mouse repulsion
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          p.x -= (dx / dist) * force * 3;
          p.y -= (dy / dist) * force * 3;
        }

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color} ${p.baseAlpha})`;
        ctx.fill();

        // Connect nearby particles with delicate hairline lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist2 = Math.hypot(p.x - p2.x, p.y - p2.y);

          if (dist2 < 140) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(15, 41, 47, ${0.04 * (1 - dist2 / 140)})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // GSAP parallax for floating 3D elements
    const ctxGsap = gsap.context(() => {
      gsap.to('.awwwards-coin-1', {
        y: '-=20',
        rotationY: 25,
        rotationZ: 8,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      gsap.to('.awwwards-coin-2', {
        y: '+=24',
        rotationY: -25,
        rotationZ: -10,
        duration: 4.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 0.4
      });

      gsap.to('.awwwards-badge-float', {
        y: '-=12',
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.3
      });
    }, containerRef);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      ctxGsap.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Interactive Fluid Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Floating 3D Geometric Coins with Glass Sheen */}
      <div className="absolute inset-0">
        {/* Top-Left Floating Sovereign Coin */}
        <div className="awwwards-coin-1 absolute top-20 left-[4%] md:left-[7%] w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-tr from-elemental-fire via-elemental-earth to-amber-200 p-[1.5px] shadow-2xl shadow-elemental-fire/20 opacity-90 backdrop-blur-md">
          <div className="w-full h-full rounded-full bg-canvas/85 flex items-center justify-center border border-elemental-fire/30 shadow-inner">
            <span className="font-mono text-2xl md:text-3xl font-extrabold text-elemental-fire drop-shadow-sm">₹</span>
          </div>
        </div>

        {/* Bottom-Right Floating Sky Blue Coin */}
        <div className="awwwards-coin-2 absolute bottom-24 right-[3%] md:right-[6%] w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-tr from-elemental-sky via-cyan-400 to-sky-100 p-[1.5px] shadow-2xl shadow-elemental-sky/20 opacity-85 backdrop-blur-md">
          <div className="w-full h-full rounded-full bg-canvas/85 flex items-center justify-center border border-elemental-sky/30 shadow-inner">
            <span className="font-mono text-3xl md:text-4xl font-extrabold text-elemental-sky drop-shadow-sm">₹</span>
          </div>
        </div>

        {/* Floating Mini Ambient Badges */}
        <div className="awwwards-badge-float absolute top-1/3 left-[2%] md:left-[4%] max-w-[210px] p-3 rounded-2xl glass-panel fine-border shadow-lg hidden lg:block">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-elemental-skySoft border border-elemental-sky/30 flex items-center justify-center text-elemental-sky font-bold text-xs">
              GPay
            </div>
            <div>
              <p className="text-[11px] font-bold text-elemental-water">Swiggy • ₹380</p>
              <p className="text-[9px] text-sandstone-muted font-mono">Auto-Categorized</p>
            </div>
          </div>
        </div>

        <div className="awwwards-badge-float absolute top-1/2 right-[2%] md:right-[4%] max-w-[230px] p-3 rounded-2xl glass-panel fine-border shadow-lg hidden lg:block">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-elemental-fireSoft border border-elemental-fire/30 flex items-center justify-center text-elemental-fire font-bold text-xs">
              HDFC
            </div>
            <div>
              <p className="text-[11px] font-bold text-elemental-water">Salary Credited</p>
              <p className="text-[9px] text-sandstone-muted font-mono">100% Offline Vault</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
