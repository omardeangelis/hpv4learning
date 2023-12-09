import { style } from "@vanilla-extract/css"
import { breakpoints } from "../../../../constants/breakpoints"

export const serviceSpacer = style({
  padding: `128px 0 64px 0`,
  "@media": {
    [breakpoints.md]: {
      padding: `256px 0 128px 0`,
    },
  },
})
