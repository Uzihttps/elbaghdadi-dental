
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'full-black': '#000000',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(to right, var(--gold-gradient-from), var(--gold-gradient-to))',
        'gold-pulse': 'radial-gradient(circle, rgba(243,190,78,0.3) 0%, transparent 70%)'
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        gold: {
          '50': '#fefbf3',
          '100': '#fef6e3',
          '200': '#fbe8bb',
          '300': '#f9d68e',
          '400': '#f3be4b',
          '500': '#e4aa28',
          '600': '#cb8a18',
          '700': '#a96615',
          '800': '#8a5018',
          '900': '#74421a',
        },
        gray: {
          '300': '#d1d5db',
          '400': '#9ca3af',
          '500': '#6b7280',
          '600': '#4b5563',
          '700': '#374151',
          '800': '#1f2937',
          '900': '#111827',
        },
        charcoal: {
          '800': '#1a1a1a',
          '900': '#0d0d0d'
        }
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      keyframes: {
        floating: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulse: {
          '0%, 100%': { opacity: 0.6 },
          '50%': { opacity: 1 },
        },
        shimmer: {
          '0%': { backgroundPosition: '-100% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      },
      animation: {
        floating: 'floating 6s ease-in-out infinite',
        pulse: 'pulse 3s ease-in-out infinite',
        shimmer: 'shimmer 3s infinite',
        wiggle: 'wiggle 2s ease-in-out infinite',
        'slow-spin': 'spin 8s linear infinite'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
