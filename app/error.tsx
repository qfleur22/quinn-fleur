'use client'

import { useEffect } from 'react'
import { ErrorActions } from '@/components/home/error-actions'
import { ErrorPanel } from '@/components/home/error-panel'
import { ErrorRoomShell } from '@/components/home/error-room-shell'
import { getErrorContent } from '@/models/error-content'

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

  const content = getErrorContent({ key: '500' })

  return (
    <ErrorRoomShell>
      <ErrorPanel
        content={content}
        detail={error.digest}
        actions={<ErrorActions showRetry onRetry={reset} />}
      />
    </ErrorRoomShell>
  )
}
