const isBrowser = typeof window !== `undefined`

export const triggerGACustomEvent: (
  param: Record<string, string>,
  options?: { hasLocation?: boolean }
) => () => void = (params, options) => () => {
  if (!isBrowser) return
  const { href } = window.location
  const event = options?.hasLocation ? { ...params, from: href } : params
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push(event)
}
