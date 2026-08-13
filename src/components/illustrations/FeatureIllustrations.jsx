import React from 'react';

// Illustration 1: Auto Notification Expense Detection
export function IllustrationNotification() {
  return (
    <div className="w-full h-36 rounded-2xl bg-gradient-to-b from-canvas-raised to-canvas p-3 border border-elemental-water/10 flex flex-col justify-center items-center relative overflow-hidden my-3 shadow-xs">
      <svg className="w-full h-full" viewBox="0 0 240 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Phone Frame */}
        <rect x="70" y="10" width="100" height="80" rx="12" fill="#FAF8F5" stroke="#0F292F" strokeWidth="2"/>
        <rect x="100" y="14" width="40" height="4" rx="2" fill="#0F292F" opacity="0.2"/>
        
        {/* Notification Banner 1 */}
        <rect x="20" y="22" width="130" height="28" rx="8" fill="#FFFFFF" stroke="#0284C7" strokeWidth="1.5" className="shadow-sm"/>
        <circle cx="34" cy="36" r="6" fill="#0284C7" opacity="0.15"/>
        <path d="M34 32v8M30 36h8" stroke="#0284C7" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="46" y="28" width="65" height="5" rx="2.5" fill="#0F292F"/>
        <rect x="46" y="37" width="45" height="4" rx="2" fill="#0284C7"/>

        {/* Notification Banner 2 */}
        <rect x="90" y="54" width="130" height="28" rx="8" fill="#FFFFFF" stroke="#C2410C" strokeWidth="1.5" className="shadow-sm"/>
        <circle cx="104" cy="68" r="6" fill="#C2410C" opacity="0.15"/>
        <path d="M101 68l2 2 4-4" stroke="#C2410C" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="116" y="60" width="70" height="5" rx="2.5" fill="#0F292F"/>
        <rect x="116" y="69" width="50" height="4" rx="2" fill="#C2410C"/>
      </svg>
    </div>
  );
}

// Illustration 2: On-Device Local AI & Vector SIMD Engine
export function IllustrationAI() {
  return (
    <div className="w-full h-36 rounded-2xl bg-gradient-to-b from-canvas-raised to-canvas p-3 border border-elemental-water/10 flex flex-col justify-center items-center relative overflow-hidden my-3 shadow-xs">
      <svg className="w-full h-full" viewBox="0 0 240 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Central Local AI Chip */}
        <rect x="95" y="25" width="50" height="50" rx="10" fill="#0F292F"/>
        <circle cx="120" cy="50" r="14" fill="#0284C7" opacity="0.2"/>
        <circle cx="120" cy="50" r="8" fill="#0284C7"/>
        
        {/* SIMD Beams */}
        <path d="M40 50h45M155 50h45M120 15v10M120 75v10" stroke="#0284C7" strokeWidth="2" strokeDasharray="4 3"/>
        
        {/* Nodes */}
        <circle cx="35" cy="50" r="7" fill="#FAF8F5" stroke="#0F292F" strokeWidth="2"/>
        <circle cx="205" cy="50" r="7" fill="#FAF8F5" stroke="#0F292F" strokeWidth="2"/>
        <circle cx="120" cy="10" r="6" fill="#FAF8F5" stroke="#0284C7" strokeWidth="2"/>
        <circle cx="120" cy="90" r="6" fill="#FAF8F5" stroke="#C2410C" strokeWidth="2"/>
      </svg>
    </div>
  );
}

// Illustration 3: Encrypted Vault & Vision OCR
export function IllustrationOCR() {
  return (
    <div className="w-full h-36 rounded-2xl bg-gradient-to-b from-canvas-raised to-canvas p-3 border border-elemental-water/10 flex flex-col justify-center items-center relative overflow-hidden my-3 shadow-xs">
      <svg className="w-full h-full" viewBox="0 0 240 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Receipt Document */}
        <rect x="80" y="10" width="80" height="80" rx="6" fill="#FFFFFF" stroke="#0F292F" strokeWidth="2"/>
        <rect x="92" y="20" width="56" height="4" rx="2" fill="#0F292F"/>
        <rect x="92" y="30" width="40" height="3" rx="1.5" fill="#889F9E"/>
        <rect x="92" y="38" width="48" height="3" rx="1.5" fill="#889F9E"/>
        <rect x="92" y="50" width="56" height="5" rx="2.5" fill="#0284C7"/>
        
        {/* OCR Scan Line */}
        <line x1="70" y1="45" x2="170" y2="45" stroke="#0284C7" strokeWidth="2" strokeDasharray="3 3"/>
        
        {/* Hardware Lock */}
        <rect x="160" y="55" width="28" height="24" rx="5" fill="#0F292F"/>
        <path d="M167 55v-6a7 7 0 0114 0v6" stroke="#0F292F" strokeWidth="2" fill="none"/>
        <circle cx="174" cy="66" r="3" fill="#0284C7"/>
      </svg>
    </div>
  );
}

