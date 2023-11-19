import { style } from "@vanilla-extract/css"

export const modalWrapperStyle = style({
  position: `fixed`,
  top: `0`,
  left: `0`,
  right: `0`,
  width: `100vw`,
  height: `100lvh`,
  zIndex: 9999,
  display: `flex`,
  justifyContent: `center`,
  alignItems: `center`,
  backgroundColor: `rgba(0, 0, 0, 0.5)`,
  overflow: `hidden`,
})
