import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, TrendingUp, Sparkles, DollarSign, ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from './animations';

export default function InteractiveSipCalculator() {
  const [monthlySip, setMonthlySip] = useState(5000);
  const [years, setYears] = useState(10);
  const [returnRate, setReturnRate] = useState(12);
  const [isAnimating, setIsAnimating] = useState(false);

  // SIP Math Calculation: FV = P * [ (1 + r)^n - 1 ] / r * (1 + r)
  const i = returnRate / 100 / 12;
  const n = years * 12;
  const totalInvested = monthlySip * n;
  const futureValue = monthlySip * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
  const estimatedReturns = futureValue - totalInvested;

  // Trigger animation on value change
  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 300);
    return () => clearTimeout(timer);
  }, [monthlySip, years, returnRate]);

  // Calculate growth percentage
  const growthMultiplier = ((futureValue / totalInvested) - 1) * 100;

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative z-10 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-elemental-sky/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <ScrollReveal>
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-canvas-raised border border-elemental-sky/30 text-elemental-sky text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Wealth Calculator</span>
          </div>

          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-elemental-water tracking-tight">
            Calculate Your Future Wealth (SIP Engine)
          </h2>

          <p className="text-sm text-sandstone-muted font-sans max-w-xl mx-auto leading-relaxed">
            Drag the sliders below to calculate your compounding returns with standard Indian banking math.
          </p>
        </div>
      </ScrollReveal>

      {/* Calculator Grid */}
      <ScrollReveal delay={0.2}>
        <div className="max-w-4xl mx-auto p-8 rounded-3xl glass-panel fine-border-water shadow-xl bg-canvas grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative">
          
          {/* Decorative Sparkle */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-elemental-sky rounded-full flex items-center justify-center shadow-lg">
            <Calculator className="w-4 h-4 text-canvas" />
          </div>
          
          {/* Left Side: Sliders */}
          <div className="md:col-span-7 space-y-6">
            
            {/* Slider 1: Monthly Investment */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-elemental-water">
                <span>Monthly Investment</span>
                <motion.span 
                  key={monthlySip}
                  initial={{ scale: 1.2, color: '#0284C7' }}
                  animate={{ scale: 1, color: '#0284C7' }}
                  className="font-mono text-sm"
                >
                  ₹{monthlySip.toLocaleString('en-IN')}
                </motion.span>
              </div>
              <input
                type="range"
                min="500"
                max="50000"
                step="500"
                value={monthlySip}
                onChange={(e) => setMonthlySip(Number(e.target.value))}
                className="w-full h-2 rounded-lg bg-canvas-raised accent-elemental-sky cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-sandstone-muted font-mono">
                <span>₹500</span>
                <span>₹50,000</span>
              </div>
            </div>

            {/* Slider 2: Investment Period */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-elemental-water">
                <span>Investment Horizon</span>
                <motion.span 
                  key={years}
                  initial={{ scale: 1.2, color: '#0284C7' }}
                  animate={{ scale: 1, color: '#0284C7' }}
                  className="font-mono text-sm"
                >
                  {years} Years
                </motion.span>
              </div>
              <input
                type="range"
                min="1"
                max="30"
                step="1"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full h-2 rounded-lg bg-canvas-raised accent-elemental-sky cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-sandstone-muted font-mono">
                <span>1 Yr</span>
                <span>30 Yrs</span>
              </div>
            </div>

            {/* Slider 3: Expected Return */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-elemental-water">
                <span>Expected Annual Return (%)</span>
                <motion.span 
                  key={returnRate}
                  initial={{ scale: 1.2, color: '#0284C7' }}
                  animate={{ scale: 1, color: '#0284C7' }}
                  className="font-mono text-sm"
                >
                  {returnRate}% p.a.
                </motion.span>
              </div>
              <input
                type="range"
                min="5"
                max="20"
                step="0.5"
                value={returnRate}
                onChange={(e) => setReturnRate(Number(e.target.value))}
                className="w-full h-2 rounded-lg bg-canvas-raised accent-elemental-sky cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-sandstone-muted font-mono">
                <span>5%</span>
                <span>20%</span>
              </div>
            </div>

            {/* Growth Multiplier Badge */}
            <div className="flex items-center gap-2 pt-2">
              <span className="px-3 py-1 rounded-full bg-elemental-skySoft text-elemental-sky text-xs font-mono font-semibold flex items-center gap-1">
                <ArrowUpRight className="w-3 h-3" />
                {growthMultiplier.toFixed(1)}x Growth
              </span>
              <span className="text-[10px] text-sandstone-muted">• SEBI Educational Math</span>
            </div>

          </div>

          {/* Right Side: Calculated Output Card */}
          <div className="md:col-span-5 p-6 rounded-2xl bg-canvas-raised border border-elemental-sky/30 space-y-4 shadow-sm text-xs relative overflow-hidden">
            
            {/* Animated Background Pattern */}
            <motion.div
              animate={{
                opacity: isAnimating ? 0.3 : 0.1
              }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-gradient-to-br from-elemental-sky/20 to-transparent pointer-events-none"
            />

            <div className="relative z-10">
              <div className="flex items-center justify-between text-elemental-sky font-mono font-bold text-[11px]">
                <span className="flex items-center gap-1.5">
                  <Calculator className="w-4 h-4" /> SIP Math Result
                </span>
                <span className="text-[9px] text-sandstone-muted">Standard Indian Banking</span>
              </div>

              <div className="space-y-3 pt-2">
                <div>
                  <p className="text-sandstone-muted text-[11px]">Total Invested Amount</p>
                  <motion.p 
                    key={totalInvested}
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: 1 }}
                    className="font-mono text-lg font-bold text-elemental-water"
                  >
                    ₹{Math.round(totalInvested).toLocaleString('en-IN')}
                  </motion.p>
                </div>

                <div>
                  <p className="text-sandstone-muted text-[11px]">Estimated Wealth Gain</p>
                  <motion.p 
                    key={estimatedReturns}
                    initial={{ opacity: 0.5, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="font-mono text-lg font-bold text-elemental-sky"
                  >
                    +₹{Math.round(estimatedReturns).toLocaleString('en-IN')}
                  </motion.p>
                </div>

                <div className="pt-2 border-t border-elemental-water/10">
                  <p className="text-sandstone-muted text-[11px]">Total Corpus Value</p>
                  <motion.p 
                    key={futureValue}
                    initial={{ opacity: 0.5, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="font-mono text-2xl font-extrabold text-elemental-water"
                  >
                    ₹{Math.round(futureValue).toLocaleString('en-IN')}
                  </motion.p>
                </div>
              </div>

              {/* Visual Progress Bar */}
              <div className="pt-3">
                <div className="flex items-center justify-between text-[10px] mb-1">
                  <span className="text-sandstone-muted">Invested vs Returns</span>
                </div>
                <div className="w-full h-2 rounded-full bg-elemental-water/10 overflow-hidden">
                  <motion.div
                    animate={{
                      width: `${Math.min((totalInvested / futureValue) * 100, 100)}%`
                    }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="h-full bg-elemental-sky rounded-full"
                  />
                </div>
                <div className="flex justify-between text-[9px] text-sandstone-muted font-mono mt-1">
                  <span>Invested</span>
                  <span>Returns</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </ScrollReveal>

    </section>
  );
}
