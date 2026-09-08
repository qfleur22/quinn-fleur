import type { Metadata } from 'next'
import { bodyFontClassName } from '@/app/fonts'
import './globals.css'

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
      <body className={bodyFontClassName}>
        {children}
      </body>
    </html>
  )
}
