import React from 'react';
import { ShieldCheck, Lock, EyeOff, Fingerprint, CheckCircle2 } from 'lucide-react';
import { ScrollReveal, HoverEffect } from './animations';

const trustBadges = [
  {
    icon: ShieldCheck,
    label: "DPDP Act 2023",
    description: "Full Compliance",
    color: "emerald"
  },
  {
    icon: Lock,
    label: "AES-256",
    description: "Military-Grade Encryption",
    color: "blue"
  },
  {
    icon: EyeOff,
    label: "Zero SMS",
    description: "No Inbox Reading",
    color: "purple"
  },
  {
    icon: Fingerprint,
    label: "Biometric",
    description: "Hardware Security",
    color: "amber"
  }
];

const colorClasses = {
  emerald: {
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/30',
    text: 'text-emerald-600',
    icon: 'text-emerald-500'
  },
  blue: {
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/30',
    text: 'text-blue-600',
    icon: 'text-blue-500'
  },
  purple: {
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/30',
    text: 'text-purple-600',
    icon: 'text-purple-500'
  },
  amber: {
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/30',
    text: 'text-amber-600',
    icon: 'text-amber-500'
  }
};

export default function TrustBadges() {
  return (
    <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
      <ScrollReveal>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {trustBadges.map((badge, index) => (
            <HoverEffect key={badge.label} scale={1.05} y={-3}>
              <div className={`flex items-center gap-3 px-5 py-3 rounded-2xl ${colorClasses[badge.color].bg} border ${colorClasses[badge.color].border} shadow-sm`}>
                <div className={`w-10 h-10 rounded-xl ${colorClasses[badge.color].bg} border ${colorClasses[badge.color].border} flex items-center justify-center ${colorClasses[badge.color].icon}`}>
                  <badge.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className={`text-sm font-bold ${colorClasses[badge.color].text}`}>{badge.label}</p>
                  <p className="text-[11px] text-sandstone-muted font-mono">{badge.description}</p>
                </div>
                <CheckCircle2 className={`w-4 h-4 ${colorClasses[badge.color].icon} ml-2`} />
              </div>
            </HoverEffect>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
