import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export default function ModalDialog({ isOpen, onClose, title, children }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 animate-fadeIn">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-elemental-water/40 backdrop-blur-md transition-opacity"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl max-h-[85vh] rounded-3xl glass-panel fine-border-water shadow-2xl flex flex-col z-10 bg-canvas overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-elemental-water/10 bg-canvas-raised">
          <h3 className="font-sans text-lg font-bold text-elemental-water flex items-center gap-2">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-sandstone-muted hover:text-elemental-water hover:bg-canvas transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 text-elemental-water">
          {children}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-elemental-water/10 bg-canvas-raised flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-elemental-water text-canvas hover:bg-elemental-sky font-semibold text-xs transition-all shadow-xs"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
}
