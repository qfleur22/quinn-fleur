import type { Metadata } from 'next'
import { Bookshelf } from '@/components/home/bookshelf'
import { GalleryWall } from '@/components/home/gallery-wall'
import { LivingRoom } from '@/components/home/living-room'

export const metadata: Metadata = {
  description:
    'Resources, tools, and peer coaching by Quinn Fleur for people living at the intersections of transness, neurodivergence, disability, hypermobility, and chronic illness.',
}

export default function Home() {
  return (
    <main className="wall-paper flex min-h-screen flex-col overflow-x-hidden text-black">
      <Bookshelf />
      <div className="flex-1">
        <GalleryWall />
      </div>
      <LivingRoom />
    </main>
  )
}
