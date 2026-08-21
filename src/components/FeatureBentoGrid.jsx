import React from 'react';
import { 
  Bell, Bot, Receipt, PieChart, Target, Calculator, 
  TrendingUp, Users, Lock, Landmark, CreditCard, 
  Sparkles, CheckCircle2, ArrowUpRight, ShieldCheck, Zap
} from 'lucide-react';
import { ScrollReveal, HoverEffect } from './animations';

// Clean Editorial Mockup Container for Feature Cards
function FeatureMockupSlot({ imageSrc, fallbackWidget, alt = 'Feature UI Mockup' }) {
  if (imageSrc) {
    return (
      <div className="w-full h-40 my-3 rounded-2xl overflow-hidden border border-elemental-water/10 bg-canvas-raised shadow-xs group-hover:border-elemental-sky/30 transition-all">
        <img src={imageSrc} alt={alt} className="w-full h-full object-cover object-top" loading="lazy" />
      </div>
    );
  }
  return (
    <div className="w-full h-40 my-3 rounded-2xl p-3 bg-canvas-raised/80 border border-elemental-water/10 flex flex-col justify-center relative overflow-hidden group-hover:border-elemental-sky/30 transition-all shadow-2xs select-none">
      {fallbackWidget}
    </div>
  );
}

export default function FeatureBentoGrid() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Section Header */}
      <ScrollReveal>
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-earth-sageSoft border border-earth-sage/30 text-earth-forest text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5 text-earth-sage" />
            <span>Sovereign Capabilities</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-earth-forest tracking-tight">
            Master Your Money with Sovereign Privacy
          </h2>

          <p className="text-sm sm:text-base text-sandstone-muted font-sans max-w-2xl mx-auto leading-relaxed">
            Automatic UPI tracking, proactive monthly budgets, split bills, and an honest AI coach—all wrapped in 100% private, ad-free software.
          </p>
        </div>
      </ScrollReveal>

      {/* Bento Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Card 1: Auto Notification Expense Detection */}
        <ScrollReveal delay={0.05}>
          <HoverEffect scale={1.02} y={-6}>
            <div className="bento-card-container group relative p-6 rounded-3xl border border-earth-forest/15 hover:border-earth-sage/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between shadow-xs h-full bg-canvas-card">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-10 h-10 rounded-2xl bg-earth-sageSoft border border-earth-sage/30 flex items-center justify-center text-earth-sage">
                    <Bell className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-earth-sageSoft text-earth-sage border border-earth-sage/30 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> LIVE
                  </span>
                </div>

                {/* UI Mockup Preview */}
                <FeatureMockupSlot 
                  imageSrc="./mockups/feature-upi.png"
                  fallbackWidget={
                    <div className="space-y-2 text-left">
                      <div className="p-2.5 rounded-xl bg-canvas-raised border border-earth-forest/10 shadow-xs flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-earth-forest text-canvas flex items-center justify-center text-xs font-bold">G</span>
                          <div>
                            <p className="text-xs font-bold text-earth-forest">Paid ₹150 to Chai Point</p>
                            <p className="text-[10px] text-sandstone-muted font-mono">Auto-logged • 0 SMS used</p>
                          </div>
                        </div>
                        <span className="text-xs font-mono font-bold text-earth-terracotta">-₹150</span>
                      </div>
                      <div className="flex items-center justify-between px-2 text-[10px] font-mono text-earth-sage font-bold">
                        <span>✓ Category: Dining & Food</span>
                        <span>Instant Auto-Detection</span>
                      </div>
                    </div>
                  }
                />

                <h3 className="text-base font-bold font-serif text-earth-forest mb-1.5">Automatic UPI Expense Tracking</h3>
                <p className="text-xs text-sandstone-muted leading-relaxed mb-3">
                  Pay for chai, groceries, or shopping as usual. VITT captures payments from GPay, PhonePe, Paytm, CRED, HDFC, SBI, and ICICI the instant you spend.
                </p>
              </div>
              <div className="p-2.5 rounded-xl bg-canvas-raised border border-earth-forest/10 font-mono text-[11px] text-earth-forest font-semibold">
                ✓ Zero Manual Entry • Zero SMS Reading
              </div>
            </div>
          </HoverEffect>
        </ScrollReveal>

        {/* Card 2: On-Device AI Financial Advisor */}
        <ScrollReveal delay={0.1}>
          <HoverEffect scale={1.02} y={-6}>
            <div className="bento-card-container group relative p-6 rounded-3xl border border-earth-forest/15 hover:border-earth-ochre/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between shadow-xs h-full bg-canvas-card">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-10 h-10 rounded-2xl bg-earth-ochreSoft border border-earth-ochre/30 flex items-center justify-center text-earth-ochre">
                    <Bot className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-earth-ochreSoft text-earth-ochre border border-earth-ochre/30 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> LIVE
                  </span>
                </div>

                {/* UI Mockup Preview */}
                <FeatureMockupSlot 
                  imageSrc="./mockups/feature-ai.png"
                  fallbackWidget={
                    <div className="space-y-2 text-left">
                      <div className="p-2 rounded-xl bg-earth-forestSoft text-[11px] text-earth-forest font-medium ml-4 text-right">
                        "How much did I spend on food this month?"
                      </div>
                      <div className="p-2 rounded-xl bg-canvas-raised border border-earth-forest/10 text-[11px] text-earth-forest mr-3 shadow-xs">
                        ₹6,450 across 18 transactions. You're ₹3,550 under your budget!
                      </div>
                    </div>
                  }
                />

                <h3 className="text-base font-bold font-serif text-earth-forest mb-1.5">Private AI Money Coach</h3>
                <p className="text-xs text-sandstone-muted leading-relaxed mb-3">
                  Ask questions like "Can I afford this trip?" or "Where did my money go?" and get instant, honest advice without sending data to any cloud.
                </p>
              </div>
              <div className="p-2.5 rounded-xl bg-canvas-raised border border-earth-forest/10 font-mono text-[11px] text-earth-forest font-semibold">
                ⚡ Instant Answers • 100% Offline
              </div>
            </div>
          </HoverEffect>
        </ScrollReveal>

        {/* Card 3: Encrypted Vault & Vision OCR */}
        <ScrollReveal delay={0.15}>
          <HoverEffect scale={1.02} y={-6}>
            <div className="bento-card-container group relative p-6 rounded-3xl border border-earth-forest/15 hover:border-earth-forest/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between shadow-xs h-full bg-canvas-card">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-10 h-10 rounded-2xl bg-earth-forestSoft border border-earth-forest/30 flex items-center justify-center text-earth-forest">
                    <Receipt className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-earth-forestSoft text-earth-forest border border-earth-forest/30 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> LIVE
                  </span>
                </div>

                {/* UI Mockup Preview */}
                <FeatureMockupSlot 
                  imageSrc="./mockups/feature-vault.png"
                  fallbackWidget={
                    <div className="p-3 rounded-xl bg-canvas-raised border border-earth-forest/10 shadow-xs flex items-center justify-between text-left">
                      <div className="space-y-1">
                        <span className="text-xs font-bold text-earth-forest flex items-center gap-1.5">
                          <Lock className="w-3.5 h-3.5 text-earth-sage" /> Apple Store Receipt.pdf
                        </span>
                        <p className="text-[10px] text-sandstone-muted font-mono">Encrypted • 100% On-Device OCR</p>
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2 py-1 rounded-md bg-earth-sageSoft text-earth-sage">AES-256</span>
                    </div>
                  }
                />

                <h3 className="text-base font-bold font-serif text-earth-forest mb-1.5">Private Document & Bill Vault</h3>
                <p className="text-xs text-sandstone-muted leading-relaxed mb-3">
                  Scan paper receipts, warranties, and bank PDFs in English or Hindi. Everything is safely encrypted inside your phone's hardware security chip.
                </p>
              </div>
              <div className="p-2.5 rounded-xl bg-canvas-raised border border-earth-forest/10 font-mono text-[11px] text-earth-forest font-semibold">
                🔒 Hardware-Locked Privacy
              </div>
            </div>
          </HoverEffect>
        </ScrollReveal>

        {/* Card 4: Envelope Smart Budgets */}
        <ScrollReveal delay={0.05}>
          <HoverEffect scale={1.02} y={-6}>
            <div className="bento-card-container group relative p-6 rounded-3xl border border-earth-forest/15 hover:border-earth-sage/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between shadow-xs h-full bg-canvas-card">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-10 h-10 rounded-2xl bg-earth-sageSoft border border-earth-sage/30 flex items-center justify-center text-earth-sage">
                    <PieChart className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-earth-sageSoft text-earth-sage border border-earth-sage/30 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> LIVE
                  </span>
                </div>

                {/* UI Mockup Preview */}
                <FeatureMockupSlot 
                  imageSrc="./mockups/feature-budgets.png"
                  fallbackWidget={
                    <div className="space-y-2 text-left">
                      <div className="flex items-center justify-between text-xs font-bold text-earth-forest">
                        <span>Dining & Entertainment</span>
                        <span className="font-mono text-[11px] text-earth-sage">₹6,450 / ₹10,000</span>
                      </div>
                      <div className="w-full h-2.5 rounded-full bg-canvas-subtle overflow-hidden">
                        <div className="h-full bg-earth-sage rounded-full" style={{ width: '64.5%' }} />
                      </div>
                      <div className="flex items-center justify-between text-[10px] text-sandstone-muted font-mono">
                        <span>🟢 Safe Spending Pace</span>
                        <span>₹3,550 left</span>
                      </div>
                    </div>
                  }
                />

                <h3 className="text-base font-bold font-serif text-earth-forest mb-1.5">Smart Envelope Budgets</h3>
                <p className="text-xs text-sandstone-muted leading-relaxed mb-3">
                  Set monthly spending caps for dining, groceries, and shopping. Clear green, yellow, and red status bars warn you before you overspend.
                </p>
              </div>
              <div className="p-2.5 rounded-xl bg-canvas-raised border border-earth-forest/10 font-mono text-[11px] text-earth-forest font-semibold">
                📊 Proactive Overspending Alerts
              </div>
            </div>
          </HoverEffect>
        </ScrollReveal>

        {/* Card 5: Financial Goals */}
        <ScrollReveal delay={0.1}>
          <HoverEffect scale={1.02} y={-6}>
            <div className="bento-card-container group relative p-6 rounded-3xl border border-earth-forest/15 hover:border-earth-ochre/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between shadow-xs h-full bg-canvas-card">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-10 h-10 rounded-2xl bg-earth-ochreSoft border border-earth-ochre/30 flex items-center justify-center text-earth-ochre">
                    <Target className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-earth-ochreSoft text-earth-ochre border border-earth-ochre/30 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> LIVE
                  </span>
                </div>

                {/* UI Mockup Preview */}
                <FeatureMockupSlot 
                  imageSrc="./mockups/feature-goals.png"
                  fallbackWidget={
                    <div className="space-y-2 text-left">
                      <div className="flex items-center justify-between text-xs font-bold text-earth-forest">
                        <span>Emergency Fund Target</span>
                        <span className="font-mono text-[11px] text-earth-sage">₹1,50,000</span>
                      </div>
                      <div className="w-full h-2.5 rounded-full bg-canvas-subtle overflow-hidden">
                        <div className="h-full bg-earth-sage rounded-full" style={{ width: '80%' }} />
                      </div>
                      <div className="flex items-center justify-between text-[10px] text-sandstone-muted font-mono">
                        <span>80% Completed</span>
                        <span>Target: Oct 2026</span>
                      </div>
                    </div>
                  }
                />

                <h3 className="text-base font-bold font-serif text-earth-forest mb-1.5">Goal Savings & Milestone Tracker</h3>
                <p className="text-xs text-sandstone-muted leading-relaxed mb-3">
                  Save for a new phone, vehicle, emergency fund, or dream vacation. VITT calculates your exact completion date based on your real monthly savings.
                </p>
              </div>
              <div className="p-2.5 rounded-xl bg-canvas-raised border border-earth-forest/10 font-mono text-[11px] text-earth-forest font-semibold">
                🎯 Real-Time Savings Target Pace
              </div>
            </div>
          </HoverEffect>
        </ScrollReveal>

        {/* Card 6: Wealth Calculators */}
        <ScrollReveal delay={0.15}>
          <HoverEffect scale={1.02} y={-6}>
            <div className="bento-card-container group relative p-6 rounded-3xl border border-earth-forest/15 hover:border-earth-ochre/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between shadow-xs h-full bg-canvas-card">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-10 h-10 rounded-2xl bg-earth-ochreSoft border border-earth-ochre/30 flex items-center justify-center text-earth-ochre">
                    <Calculator className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-earth-ochreSoft text-earth-ochre border border-earth-ochre/30 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> LIVE
                  </span>
                </div>

                {/* UI Mockup Preview */}
                <FeatureMockupSlot 
                  imageSrc="./mockups/feature-sip.png"
                  fallbackWidget={
                    <div className="p-3 rounded-xl bg-canvas-raised border border-earth-forest/10 shadow-xs flex items-center justify-between text-left">
                      <div>
                        <p className="text-[10px] text-sandstone-muted font-mono">₹10,000 / mo @ 14% (10 Yrs)</p>
                        <p className="text-base font-bold font-mono text-earth-forest">₹26,20,915</p>
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2 py-1 rounded-md bg-earth-ochreSoft text-earth-ochre">+118% Return</span>
                    </div>
                  }
                />

                <h3 className="text-base font-bold font-serif text-earth-forest mb-1.5">SIP, FD & Wealth Calculators</h3>
                <p className="text-xs text-sandstone-muted leading-relaxed mb-3">
                  Calculate mutual fund SIP compounding, Fixed Deposit interest, RD maturity, and home/personal loan EMIs with 100% mathematical accuracy.
                </p>
              </div>
              <div className="p-2.5 rounded-xl bg-canvas-raised border border-earth-forest/10 font-mono text-[11px] text-earth-forest font-semibold">
                🧮 Standard Indian Banking Math
              </div>
            </div>
          </HoverEffect>
        </ScrollReveal>

        {/* Card 7: Cashflow Runway & Score */}
        <ScrollReveal delay={0.05}>
          <HoverEffect scale={1.02} y={-6}>
            <div className="bento-card-container group relative p-6 rounded-3xl border border-earth-forest/15 hover:border-earth-forest/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between shadow-xs h-full bg-canvas-card">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-10 h-10 rounded-2xl bg-earth-forestSoft border border-earth-forest/30 flex items-center justify-center text-earth-forest">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-earth-forestSoft text-earth-forest border border-earth-forest/30 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> LIVE
                  </span>
                </div>

                {/* UI Mockup Preview */}
                <FeatureMockupSlot 
                  imageSrc="./mockups/feature-cashflow.png"
                  fallbackWidget={
                    <div className="p-3 rounded-xl bg-canvas-raised border border-earth-forest/10 shadow-xs flex items-center justify-between text-left">
                      <div className="space-y-0.5">
                        <p className="text-[10px] text-sandstone-muted font-mono">Financial Safety Runway</p>
                        <p className="text-sm font-bold text-earth-forest">180 Days (6 Months)</p>
                      </div>
                      <div className="w-10 h-10 rounded-full border-2 border-earth-sage flex items-center justify-center font-mono font-bold text-xs text-earth-sage">
                        92
                      </div>
                    </div>
                  }
                />

                <h3 className="text-base font-bold font-serif text-earth-forest mb-1.5">Cashflow Forecast & Safety Runway</h3>
                <p className="text-xs text-sandstone-muted leading-relaxed mb-3">
                  Know exactly how many months your emergency savings will last if income stops, with a clear 0–100 financial health score.
                </p>
              </div>
              <div className="p-2.5 rounded-xl bg-canvas-raised border border-earth-forest/10 font-mono text-[11px] text-earth-forest font-semibold">
                📈 180-Day Emergency Runway Score
              </div>
            </div>
          </HoverEffect>
        </ScrollReveal>

        {/* Card 8: Split Groups & Khata */}
        <ScrollReveal delay={0.1}>
          <HoverEffect scale={1.02} y={-6}>
            <div className="bento-card-container group relative p-6 rounded-3xl border border-earth-forest/15 hover:border-earth-terracotta/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between shadow-xs h-full bg-canvas-card">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-10 h-10 rounded-2xl bg-earth-terracottaSoft border border-earth-terracotta/30 flex items-center justify-center text-earth-terracotta">
                    <Users className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-earth-terracottaSoft text-earth-terracotta border border-earth-terracotta/30 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> LIVE
                  </span>
                </div>

                {/* UI Mockup Preview */}
                <FeatureMockupSlot 
                  imageSrc="./mockups/feature-split.png"
                  fallbackWidget={
                    <div className="p-3 rounded-xl bg-canvas-raised border border-earth-forest/10 shadow-xs flex items-center justify-between text-left">
                      <div>
                        <p className="text-xs font-bold text-earth-forest">Goa Trip Dinner (4 People)</p>
                        <p className="text-[10px] text-sandstone-muted font-mono">Rahul owes you ₹850</p>
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2 py-1 rounded-md bg-earth-sageSoft text-earth-sage">UPI Settle</span>
                    </div>
                  }
                />

                <h3 className="text-base font-bold font-serif text-earth-forest mb-1.5">Split Bills & Settle via UPI in 1 Tap</h3>
                <p className="text-xs text-sandstone-muted leading-relaxed mb-3">
                  Track shared trips, flat rent, and group dinners. See who owes whom with instant WhatsApp reminders and deep-linked UPI QR settlement.
                </p>
              </div>
              <div className="p-2.5 rounded-xl bg-canvas-raised border border-earth-forest/10 font-mono text-[11px] text-earth-forest font-semibold">
                💬 1-Tap QR Bill Settlement
              </div>
            </div>
          </HoverEffect>
        </ScrollReveal>

        {/* Card 9: Sovereign Security & AES-256 */}
        <ScrollReveal delay={0.15}>
          <HoverEffect scale={1.02} y={-6}>
            <div className="bento-card-container group relative p-6 rounded-3xl border border-earth-forest/15 hover:border-earth-terracotta/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between shadow-xs h-full bg-canvas-card">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-10 h-10 rounded-2xl bg-earth-terracottaSoft border border-earth-terracotta/30 flex items-center justify-center text-earth-terracotta">
                    <Lock className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-earth-terracottaSoft text-earth-terracotta border border-earth-terracotta/30 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> LIVE
                  </span>
                </div>

                {/* UI Mockup Preview */}
                <FeatureMockupSlot 
                  imageSrc="./mockups/feature-security.png"
                  fallbackWidget={
                    <div className="p-3 rounded-xl bg-canvas-raised border border-earth-forest/10 shadow-xs flex items-center justify-between text-left">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-earth-sage" />
                        <div>
                          <p className="text-xs font-bold text-earth-forest">Biometric Fingerprint Lock</p>
                          <p className="text-[10px] text-sandstone-muted font-mono">Zero Cloud Uploads</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-earth-sage">Active</span>
                    </div>
                  }
                />

                <h3 className="text-base font-bold font-serif text-earth-forest mb-1.5">100% Private & Ad-Free Forever</h3>
                <p className="text-xs text-sandstone-muted leading-relaxed mb-3">
                  No phone numbers required, no third-party trackers, and zero loan telemarketers calling you. Built for public utility by an independent developer.
                </p>
              </div>
              <div className="p-2.5 rounded-xl bg-canvas-raised border border-earth-forest/10 font-mono text-[11px] text-earth-forest font-semibold">
                🛡️ Zero Ads • Zero Cloud Leaks
              </div>
            </div>
          </HoverEffect>
        </ScrollReveal>

      </div>
    </section>
  );
}
