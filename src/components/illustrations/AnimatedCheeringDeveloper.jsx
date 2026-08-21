import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function AnimatedCheeringDeveloper() {
  const [jumpCount, setJumpCount] = useState(0);

  return (
    <div 
      className="relative w-full max-w-[320px] mx-auto flex items-center justify-center p-2 select-none cursor-pointer group"
      onClick={() => setJumpCount(c => c + 1)}
    >
      {/* Ambient Pulsing Glow behind Mascot */}
      <div className="absolute w-64 h-64 rounded-full bg-elemental-sky/20 blur-3xl -z-10 animate-pulse pointer-events-none" />

      {/* Floating Celebratory Badges */}
      <motion.div 
        className="absolute -top-2 right-2 z-20 px-2.5 py-1 rounded-full bg-canvas/90 backdrop-blur-md fine-border shadow-lg flex items-center gap-1.5"
        animate={{ y: [0, -6, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-xs">⭐</span>
        <span className="text-[11px] font-mono font-bold text-elemental-water">Open Source Utility</span>
      </motion.div>

      {/* Main Cheering Vector Character Canvas */}
      <motion.svg 
        key={jumpCount}
        className="w-full h-auto max-h-[380px] drop-shadow-2xl" 
        viewBox="0 0 400 480" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Ground Platform Glow Shadow */}
        <ellipse cx="200" cy="450" rx="130" ry="16" fill="#0284C7" fillOpacity="0.2" />

        {/* Legs & Bouncing Shoes */}
        <rect x="165" y="310" width="26" height="110" rx="10" fill="#D4E2D7" />
        <rect x="210" y="310" width="26" height="110" rx="10" fill="#D4E2D7" />
        <path d="M 155 420 C 155 420 155 440 190 440 H 195 V 420 H 155 Z" fill="#0F292F" />
        <path d="M 210 420 C 210 420 210 440 245 440 H 250 V 420 H 210 Z" fill="#0F292F" />

        {/* Torso & Hoodie */}
        <motion.g
          animate={{ scaleY: [1, 1.03, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '200px 310px' }}
        >
          <path d="M 140 180 L 155 320 H 245 L 260 180 C 260 180 230 160 200 160 C 170 160 140 180 140 180 Z" fill="#0284C7" />
          <polygon points="185,165 215,165 208,230 192,230" fill="#FAF8F5" />
          <line x1="200" y1="170" x2="200" y2="320" stroke="#0F292F" strokeWidth="2" strokeOpacity="0.4" />
          <circle cx="200" cy="200" r="3" fill="#0F292F" />
          <circle cx="200" cy="230" r="3" fill="#0F292F" />
          <circle cx="200" cy="260" r="3" fill="#0F292F" />
        </motion.g>

        {/* Left Arm: Cheering Raised Upward with continuous wave */}
        <motion.g
          animate={{ rotate: [-8, 12, -8] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '145px 180px' }}
        >
          <path d="M 145 180 L 105 130 L 85 75" stroke="#0284C7" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="80" cy="70" r="14" fill="#FFC999" />
          {/* Celebrating Fingers */}
          <line x1="80" y1="70" x2="70" y2="55" stroke="#FFC999" strokeWidth="5" strokeLinecap="round" />
          <line x1="85" y1="70" x2="82" y2="52" stroke="#FFC999" strokeWidth="5" strokeLinecap="round" />
          <line x1="90" y1="72" x2="92" y2="56" stroke="#FFC999" strokeWidth="5" strokeLinecap="round" />
        </motion.g>

        {/* Right Arm: Cheering Raised Upward with continuous wave */}
        <motion.g
          animate={{ rotate: [8, -12, 8] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
          style={{ transformOrigin: '255px 180px' }}
        >
          <path d="M 255 180 L 295 130 L 315 75" stroke="#0284C7" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="320" cy="70" r="14" fill="#FFC999" />
          {/* Celebrating Fingers */}
          <line x1="320" y1="70" x2="330" y2="55" stroke="#FFC999" strokeWidth="5" strokeLinecap="round" />
          <line x1="315" y1="70" x2="318" y2="52" stroke="#FFC999" strokeWidth="5" strokeLinecap="round" />
          <line x1="310" y1="72" x2="308" y2="56" stroke="#FFC999" strokeWidth="5" strokeLinecap="round" />
        </motion.g>

        {/* Head, Hair & Smiling Face */}
        <g>
          <rect x="190" y="145" width="20" height="20" rx="5" fill="#FFC999" />
          <ellipse cx="200" cy="120" rx="35" ry="38" fill="#FFC999" />
          <circle cx="165" cy="122" r="7" fill="#FFC999" />
          <circle cx="235" cy="122" r="7" fill="#FFC999" />

          {/* Hair */}
          <path d="M 162 110 C 162 80 180 70 200 70 C 225 70 238 80 238 110 C 230 96 220 90 200 90 C 180 90 170 98 162 110 Z" fill="#0F292F" />
          
          {/* Programmer Glasses */}
          <rect x="174" y="110" width="22" height="16" rx="4" fill="none" stroke="#0F292F" strokeWidth="2.5" />
          <rect x="204" y="110" width="22" height="16" rx="4" fill="none" stroke="#0F292F" strokeWidth="2.5" />
          <line x1="196" y1="117" x2="204" y2="117" stroke="#0F292F" strokeWidth="2.5" />

          {/* Happy Eyes (Winking / Blinking) */}
          <motion.g
            animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
            transition={{ duration: 3, repeat: Infinity, times: [0, 0.45, 0.5, 0.55, 1] }}
            style={{ transformOrigin: '200px 118px' }}
          >
            <circle cx="185" cy="118" r="3.5" fill="#0F292F" />
            <circle cx="215" cy="118" r="3.5" fill="#0F292F" />
            <circle cx="186" cy="116.5" r="1" fill="#FFFFFF" />
            <circle cx="216" cy="116.5" r="1" fill="#FFFFFF" />
          </motion.g>

          {/* Joyful Open Smile */}
          <path d="M 188 132 Q 200 150 212 132 Z" fill="#C2410C" />
          <path d="M 192 132 Q 200 138 208 132" stroke="#FFFFFF" strokeWidth="2" fill="none" />
        </g>

        {/* Floating Celebratory Confetti & Stars */}
        <motion.circle cx="90" cy="45" r="3.5" fill="#F59E0B" animate={{ y: [0, -10, 0], opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity }} />
        <motion.circle cx="310" cy="40" r="3.5" fill="#0284C7" animate={{ y: [0, -10, 0], opacity: [0.4, 1, 0.4] }} transition={{ duration: 2.2, repeat: Infinity, delay: 0.3 }} />
        <motion.rect x="130" y="40" width="6" height="6" rx="1.5" fill="#10B981" animate={{ rotate: 360, y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }} />
        <motion.rect x="260" y="40" width="6" height="6" rx="1.5" fill="#EC4899" animate={{ rotate: -360, y: [0, -8, 0] }} transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }} />
      </motion.svg>
    </div>
  );
}
