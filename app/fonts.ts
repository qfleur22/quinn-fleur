import { Inter, Fraunces, Caveat, Cormorant_Garamond } from 'next/font/google'

export const inter = Inter({ subsets: ['latin'] })

export const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
})

export const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
})

export const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
})

export const bodyFontClassName = `${inter.className} ${fraunces.variable} ${caveat.variable} ${cormorant.variable}`
