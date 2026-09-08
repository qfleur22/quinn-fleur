import type { Metadata } from 'next'
import { ErrorActions } from '@/components/home/error-actions'
import { ErrorPanel } from '@/components/home/error-panel'
import { ErrorRoomShell } from '@/components/home/error-room-shell'
import { getErrorContent } from '@/models/error-content'

export const metadata: Metadata = {
  title: 'Access denied',
  robots: { index: false, follow: false },
}

export default function ForbiddenPage() {
  const content = getErrorContent({ key: '403' })

  return (
    <ErrorRoomShell>
      <ErrorPanel content={content} actions={<ErrorActions showBack />} />
    </ErrorRoomShell>
  )
}
