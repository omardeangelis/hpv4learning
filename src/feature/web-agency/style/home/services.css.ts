import { style } from "@vanilla-extract/css"
import { breakpoints } from "../../../../constants/breakpoints"

export const serviceGrid = style({
  display: `grid`,
  gridTemplateColumns: `repeat(1, 1fr)`,
  gridGap: `.5rem`,
  alignContent: `stretch`,
  "@media": {
    [breakpoints.md]: {
      gridTemplateColumns: `repeat(3, 1fr)`,
    },
  },
})

export const hiddenImgfromMd = style({
  display: `none`,
  "@media": {
    [breakpoints.md]: {
      display: `initial`,
    },
  },
})
