/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      fontFamily: {
        display: ["var(--font-anton)"],
        body: ["var(--font-poppins)"],
      },
      fontSize: {
        "display-xl": [
          "3rem",
          {
            lineHeight: "4.25rem",
          },
        ],
        "display-lg": "2.5rem",
        "display-md": "2.0625rem",
        "display-sm": "1.75rem",
        "display-xs": "1.437rem",
        "display-xxs": "1.1875rem",
        "body-lg": [
          "1.1875rem",
          {
            lineHeight: "1.6875rem",
          },
        ],
        "body-md": [
          "1rem",
          {
            lineHeight: "1.5rem",
          },
        ],
        "body-sm": [
          "0.8125rem",
          {
            lineHeight: "1.3125rem",
          },
        ],
        "body-xs": [
          "0.6875rem",
          {
            lineHeight: "1.1875rem",
          },
        ],
      },
      fontWeight: {
        light: "300",
        normal: "400",
        semi: "600",
        bold: "700",
      },
      colors: {
        "dark-primary": "#3e0065",
        "dark-secondary": "#0c0014",
        "light-primary": "#dab7f0",
        "light-secondary": "#fbfbfb",
        "accent-pink": "#ca73ff",
        "accent-blue": "#73cdff",
        "accent-yellow": "#ffbd13",
        "accent-tag-pink": "#eac7ff",
        "accent-tag-blue": "#c7ebff",
        "accent-tag-yellow": "#ffe5a1",
        "light-header": "#8351a3",
        "light-text": "#0c0014",
        "dark-header": "#dab7f0",
        "dark-text": "#fbfbfb",
      },
    },
  },
  plugins: [],
};
