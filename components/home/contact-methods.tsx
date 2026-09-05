import { Mail, Facebook, Instagram, Github, type LucideIcon } from 'lucide-react'
import { ContactMethod } from '@/models/contact-method'

const methods: Array<ContactMethod & { icon: LucideIcon }> = [
  {
    label: 'Email',
    handle: 'quinndelafleur@gmail.com',
    href: 'mailto:quinndelafleur@gmail.com',
    icon: Mail,
  },
  {
    label: 'Facebook',
    handle: 'quinndelafleur',
    href: 'https://www.facebook.com/quinndelafleur/',
    icon: Facebook,
  },
  {
    label: 'Instagram',
    handle: '@thequinntyfresh',
    href: 'https://www.instagram.com/thequinntyfresh',
    icon: Instagram,
  },
  {
    label: 'GitHub',
    handle: 'qfleur22',
    href: 'https://github.com/qfleur22',
    icon: Github,
  },
]

export const ContactMethods = () => {
  return (
    <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {methods.map((method) => {
        const Icon = method.icon
        const isExternal = method.href.startsWith('http')

        return (
          <li key={method.label}>
            <a
              href={method.href}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noopener noreferrer' : undefined}
              className="group flex flex-col items-center gap-2 rounded-lg p-3 text-center transition hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-room-gold"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-room-gold bg-room-teal text-room-gold shadow-md transition group-hover:bg-[#0f5c53]">
                <Icon size={26} aria-hidden="true" />
              </span>
              <span className="font-display text-sm text-room-teal">{method.label}</span>
              <span className="break-all font-gallery text-xs text-room-brown">{method.handle}</span>
            </a>
          </li>
        )
      })}
    </ul>
  )
}
