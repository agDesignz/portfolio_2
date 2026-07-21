/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    screens: {
      // tiny: "320px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      aspectRatio: {
        projectCard: "1/1",
      },
      gridTemplateRows: {
        projectCard: "3fr 1fr",
      },
      fontFamily: {
        display: ["fredericka_the_great", "sans-serif"],
        sans: ["lato", "sans-serif"],
        mono: ["source_code_pro", "monospace"],
      },
      colors: {
        saffron: {
          DEFAULT: "#f0c761",
          50: "#fdf7e8",
          100: "#fbefd0",
          200: "#f6dea2",
          300: "#f2ce73",
          400: "#eebe44",
          500: "#e9ad16",
          600: "#bb8b11",
          700: "#8c680d",
          800: "#5d4509",
          900: "#2f2304",
          950: "#211803",
        },

        green: {
          DEFAULT: "#3E8914",
          50: "#f0fce9",
          100: "#e0f9d2",
          200: "#c2f2a6",
          300: "#a3ec79",
          400: "#85e64c",
          500: "#66df20",
          600: "#52b319",
          700: "#3d8613",
          800: "#29590d",
          900: "#142d06",
          950: "#0e1f04",
        },
        orange: {
          DEFAULT: "#F26419",
          50: "#feefe7",
          100: "#fcdfcf",
          200: "#f9be9f",
          300: "#f79e6e",
          400: "#f47e3e",
          500: "#f15d0e",
          600: "#c14b0b",
          700: "#913808",
          800: "#602506",
          900: "#301303",
          950: "#220d02",
        },
        ocean: {
          DEFAULT: "#3890bc",
          50: "#ebf5f9",
          100: "#d8eaf3",
          200: "#b0d5e8",
          300: "#89c0dc",
          400: "#62abd0",
          500: "#3b96c4",
          600: "#2f789d",
          700: "#235a76",
          800: "#173c4f",
          900: "#0c1e27",
          950: "#08151b",
        },
        navy: {
          DEFAULT: "#083D77",
          50: "#e7f2fd",
          100: "#cfe5fc",
          200: "#a0cbf8",
          300: "#70b0f5",
          400: "#4096f2",
          500: "#117cee",
          600: "#0d63bf",
          700: "#0a4a8f",
          800: "#07325f",
          900: "#031930",
          950: "#021121",
        },
      },
    },
  },
  plugins: [],
};
