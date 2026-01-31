'use client'

import { useEffect } from 'react'

export default function DBTSkillsRedirect() {
  useEffect(() => {
    window.location.href = 'https://https://dbt.quinnfleur.com/'
  }, [])

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl text-white mb-4">Redirecting to DBT Coping Skills...</h1>
        <p className="text-neon-cyan">
          If you are not redirected, <a href="https://dbt.quinnfleur.com/" className="underline">click here</a>
        </p>
      </div>
    </div>
  )
}
