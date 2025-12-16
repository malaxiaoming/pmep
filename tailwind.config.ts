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
        brand: {
          navy: '#0E2A57',          // deep header/navy
          navyDark: '#003F7A',      // darker hero blend
          blue: '#1479FF',          // logo blue (light)
          blueDark: '#0057C2',      // logo blue (dark)
          orange: '#F58025',        // logo orange
          orangeLight: '#FFAA45',   // lighter orange
          bg: '#F5F7FB',            // light background
        },
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.25rem',
      },
    },
  },
  plugins: [],
}

export default config

