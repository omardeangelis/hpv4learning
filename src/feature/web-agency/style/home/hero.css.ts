import { style } from "@vanilla-extract/css"
import { breakpoints } from "../../../../constants/breakpoints"

export const heroCard = style({
  display: `flex`,
  flexDirection: `column`,
  "@media": {
    [breakpoints.md]: {
      maxHeight: `calc( 100vh - 128px )`,
      minHeight: `calc( 100vh - 128px )`,
    },
  },
})

export const heroLayout = style({
  display: `flex`,
  flexDirection: `column`,
  flex: 1,
  rowGap: `24px`,
  "@media": {
    [breakpoints.md]: {
      flexDirection: `row`,
      justifyContent: `space-between`,
      alignItems: `stretch`,
      rowGap: `unset`,
      columnGap: 24,
    },
  },
})

export const heroTexts = style({
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `space-between`,
  flex: 1,
  "@media": {
    [breakpoints.md]: {
      maxWidth: `563px`,
    },
  },
})

export const awarenessTexts = style({
  display: `none`,
  "@media": {
    [breakpoints.md]: {
      display: `flex`,
    },
  },
})

export const cardBlock = style({
  display: `grid`,
  gridTemplateRows: `1fr 1fr`,
  rowGap: 24,
  flex: 1,
})

export const imageBox = style({
  width: `36px`,
  height: `36px`,
  display: `flex`,
  alignItems: `center`,
  justifyContent: `center`,
  borderRadius: `50%`,
  overflow: `hidden`,
  "@media": {
    [breakpoints.md]: {
      width: `56px`,
      height: `56px`,
    },
  },
})

export const topCardImage = style({
  transform: `translateX(33%)`,
})
