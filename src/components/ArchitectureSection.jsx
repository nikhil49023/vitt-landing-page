import React from 'react';
import { Code2 } from 'lucide-react';

export default function ArchitectureSection({ onOpenTechnical }) {
  return (
    <section id="architecture" className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-canvas-raised border border-elemental-sky/30 text-elemental-sky text-xs font-mono">
          <Code2 className="w-3.5 h-3.5" />
          <span>Local Execution Pipeline</span>
        </div>

        <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-elemental-water tracking-tight">
          How VITT Operates 100% Offline
        </h2>

        <p className="text-sm text-sandstone-muted font-sans max-w-2xl mx-auto leading-relaxed">
          From status bar banking banners to native Rust SIMD vector search and LiteRT-LM on-device reasoning.
        </p>
      </div>

      {/* Visual Pipeline Container */}
      <div className="p-8 md:p-12 rounded-[36px] glass-panel fine-border relative overflow-hidden shadow-sm">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Step 1: Input & Ingestion */}
          <div className="p-6 rounded-2xl bg-canvas fine-border space-y-4 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center gap-2 text-elemental-sky font-mono text-xs font-semibold mb-2">
                <span className="w-6 h-6 rounded-full bg-elemental-skySoft flex items-center justify-center text-[11px] font-bold">1</span>
                <span>DATA INGESTION</span>
              </div>
              <h3 className="text-base font-bold text-elemental-water">Notification Listener Service</h3>
              <p className="text-xs text-sandstone-muted mt-2 leading-relaxed">
                Android status bar banners captured via native Kotlin <code className="font-mono text-elemental-water font-semibold">TransactionNotificationListener.kt</code>. Regex matches GPay, PhonePe, SBI, HDFC alerts without SMS permissions.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-canvas-raised border border-elemental-water/10 font-mono text-[11px] text-sandstone-muted space-y-1">
              <p>• Zero `READ_SMS` requested</p>
              <p>• Local consent audit log</p>
            </div>
          </div>

          {/* Step 2: Storage & Native Rust Vector Engine */}
          <div className="p-6 rounded-2xl bg-canvas fine-border-water space-y-4 flex flex-col justify-between shadow-md">
            <div>
              <div className="flex items-center gap-2 text-elemental-sky font-mono text-xs font-semibold mb-2">
                <span className="w-6 h-6 rounded-full bg-elemental-skySoft flex items-center justify-center text-[11px] font-bold">2</span>
                <span>SOVEREIGN STORAGE & SIMD</span>
              </div>
              <h3 className="text-base font-bold text-elemental-water">SQLite SQLCipher + TurboVec</h3>
              <p className="text-xs text-sandstone-muted mt-2 leading-relaxed">
                Transactions written to <code className="font-mono text-elemental-water font-semibold">vitt.db</code> using AES-256 SQLCipher. Native Rust SIMD (<code className="font-mono text-elemental-water font-semibold">TurboVec</code> C-FFI) executes 256-dim cosine similarity vector search at &gt;130M ops/sec.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-canvas-raised border border-elemental-sky/30 font-mono text-[11px] text-elemental-sky font-semibold space-y-1">
              <p>• AES-256 Hardware Keystore</p>
              <p>• Sub-3ms Vector Retrieval</p>
            </div>
          </div>

          {/* Step 3: On-Device AI & ReAct Execution */}
          <div className="p-6 rounded-2xl bg-canvas fine-border space-y-4 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center gap-2 text-elemental-sky font-mono text-xs font-semibold mb-2">
                <span className="w-6 h-6 rounded-full bg-elemental-skySoft flex items-center justify-center text-[11px] font-bold">3</span>
                <span>ON-DEVICE AI REASONING</span>
              </div>
              <h3 className="text-base font-bold text-elemental-water">LiteRT-LM & ReAct Tools</h3>
              <p className="text-xs text-sandstone-muted mt-2 leading-relaxed">
                Google LiteRT runtime executes Gemma 4 E2B / Qwen 3 4B locally on phone NPU/CPU. ReAct tools dispatch budget creation and goal matching offline.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-canvas-raised border border-elemental-water/10 font-mono text-[11px] text-sandstone-muted space-y-1">
              <p>• RAM Tier Hardware Guard</p>
              <p>• SEBI Educational Software</p>
            </div>
          </div>

        </div>

        {/* Action Button */}
        <div className="mt-8 text-center">
          <button
            onClick={onOpenTechnical}
            className="px-6 py-3 rounded-xl bg-elemental-water text-canvas font-mono text-xs font-semibold hover:bg-elemental-sky transition-all shadow-sm"
          >
            Read Complete Technical Documentation & Security Specs →
          </button>
        </div>

      </div>
    </section>
  );
}
