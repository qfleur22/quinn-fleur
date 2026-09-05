import type { Metadata } from 'next'
import { RoomPage, WallCard } from '@/components/home/room-page'
import { RoomLink } from '@/components/home/room-link'
import { ContactMethods } from '@/components/home/contact-methods'
import { ContactForm } from '@/components/home/contact-form'

export const metadata: Metadata = {
  title: 'About',
  description: 'A little about Quinn Fleur — developer, organizer, and neighbor.',
}

export default function AboutPage() {
  return (
    <RoomPage>
      <WallCard title="About me">
        <div className="relative mx-auto mb-8 h-64 w-48 overflow-hidden ornate-gold p-2 sm:h-80 sm:w-60">
          <img
            src="/gallery/quinn-portrait.png"
            alt="Portrait of Quinn Fleur"
            className="h-full w-full object-cover object-[center_20%]"
          />
        </div>
        <p>
          Hi, I&apos;m Quinten Thistle Fleur, also known as Quinn. I&apos;m a 30-year-old web
          developer, activist, and doer of things. I&apos;ve found that I consistently send people
          resources and things and wanted to have them all in one place for ease of access.
          I&apos;m a polyamorous, non-binary, trans man,{' '}
          <RoomLink href="/drag">drag king</RoomLink>, food insecurity and disability
          advocate. I spend a lot of my time in my garden, cooking and distributing meals and
          groceries to my neighbors and friends, making bad art and shitty poetry, and spending
          time with my friends, ESA (Chloe) and my girlfriend{' '}
          <RoomLink href="/evie">Evie</RoomLink>.
        </p>
        <p>
          My aesthetic is solar-punk whimsy witch. I like gaming,{' '}
          <RoomLink href="/anime">anime</RoomLink>, researching and collecting{' '}
          <RoomLink href="/resources">resources</RoomLink>, science fiction, and working on my
          battle jackets.
        </p>
        <p>
          I also spend a lot of time working on my mental health and trauma. I have developed a
          flow chart site for{' '}
          <RoomLink href="https://dbt.quinnfleur.com">DBT skills</RoomLink> that helps the user
          navigate through skills when they&apos;re in crisis. I spend a lot of time working on
          these skills, optimizing life for my AuDHD brain and shadow work, which I try to share
          with my friends and community.
        </p>
        <p>
          I have <RoomLink href="/eds">Ehlers-Danlos Syndrome</RoomLink> and a variety of co-occurring conditions which may have me
          using different accommodations like a cane or wheelchair depending on the day. 
          I have done a lot of research on my conditions and like sharing that knowledge with others. 
          To that end, I have created a <RoomLink href="/resources">resources</RoomLink> page that I update regularly with my findings.
        </p>

        <section id="contact" className="scroll-mt-[12.5rem] space-y-5 border-t border-room-brown/30 pt-8 sm:scroll-mt-[15rem]">
          <h2 className="font-display text-3xl text-room-teal sm:text-4xl">
            Want to get in touch with me?
          </h2>
          <p>
            You can reach me through any of these, or send a note with
            the form below, which lands in my inbox at quinndelafleur@gmail.com.
          </p>
          <ContactMethods />
          <div className="border-t border-room-brown/30 pt-6">
            <h3 className="mb-4 font-display text-2xl text-room-teal">Leave a note</h3>
            <ContactForm />
          </div>
        </section>
      </WallCard>
    </RoomPage>
  )
}
