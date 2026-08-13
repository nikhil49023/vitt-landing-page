import React, { useState } from 'react';
import SmoothScroll from './components/SmoothScroll';
import CustomCursor from './components/CustomCursor';
import ScrollProgressBar from './components/ScrollProgressBar';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import LogoCloud from './components/LogoCloud';
import HowItWorks from './components/HowItWorks';
import AiPlayground from './components/AiPlayground';
import InteractiveSipCalculator from './components/InteractiveSipCalculator';
import FeatureSpotlight from './components/FeatureSpotlight';
import PhoneShowcasePinned from './components/PhoneShowcasePinned';
import ComparisonTable from './components/ComparisonTable';
import LiveStatsTicker from './components/LiveStatsTicker';
import FeatureBentoGrid from './components/FeatureBentoGrid';
import TestimonialSection from './components/TestimonialSection';
import FaqAccordion from './components/FaqAccordion';
import ArchitectureSection from './components/ArchitectureSection';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import ModalDialog from './components/ModalDialog';
import LegalModalContent from './components/LegalModalContent';
import TechnicalModalContent from './components/TechnicalModalContent';

export default function App() {
  const [legalOpen, setLegalOpen] = useState(false);
  const [technicalOpen, setTechnicalOpen] = useState(false);

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-canvas text-elemental-water selection:bg-elemental-sky/20 selection:text-elemental-water relative overflow-hidden">
        
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
        <main className="relative">
          {/* Promotional Hero */}
          <HeroSection 
            onOpenTechnical={() => setTechnicalOpen(true)}
            onOpenLegal={() => setLegalOpen(true)}
          />

          {/* Supported Banks Ticker */}
          <LogoCloud />

          {/* 3 Simple Setup Steps */}
          <HowItWorks />

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

          {/* Vector Illustrated Feature Bento Grid */}
          <FeatureBentoGrid />

          {/* Sovereign Use-Cases */}
          <TestimonialSection />

          {/* Promotional FAQ */}
          <FaqAccordion />

          {/* Technical Architecture Pipeline */}
          <ArchitectureSection 
            onOpenTechnical={() => setTechnicalOpen(true)}
          />

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
