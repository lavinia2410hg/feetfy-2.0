import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'sora': ['sora', 'sans-serif'],
    },
    extend: {
      keyframes: {
        moveup1: {
          '0%': { transform: 'translateY(50%) rotate(-50deg)' },
          '100%': { transform: 'translateY(calc(-100vh - 100%)) rotate(20deg)' },
        },
        moveup: {
          '0%': { transform: 'translateY(100%) rotate(-50deg)' },
          '100%': { transform: 'translateY(calc(-150vh - 100%)) rotate(20deg)' },
        },
        scaleobject: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)' },
        }
      },
      animation: {
        'spin-slow1': 'moveup 6s linear infinite',
        'spin-slow2': 'moveup 9.5s linear infinite',
        'spin-slow3': 'moveup 7s linear infinite',
        'spin-slow4': 'moveup 3s linear infinite',
        'spin-slow5': 'moveup 8s linear infinite',
        'spin-slow6': 'moveup 4.5s linear infinite',
        'spin-slow7': 'moveup 5.5s linear infinite',
        'spin-slow8': 'moveup 8.5s linear infinite',
        'scale':'scaleobject 1.5s linear infinite'
      },
      
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        "red2":"#d62400",
        "red3":"#e3a18f"
      }
    },
  },
  plugins: [],
};
export default config;
