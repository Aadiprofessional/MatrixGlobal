/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        matrix: {
          blue: '#0066FF',
          purple: '#7C3AED',
          pink: '#EC4899',
          cyan: '#06B6D4',
          dark: '#0F0F23',
          darker: '#08081A',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'matrix-rain': 'matrix-rain 20s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(6, 182, 212, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(6, 182, 212, 0.8)' },
        },
        'matrix-rain': {
          '0%': { transform: 'translateY(-100vh)' },
          '100%': { transform: 'translateY(100vh)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'matrix-gradient': 'linear-gradient(135deg, #0066FF 0%, #7C3AED 25%, #EC4899 50%, #06B6D4 75%, #0066FF 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      fontFamily: {
        'matrix': ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
} 