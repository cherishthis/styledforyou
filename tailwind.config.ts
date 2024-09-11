import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // background: "var(--background)",
        // foreground: "var(--foreground)",
        black: "#1B1B1B",
        primary: {
          100: "#FFDBCD",
          200: "#FFF4EE",
        },
        gray: "#524F54",
        secondary: {
          tan: "#9C8990",
          blue: "#BBC2E2",
        },
      },
    },
  },
  plugins: [],
};
export default config;
