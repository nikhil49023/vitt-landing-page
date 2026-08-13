/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#FAF8F5', // Warm Sandstone Ivory Paper
          raised: '#F3EFEA',  // Soft Sandstone Card Surface
          card: '#FFFFFF',    // Clean Pure Card
          hover: '#EBF1ED',   // Subtle Elemental Hover
        },
        elemental: {
          earth: '#8C6D53',   // Warm Muted Clay / Earth
          water: '#0F292F',   // Deep Oceanic Teal / Primary Structure
          waterSoft: '#133840',
          fire: '#C2410C',    // Terracotta Fire / Alert
          fireSoft: 'rgba(194, 65, 12, 0.08)',
          wind: '#D4E2D7',    // Muted Sage Wind / Subtle Pills
          windSoft: 'rgba(212, 226, 215, 0.4)',
          sky: '#0284C7',     // Celestial Sky Blue / Accent
          skySoft: 'rgba(2, 132, 199, 0.08)',
        },
        sandstone: {
          dark: '#0F292F',
          muted: '#526E75',
          faint: '#889F9E',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Lora"', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
