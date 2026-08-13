import React from 'react';
import { motion } from 'framer-motion';
import { 
  Bell, Database, Brain, Shield, Smartphone, 
  ArrowRight, CheckCircle2, Zap, Lock, Sparkles 
} from 'lucide-react';
import { ScrollReveal } from './animations';

const PIPELINE_STEPS = [
  {
    id: 1,
    icon: Bell,
    title: "Bank Notification",
    subtitle: "GPay, PhonePe, Paytm, SBI, HDFC",
    color: "sky",
    description: "Android NotificationListenerService captures transaction alerts"
  },
  {
    id: 2,
    icon: Zap,
    title: "Regex Parser",
    subtitle: "On-Device Pattern Matching",
    color: "earth",
    description: "Extracts amount, merchant, and category from notification text"
  },
  {
    id: 3,
    icon: Lock,
    title: "AES-256 Encryption",
    subtitle: "SQLCipher + Hardware Key",
    color: "fire",
    description: "Encrypts transaction data before storing in local SQLite database"
  },
  {
    id: 4,
    icon: Database,
    title: "Encrypted Ledger",
    subtitle: "100% On-Device Storage",
    color: "water",
    description: "Transaction history stored locally with zero cloud uploads"
  },
  {
    id: 5,
    icon: Brain,
    title: "On-Device AI",
    subtitle: "Gemma 4 E2B / Qwen 3 4B",
    color: "sky",
    description: "LiteRT-LM processes financial queries with RAG context"
  },
  {
    id: 6,
    icon: Shield,
    title: "Personalized Insights",
    subtitle: "Budget Alerts & Recommendations",
    color: "earth",
    description: "AI-generated spending insights and budget recommendations"
  }
];

const colorMap = {
  sky: {
    bg: 'bg-elemental-skySoft',
    border: 'border-elemental-sky/30',
    text: 'text-elemental-sky',
    icon: 'text-elemental-sky',
    line: 'bg-elemental-sky/30'
  },
  earth: {
    bg: 'bg-elemental-earth/10',
    border: 'border-elemental-earth/30',
    text: 'text-elemental-earth',
    icon: 'text-elemental-earth',
    line: 'bg-elemental-earth/30'
  },
  fire: {
    bg: 'bg-elemental-fireSoft',
    border: 'border-elemental-fire/30',
    text: 'text-elemental-fire',
    icon: 'text-elemental-fire',
    line: 'bg-elemental-fire/30'
  },
  water: {
    bg: 'bg-elemental-water/10',
    border: 'border-elemental-water/30',
    text: 'text-elemental-water',
    icon: 'text-elemental-water',
    line: 'bg-elemental-water/30'
  }
};

export default function ArchitecturePipeline() {
  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative z-10 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-elemental-sky/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Section Header */}
      <ScrollReveal>
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-canvas-raised border border-elemental-sky/30 text-elemental-sky text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Architecture</span>
          </div>

          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-elemental-water tracking-tight">
            Sovereign Data Pipeline
          </h2>

          <p className="text-sm text-sandstone-muted font-sans max-w-2xl mx-auto leading-relaxed">
            From bank notification to personalized insights — 100% on-device, zero cloud dependency.
          </p>
        </div>
      </ScrollReveal>

      {/* Pipeline Visualization */}
      <ScrollReveal delay={0.2}>
        <div className="max-w-6xl mx-auto">
          
          {/* Desktop: Horizontal Pipeline */}
          <div className="hidden lg:block">
            <div className="flex items-center justify-between relative">
              
              {/* Connection Lines */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-elemental-sky/20 via-elemental-earth/20 to-elemental-sky/20 -translate-y-1/2 z-0" />
              
              {PIPELINE_STEPS.map((step, idx) => {
                const StepIcon = step.icon;
                const colors = colorMap[step.color];
                
                return (
                  <React.Fragment key={step.id}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="relative z-10 flex flex-col items-center"
                    >
                      <div className={`w-16 h-16 rounded-2xl ${colors.bg} border ${colors.border} flex items-center justify-center ${colors.icon} shadow-lg mb-3`}>
                        <StepIcon className="w-7 h-7" />
                      </div>
                      <div className="text-center max-w-[120px]">
                        <p className="text-xs font-bold text-elemental-water mb-0.5">{step.title}</p>
                        <p className="text-[10px] text-sandstone-muted font-mono">{step.subtitle}</p>
                      </div>
                    </motion.div>
                    
                    {idx < PIPELINE_STEPS.length - 1 && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 + 0.05, duration: 0.3 }}
                        viewport={{ once: true }}
                        className="relative z-10"
                      >
                        <ArrowRight className="w-5 h-5 text-elemental-sky/40" />
                      </motion.div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Mobile: Vertical Pipeline */}
          <div className="lg:hidden space-y-4">
            {PIPELINE_STEPS.map((step, idx) => {
              const StepIcon = step.icon;
              const colors = colorMap[step.color];
              
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className={`w-12 h-12 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center ${colors.icon} shadow-md flex-shrink-0`}>
                    <StepIcon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 pb-4 border-l border-elemental-water/10 pl-4 ml-2">
                    <p className="text-sm font-bold text-elemental-water mb-0.5">{step.title}</p>
                    <p className="text-xs text-elemental-sky font-mono mb-1">{step.subtitle}</p>
                    <p className="text-[11px] text-sandstone-muted leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Security Badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {[
              { icon: Lock, label: "AES-256 Encrypted" },
              { icon: Shield, label: "Zero Cloud Uploads" },
              { icon: CheckCircle2, label: "DPDP Act 2023 Compliant" }
            ].map((badge, idx) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-canvas-raised border border-elemental-water/10 text-xs font-mono text-sandstone-muted"
              >
                <badge.icon className="w-3.5 h-3.5 text-elemental-sky" />
                <span>{badge.label}</span>
              </motion.div>
            ))}
          </div>

        </div>
      </ScrollReveal>

    </section>
  );
}
