import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
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

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-9xl md:text-[200px] font-bold text-gradient mb-6">
          404
        </h1>
        
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Page Not Found
        </h2>
        
        <p className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl mx-auto">
          Oops! The page you're looking for doesn't exist. 
          It might have been moved or deleted.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-neon-green to-neon-cyan text-black font-bold rounded-lg hover:shadow-lg hover:shadow-neon-green/50 transition-all duration-300 transform hover:scale-105"
          >
            <Home size={20} />
            Go Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-neon-cyan text-neon-cyan font-bold rounded-lg hover:bg-neon-cyan/10 hover:shadow-lg hover:shadow-neon-cyan/30 transition-all duration-300"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>
      </div>
    </div>
  )
}
