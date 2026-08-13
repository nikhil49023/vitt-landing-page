import React from 'react';
import { motion } from 'framer-motion';

export default function BackgroundBeams({
  className = '',
  beamCount = 5
}) {
  const beams = Array.from({ length: beamCount }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2
  }));

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {beams.map(beam => (
        <motion.div
          key={beam.id}
          className="absolute w-0.5 h-full bg-gradient-to-b from-transparent via-elemental-sky/20 to-transparent"
          style={{ left: `${beam.x}%` }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.5, 0],
            scaleY: [0.5, 1, 0.5]
          }}
          transition={{
            duration: beam.duration,
            repeat: Infinity,
            delay: beam.delay,
            ease: 'easeInOut'
          }}
        />
      ))}
    </div>
  );
}
