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
        "header-desktop": "url('/images/bg-header-desktop.svg')",
        "header-mobile": "url('/images/bg-header-mobile.svg')",
      },
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
      colors: {
        "dark-grayish-cyan": "hsl(180, 8%, 52%)",
        navbar: "hsl(179, 29%, 51%)",
        "light-grayish-cyan-filters": "hsl(180, 31%, 95%)",
        "very-dark-grayish-cyan": "hsl(180, 14%, 20%)",
      },
    },
  },
  plugins: [],
};
export default config;
