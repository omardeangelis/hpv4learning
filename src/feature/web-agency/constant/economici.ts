export const serviceListTexts = {
  performance: {
    title: `Performance`,
    items: [`Responsive`, `Ottimizzazione Immagini`, `Animation`],
  },
  design: {
    title: `Design`,
    items: [`Custom design`, `Mobile First`, `UI/UX`],
  },
  optimization: {
    title: `Ottimizzazione`,
    items: [`SEO`, `Lighthouse`, `PWA`],
  },
  tracking: {
    title: `Tracciamento`,
    items: [`GA`, `GTM`, `GSC`],
  },
}

export const serviceListTextsArray = Object.values(serviceListTexts)

export type ServiceListTextsArray = typeof serviceListTextsArray
