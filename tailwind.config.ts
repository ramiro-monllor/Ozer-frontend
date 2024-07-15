/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        brand: {
          cream: '#FFFCF2',
          lightGray: '#e9ecef',
          darkBlue: '#023e8a',
          lightBlue: '#3a6ea5'
        }
      }
    },
  },
  plugins: [],
}
