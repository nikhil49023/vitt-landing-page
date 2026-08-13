import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, BellRing, CheckCircle2, Sparkles, Smartphone } from 'lucide-react';
import { ScrollReveal } from './animations';

const NOTIFICATIONS = [
  {
    id: 1,
    app: 'GPay',
    appColor: '#0284C7',
    title: 'Payment Sent',
    message: 'Paid ₹450 to Swiggy',
    category: 'Food & Dining',
    categoryColor: '#C2410C',
    time: '2 min ago'
  },
  {
    id: 2,
    app: 'PhonePe',
    appColor: '#8C6D53',
    title: 'Debit Alert',
    message: '₹1,200 debited at Amazon',
    category: 'Shopping',
    categoryColor: '#0F292F',
    time: '15 min ago'
  },
  {
    id: 3,
    app: 'SBI',
    appColor: '#C2410C',
    title: 'Credit Alert',
    message: '₹5,000 credited - Salary',
    category: 'Income',
    categoryColor: '#10B981',
    time: '1 hour ago'
  },
  {
    id: 4,
    app: 'HDFC',
    appColor: '#0284C7',
    title: 'UPI Payment',
    message: '₹890 paid at Blinkit',
    category: 'Groceries',
    categoryColor: '#8C6D53',
    time: '2 hours ago'
  }
];

export default function LiveNotificationDemo() {
  const [activeNotification, setActiveNotification] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setActiveNotification((prev) => (prev + 1) % NOTIFICATIONS.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative z-10 overflow-hidden">
      
      {/* Section Header */}
      <ScrollReveal>
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-canvas-raised border border-elemental-sky/30 text-elemental-sky text-xs font-mono">
            <BellRing className="w-3.5 h-3.5" />
            <span>Live Notification Parsing Demo</span>
          </div>

          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-elemental-water tracking-tight">
            Watch VITT Parse Your Bank Alerts
          </h2>

          <p className="text-sm text-sandstone-muted font-sans max-w-2xl mx-auto leading-relaxed">
            Real-time demonstration of how VITT automatically categorizes transactions from banking notifications.
          </p>
        </div>
      </ScrollReveal>

      {/* Demo Container */}
      <ScrollReveal delay={0.2}>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            {/* Left: Notification Panel */}
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-sans text-lg font-bold text-elemental-water flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-elemental-sky" />
                  Incoming Notifications
                </h3>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className={`px-3 py-1 rounded-full text-xs font-mono transition-all ${
                    isPlaying 
                      ? 'bg-elemental-sky text-canvas' 
                      : 'bg-canvas-raised text-sandstone-muted border border-elemental-water/10'
                  }`}
                >
                  {isPlaying ? '⏸ Pause' : '▶ Play'}
                </button>
              </div>

              <div className="space-y-3">
                {NOTIFICATIONS.map((notif, idx) => (
                  <motion.div
                    key={notif.id}
                    animate={{
                      opacity: activeNotification === idx ? 1 : 0.5,
                      scale: activeNotification === idx ? 1.02 : 0.98,
                      borderColor: activeNotification === idx ? '#0284C7' : 'rgba(15, 41, 47, 0.1)'
                    }}
                    transition={{ duration: 0.3 }}
                    className="p-4 rounded-2xl bg-canvas glass-panel fine-border-water shadow-sm"
                  >
                    <div className="flex items-start gap-3">
                      <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-xs"
                        style={{ backgroundColor: notif.appColor }}
                      >
                        {notif.app.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-bold text-elemental-water">{notif.app}</span>
                          <span className="text-[10px] text-sandstone-muted font-mono">{notif.time}</span>
                        </div>
                        <p className="text-xs text-elemental-water font-medium">{notif.message}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: Parsed Result */}
            <div className="space-y-4">
              <h3 className="font-sans text-lg font-bold text-elemental-water flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-elemental-sky" />
                Auto-Categorized Result
              </h3>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeNotification}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="p-6 rounded-3xl bg-canvas glass-panel fine-border-water shadow-lg"
                >
                  <div className="space-y-4">
                    {/* Status Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-elemental-skySoft text-elemental-sky border border-elemental-sky/30 text-xs font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Transaction Parsed & Categorized</span>
                    </div>

                    {/* Parsed Details */}
                    <div className="space-y-3 pt-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-sandstone-muted">Source App</span>
                        <span className="text-xs font-bold text-elemental-water font-mono">
                          {NOTIFICATIONS[activeNotification].app}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-sandstone-muted">Amount</span>
                        <span className="text-sm font-bold text-elemental-sky font-mono">
                          {NOTIFICATIONS[activeNotification].message.match(/₹[\d,]+/)?.[0] || 'N/A'}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-sandstone-muted">Category</span>
                        <span 
                          className="px-2 py-0.5 rounded-full text-[10px] font-bold text-white"
                          style={{ backgroundColor: NOTIFICATIONS[activeNotification].categoryColor }}
                        >
                          {NOTIFICATIONS[activeNotification].category}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-sandstone-muted">Status</span>
                        <span className="text-xs font-bold text-elemental-sky">✓ Saved Locally</span>
                      </div>
                    </div>

                    {/* Privacy Badge */}
                    <div className="pt-3 border-t border-elemental-water/10">
                      <div className="flex items-center gap-2 text-[10px] text-sandstone-muted font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-elemental-sky" />
                        <span>Zero cloud upload • AES-256 encrypted • 100% on-device</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Progress Indicator */}
              <div className="flex justify-center gap-1.5 pt-4">
                {NOTIFICATIONS.map((_, idx) => (
                  <motion.div
                    key={idx}
                    animate={{
                      width: activeNotification === idx ? 24 : 6,
                      backgroundColor: activeNotification === idx ? '#0284C7' : '#F3EFEA'
                    }}
                    transition={{ duration: 0.3 }}
                    className="h-1.5 rounded-full"
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </ScrollReveal>

    </section>
  );
}
