/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkpurple': "#451952",
        'maroon': "#662549",
        'orange': "#F39F5A"
      }

    }
  },
  plugins: [],
}

