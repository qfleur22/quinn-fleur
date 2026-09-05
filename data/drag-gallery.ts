import { DragLook } from '@/models/drag-look'
import { DragPhoto } from '@/models/drag-photo'
import { DragVideo } from '@/models/drag-video'

export const dragPhotos: DragPhoto[] = [
  {
    id: 'transcowboy',
    imageSrc: '/gallery/quinnty-transcowboy.png',
    imageAlt:
      'Quinnty Fre$h $exxx in a cowboy hat and patched vest, pointing finger guns at the camera',
    caption: 'Transcowboy',
  },
  {
    id: 'pearl-corset',
    imageSrc: '/gallery/quinn-portrait.png',
    imageAlt:
      'Quinnty Fre$h $exxx in a pearl corset and sequined gloves, holding dollar bills to his temples',
    caption: 'Pearl corset',
  },
]

export const dragVideos: DragVideo[] = []

export const dragLooks: DragLook[] = [
  {
    slug: 'transcowboy',
    lookName: 'Transcowboy',
    imageSrc: '/gallery/quinnty-transcowboy.png',
    imageAlt:
      'Quinnty Fre$h $exxx in a cowboy hat and patched vest, pointing finger guns at the camera',
    description:
      'A solar-punk cowboy king: wide-brim hat, a pink patched vest over a swirl-print shirt, painted mustache, and finger guns. Quinnty wears his activism on his sleeve — literally — with pins and patches covering the vest.',
    socialLabel: 'See this look on Instagram',
    socialHref: 'https://www.instagram.com/thequinntyfresh/',
  },
  {
    slug: 'pearl-corset',
    lookName: 'Pearl corset',
    imageSrc: '/gallery/quinn-portrait.png',
    imageAlt:
      'Quinnty Fre$h $exxx in a pearl corset and sequined gloves, holding dollar bills to his temples',
    description:
      'Jeweled crown, a pearl-lined corset, elbow-length sequin gloves, and a dollar bill in each hand. Glitter, chest tattoos, and a grin — Quinnty as high-camp king.',
    socialLabel: 'See this look on Instagram',
    socialHref: 'https://www.instagram.com/thequinntyfresh/',
  },
]

export const getDragLook = ({ slug }: { slug: string }) => {
  return dragLooks.find((look) => look.slug === slug)
}
