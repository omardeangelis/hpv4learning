import { style } from "@vanilla-extract/css"
import { breakpoints } from "../../../../constants/breakpoints"

export const creativityCardBlock = style({
  display: `grid`,
  gridTemplateRows: `1fr 1fr`,
  rowGap: 16,
  flex: 1,
})

export const creativityCustomCard = style({
  minHeight: `246px`,
  "@media": {
    [breakpoints.md]: {
      minHeight: `306px`,
    },
  },
})

export const chipCustomBorderRadius = style({
  borderRadius: `4px !important`,
})

export const semiEllipse = style({
  width: `120%`,
  height: `100px`,
  borderRadius: `50% 50% 0 0 / 100% 100% 0 0`,
  "@media": {
    [breakpoints.md]: {
      height: `200px`,
    },
  },
})

export const semiTopEllipse = style({
  position: `absolute`,
  top: `-170px`,
  left: `0`,
  right: `0`,
  width: `150%`,
  height: `170px`,
  borderRadius: `50% 50% 0 0 / 100% 100% 0 0`,
  "@media": {
    [breakpoints.md]: {
      top: `-200px`,
      height: `200px`,
    },
    [breakpoints.lg]: {
      top: `-300px`,
      height: `300px`,
    },
  },
})

export const hiddenCardBox = style({
  display: `none`,
  "@media": {
    [breakpoints.md]: {
      display: `grid`,
    },
  },
})
