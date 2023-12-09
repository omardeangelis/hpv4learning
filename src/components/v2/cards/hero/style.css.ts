import { style } from "@vanilla-extract/css"
import { breakpoints } from "../../../../constants/breakpoints"
import { shadows } from "../../../../constants/temporary"

export const cardContainer = style({
  padding: `1rem`,
  boxShadow: shadows.loose,
  borderRadius: `1.5rem`,
  "@media": {
    [breakpoints.md]: {
      padding: `3rem`,
    },
  },
})
