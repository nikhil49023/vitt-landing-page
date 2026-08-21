import React, { useState, useRef, useEffect } from 'react';
import { Bell, Bot, PieChart, ShieldCheck, ArrowUpRight, TrendingUp, Sparkles, Plus, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';

export default function PhoneMockupFrame({ 
  imageSrc = null, 
  alt = 'VITT Android App Interface',
  className = '',
  defaultTab = 'dashboard'
}) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const phoneRef = useRef(null);

  useEffect(() => {
    // Subtle 3D tilt effect on desktop
    const handleMouseMove = (e) => {
      if (!phoneRef.current || window.innerWidth < 1024) return;
      const rect = phoneRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const rotateX = ((e.clientY - centerY) / window.innerHeight) * -10;
      const rotateY = ((e.clientX - centerX) / window.innerWidth) * 10;

      gsap.to(phoneRef.current, {
        rotateX,
        rotateY,
        duration: 0.6,
        ease: 'power2.out',
        transformPerspective: 1200,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={`relative w-full max-w-[340px] sm:max-w-[380px] mx-auto select-none ${className}`}>
      
      {/* Ambient Soft Glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-elemental-sky/20 via-elemental-water/10 to-transparent rounded-[50px] blur-2xl -z-10 pointer-events-none" />

      {/* Floating High-Trust Live Badges */}
      <div className="absolute -top-3 -left-3 z-30 px-3 py-1.5 rounded-2xl bg-canvas/95 backdrop-blur-md border border-elemental-water/15 shadow-lg flex items-center gap-2 text-xs font-mono font-bold text-elemental-water">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
        <span>Live UPI Tracking</span>
      </div>

      <div className="absolute -bottom-3 -right-3 z-30 px-3 py-1.5 rounded-2xl bg-canvas/95 backdrop-blur-md border border-elemental-water/15 shadow-lg flex items-center gap-2 text-xs font-mono font-bold text-elemental-water">
        <ShieldCheck className="w-4 h-4 text-elemental-sky" />
        <span>100% Offline Vault</span>
      </div>

      {/* Smartphone Outer Chassis Frame */}
      <div
        ref={phoneRef}
        className="relative rounded-[44px] p-3 bg-gradient-to-b from-[#2A3B40] via-[#122428] to-[#0A171A] shadow-2xl border-[3px] border-[#3D565D] overflow-hidden transition-transform duration-300"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Dynamic Island / Speaker Pill */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-40 flex items-center justify-between px-3">
          <div className="w-2.5 h-2.5 rounded-full bg-[#1A2528] border border-white/10" />
          <div className="w-2 h-2 rounded-full bg-emerald-500/80 animate-pulse" />
        </div>

        {/* Screen Bezel & Container */}
        <div className="relative rounded-[34px] bg-[#FAF8F5] overflow-hidden min-h-[560px] sm:min-h-[600px] flex flex-col justify-between border border-elemental-water/10 text-elemental-water">
          
          {imageSrc ? (
            /* If User Provides Real UI Mockup Image */
            <div className="w-full h-full flex-1 relative overflow-hidden">
              <img 
                src={imageSrc} 
                alt={alt}
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
          ) : (
            /* Default High-Fidelity Interactive UI Mockup */
            <div className="flex flex-col h-full justify-between p-4 pt-10 text-left">
              
              {/* Phone Status Bar */}
              <div className="flex items-center justify-between text-[11px] font-mono text-sandstone-muted pb-3 border-b border-elemental-water/10">
                <span>9:41 AM</span>
                <span className="flex items-center gap-1.5 font-semibold text-elemental-water">
                  <span>5G</span>
                  <span>100%</span>
                </span>
              </div>

              {/* In-App Interactive Tab Bar */}
              <div className="flex items-center justify-between gap-1 p-1 my-3 bg-canvas-raised rounded-xl border border-elemental-water/10 text-[11px] font-semibold">
                <button
                  onClick={() => setActiveTab('dashboard')}
                  className={`flex-1 py-1.5 rounded-lg text-center transition-all ${
                    activeTab === 'dashboard' ? 'bg-elemental-water text-canvas shadow-xs' : 'text-sandstone-muted'
                  }`}
                >
                  Dashboard
                </button>
                <button
                  onClick={() => setActiveTab('notifications')}
                  className={`flex-1 py-1.5 rounded-lg text-center transition-all ${
                    activeTab === 'notifications' ? 'bg-elemental-water text-canvas shadow-xs' : 'text-sandstone-muted'
                  }`}
                >
                  UPI Alerts
                </button>
                <button
                  onClick={() => setActiveTab('ai')}
                  className={`flex-1 py-1.5 rounded-lg text-center transition-all ${
                    activeTab === 'ai' ? 'bg-elemental-water text-canvas shadow-xs' : 'text-sandstone-muted'
                  }`}
                >
                  AI Coach
                </button>
              </div>

              {/* View 1: Dashboard */}
              {activeTab === 'dashboard' && (
                <div className="space-y-3 flex-1">
                  {/* Total Balance Card */}
                  <div className="p-4 rounded-2xl bg-elemental-water text-canvas space-y-1 shadow-md">
                    <div className="flex items-center justify-between text-xs text-canvas/70 font-mono">
                      <span>Total Net Worth</span>
                      <span className="text-emerald-400 font-bold flex items-center gap-0.5">
                        <TrendingUp className="w-3 h-3" /> +14.2%
                      </span>
                    </div>
                    <div className="text-2xl font-bold font-mono tracking-tight">
                      ₹4,82,450
                    </div>
                    <div className="text-[10px] text-canvas/60 font-mono pt-1 flex justify-between">
                      <span>Emergency: 180 Days</span>
                      <span>Safe to Spend: ₹18,400</span>
                    </div>
                  </div>

                  {/* Envelope Budget Status */}
                  <div className="p-3.5 rounded-2xl bg-canvas-raised border border-elemental-water/10 space-y-2">
                    <div className="flex items-center justify-between text-xs font-bold text-elemental-water">
                      <span>Monthly Dining & Food</span>
                      <span className="font-mono text-[11px] text-elemental-sky">₹6,450 / ₹10,000</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-canvas overflow-hidden">
                      <div className="h-full bg-elemental-sky rounded-full" style={{ width: '64.5%' }} />
                    </div>
                    <div className="flex items-center justify-between text-[10px] text-sandstone-muted font-mono">
                      <span>🟢 Healthy Velocity</span>
                      <span>12 days left</span>
                    </div>
                  </div>

                  {/* Recent Auto-Logged Transactions */}
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-elemental-water flex justify-between items-center">
                      <span>Recent Auto-Captured</span>
                      <span className="text-[10px] text-elemental-sky font-mono font-normal">Live</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-canvas-card border border-elemental-water/10 flex items-center justify-between shadow-xs">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-elemental-skySoft text-elemental-sky flex items-center justify-center font-bold text-xs">
                          ₹
                        </div>
                        <div>
                          <p className="text-xs font-bold text-elemental-water">Swiggy Gourmet</p>
                          <p className="text-[10px] text-sandstone-muted font-mono">Auto-parsed • GPay</p>
                        </div>
                      </div>
                      <span className="text-xs font-mono font-bold text-elemental-fire">-₹450</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-canvas-card border border-elemental-water/10 flex items-center justify-between shadow-xs">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs">
                          ↓
                        </div>
                        <div>
                          <p className="text-xs font-bold text-elemental-water">Salary Deposit</p>
                          <p className="text-[10px] text-sandstone-muted font-mono">Auto-parsed • HDFC</p>
                        </div>
                      </div>
                      <span className="text-xs font-mono font-bold text-emerald-600">+₹85,000</span>
                    </div>
                  </div>
                </div>
              )}

              {/* View 2: Live UPI Notifications */}
              {activeTab === 'notifications' && (
                <div className="space-y-3 flex-1">
                  <div className="p-3 rounded-2xl bg-elemental-skySoft border border-elemental-sky/30 text-xs font-semibold text-elemental-sky flex items-center gap-2">
                    <Bell className="w-4 h-4 shrink-0" />
                    <span>Silent Background Notification Listener</span>
                  </div>

                  {/* Simulated Alert 1 */}
                  <div className="p-3.5 rounded-2xl bg-canvas-card border border-elemental-water/10 shadow-sm space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-elemental-water flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-elemental-sky" /> Google Pay
                      </span>
                      <span className="text-[10px] text-sandstone-muted font-mono">Just now</span>
                    </div>
                    <p className="text-xs text-elemental-water font-medium">Paid ₹120 to Chai Point via UPI</p>
                    <div className="pt-1 flex items-center justify-between text-[10px] font-mono text-emerald-600 font-bold border-t border-elemental-water/5">
                      <span>✓ Auto-logged to Food</span>
                      <span>0 SMS used</span>
                    </div>
                  </div>

                  {/* Simulated Alert 2 */}
                  <div className="p-3.5 rounded-2xl bg-canvas-card border border-elemental-water/10 shadow-sm space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-elemental-water flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-elemental-fire" /> PhonePe
                      </span>
                      <span className="text-[10px] text-sandstone-muted font-mono">2m ago</span>
                    </div>
                    <p className="text-xs text-elemental-water font-medium">Electricity Bill ₹1,850 debited</p>
                    <div className="pt-1 flex items-center justify-between text-[10px] font-mono text-emerald-600 font-bold border-t border-elemental-water/5">
                      <span>✓ Auto-logged to Utilities</span>
                      <span>0 SMS used</span>
                    </div>
                  </div>
                </div>
              )}

              {/* View 3: Private AI Coach */}
              {activeTab === 'ai' && (
                <div className="space-y-3 flex-1">
                  <div className="p-3 rounded-2xl bg-elemental-water text-canvas text-xs font-semibold flex items-center gap-2">
                    <Bot className="w-4 h-4 text-elemental-sky shrink-0" />
                    <span>100% Offline AI Assistant</span>
                  </div>

                  {/* User Bubble */}
                  <div className="p-3 rounded-2xl rounded-tr-xs bg-elemental-skySoft border border-elemental-sky/20 text-xs text-elemental-water ml-6 font-medium text-right">
                    "Can I afford buying a new laptop for ₹65,000 this month?"
                  </div>

                  {/* AI Response Bubble */}
                  <div className="p-3.5 rounded-2xl rounded-tl-xs bg-canvas-raised border border-elemental-water/10 text-xs text-elemental-water mr-4 space-y-1.5 shadow-xs">
                    <p className="leading-relaxed">
                      Yes! You have <strong>₹74,200 surplus cashflow</strong> after all fixed bills and 6 months emergency savings. 
                    </p>
                    <p className="text-[11px] text-sandstone-muted">
                      💡 Recommendation: Purchase using no-cost EMI or debit without dipping into your emergency buffer.
                    </p>
                  </div>
                </div>
              )}

              {/* Bottom Quick Action Bar */}
              <div className="pt-3 border-t border-elemental-water/10 flex items-center justify-between text-[11px] font-mono text-sandstone-muted">
                <span className="flex items-center gap-1 text-elemental-water font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-elemental-sky" /> VITT v3.0
                </span>
                <span>100% Private</span>
              </div>

            </div>
          )}

        </div>
      </div>

    </div>
  );
}
