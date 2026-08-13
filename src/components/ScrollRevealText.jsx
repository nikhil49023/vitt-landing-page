import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollRevealText({ text, className = '' }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = containerRef.current.querySelectorAll('.reveal-word');
      
      gsap.fromTo(
        words,
        { opacity: 0.15, y: 8 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            end: 'bottom 50%',
            scrub: 0.8,
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [text]);

  const words = text.split(' ');

  return (
    <div ref={containerRef} className={`flex flex-wrap gap-x-2 gap-y-1 ${className}`}>
      {words.map((word, idx) => (
        <span key={idx} className="reveal-word inline-block transition-colors duration-200">
          {word}
        </span>
      ))}
    </div>
  );
}
