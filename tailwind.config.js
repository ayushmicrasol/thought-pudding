/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        "2xl": "1392px",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // border readius
      borderRadius: {
        base: "10px",
      },
      colors: {
        primary: "#212121",
        divider: "#DADDFF",

        orange: {
          200: "#FFF5EB",
          500: "#F97000",
        },

        green: {
          200: "#E4FFEE",
          500: "#00B641",
        },

        red: {
          200: "#FFD4D4",
          500: "#FF2727",
        },

        gray: {
          100: "#E6E6E6",
          200: "#EDEDED",
          300: "#D8DBE2",
          400: "#898989",
          500: "#5E585A",
        },

        blue: {
          50: "#FDFDFD",
          100: "#ECF9FE",
          200: "#F1F5FF",
          500: "#5E83D3",
          600: "#2C58BB",
        },

        // gradient: {
        //   radial: "var(--color-gradient-radial)",
        //   conic: "var(--color-gradient-conic)",
        // },
      },
      spacing: {
        4.5: "18px",
        "15px": "15px",
        "30px": "30px",
      },

      fontSize: {
        /* 18 line height */
        xs_18: ["12px", "18px"],
        sm_18: ["14px", "18px"],
        base_18: ["16px", "18px"],
        lg_18: ["18px", "18px"],
        xl_18: ["20px", "18px"],
        "2xl_18": ["24px", "18px"],
        "3xl_18": ["30px", "18px"],
        "4xl_18": ["36px", "18px"],
        "5xl_18": ["48px", "18px"],
        "6xl_18": ["60px", "18px"],
        "7xl_18": ["72px", "18px"],
        "8xl_18": ["96px", "18px"],
        "9xl_18": ["128px", "18px"],
      },
    },
  },
  plugins: [],
};
