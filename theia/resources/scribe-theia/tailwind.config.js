/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: "#FF5500",
        "primary-50": "#E4F2FF",
        secondary: "#151515",
        success: "#05C715",
        error: "#FF1500",
        validation: "#FFE5E5",
        light: "#E4F1FF",
        dark: "#333333",
      },
      fontSize: {
        custom: "8px",
        xxs: ".65rem",
      },
      height: {
        editor: "calc(-9rem + 100vh)",
        reference: "calc((-9.5rem + 100vh)/2)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: ["selector", '[class="vscode-dark"]'],
};
