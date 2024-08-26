import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        navy: {
          dark: "#020c1b",
          base: "#0a192f",
          light: "#112240",
          lightest: "#233554",
          shadow: "rgba(2, 12, 27, 0.7)",
        },

        slate: {
          dark: "#495670",
          slate: "#8892b0",
          light: "#a8b2d1",
          lightest: "#ccd6f6",
        },

        custom: {
          white: "#e6f1ff",
          green: {
            base: "#64ffda",
            asdf: "#64ffda1a",
          },
          pink: "#f57dff",
          blue: "#57cbff",
        },

      },
      boxShadow: {
        "btn-shadow": '3px 3px 0 0 #64ffda',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config