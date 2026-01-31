'use client'

export const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
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
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient animate-fade-in">
          Quinn Fleur
        </h1>
        <p className="text-xl md:text-3xl text-white/90 mb-4">
          Full-Stack Web Developer
        </p>
        <p className="text-lg md:text-xl text-neon-cyan max-w-2xl mx-auto">
          Crafting beautiful, accessible, and performant web experiences
        </p>
        
        <div className="mt-12">
          <a
            href="#projects"
            className="inline-block px-8 py-4 bg-gradient-to-r from-neon-green to-neon-cyan text-black font-bold rounded-lg hover:shadow-lg hover:shadow-neon-green/50 transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-neon-green rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-neon-green rounded-full" />
        </div>
      </div>
    </section>
  )
}
