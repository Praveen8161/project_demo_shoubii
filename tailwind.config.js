import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        headResponsive: "clamp(1em, 3.134vw + 10px, 3em)",
        subHeadResponsive: "clamp(1.2rem, 1.3vw + 10px, 2rem)",
        Responsive: "clamp(1rem, 1.1vw + 5px, 1.5rem)",
      },
    },
  },
  plugins: [nextui()],
};
