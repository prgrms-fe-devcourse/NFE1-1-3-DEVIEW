/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Pretendard: ["Pretendard"]
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
      lightyellow: "#FFF8C9"
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
      DEFAULT: "1440px"
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
    ({ addComponents }) => {
      addComponents({
        ".primary-btn": {
          "@apply bg-primary w-full rounded": ""
        }
      });
    }
  ]
};