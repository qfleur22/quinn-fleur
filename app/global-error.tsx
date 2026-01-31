'use client'

import { useEffect } from 'react'
import { AlertCircle, Home } from 'lucide-react'

export default function GlobalError({
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
    <html>
      <body style={{ margin: 0, padding: 0, backgroundColor: '#000' }}>
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}>
          {/* Background */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom right, rgba(0, 30, 255, 0.2), rgba(189, 0, 255, 0.2), rgba(214, 0, 255, 0.2))',
          }} />

          <div style={{
            position: 'relative',
            zIndex: 10,
            textAlign: 'center',
            padding: '2rem',
            maxWidth: '600px',
          }}>
            <div style={{ marginBottom: '2rem' }}>
              <AlertCircle style={{ width: 96, height: 96, color: '#d600ff', margin: '0 auto' }} />
            </div>
            
            <h1 style={{
              fontSize: '4rem',
              fontWeight: 'bold',
              background: 'linear-gradient(to right, #00ff9f, #00b8ff, #001eff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '1.5rem',
            }}>
              Critical Error
            </h1>
            
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.25rem', marginBottom: '2rem' }}>
              A critical error occurred. Please refresh the page or return to the homepage.
            </p>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={reset}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.5rem',
                  background: 'linear-gradient(to right, #00ff9f, #00b8ff)',
                  color: '#000',
                  fontWeight: 'bold',
                  border: 'none',
                  borderRadius: '0.5rem',
                  cursor: 'pointer',
                  fontSize: '1rem',
                }}
              >
                Refresh Page
              </button>
              
              <a
                href="/"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.5rem',
                  background: 'transparent',
                  color: '#00b8ff',
                  fontWeight: 'bold',
                  border: '2px solid #00b8ff',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  fontSize: '1rem',
                }}
              >
                <Home style={{ width: 20, height: 20 }} />
                Go Home
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
