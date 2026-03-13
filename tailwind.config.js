/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        demon: {
          black: '#0a0a0a',
          charcoal: '#1a1a1a',
          red: '#b91c1c',
          flame: '#ef4444',
          olive: '#3f6212',
        }
      },
      animation: {
        'breathing': 'breathing 3s ease-in-out infinite',
        'slash': 'slash 0.5s ease-out forwards',
      },
      keyframes: {
        breathing: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.05)', opacity: '1' },
        },
        slash: {
          '0%': { clipPath: 'inset(0 100% 0 0)' },
          '100%': { clipPath: 'inset(0 0 0 0)' },
        }
      }
    },
  },
  plugins: [],
}
