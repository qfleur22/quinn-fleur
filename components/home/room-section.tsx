export const RoomSection = ({
  title,
  children,
  id,
}: {
  title: string
  children: React.ReactNode
  id?: string
}) => {
  return (
    <section id={id} className="space-y-4 border-l-4 border-room-gold pl-4 sm:pl-5">
      <h2 className="font-display text-2xl text-room-teal sm:text-3xl">{title}</h2>
      {children}
    </section>
  )
}

export const BulletList = ({ items }: { items: string[] }) => {
  return (
    <ul className="list-disc space-y-1 pl-6">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}
