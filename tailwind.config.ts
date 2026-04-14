import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        "moxera-bg": "#050816",
        "moxera-bg-soft": "#0A1224",
        "moxera-surface": "#111827",
        "moxera-navy": "#1D2A57",
        "moxera-accent": "#2ED3C6",
        "moxera-highlight": "#66E6DA",
        "moxera-text-soft": "#B8C2D9",
        "moxera-text": "#F5F7FB"
      },
      boxShadow: {
        cinematic: "0 20px 60px rgba(10, 18, 36, 0.6)"
      },
      backgroundImage: {
        "moxera-radial": "radial-gradient(circle at 20% 20%, rgba(46, 211, 198, 0.2), transparent 45%)",
        "moxera-depth": "linear-gradient(145deg, rgba(10, 18, 36, 0.9), rgba(5, 8, 22, 1))"
      }
    }
  },
  plugins: []
};

export default config;
