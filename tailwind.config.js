const plugin = require("tailwindcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        blink: "blink 1.4s infinite both",
        fade: "fade 1.4s infinite both",
        scale: "scale 2s infinite",
        perspective: "perspective 1.2s infinite",
        fadeIn: "fadeIn 1.2s ease-in-out infinite both",
        word: "7s infinite",
      },
      keyframes: {
        blink: {
          "0%": {
            opacity: "0.2",
          },
          "20%": {
            opacity: "1",
          },
          "100%": {
            opacity: " 0.2",
          },
        },
        fade: {
          "0%, 100%": {
            opacity: "1",
          },
          "50%": {
            opacity: " 0.3",
          },
        },
        fadeIn: {
          "0%, 39%, 100%": {
            opacity: "0",
          },
          "40%": {
            opacity: "1",
          },
        },
        scale: {
          "0%, 100%": {
            transform: "scale(1.0)",
          },
          "50%": {
            transform: "scale(0)",
          },
        },
        perspective: {
          "0%": { transform: "perspective(120px)" },
          " 50%": { transform: "perspective(120px) rotateY(180deg)" },
          "100%": {
            transform: "perspective(120px) rotateY(180deg)  rotateX(180deg)",
          },
        },

        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
      },
    },
  },
  plugins: [
    // !!!! This plugin should be copied for all loading spinners !!!!
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "animation-delay": (value) => {
            return {
              "animation-delay": value,
            };
          },
        },
        {
          values: theme("transitionDelay"),
        }
      );
    }),
  ],
};
