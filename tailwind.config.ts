import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f4fbf8',
          100: '#dff9ee',
          200: '#c4f1db',
          300: '#91e0b9',
          400: '#59c98f',
          500: '#2ca86d',
          600: '#1f8a59',
          700: '#1e6d49',
          800: '#1f563d',
          900: '#1b4735',
        },
      },
      boxShadow: {
        soft: '0 20px 40px rgba(15, 23, 42, 0.12)',
      },
    },
  },
  plugins: [],
};

export default config;
