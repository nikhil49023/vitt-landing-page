import React from 'react';
import { Heart, Code2, BookOpen, Mail, Github } from 'lucide-react';

export default function Footer({ onOpenLegal, onOpenTechnical }) {
  return (
    <footer className="w-full glass-panel border-t border-elemental-water/10 py-12 px-4 md:px-8 relative z-10 bg-canvas-raised">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* Brand & Mandate */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg overflow-hidden border border-elemental-sky/30 bg-[#071710] flex items-center justify-center shadow-md">
              <img src="./vitt_logo.png" alt="VITT Logo" className="w-full h-full object-cover" />
            </div>
            <span className="font-sans text-lg font-bold text-elemental-water">VITT</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-elemental-skySoft text-elemental-sky font-semibold border border-elemental-sky/30">
              v3.0.0
            </span>
          </div>

          <p className="text-xs text-sandstone-muted font-serif italic max-w-sm leading-relaxed">
            The sovereign personal financial companion engineered for India. 100% on-device AI intelligence, zero ads, zero subscriptions, zero cloud data uploads, and zero invasive SMS permissions.
          </p>


          <p className="text-[11px] text-sandstone-faint font-mono">
            Architected & Built by <strong className="text-elemental-water">Kilani Sai Nikhil</strong>
          </p>
        </div>

        {/* Links Column 1: Navigation */}
        <div className="md:col-span-3 space-y-3 text-xs">
          <h4 className="font-bold text-elemental-water uppercase tracking-wider font-mono text-[11px]">Ecosystem Links</h4>
          <ul className="space-y-2 text-sandstone-muted font-medium">
            <li>
              <a href="#features" className="hover:text-elemental-water transition-colors">Feature Inventory</a>
            </li>
            <li>
              <a href="#architecture" className="hover:text-elemental-water transition-colors">Local Architecture Pipeline</a>
            </li>
            <li>
              <a 
                href="https://github.com/nikhil49023/VITT" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-elemental-water transition-colors flex items-center gap-1.5"
              >
                <Github className="w-3.5 h-3.5 text-elemental-sky" /> GitHub Repository
              </a>
            </li>
            <li>
              <a 
                href="./privacy_policy.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-elemental-water transition-colors"
              >
                Static Privacy Policy (HTML)
              </a>
            </li>
            <li>
              <a 
                href="./terms.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-elemental-water transition-colors"
              >
                Static Terms of Service (HTML)
              </a>
            </li>
          </ul>
        </div>

        {/* Links Column 2: Legal & Statutory */}
        <div className="md:col-span-4 space-y-3 text-xs">
          <h4 className="font-bold text-elemental-water uppercase tracking-wider font-mono text-[11px]">Compliance & Governance</h4>
          <div className="space-y-2 text-sandstone-muted font-mono text-[11px]">
            <button 
              onClick={onOpenLegal}
              className="hover:text-elemental-water transition-colors text-left flex items-center gap-1.5"
            >
              <BookOpen className="w-3.5 h-3.5 text-elemental-fire" /> Interactive Legal Disclosures
            </button>
            <button 
              onClick={onOpenTechnical}
              className="hover:text-elemental-water transition-colors text-left flex items-center gap-1.5"
            >
              <Code2 className="w-3.5 h-3.5 text-elemental-sky" /> Hardware RAM Guard & Technical Specs
            </button>
            <div className="pt-2 text-sandstone-faint text-[10px] space-y-1">
              <p className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-elemental-sky" /> Contact: developer.nikhil49023@gmail.com
              </p>
              <p>• DPDP Act 2023 Ack SLA: 24 Hours | Resolution: 15 Days</p>
              <p>• SEBI Educational Software Only</p>
            </div>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-elemental-water/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-sandstone-faint font-mono gap-4">
        <p>© 2026 Kilani Sai Nikhil. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Designed with sovereignty & <Heart className="w-3 h-3 text-elemental-fire inline fill-elemental-fire" /> in India
        </p>
      </div>
    </footer>
  );
}
