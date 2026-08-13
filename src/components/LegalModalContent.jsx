import React from 'react';
import { AlertTriangle, ShieldCheck, Mail, Scale } from 'lucide-react';

export default function LegalModalContent() {
  return (
    <div className="space-y-8 text-xs leading-relaxed font-sans text-elemental-water">
      
      {/* SEBI Disclaimer Box */}
      <div className="p-4 rounded-2xl bg-elemental-fireSoft border border-elemental-fire/30 text-elemental-fire space-y-2">
        <div className="flex items-center gap-2 font-bold text-sm">
          <AlertTriangle className="w-4 h-4 shrink-0" />
          <span>SEBI Investment Advisers Regulations Disclaimer</span>
        </div>
        <p className="font-serif italic text-elemental-water text-[11px] leading-relaxed">
          VITT and developer Kilani Sai Nikhil are NOT registered as Investment Advisers under SEBI (Investment Advisers) Regulations, 2013, nor as Research Analysts under SEBI (Research Analysts) Regulations, 2014. All AI-generated insights, wealth calculators, and cashflow forecasts are provided strictly for educational and informational purposes. They do not constitute financial advice, investment recommendations, or stock buy/sell signals.
        </p>
      </div>

      {/* Terms of Service Section */}
      <div className="space-y-3">
        <h4 className="text-base font-bold text-elemental-water flex items-center gap-2">
          <Scale className="w-4 h-4 text-elemental-sky" /> Terms of Service (Terms of Use)
        </h4>
        <p className="text-sandstone-muted">
          <strong>1. Nature of Service:</strong> VITT is an individual, non-commercial Personal Finance Management (PFM) application providing transaction tracking, envelope budgeting, financial goal planning, and AI-assisted financial education. VITT is NOT a bank, Non-Banking Financial Company (NBFC), payment gateway, lending provider, or SEBI-registered investment adviser.
        </p>
        <p className="text-sandstone-muted">
          <strong>2. Solo Developer Disclaimer & Best-Effort Basis:</strong> VITT is built, owned, and maintained solely by Kilani Sai Nikhil as an individual solo developer. There is no corporate entity, board of directors, or registered physical office. Service support, maintenance, and bug fixes are provided on a best-effort basis.
        </p>
        <p className="text-sandstone-muted">
          <strong>3. Non-Commercial PFM Scope:</strong> VITT is strictly designed for personal household finance, student bill splitting, and informal personal debt tracking. Commercial merchant accounting, MSME business ledgers, and Kirana store bookkeeping are strictly out-of-scope.
        </p>
        <p className="text-sandstone-muted">
          <strong>4. Limitation of Liability:</strong> VITT is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind. Total aggregate liability is strictly capped at ₹100 INR to the maximum extent permitted by Indian law.
        </p>
      </div>

      {/* Privacy Policy & Data Handling */}
      <div className="space-y-3 pt-4 border-t border-elemental-water/10">
        <h4 className="text-base font-bold text-elemental-water flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-elemental-sky" /> Privacy Policy & Data Localization
        </h4>
        <p className="text-sandstone-muted">
          <strong>1. Zero Cloud Uploads:</strong> All transaction records, bank alerts, budget caps, goals, and chat histories are processed and stored 100% on your local phone hardware in an AES-256 encrypted SQLite database (`sqflite_sqlcipher`). Zero financial records leave your device.
        </p>
        <p className="text-sandstone-muted">
          <strong>2. Zero SMS Permission Rule:</strong> VITT never requests `READ_SMS` or `READ_CONTACTS`. Auto-tracking relies 100% on Android's `NotificationListenerService` parsing status bar banners on-device.
        </p>
        <p className="text-sandstone-muted">
          <strong>3. Notification Consent & Audit Logging:</strong> Notification Access is disabled by default on fresh installation. Grant and revoke timestamps are saved locally to `SharedPreferences` (`notification_consent_history`) in full compliance with the Digital Personal Data Protection (DPDP) Act 2023.
        </p>
      </div>

      {/* Statutory Disclaimers & Grievance Officer */}
      <div className="p-4 rounded-2xl bg-canvas-raised border border-elemental-water/10 space-y-2">
        <h5 className="font-bold text-elemental-water flex items-center gap-2 text-xs">
          <Mail className="w-4 h-4 text-elemental-sky" /> DPDP Act 2023 Grievance Officer & Statutory SLA
        </h5>
        <p className="text-sandstone-muted text-[11px]">
          <strong>Designated Grievance Officer:</strong> Kilani Sai Nikhil<br />
          <strong>Grievance Email:</strong> <code className="font-mono text-elemental-water font-bold">developer.nikhil49023@gmail.com</code><br />
          <strong>Response SLA:</strong> Complaints are acknowledged within <strong>24 hours</strong> and resolved within <strong>15 days</strong> as mandated by Rule 4 of IT Rules 2021 & DPDP §13.
        </p>
      </div>

    </div>
  );
}
