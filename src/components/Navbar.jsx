import React from 'react';
import { Download, BookOpen, Code2, Lock } from 'lucide-react';

export default function Navbar({ onOpenLegal, onOpenTechnical }) {
  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-elemental-water/10 px-4 md:px-8 py-3.5 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo & Version Pill */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl overflow-hidden shadow-md shadow-elemental-sky/20 border border-elemental-sky/30 bg-[#071710] flex items-center justify-center">
            <img 
              src="./vitt_logo.png" 
              alt="VITT Logo" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-sans text-lg font-bold tracking-tight text-elemental-water">VITT</span>
              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-elemental-skySoft text-elemental-sky border border-elemental-sky/30">
                v3.0.0
              </span>
            </div>
            <p className="text-[10px] text-sandstone-muted font-mono hidden sm:block">Sovereign Financial Companion · 100% On-Device</p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-sandstone-muted">
          <a href="#features" className="hover:text-elemental-water transition-colors">Features</a>
          <a href="#spotlight" className="hover:text-elemental-water transition-colors">Capabilities</a>
          <a href="#architecture" className="hover:text-elemental-water transition-colors">Architecture</a>
          <button 
            onClick={onOpenTechnical}
            className="hover:text-elemental-water transition-colors flex items-center gap-1"
          >
            <Code2 className="w-3.5 h-3.5 text-elemental-sky" />
            <span>Tech Specs</span>
          </button>
          <a 
            href="./privacy_policy.html"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-elemental-water transition-colors flex items-center gap-1"
          >
            <BookOpen className="w-3.5 h-3.5 text-elemental-fire" />
            <span>Privacy Policy</span>
          </a>
        </nav>

        {/* Action Button: Download APK */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full bg-canvas-raised border border-elemental-water/10 text-[11px] font-mono text-sandstone-dark">
            <Lock className="w-3 h-3 text-elemental-sky" />
            <span>100% Private & Offline</span>
          </div>

          <a
            href="https://github.com/nikhil49023/VITT/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-elemental-water text-canvas font-semibold text-xs transition-all duration-300 hover:bg-elemental-sky hover:shadow-lg hover:shadow-elemental-sky/20 active:scale-95"
          >
            <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
            <span>Get VITT v3.0.0</span>
          </a>
        </div>

      </div>
    </header>
  );
}

