export interface ErrorContent {
  code: string
  title: string
  message: string
}

export const errorContents = {
  '403': {
    code: '403',
    title: 'Private room',
    message: "You don't have access to this corner of the house.",
  },
  '404': {
    code: '404',
    title: 'Lost in the house',
    message: "That page isn't on any shelf. Maybe it was shelved somewhere else?",
  },
  '500': {
    code: '500',
    title: 'Something fell over',
    message: 'An unexpected snag happened while loading this page.',
  },
  '503': {
    code: '503',
    title: 'Room closed briefly',
    message: "We're tidying up. Please come back in a little while.",
  },
} as const satisfies Record<string, ErrorContent>

export type ErrorContentKey = keyof typeof errorContents

export function getErrorContent({ key }: { key: ErrorContentKey }): ErrorContent {
  return errorContents[key]
}
