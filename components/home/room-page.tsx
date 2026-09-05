import { Bookshelf } from '@/components/home/bookshelf'
import { LivingRoom } from '@/components/home/living-room'

export const RoomPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="wall-paper flex min-h-screen flex-col overflow-x-hidden text-black">
      <Bookshelf />
      <div className="flex-1">{children}</div>
      <LivingRoom />
    </div>
  )
}

export const WallCard = ({
  title,
  children,
  wide = false,
}: {
  title: string
  children: React.ReactNode
  wide?: boolean | 'xl'
}) => {
  const widthClass = wide === 'xl' ? 'max-w-4xl' : wide ? 'max-w-3xl' : 'max-w-2xl'

  return (
    <article className={`mx-auto px-4 py-14 sm:px-6 ${widthClass}`}>
      <div className="ornate-gold p-3">
        <div className="bg-[#f7f0e6] px-6 py-8 sm:px-10 sm:py-10">
          <h1 className="mb-6 font-display text-4xl text-room-teal sm:text-5xl">{title}</h1>
          <div className="space-y-5 font-gallery text-lg leading-relaxed text-black">
            {children}
          </div>
        </div>
      </div>
    </article>
  )
}
