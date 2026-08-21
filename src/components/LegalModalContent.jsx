import React, { useState } from 'react';
import { ShieldCheck, Scale, AlertTriangle, Mail, Lock, EyeOff, FileText, CheckCircle2, ChevronRight } from 'lucide-react';

export default function LegalModalContent() {
  const [activeTab, setActiveTab] = useState('privacy');

  const tabs = [
    { id: 'privacy', label: 'Privacy Policy', icon: ShieldCheck },
    { id: 'terms', label: 'Terms of Use', icon: Scale },
    { id: 'sebi', label: 'SEBI Disclaimer', icon: AlertTriangle },
    { id: 'grievance', label: 'Grievance & Contact', icon: Mail },
  ];

  return (
    <div className="flex flex-col space-y-6 text-elemental-water">
      
      {/* Tab Selector */}
      <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-canvas-raised rounded-2xl border border-elemental-water/10 text-xs">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-medium transition-all text-xs ${
                isActive
                  ? 'bg-elemental-water text-canvas shadow-xs font-semibold'
                  : 'text-sandstone-muted hover:text-elemental-water hover:bg-canvas'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-elemental-sky' : ''}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab 1: Privacy Policy */}
      {activeTab === 'privacy' && (
        <div className="space-y-6 text-xs leading-relaxed text-sandstone-muted text-left">
          
          <div className="p-4 rounded-2xl bg-elemental-skySoft border border-elemental-sky/30 text-elemental-water space-y-1.5">
            <h4 className="font-bold text-sm flex items-center gap-2 text-elemental-sky">
              <ShieldCheck className="w-4 h-4" /> 100% Local Data Sovereignty Guarantee
            </h4>
            <p className="text-[11px] leading-relaxed">
              VITT is engineered from first principles as an offline-first sovereign personal finance manager. Your financial transactions, bank alerts, budget balances, and AI conversations are stored strictly inside your phone's hardware security chip. We operate zero cloud synchronization servers.
            </p>
          </div>

          <div className="space-y-3">
            <h5 className="font-bold text-sm text-elemental-water">1. Zero Cloud Uploads & Zero Remote Storage</h5>
            <p>
              All transaction records, account balances, categorization rules, and encrypted receipt scans reside exclusively in your device's local SQLite database protected by hardware-backed AES-256 encryption (<code className="font-mono text-elemental-water">sqflite_sqlcipher</code>). There are no user accounts, no cloud databases, and no remote backups.
            </p>
          </div>

          <div className="space-y-3">
            <h5 className="font-bold text-sm text-elemental-water">2. Zero SMS Permission Policy</h5>
            <p>
              Unlike traditional expense trackers, VITT <strong>NEVER requests or uses the <code className="font-mono text-elemental-water font-semibold">READ_SMS</code> or <code className="font-mono text-elemental-water font-semibold">RECEIVE_SMS</code> Android permissions</strong>. VITT has zero technical capability to read your personal text messages, one-time passwords (OTPs), personal conversations, or contacts.
            </p>
          </div>

          <div className="space-y-3">
            <h5 className="font-bold text-sm text-elemental-water">3. On-Device Notification Listener Consent</h5>
            <p>
              Automatic UPI expense tracking relies exclusively on Android's standard <code className="font-mono text-elemental-water">NotificationListenerService</code>. On fresh installation, Notification Access is disabled by default and requires explicit system permission granted by you. You may revoke this access at any time from Android System Settings.
            </p>
          </div>

          <div className="space-y-3">
            <h5 className="font-bold text-sm text-elemental-water">4. DPDP Act 2023 Compliance & Data Deletion Rights</h5>
            <p>
              In accordance with India's Digital Personal Data Protection (DPDP) Act 2023, you have full sovereign rights over your data. Because all data is stored on your device, you can permanently and irrevocably delete all financial records and encryption keys at any time via <strong>Settings &gt; Storage &gt; Erase All Data</strong>.
            </p>
          </div>

        </div>
      )}

      {/* Tab 2: Terms of Service */}
      {activeTab === 'terms' && (
        <div className="space-y-6 text-xs leading-relaxed text-sandstone-muted text-left">
          
          <div className="space-y-3">
            <h5 className="font-bold text-sm text-elemental-water">1. Nature of the Application</h5>
            <p>
              VITT is an open-source, non-commercial Personal Finance Management (PFM) application designed to assist individuals in budgeting, personal expense tracking, and financial literacy. VITT is NOT a bank, Non-Banking Financial Company (NBFC), payment aggregator, wallet provider, or credit institution.
            </p>
          </div>

          <div className="space-y-3">
            <h5 className="font-bold text-sm text-elemental-water">2. Independent Solo Developer Project</h5>
            <p>
              VITT is built, maintained, and published by <strong>Kilani Sai Nikhil</strong> as an independent developer project. VITT is provided as a free public utility with zero advertisements, zero in-app purchases, and zero subscription paywalls.
            </p>
          </div>

          <div className="space-y-3">
            <h5 className="font-bold text-sm text-elemental-water">3. Non-Commercial & Personal Household Scope</h5>
            <p>
              VITT is tailored exclusively for personal household budgeting, student expense splitting, and informal family ledgers. Commercial merchant accounting, MSME tax filing, and GST invoicing are strictly outside the intended scope of this software.
            </p>
          </div>

          <div className="space-y-3">
            <h5 className="font-bold text-sm text-elemental-water">4. Limitation of Liability</h5>
            <p>
              VITT is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind, whether express or implied. The developer shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use the application.
            </p>
          </div>

        </div>
      )}

      {/* Tab 3: SEBI Disclaimer */}
      {activeTab === 'sebi' && (
        <div className="space-y-6 text-xs leading-relaxed text-sandstone-muted text-left">
          
          <div className="p-4 rounded-2xl bg-elemental-fireSoft border border-elemental-fire/30 text-elemental-fire space-y-2">
            <div className="flex items-center gap-2 font-bold text-sm">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>SEBI Investment Advisers & Research Analysts Disclaimer</span>
            </div>
            <p className="font-serif italic text-elemental-water text-[11px] leading-relaxed">
              VITT and its creator Kilani Sai Nikhil are NOT registered with the Securities and Exchange Board of India (SEBI) as Investment Advisers (RIA) under the SEBI (Investment Advisers) Regulations, 2013, nor as Research Analysts under the SEBI (Research Analysts) Regulations, 2014.
            </p>
          </div>

          <div className="space-y-3">
            <h5 className="font-bold text-sm text-elemental-water">Educational & Analytical Scope Only</h5>
            <p>
              All insights generated by the on-device AI coach, wealth compounding calculators (SIP, FD, RD), cashflow runway projections, and financial health scores are generated purely for informational, educational, and mathematical simulation purposes.
            </p>
            <p>
              Nothing in this app constitutes financial advice, investment advice, trading tips, tax advice, or a recommendation to buy, hold, or sell securities, mutual funds, stocks, derivatives, cryptocurrencies, or insurance products. Always consult a qualified SEBI-registered financial adviser before making any investment decisions.
            </p>
          </div>

        </div>
      )}

      {/* Tab 4: Grievance Redressal & Contact */}
      {activeTab === 'grievance' && (
        <div className="space-y-6 text-xs leading-relaxed text-sandstone-muted text-left">
          
          <div className="p-4 rounded-2xl bg-canvas-raised border border-elemental-water/10 space-y-3">
            <h5 className="font-bold text-elemental-water flex items-center gap-2 text-sm">
              <Mail className="w-4 h-4 text-elemental-sky" /> DPDP Act 2023 Grievance Officer
            </h5>
            <div className="space-y-1 text-xs">
              <p><strong>Designated Grievance Officer:</strong> Kilani Sai Nikhil</p>
              <p><strong>Designation:</strong> Solo Creator & Data Protection Lead</p>
              <p><strong>Contact Email:</strong> <code className="font-mono text-elemental-water font-bold">developer.nikhil49023@gmail.com</code></p>
            </div>
          </div>

          <div className="space-y-3">
            <h5 className="font-bold text-sm text-elemental-water">Statutory Grievance Resolution SLA</h5>
            <p>
              In accordance with Rule 4 of the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021 and Section 13 of the Digital Personal Data Protection Act, 2023:
            </p>
            <ul className="space-y-2 list-disc list-inside">
              <li>All user inquiries and grievances are acknowledged within <strong>24 hours</strong>.</li>
              <li>Every grievance is fully investigated and resolved within a maximum of <strong>15 days</strong> from receipt.</li>
            </ul>
          </div>

          <div className="p-3.5 rounded-xl bg-canvas-card border border-elemental-water/10 flex items-center justify-between">
            <span className="font-mono text-[11px] text-elemental-water">GitHub Issue Tracker</span>
            <a 
              href="https://github.com/nikhil49023/VITT/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-elemental-sky flex items-center gap-1 hover:underline"
            >
              Open Issue <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      )}

    </div>
  );
}
