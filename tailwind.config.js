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
          DEFAULT: '#FAF7F2', // Warm Sandstone Alabaster
          raised: '#F4ECE1',  // Soft Parchment Surface
          card: '#FFFFFF',    // Clean Pure Card
          subtle: '#EDE4D6',  // Subtle Warm Border
          hover: '#EAE1D2',   // Warm Hover
          dark: '#13281E',    // Deep Sovereign Forest
          darkSurface: '#0E1F17',
        },
        earth: {
          forest: '#183A2B',   // Sovereign Deep Forest Green
          forestSoft: 'rgba(24, 58, 43, 0.08)',
          terracotta: '#9E4D34', // Warm Terracotta Clay
          terracottaSoft: 'rgba(158, 77, 52, 0.10)',
          sage: '#4A7A58',     // Vedic Sage Green
          sageSoft: 'rgba(74, 122, 88, 0.12)',
          ochre: '#B68637',    // Heritage Ochre Amber / Gold
          ochreSoft: 'rgba(182, 134, 55, 0.12)',
          clay: '#6B5B52',     // Muted Clay
          bark: '#423730',     // Deep Bark
          charcoal: '#1A2420', // Ultra-dark Charcoal Forest
        },
        elemental: {
          earth: '#9E4D34',
          water: '#183A2B',   // Mapped to Deep Forest
          waterSoft: '#1F4736',
          fire: '#9E4D34',    // Terracotta
          fireSoft: 'rgba(158, 77, 52, 0.10)',
          wind: '#E2ECE5',    // Sage Wash
          windSoft: 'rgba(74, 122, 88, 0.10)',
          sky: '#3F7057',     // Sovereign Forest Accent
          skySoft: 'rgba(74, 122, 88, 0.10)',
        },
        sandstone: {
          dark: '#183A2B',
          muted: '#4A5B53',
          faint: '#7A8C83',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Lora"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
