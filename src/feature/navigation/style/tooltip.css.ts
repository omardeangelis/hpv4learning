import { style } from "@vanilla-extract/css"

export const tooltipNavItem = style({
  position: `relative`,
  display: `flex`,
  padding: `0 0.5rem 0 0`,
  alignItems: `center`,
  justifyContent: `center`,
  borderRadius: 4,
  height: `24px`,
  transition: `all 0.2s ease-in-out`,
  color: `var(--grey300-v2)`,
  ":hover": {
    padding: `0 0.5rem`,
    background: `var(--grey50-v2)`,
    color: `black`,
    cursor: `pointer`,
  },
})
