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
import TestimonialSection from './components/TestimonialSection';
import FaqAccordion from './components/FaqAccordion';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import ModalDialog from './components/ModalDialog';
import LegalModalContent from './components/LegalModalContent';
import TechnicalModalContent from './components/TechnicalModalContent';

// Lazy load heavy components for better performance
const AiPlayground = lazy(() => import('./components/AiPlayground'));
const InteractiveSipCalculator = lazy(() => import('./components/InteractiveSipCalculator'));
const FeatureSpotlight = lazy(() => import('./components/FeatureSpotlight'));
const PhoneShowcasePinned = lazy(() => import('./components/PhoneShowcasePinned'));
const ComparisonTable = lazy(() => import('./components/ComparisonTable'));
const LiveStatsTicker = lazy(() => import('./components/LiveStatsTicker'));
const ArchitectureSection = lazy(() => import('./components/ArchitectureSection'));
const ArchitecturePipeline = lazy(() => import('./components/ArchitecturePipeline'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center py-20">
    <div className="w-8 h-8 border-2 border-elemental-sky/30 border-t-elemental-sky rounded-full animate-spin" />
  </div>
);

export default function App() {
  const [legalOpen, setLegalOpen] = useState(false);
  const [technicalOpen, setTechnicalOpen] = useState(false);

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-canvas text-elemental-water selection:bg-elemental-sky/20 selection:text-elemental-water relative overflow-hidden">
        
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

        {/* Promotional Main Flow */}
        <main id="main-content" className="relative">
          {/* Promotional Hero */}
          <HeroSection 
            onOpenTechnical={() => setTechnicalOpen(true)}
            onOpenLegal={() => setLegalOpen(true)}
          />

          {/* Trust Badges */}
          <TrustBadges />

          {/* Supported Banks Ticker */}
          <LogoCloud />

          {/* 3 Simple Setup Steps */}
          <HowItWorks />

          {/* Lazy loaded components */}
          <Suspense fallback={<LoadingFallback />}>
            {/* Interactive AI Playground Sandbox */}
            <AiPlayground />

            {/* Interactive Wealth & SIP Calculator Widget */}
            <InteractiveSipCalculator />

            {/* Landify Feature Spotlight Switcher */}
            <FeatureSpotlight />

            {/* Pinned 3D Smartphone Feature Showcase */}
            <PhoneShowcasePinned />

            {/* VITT vs Traditional Apps Comparison */}
            <ComparisonTable />

            {/* Statistics Ticker */}
            <LiveStatsTicker />
          </Suspense>

          {/* Vector Illustrated Feature Bento Grid */}
          <FeatureBentoGrid />

          {/* Live Notification Demo */}
          <LiveNotificationDemo />

          {/* Sovereign Use-Cases */}
          <TestimonialSection />

          {/* Promotional FAQ */}
          <FaqAccordion />

          <Suspense fallback={<LoadingFallback />}>
            {/* Technical Architecture Pipeline */}
            <ArchitecturePipeline />

            {/* Technical Architecture Details */}
            <ArchitectureSection 
              onOpenTechnical={() => setTechnicalOpen(true)}
            />
          </Suspense>

          {/* High-Conversion Bottom CTA Banner */}
          <CtaBanner 
            onOpenTechnical={() => setTechnicalOpen(true)}
          />
        </main>

        {/* Footer */}
        <Footer 
          onOpenLegal={() => setLegalOpen(true)}
          onOpenTechnical={() => setTechnicalOpen(true)}
        />

        {/* Legal Modal */}
        <ModalDialog
          isOpen={legalOpen}
          onClose={() => setLegalOpen(false)}
          title="Privacy Policy, SEBI Disclaimers & Terms of Use"
        >
          <LegalModalContent />
        </ModalDialog>

        {/* Technical Specs Modal */}
        <ModalDialog
          isOpen={technicalOpen}
          onClose={() => setTechnicalOpen(false)}
          title="VITT v3.0.0 Hardware RAM Guard & Technical Specs"
        >
          <TechnicalModalContent />
        </ModalDialog>

      </div>
    </SmoothScroll>
  );
}
