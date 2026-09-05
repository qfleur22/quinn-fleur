import Link from 'next/link'
import { Home } from 'lucide-react'
import { BackButton } from '@/components/back-button'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 via-neon-purple/20 to-neon-magenta/20 animate-pulse" />

      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(#00ff9f 1px, transparent 1px), linear-gradient(90deg, #00ff9f 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-9xl md:text-[200px] font-bold text-gradient mb-6">404</h1>

        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Page Not Found</h2>

        <p className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl mx-auto">
          Oops! The page you&apos;re looking for doesn&apos;t exist. It might have been moved or
          deleted.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-neon-green to-neon-cyan text-black font-bold rounded-lg hover:shadow-lg hover:shadow-neon-green/50 transition-all duration-300 transform hover:scale-105"
          >
            <Home size={20} />
            Go Home
          </Link>

          <BackButton />
        </div>
      </div>
    </div>
  )
}
