import { isProduction } from "../constants"

export const isBrowser = typeof window !== `undefined`

export const triggerGACustomEvent: (
  param: Record<string, string | number | undefined | null>,
  options?: { hasLocation?: boolean }
) => () => void = (params, options) => () => {
  if (!isBrowser) return
  const { href } = window.location
  // eslint-disable-next-line no-console
  if (!isProduction) console.log(params)
  const event = options?.hasLocation ? { ...params, from: href } : params
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push(event)
}
