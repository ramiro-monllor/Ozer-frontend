import { nextui } from "@nextui-org/react";
import type { Config } from 'tailwindcss'

const config: Config = {
  mode: 'jit',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
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
  plugins: [nextui()],
}
export default config
