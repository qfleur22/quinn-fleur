'use client'

import Link from 'next/link'

const buttonClass =
  'inline-flex items-center justify-center rounded-full border-2 border-room-gold bg-room-teal px-5 py-2.5 font-display text-sm text-room-gold transition hover:bg-[#0f5c53] sm:text-base'

const secondaryClass =
  'inline-flex items-center justify-center rounded-full border-2 border-room-brown bg-transparent px-5 py-2.5 font-display text-sm text-room-brown transition hover:bg-room-brown/10 sm:text-base'

export const ErrorActions = ({
  showBack = false,
  showRetry = false,
  onRetry,
}: {
  showBack?: boolean
  showRetry?: boolean
  onRetry?: () => void
}) => {
  return (
    <>
      <Link href="/" className={buttonClass}>
        Go home
      </Link>
      {showBack ? (
        <button type="button" onClick={() => window.history.back()} className={secondaryClass}>
          Go back
        </button>
      ) : null}
      {showRetry && onRetry ? (
        <button type="button" onClick={onRetry} className={secondaryClass}>
          Try again
        </button>
      ) : null}
    </>
  )
}
