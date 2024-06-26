import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
      
    fontFamily:{
      'body' : ['Poppins','san-serif'],
      'main': ['"Julius Sans One"', "sans-serif"]
    },
  },
  plugins: [
    require("flowbite/plugin"),
    nextui()
  ],
}