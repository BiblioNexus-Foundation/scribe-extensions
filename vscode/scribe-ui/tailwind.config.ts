import type { Config } from "tailwindcss";

export const darkMode = "class";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors : {
        // zinc : {
        //   50: "#FAFAFA",
        //   100:"#E4E4E7",
        //   500 :"#71717A",
        //   700: "#3F3F46",
        //   900: "#18181B",
        //   950:"#09090B",
        //   800:"#27272A"
        // },
        // cyan: {
        //   300: "#67E8F9",
        //   500: "#06B6D4",
        //   700:"#0E7490",
        //   900:"#164E63",
        //   950:"#083344",
        // },
        emerald: {

        }
      },
      fontSize: {
      "custom":"8px",
      },
    },
   
  },
  plugins: [],
};
export default config;
