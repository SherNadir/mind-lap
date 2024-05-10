import type { Config } from "tailwindcss";
// text-xs = {
//   font-size: 0.75rem;            12px
//   line-height: 1rem;             16px
// }
// text-sm = {
//   font-size: 0.875rem;           14px;
//   line-height: 1.25rem;          20px;
// }
// text-base = {
//   font-size: 1rem                16px;
//   line-height: 1.5rem            24px;
// }
// font-normal  font-weight:         400;
// text-medium =                    500;
// font-semibold  font-weight:       600;
// font-bold  font-weight:           700;
// font-extrabold font-weight:     800;
// font-black font-weight:         900;
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    extend: {
      maxWidth: {
        container: "1440px",
      },
      fontSize: {
        "4xl": [
          "1.5rem", //24px
          {
            lineHeight: "1.62rem", //17px
            fontWeight: "600",
          },
        ],
        "5xl": [
          "1.188rem", //19px
          {
            lineHeight: "1.813rem",
            fontWeight: "600",
          },
        ],
        "6xl": [
          "4rem", //64px
          {
            fontWeight: "800",
          },
        ],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        md: "0 2px 4px 0 rgba(0, 0, 0, 0.1)",
        "3xl": "0 2px 11px 0px rgba(160, 152, 211, 0.2)",
        xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      },
      colors: {
        success: {
          light: "#9CD2B2",
          DEFAULT: "#1ECA63",
        },
        primary: {
          DEFAULT: "#75D481",
        },
        dark: {
          DEFAULT: "#424242",
          100: "#16171C",
          200: "#4F4F4F"
        },
        warning: {
          DEFAULT: "#FF6B2C",
        },
        danger: {
          DEFAULT: "#EB3838",
        },
        grey: {
          light: "#F3F5F8",
        },
        white: {
          DEFAULT: "#FFFFFF",
        },
        link_border: "#CCCCCC",
      },
      transitionProperty: {
        top: "top",
      },
    },
  },
  plugins: [],
};
export default config;