import { style } from "@vanilla-extract/css"

export const navBarContainer = style({
  display: `flex`,
  justifyContent: `center`,
  alignItems: `flex-end`,
  height: `8rem`,
  backgroundColor: `transparent`,
  position: `fixed`,
  top: 0,
  left: 0,
  width: `100%`,
  zIndex: 100,
})

export const navbar = style({
  display: `flex`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `0 1.5rem`,
  width: `100%`,
  height: `6rem`,
})

export const navItem = style({
  display: `flex`,
  alignItems: `center`,
  justifyContent: `center`,
  height: `2.5rem`,
  padding: `0 1rem`,
  textDecoration: `none`,
  borderRadius: 4,
  transition: `all 0.3s ease`,
  color: `var(--grey400-v2)`,
  cursor: `pointer`,
  ":hover": {
    color: `black`,
    backgroundColor: `var(--grey20-v2)`,
  },
})

export const navSaveItem = style({
  cursor: `pointer`,
  ":hover": {
    backgroundColor: `var(--grey20-v2)`,
  },
})
