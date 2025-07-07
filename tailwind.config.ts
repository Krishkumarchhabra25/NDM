// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        subheading: ['Lora', 'serif'],
        author: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
