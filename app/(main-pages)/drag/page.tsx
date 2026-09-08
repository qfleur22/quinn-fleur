import type { Metadata } from 'next'
import { RoomPage, WallCard } from '@/components/home/room-page'
import { DragFollow } from '@/components/home/drag-follow'
import { DragGallery } from '@/components/home/drag-gallery'
import { dragLooks, dragPhotos, dragVideos } from '@/data/drag-gallery'

export const metadata: Metadata = {
  title: 'Drag',
  description:
    'Quinnty Fre$h $exxx — a trans, disabled drag king based in Charlotte, North Carolina.',
}

export default function DragPage() {
  return (
    <RoomPage>
      <WallCard title="Quinnty Fre$h $exxx" wide="xl">
        <div className="relative mx-auto mb-8 h-80 w-56 overflow-hidden ornate-gold p-2 sm:h-[28rem] sm:w-80">
          <img
            src="/gallery/quinnty-transcowboy.png"
            alt="Quinnty Fre$h $exxx in a cowboy hat and patched vest, pointing finger guns at the camera"
            className="h-full w-full object-cover object-top"
          />
        </div>
        <p>
          Quinnty Fre$h $exxx is a trans, disabled drag king based in Charlotte, North Carolina.
          Quinnty is known for his characters and cosplay looks as well as his emphatic performing
          style and incomparable sense of humor. He is known as the &ldquo;King of a Thousand
          Dicks.&rdquo;
        </p>
        <DragFollow />
        <div className="border-t border-room-brown/30 pt-8">
          <DragGallery photos={dragPhotos} videos={dragVideos} looks={dragLooks} />
        </div>
      </WallCard>
    </RoomPage>
  )
}
