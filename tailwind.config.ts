import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        darkTheme: {
          primary: "#f7ca7e",

          secondary: "#adedf4",

          accent: "#fca494",

          neutral: "#16191d",

          "base-100": "#343f55",

          info: "#567fd2",

          success: "#0c6e64",

          warning: "#efc867",

          error: "#e75062",

          // body: {
          //   "background-color": "#343f55",
          // },
        },
        lightTheme: {
          primary: "#e110e5",

          secondary: "#086faf",

          accent: "#e281ad",

          neutral: "#2a2537",

          "base-100": "#e8eff2",

          info: "#4578de",

          success: "#40e2a4",

          warning: "#9b5e08",

          error: "#f45d8a",

          // body: {
          //   "background-color": "#e8eff2",
          // },
        },
      },
    ],
  },
};
export default config;
