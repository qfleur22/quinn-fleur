import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'neon-green': '#00ff9f',
        'neon-cyan': '#00b8ff',
        'neon-blue': '#001eff',
        'neon-purple': '#bd00ff',
        'neon-magenta': '#d600ff',
      },
    },
  },
  plugins: [],
}
export default config