// Illustration 4: Envelope Smart Budgets
export function IllustrationBudgets() {
  return (
    <div className="w-full h-36 rounded-2xl bg-gradient-to-b from-canvas-raised to-canvas p-3 border border-elemental-water/10 flex flex-col justify-center items-center relative overflow-hidden my-3 shadow-xs">
      <svg className="w-full h-full" viewBox="0 0 240 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Envelope 1 Green */}
        <rect x="25" y="20" width="55" height="60" rx="8" fill="#FFFFFF" stroke="#0284C7" strokeWidth="2"/>
        <rect x="33" y="30" width="39" height="4" rx="2" fill="#0F292F"/>
        <rect x="33" y="62" width="39" height="6" rx="3" fill="#FAF8F5" stroke="#0284C7" strokeWidth="1"/>
        <rect x="33" y="62" width="28" height="6" rx="3" fill="#0284C7"/>

        {/* Envelope 2 Yellow */}
        <rect x="92" y="20" width="55" height="60" rx="8" fill="#FFFFFF" stroke="#D97706" strokeWidth="2"/>
        <rect x="100" y="30" width="39" height="4" rx="2" fill="#0F292F"/>
        <rect x="100" y="62" width="39" height="6" rx="3" fill="#FAF8F5" stroke="#D97706" strokeWidth="1"/>
        <rect x="100" y="62" width="34" height="6" rx="3" fill="#D97706"/>

        {/* Envelope 3 Red */}
        <rect x="160" y="20" width="55" height="60" rx="8" fill="#FFFFFF" stroke="#C2410C" strokeWidth="2"/>
        <rect x="168" y="30" width="39" height="4" rx="2" fill="#0F292F"/>
        <rect x="168" y="62" width="39" height="6" rx="3" fill="#FAF8F5" stroke="#C2410C" strokeWidth="1"/>
        <rect x="168" y="62" width="38" height="6" rx="3" fill="#C2410C"/>
      </svg>
    </div>
  );
}

// Illustration 5: Financial Goals & Pace Matching
export function IllustrationGoals() {
  return (
    <div className="w-full h-36 rounded-2xl bg-gradient-to-b from-canvas-raised to-canvas p-3 border border-elemental-water/10 flex flex-col justify-center items-center relative overflow-hidden my-3 shadow-xs">
      <svg className="w-full h-full" viewBox="0 0 240 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Target Bullseye */}
        <circle cx="120" cy="50" r="35" stroke="#0F292F" strokeWidth="2" fill="#FFFFFF"/>
        <circle cx="120" cy="50" r="24" stroke="#0284C7" strokeWidth="2" fill="none"/>
        <circle cx="120" cy="50" r="12" fill="#0284C7"/>
        
        {/* Progress Arrow */}
        <path d="M40 75 Q 80 25 120 45" stroke="#C2410C" strokeWidth="3" fill="none" strokeDasharray="4 4"/>
        <polygon points="120,40 125,50 115,48" fill="#C2410C"/>
      </svg>
    </div>
  );
}

// Illustration 6: Wealth & Investment Calculators
export function IllustrationInvestment() {
  return (
    <div className="w-full h-36 rounded-2xl bg-gradient-to-b from-canvas-raised to-canvas p-3 border border-elemental-water/10 flex flex-col justify-center items-center relative overflow-hidden my-3 shadow-xs">
      <svg className="w-full h-full" viewBox="0 0 240 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Grid Axis */}
        <path d="M40 80h160M40 20v60" stroke="#0F292F" strokeWidth="1.5" strokeLinecap="round"/>
        
        {/* Compounding Curve */}
        <path d="M40 70 Q 120 65 190 25" stroke="#0284C7" strokeWidth="3" fill="none"/>
        
        {/* Data points */}
        <circle cx="40" cy="70" r="4" fill="#0284C7"/>
        <circle cx="110" cy="62" r="4" fill="#0284C7"/>
        <circle cx="190" cy="25" r="5" fill="#C2410C"/>
      </svg>
    </div>
  );
}

