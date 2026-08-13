import React from 'react';
import { 
  Bell, Bot, Receipt, PieChart, Target, Calculator, TrendingUp, 
  Users, Lock, Landmark, CreditCard, Sparkles, CheckCircle2, Clock 
} from 'lucide-react';
import { 
  IllustrationNotification, IllustrationAI, IllustrationOCR, 
  IllustrationBudgets, IllustrationGoals, IllustrationInvestment, 
  IllustrationCashflow, IllustrationKhata, IllustrationSecurity, 
  IllustrationGovt, IllustrationUPI 
} from './illustrations/FeatureIllustrations';

export default function FeatureBentoGrid() {
  return (
    <section id="features" className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-canvas-raised border border-elemental-sky/40 text-elemental-sky text-xs font-mono shadow-[0_0_15px_rgba(2,132,199,0.15)]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Feature Taxonomy & Visual Architecture</span>
        </div>

        <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-elemental-water tracking-tight">
          Engineered for Absolute Privacy
        </h2>

        <p className="text-sm text-sandstone-muted font-sans max-w-2xl mx-auto leading-relaxed">
          Vector illustrations detailing VITT's 9 Live (🟢) and 2 Roadmap (⏳) features.
        </p>
      </div>

      {/* Bento Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Card 1: Auto Notification Expense Detection (LIVE) */}
        <div className="bento-card-container group relative p-6 rounded-3xl houdini-border hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="w-10 h-10 rounded-xl bg-elemental-skySoft border border-elemental-sky/30 flex items-center justify-center text-elemental-sky">
                <Bell className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-elemental-skySoft text-elemental-sky border border-elemental-sky/30 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> LIVE
              </span>
            </div>

            {/* Vector Illustration */}
            <IllustrationNotification />

            <h3 className="text-base font-bold text-elemental-water mb-1.5">Auto Expense Detection</h3>
            <p className="text-xs text-sandstone-muted leading-relaxed mb-3">
              Captures transaction alerts from GPay, PhonePe, Paytm, SBI, HDFC, ICICI, and CRED via Android's <code className="font-mono text-elemental-water font-semibold">NotificationListenerService</code>.
            </p>
          </div>
          <div className="p-2.5 rounded-xl bg-canvas-raised border border-elemental-water/10 font-mono text-[11px] text-elemental-water font-semibold">
            ✓ 0 SMS Permissions Required
          </div>
        </div>

        {/* Card 2: On-Device AI Financial Advisor (LIVE) */}
        <div className="bento-card-container group relative p-6 rounded-3xl houdini-border hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="w-10 h-10 rounded-xl bg-elemental-skySoft border border-elemental-sky/30 flex items-center justify-center text-elemental-sky">
                <Bot className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-elemental-skySoft text-elemental-sky border border-elemental-sky/30 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> LIVE
              </span>
            </div>

            {/* Vector Illustration */}
            <IllustrationAI />

            <h3 className="text-base font-bold text-elemental-water mb-1.5">On-Device Local AI Advisor</h3>
            <p className="text-xs text-sandstone-muted leading-relaxed mb-3">
              Runs Gemma 4 E2B / Qwen 3 4B locally via LiteRT-LM. Native Rust SIMD (<code className="font-mono text-elemental-water font-semibold">TurboVec</code>) provides sub-3ms transaction RAG queries.
            </p>
          </div>
          <div className="p-2.5 rounded-xl bg-canvas-raised border border-elemental-water/10 font-mono text-[11px] text-elemental-water font-semibold">
            ⚡ &gt;130M Ops/sec SIMD Similarity
          </div>
        </div>

        {/* Card 3: Encrypted Vault & Vision OCR (LIVE) */}
        <div className="bento-card-container group relative p-6 rounded-3xl houdini-border hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="w-10 h-10 rounded-xl bg-elemental-skySoft border border-elemental-sky/30 flex items-center justify-center text-elemental-sky">
                <Receipt className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-elemental-skySoft text-elemental-sky border border-elemental-sky/30 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> LIVE
              </span>
            </div>

            {/* Vector Illustration */}
            <IllustrationOCR />

            <h3 className="text-base font-bold text-elemental-water mb-1.5">Encrypted Vault & Vision OCR</h3>
            <p className="text-xs text-sandstone-muted leading-relaxed mb-3">
              Offline receipt scanning using Google ML Kit Latin + Devanagari text recognition and encrypted PDF exports.
            </p>
          </div>
          <div className="p-2.5 rounded-xl bg-canvas-raised border border-elemental-water/10 font-mono text-[11px] text-elemental-water font-semibold">
            🔒 Hardware Key Vault Storage
          </div>
        </div>

        {/* Card 4: Envelope Smart Budgets (LIVE) */}
        <div className="bento-card-container group relative p-6 rounded-3xl houdini-border hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="w-10 h-10 rounded-xl bg-elemental-skySoft border border-elemental-sky/30 flex items-center justify-center text-elemental-sky">
                <PieChart className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-elemental-skySoft text-elemental-sky border border-elemental-sky/30 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> LIVE
              </span>
            </div>

            {/* Vector Illustration */}
            <IllustrationBudgets />

            <h3 className="text-base font-bold text-elemental-water mb-1.5">Envelope Smart Budgets</h3>
            <p className="text-xs text-sandstone-muted leading-relaxed mb-3">
              Category spending caps with 🟢 Green / 🟡 Yellow / 🔴 Red indicators and built-in purchase impact simulator.
            </p>
          </div>
          <div className="p-2.5 rounded-xl bg-canvas-raised border border-elemental-water/10 font-mono text-[11px] text-elemental-water font-semibold">
            📊 Purchase Impact Simulator
          </div>
        </div>

        {/* Card 5: Financial Goals (LIVE) */}
        <div className="bento-card-container group relative p-6 rounded-3xl houdini-border hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="w-10 h-10 rounded-xl bg-elemental-skySoft border border-elemental-sky/30 flex items-center justify-center text-elemental-sky">
                <Target className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-elemental-skySoft text-elemental-sky border border-elemental-sky/30 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> LIVE
              </span>
            </div>

            {/* Vector Illustration */}
            <IllustrationGoals />

            <h3 className="text-base font-bold text-elemental-water mb-1.5">Financial Goals Pace Matching</h3>
            <p className="text-xs text-sandstone-muted leading-relaxed mb-3">
              Deadlined savings goals matched against your net monthly cashflow surplus pace.
            </p>
          </div>
          <div className="p-2.5 rounded-xl bg-canvas-raised border border-elemental-water/10 font-mono text-[11px] text-elemental-water font-semibold">
            🎯 Surplus Pace Validation
          </div>
        </div>

        {/* Card 6: Wealth Calculators (LIVE) */}
        <div className="bento-card-container group relative p-6 rounded-3xl houdini-border hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="w-10 h-10 rounded-xl bg-elemental-skySoft border border-elemental-sky/30 flex items-center justify-center text-elemental-sky">
                <Calculator className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-elemental-skySoft text-elemental-sky border border-elemental-sky/30 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> LIVE
              </span>
            </div>

            {/* Vector Illustration */}
            <IllustrationInvestment />

            <h3 className="text-base font-bold text-elemental-water mb-1.5">High-Precision Wealth Calculators</h3>
            <p className="text-xs text-sandstone-muted leading-relaxed mb-3">
              Exact mathematical engines for SIP, Lumpsum, Fixed Deposit (quarterly compound), RD, and Loan EMI.
            </p>
          </div>
          <div className="p-2.5 rounded-xl bg-canvas-raised border border-elemental-water/10 font-mono text-[11px] text-elemental-water font-semibold">
            🧮 Standard Indian Banking Math
          </div>
        </div>

        {/* Card 7: Cashflow Runway & Score (LIVE) */}
        <div className="bento-card-container group relative p-6 rounded-3xl houdini-border hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="w-10 h-10 rounded-xl bg-elemental-skySoft border border-elemental-sky/30 flex items-center justify-center text-elemental-sky">
                <TrendingUp className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-elemental-skySoft text-elemental-sky border border-elemental-sky/30 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> LIVE
              </span>
            </div>

            {/* Vector Illustration */}
            <IllustrationCashflow />

            <h3 className="text-base font-bold text-elemental-water mb-1.5">Cashflow Runway & Score</h3>
            <p className="text-xs text-sandstone-muted leading-relaxed mb-3">
              Multi-horizon cashflow projection charts (30–365 days), runway months estimation, and 0–100 Resilience Score.
            </p>
          </div>
          <div className="p-2.5 rounded-xl bg-canvas-raised border border-elemental-water/10 font-mono text-[11px] text-elemental-water font-semibold">
            📈 0–100 Resilience Score Model
          </div>
        </div>

        {/* Card 8: Split Groups & Khata (LIVE) */}
        <div className="bento-card-container group relative p-6 rounded-3xl houdini-border hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="w-10 h-10 rounded-xl bg-elemental-skySoft border border-elemental-sky/30 flex items-center justify-center text-elemental-sky">
                <Users className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-elemental-skySoft text-elemental-sky border border-elemental-sky/30 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> LIVE
              </span>
            </div>

            {/* Vector Illustration */}
            <IllustrationKhata />

            <h3 className="text-base font-bold text-elemental-water mb-1.5">Split Groups & Khata IOU Ledger</h3>
            <p className="text-xs text-sandstone-muted leading-relaxed mb-3">
              Group trip/rent bill splitting, informal debt tracking, and 1-tap WhatsApp payment reminders.
            </p>
          </div>
          <div className="p-2.5 rounded-xl bg-canvas-raised border border-elemental-water/10 font-mono text-[11px] text-elemental-water font-semibold">
            💬 WhatsApp Reminder Generator
          </div>
        </div>

        {/* Card 9: Sovereign Security & AES-256 (LIVE) */}
        <div className="bento-card-container group relative p-6 rounded-3xl houdini-border hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="w-10 h-10 rounded-xl bg-elemental-skySoft border border-elemental-sky/30 flex items-center justify-center text-elemental-sky">
                <Lock className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-elemental-skySoft text-elemental-sky border border-elemental-sky/30 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> LIVE
              </span>
            </div>

            {/* Vector Illustration */}
            <IllustrationSecurity />

            <h3 className="text-base font-bold text-elemental-water mb-1.5">AES-256 SQLCipher Encryption</h3>
            <p className="text-xs text-sandstone-muted leading-relaxed mb-3">
              Hardware key store security, local biometric lock (Fingerprint/PIN), and 2-step permanent account purge (<code className="font-mono text-elemental-water font-semibold">"DELETE"</code>).
            </p>
          </div>
          <div className="p-2.5 rounded-xl bg-canvas-raised border border-elemental-water/10 font-mono text-[11px] text-elemental-water font-semibold">
            🔑 Hardware Key Store Security
          </div>
        </div>

        {/* Roadmap Card 1: Govt Schemes Directory (UPCOMING) */}
        <div className="bento-card-container group relative p-6 rounded-3xl bg-canvas-raised/50 fine-border hover:border-elemental-fire/40 transition-all duration-300 flex flex-col justify-between opacity-90 shadow-xs">
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="w-10 h-10 rounded-xl bg-elemental-fireSoft border border-elemental-fire/30 flex items-center justify-center text-elemental-fire">
                <Landmark className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-elemental-fireSoft text-elemental-fire border border-elemental-fire/30 flex items-center gap-1">
                <Clock className="w-3 h-3" /> ROADMAP
              </span>
            </div>

            {/* Vector Illustration */}
            <IllustrationGovt />

            <h3 className="text-base font-bold text-elemental-water mb-1.5">Govt Schemes Eligibility Engine</h3>
            <p className="text-xs text-sandstone-muted leading-relaxed mb-3">
              Indian micro-enterprise scheme directory (MUDRA, PMEGP, Stand-Up India, Startup India Seed Fund) with state/income eligibility matching.
            </p>
          </div>
          <div className="p-2.5 rounded-xl bg-canvas border border-elemental-water/10 font-mono text-[11px] text-elemental-fire font-semibold">
            ⏳ Planned Horizon Feature
          </div>
        </div>

        {/* Roadmap Card 2: Scheduled Payments & UPI (UPCOMING) */}
        <div className="bento-card-container group relative p-6 rounded-3xl bg-canvas-raised/50 fine-border hover:border-elemental-fire/40 transition-all duration-300 flex flex-col justify-between opacity-90 shadow-xs">
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="w-10 h-10 rounded-xl bg-elemental-fireSoft border border-elemental-fire/30 flex items-center justify-center text-elemental-fire">
                <CreditCard className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-elemental-fireSoft text-elemental-fire border border-elemental-fire/30 flex items-center gap-1">
                <Clock className="w-3 h-3" /> ROADMAP
              </span>
            </div>

            {/* Vector Illustration */}
            <IllustrationUPI />

            <h3 className="text-base font-bold text-elemental-water mb-1.5">Scheduled Payments & UPI Intents</h3>
            <p className="text-xs text-sandstone-muted leading-relaxed mb-3">
              Recurring bill tracker with due date alerts and direct <code className="font-mono text-elemental-water font-semibold">upi://pay</code> intents opening GPay, PhonePe, Paytm with zero fees.
            </p>
          </div>
          <div className="p-2.5 rounded-xl bg-canvas border border-elemental-water/10 font-mono text-[11px] text-elemental-fire font-semibold">
            ⏳ Planned Horizon Feature
          </div>
        </div>

      </div>
    </section>
  );
}
