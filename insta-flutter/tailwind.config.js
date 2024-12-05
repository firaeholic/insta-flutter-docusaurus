/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,mdx}',
    './docs/**/*.{md,mdx}',
    './blog/**/*.{md,mdx}',
    './docusaurus.config.js',
    './src/pages/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

