import React from 'react';

const BADGES = [
  { name: 'State Bank of India (SBI)', type: 'bank' },
  { name: 'HDFC Bank Alert Parsing', type: 'bank' },
  { name: 'ICICI Bank Support', type: 'bank' },
  { name: 'Axis Bank & Kotak', type: 'bank' },
  { name: 'Google Pay (GPay)', type: 'upi' },
  { name: 'PhonePe Intent', type: 'upi' },
  { name: 'Paytm Banking Banners', type: 'upi' },
  { name: 'CRED Financial Alerts', type: 'upi' },
  { name: '100% AES-256 SQLCipher', type: 'sec' },
  { name: 'LiteRT-LM Gemma 4 E2B', type: 'ai' },
  { name: 'TurboVec Rust SIMD Engine', type: 'tech' },
  { name: 'Zero READ_SMS Permission', type: 'sec' },
];

export default function MarqueeTicker() {
  return (
    <div className="w-full py-5 glass-panel border-y border-elemental-water/10 overflow-hidden relative z-10 my-10">
      <div className="flex w-max gap-6 animate-[marquee_28s_linear_infinite]">
        {[...BADGES, ...BADGES].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-canvas-raised border border-elemental-water/10 text-xs font-mono shrink-0 text-elemental-water shadow-xs"
          >
            <span className="w-2 h-2 rounded-full bg-elemental-sky animate-pulse" />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
