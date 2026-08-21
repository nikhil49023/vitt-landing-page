import React from 'react';
import { motion } from 'framer-motion';

// Seamless Blended Wrapper (Zero boxed borders, pure integrated vector art with soft ambient glow)
function BlendedVectorWrapper({ children, glowColor = 'from-elemental-sky/12' }) {
  return (
    <div className="w-full h-36 my-2 flex items-center justify-center relative overflow-visible select-none group/illus">
      {/* Soft Ambient Radial Backlight - Blends seamlessly into parent surface */}
      <div className={`absolute inset-0 bg-radial ${glowColor} via-transparent to-transparent opacity-60 group-hover/illus:opacity-100 transition-opacity duration-500 pointer-events-none blur-xl`} />
      
      {/* Vector Scene */}
      <div className="w-full h-full flex items-center justify-center relative z-10">
        {children}
      </div>
    </div>
  );
}

// 1. Auto Notification Expense Detection (Seamless Phone & Floating Glass Pills)
export function AnimatedNotificationVector() {
  return (
    <BlendedVectorWrapper glowColor="from-elemental-sky/15">
      <svg className="w-full h-full max-w-[260px] overflow-visible" viewBox="0 0 260 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Subtle Background Guide Phone Silhouette */}
        <rect x="80" y="6" width="100" height="98" rx="18" fill="#FAF8F5" stroke="#0F292F" strokeWidth="1.5" strokeOpacity="0.3" />
        <rect x="114" y="11" width="32" height="3.5" rx="1.75" fill="#0F292F" fillOpacity="0.2" />

        {/* Live Signal Arc */}
        <motion.path 
          d="M 120 5 Q 130 0 140 5" 
          stroke="#0284C7" 
          strokeWidth="2" 
          strokeLinecap="round" 
          fill="none"
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Floating Notification 1 (GPay / UPI) */}
        <motion.g
          animate={{ y: [0, -5, 0], x: [0, 2, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <rect x="16" y="22" width="145" height="32" rx="10" fill="#FFFFFF" stroke="#0284C7" strokeWidth="1.5" className="drop-shadow-md" />
          <circle cx="32" cy="38" r="8" fill="#0284C7" fillOpacity="0.12" />
          <path d="M 28 38 L 31 41 L 37 35" stroke="#0284C7" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="46" y="31" width="65" height="5" rx="2.5" fill="#0F292F" />
          <rect x="46" y="40" width="40" height="4" rx="2" fill="#0284C7" />
          <text x="136" y="41" fill="#0284C7" fontSize="9" fontFamily="monospace" fontWeight="bold">+₹1.4k</text>
        </motion.g>

        {/* Floating Notification 2 (Bank Debit Alert) */}
        <motion.g
          animate={{ y: [0, 5, 0], x: [0, -2, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
        >
          <rect x="98" y="60" width="145" height="32" rx="10" fill="#FFFFFF" stroke="#C2410C" strokeWidth="1.5" className="drop-shadow-md" />
          <circle cx="114" cy="76" r="8" fill="#C2410C" fillOpacity="0.12" />
          <path d="M 110 76 H 118 M 114 72 V 80" stroke="#C2410C" strokeWidth="1.75" strokeLinecap="round" />
          <rect x="128" y="69" width="68" height="5" rx="2.5" fill="#0F292F" />
          <rect x="128" y="78" width="48" height="4" rx="2" fill="#C2410C" />
          <text x="218" y="79" fill="#C2410C" fontSize="9" fontFamily="monospace" fontWeight="bold">-₹350</text>
        </motion.g>
      </svg>
    </BlendedVectorWrapper>
  );
}

// 2. On-Device Local AI (Integrated Neural Processor & Radiating SIMD Vector Lines)
export function AnimatedAIVector() {
  return (
    <BlendedVectorWrapper glowColor="from-elemental-sky/20">
      <svg className="w-full h-full max-w-[260px] overflow-visible" viewBox="0 0 260 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Revolving Orbital Rings */}
        <motion.ellipse 
          cx="130" cy="55" rx="60" ry="28" 
          stroke="#0284C7" strokeWidth="1.25" strokeDasharray="5 4" strokeOpacity="0.4"
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '130px 55px' }}
        />

        {/* Pulsating SIMD Vector Energy Streams */}
        <motion.line 
          x1="45" y1="55" x2="105" y2="55" 
          stroke="#0284C7" strokeWidth="2" strokeDasharray="4 4"
          animate={{ strokeDashoffset: [0, -20] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
        />
        <motion.line 
          x1="155" y1="55" x2="215" y2="55" 
          stroke="#0284C7" strokeWidth="2" strokeDasharray="4 4"
          animate={{ strokeDashoffset: [0, 20] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
        />
        <motion.line 
          x1="130" y1="16" x2="130" y2="36" 
          stroke="#C2410C" strokeWidth="1.75" strokeDasharray="4 4"
          animate={{ strokeDashoffset: [0, -16] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
        />
        <motion.line 
          x1="130" y1="74" x2="130" y2="94" 
          stroke="#C2410C" strokeWidth="1.75" strokeDasharray="4 4"
          animate={{ strokeDashoffset: [0, 16] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
        />

        {/* Vector Knowledge Nodes */}
        <motion.circle cx="40" cy="55" r="8" fill="#FAF8F5" stroke="#0F292F" strokeWidth="1.75" animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 2.5, repeat: Infinity }} />
        <motion.circle cx="220" cy="55" r="8" fill="#FAF8F5" stroke="#0F292F" strokeWidth="1.75" animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }} />
        <motion.circle cx="130" cy="12" r="6.5" fill="#FAF8F5" stroke="#0284C7" strokeWidth="1.75" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }} />
        <motion.circle cx="130" cy="98" r="6.5" fill="#FAF8F5" stroke="#C2410C" strokeWidth="1.75" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.8 }} />

        {/* Central LiteRT Neural Core */}
        <motion.rect 
          x="106" y="34" width="48" height="42" rx="10" 
          fill="#0F292F" className="drop-shadow-lg"
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '130px 55px' }}
        />
        {/* Core Glowing Iris */}
        <motion.circle 
          cx="130" cy="55" r="12" fill="#0284C7" fillOpacity="0.35"
          animate={{ scale: [1, 1.5, 1], opacity: [0.35, 0.75, 0.35] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <circle cx="130" cy="55" r="6" fill="#0284C7" />
      </svg>
    </BlendedVectorWrapper>
  );
}

// 3. Encrypted Vault & Vision OCR (Floating Document & Sweeping Laser Line)
export function AnimatedOCRVector() {
  return (
    <BlendedVectorWrapper glowColor="from-elemental-sky/15">
      <svg className="w-full h-full max-w-[260px] overflow-visible" viewBox="0 0 260 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Receipt Document */}
        <rect x="80" y="8" width="92" height="94" rx="8" fill="#FFFFFF" stroke="#0F292F" strokeWidth="1.5" className="drop-shadow-sm" />
        <rect x="94" y="20" width="64" height="4.5" rx="2.25" fill="#0F292F" />
        <rect x="94" y="30" width="46" height="3.5" rx="1.75" fill="#889F9E" />
        <rect x="94" y="38" width="54" height="3.5" rx="1.75" fill="#889F9E" />
        <rect x="94" y="50" width="64" height="5.5" rx="2.75" fill="#0284C7" fillOpacity="0.2" />
        <rect x="94" y="62" width="38" height="3.5" rx="1.75" fill="#889F9E" />
        <rect x="94" y="72" width="50" height="3.5" rx="1.75" fill="#889F9E" />

        {/* Sweeping Laser Scanner Beam */}
        <motion.g
          animate={{ y: [0, 68, 0] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <line x1="70" y1="20" x2="182" y2="20" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" />
          <circle cx="70" cy="20" r="2.5" fill="#0284C7" />
          <circle cx="182" cy="20" r="2.5" fill="#0284C7" />
        </motion.g>

        {/* Hardware Security Lock */}
        <motion.g 
          className="drop-shadow-lg"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{ transformOrigin: '185px 75px' }}
        >
          <rect x="170" y="64" width="28" height="24" rx="5" fill="#0F292F" />
          <path d="M 177 64 V 56 A 7 7 0 0 1 191 56 V 64" stroke="#0F292F" strokeWidth="2" fill="none" />
          <circle cx="184" cy="74" r="3" fill="#0284C7" />
          <path d="M 184 77 V 82" stroke="#0284C7" strokeWidth="1.75" strokeLinecap="round" />
        </motion.g>
      </svg>
    </BlendedVectorWrapper>
  );
}

// 4. Envelope Smart Budgets (Direct Envelopes with Dynamic Fill Waves)
export function AnimatedBudgetsVector() {
  return (
    <BlendedVectorWrapper glowColor="from-emerald-500/12">
      <svg className="w-full h-full max-w-[260px] overflow-visible" viewBox="0 0 260 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Envelope 1 */}
        <motion.g animate={{ y: [0, -4, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
          <rect x="22" y="18" width="62" height="74" rx="10" fill="#FFFFFF" stroke="#0284C7" strokeWidth="1.75" className="drop-shadow-sm" />
          <rect x="31" y="28" width="44" height="4.5" rx="2.25" fill="#0F292F" />
          <circle cx="53" cy="46" r="6.5" fill="#0284C7" fillOpacity="0.15" />
          <rect x="31" y="72" width="44" height="6.5" rx="3.25" fill="#FAF8F5" stroke="#0284C7" strokeWidth="1" />
          <motion.rect x="31" y="72" width="32" height="6.5" rx="3.25" fill="#0284C7" animate={{ width: [14, 40, 14] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} />
        </motion.g>

        {/* Envelope 2 */}
        <motion.g animate={{ y: [0, 4, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}>
          <rect x="99" y="18" width="62" height="74" rx="10" fill="#FFFFFF" stroke="#D97706" strokeWidth="1.75" className="drop-shadow-sm" />
          <rect x="108" y="28" width="44" height="4.5" rx="2.25" fill="#0F292F" />
          <circle cx="130" cy="46" r="6.5" fill="#D97706" fillOpacity="0.15" />
          <rect x="108" y="72" width="44" height="6.5" rx="3.25" fill="#FAF8F5" stroke="#D97706" strokeWidth="1" />
          <motion.rect x="108" y="72" width="36" height="6.5" rx="3.25" fill="#D97706" animate={{ width: [18, 42, 18] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }} />
        </motion.g>

        {/* Envelope 3 */}
        <motion.g animate={{ y: [0, -3, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}>
          <rect x="176" y="18" width="62" height="74" rx="10" fill="#FFFFFF" stroke="#C2410C" strokeWidth="1.75" className="drop-shadow-sm" />
          <rect x="185" y="28" width="44" height="4.5" rx="2.25" fill="#0F292F" />
          <circle cx="207" cy="46" r="6.5" fill="#C2410C" fillOpacity="0.15" />
          <rect x="185" y="72" width="44" height="6.5" rx="3.25" fill="#FAF8F5" stroke="#C2410C" strokeWidth="1" />
          <motion.rect x="185" y="72" width="40" height="6.5" rx="3.25" fill="#C2410C" animate={{ width: [22, 43, 22] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }} />
        </motion.g>
      </svg>
    </BlendedVectorWrapper>
  );
}

// 5. Financial Goals (Concentric Target & Animated Arrow)
export function AnimatedGoalsVector() {
  return (
    <BlendedVectorWrapper glowColor="from-elemental-sky/15">
      <svg className="w-full h-full max-w-[260px] overflow-visible" viewBox="0 0 260 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Concentric Rings */}
        <circle cx="130" cy="55" r="42" stroke="#0F292F" strokeWidth="1.5" fill="#FFFFFF" />
        <motion.circle 
          cx="130" cy="55" r="28" 
          stroke="#0284C7" strokeWidth="2" fill="none"
          animate={{ scale: [1, 1.07, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ transformOrigin: '130px 55px' }}
        />
        <circle cx="130" cy="55" r="14" fill="#0284C7" />
        <circle cx="130" cy="55" r="5" fill="#FAF8F5" />

        {/* Trajectory Path */}
        <motion.path 
          d="M 35 90 Q 85 18 130 50" 
          stroke="#C2410C" strokeWidth="2.5" strokeDasharray="4 4" fill="none"
          animate={{ strokeDashoffset: [0, -20] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
        />
        <motion.polygon points="130,44 137,53 126,51" fill="#C2410C" animate={{ scale: [1, 1.25, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
      </svg>
    </BlendedVectorWrapper>
  );
}

// 6. Wealth & SIP Compounding (Drawing Graph Curve & Milestone Rupee Orbs)
export function AnimatedInvestmentVector() {
  return (
    <BlendedVectorWrapper glowColor="from-elemental-fire/15">
      <svg className="w-full h-full max-w-[260px] overflow-visible" viewBox="0 0 260 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Graph Axes */}
        <path d="M 40 95 H 220 M 40 18 V 95" stroke="#0F292F" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="40" y1="70" x2="220" y2="70" stroke="#0F292F" strokeWidth="1" strokeDasharray="3 3" opacity="0.15" />
        <line x1="40" y1="45" x2="220" y2="45" stroke="#0F292F" strokeWidth="1" strokeDasharray="3 3" opacity="0.15" />

        {/* Compounding Curve drawing */}
        <motion.path 
          d="M 40 88 Q 130 82 210 24" 
          stroke="#0284C7" strokeWidth="3" fill="none" strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Growth Nodes */}
        <motion.circle cx="40" cy="88" r="4" fill="#0284C7" animate={{ scale: [1, 1.25, 1] }} transition={{ duration: 2, repeat: Infinity }} />
        <motion.circle cx="125" cy="78" r="4.5" fill="#0284C7" animate={{ scale: [1, 1.25, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.4 }} />
        
        {/* Peak Wealth Target */}
        <motion.g animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.8, repeat: Infinity, delay: 0.8 }} style={{ transformOrigin: '210px 24px' }}>
          <circle cx="210" cy="24" r="7" fill="#C2410C" />
          <circle cx="210" cy="24" r="3.5" fill="#FFFFFF" />
        </motion.g>
      </svg>
    </BlendedVectorWrapper>
  );
}

// 7. Cashflow Forecast (Gauge Needle Oscillating)
export function AnimatedCashflowVector() {
  return (
    <BlendedVectorWrapper glowColor="from-amber-500/12">
      <svg className="w-full h-full max-w-[260px] overflow-visible" viewBox="0 0 260 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 70 82 A 55 55 0 0 1 190 82" stroke="#0F292F" strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.1" />
        <path d="M 70 82 A 55 55 0 0 1 170 36" stroke="#0284C7" strokeWidth="8" fill="none" strokeLinecap="round" />

        {/* Smooth Oscillating Needle */}
        <motion.g
          animate={{ rotate: [-18, 22, -18] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '130px 82px' }}
        >
          <line x1="130" y1="82" x2="158" y2="40" stroke="#C2410C" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="130" cy="82" r="7" fill="#0F292F" />
          <circle cx="130" cy="82" r="3" fill="#FAF8F5" />
        </motion.g>
      </svg>
    </BlendedVectorWrapper>
  );
}

// 8. Split Groups & Khata (Rocking Scale)
export function AnimatedKhataVector() {
  return (
    <BlendedVectorWrapper glowColor="from-indigo-500/12">
      <svg className="w-full h-full max-w-[260px] overflow-visible" viewBox="0 0 260 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 130 18 V 86 M 90 92 H 170" stroke="#0F292F" strokeWidth="2.5" strokeLinecap="round" />
        <polygon points="130,18 125,26 135,26" fill="#0F292F" />

        <motion.g
          animate={{ rotate: [-7, 7, -7] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '130px 26px' }}
        >
          <line x1="60" y1="26" x2="200" y2="26" stroke="#0F292F" strokeWidth="2.5" strokeLinecap="round" />

          <line x1="60" y1="26" x2="48" y2="58" stroke="#0284C7" strokeWidth="1.25" />
          <line x1="60" y1="26" x2="72" y2="58" stroke="#0284C7" strokeWidth="1.25" />
          <path d="M 42 58 Q 60 68 78 58 Z" fill="#0284C7" fillOpacity="0.2" stroke="#0284C7" strokeWidth="1.75" />

          <line x1="200" y1="26" x2="188" y2="58" stroke="#C2410C" strokeWidth="1.25" />
          <line x1="200" y1="26" x2="212" y2="58" stroke="#C2410C" strokeWidth="1.25" />
          <path d="M 182 58 Q 200 68 218 58 Z" fill="#C2410C" fillOpacity="0.2" stroke="#C2410C" strokeWidth="1.75" />
        </motion.g>
      </svg>
    </BlendedVectorWrapper>
  );
}

// 9. Sovereign Security (Pulsing Shield & Concentric Waves)
export function AnimatedSecurityVector() {
  return (
    <BlendedVectorWrapper glowColor="from-elemental-water/20">
      <svg className="w-full h-full max-w-[260px] overflow-visible" viewBox="0 0 260 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.circle 
          cx="130" cy="52" r="32" 
          stroke="#0284C7" strokeWidth="1.25" fill="none"
          animate={{ scale: [0.8, 1.35, 0.8], opacity: [0.7, 0, 0.7] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          style={{ transformOrigin: '130px 52px' }}
        />

        <path d="M 130 16 L 170 30 V 56 C 170 78 152 92 130 98 C 108 92 90 78 90 56 V 30 L 130 16 Z" fill="#0F292F" />
        <path d="M 130 24 L 162 35 V 56 C 162 72 148 84 130 89 C 112 84 98 72 98 56 V 35 L 130 24 Z" fill="#FAF8F5" />
        
        <motion.g animate={{ scale: [1, 1.12, 1] }} transition={{ duration: 2, repeat: Infinity }} style={{ transformOrigin: '130px 56px' }}>
          <rect x="121" y="50" width="18" height="16" rx="3.5" fill="#0284C7" />
          <path d="M 125 50 V 44 A 5 5 0 0 1 135 44 V 50" stroke="#0284C7" strokeWidth="2" fill="none" />
        </motion.g>
      </svg>
    </BlendedVectorWrapper>
  );
}

// 10. Govt Schemes Directory (Temple Pillars & Verified Pills)
export function AnimatedGovtVector() {
  return (
    <BlendedVectorWrapper glowColor="from-elemental-sky/15">
      <svg className="w-full h-full max-w-[260px] overflow-visible" viewBox="0 0 260 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="75" y="80" width="110" height="8" rx="2.5" fill="#0F292F" />
        <rect x="80" y="30" width="100" height="8" rx="2.5" fill="#0F292F" />
        <polygon points="130,10 70,30 190,30" fill="#C2410C" />

        <rect x="92" y="38" width="10" height="42" fill="#0284C7" rx="2" fillOpacity="0.7" />
        <rect x="116" y="38" width="10" height="42" fill="#0284C7" rx="2" fillOpacity="0.7" />
        <rect x="140" y="38" width="10" height="42" fill="#0284C7" rx="2" fillOpacity="0.7" />
        <rect x="164" y="38" width="10" height="42" fill="#0284C7" rx="2" fillOpacity="0.7" />

        <motion.g animate={{ y: [0, -5, 0], x: [0, 3, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}>
          <rect x="28" y="40" width="44" height="20" rx="5" fill="#FFFFFF" stroke="#0284C7" strokeWidth="1.25" className="drop-shadow-md" />
          <text x="50" y="53" fill="#0284C7" fontSize="7.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">PM-KISAN</text>
        </motion.g>

        <motion.g animate={{ y: [0, 5, 0], x: [0, -3, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}>
          <rect x="188" y="40" width="44" height="20" rx="5" fill="#FFFFFF" stroke="#C2410C" strokeWidth="1.25" className="drop-shadow-md" />
          <text x="210" y="53" fill="#C2410C" fontSize="7.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">PPF 7.1%</text>
        </motion.g>
      </svg>
    </BlendedVectorWrapper>
  );
}

// 11. Scheduled UPI (Flash Arrow Along Schedule Path)
export function AnimatedUPIVector() {
  return (
    <BlendedVectorWrapper glowColor="from-teal-500/15">
      <svg className="w-full h-full max-w-[260px] overflow-visible" viewBox="0 0 260 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="88" y="16" width="84" height="74" rx="10" fill="#FFFFFF" stroke="#0F292F" strokeWidth="2" className="drop-shadow-md" />
        <path d="M 88 36 H 172" stroke="#0F292F" strokeWidth="2" />
        <rect x="106" y="10" width="7" height="10" rx="3" fill="#C2410C" />
        <rect x="147" y="10" width="7" height="10" rx="3" fill="#C2410C" />

        <motion.circle cx="130" cy="62" r="16" fill="#0284C7" animate={{ scale: [1, 1.12, 1] }} transition={{ duration: 2, repeat: Infinity }} />
        <motion.path 
          d="M 123 62 H 137 M 132 57 L 137 62 L 132 67" 
          stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          animate={{ x: [0, 3, 0] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        />
      </svg>
    </BlendedVectorWrapper>
  );
}
