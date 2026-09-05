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
        room: {
          teal: '#136F63',
          gold: '#FFC857',
          brown: '#856A5D',
          wall: '#E8DCC8',
          floor: '#6B5344',
        },
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        script: ['var(--font-caveat)', 'cursive'],
        gallery: ['var(--font-cormorant)', 'Georgia', 'serif'],
      },
      keyframes: {
        'smoke-wisp': {
          '0%': {
            transform: 'translateY(0) translateX(0) scale(0.45)',
            opacity: '0',
          },
          '12%': { opacity: '0.45' },
          '50%': {
            transform: 'translateY(-52px) translateX(10px) scale(1)',
            opacity: '0.28',
          },
          '100%': {
            transform: 'translateY(-110px) translateX(-8px) scale(1.7)',
            opacity: '0',
          },
        },
        flicker: {
          '0%, 100%': { transform: 'scaleY(1) rotate(-2deg)', opacity: '1' },
          '40%': { transform: 'scaleY(1.12) rotate(3deg)', opacity: '0.85' },
          '70%': { transform: 'scaleY(0.92) rotate(-1deg)', opacity: '1' },
        },
        'leaf-sway': {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.45' },
          '50%': { opacity: '0.85' },
        },
      },
      animation: {
        'smoke-wisp': 'smoke-wisp 4.8s ease-out infinite',
        flicker: 'flicker 1.6s ease-in-out infinite',
        'leaf-sway': 'leaf-sway 5s ease-in-out infinite',
        glow: 'glow 2.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
export default config
