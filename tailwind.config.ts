import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#A7F3D0",
        secondary: "#FDE047",
        accent: "#FBCFE8",
        background: "#FEFCE8",
      },
      boxShadow: {
        "neo-shadow": "4px 4px 0px 0px rgba(0,0,0,1)",
        "neo-shadow-hover": "2px 2px 0px 0px rgba(0,0,0,1)",
      },
    },
  },
  plugins: [],
};

export default config;
