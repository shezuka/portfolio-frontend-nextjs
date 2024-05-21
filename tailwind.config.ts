import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        background: "#121212", // Dark gray almost black
        primary: "#1e40af", // A vibrant blue
        secondary: "#4b5563", // A cool, dark gray
        accent: "#60a5fa", // An electric blue
        text: "#e5e7eb", // A light gray for text
      },
      animation: {
        spin: "spin 1s linear infinite",
        "gradient-x": "gradient-x 15s ease infinite",
        pulse: "pulse 1.5s ease-in-out infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
        pulse: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
    },
    customForms: (theme: any) => ({
      default: {
        input: {
          "&:focus": {
            boxShadow: undefined,
            borderColor: theme("colors.primary"),
          },
        },
        checkbox: {
          "&:focus": {
            boxShadow: undefined,
            borderColor: theme("colors.primary"),
          },
        },
      },
    }),
  },
  plugins: [],
};
export default config;
