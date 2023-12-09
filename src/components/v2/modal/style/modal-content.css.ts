import { style } from "@vanilla-extract/css"
import { breakpoints } from "../../../../constants/breakpoints"

export const modalContentStyle = style({
  zIndex: 9999,
  boxShadow: `0px 1px 15px rgba(0, 0, 0, 0.05)`,
  width: `100%`,
  display: `flex`,
  height: `100%`,
  flexDirection: `column`,
  backgroundColor: `white`,
  "@media": {
    [breakpoints.md]: {
      maxWidth: `500px`,
      minHeight: `300px`,
      maxHeight: `80vh`,
      height: `auto`,
      borderRadius: `24px`,
      overflowY: `hidden`,
    },
  },
})
