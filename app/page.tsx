import type { Metadata } from 'next'
import { Bookshelf } from '@/components/home/bookshelf'
import { GalleryWall } from '@/components/home/gallery-wall'
import { LivingRoom } from '@/components/home/living-room'

export const metadata: Metadata = {
  title: 'Quinn Fleur',
  description: 'Make yourself at home — a little corner of the internet from Quinn Fleur.',
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
