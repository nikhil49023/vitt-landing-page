import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    q: "Is VITT really 100% free with zero advertisements or hidden paywalls?",
    a: "Yes, 100%. VITT was developed by Kilani Sai Nikhil as an independent public utility project. There are zero subscription fees, zero ads, zero paywalls, and zero monetization tricks."
  },
  {
    q: "How does auto expense tracking work without reading my SMS inbox?",
    a: "VITT uses Android's native NotificationListenerService to read payment banners from GPay, PhonePe, Paytm, SBI, HDFC, ICICI, etc., right when they appear on your status bar. It never asks for invasive READ_SMS permissions."
  },
  {
    q: "Does the AI assistant require internet access to answer my questions?",
    a: "No! VITT runs Google LiteRT-LM (Gemma / Qwen) directly on your smartphone hardware. Your transactions are indexed locally using native Rust SIMD vector search (TurboVec). You can ask questions and get insights 100% offline."
  },
  {
    q: "Can I split group bills for trips or rent and track IOUs (Khata)?",
    a: "Yes! VITT includes full group bill splitting and informal debt tracking ('You Lent' vs 'You Borrowed'). You can generate customized WhatsApp payment reminders with one tap."
  },
  {
    q: "Where is my financial data stored, and can anyone else see it?",
    a: "Your data is stored 100% on your device inside an AES-256 SQLCipher encrypted SQLite database. Zero transaction logs leave your phone."
  }
];

export default function FaqAccordion() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-20 px-4 md:px-8 max-w-4xl mx-auto relative z-10">
      
      {/* Header */}
      <div className="text-center space-y-4 mb-14">
        <span className="px-3.5 py-1 rounded-full bg-canvas-raised text-elemental-water font-mono text-xs font-semibold">
          Got Questions?
        </span>

        <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-elemental-water tracking-tight">
          Frequently Asked Questions
        </h2>

        <p className="text-sm text-sandstone-muted font-sans max-w-lg mx-auto leading-relaxed">
          Everything you need to know about VITT's features, privacy guarantees, and local AI.
        </p>
      </div>

      {/* FAQ Accordion List */}
      <div className="space-y-4">
        {FAQS.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className="rounded-2xl glass-panel fine-border-water overflow-hidden transition-all duration-200 bg-canvas shadow-xs"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full p-5 text-left flex items-center justify-between font-bold text-sm text-elemental-water hover:text-elemental-sky transition-colors"
              >
                <span className="flex items-center gap-3">
                  <HelpCircle className="w-4 h-4 text-elemental-sky shrink-0" />
                  <span>{faq.q}</span>
                </span>
                <ChevronDown className={`w-4 h-4 text-sandstone-muted transition-transform duration-300 shrink-0 ${
                  isOpen ? 'rotate-180 text-elemental-sky' : ''
                }`} />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs text-sandstone-muted leading-relaxed font-sans border-t border-elemental-water/5 animate-fadeIn">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

    </section>
  );
}
