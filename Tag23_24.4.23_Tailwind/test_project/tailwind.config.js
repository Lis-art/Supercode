module.exports = {
    content: [
      './pages//*.{js,ts,jsx,tsx}',
      './components//*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        keyframes: {
          wave: {
            '0%': { transform: 'translateY(-2rem)' },
            '100%': { transform: 'translateY(2rem)' },
          },
        },
        animation: {
            schweben: 'wave 3s linear infinite',
        }
      },
    },
    plugins: [],
  }