import { style } from "@vanilla-extract/css"
import { breakpoints } from "../../../../constants/breakpoints"
import { shadows } from "../../../../constants/temporary"

export const genericCardContainer = style({
  padding: `1rem`,
  borderRadius: `1.5rem`,
  position: `relative`,
  overflow: `hidden`,
  transform: `translateZ(0)`,
  "@media": {
    [breakpoints.md]: {
      padding: `1.5rem`,
    },
  },
})

export const cardBoxShadow = style({
  boxShadow: shadows.loose,
})

export const cardContainerHover = style({
  cursor: `pointer`,
  transition: `all 0.1s ease`,
  selectors: {
    "&:hover": {
      filter: `brightness(0.97)`,
      transform: `scale(1.02)`,
      boxShadow: shadows.loose,
    },
  },
})
