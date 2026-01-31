'use client'

import { useEffect } from 'react'
import { AlertCircle, RefreshCw, Home } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 via-neon-purple/20 to-neon-magenta/20 animate-pulse" />
      
      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-20" 
        style={{
          backgroundImage: 'linear-gradient(#00ff9f 1px, transparent 1px), linear-gradient(90deg, #00ff9f 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 container mx-auto px-4 text-center max-w-2xl">
        <div className="mb-6 flex justify-center">
          <AlertCircle className="w-24 h-24 text-neon-magenta animate-pulse" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-6">
          Oops!
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Something went wrong
        </h2>
        
        <p className="text-lg text-white/70 mb-8">
          We encountered an unexpected error. Don't worry, it's not your fault!
        </p>

        {error.digest && (
          <div className="mb-8 p-4 bg-neon-purple/10 border border-neon-purple/30 rounded-lg">
            <p className="text-sm text-white/50">
              Error ID: <span className="text-neon-cyan font-mono">{error.digest}</span>
            </p>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-neon-green to-neon-cyan text-black font-bold rounded-lg hover:shadow-lg hover:shadow-neon-green/50 transition-all duration-300 transform hover:scale-105"
          >
            <RefreshCw size={20} />
            Try Again
          </button>
          
          <a
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-neon-cyan text-neon-cyan font-bold rounded-lg hover:bg-neon-cyan/10 hover:shadow-lg hover:shadow-neon-cyan/30 transition-all duration-300"
          >
            <Home size={20} />
            Go Home
          </a>
        </div>
      </div>
    </div>
  )
}
