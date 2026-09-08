const headingScrollClass = 'scroll-mt-[12.5rem] sm:scroll-mt-[15rem]'

export interface DirectoryTopic {
  id: string
  label: string
}

export const CompleteDirectory = ({ topics }: { topics: DirectoryTopic[] }) => {
  return (
    <section
      id="complete-directory"
      className={`space-y-4 border-t border-room-brown/30 pt-8 ${headingScrollClass}`}
    >
      <h2 className="font-display text-3xl text-room-teal sm:text-4xl">
        Looking for something specific?
      </h2>
      <p>
        Jump to a topic, or keep reading. Each section collects the organizations, programs, and
        notes that belong together.
      </p>
      <ul className="grid gap-2 sm:grid-cols-2">
        {topics.map((topic) => (
          <li key={topic.id}>
            <a
              href={`#${topic.id}`}
              className="font-display text-lg text-black underline decoration-room-gold underline-offset-4 transition hover:text-room-teal"
            >
              {topic.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export const ResourceListing = ({
  name,
  href,
  description,
}: {
  name: string
  href?: string
  description: string[]
}) => {
  return (
    <article className="rounded-md border border-room-brown/20 bg-[#efe6d6]/70 px-4 py-4">
      <p>
        {href ? (
          <a
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="font-display text-xl font-bold text-black underline decoration-room-gold underline-offset-4 transition hover:text-room-teal"
          >
            {name}
          </a>
        ) : (
          <span className="font-display text-xl font-bold text-black">{name}</span>
        )}
      </p>
      {description.length > 0 ? (
        <div className="mt-2 space-y-3 text-base leading-relaxed text-black/80">
          {description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      ) : null}
    </article>
  )
}

export const TopicHeading = ({
  text,
  id,
}: {
  text: string
  id?: string
}) => {
  return (
    <h2
      id={id}
      className={`mt-8 font-display text-2xl text-room-teal sm:text-3xl ${id ? headingScrollClass : ''}`}
    >
      {text}
    </h2>
  )
}
