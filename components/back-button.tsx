'use client'

import { ArrowLeft } from 'lucide-react'

export const BackButton = () => {
  return (
    <button
      type="button"
      onClick={() => window.history.back()}
      className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-neon-cyan text-neon-cyan font-bold rounded-lg hover:bg-neon-cyan/10 hover:shadow-lg hover:shadow-neon-cyan/30 transition-all duration-300"
    >
      <ArrowLeft size={20} />
      Go Back
    </button>
  )
}
