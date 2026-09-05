import { ResourceGroup } from '@/models/resource-group'

const insta = ({ handle }: { handle: string }) => ({
  label: `@${handle}`,
  href: `https://www.instagram.com/${handle}`,
})

export const charlotteGroups: ResourceGroup[] = [
  {
    id: 'healthcare',
    title: 'Healthcare',
    items: [
      {
        name: 'Charlotte Trans Health',
        href: 'https://charlottetranshealth.org/',
        description:
          'Trans-friendly providers list on their website. PATH provides funding for healthcare and transition costs in Mecklenburg County and surrounding counties, plus a case manager, a weekly resource letter, and access to funding for transition-related costs and general healthcare. A free therapist-led support group meets on the first and third Wednesdays of the month.',
        contacts: [
          { label: 'path@charlottetranshealth.org', href: 'mailto:path@charlottetranshealth.org' },
          { label: 'PATH program', href: 'https://charlottetranshealth.org/providing-access-to-trans-healthcare-path/' },
        ],
      },
      {
        name: 'CLT Mask Bloc',
        description: 'Provides masks and COVID tests.',
      },
      {
        name: 'Trans in the South',
        href: 'https://southernequality.org/transinthesouth/',
        description: 'An extensive map of trans-friendly providers in the South.',
      },
    ],
  },
  {
    id: 'food',
    title: 'Food',
    items: [
      {
        name: 'Charlotte pantry list',
        href: 'https://docs.google.com/spreadsheets/d/1JJEE7FSAIjQl46QESpXExwSQr0J_SUbRFqi37jOuY9Q/edit?usp=sharing',
        description: 'A shared spreadsheet of pantries and food access points around Charlotte.',
      },
      {
        name: 'Nourish Up',
        href: 'https://www.nourishup.org/',
        description:
          'A network of food pantries in the Charlotte area. Delivery at select locations. Some sites let you shop on your own; others are preselected — check which one it is before you go. Spanish interpreters on site at multiple locations. You can get a referral through PATH.',
        contacts: [
          { label: 'path@charlottetranshealth.org', href: 'mailto:path@charlottetranshealth.org' },
        ],
      },
      {
        name: 'The Bulb',
        description: 'Free produce rescue markets around the Charlotte area. Community-led and donation-based.',
      },
      {
        name: 'Food Not Bombs',
        description:
          'Free food and resources every other Sunday in First Ward Park at 5pm.',
      },
    ],
  },
  {
    id: 'housing',
    title: 'Housing',
    items: [
      {
        name: 'Time Out Youth',
        href: 'https://www.timeoutyouth.org/',
        description:
          'For ages 13–24: drop-in social spaces, computers, a biweekly trans support group, case management, and food and housing assistance.',
      },
      {
        name: 'Crisis Assistance Ministry',
        href: 'https://www.crisisassistance.org/',
        description: 'Provides short-term emergency rent assistance.',
      },
    ],
  },
  {
    id: 'clothing',
    title: 'Clothing',
    items: [
      {
        name: 'Crisis Assistance Ministry',
        href: 'https://www.crisisassistance.org/',
        description: 'Has a free store with clothes and household goods.',
      },
      {
        name: 'Hands Down Closet',
        description: 'Folks get together to swap clothes.',
        contacts: [insta({ handle: 'handsdowncloset' })],
      },
    ],
  },
  {
    id: 'name-change',
    title: 'Name change',
    items: [
      {
        name: 'Legal Aid of North Carolina',
        href: 'https://www.legalaidnc.org/',
        description:
          'Attorneys who can guide you through legally changing your name and/or gender markers. The LGBT Chamber of Commerce also offers free virtual informational sessions on name and gender marker changes.',
        contacts: [{ label: '919-861-2095', href: 'tel:9198612095' }],
      },
    ],
  },
  {
    id: 'disability',
    title: 'Disability',
    items: [
      {
        name: 'AccessCLT',
        description: 'Sensory-friendly movies and advocacy.',
        contacts: [insta({ handle: 'access_clt' })],
      },
      {
        name: 'Disability Rights and Resources',
        description: 'Mentorship and life skills for disabled youth, plus a transit navigation program.',
      },
    ],
  },
  {
    id: 'reproductive',
    title: 'Reproductive',
    items: [
      {
        name: 'Reproductive Rights Coalition',
        description:
          'A nonprofit offering community, support, resource navigation, rides to abortion clinics, free supplies, and more.',
      },
      {
        name: 'Charlotte for Choice',
        description: 'Information, resources, and volunteers who can escort you to a reproductive health appointment.',
      },
      {
        name: 'Carolina Abortion Fund',
        href: 'https://www.carolinaabortionfund.org/',
        description: 'Abortion support.',
      },
      {
        name: 'ARC',
        description: 'Reproductive care support.',
      },
      {
        name: 'Brigid Alliance',
        href: 'https://brigidalliance.org/',
        description: 'Full-spectrum abortion support.',
      },
    ],
  },
  {
    id: 'funding',
    title: 'Funding',
    items: [
      {
        name: 'Twirl to the World Assistance Program',
        description:
          'A year-round hardship grant program for LGBTQIA+ people in Mecklenburg County, including food, healthcare, transportation, and more.',
      },
      {
        name: 'Trans Empowerment',
        description:
          'A nonprofit serving trans and gender-diverse people of color. Mutual aid, free self-defense tools, community training, and more.',
      },
      {
        name: 'Queer Liberation Network',
        description: 'Resources, microgrants, and events for the queer community in Charlotte.',
      },
      {
        name: 'State of Emergency',
        description: 'Financial support for Black trans women in crisis.',
      },
    ],
  },
  {
    id: 'social',
    title: 'Social',
    items: [
      {
        name: 'One Voice Chorus',
        href: 'https://onevoicechorus.com/',
        description: 'A local choir for LGBTQIA+ adults and allies.',
      },
      {
        name: 'Charlotte Pride Band',
        description: 'An open music group for LGBTQIA+ musicians, amateur and professional, in the Charlotte area.',
      },
      {
        name: 'Sapphic Book Club',
        description: 'A local sapphic reading community.',
        contacts: [insta({ handle: 'sapphicbookclubclt' })],
      },
      {
        name: 'Sapphic Social',
        description: 'Third Fridays at GWR NoDa.',
      },
      {
        name: 'Sapphic Second Fridays',
        description: 'Second Fridays at Argon.',
      },
      {
        name: 'LGBTQ mixers',
        description: 'Keep an eye out for local mixers around town.',
      },
      {
        name: 'Gaming lounge & queer tabletop',
        description: 'Local gaming lounge hangouts and queer tabletop groups.',
      },
    ],
  },
  {
    id: 'harm-reduction',
    title: 'Harm reduction',
    items: [
      {
        name: 'Queen City Harm Reduction',
        description:
          'Non-carceral support and harm-reduction strategies for people living with addiction, including needle exchanges, clothes, and resources.',
      },
    ],
  },
  {
    id: 'hiv',
    title: 'HIV',
    items: [
      {
        name: 'Carolinas CARE Partnership',
        href: 'https://carolinascare.org/',
        description: 'Housing and substance-abuse recovery support for people affected by HIV.',
      },
      {
        name: 'RAIN',
        href: 'https://raincharlotte.org/',
        description: 'Testing, education, PrEP, and case management for folks with HIV.',
      },
    ],
  },
  {
    id: 'youth',
    title: 'Youth',
    items: [
      {
        name: 'The Relatives',
        href: 'https://www.therelatives.org/',
        description: 'Employment, education, and housing support for ages 16–24, plus a youth crisis center.',
      },
      {
        name: 'Time Out Youth',
        href: 'https://www.timeoutyouth.org/',
        description: 'Support for LGBTQIA+ youth up to age 24.',
      },
      {
        name: 'Umbrella, Inc.',
        description: 'Serving LGBTQIA+ youth in the Lake Norman area.',
        contacts: [{ label: 'umbrellaLKN@gmail.com', href: 'mailto:umbrellaLKN@gmail.com' }],
      },
    ],
  },
  {
    id: 'laser',
    title: 'Laser & electrolysis',
    items: [
      {
        name: 'Vanish Ink',
        description: 'Laser by Brandi and Taylor.',
      },
    ],
  },
  {
    id: 'misc',
    title: 'Misc',
    items: [
      {
        name: '211',
        href: 'https://nc211.org/',
        description: 'A hotline for finding local resources.',
        contacts: [{ label: 'Call 211', href: 'tel:211' }],
      },
      {
        name: 'CLT Mutual Aid',
        href: 'https://cltmutualaid.com',
        description: 'A collection of Charlotte resources.',
      },
      {
        name: 'Housing Justice Coalition',
        description: 'Advocating for housing as a human right.',
      },
      {
        name: 'Working People’s Association of Charlotte',
        description: 'A revolutionary workers organization.',
        contacts: [insta({ handle: 'workingpeopleclt' })],
      },
      {
        name: 'NC Trans Mutual Aid',
        description: 'Dedicated to freeing queer and trans folks from jails and prisons in NC.',
        contacts: [insta({ handle: 'nctransmutualaid' })],
      },
      {
        name: 'CLT Food & Bev Union',
        description: 'Labor organizing for Charlotte food and beverage workers.',
      },
      {
        name: 'Cooperation Charlotte',
        description: 'Local cooperative economics and mutual aid.',
      },
      {
        name: 'Charlotte Urbanists',
        description: 'Advocacy for a more livable, people-centered Charlotte.',
      },
      {
        name: 'PFLAG',
        href: 'https://pflag.org/',
        description: 'Resources and support groups for families and allies.',
      },
      {
        name: 'Freedom Center for Social Justice',
        description: 'Advocacy group.',
      },
      {
        name: 'Carolinas LGBT Chamber of Commerce',
        description: 'A collection of LGBT-friendly businesses.',
      },
      {
        name: 'SEAC',
        description: 'Southeast Asian community and advocacy. Venue host of the quarterly mutual aid fair.',
        contacts: [insta({ handle: 'seacvillage' })],
      },
    ],
  },
  {
    id: 'establishments',
    title: 'Local friendly establishments',
    items: [
      {
        name: 'Hair',
        description:
          'Hair Klaudt, Spellbound Salon, Spacehead Salon, Killer Hair Kristi, Jade Rabbit, StyleBar CLT, Louie at Arrow, Deja Vu Kannapolis.',
      },
      {
        name: 'Laser',
        description: 'Milan, Vanish Ink.',
      },
      {
        name: 'Tattoos',
        description: 'Capital Crow, 510 in NoDa, Green Ghost, Sage & Needle.',
      },
      {
        name: 'Piercings',
        description: 'Sadu.',
      },
      {
        name: 'Stores',
        description: 'Lunchbox Records, Premium Sound.',
      },
      {
        name: 'Electrolysis',
        description: 'Dolce.',
      },
      {
        name: 'Voice training',
        description: 'New Leaf Voice and Prismatic Speech Services.',
        contacts: [
          { label: 'newleafvoice.com', href: 'https://newleafvoice.com' },
          { label: 'prismaticspeech.com', href: 'https://prismaticspeech.com' },
        ],
      },
      {
        name: 'Bars',
        description: 'Hattie’s, Argon, Sidelines, Chaser’s, Petra’s.',
      },
      {
        name: 'Massage',
        description: 'Moon Massage.',
      },
      {
        name: 'Clothing',
        description: 'Nouveau Chapeau, Juicy Body Goddess, Thrift Pony.',
      },
      {
        name: 'Gym',
        description: 'Q Fitness & Wellness.',
      },
      {
        name: 'Churches',
        description: 'Holy Covenant UCC, McGill Baptist Church, First UMC Charlotte, Morningstar Lutheran.',
      },
      {
        name: 'Doctors',
        description:
          'Amity, Avance, Adva Eisenberg, Cramer McCullen (Novant), Reach (fertility), James Muller (Atrium).',
      },
      {
        name: 'Surgeons',
        description:
          'Joel Beck (top); Andrew Zerkle (hysto); Blair Wormer (Novant, FtM top BMI <30, FFS, MtF top); David Matthews (FFS); Ginger Dickerson (hysto); Stephanie Barbadora-Froelich (hysto); Hope Sherie (FtM top BMI <40, MtF top, orchi, body contouring, FFS); Peter J. Capizzi (FtM and MtF top); Brad Figler (MtF bottom surgery including orchi and penile inversion vaginoplasty; Medicaid provider in Chapel Hill).',
      },
    ],
  },
  {
    id: 'national',
    title: 'National trans resources',
    items: [
      {
        name: 'Point of Pride',
        href: 'https://www.pointofpride.org/',
        description:
          'Grants for transition-related costs, a surgery fund, an HRT access fund, an electrolysis support fund, and free binders and shapewear.',
      },
      {
        name: 'Nicolas Gogan Foundation',
        description: 'Mutual aid grants for trans people.',
      },
      {
        name: 'Trans Lifeline',
        href: 'https://translifeline.org/resources',
        description: 'Peer support and resource lists. Binding and tucking guides are on their site.',
        contacts: [
          { label: '877-565-8860', href: 'tel:8775658860' },
          { label: 'Binding guide', href: 'https://translifeline.org/binding-guide' },
          { label: 'Tucking guide', href: 'https://translifeline.org/tucking-guide' },
        ],
      },
      {
        name: 'Campaign for Southern Equality',
        href: 'https://southernequality.org/',
        description: 'Advocacy and resources across the South, including the Trans Youth Emergency Project.',
      },
      {
        name: 'Gender Bands',
        href: 'https://genderbands.org/',
        description: 'Surgery grants and related travel expenses.',
      },
      {
        name: 'Black Transmen Incorporated',
        href: 'https://blacktransmen.org/',
        description: 'Top surgery scholarships specifically for Black and African American trans men.',
      },
      {
        name: 'Queer Trans Project',
        href: 'https://queertransproject.org/',
        description: 'Build a queer kit and get flight assistance.',
      },
      {
        name: 'Coming out support',
        description: 'Guides and support if you need help coming out.',
        contacts: [
          { label: 'heyimtrans.com', href: 'https://heyimtrans.com' },
          { label: 'transyouthequality.org/coming-out', href: 'https://transyouthequality.org/coming-out' },
        ],
      },
      {
        name: 'DIY HRT',
        description: 'Community-maintained information on DIY hormone access.',
        contacts: [
          { label: 'diyhrt.wiki', href: 'https://diyhrt.wiki' },
          { label: 'hrtcafe.net', href: 'https://hrtcafe.net/index.html' },
        ],
      },
      {
        name: 'Resource guides',
        description: 'Broader directories of trans and queer resources.',
        contacts: [
          { label: 'trans-resources.info', href: 'https://trans-resources.info/' },
          { label: 'everywhereisqueer.com', href: 'https://everywhereisqueer.com/' },
        ],
      },
      {
        name: 'Gender Dysphoria Bible',
        href: 'https://genderdysphoria.fyi',
        description: 'A thorough, community-written guide to gender dysphoria.',
      },
      {
        name: 'Surgeon research',
        description: 'Compare surgeons and results through community archives and local lists.',
        contacts: [
          { label: 'topsurgery.net', href: 'https://www.topsurgery.net/' },
          { label: 'Transbucket', href: 'https://www.transbucket.com/' },
        ],
      },
    ],
  },
]
