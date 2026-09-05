import Link from 'next/link'

const sizeClasses: Record<string, string> = {
  sm: 'w-[9.5rem] sm:w-[11rem]',
  md: 'w-[12rem] sm:w-[14.5rem]',
  lg: 'w-[15rem] sm:w-[18.5rem]',
  sq: 'w-[11rem] sm:w-[13.5rem]',
  wide: 'w-[14rem] sm:w-[17.5rem]',
}

const aspectClasses: Record<string, string> = {
  sm: 'aspect-[3/4]',
  md: 'aspect-[3/4]',
  lg: 'aspect-[3/4]',
  sq: 'aspect-square',
  wide: 'aspect-[4/3]',
}

export const OrnateFrame = ({
  title,
  href,
  cta,
  rotate,
  size,
  children,
}: {
  title: string
  href?: string
  cta?: string
  rotate: number
  size: string
  children: React.ReactNode
}) => {
  const frameClass = `group relative block ${sizeClasses[size]} ${aspectClasses[size]} ornate-gold p-[0.7rem] transition-transform duration-500 hover:z-10 hover:scale-[1.03] focus-visible:z-10 focus-visible:scale-[1.03] focus-visible:outline-none`

  const inner = (
    <>
      <Filigree />
      <div className="relative h-full w-full overflow-hidden bg-[#2b211c] ring-2 ring-[#6b4f1d]">
        <div className="relative h-full w-full transition duration-500 group-hover:scale-105 group-hover:blur-[3px] group-focus-visible:scale-105 group-focus-visible:blur-[3px]">
          {children}
        </div>
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-black/50 px-4 text-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100">
          <p className="font-gallery text-2xl text-room-gold sm:text-3xl">{title}</p>
          {cta ? (
            <span className="inline-block rounded-full border border-room-gold bg-room-teal px-4 py-1.5 font-display text-sm text-room-gold shadow-md">
              {cta}
            </span>
          ) : null}
        </div>
      </div>
      <span className="absolute -top-3 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-room-gold shadow-[0_2px_4px_rgba(0,0,0,0.35)]" />
    </>
  )

  if (href) {
    return (
      <Link href={href} style={{ transform: `rotate(${rotate}deg)` }} className={frameClass}>
        {inner}
      </Link>
    )
  }

  return (
    <div style={{ transform: `rotate(${rotate}deg)` }} className={frameClass} tabIndex={0}>
      {inner}
    </div>
  )
}

const Filigree = () => {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full text-[#6b4f1d]"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M6 14 C10 8 14 6 20 6 M6 14 C8 20 6 24 6 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M94 14 C90 8 86 6 80 6 M94 14 C92 20 94 24 94 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M6 86 C10 92 14 94 20 94 M6 86 C8 80 6 76 6 80"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M94 86 C90 92 86 94 80 94 M94 86 C92 80 94 76 94 80"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  )
}
