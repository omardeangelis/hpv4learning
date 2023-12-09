import { style } from "@vanilla-extract/css"
import { breakpoints } from "../../../../constants/breakpoints"

export const modalHeaderStyle = style({
  display: `flex`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `0 24px`,
  height: `48px`,
  width: `100%`,
  position: `relative`,
  "@media": {
    [breakpoints.md]: {
      height: `56px`,
    },
  },
})

export const modalCloseButtonStyle = style({
  position: `absolute`,
  right: `24px`,
  top: `50%`,
  width: `24px`,
  height: `24px`,
  transform: `translateY(-50%)`,
})

export const modalBackButtonStyle = style({
  position: `absolute`,
  left: `24px`,
  top: `50%`,
  width: `24px`,
  height: `24px`,
  transform: `translateY(-50%)`,
})
