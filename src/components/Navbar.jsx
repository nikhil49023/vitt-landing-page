import React from 'react';
import { Download, BookOpen, Code2, Lock } from 'lucide-react';

export default function Navbar({ onOpenLegal, onOpenTechnical }) {
  return (
    <header className="sticky top-0 z-50 w-full bg-canvas/90 backdrop-blur-md border-b border-earth-forest/15 px-4 md:px-8 py-3.5 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo & Version Pill */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl overflow-hidden shadow-md shadow-earth-forest/20 border border-earth-sage/30 bg-[#0E2218] flex items-center justify-center">
            <img 
              src="./vitt_logo.png" 
              alt="VITT Logo" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif text-xl font-bold tracking-tight text-earth-forest">VITT</span>
              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-earth-sageSoft text-earth-forest border border-earth-sage/30">
                v3.0.0
              </span>
            </div>
            <p className="text-[10px] text-sandstone-muted font-mono hidden sm:block">Sovereign Financial Companion · 100% On-Device</p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-sandstone-muted">
          <a href="#features" className="hover:text-earth-forest transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-earth-forest transition-colors">How It Works</a>
          <button 
            onClick={onOpenTechnical}
            className="hover:text-earth-forest transition-colors flex items-center gap-1"
          >
            <Code2 className="w-3.5 h-3.5 text-earth-ochre" />
            <span>Tech Specs</span>
          </button>
          <a 
            href="./privacy_policy.html"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-earth-forest transition-colors flex items-center gap-1"
          >
            <BookOpen className="w-3.5 h-3.5 text-earth-sage" />
            <span>Privacy Policy</span>
          </a>
        </nav>

        {/* Action Button: Download APK */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full bg-canvas-raised border border-earth-forest/15 text-[11px] font-mono text-earth-forest">
            <Lock className="w-3 h-3 text-earth-sage" />
            <span>100% Private & Offline</span>
          </div>

          <a
            href="https://github.com/nikhil49023/VITT/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-earth-forest text-canvas font-semibold text-xs transition-all duration-300 hover:bg-earth-sage hover:shadow-lg hover:shadow-earth-forest/20 active:scale-95"
          >
            <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
            <span>Get VITT v3.0.0</span>
          </a>
        </div>

      </div>
    </header>
  );
}

