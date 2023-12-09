export const breakpoints = {
  sm: `screen and (min-width: 375px)` as const,
  md: `screen and (min-width: 768px)` as const,
  lg: `screen and (min-width: 1024px)` as const,
  xl: `screen and (min-width: 1280px)` as const,
  "2xl": `screen and (min-width: 1680px)` as const,
}

export type Breakpoint = keyof typeof breakpoints
