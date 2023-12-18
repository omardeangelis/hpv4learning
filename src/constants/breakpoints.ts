import { breakpoints as UIBreakpoints } from "old-ui"

export const breakpoints = {
  sm: `screen and (min-width: ${UIBreakpoints.sm}px)` as const,
  md: `screen and (min-width: ${UIBreakpoints.md}px)` as const,
  lg: `screen and (min-width: ${UIBreakpoints.lg}px)` as const,
  xl: `screen and (min-width: ${UIBreakpoints.xl}px)` as const,
  "2xl": `screen and (min-width: ${UIBreakpoints[`2xl`]}px)` as const,
}

export type Breakpoint = keyof typeof breakpoints
