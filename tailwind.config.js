/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': 'hsl(243, 87%, 12%)',
        'primary-foreground': 'hsl(238, 22%, 44%)',
        'accent': 'hsl(224, 93%, 58%)',
        'accent-foreground': 'hsl(170, 45%, 43%)',
        'neutral': 'hsl(240, 75%, 98%)',
        'neutral-foreground': 'hsl(0, 0%, 75%)',
      },
      fontFamily: {
       raleway : ["Raleway", "sans-serif"],
        sans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
