/* eslint-disable @typescript-eslint/no-explicit-any */
declare interface Window {
  gtag: (...args: any[]) => void
  dataLayer: Record<string, any>[]
}

export declare global {
  // eslint-disable-next-line no-var
  var _iub: any
}
