import { style } from "@vanilla-extract/css"
import { breakpoints } from "../../../../constants/breakpoints"

export const modalFooter = style({
  display: `flex`,
  justifyContent: `space-between`,
  alignItems: `center`,
  padding: `.5rem 1rem`,
  width: `100%`,
  minHeight: `48px`,
  marginTop: `auto`,
  position: `relative`,
  "@media": {
    [breakpoints.md]: {
      padding: `1rem 1.5rem`,
      minHeight: `56px`,
    },
  },
  selectors: {
    "&:is(focus)": {
      outline: `none`,
    },
  },
})
