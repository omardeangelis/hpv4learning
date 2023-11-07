import { style } from "@vanilla-extract/css"

export const cardImageBox = style({
  display: `flex`,
  justifyContent: `center`,
  alignItems: `center`,
  width: `100%`,
})

export const absoluteImageBox = style({
  position: `absolute`,
  bottom: `0`,
  left: `0`,
  right: `0`,
  display: `flex`,
  alignItems: `center`,
  justifyContent: `center`,
  width: `100%`,
  height: `100%`,
  overflow: `hidden`,
})
