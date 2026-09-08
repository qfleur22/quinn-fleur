'use client'

import { useEffect } from 'react'

export default function ContactRedirectPage() {
  useEffect(() => {
    window.location.replace('/about#contact')
  }, [])

  return null
}
