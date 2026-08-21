import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputDir = path.join(__dirname, '../public/mockups');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;600;700&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      background-color: #EDE4D6;
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
      color: #1A2420;
      -webkit-font-smoothing: antialiased;
      padding: 40px;
      display: flex;
      flex-direction: column;
      gap: 30px;
    }
    .mono { font-family: 'JetBrains Mono', monospace; }
    .serif { font-family: 'Lora', Georgia, serif; }

    /* Phone Frame Mockup */
    #hero-phone {
      width: 360px;
      height: 740px;
      background: #FAF7F2;
      border-radius: 36px;
      padding: 16px 18px 18px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      overflow: hidden;
      box-shadow: 0 25px 60px -15px rgba(24, 58, 43, 0.25);
      border: 1.5px solid #EDE4D6;
    }

    /* Status Bar */
    .status-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 11px;
      color: #6C7A72;
      font-family: 'JetBrains Mono', monospace;
      padding-top: 4px;
      margin-bottom: 12px;
    }

    /* App Header */
    .app-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
    }
    .logo-row {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .logo-icon {
      width: 28px;
      height: 28px;
      border-radius: 8px;
      background: #183A2B;
      color: #FAF7F2;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 800;
      font-size: 14px;
      font-family: 'Lora', serif;
    }
    .logo-text {
      font-family: 'Lora', serif;
      font-size: 19px;
      font-weight: 700;
      color: #183A2B;
    }
    .vault-tag {
      font-size: 10px;
      font-family: 'JetBrains Mono', monospace;
      background: rgba(74, 122, 88, 0.15);
      color: #4A7A58;
      padding: 3px 8px;
      border-radius: 12px;
      font-weight: 600;
      border: 1px solid rgba(74, 122, 88, 0.3);
    }

    /* Net Worth Card */
    .balance-card {
      background: linear-gradient(145deg, #183A2B, #0E2218);
      color: #FAF7F2;
      padding: 16px;
      border-radius: 20px;
      margin-bottom: 12px;
      box-shadow: 0 10px 25px -5px rgba(24, 58, 43, 0.3);
      border: 1px solid rgba(94, 163, 116, 0.3);
    }
    .balance-label {
      font-size: 10.5px;
      color: rgba(250, 247, 242, 0.7);
      font-family: 'JetBrains Mono', monospace;
      display: flex;
      justify-content: space-between;
    }
    .balance-amount {
      font-family: 'JetBrains Mono', monospace;
      font-size: 24px;
      font-weight: 800;
      letter-spacing: -0.5px;
      margin: 4px 0 8px;
    }
    .balance-split {
      display: flex;
      justify-content: space-between;
      padding-top: 8px;
      border-top: 1px solid rgba(250, 247, 242, 0.15);
      font-size: 10.5px;
    }
    .surplus-tag {
      color: #5EA374;
      font-weight: 700;
      font-family: 'JetBrains Mono', monospace;
    }

    /* Quick Action Buttons */
    .actions-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 6px;
      margin-bottom: 12px;
    }
    .action-btn {
      background: #F4ECE1;
      border: 1px solid #EDE4D6;
      padding: 7px 4px;
      border-radius: 12px;
      text-align: center;
      font-size: 9.5px;
      font-weight: 600;
      color: #183A2B;
    }
    .action-btn-icon {
      font-size: 13px;
      margin-bottom: 2px;
    }

    /* Envelope Budgets Section */
    .section-title {
      font-size: 11.5px;
      font-weight: 700;
      color: #183A2B;
      margin-bottom: 6px;
      font-family: 'Lora', serif;
      display: flex;
      justify-content: space-between;
    }
    .budget-item {
      background: #FFFFFF;
      border: 1px solid #EDE4D6;
      padding: 9px 12px;
      border-radius: 14px;
      margin-bottom: 6px;
    }
    .budget-header {
      display: flex;
      justify-content: space-between;
      font-size: 10.5px;
      font-weight: 700;
      color: #183A2B;
      margin-bottom: 4px;
    }
    .progress-track {
      width: 100%;
      height: 5px;
      background: #F4ECE1;
      border-radius: 5px;
      overflow: hidden;
      margin-bottom: 3px;
    }
    .progress-bar-green { height: 100%; width: 64%; background: #4A7A58; border-radius: 5px; }
    .progress-bar-amber { height: 100%; width: 81%; background: #B68637; border-radius: 5px; }
    .budget-footer {
      display: flex;
      justify-content: space-between;
      font-size: 9px;
      color: #6C7A72;
      font-family: 'JetBrains Mono', monospace;
    }

    /* Recent Transactions */
    .tx-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #FFFFFF;
      border: 1px solid #EDE4D6;
      padding: 8px 12px;
      border-radius: 14px;
      margin-bottom: 5px;
    }
    .tx-left {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .tx-icon-gpay {
      width: 26px;
      height: 26px;
      border-radius: 8px;
      background: rgba(74, 122, 88, 0.15);
      color: #4A7A58;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 11px;
    }
    .tx-icon-phonepe {
      width: 26px;
      height: 26px;
      border-radius: 8px;
      background: rgba(182, 134, 55, 0.15);
      color: #B68637;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 11px;
    }
    .tx-title { font-size: 10.5px; font-weight: 700; color: #183A2B; }
    .tx-sub { font-size: 8.5px; color: #6C7A72; font-family: 'JetBrains Mono', monospace; }
    .tx-debit { font-family: 'JetBrains Mono', monospace; font-size: 11.5px; font-weight: 700; color: #9E4D34; }
    .tx-credit { font-family: 'JetBrains Mono', monospace; font-size: 11.5px; font-weight: 700; color: #4A7A58; }

    /* Bottom Navigation Bar */
    .bottom-nav {
      background: #FFFFFF;
      border: 1px solid #EDE4D6;
      border-radius: 18px;
      padding: 7px 12px;
      display: flex;
      justify-content: space-between;
      font-size: 9.5px;
      color: #6C7A72;
      font-weight: 600;
    }
    .nav-active {
      color: #183A2B;
      font-weight: 700;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .nav-active-dot {
      width: 4px;
      height: 4px;
      background: #183A2B;
      border-radius: 50%;
      margin-top: 2px;
    }

    /* Common Card Mockups (380x160 px) */
    .card-mockup {
      width: 380px;
      height: 160px;
      background: #FAF7F2;
      border: 1.5px solid #EDE4D6;
      border-radius: 20px;
      padding: 14px 16px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      overflow: hidden;
      box-shadow: 0 4px 16px rgba(24, 58, 43, 0.08);
    }
    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 11px;
      font-weight: 700;
      color: #183A2B;
    }
    .pill {
      font-size: 9px;
      font-family: 'JetBrains Mono', monospace;
      padding: 2px 7px;
      border-radius: 8px;
      font-weight: 600;
    }
    .pill-sage { background: rgba(74, 122, 88, 0.15); color: #4A7A58; border: 1px solid rgba(74, 122, 88, 0.3); }
    .pill-terracotta { background: rgba(158, 77, 52, 0.15); color: #9E4D34; border: 1px solid rgba(158, 77, 52, 0.3); }
    .pill-ochre { background: rgba(182, 134, 55, 0.15); color: #B68637; border: 1px solid rgba(182, 134, 55, 0.3); }
    .pill-forest { background: rgba(24, 58, 43, 0.15); color: #183A2B; border: 1px solid rgba(24, 58, 43, 0.3); }
  </style>
</head>
<body>

  <!-- Mockup 1: Hero Phone Full UI Screen -->
  <div id="hero-phone">
    <div>
      <div class="status-bar">
        <span>9:41 AM</span>
        <span>5G • 100% 🔋</span>
      </div>

      <div class="app-header">
        <div class="logo-row">
          <div class="logo-icon">V</div>
          <span class="logo-text">VITT</span>
        </div>
        <div class="vault-tag">🔒 SQLCipher AES-256</div>
      </div>

      <div class="balance-card">
        <div class="balance-label">
          <span>TOTAL CASHFLOW</span>
          <span class="surplus-tag">+₹54,150 Surplus</span>
        </div>
        <div class="balance-amount">₹4,82,450</div>
        <div class="balance-split">
          <span>Income: <strong style="color: #5EA374;">₹78,500</strong></span>
          <span>Expenses: <strong style="color: #E08568;">₹24,350</strong></span>
          <span>Runway: <strong>180 Days</strong></span>
        </div>
      </div>

      <div class="actions-grid">
        <div class="action-btn"><div class="action-btn-icon">⚡</div>Auto UPI</div>
        <div class="action-btn"><div class="action-btn-icon">📊</div>Budgets</div>
        <div class="action-btn"><div class="action-btn-icon">👥</div>Khata Split</div>
        <div class="action-btn"><div class="action-btn-icon">🤖</div>AI Coach</div>
      </div>

      <div class="section-title">
        <span>Active Envelope Budgets</span>
        <span style="font-size: 9.5px; color: #4A7A58; font-family: 'JetBrains Mono';">August 2026</span>
      </div>

      <div class="budget-item">
        <div class="budget-header">
          <span>Dining & Entertainment</span>
          <span class="mono" style="color: #4A7A58;">₹6,450 / ₹10,000</span>
        </div>
        <div class="progress-track">
          <div class="progress-bar-green"></div>
        </div>
        <div class="budget-footer">
          <span>🟢 Safe Spending Pace</span>
          <span>₹3,550 Remaining</span>
        </div>
      </div>

      <div class="section-title" style="margin-top: 8px;">
        <span>Recent Auto-Logged UPI</span>
        <span style="font-size: 8.5px; color: #6C7A72; font-family: 'JetBrains Mono';">0 SMS Read</span>
      </div>

      <div class="tx-item">
        <div class="tx-left">
          <div class="tx-icon-gpay">G</div>
          <div>
            <div class="tx-title">Chai Point Indiranagar</div>
            <div class="tx-sub">Dining • GPay Alert • 10:24 AM</div>
          </div>
        </div>
        <div class="tx-debit">-₹150</div>
      </div>

      <div class="tx-item">
        <div class="tx-left">
          <div class="tx-icon-phonepe">P</div>
          <div>
            <div class="tx-title">Zepto Quick Delivery</div>
            <div class="tx-sub">Groceries • PhonePe • Yesterday</div>
          </div>
        </div>
        <div class="tx-debit">-₹340</div>
      </div>
    </div>

    <div class="bottom-nav">
      <div class="nav-active">
        <span>Home</span>
        <div class="nav-active-dot"></div>
      </div>
      <div>Analytics</div>
      <div>Split</div>
      <div>Vault</div>
      <div>AI Coach</div>
    </div>
  </div>

  <!-- Mockup 2: UPI Detection Card -->
  <div id="feature-upi" class="card-mockup">
    <div class="card-header">
      <div style="display: flex; align-items: center; gap: 6px;">
        <span style="width: 8px; height: 8px; border-radius: 50%; background: #4A7A58; display: inline-block;"></span>
        <span style="font-family: 'Lora', serif; font-size: 13px;">Live UPI Detection</span>
      </div>
      <span class="pill pill-sage">0 SMS READ</span>
    </div>
    <div style="background: #FFFFFF; border: 1px solid #EDE4D6; border-radius: 12px; padding: 8px 12px; display: flex; justify-content: space-between; align-items: center;">
      <div style="display: flex; align-items: center; gap: 8px;">
        <div class="tx-icon-gpay">G</div>
        <div>
          <div style="font-size: 11px; font-weight: 700; color: #183A2B;">Paid ₹150 to Chai Point</div>
          <div style="font-size: 9px; color: #6C7A72; font-family: 'JetBrains Mono';">GPay Notification • Auto Logged</div>
        </div>
      </div>
      <span style="font-family: 'JetBrains Mono'; font-size: 12px; font-weight: 800; color: #9E4D34;">-₹150</span>
    </div>
    <div style="display: flex; justify-content: space-between; font-size: 9.5px; font-family: 'JetBrains Mono'; color: #4A7A58; font-weight: 700;">
      <span>✓ Auto Category: Dining & Food</span>
      <span>Sub-5ms Parse</span>
    </div>
  </div>

  <!-- Mockup 3: On-Device AI Chat Card -->
  <div id="feature-ai" class="card-mockup">
    <div class="card-header">
      <span style="font-family: 'Lora', serif; font-size: 13px;">LiteRT-LM Offline AI Coach</span>
      <span class="pill pill-ochre">Gemma 4 E2B</span>
    </div>
    <div style="background: #F4ECE1; border-radius: 10px; padding: 6px 10px; font-size: 10.5px; color: #183A2B; align-self: flex-end; max-width: 85%;">
      "How much did I spend on dining out this week?"
    </div>
    <div style="background: #FFFFFF; border: 1px solid #EDE4D6; border-radius: 10px; padding: 7px 10px; font-size: 10px; color: #183A2B; line-height: 1.4;">
      "You spent ₹2,840 across 6 orders. You are 14% under your weekly envelope budget! 🟢"
    </div>
    <div style="display: flex; justify-content: space-between; font-size: 9px; font-family: 'JetBrains Mono'; color: #6C7A72;">
      <span>⚡ 6ms SIMD Latency</span>
      <span style="color: #4A7A58; font-weight: 700;">🔒 Cloud Egress: 0 Bytes</span>
    </div>
  </div>

  <!-- Mockup 4: Encrypted Vault Card -->
  <div id="feature-vault" class="card-mockup">
    <div class="card-header">
      <span style="font-family: 'Lora', serif; font-size: 13px;">Encrypted Document Vault</span>
      <span class="pill pill-forest">AES-256</span>
    </div>
    <div style="background: #FFFFFF; border: 1px solid #EDE4D6; border-radius: 12px; padding: 8px 12px; display: flex; justify-content: space-between; align-items: center;">
      <div>
        <div style="font-size: 11px; font-weight: 700; color: #183A2B;">📄 Apple Store Invoice.pdf</div>
        <div style="font-size: 9px; color: #6C7A72; font-family: 'JetBrains Mono';">Hardware Encrypted • On-Device OCR</div>
      </div>
      <span class="pill pill-sage">Verified</span>
    </div>
    <div style="display: flex; justify-content: space-between; font-size: 9.5px; font-family: 'JetBrains Mono'; color: #6C7A72;">
      <span>🔒 Keystore HSM Guarded</span>
      <span>Zero Cloud Backup</span>
    </div>
  </div>

  <!-- Mockup 5: Envelope Budgets Card -->
  <div id="feature-budgets" class="card-mockup">
    <div class="card-header">
      <span style="font-family: 'Lora', serif; font-size: 13px;">Envelope Smart Budgets</span>
      <span class="pill pill-sage">Safe Pace</span>
    </div>
    <div style="background: #FFFFFF; border: 1px solid #EDE4D6; border-radius: 12px; padding: 8px 12px;">
      <div style="display: flex; justify-content: space-between; font-size: 11px; font-weight: 700; color: #183A2B; margin-bottom: 4px;">
        <span>Dining & Entertainment</span>
        <span class="mono" style="color: #4A7A58;">₹6,450 / ₹10,000</span>
      </div>
      <div class="progress-track">
        <div class="progress-bar-green"></div>
      </div>
    </div>
    <div style="display: flex; justify-content: space-between; font-size: 9.5px; font-family: 'JetBrains Mono'; color: #6C7A72;">
      <span>🟢 Safe Spending Pace</span>
      <span>₹3,550 Remaining</span>
    </div>
  </div>

  <!-- Mockup 6: Goals Card -->
  <div id="feature-goals" class="card-mockup">
    <div class="card-header">
      <span style="font-family: 'Lora', serif; font-size: 13px;">Goal Savings Pace Matcher</span>
      <span class="pill pill-ochre">80% Achieved</span>
    </div>
    <div style="background: #FFFFFF; border: 1px solid #EDE4D6; border-radius: 12px; padding: 8px 12px;">
      <div style="display: flex; justify-content: space-between; font-size: 11px; font-weight: 700; color: #183A2B; margin-bottom: 4px;">
        <span>Emergency Fund Target</span>
        <span class="mono" style="color: #4A7A58;">₹1,20,000 / ₹1,50,000</span>
      </div>
      <div class="progress-track">
        <div style="height: 100%; width: 80%; background: #4A7A58; border-radius: 5px;"></div>
      </div>
    </div>
    <div style="display: flex; justify-content: space-between; font-size: 9.5px; font-family: 'JetBrains Mono'; color: #6C7A72;">
      <span>Surplus Pace: ₹6,200/mo</span>
      <span>Target: Oct 2026</span>
    </div>
  </div>

  <!-- Mockup 7: SIP Calculator Card -->
  <div id="feature-sip" class="card-mockup">
    <div class="card-header">
      <span style="font-family: 'Lora', serif; font-size: 13px;">SIP Compounding Engine</span>
      <span class="pill pill-ochre">+118% Return</span>
    </div>
    <div style="background: #FFFFFF; border: 1px solid #EDE4D6; border-radius: 12px; padding: 8px 12px; display: flex; justify-content: space-between; align-items: center;">
      <div>
        <div style="font-size: 9px; color: #6C7A72; font-family: 'JetBrains Mono';">₹10,000 / mo @ 14% (10 Yrs)</div>
        <div style="font-size: 16px; font-weight: 800; font-family: 'JetBrains Mono'; color: #183A2B;">₹26,20,915</div>
      </div>
      <div style="text-align: right; font-size: 9.5px; font-family: 'JetBrains Mono'; color: #4A7A58; font-weight: 700;">
        <div>Invested: ₹12.0L</div>
        <div>Gain: +₹14.2L</div>
      </div>
    </div>
    <div style="display: flex; justify-content: space-between; font-size: 9.5px; font-family: 'JetBrains Mono'; color: #6C7A72;">
      <span>Compounding Formula</span>
      <span>2.18x Multiplier</span>
    </div>
  </div>

  <!-- Mockup 8: Cashflow Runway Card -->
  <div id="feature-cashflow" class="card-mockup">
    <div class="card-header">
      <span style="font-family: 'Lora', serif; font-size: 13px;">Cashflow Safety Runway</span>
      <span class="pill pill-forest">Score: 92/100</span>
    </div>
    <div style="background: #FFFFFF; border: 1px solid #EDE4D6; border-radius: 12px; padding: 8px 12px; display: flex; justify-content: space-between; align-items: center;">
      <div>
        <div style="font-size: 9px; color: #6C7A72; font-family: 'JetBrains Mono';">Emergency Survival Buffer</div>
        <div style="font-size: 15px; font-weight: 800; font-family: 'Plus Jakarta Sans'; color: #183A2B;">180 Days (6 Months)</div>
      </div>
      <div style="width: 36px; height: 36px; border-radius: 50%; border: 3px solid #4A7A58; display: flex; align-items: center; justify-content: center; font-family: 'JetBrains Mono'; font-weight: 800; font-size: 13px; color: #4A7A58;">
        92
      </div>
    </div>
    <div style="display: flex; justify-content: space-between; font-size: 9.5px; font-family: 'JetBrains Mono'; color: #6C7A72;">
      <span>Healthy Liquid Surplus</span>
      <span>Low Risk Zone</span>
    </div>
  </div>

  <!-- Mockup 9: Split & Khata Card -->
  <div id="feature-split" class="card-mockup">
    <div class="card-header">
      <span style="font-family: 'Lora', serif; font-size: 13px;">Split Bills & Khata</span>
      <span class="pill pill-terracotta">1-Tap Settle</span>
    </div>
    <div style="background: #FFFFFF; border: 1px solid #EDE4D6; border-radius: 12px; padding: 8px 12px; display: flex; justify-content: space-between; align-items: center;">
      <div>
        <div style="font-size: 11px; font-weight: 700; color: #183A2B;">Goa Trip Dinner (4 People)</div>
        <div style="font-size: 9px; color: #6C7A72; font-family: 'JetBrains Mono';">Rahul owes you ₹850</div>
      </div>
      <div style="font-size: 10px; font-family: 'JetBrains Mono'; font-weight: 700; background: #4A7A58; color: #FFFFFF; padding: 4px 8px; border-radius: 8px;">
        UPI Settle
      </div>
    </div>
    <div style="display: flex; justify-content: space-between; font-size: 9.5px; font-family: 'JetBrains Mono'; color: #6C7A72;">
      <span>💬 WhatsApp Deep-Linked</span>
      <span>Net Ledger Balance</span>
    </div>
  </div>

  <!-- Mockup 10: Security & Biometrics Card -->
  <div id="feature-security" class="card-mockup">
    <div class="card-header">
      <span style="font-family: 'Lora', serif; font-size: 13px;">Air-Gapped Sovereign Vault</span>
      <span class="pill pill-sage">Active</span>
    </div>
    <div style="background: #FFFFFF; border: 1px solid #EDE4D6; border-radius: 12px; padding: 8px 12px; display: flex; justify-content: space-between; align-items: center;">
      <div>
        <div style="font-size: 11px; font-weight: 700; color: #183A2B;">🛡️ Biometric Fingerprint Lock</div>
        <div style="font-size: 9px; color: #6C7A72; font-family: 'JetBrains Mono';">Android Keystore Hardware HSM</div>
      </div>
      <div style="font-size: 10px; font-family: 'JetBrains Mono'; font-weight: 700; color: #4A7A58;">
        Secured
      </div>
    </div>
    <div style="display: flex; justify-content: space-between; font-size: 9.5px; font-family: 'JetBrains Mono'; color: #6C7A72;">
      <span>0 Bytes Outbound Egress</span>
      <span>No Remote Accounts</span>
    </div>
  </div>

</body>
</html>
`;

async function generateMockups() {
  console.log('Launching Playwright Chromium headless...');
  const browser = await chromium.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage({
    viewport: { width: 1400, height: 2600 },
    deviceScaleFactor: 2 // 2x Retina crisp rendering
  });

  await page.setContent(htmlContent, { waitUntil: 'networkidle' });

  // Wait for Google Fonts to load
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(1000);

  const mockups = [
    { id: '#hero-phone', filename: 'hero-phone.png' },
    { id: '#feature-upi', filename: 'feature-upi.png' },
    { id: '#feature-ai', filename: 'feature-ai.png' },
    { id: '#feature-vault', filename: 'feature-vault.png' },
    { id: '#feature-budgets', filename: 'feature-budgets.png' },
    { id: '#feature-goals', filename: 'feature-goals.png' },
    { id: '#feature-sip', filename: 'feature-sip.png' },
    { id: '#feature-cashflow', filename: 'feature-cashflow.png' },
    { id: '#feature-split', filename: 'feature-split.png' },
    { id: '#feature-security', filename: 'feature-security.png' },
  ];

  for (const item of mockups) {
    const element = await page.$(item.id);
    if (element) {
      const targetPath = path.join(outputDir, item.filename);
      await element.screenshot({ path: targetPath, omitBackground: false });
      console.log(`✓ Saved ${item.filename} to ${targetPath}`);
    } else {
      console.error(`Element not found: ${item.id}`);
    }
  }

  await browser.close();
  console.log('All mockups generated successfully via Playwright!');
}

generateMockups().catch(err => {
  console.error('Error generating mockups:', err);
  process.exit(1);
});
