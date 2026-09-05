import { Facebook, Instagram } from 'lucide-react'

const followLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/thequinntyfresh/',
    icon: 'instagram' as const,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/quinndelafleur/',
    icon: 'facebook' as const,
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@thequinntyfresh',
    icon: 'tiktok' as const,
  },
]

export const DragFollow = () => {
  return (
    <section
      aria-labelledby="follow-quinnty"
      className="rounded-lg border-2 border-room-gold bg-room-teal/10 px-5 py-6 sm:px-8"
    >
      <h2
        id="follow-quinnty"
        className="mb-5 text-center font-display text-2xl text-room-teal sm:text-3xl"
      >
        Follow Quinnty Fre$h $exxx
      </h2>
      <ul className="flex flex-wrap items-center justify-center gap-3">
        {followLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-room-gold bg-room-teal px-5 py-2.5 font-display text-base text-room-gold shadow-md transition hover:bg-[#0f5c53]"
            >
              <FollowIcon icon={link.icon} />
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

const FollowIcon = ({ icon }: { icon: 'instagram' | 'facebook' | 'tiktok' }) => {
  if (icon === 'instagram') {
    return <Instagram size={18} aria-hidden="true" />
  }

  if (icon === 'facebook') {
    return <Facebook size={18} aria-hidden="true" />
  }

  return <TikTokIcon />
}

const TikTokIcon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M14.5 3c.4 2.6 1.9 4.4 4.5 4.7v3.1c-1.5 0-2.9-.5-4.1-1.3v6.7c0 3.4-2.7 6.2-6.2 6.3-3.4 0-6.2-2.8-6.2-6.3S5.3 10 8.7 10c.4 0 .8 0 1.2.1v3.3c-.4-.2-.8-.3-1.2-.3-1.7 0-3 1.4-3 3.1s1.4 3.1 3 3.1 3-1.4 3-3.1V3h2.8Z" />
    </svg>
  )
}
