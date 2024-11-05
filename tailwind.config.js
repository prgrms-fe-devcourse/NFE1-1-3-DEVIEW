/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Pretendard: ["Pretendard"]
      },
      backgroundImage: {
        ranked: "url('/src/assets/Ranked.svg')"
      },
      screens: {
        "2sm": "450px",
        "2xl": "1440px",
        "2md": "1080px",
        "2xs": "400px"
      }
    },
    colors: {
      primary: "#8889FF",
      secondary: "#6668FF",
      white: {
        pure: "#FFFFFF",
        sub: "#F6F7FF"
      },
      black: "#1E1E1E",
      gray: "#8C8C8C",
      lightgray: "#CCCCCC",
      pink: "#FF7C7A",
      purple: "#8469E3",
      lightpurple: "#D8D8FF",
      skyblue: "#50C6E1",
      lightgreen: "#44CF86",
      yellow: "#EEDD60",
      lightyellow: "#FFF8C9",
      red: "#ff3333"
    },
    borderRadius: {
      none: "0",
      sm: "4px",
      DEFAULT: "8px",
      lg: "10px",
      full: "50%"
    },
    fontSize: {
      12: "0.75rem",
      14: "0.875rem",
      16: "1rem",
      20: "1.25rem",
      24: "1.5rem",
      28: "1.75rem"
    },
    boxShadow: {
      DEFAULT: "0px 4px 4px 0px rgba(0, 0, 0, 0.15)"
    },
    maxWidth: {
      DEFAULT: "1440px",
      sm: "768px"
    }
  },

  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        ".flex-center": {
          "@apply flex justify-center items-center": ""
        }
      });
    },
    require("tailwind-scrollbar-hide"),
    ({ addComponents }) => {
      addComponents({
        ".primary-btn": {
          "@apply bg-primary w-full rounded p-6 text-white-pure": ""
        },
        ".lightgray-btn": {
          "@apply bg-lightgray w-full rounded p-6 text-black": ""
        },
        ".gray-btn": {
          "@apply bg-gray w-full rounded p-6 text-black": ""
        },
        ".text-btn": {
          "@apply text-gray hover:underline": ""
        }
      });
    }
  ]
};
