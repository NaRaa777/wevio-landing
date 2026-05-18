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
        bg: "#040E1C",
        surf: "#081628",
        blue: "#3260FF",
        bluel: "#5B8EFF",
        cyan: "#22D3EE",
        violet: "#7C3AED",
        muted: "#7A95B4",
        dim: "#3A5470",
      },
      fontFamily: {
        syne: ["var(--font-syne)", "system-ui", "sans-serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "18px",
      },
    },
  },
  plugins: [],
};

export default config;
