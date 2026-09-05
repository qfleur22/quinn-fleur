'use client'

import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Download, X } from 'lucide-react'
import { DragPhoto } from '@/models/drag-photo'

export const DragLightbox = ({
  photos,
  startIndex,
  onClose,
}: {
  photos: DragPhoto[]
  startIndex: number
  onClose: () => void
}) => {
  const [activeIndex, setActiveIndex] = useState(startIndex)
  const photo = photos[activeIndex]

  const showPrevious = () => {
    setActiveIndex((current) => {
      return (current - 1 + photos.length) % photos.length
    })
  }

  const showNext = () => {
    setActiveIndex((current) => {
      return (current + 1) % photos.length
    })
  }

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKey = ({ key }: { key: string }) => {
      if (key === 'Escape') {
        onClose()
      }

      if (key === 'ArrowLeft') {
        showPrevious()
      }

      if (key === 'ArrowRight') {
        showNext()
      }
    }

    window.addEventListener('keydown', handleKey)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKey)
    }
  }, [onClose, photos.length])

  const handleDownload = async () => {
    try {
      const response = await fetch(photo.imageSrc)
      const blob = await response.blob()
      const objectUrl = URL.createObjectURL(blob)
      const link = document.createElement('a')
      const fileName = photo.imageSrc.split('/').pop() ?? 'quinnty-photo.png'
      link.href = objectUrl
      link.download = fileName
      link.click()
      URL.revokeObjectURL(objectUrl)
    } catch (error) {
      console.error(error)
      window.open(photo.imageSrc, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={photo.caption ?? photo.imageAlt}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <div
        className="relative flex w-full max-w-4xl flex-col items-center gap-4"
        onClick={(event) => {
          event.stopPropagation()
        }}
      >
        <img
          src={photo.imageSrc}
          alt={photo.imageAlt}
          className="max-h-[72vh] w-auto max-w-full rounded-sm object-contain shadow-2xl ring-4 ring-room-gold"
        />
        {photo.caption ? (
          <p className="font-display text-xl text-room-gold">{photo.caption}</p>
        ) : null}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={showPrevious}
            className="inline-flex items-center gap-1 rounded-full border-2 border-room-gold bg-room-teal px-4 py-2 font-display text-sm text-room-gold"
            aria-label="Previous photo"
          >
            <ChevronLeft size={18} aria-hidden="true" />
            Previous
          </button>
          <button
            type="button"
            onClick={() => {
              void handleDownload()
            }}
            className="inline-flex items-center gap-1 rounded-full border-2 border-room-gold bg-room-teal px-4 py-2 font-display text-sm text-room-gold"
          >
            <Download size={18} aria-hidden="true" />
            Download
          </button>
          <button
            type="button"
            onClick={showNext}
            className="inline-flex items-center gap-1 rounded-full border-2 border-room-gold bg-room-teal px-4 py-2 font-display text-sm text-room-gold"
            aria-label="Next photo"
          >
            Next
            <ChevronRight size={18} aria-hidden="true" />
          </button>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-2 right-0 rounded-full border-2 border-room-gold bg-room-teal p-2 text-room-gold"
          aria-label="Close photo"
        >
          <X size={20} aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
