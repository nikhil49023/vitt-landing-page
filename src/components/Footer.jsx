import React from 'react';
import { Heart, Code2, BookOpen, Mail, Github } from 'lucide-react';

export default function Footer({ onOpenLegal, onOpenTechnical }) {
  return (
    <footer className="w-full border-t border-earth-forest/15 py-12 px-4 md:px-8 relative z-10 bg-canvas-card">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* Brand & Mandate */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg overflow-hidden border border-earth-sage/30 bg-[#0E2218] flex items-center justify-center shadow-md">
              <img src="./vitt_logo.png" alt="VITT Logo" className="w-full h-full object-cover" />
            </div>
            <span className="font-serif text-lg font-bold text-earth-forest">VITT</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-earth-sageSoft text-earth-forest font-semibold border border-earth-sage/30">
              v3.0.0
            </span>
          </div>

          <p className="text-xs text-sandstone-muted font-serif italic max-w-sm leading-relaxed">
            The sovereign personal financial companion engineered for India. 100% on-device AI intelligence, zero ads, zero subscriptions, zero cloud data uploads, and zero invasive SMS permissions.
          </p>

          <p className="text-[11px] text-sandstone-muted font-mono">
            Architected & Built by <strong className="text-earth-forest">Kilani Sai Nikhil</strong>
          </p>
        </div>

        {/* Links Column 1: Navigation */}
        <div className="md:col-span-3 space-y-3 text-xs">
          <h4 className="font-bold text-earth-forest uppercase tracking-wider font-mono text-[11px]">Ecosystem Links</h4>
          <ul className="space-y-2 text-sandstone-muted font-medium">
            <li>
              <a href="#features" className="hover:text-earth-forest transition-colors">Feature Inventory</a>
            </li>
            <li>
              <a href="#how-it-works" className="hover:text-earth-forest transition-colors">How It Works</a>
            </li>
            <li>
              <a 
                href="https://github.com/nikhil49023/VITT" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-earth-forest transition-colors flex items-center gap-1.5"
              >
                <Github className="w-3.5 h-3.5 text-earth-sage" /> GitHub Repository
              </a>
            </li>
            <li>
              <a 
                href="./privacy_policy.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-earth-forest transition-colors"
              >
                Static Privacy Policy (HTML)
              </a>
            </li>
            <li>
              <a 
                href="./terms.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-earth-forest transition-colors"
              >
                Static Terms of Service (HTML)
              </a>
            </li>
          </ul>
        </div>

        {/* Links Column 2: Legal & Statutory */}
        <div className="md:col-span-4 space-y-3 text-xs">
          <h4 className="font-bold text-earth-forest uppercase tracking-wider font-mono text-[11px]">Compliance & Governance</h4>
          <div className="space-y-2 text-sandstone-muted font-mono text-[11px]">
            <button 
              onClick={onOpenLegal}
              className="hover:text-earth-forest transition-colors text-left flex items-center gap-1.5"
            >
              <BookOpen className="w-3.5 h-3.5 text-earth-terracotta" /> Interactive Legal Disclosures
            </button>
            <button 
              onClick={onOpenTechnical}
              className="hover:text-earth-forest transition-colors text-left flex items-center gap-1.5"
            >
              <Code2 className="w-3.5 h-3.5 text-earth-ochre" /> Technical Architecture Specs
            </button>
            <a 
              href="mailto:vitt.companion@gmail.com"
              className="hover:text-earth-forest transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-earth-forest" /> Grievance Officer Contact
            </a>
          </div>

          <div className="pt-2">
            <p className="text-[10px] text-sandstone-muted font-mono leading-relaxed">
              SEBI RIA Exemption Notice: All calculation algorithms, emergency runway forecasts, and AI insights are provided strictly for educational modeling. VITT is not a registered investment adviser.
            </p>
          </div>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-earth-forest/10 flex flex-wrap items-center justify-between text-[11px] text-sandstone-muted font-mono">
        <p>© 2026 VITT. Sovereign Open-Source Project. Licensed under MIT.</p>
        <p className="flex items-center gap-1">
          Built with precision for India's financial sovereignty.
        </p>
      </div>
    </footer>
  );
}
