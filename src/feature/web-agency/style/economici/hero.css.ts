import { style } from "@vanilla-extract/css"
import { breakpoints } from "../../../../constants/breakpoints"

export const heroTextAlign = style({
  textAlign: `center`,
  "@media": {
    [breakpoints.md]: {
      textAlign: `left`,
    },
  },
})

export const heroImgBox = style({
  maxWidth: `248px`,
  "@media": {
    [breakpoints.md]: {
      maxWidth: `none`,
    },
  },
})
