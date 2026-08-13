import React, { useEffect, useState, useRef } from 'react';

export default function InfiniteMovingCards({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className = ''
}) {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  function getDirection() {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty('--animation-direction', 'forwards');
      } else {
        containerRef.current.style.setProperty('--animation-direction', 'reverse');
      }
    }
  }

  function getSpeed() {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s');
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s');
      } else {
        containerRef.current.style.setProperty('--animation-duration', '80s');
      }
    }
  }

  return (
    <div
      ref={containerRef}
      className={`scroller relative z-20 max-w-7xl overflow-hidden ${className}`}
      style={{
        '--animation-direction': 'forwards',
        '--animation-duration': '40s'
      }}
    >
      <div
        ref={scrollerRef}
        className={`flex w-max gap-4 ${start ? 'animate-scroll' : ''}`}
        style={{
          animation: `scroll var(--animation-duration, 40s) linear infinite var(--animation-direction, forwards)`
        }}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-[350px] md:w-[400px] p-6 rounded-3xl bg-canvas glass-panel fine-border-water shadow-md flex flex-col justify-between space-y-4"
          >
            {item.content}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 0.5rem));
          }
        }
      `}</style>
    </div>
  );
}
