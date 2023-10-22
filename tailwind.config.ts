import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        text: ['var(--sf-mono)', 'sans-serif'],
        title: ['var(--calibre)', 'sans-serif'],
      },
      fontSize: {
        text: "clamp(14px, 5vw, 16px)",
        title: "clamp(40px, 8vw, 74px)",
      },
      colors: {
        orange: '#fca311',
        blue: '#14213d',
      },
    },

  },
  plugins: [],
}
export default config
