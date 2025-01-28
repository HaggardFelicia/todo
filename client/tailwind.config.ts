import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#02060e",
        secondary: "#111827",
        tertiary: "#5eead4",
        white: "#e5e7eb",
      },
      boxShadow: {
        'inset-primary': 'inset 0px 0px 15px 10px rgb(2,6,14)',
      }
    },
    fontFamily: {
      urbanist: ["Urbanist", "sans-serif"],
    },
  },
  plugins: [],
};
export default config;

// 700: "#02040b",
// 800: "#010307",
// 900: "#010104"
