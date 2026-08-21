import React from 'react';
import { ShieldCheck, Lock, EyeOff, Fingerprint, CheckCircle2 } from 'lucide-react';
import { ScrollReveal, HoverEffect } from './animations';

const trustBadges = [
  {
    icon: ShieldCheck,
    label: "#1 in Privacy",
    description: "Zero Cloud Uploads",
    color: "sky"
  },
  {
    icon: Lock,
    label: "Bank-Grade Vault",
    description: "Hardware-Locked Storage",
    color: "water"
  },
  {
    icon: EyeOff,
    label: "Zero SMS Reading",
    description: "100% Private UPI Tracking",
    color: "earth"
  },
  {
    icon: Fingerprint,
    label: "100% Free Forever",
    description: "Zero Ads • Zero Spam Calls",
    color: "fire"
  }
];

const colorClasses = {
  sky: {
    bg: 'bg-elemental-skySoft',
    border: 'border-elemental-sky/30',
    text: 'text-elemental-sky',
    icon: 'text-elemental-sky'
  },
  water: {
    bg: 'bg-elemental-water/10',
    border: 'border-elemental-water/30',
    text: 'text-elemental-water',
    icon: 'text-elemental-water'
  },
  earth: {
    bg: 'bg-elemental-earth/10',
    border: 'border-elemental-earth/30',
    text: 'text-elemental-earth',
    icon: 'text-elemental-earth'
  },
  fire: {
    bg: 'bg-elemental-fireSoft',
    border: 'border-elemental-fire/30',
    text: 'text-elemental-fire',
    icon: 'text-elemental-fire'
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
