import type { ErrorContent } from '@/models/error-content'

export const ErrorPanel = ({
  content,
  detail,
  actions,
}: {
  content: ErrorContent
  detail?: string
  actions?: React.ReactNode
}) => {
  return (
    <div className="w-full max-w-md sm:max-w-lg">
      <div className="ornate-gold p-2 sm:p-3">
        <div className="bg-[#f7f0e6] px-5 py-5 text-center sm:px-8 sm:py-7">
          <p className="font-script text-2xl text-room-brown sm:text-3xl">{content.title}</p>
          <p className="mt-1 font-display text-6xl leading-none text-room-teal sm:text-7xl">
            {content.code}
          </p>
          <p className="mt-3 font-gallery text-base leading-relaxed text-black/80 sm:text-lg">
            {content.message}
          </p>
          {detail ? (
            <p className="mt-2 font-mono text-xs text-room-brown/70">Ref: {detail}</p>
          ) : null}
          {actions ? <div className="mt-5 flex flex-wrap justify-center gap-3">{actions}</div> : null}
        </div>
      </div>
    </div>
  )
}
