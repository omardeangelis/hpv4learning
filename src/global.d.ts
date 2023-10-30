/* eslint-disable @typescript-eslint/no-explicit-any */
declare interface Window {
  gtag: (...args: any[]) => void
  dataLayer: Record<string, any>[]
}

export declare namespace global {
  // eslint-disable-next-line no-var, vars-on-top, no-underscore-dangle
  var _iub: any
  // eslint-disable-next-line no-var, vars-on-top, no-underscore-dangle
  var dataLayer: Record<string, any>[]
}

declare module "react-helmet"
