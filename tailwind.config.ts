import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'palette': {
          'one': '#E6CCFF',
          'two': '#8000FF',
          'three': '#00F399FA',
          'four': '#F45531'
        }
      }
    },
  },
  plugins: [],
}
export default config
