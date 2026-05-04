/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Helvetica Neue', 'Arial', 'sans-serif'],
        luxury: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        'dark-bg': '#0d0d0d',
        'dark-card': '#1a1a1a',
        'cyan-glow': '#d4a574',
        'purple-glow': '#d4a574',
        'electric-blue': '#d4a574',
        'vantedge-cyan': '#d4a574',
        'vantedge-purple': '#d4a574',
        'vantedge-dark': '#1a1a1a',
        'primary-red': '#d4a574',
        'accent-white': '#f5f5f5',
      },
      animation: {
        'glitch': 'glitch 0.4s ease-in-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
