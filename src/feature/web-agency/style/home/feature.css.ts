import { style } from "@vanilla-extract/css"
import { breakpoints } from "../../../../constants/breakpoints"

export const featureCard = style({
  maxHeight: `260px`,
  minHeight: `260px`,
  display: `flex`,
  flexDirection: `column`,
  height: `100%`,
  width: `100%`,
  "@media": {
    [breakpoints.md]: {
      maxHeight: `455px`,
      minHeight: `455px`,
    },
  },
})
