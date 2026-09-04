import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#0F2A1F",
          dark: "#0A1F16",
          mid: "#163528",
          light: "#1E4634",
        },
        brand: {
          DEFAULT: "#32AA27",
          hover: "#2A9121",
          soft: "#E8F7E6",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 40px -12px rgba(15, 42, 31, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
