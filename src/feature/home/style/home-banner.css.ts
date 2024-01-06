import { style } from "@vanilla-extract/css"
import { breakpoints } from "../../../constants/breakpoints"

export const homeBannerContainer = style({
  display: `flex`,
  justifyContent: `center`,
  alignItems: `center`,
  width: `100%`,
  height: `100%`,
  position: `relative`,
  overflow: `hidden`,
  zIndex: 1,
  borderRadius: 32,
  padding: 24,
  "@media": {
    [breakpoints.md]: {
      minHeight: 506,
      padding: 48,
    },
  },
})
