import { style } from "@vanilla-extract/css"

export const modalOverlayStyle = style({
  position: `absolute`,
  top: 0,
  left: 0,
  right: 0,
  height: `100lvh`,
  width: `100vw`,
  backgroundColor: `rgba(208, 213, 221, 0.9)`,
  opacity: `0.95`,
})
