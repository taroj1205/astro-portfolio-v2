/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        hide: {
          "0%": {
            opacity: 1,
            maxHeight: "40rem",
            maxWidth: "25rem",
            display: "block",
          },
          "50%": {
            opacity: 0.5,
            maxHeight: "20rem",
            maxWidth: "12.5rem",
            display: "block",
          },
          "100%": {
            opacity: 0,
            maxHeight: 0,
            maxWidth: 0,
            visibility: "hidden",
            display: "none",
          },
        },
        show: {
          "0%": {
            display: "block",
            visibility: "hidden",
            opacity: 0,
            maxHeight: 0,
            maxWidth: 0,
          },
          "50%": {
            opacity: 0.5,
            maxWidth: "25rem",
            visibility: "visible",
            display: "block",
          },
          "100%": {
            opacity: 1,
            maxHeight: "40rem",
            maxWidth: "25rem",
            visibility: "visible",
            display: "block",
          },
        },
      },
      animation: {
        hide: "hide 300ms ease-in-out forwards",
        show: "show 300ms ease-in-out forwards",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
