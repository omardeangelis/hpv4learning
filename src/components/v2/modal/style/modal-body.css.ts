import { style } from "@vanilla-extract/css"
import { breakpoints } from "../../../../constants/breakpoints"

export const modalBody = style({
  padding: `0rem 1rem`,
  overflow: `auto`,
  display: `flex`,
  flexDirection: `column`,
  alignItems: `flex-start`,
  position: `relative`,
  "@media": {
    [breakpoints.md]: {
      padding: `0rem 1.5rem`,
    },
  },
  selectors: {
    "&:is(focus)": {
      outline: `none`,
    },
  },
})
