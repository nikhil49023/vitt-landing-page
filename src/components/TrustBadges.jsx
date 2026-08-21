import React from 'react';
import { ShieldCheck, Lock, EyeOff, Fingerprint, CheckCircle2 } from 'lucide-react';
import { ScrollReveal, HoverEffect } from './animations';

const trustBadges = [
  {
    icon: ShieldCheck,
    label: "Sovereign Architecture",
    description: "Zero Cloud Uploads",
    color: "sage"
  },
  {
    icon: Lock,
    label: "Bank-Grade Vault",
    description: "SQLCipher AES-256",
    color: "forest"
  },
  {
    icon: EyeOff,
    label: "Zero SMS Reading",
    description: "100% Private UPI Tracking",
    color: "terracotta"
  },
  {
    icon: Fingerprint,
    label: "100% Free Forever",
    description: "Zero Ads • Zero Spam Calls",
    color: "ochre"
  }
];

const colorClasses = {
  sage: {
    bg: 'bg-earth-sageSoft',
    border: 'border-earth-sage/30',
    text: 'text-earth-forest',
    icon: 'text-earth-sage'
  },
  forest: {
    bg: 'bg-earth-forestSoft',
    border: 'border-earth-forest/25',
    text: 'text-earth-forest',
    icon: 'text-earth-forest'
  },
  terracotta: {
    bg: 'bg-earth-terracottaSoft',
    border: 'border-earth-terracotta/30',
    text: 'text-earth-forest',
    icon: 'text-earth-terracotta'
  },
  ochre: {
    bg: 'bg-earth-ochreSoft',
    border: 'border-earth-ochre/30',
    text: 'text-earth-forest',
    icon: 'text-earth-ochre'
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
