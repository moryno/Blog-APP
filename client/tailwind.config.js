import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
      },
      flex: {
        4: "4 1 0%",
      },
      backgroundColor: {
        light: "#ffffff",
        dark: "#0f172a",
      },
      textColor: {
        light: "#000000",
        dark: "#dddddd",
      },
    },
  },
  plugins: [typography],
};
