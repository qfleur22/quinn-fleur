'use client'

import { useEffect } from 'react'
import { bodyFontClassName } from '@/app/fonts'
import { ErrorActions } from '@/components/home/error-actions'
import { ErrorPanel } from '@/components/home/error-panel'
import { ErrorRoomShell } from '@/components/home/error-room-shell'
import { getErrorContent } from '@/models/error-content'
import './globals.css'

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

  const content = getErrorContent({ key: '500' })

  return (
    <html lang="en">
      <body className={bodyFontClassName}>
        <ErrorRoomShell>
          <ErrorPanel
            content={content}
            detail={error.digest}
            actions={<ErrorActions showRetry onRetry={reset} />}
          />
        </ErrorRoomShell>
      </body>
    </html>
  )
}
