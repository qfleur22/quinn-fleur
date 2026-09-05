import { StoreProduct } from '@/models/store-product'

export const storeProducts: StoreProduct[] = [
  {
    slug: 'so-you-think-youre-hypermobile',
    name: 'So, You Think You’re Hypermobile?',
    summary:
      'A practical guide to hypermobility, Ehlers-Danlos syndrome, and figuring out what the hell your body is doing.',
    href: '/store/so-you-think-youre-hypermobile',
    tagline: 'from one trans EDSer to another',
  },
  {
    slug: 'so-you-think-youre-trans',
    name: 'So, You Think You’re Trans?',
    summary:
      'A practical transition guide for questioning, exploring, and building a life that feels more like yours.',
    href: '/transition',
    tagline: 'from one trans person to another',
  },
  {
    slug: 'trans-representation-in-anime',
    name: 'Trans+ Representation in Anime',
    summary:
      'Explore the characters, stories, history, and wonderfully complicated relationship between anime and gender.',
    href: '/anime',
    tagline: 'a guide, a database, a panel',
  },
  {
    slug: 'trans-representation-in-anime-panel-kit',
    name: 'Trans Representation in Anime Panel Kit',
    summary:
      'A ready-to-present panel kit with the PowerPoint, presenter notes, and research spreadsheet already built.',
    href: '/anime-panel',
    tagline: 'slides, notes, research',
  },
  {
    slug: 'medical-binder',
    name: 'How to Create a Medical Binder',
    summary:
      'Build a medical binder that helps you explain years of symptoms, diagnoses, medications, testing, and treatment.',
    href: '/binder',
    tagline: 'your history, in one place',
  },
  {
    slug: 'care-plan',
    name: 'How to Make a Care Plan',
    summary:
      'A practical care-plan system for neurodivergence, chronic illness, disability, mental health, overwhelm, and everyday support.',
    href: '/care-plan',
    tagline: 'a manual for being you',
  },
  {
    slug: 'care-plan-workshop-kit',
    name: 'Care Plan Creation Workshop Kit',
    summary:
      'A ready-to-facilitate workshop so your community can make care plans—curriculum, prompts, and facilitation structure included.',
    href: '/care-plan-workshop',
    tagline: 'ready to facilitate',
  },
]

export const getStoreProduct = ({ slug }: { slug: string }) => {
  return storeProducts.find((product) => product.slug === slug)
}
