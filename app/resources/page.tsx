import type { Metadata } from 'next'
import { RoomPage, WallCard } from '@/components/home/room-page'
import { ResourceSections } from '@/components/home/resource-sections'
import { ResourceGroup } from '@/models/resource-group'

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Herbalism, disability, trans, and Charlotte resources I like to keep on the shelf.',
}

const groups: ResourceGroup[] = [
  {
    id: 'herbalism',
    title: 'Herbalism things',
    items: [
      {
        name: 'Herbalism notes',
        href: 'https://docs.google.com/document/d/1qabSHxZLsznSrTdi7WFVSe-Am-ZjY53MOYj9PHRYaV8/edit?tab=t.0',
        description: 'A living document of herbal notes, references, and practice.',
      },
    ],
  },
  {
    id: 'charlotte',
    title: 'Charlotte things',
    href: '/charlotte',
    cta: '→',
    items: [
      {
        name: 'Charlotte resource guide',
        href: '/charlotte',
        description:
          'Healthcare, food, housing, clothing, funding, social groups, friendly shops, and more — gathered in one room for folks in Charlotte.',
      },
      {
        name: 'Charlotte food bank list',
        href: 'https://docs.google.com/spreadsheets/d/1JJEE7FSAIjQl46QESpXExwSQr0J_SUbRFqi37jOuY9Q/edit?usp=sharing',
        description: 'A Charlotte-area food pantry and free-food spreadsheet.',
      },
    ],
  },
  {
    id: 'trans',
    title: 'Trans things',
    items: [
      {
        name: 'Transition guide',
        href: '/transition',
        description: 'A practical transition guide for questioning, exploring, and building a life that feels more like yours.',
      },
      {
        name: 'Queer sex and bodily autonomy guide',
        href: 'https://docs.google.com/document/d/1A8GYMMVjo7gPZdA1nGedNwIw0sYjvb9vDvCtCZ3m7iE/edit?tab=t.0',
        description: 'Notes on queer sex, consent, and bodily autonomy.',
      },
      {
        name: 'Know your rights, boundaries, and consent',
        href: 'https://docs.google.com/document/d/1RMwGjV46_AVT6jsHbFsBRZBrfDYr1WWTI_H2bvjBQz8/edit?usp=sharing',
        description: 'A primer on rights, boundaries, and consent.',
      },
    ],
  },
  {
    id: 'disability',
    title: 'Disability things',
    items: [
      {
        name: 'So you think you\'re hypermobile: a guide to EDS',
        href: '/eds',
        description:
          'A guide to Ehlers-Danlos syndrome, hypermobility, and what to do if this sounds like you.',
      },
      {
        name: 'How to create a medical binder',
        href: '/binder',
        description:
          'A system for turning a scattered medical history into something you can actually use at appointments.',
      },
    ],
  },
]

export default function ResourcesPage() {
  return (
    <RoomPage>
      <WallCard title="Resources" wide>
        <p>A handful of guides and notes I like to keep on the shelf.</p>
        <ResourceSections groups={groups} />
      </WallCard>
    </RoomPage>
  )
}
