import Link from 'next/link'

export const RoomLink = ({
  href,
  children,
  isExternal = false,
}: {
  href: string
  children: React.ReactNode
  isExternal?: boolean
}) => {
  const className =
    'text-room-teal underline decoration-room-gold underline-offset-4'
  const isRemote =
    isExternal || href.startsWith('http') || href.startsWith('mailto:')

  if (isRemote) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}
