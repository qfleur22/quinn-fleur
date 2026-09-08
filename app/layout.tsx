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
    default: 'The Neuroqueer Apothecary',
    template: '%s · The Neuroqueer Apothecary',
  },
  description:
    'Resources, tools, and peer coaching by Quinn Fleur for people living at the intersections of transness, neurodivergence, disability, hypermobility, and chronic illness.',
  openGraph: {
    title: 'The Neuroqueer Apothecary',
    description:
      'Resources, tools, and peer coaching by Quinn Fleur for people living at the intersections of transness, neurodivergence, disability, hypermobility, and chronic illness.',
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
