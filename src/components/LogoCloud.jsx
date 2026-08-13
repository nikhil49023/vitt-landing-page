import React from 'react';

const PARTNERS = [
  'State Bank of India',
  'HDFC Bank',
  'ICICI Bank',
  'Axis Bank',
  'Kotak Mahindra',
  'Google Pay (GPay)',
  'PhonePe',
  'Paytm',
  'CRED'
];

export default function LogoCloud() {
  return (
    <section className="py-10 border-y border-elemental-water/10 bg-canvas-raised/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center space-y-4">
        <p className="text-xs font-mono font-semibold uppercase tracking-wider text-sandstone-muted">
          Supported Indian Banking & Payment Apps (100% On-Device Auto Parsing)
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-2 opacity-80">
          {PARTNERS.map((partner, idx) => (
            <div
              key={idx}
              className="px-4 py-2 rounded-xl bg-canvas border border-elemental-water/10 text-xs font-mono font-bold text-elemental-water shadow-xs hover:border-elemental-sky/40 transition-all hover:scale-105"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
