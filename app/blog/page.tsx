import type { Metadata } from 'next'
import { RoomPage, WallCard } from '@/components/home/room-page'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Writing from the Neuroqueer Apothecary — coming soon.',
}

export default function BlogPage() {
  return (
    <RoomPage>
      <WallCard title="Blog">
        <p>
          This book is still being bound. I&apos;m gathering essays and notes, and they&apos;ll
          live here when they&apos;re ready to leave the desk.
        </p>
        <p className="font-script text-2xl text-room-teal">Check back soon.</p>
      </WallCard>
    </RoomPage>
  )
}
