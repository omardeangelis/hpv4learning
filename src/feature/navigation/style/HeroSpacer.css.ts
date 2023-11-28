import { style } from "@vanilla-extract/css"
import { breakpoints } from "../../../constants/breakpoints"

export const heroSpacer = style({
  paddingBottom: `12rem`,
  marginTop: `-6rem`,
  "@media": {
    [breakpoints.lg]: {
      marginTop: `-8rem`,
      paddingBottom: `15rem`,
    },
  },
})
