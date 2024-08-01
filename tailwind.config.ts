import type { Config } from "tailwindcss";
import { handler as tailwindCssLineClamp } from "@tailwindcss/line-clamp";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [tailwindCssLineClamp],
};
export default config;
