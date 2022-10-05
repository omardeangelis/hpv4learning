/* eslint-disable @typescript-eslint/no-explicit-any */
declare interface Window {
  gtag: (...args: any[]) => void;
  dataLayer: Record<string, any>[];
}
