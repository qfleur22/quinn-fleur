'use client'

import { Bookshelf } from '@/components/home/bookshelf'
import { LivingRoom } from '@/components/home/living-room'

export const ErrorRoomShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="wall-paper flex h-[100dvh] flex-col overflow-hidden text-black">
      <div className="shrink-0">
        <Bookshelf sticky={false} />
      </div>
      <main className="flex min-h-0 flex-1 items-center justify-center overflow-hidden px-4 py-2">
        {children}
      </main>
      <div className="shrink-0">
        <LivingRoom compact />
      </div>
    </div>
  )
}
