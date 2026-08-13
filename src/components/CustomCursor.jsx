import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(max-width: 768px)').matches) return;

    setIsVisible(true);

    const mouse = { x: 0, y: 0 };
    const pos = { x: 0, y: 0 };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      gsap.to(cursorDotRef.current, {
        x: mouse.x,
        y: mouse.y,
        duration: 0.1,
        ease: 'power2.out'
      });
    };

    const render = () => {
      pos.x += (mouse.x - pos.x) * 0.15;
      pos.y += (mouse.y - pos.y) * 0.15;

      if (cursorRingRef.current) {
        gsap.set(cursorRingRef.current, {
          x: pos.x,
          y: pos.y
        });
      }

      requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', handleMouseMove);
    const animId = requestAnimationFrame(render);

    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, [data-cursor]');
      if (target) {
        setIsHovered(true);
        const text = target.getAttribute('data-cursor');
        if (text) setCursorText(text);
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target.closest('a, button, [data-cursor]');
      if (target) {
        setIsHovered(false);
        setCursorText('');
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Precision Sky Dot */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-elemental-sky -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_#0284C7]"
      />

      {/* Trailing Water Ring */}
      <div
        ref={cursorRingRef}
        className={`fixed top-0 left-0 rounded-full border border-elemental-water/40 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-300 ${
          isHovered
            ? 'w-16 h-16 bg-elemental-skySoft backdrop-blur-[2px] border-elemental-sky scale-110'
            : 'w-10 h-10 bg-transparent'
        }`}
      >
        {cursorText && (
          <span className="font-mono text-[9px] font-bold text-elemental-water tracking-tighter uppercase animate-fadeIn">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
}
