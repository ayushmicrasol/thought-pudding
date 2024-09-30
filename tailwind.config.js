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
        // sm: "480px",
        // ssm: "600px",
        // md: "790px",
        // xl: "880px",
        "2xl": "1200px",
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
        primary: "#2D3134",
        divider: "#DADDFF",

        orange: {
          200: "#FFF5EB",
          500: "#F97000",
        },

        green: {
          200: "#E4FFEE",
          400: "#00A92B",
          500: "#00B641",
          600: "#2A5F61",
        },

        red: {
          200: "#FFEDED",
          500: "#FF5959",
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
          300: "#EFF6FD",
          500: "#5E83D3",
          600: "#2C58BB",
          700: "#333B52",
        },

        yellow: {
          50: "#FFFDF9",
          100: "#FDF8E9",
          600: "#C58843",
        },
      },
      spacing: {
        4.5: "18px",
        7.5: "30px",
        8.5: "34px",
        "15px": "15px",
        "26px": "26px",
        "30px": "30px",
        "38px": "38px",
        "50px": "50px",
        "100px": "100px",
        "120px": "120px",
      },

      fontSize: {
        "4.5xl": "42px",
        "38px": "38px",
        /* 18 line height */
        xs_18: ["12px", "18px"],
        sm_18: ["14px", "18px"],
        base_18: ["16px", "18px"],
        lg_18: ["18px", "18px"],
        xl_18: ["20px", "18px"],
        "2xl_18": ["24px", "18px"],
        "3xl_18": ["30px", "18px"],
        "4xl_18": ["36px", "18px"],
        "38px_18": ["38px", "18px"],
        "4.5xl_18": ["42px", "18px"],
        "5xl_18": ["48px", "18px"],
        "6xl_18": ["60px", "18px"],
        "7xl_18": ["72px", "18px"],
        "8xl_18": ["96px", "18px"],
        "9xl_18": ["128px", "18px"],

        /* 18 line height */
        xs_22: ["12px", "22px"],
        sm_22: ["14px", "22px"],
        base_22: ["16px", "22px"],
        lg_22: ["18px", "22px"],
        xl_22: ["20px", "22px"],
        "2xl_22": ["24px", "22px"],
        "3xl_22": ["30px", "22px"],
        "4xl_22": ["36px", "22px"],
        "38px_22": ["38px", "22px"],
        "4.5xl_22": ["42px", "22px"],
        "5xl_22": ["48px", "22px"],
        "6xl_22": ["60px", "22px"],
        "7xl_22": ["72px", "22px"],
        "8xl_22": ["96px", "22px"],
        "9xl_22": ["128px", "22px"],

        /* 26 line height */
        xs_26: ["12px", "26px"],
        sm_26: ["14px", "26px"],
        base_26: ["16px", "26px"],
        lg_26: ["18px", "26px"],
        xl_26: ["20px", "26px"],
        "2xl_26": ["24px", "26px"],
        "3xl_26": ["30px", "26px"],
        "4xl_26": ["36px", "26px"],
        "38px_26": ["38px", "26px"],
        "4.5xl_26": ["42px", "26px"],
        "5xl_26": ["48px", "26px"],
        "6xl_26": ["60px", "26px"],
        "7xl_26": ["72px", "26px"],
        "8xl_26": ["96px", "26px"],
        "9xl_26": ["128px", "26px"],

        /* 30 line height */
        xs_30: ["12px", "30px"],
        sm_30: ["14px", "30px"],
        base_30: ["16px", "30px"],
        lg_30: ["18px", "30px"],
        xl_30: ["20px", "30px"],
        "2xl_30": ["24px", "30px"],
        "3xl_30": ["30px", "30px"],
        "4xl_30": ["36px", "30px"],
        "38px_30": ["38px", "30px"],
        "4.5xl_30": ["42px", "30px"],
        "5xl_30": ["48px", "30px"],
        "6xl_30": ["60px", "30px"],
        "7xl_30": ["72px", "30px"],
        "8xl_30": ["96px", "30px"],
        "9xl_30": ["128px", "30px"],

        /* 45 line height */
        xs_45: ["12px", "45px"],
        sm_45: ["14px", "45px"],
        base_45: ["16px", "45px"],
        lg_45: ["18px", "45px"],
        xl_45: ["20px", "45px"],
        "2xl_45": ["24px", "45px"],
        "3xl_45": ["30px", "45px"],
        "4xl_45": ["36px", "45px"],
        "38px_45": ["38px", "45px"],
        "4.5xl_45": ["42px", "45px"],
        "5xl_45": ["48px", "45px"],
        "6xl_45": ["60px", "45px"],
        "7xl_45": ["72px", "45px"],
        "8xl_45": ["96px", "45px"],
        "9xl_45": ["128px", "45px"],

        /* 48 line height */
        xs_48: ["12px", "48px"],
        sm_48: ["14px", "48px"],
        base_48: ["16px", "48px"],
        lg_48: ["18px", "48px"],
        xl_48: ["20px", "48px"],
        "2xl_48": ["24px", "48px"],
        "3xl_48": ["30px", "48px"],
        "4xl_48": ["36px", "48px"],
        "38px_48": ["38px", "48px"],
        "4.5xl_48": ["42px", "48px"],
        "5xl_48": ["48px", "48px"],
        "6xl_48": ["60px", "48px"],
        "7xl_48": ["72px", "48px"],
        "8xl_48": ["96px", "48px"],
        "9xl_48": ["128px", "48px"],
      },
    },
  },
  plugins: [],
};
