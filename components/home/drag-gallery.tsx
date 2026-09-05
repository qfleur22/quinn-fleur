'use client'

import { useState } from 'react'
import Link from 'next/link'
import { DragLightbox } from '@/components/home/drag-lightbox'
import { DragLook } from '@/models/drag-look'
import { DragPhoto } from '@/models/drag-photo'
import { DragVideo } from '@/models/drag-video'

export const DragGallery = ({
  photos,
  videos,
  looks,
}: {
  photos: DragPhoto[]
  videos: DragVideo[]
  looks: DragLook[]
}) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  return (
    <div className="space-y-12">
      <section aria-labelledby="drag-photos">
        <h2 id="drag-photos" className="mb-6 font-display text-3xl text-room-teal sm:text-4xl">
          Photos
        </h2>
        <ul className="grid gap-6 sm:grid-cols-2">
          {photos.map((photo, index) => (
            <li key={photo.id}>
              <button
                type="button"
                onClick={() => {
                  setLightboxIndex(index)
                }}
                className="group w-full text-left outline-none"
              >
                <figure className="space-y-3">
                  <div className="ornate-gold p-2 transition group-hover:scale-[1.01] group-focus-visible:ring-2 group-focus-visible:ring-room-gold">
                    <div className="relative aspect-[3/4] overflow-hidden bg-[#2b211c] ring-2 ring-[#6b4f1d]">
                      <img
                        src={photo.imageSrc}
                        alt={photo.imageAlt}
                        className="h-full w-full object-cover object-top"
                      />
                    </div>
                  </div>
                  {photo.caption ? (
                    <figcaption className="text-center font-display text-xl text-room-teal">
                      {photo.caption}
                    </figcaption>
                  ) : null}
                </figure>
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="drag-videos">
        <h2 id="drag-videos" className="mb-6 font-display text-3xl text-room-teal sm:text-4xl">
          Videos
        </h2>
        {videos.length > 0 ? (
          <ul className="grid gap-6 sm:grid-cols-2">
            {videos.map((video) => (
              <li key={video.id}>
                <a
                  href={video.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block outline-none"
                >
                  <div className="ornate-gold p-2">
                    <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-[#2b211c] ring-2 ring-[#6b4f1d]">
                      {video.thumbnailSrc ? (
                        <img
                          src={video.thumbnailSrc}
                          alt=""
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <span className="font-display text-room-gold">Play</span>
                      )}
                    </div>
                  </div>
                  <p className="mt-3 text-center font-display text-xl text-room-teal">
                    {video.title}
                  </p>
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="italic text-room-brown">Videos will live here.</p>
        )}
      </section>

      <section aria-labelledby="drag-looks">
        <h2 id="drag-looks" className="mb-6 font-display text-3xl text-room-teal sm:text-4xl">
          Looks
        </h2>
        <ul className="grid gap-8 sm:grid-cols-2">
          {looks.map((look) => (
            <li key={look.slug}>
              <Link href={`/drag/${look.slug}`} className="group block outline-none">
                <figure className="space-y-3">
                  <div className="ornate-gold p-2 transition group-hover:scale-[1.01] group-focus-visible:ring-2 group-focus-visible:ring-room-gold">
                    <div className="relative aspect-[3/4] overflow-hidden bg-[#2b211c] ring-2 ring-[#6b4f1d]">
                      <img
                        src={look.imageSrc}
                        alt={look.imageAlt}
                        className="h-full w-full object-cover object-top"
                      />
                    </div>
                  </div>
                  <figcaption className="space-y-1 text-center">
                    <h3 className="font-display text-2xl text-room-teal">{look.lookName}</h3>
                    {look.event ? (
                      <p className="font-gallery text-base text-black/80">{look.event}</p>
                    ) : null}
                  </figcaption>
                </figure>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {lightboxIndex !== null ? (
        <DragLightbox
          photos={photos}
          startIndex={lightboxIndex}
          onClose={() => {
            setLightboxIndex(null)
          }}
        />
      ) : null}
    </div>
  )
}
