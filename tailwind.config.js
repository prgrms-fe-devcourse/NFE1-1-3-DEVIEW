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
