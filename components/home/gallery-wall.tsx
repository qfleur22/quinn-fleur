import { OrnateFrame } from '@/components/home/ornate-frame'
import { GalleryPiece } from '@/models/gallery-piece'

const pieces: GalleryPiece[] = [
  {
    id: 'about',
    title: 'About',
    imageSrc: '/gallery/quinn-portrait.png',
    imageAlt: 'Portrait of Quinn Fleur',
    href: '/about',
    cta: 'See more',
    rotate: -1.6,
    size: 'lg',
    placeholder: false,
  },
  {
    id: 'botanical',
    title: 'Coming soon',
    imageSrc: '/gallery/gallery-botanical.jpg',
    imageAlt: 'Botanical illustration of trailing pothos leaves',
    rotate: 2.1,
    size: 'md',
    placeholder: true,
  },
  {
    id: 'abstract',
    title: 'Coming soon',
    imageSrc: '/gallery/gallery-abstract.jpg',
    imageAlt: 'Abstract teal and gold painting',
    rotate: -2.4,
    size: 'sq',
    placeholder: true,
  },
  {
    id: 'still-life',
    title: 'Coming soon',
    imageSrc: '/gallery/gallery-still-life.jpg',
    imageAlt: 'Still life painting of a candle and a book',
    rotate: 1.3,
    size: 'wide',
    placeholder: true,
  },
  {
    id: 'empty-left',
    title: 'Coming soon',
    rotate: -1.1,
    size: 'sm',
    placeholder: true,
  },
  {
    id: 'empty-right',
    title: 'Coming soon',
    rotate: 1.8,
    size: 'sm',
    placeholder: true,
  },
]

export const GalleryWall = () => {
  return (
    <section className="relative px-4 py-12 sm:px-8 sm:py-20">
      <div className="mb-12 text-center sm:mb-16">
        <h1 className="mx-auto max-w-6xl px-2 font-script text-4xl leading-tight text-room-teal sm:text-6xl lg:text-7xl">
          The Neuroqueer Apothecary
        </h1>
        <p className="mt-3 font-gallery text-lg italic text-room-brown sm:text-xl">
          founded by Quinn Fleur
        </p>
        <p className="mt-1 font-gallery text-base text-room-brown/80 sm:text-lg">
          make yourself at home
        </p>
      </div>

      <div className="mx-auto flex max-w-6xl flex-wrap items-end justify-center gap-8 sm:gap-12">
        {pieces.map((piece) => (
          <OrnateFrame
            key={piece.id}
            title={piece.title}
            href={piece.href}
            cta={piece.cta}
            rotate={piece.rotate}
            size={piece.size}
          >
            {piece.imageSrc ? (
              <img
                src={piece.imageSrc}
                alt={piece.imageAlt ?? piece.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              <EmptyCanvas />
            )}
          </OrnateFrame>
        ))}
      </div>
    </section>
  )
}

const EmptyCanvas = () => {
  return (
    <div
      className="flex h-full w-full items-center justify-center bg-[#d7c4a8]"
      style={{
        backgroundImage:
          'repeating-linear-gradient(0deg, rgba(133,106,93,0.08) 0px, rgba(133,106,93,0.08) 1px, transparent 1px, transparent 7px)',
      }}
      aria-hidden="true"
    >
      <span className="font-gallery text-5xl text-room-brown/30">?</span>
    </div>
  )
}
