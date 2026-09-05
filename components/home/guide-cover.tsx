export const GuideCover = ({
  title,
  tagline = 'from one trans EDSer to another',
}: {
  title: string
  tagline?: string
}) => {
  return (
    <div className="ornate-gold p-2">
      <div className="flex aspect-[3/4] flex-col items-center justify-between bg-gradient-to-b from-[#0f5c53] via-room-teal to-[#0c4a43] px-4 py-6 text-center ring-2 ring-[#6b4f1d]">
        <span className="font-script text-2xl text-room-gold">Quinn Fleur</span>
        <h3 className="font-display text-2xl leading-snug text-room-gold sm:text-3xl">{title}</h3>
        <span className="font-gallery text-sm italic text-[#f7f0e6]">{tagline}</span>
      </div>
    </div>
  )
}
