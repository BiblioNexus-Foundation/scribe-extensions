/** @type {import('tailwindcss').Config} */

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },

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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
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
