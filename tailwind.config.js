/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",    
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'neoery-gold':"#FFD700",
        'neoery-black': '#000000',
        'neoery-blue': '#0073E6',
        'neoery-green': '#00A86B',
        'neoery-orange': '#FF6B35'
      },
      fontFamily:{
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      animation: {
        marquee: "marquee 20s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
}

