import { style } from "@vanilla-extract/css"
import { breakpoints } from "../../../constants/breakpoints"

export const servicesFixedContainer = style({
  position: `sticky`,
  top: 0,
  display: `flex`,
  alignItems: `flex-start`,
})

export const academyBigCard = style({
  borderRadius: `1rem 1rem 0 0`,
  [breakpoints.md]: {
    borderRadius: `2rem`,
  },
})

export const webAgencyBigCard = style({
  borderRadius: `0 0 1rem 1rem`,
  [breakpoints.md]: {
    borderRadius: `2rem`,
  },
})

export const academyRoundedAvatar = style({
  borderRadius: `50%`,
  display: `flex`,
  alignItems: `center`,
  justifyContent: `center`,
  width: `100%`,
  maxWidth: 108,
  height: 108,
  "@media": {
    [`${breakpoints.md}`]: {
      maxWidth: 288,
      height: 288,
    },
  },
})

export const transformXBox = style({
  transform: `translateX(-25%)`,
})

export const academySectionGrid = style({
  display: `grid`,
  width: `100%`,
  gridTemplateColumns: `repeat(3, 1fr)`,
  "@media": {
    [`${breakpoints.md}`]: {
      gridTemplateColumns: `repeat(12, 1fr)`,
      gridTemplateRows: `repeat(3, auto)`,
      justifyItems: `end`,
    },
  },
})

export const box1 = style({
  width: `100%`,

  background: `var(--purple20-v2)`,
  "@media": {
    [`${breakpoints.md}`]: {
      gridColumn: `1 / 6`,
      gridRow: `1 / 3`,
    },
  },
})

export const box2 = style({
  width: `100%`,
  background: `var(--purple50-v2)`,
  "@media": {
    [`${breakpoints.md}`]: {
      gridColumn: `3 / 10`,
      gridRow: `1 / 3`,
    },
  },
})

export const box3 = style({
  width: `100%`,

  background: `var(--purple20-v2)`,
  "@media": {
    [`${breakpoints.md}`]: {
      gridColumn: `8 / -1`,
      gridRow: `1 / 3`,
    },
  },
})

export const courseHomeCard = style({
  padding: `1.5rem`,
  borderRadius: `1rem`,
  position: `relative`,
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `space-between`,
  width: `100%`,
  overflow: `hidden`,
  minHeight: 322,

  "@media": {
    [`${breakpoints.md}`]: {
      maxWidth: 368,
    },
  },
})

export const courseHomeCardImage = style({
  position: `absolute`,
  bottom: 24,
  right: 24,
  width: `100%`,
  maxHeight: 140,
  maxWidth: 140,
  overflow: `hidden`,
})
