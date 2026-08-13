import React, { useState } from 'react';
import { Calculator, TrendingUp, Sparkles, DollarSign } from 'lucide-react';

export default function InteractiveSipCalculator() {
  const [monthlySip, setMonthlySip] = useState(5000);
  const [years, setYears] = useState(10);
  const [returnRate, setReturnRate] = useState(12);

  // SIP Math Calculation: FV = P * [ (1 + r)^n - 1 ] / r * (1 + r)
  const i = returnRate / 100 / 12;
  const n = years * 12;
  const totalInvested = monthlySip * n;
  const futureValue = monthlySip * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
  const estimatedReturns = futureValue - totalInvested;

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
        <span className="px-3.5 py-1 rounded-full bg-elemental-skySoft text-elemental-sky font-mono text-xs font-semibold">
          Interactive Wealth Calculator
        </span>

        <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-elemental-water tracking-tight">
          Calculate Your Future Wealth (SIP Engine)
        </h2>

        <p className="text-sm text-sandstone-muted font-sans max-w-xl mx-auto leading-relaxed">
          Drag the sliders below to calculate your compounding returns with standard Indian banking math.
        </p>
      </div>

      {/* Calculator Grid */}
      <div className="max-w-4xl mx-auto p-8 rounded-3xl glass-panel fine-border-water shadow-xl bg-canvas grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        
        {/* Left Side: Sliders */}
        <div className="md:col-span-7 space-y-6">
          
          {/* Slider 1: Monthly Investment */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold text-elemental-water">
              <span>Monthly Investment</span>
              <span className="font-mono text-elemental-sky text-sm">₹{monthlySip.toLocaleString('en-IN')}</span>
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
              <span className="font-mono text-elemental-sky text-sm">{years} Years</span>
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
              <span className="font-mono text-elemental-sky text-sm">{returnRate}% p.a.</span>
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

        </div>

        {/* Right Side: Calculated Output Card */}
        <div className="md:col-span-5 p-6 rounded-2xl bg-canvas-raised border border-elemental-sky/30 space-y-4 shadow-sm text-xs">
          
          <div className="flex items-center justify-between text-elemental-sky font-mono font-bold text-[11px]">
            <span className="flex items-center gap-1.5">
              <Calculator className="w-4 h-4" /> SIP Math Result
            </span>
            <span>SEBI Educational Math</span>
          </div>

          <div className="space-y-3 pt-2">
            <div>
              <p className="text-sandstone-muted text-[11px]">Total Invested Amount</p>
              <p className="font-mono text-lg font-bold text-elemental-water">
                ₹{Math.round(totalInvested).toLocaleString('en-IN')}
              </p>
            </div>

            <div>
              <p className="text-sandstone-muted text-[11px]">Estimated Wealth Gain</p>
              <p className="font-mono text-lg font-bold text-elemental-sky">
                +₹{Math.round(estimatedReturns).toLocaleString('en-IN')}
              </p>
            </div>

            <div className="pt-2 border-t border-elemental-water/10">
              <p className="text-sandstone-muted text-[11px]">Total Corpus Value</p>
              <p className="font-mono text-2xl font-extrabold text-elemental-water">
                ₹{Math.round(futureValue).toLocaleString('en-IN')}
              </p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
