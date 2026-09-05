import type { Metadata } from 'next'
import { Inter, Fraunces, Caveat, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
})

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
})

export const metadata: Metadata = {
  title: {
    default: 'Quinn Fleur',
    template: '%s · Quinn Fleur',
  },
  description: 'Make yourself at home — a little corner of the internet from Quinn Fleur.',
  openGraph: {
    title: 'Quinn Fleur',
    description: 'Make yourself at home — a little corner of the internet from Quinn Fleur.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${fraunces.variable} ${caveat.variable} ${cormorant.variable}`}>
        {children}
      </body>
    </html>
  )
}
