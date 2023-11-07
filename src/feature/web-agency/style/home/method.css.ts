import { style } from "@vanilla-extract/css"
import { breakpoints } from "../../../../constants/breakpoints"

export const methodTextsBox = style({
  position: `static`,
  width: `100%`,
  "@media": {
    [breakpoints.md]: {
      position: `absolute`,
      width: `100%`,
      top: `50%`,
      left: `50%`,
      transform: `translate(-50%, -50%)`,
    },
  },
})

export const methodCardBox = style({
  width: `100%`,
  position: `relative`,
  maxWidth: `calc(100% - 120px)`,
  display: `flex`,
  justifyContent: `center`,
  "@media": {
    [breakpoints.md]: {
      width: `100%`,
      maxWidth: `590px`,
    },
  },
})

export const methodCard = style({
  maxHeight: `512px`,
  height: `312px`,
  width: `100%`,
  "@media": {
    [breakpoints.md]: {
      maxWidth: `452px`,
      maxHeight: `512px`,
      height: `512px`,
      width: `100%`,
    },
  },
})
