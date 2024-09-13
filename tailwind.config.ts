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
      boxShadow:{
        "3xl": "1px 5px 5px black",
        "3fxl": "10px 5px 20px 5px black",
      },
      colors:{
         'golden':'#ffc400', 'semigolden':'#a69c0c', 'lightgreen': '#52ff00'
      }
    },
  },
  plugins: [],
};
export default config;
