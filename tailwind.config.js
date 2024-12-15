/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",    
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'neoery-black': '#000000',
        'neoery-blue': '#0073E6',
        'neoery-green': '#00A86B',
        'neoery-orange': '#FF6B35'
      },
      fontFamily:{
        'sans':['Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}

