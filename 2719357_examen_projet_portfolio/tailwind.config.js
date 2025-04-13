/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/app/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        fontFamily: {
          garamond: ['Garamond', 'serif'],
        },
        keyframes: {
            'fade-in-up': {
              '0%': {
                opacity: '0',
                transform: 'translateY(20px)',
              },
              '100%': {
                opacity: '1',
                transform: 'translateY(0)',
              },
            },
          },
          animation: {
            'fade-in-up': 'fade-in-up 0.8s ease-out',
        },
      },
    },
    plugins: [],
  };
  