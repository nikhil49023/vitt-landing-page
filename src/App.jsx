import React, { useState, lazy, Suspense } from 'react';
import SmoothScroll from './components/SmoothScroll';
import CustomCursor from './components/CustomCursor';
import ScrollProgressBar from './components/ScrollProgressBar';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TrustBadges from './components/TrustBadges';
import LogoCloud from './components/LogoCloud';
import HowItWorks from './components/HowItWorks';
import FeatureBentoGrid from './components/FeatureBentoGrid';
import LiveNotificationDemo from './components/LiveNotificationDemo';
import FaqAccordion from './components/FaqAccordion';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import ModalDialog from './components/ModalDialog';
import LegalModalContent from './components/LegalModalContent';
import TechnicalModalContent from './components/TechnicalModalContent';

// Lazy load interactive widgets for fast initial load
const AiPlayground = lazy(() => import('./components/AiPlayground'));
const InteractiveSipCalculator = lazy(() => import('./components/InteractiveSipCalculator'));
const ComparisonTable = lazy(() => import('./components/ComparisonTable'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center py-16">
    <div className="w-7 h-7 border-2 border-earth-forest/30 border-t-earth-forest rounded-full animate-spin" />
  </div>
);

export default function App() {
  const [legalOpen, setLegalOpen] = useState(false);
  const [technicalOpen, setTechnicalOpen] = useState(false);

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-canvas text-elemental-water selection:bg-earth-forest/10 selection:text-earth-forest relative overflow-x-hidden">
        
        {/* Skip to main content - Accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        {/* Scroll Progress Bar at Top */}
        <ScrollProgressBar />

        {/* Precision Cursor */}
        <CustomCursor />

        {/* Navigation */}
        <Navbar 
          onOpenLegal={() => setLegalOpen(true)}
          onOpenTechnical={() => setTechnicalOpen(true)}
        />

        {/* Main Flow */}
        <main id="main-content" className="relative">
          
          {/* 1. Hero Section with Phone Mockup Frame */}
          <HeroSection 
            onOpenTechnical={() => setTechnicalOpen(true)}
            onOpenLegal={() => setLegalOpen(true)}
          />

          {/* 2. Trust & Security Badges */}
          <TrustBadges />

          {/* 3. Supported UPI & Banking Apps Ticker */}
          <LogoCloud />

          {/* 4. 3 Simple Setup Steps */}
          <HowItWorks />

          {/* 5. Clean Feature Bento Grid with Mockup Slots */}
          <FeatureBentoGrid />

          {/* 6. Interactive Live Notification Simulator */}
          <LiveNotificationDemo />

          {/* 7. Lazy Loaded Interactive Sandbox & Calculators */}
          <Suspense fallback={<LoadingFallback />}>
            {/* Interactive AI Money Coach Playground */}
            <AiPlayground />

            {/* Interactive Wealth Compounding & SIP Calculator */}
            <InteractiveSipCalculator />

            {/* VITT vs Traditional Apps Comparison */}
            <ComparisonTable />
          </Suspense>

          {/* 8. Frequently Asked Questions */}
          <FaqAccordion />

          {/* 9. Sovereign Bottom CTA Banner */}
          <CtaBanner 
            onOpenTechnical={() => setTechnicalOpen(true)}
          />

        </main>

        {/* Footer */}
        <Footer 
          onOpenLegal={() => setLegalOpen(true)}
          onOpenTechnical={() => setTechnicalOpen(true)}
        />

        {/* Redesigned 4-Tab Legal & DPDP Act 2023 Policy Modal */}
        <ModalDialog
          isOpen={legalOpen}
          onClose={() => setLegalOpen(false)}
          title="Privacy Policy, SEBI Disclaimers & Terms of Use"
        >
          <LegalModalContent />
        </ModalDialog>

        {/* Technical Architecture & Specifications Modal */}
        <ModalDialog
          isOpen={technicalOpen}
          onClose={() => setTechnicalOpen(false)}
          title="Technical Architecture & Engine Specifications"
        >
          <TechnicalModalContent />
        </ModalDialog>

      </div>
    </SmoothScroll>
  );
}
