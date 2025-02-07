/** @type {import('tailwindcss').Config} */
export default {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         colors: {
            my: {
               primary: "#e3e5e4",
               secondary: "#82AAFF",
               accent: "#65737E",
               dark: "#282A2C",
            },
         },
      },
   },
   plugins: [],
};