// Illustration 7: Cashflow Runway & Resilience Score
export function IllustrationCashflow() {
  return (
    <div className="w-full h-36 rounded-2xl bg-gradient-to-b from-canvas-raised to-canvas p-3 border border-elemental-water/10 flex flex-col justify-center items-center relative overflow-hidden my-3 shadow-xs">
      <svg className="w-full h-full" viewBox="0 0 240 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Gauge Arc */}
        <path d="M80 70 A 45 45 0 0 1 160 70" stroke="#0F292F" strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.15"/>
        <path d="M80 70 A 45 45 0 0 1 145 35" stroke="#0284C7" strokeWidth="8" fill="none" strokeLinecap="round"/>
        
        {/* Needle */}
        <line x1="120" y1="70" x2="140" y2="40" stroke="#C2410C" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="120" cy="70" r="6" fill="#0F292F"/>
      </svg>
    </div>
  );
}

// Illustration 8: Split Groups & Khata
export function IllustrationKhata() {
  return (
    <div className="w-full h-36 rounded-2xl bg-gradient-to-b from-canvas-raised to-canvas p-3 border border-elemental-water/10 flex flex-col justify-center items-center relative overflow-hidden my-3 shadow-xs">
      <svg className="w-full h-full" viewBox="0 0 240 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Balance Scale */}
        <path d="M120 20v55M80 75h80" stroke="#0F292F" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M70 35h100" stroke="#0F292F" strokeWidth="2.5"/>
        
        {/* Left Pan */}
        <path d="M70 35l-15 25h30z" fill="#0284C7" opacity="0.2" stroke="#0284C7" strokeWidth="1.5"/>
        
        {/* Right Pan */}
        <path d="M170 35l-15 25h30z" fill="#C2410C" opacity="0.2" stroke="#C2410C" strokeWidth="1.5"/>
      </svg>
    </div>
  );
}

// Illustration 9: Sovereign Security
export function IllustrationSecurity() {
  return (
    <div className="w-full h-36 rounded-2xl bg-gradient-to-b from-canvas-raised to-canvas p-3 border border-elemental-water/10 flex flex-col justify-center items-center relative overflow-hidden my-3 shadow-xs">
      <svg className="w-full h-full" viewBox="0 0 240 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Shield */}
        <path d="M120 15L160 30v25c0 22-17 35-40 40-23-5-40-18-40-40V30l40-15z" fill="#0F292F"/>
        <path d="M120 23L150 35v20c0 16-12 26-30 30-18-4-30-14-30-30V35l30-12z" fill="#FAF8F5"/>
        
        {/* Lock icon */}
        <rect x="110" y="48" width="20" height="16" rx="3" fill="#0284C7"/>
        <path d="M114 48v-5a6 6 0 0112 0v5" stroke="#0284C7" strokeWidth="2" fill="none"/>
      </svg>
    </div>
  );
}

// Illustration 10: Govt Schemes Directory
export function IllustrationGovt() {
  return (
    <div className="w-full h-36 rounded-2xl bg-gradient-to-b from-canvas-raised to-canvas p-3 border border-elemental-water/10 flex flex-col justify-center items-center relative overflow-hidden my-3 shadow-xs">
      <svg className="w-full h-full" viewBox="0 0 240 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Pillar Building */}
        <rect x="70" y="70" width="100" height="8" fill="#0F292F"/>
        <rect x="75" y="25" width="90" height="8" fill="#0F292F"/>
        <polygon points="120,10 70,25 170,25" fill="#C2410C"/>
        
        {/* Pillars */}
        <rect x="85" y="33" width="10" height="37" fill="#0284C7"/>
        <rect x="108" y="33" width="10" height="37" fill="#0284C7"/>
        <rect x="131" y="33" width="10" height="37" fill="#0284C7"/>
        <rect x="154" y="33" width="10" height="37" fill="#0284C7"/>
      </svg>
    </div>
  );
}

// Illustration 11: Scheduled Payments & UPI
export function IllustrationUPI() {
  return (
    <div className="w-full h-36 rounded-2xl bg-gradient-to-b from-canvas-raised to-canvas p-3 border border-elemental-water/10 flex flex-col justify-center items-center relative overflow-hidden my-3 shadow-xs">
      <svg className="w-full h-full" viewBox="0 0 240 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Calendar Card */}
        <rect x="80" y="15" width="80" height="70" rx="8" fill="#FFFFFF" stroke="#0F292F" strokeWidth="2"/>
        <path d="M80 32h80" stroke="#0F292F" strokeWidth="2"/>
        <rect x="95" y="10" width="6" height="10" rx="3" fill="#C2410C"/>
        <rect x="139" y="10" width="6" height="10" rx="3" fill="#C2410C"/>
        
        {/* UPI Arrow */}
        <circle cx="120" cy="55" r="14" fill="#0284C7"/>
        <path d="M115 55h10M121 50l5 5-5 5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </div>
  );
}
