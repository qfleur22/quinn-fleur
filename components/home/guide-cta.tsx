export const GuideCta = ({
  href,
  label,
  isDominant = false,
}: {
  href: string
  label: string
  isDominant?: boolean
}) => {
  const sizeClass = isDominant
    ? 'px-7 py-3.5 text-lg sm:px-8 sm:py-4 sm:text-2xl'
    : 'px-6 py-3 text-base sm:text-lg'

  const isRemote = href.startsWith('http') || href.startsWith('mailto:')

  return (
    <p className="text-center">
      <a
        href={href}
        target={isRemote ? '_blank' : undefined}
        rel={isRemote ? 'noopener noreferrer' : undefined}
        className={`inline-flex max-w-full items-center justify-center rounded-full border-2 border-room-gold bg-room-teal text-center font-display text-room-gold shadow-md transition hover:bg-[#0f5c53] ${sizeClass}`}
      >
        {label}
      </a>
    </p>
  )
}
