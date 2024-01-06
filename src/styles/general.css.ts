import { style } from "@vanilla-extract/css"
import { breakpoints } from "../constants/breakpoints"

export const hideUpToMd = style({
  display: `none`,
  "@media": {
    [breakpoints.md]: {
      display: `initial`,
    },
  },
})

export const hideFromMd = style({
  "@media": {
    [breakpoints.md]: {
      display: `none`,
    },
  },
})
