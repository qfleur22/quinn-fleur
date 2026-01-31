'use client'

import { Mail } from 'lucide-react'

export const Footer = () => {
  return (
    <footer id="contact" className="bg-black border-t border-neon-cyan/20 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Let's Work Together
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Interested in collaborating or have a project in mind? 
            I'd love to hear from you!
          </p>
          
          <a
            href="mailto:quinndelafleur@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-neon-green to-neon-cyan text-black font-bold rounded-lg hover:shadow-lg hover:shadow-neon-green/50 transition-all duration-300 transform hover:scale-105"
          >
            <Mail size={24} />
            Get in Touch with Quinn
          </a>
        </div>

        <div className="mt-12 pt-8 border-t border-neon-cyan/20 text-center text-white/50 text-sm">
          <p>© {new Date().getFullYear()} Quinn Fleur. All rights reserved.</p>
          <p className="mt-2">Built with Next.js, TypeScript, and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
