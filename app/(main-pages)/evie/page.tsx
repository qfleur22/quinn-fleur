import type { Metadata } from 'next'
import { RoomPage, WallCard } from '@/components/home/room-page'
import { RoomLink } from '@/components/home/room-link'

export const metadata: Metadata = {
  title: 'Evie',
  description: 'A little corner for Evie, from Quinn Fleur.',
}

export default function EviePage() {
  return (
    <RoomPage>
      <WallCard title="Evie">
        <p>
          Evie is my girlfriend, and one of the people I love spending time with. This little
          page is hers.
        </p>
        <p>
          Head back to{' '}
          <RoomLink href="/about">About</RoomLink> whenever you like.
        </p>
      </WallCard>
    </RoomPage>
  )
}
