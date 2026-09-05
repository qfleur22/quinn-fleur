import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { RoomPage, WallCard } from '@/components/home/room-page'
import { RoomLink } from '@/components/home/room-link'
import { GuideCta } from '@/components/home/guide-cta'
import { dragLooks, getDragLook } from '@/data/drag-gallery'

export const generateStaticParams = () => {
  return dragLooks.map((look) => {
    return { slug: look.slug }
  })
}

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> => {
  const { slug } = await params
  const look = getDragLook({ slug })

  if (!look) {
    return { title: 'Look' }
  }

  return {
    title: `${look.lookName} · Quinnty Fre$h $exxx`,
    description: look.description,
  }
}

export default async function DragLookPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const look = getDragLook({ slug })

  if (!look) {
    notFound()
  }

  return (
    <RoomPage>
      <WallCard title="Quinnty Fre$h $exxx">
        <p className="font-gallery text-xl italic text-room-brown">{look.lookName}</p>
        <div className="relative mx-auto mb-2 h-80 w-56 overflow-hidden ornate-gold p-2 sm:h-[28rem] sm:w-80">
          <img
            src={look.imageSrc}
            alt={look.imageAlt}
            className="h-full w-full object-cover object-top"
          />
        </div>
        <p>{look.description}</p>
        {look.takenOn || look.event ? (
          <p className="text-center text-room-brown">
            {[look.event, look.takenOn].filter(Boolean).join(' · ')}
          </p>
        ) : null}
        <GuideCta href={look.socialHref} label={look.socialLabel} isDominant />
        <p className="text-center">
          <RoomLink href="/drag">Back to all looks</RoomLink>
        </p>
      </WallCard>
    </RoomPage>
  )
}
