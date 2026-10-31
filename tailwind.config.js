/** @type {import('tailwindcss').Config} */
export default {
  content: {
    relative: true,
    files: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}"
    ]
  },
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        ink: "#0e0e10",
        coal: "#17171a",
        brand: "#d92b38",
        "brand-soft": "#f2555f"
      },
      fontFamily: {
        display: ["Oswald", "Impact", "sans-serif"],
        sans: ["Poppins", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: [],
}
