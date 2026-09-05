export interface GalleryPiece {
  id: string
  title: string
  imageSrc?: string
  imageAlt?: string
  href?: string
  cta?: string
  rotate: number
  size: 'sm' | 'md' | 'lg' | 'sq' | 'wide'
  placeholder: boolean
}
