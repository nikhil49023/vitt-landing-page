import React from 'react';
import { Cpu, Database, Zap } from 'lucide-react';

export default function TechnicalModalContent() {
  return (
    <div className="space-y-8 text-xs leading-relaxed font-sans text-elemental-water">
      
      {/* Hardware RAM Guard Matrix */}
      <div className="space-y-3">
        <h4 className="text-base font-bold text-elemental-water flex items-center gap-2">
          <Cpu className="w-4 h-4 text-elemental-sky" /> Hardware Capability Guard (`DeviceHardwareGuard`)
        </h4>
        <p className="text-sandstone-muted">
          To prevent thermal throttling and Out-Of-Memory (OOM) kernel crashes on budget smartphones, VITT enforces hardware evaluation gates (`/proc/meminfo` + OpenGL ES 3.1):
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse border border-elemental-water/10 font-mono text-[11px]">
            <thead>
              <tr className="bg-canvas-raised text-elemental-water border-b border-elemental-water/10">
                <th className="p-2.5 border-r border-elemental-water/10">System RAM Tier</th>
                <th className="p-2.5 border-r border-elemental-water/10">Recommended AI Model</th>
                <th className="p-2.5">Behavior & Mode</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-elemental-water/5 text-elemental-water">
              <tr>
                <td className="p-2.5 border-r border-elemental-water/10 font-semibold">High Tier (≥ 7.5 GB)</td>
                <td className="p-2.5 border-r border-elemental-water/10">Qwen 3 4B (`qwen3_4b`)</td>
                <td className="p-2.5">Full local LLM reasoning with high parameter accuracy</td>
              </tr>
              <tr>
                <td className="p-2.5 border-r border-elemental-water/10 font-semibold">Balanced Tier (5.5 – 7.5 GB)</td>
                <td className="p-2.5 border-r border-elemental-water/10">Gemma 4 E2B (`gemma_4_e2b`)</td>
                <td className="p-2.5">Standard local AI inference engine</td>
              </tr>
              <tr>
                <td className="p-2.5 border-r border-elemental-water/10 font-semibold text-elemental-fire">Hardware Gate (&lt; 5.5 GB)</td>
                <td className="p-2.5 border-r border-elemental-water/10 text-sandstone-muted">AI Model Locked</td>
                <td className="p-2.5 text-sandstone-muted">Forces 100% fast rule-based math. Cold boot &lt; 1s.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Native Rust SIMD Vector Engine */}
      <div className="space-y-3 pt-4 border-t border-elemental-water/10">
        <h4 className="text-base font-bold text-elemental-water flex items-center gap-2">
          <Zap className="w-4 h-4 text-elemental-sky" /> Native Rust SIMD Vector Engine (`TurboVec`)
        </h4>
        <p className="text-sandstone-muted">
          <code className="font-mono text-elemental-water font-bold">rust_native/src/lib.rs</code> compiles into <code className="font-mono text-elemental-water font-bold">libturbovec.so</code> using ARM NEON / x86 AVX2 SIMD instructions to execute 256-dimensional vector cosine similarity searches at <strong>&gt;130 Million ops/sec</strong> with sub-3ms query latency.
        </p>
      </div>

      {/* Database Schema & SQLCipher Encryption */}
      <div className="space-y-3 pt-4 border-t border-elemental-water/10">
        <h4 className="text-base font-bold text-elemental-water flex items-center gap-2">
          <Database className="w-4 h-4 text-elemental-sky" /> AES-256 SQLCipher Database Schema
        </h4>
        <p className="text-sandstone-muted">
          Database <code className="font-mono text-elemental-water font-bold">vitt.db</code> (Schema Version 16) key is generated via <code className="font-mono text-elemental-water font-bold">crypto.randomBytes(32)</code> and securely stored in Android's hardware Keystore via <code className="font-mono text-elemental-water font-bold">FlutterSecureStorage</code>.
        </p>
        
        <div className="p-3 rounded-xl bg-canvas-raised font-mono text-[10px] text-sandstone-muted border border-elemental-water/10 space-y-1 overflow-x-auto">
          <p className="text-elemental-water font-semibold">// Key Primary Tables</p>
          <p>• transactions (id, amount, description, category, date, type, paymentMethod, merchant, bank)</p>
          <p>• budgets (category, limit_amount, spent_amount, period)</p>
          <p>• goals (id, name, target_amount, saved_amount, deadline)</p>
          <p>• embedding_cache (id, text_hash, embedding BLOB, dimension 256, tx_id)</p>
          <p>• vault_items (id, title, file_path, ocr_text, amount)</p>
          <p>• khata_entries (id, person_name, amount, type, due_date, is_settled)</p>
        </div>
      </div>

    </div>
  );
}
