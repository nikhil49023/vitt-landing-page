---
name: prompt-library
description: >-
  Curated, battle-tested prompt library for Antigravity. Provides structured XML templates
  for background video components, minimalist vector logo design, conversion copywriting,
  on-device AI system prompts, and high-performance UI engineering.
---

# 🏛️ Antigravity Master Prompt Library

This skill provides production-grade, battle-tested prompt templates designed with Claude/Anthropic XML structural standards and tailored for web engineering, branding, vector design, and AI orchestration.

---

## 🎬 1. Background Video Integration Prompts

### Template: High-Performance Ambient Video Hero
```xml
<role>Senior Creative Frontend Engineer specializing in high-performance web animations and video backgrounds.</role>

<context>
Target: Web landing page (React + Tailwind CSS / Vanilla CSS).
Goal: Add an ambient, cinematic background video loop without degrading performance or mobile battery.
</context>

<task>
Build a responsive, lightweight `<BackgroundVideo />` component.
</task>

<requirements>
1. Media Attributes:
   - `autoPlay`, `loop`, `muted`, `playsInline`, `preload="auto"`
   - Poster image fallback for low-power mode and slow connections.
2. Performance & Layout:
   - Absolute positioning (`inset-0`) with `object-cover w-full h-full`.
   - Subtle dark/light gradient overlay (`backdrop-blur-[1px]` or `bg-canvas/40`) to maintain 100% text contrast.
   - Non-blocking render; load video stream asynchronously.
   - Reduced motion accessibility check (`prefers-reduced-motion: reduce`).
3. Output:
   - Complete drop-in React/Tailwind component with error boundary handling.
</requirements>
```

---

## 🎨 2. Minimalist Vector Logo & Iconography Prompts

### Template: Geometric Monogram / Brandmark SVG
```xml
<role>Principal Brand Identity Designer and Master SVG Vector Artist.</role>

<context>
Product: Sovereign, local-first personal financial management application.
Brand Name: VITT
Core Values: Absolute privacy (vault/shield), automated speed (lightning/velocity), wealth growth (upward trajectory), Indian rupee lineage.
</context>

<task>
Design and write raw, standalone SVG code for a modern, minimalist vector logo.
</task>

<aesthetic_rules>
- Shape Language: Pure geometric precision, golden ratio circles/angles. Monogram "V" fused with a subtle vault facet and growth angle.
- Colors: Deep Water (`#0F292F`), Elemental Sky (`#0284C7`), Amber Accent (`#C2410C`), Porcelain Canvas (`#FAF8F5`).
- SVG Standards: `viewBox="0 0 100 100"`, responsive `vector-effect="non-scaling-stroke"`, clean path data with zero extraneous metadata.
- Avoid: Generic clip-art, cheesy clip-art rupee symbols, pixelated raster embeds.
</aesthetic_rules>
```

---

## 📢 3. Conversion Copywriting & Brand Positioning Prompts

### Template: Value Proposition & Hero Hierarchy Refiner
```xml
<role>World-Class Conversion Copywriter specializing in premium fintech and privacy-first software.</role>

<context>
Product: VITT — The Best Personal Financial Management Application.
Audience: Indian smartphone users (students, tech professionals, families) tired of ads and privacy-invasive SMS trackers.
Key Differentiators: 100% On-Device, Zero SMS permission, Zero cloud uploads, On-device AI advisor, Free forever.
</context>

<task>
Draft 3 variations of high-converting Hero headlines, subheadings, and 3-part proof value stacks.
</task>

<guidelines>
- Headline Formula: [Bold Ultimate Outcome] + [Unmatched Differentiator].
- Tone: Sovereign, authoritative, trustworthy, premium (Apple / Stripe caliber).
- Constraints: Eliminate empty buzzwords ("revolutionary", "synergy"). Focus on tangible utility ("auto-parse UPI in 0ms", "0 bytes leave your phone").
</guidelines>
```

---

## 🧠 4. On-Device AI System Prompt Engineering (LiteRT / Gemma / Qwen)

### Template: Financial Reasoning & Local ReAct Dispatcher
```xml
<system_prompt>
<role>
You are VITT's Sovereign On-Device Financial Advisor, running 100% locally on Android hardware via LiteRT-LM.
</role>

<data_context>
User's encrypted SQLite transaction ledger and envelope budget caps are provided as verified local context.
</data_context>

<rules>
1. Strict Data Localization: Never reference or attempt to call external cloud endpoints.
2. SEBI Compliance: Deliver educational analysis and cashflow forecasting. Do not provide speculative stock trading advice.
3. Mathematical Precision: For purchase feasibility simulations, calculate exact remaining balance and category velocity status (🟢 Green, 🟡 Yellow, 🔴 Red).
4. Tone: Concise, objective, empowering, and polite.
</rules>

<response_format>
- Max 3 sentences for direct queries.
- Include exact INR amounts formatted with ₹.
- Provide a 1-line actionable takeaway.
</response_format>
</system_prompt>
```

---

## ⚡ 5. Micro-Animations & Interactive Widgets Prompt

### Template: High-Converting Interactive Widget (Framer Motion / GSAP)
```xml
<role>Senior Creative Technologist & Frontend Interaction Specialist.</role>

<task>
Create an interactive compounding wealth calculator or budget impact simulator in React.
</task>

<requirements>
- Smooth, physics-based motion with Framer Motion or GSAP.
- Accessible sliders with real-time numeric value counters.
- Visual feedback: Dynamic progress bars that shift color based on threshold velocity.
- Full dark/light porcelain theme compatibility with zero layout shifts.
</requirements>
```
