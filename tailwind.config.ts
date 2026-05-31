import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: { DEFAULT: "#3A0CA3", deep: "#2A0870", med: "#5348CE" },
        teal: { DEFAULT: "#13A6A6", light: "#14C8C8" },
        yellow: { DEFAULT: "#FFB703" },
        ink: "#161616",
        dark: "#0D0D1A",
        canvas: "#F7F7FB",
        purplebg: "#EDE7F6",
        tealbg: "#E0F7FA",
        line: "#E6E6EF",
        muted: "#6B6B7B",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px rgba(20,20,40,0.08)",
        lift: "0 18px 50px rgba(20,20,40,0.12)",
      },
      maxWidth: { container: "1200px" },
    },
  },
  plugins: [],
};
export default config;
