const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './shorthand/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.{js,ts,jsx,tsx}',
    './wiki/articles/*.{mdx}',
  ],
  mode: "jit",
  // purge: false,
  darkMode: "class",
  theme: {
    extend: {
      gridTemplateColumns: {
        "large-home-page-ad-configuration": "1.05fr 3fr 1.05fr",
        "1-2": "1fr 2fr",
        "2-1-1-1": "2fr 1fr 1fr 1fr",
        "2-1-1": "2fr 1fr 1fr",
        "1-3": "1fr 3fr",
        "1-4": "1fr 4fr",
      },
      colors: {
        // "primary": "#ffc500",
        // "primary-tailwind": "#f59e0b",
        // "chemist2u": "#ea5078",
        // "primary-st": "rgba(255, 197, 0, 0.8)",
        // "light-green": "#ebfff2",
        // "secondary": "black",
        // "primary-darker": "#e6b100",
        // "primary-full": "#ffc500",
        // "smoke": "whitesmoke",
        // "gray-light": "#ededed"
      },
      boxShadow: {
        "pop": "0px 0px 19px 5px #E0E0E0",
        "pop-light": "0px 0px 10px 3px #E0E0E0"
      },
      fontSize: {
        "xxs": ".5rem"
      },
      margin: {
        "1/4": "25%",
        "1/5": "20%",
        "1/6-safe": "calc(15% + 6px)",
        "1/7": "11%",
        "1/10": "10%",
        "1/20": "5%",
        "1/6": "16.6%",
        "1/16": "6.25%"
      },
      scale: {
        "90": ".90",
        "80": ".80"
      },
      width: {
        "7/8": "87.5%",
        "9/10": "90%",
        "2/3-safe": "66%",
        "full-safe": "calc(100% - (var(--scrollbar-width)/3))",
      },
      height: {
        "119px": "119px",
        "350px": "350px",
        "400px": "400px",
        "80": "20rem"
      },
      scale: {
        "102": "scale(1.02)"
      },
      top: {
        "1/4": "33vh"
      },
      lineHeight: {
        // "hard": "3rem"
      }
    },
    fontFamily: {
      "sans": ["Ubuntu", "Open Sans"]
    }
  },
  plugins: [nextui()],
  variants: {
    extend: require("./tailwind.variants")
  },
}
