import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function AnimatedHeroMascot() {
  const [isWaving, setIsWaving] = useState(false);

  return (
    <div className="relative w-full max-w-[420px] mx-auto flex items-center justify-center p-4 select-none group">
      {/* Ambient Pulsing Aura */}
      <div className="absolute w-72 h-72 rounded-full bg-elemental-sky/15 blur-3xl -z-10 animate-pulse pointer-events-none" />

      {/* Floating Currency & Shield Badges */}
      <motion.div 
        className="absolute -top-3 left-4 z-20 px-3 py-1.5 rounded-2xl bg-canvas/90 backdrop-blur-md fine-border shadow-lg flex items-center gap-2"
        animate={{ y: [0, -8, 0], rotate: [-2, 2, -2] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
        <span className="text-xs font-mono font-bold text-elemental-water">+₹1,450 GPay Auto</span>
      </motion.div>

      <motion.div 
        className="absolute bottom-8 -right-2 z-20 px-3 py-1.5 rounded-2xl bg-canvas/90 backdrop-blur-md fine-border shadow-lg flex items-center gap-2"
        animate={{ y: [0, 8, 0], rotate: [2, -2, 2] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      >
        <span className="text-xs">🛡️</span>
        <span className="text-xs font-mono font-bold text-elemental-water">AES-256 On-Device</span>
      </motion.div>

      {/* Main 2D Vector Character Canvas */}
      <svg 
        className="w-full h-auto max-h-[460px] drop-shadow-2xl cursor-pointer" 
        viewBox="0 0 400 480" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => setIsWaving(!isWaving)}
      >
        {/* Ground Platform Shadow */}
        <ellipse cx="200" cy="450" rx="140" ry="18" fill="#0F292F" fillOpacity="0.08" />

        {/* Legs & Shoes */}
        <rect x="165" y="320" width="28" height="105" rx="12" fill="#526E75" />
        <rect x="205" y="320" width="28" height="105" rx="12" fill="#526E75" />
        <path d="M 155 425 C 155 425 155 445 190 445 H 195 V 425 H 155 Z" fill="#0F292F" />
        <path d="M 205 425 C 205 425 205 445 245 445 H 250 V 425 H 205 Z" fill="#0F292F" />

        {/* Torso / Jacket (Gentle Breathing Animation) */}
        <motion.g
          animate={{ scaleY: [1, 1.02, 1], scaleX: [1, 0.99, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '200px 320px' }}
        >
          {/* Main Coat */}
          <path d="M 140 180 L 155 330 H 245 L 260 180 C 260 180 230 160 200 160 C 170 160 140 180 140 180 Z" fill="#0284C7" />
          {/* Shirt Inner */}
          <polygon points="185,165 215,165 208,240 192,240" fill="#FAF8F5" />
          <line x1="200" y1="170" x2="200" y2="330" stroke="#0F292F" strokeWidth="2" strokeOpacity="0.4" />
          <circle cx="200" cy="200" r="3" fill="#0F292F" />
          <circle cx="200" cy="230" r="3" fill="#0F292F" />
          <circle cx="200" cy="260" r="3" fill="#0F292F" />
        </motion.g>

        {/* Left Arm holding Smartphone */}
        <g>
          <path d="M 145 180 L 110 260 L 140 280" stroke="#0284C7" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="140" cy="280" r="12" fill="#FFC999" />

          {/* Smartphone device with glowing screen */}
          <motion.g
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <rect x="120" y="225" width="46" height="75" rx="8" fill="#0F292F" stroke="#FFFFFF" strokeWidth="2" className="drop-shadow-lg" />
            <rect x="124" y="233" width="38" height="58" rx="4" fill="#0284C7" fillOpacity="0.2" />
            {/* Screen UI Lines */}
            <rect x="128" y="240" width="22" height="4" rx="2" fill="#0284C7" />
            <rect x="128" y="248" width="30" height="3" rx="1.5" fill="#FAF8F5" />
            <rect x="128" y="255" width="18" height="3" rx="1.5" fill="#FAF8F5" />
            {/* Rupee Graph on phone */}
            <path d="M 128 275 Q 138 270 154 262" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" />
            
            {/* Pulsing Signal Wave */}
            <motion.circle 
              cx="143" cy="220" r="10" 
              stroke="#0284C7" strokeWidth="1.5" fill="none"
              animate={{ scale: [0.8, 1.8, 0.8], opacity: [0.8, 0, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.g>
        </g>

        {/* Right Arm: Waving Hello Animation */}
        <motion.g
          animate={{ 
            rotate: isWaving ? [-15, 25, -15, 25, 0] : [0, 8, -4, 0],
          }}
          transition={{ 
            duration: isWaving ? 1.2 : 4, 
            repeat: Infinity, 
            ease: 'easeInOut' 
          }}
          style={{ transformOrigin: '255px 180px' }}
        >
          {/* Upper Arm & Forearm waving upward */}
          <path d="M 255 180 L 295 140 L 320 85" stroke="#0284C7" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round" />
          
          {/* Hand Palm */}
          <circle cx="322" cy="80" r="14" fill="#FFC999" />
          {/* Fingers waving */}
          <line x1="320" y1="80" x2="320" y2="64" stroke="#FFC999" strokeWidth="5" strokeLinecap="round" />
          <line x1="326" y1="82" x2="330" y2="66" stroke="#FFC999" strokeWidth="5" strokeLinecap="round" />
          <line x1="332" y1="86" x2="340" y2="72" stroke="#FFC999" strokeWidth="5" strokeLinecap="round" />
          <line x1="314" y1="84" x2="306" y2="76" stroke="#FFC999" strokeWidth="5" strokeLinecap="round" />

          {/* Floating Sparkles above waving hand */}
          <motion.circle 
            cx="345" cy="60" r="3" fill="#F59E0B"
            animate={{ scale: [0, 1.4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
          />
          <motion.circle 
            cx="310" cy="50" r="2.5" fill="#0284C7"
            animate={{ scale: [0, 1.4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.7 }}
          />
        </motion.g>

        {/* Head, Hair & Friendly Face */}
        <g>
          {/* Neck */}
          <rect x="190" y="145" width="20" height="20" rx="5" fill="#FFC999" />
          
          {/* Face Base */}
          <ellipse cx="200" cy="120" rx="35" ry="38" fill="#FFC999" />
          {/* Ears */}
          <circle cx="165" cy="122" r="7" fill="#FFC999" />
          <circle cx="235" cy="122" r="7" fill="#FFC999" />

          {/* Hair */}
          <path d="M 162 110 C 162 80 180 70 200 70 C 225 70 238 80 238 110 C 230 96 220 90 200 90 C 180 90 170 98 162 110 Z" fill="#0F292F" />
          
          {/* Geek Glasses */}
          <rect x="174" y="110" width="22" height="16" rx="4" fill="none" stroke="#0F292F" strokeWidth="2.5" />
          <rect x="204" y="110" width="22" height="16" rx="4" fill="none" stroke="#0F292F" strokeWidth="2.5" />
          <line x1="196" y1="117" x2="204" y2="117" stroke="#0F292F" strokeWidth="2.5" />

          {/* Eyes Blinking */}
          <motion.g
            animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
            transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.45, 0.5, 0.55, 1] }}
            style={{ transformOrigin: '200px 118px' }}
          >
            <circle cx="185" cy="118" r="3.5" fill="#0F292F" />
            <circle cx="215" cy="118" r="3.5" fill="#0F292F" />
            <circle cx="186" cy="116.5" r="1" fill="#FFFFFF" />
            <circle cx="216" cy="116.5" r="1" fill="#FFFFFF" />
          </motion.g>

          {/* Cheerful Smile */}
          <path d="M 190 136 Q 200 146 210 136" stroke="#C2410C" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        </g>
      </svg>
      
      {/* Click Hint */}
      <span className="absolute bottom-2 text-[10px] font-mono text-sandstone-muted opacity-60 group-hover:opacity-100 transition-opacity">
        ✨ Click mascot to wave
      </span>
    </div>
  );
}
