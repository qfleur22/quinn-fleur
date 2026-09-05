const storeDomain = (process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN ?? '')
  .replace(/^https?:\/\//, '')
  .replace(/\/$/, '')

const mailtoPurchase = ({ subject }: { subject: string }) => {
  return `mailto:quinndelafleur@gmail.com?subject=${encodeURIComponent(subject)}`
}

export const getShopifyCheckoutHref = ({ variantId }: { variantId: string }) => {
  if (!storeDomain || !variantId) {
    return null
  }

  return `https://${storeDomain}/cart/${variantId}:1?checkout`
}

const purchaseHref = ({ variantId, subject }: { variantId: string; subject: string }) => {
  return getShopifyCheckoutHref({ variantId }) ?? mailtoPurchase({ subject })
}

export const getHypermobileGuideHref = () => {
  return purchaseHref({
    variantId: process.env.NEXT_PUBLIC_SHOPIFY_HYPERMOBILE_VARIANT_ID ?? '',
    subject: 'So, You Think You’re Hypermobile',
  })
}

export const getTransitionGuideHref = () => {
  return purchaseHref({
    variantId: process.env.NEXT_PUBLIC_SHOPIFY_TRANSITION_VARIANT_ID ?? '',
    subject: 'So, You Think You’re Trans',
  })
}

export const getAnimeKitHref = () => {
  return purchaseHref({
    variantId: process.env.NEXT_PUBLIC_SHOPIFY_ANIME_KIT_VARIANT_ID ?? '',
    subject: 'Trans+ Representation in Anime panel kit',
  })
}

export const getAnimePresentationHref = () => {
  return purchaseHref({
    variantId: process.env.NEXT_PUBLIC_SHOPIFY_ANIME_PRESENTATION_VARIANT_ID ?? '',
    subject: 'Trans+ Representation in Anime presentation',
  })
}

export const getAnimeNotesHref = () => {
  return purchaseHref({
    variantId: process.env.NEXT_PUBLIC_SHOPIFY_ANIME_NOTES_VARIANT_ID ?? '',
    subject: 'Trans+ Representation in Anime presenter notes',
  })
}

export const getBinderGuideHref = () => {
  return purchaseHref({
    variantId: process.env.NEXT_PUBLIC_SHOPIFY_BINDER_VARIANT_ID ?? '',
    subject: 'Medical Binder Guide + Template',
  })
}

export const getCarePlanGuideHref = () => {
  return purchaseHref({
    variantId: process.env.NEXT_PUBLIC_SHOPIFY_CARE_PLAN_VARIANT_ID ?? '',
    subject: 'Care Plan Guide + Blank Template',
  })
}

export const getCarePlanWorkshopHref = () => {
  return purchaseHref({
    variantId: process.env.NEXT_PUBLIC_SHOPIFY_CARE_PLAN_WORKSHOP_VARIANT_ID ?? '',
    subject: 'Care Plan Creation Workshop Kit',
  })
}
