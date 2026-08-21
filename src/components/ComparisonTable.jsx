import React from 'react';
import { Check, X, Shield, Lock, Sparkles } from 'lucide-react';
import { ScrollReveal } from './animations';

export default function ComparisonTable() {
  const COMPARISONS = [
    {
      feature: 'Price & Subscriptions',
      vitt: '100% Free Forever (Zero Ads, Zero Paywalls)',
      others: 'Monthly Subscriptions or In-App Ads',
      status: true
    },
    {
      feature: 'Your Financial Data',
      vitt: 'Stored 100% Privately On Your Phone',
      others: 'Uploaded to Company Cloud Servers',
      status: true
    },
    {
      feature: 'SMS Inbox Access',
      vitt: 'Zero SMS Access (Never reads OTPs or personal texts)',
      others: 'Reads Full SMS Inbox',
      status: true
    },
    {
      feature: 'AI Financial Advisor',
      vitt: 'Private On-Device AI (Works 100% Offline)',
      others: 'Sends Conversations to Cloud or None',
      status: true
    },
    {
      feature: 'Receipt & Warranty Vault',
      vitt: 'Hardware-Encrypted Local Storage + Offline OCR',
      others: 'Requires Cloud Uploads or None',
      status: true
    },
    {
      feature: 'Group Bill Splitting',
      vitt: 'Built-in 1-Tap UPI QR Settle + WhatsApp Reminders',
      others: 'Requires Separate Paid Apps (Splitwise, etc.)',
      status: true
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Header */}
      <ScrollReveal>
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="px-3.5 py-1 rounded-full bg-elemental-skySoft text-elemental-sky font-mono text-xs font-semibold">
            Clear Honest Comparison
          </span>

          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-elemental-water tracking-tight">
            How VITT Compares to Other Apps
          </h2>

          <p className="text-sm text-sandstone-muted font-sans max-w-xl mx-auto leading-relaxed">
            See how VITT protects your peace of mind compared to traditional apps that sell your data or bombard you with loan calls.
          </p>
        </div>
      </ScrollReveal>

      {/* Comparison Table Container */}
      <ScrollReveal delay={0.2}>
        <div className="rounded-3xl glass-panel fine-border-water shadow-xl bg-canvas overflow-hidden max-w-5xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-canvas-raised border-b border-elemental-water/10 text-xs font-mono">
                  <th className="p-4 sm:p-5 text-elemental-water">Feature / Guarantee</th>
                  <th className="p-4 sm:p-5 text-elemental-sky font-extrabold text-sm flex items-center gap-1.5">
                    <Shield className="w-4 h-4" /> VITT App
                  </th>
                  <th className="p-4 sm:p-5 text-sandstone-muted font-semibold">Traditional Apps</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-elemental-water/10 text-xs">
                {COMPARISONS.map((row, idx) => (
                  <tr key={idx} className="hover:bg-canvas-raised/50 transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-elemental-water">{row.feature}</td>
                    <td className="p-4 sm:p-5 text-elemental-water font-semibold bg-elemental-skySoft/30">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-elemental-sky text-canvas flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span>{row.vitt}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-sandstone-muted">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-elemental-fire/10 text-elemental-fire flex items-center justify-center shrink-0">
                          <X className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span>{row.others}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </ScrollReveal>

    </section>
  );
}
