
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
        'full-black': '#000000'
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(to right, var(--gold-gradient-from), var(--gold-gradient-to))'
      },
      colors: {
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
        }
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
