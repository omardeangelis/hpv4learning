import { style } from "@vanilla-extract/css"
import { breakpoints } from "../../../constants/breakpoints"

export const navBarContainer = style({
  display: `flex`,
  justifyContent: `center`,
  alignItems: `flex-end`,
  backgroundColor: `transparent`,
  position: `fixed`,
  height: `6rem`,
  top: 0,
  left: 0,
  width: `100%`,
  zIndex: 100,
  "@media": {
    [breakpoints.md]: {
      height: `8rem`,
    },
  },
})

export const navbar = style({
  display: `flex`,
  justifyContent: `center`,
  alignItems: `center`,
  position: `relative`,
  padding: `0 1.5rem`,
  width: `100%`,
  height: `4rem`,
  "@media": {
    [breakpoints.md]: {
      height: `6rem`,
    },
  },
})

export const navItem = style({
  display: `none`,
  "@media": {
    [breakpoints.md]: {
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
    },
  },
})

export const navSaveItem = style({
  cursor: `pointer`,
  ":hover": {
    backgroundColor: `var(--grey20-v2)`,
  },
})

export const btnBox = style({
  display: `none`,
  "@media": {
    [breakpoints.md]: {
      display: `block`,
    },
  },
})

export const sidebaBox = style({
  display: `block`,
  "@media": {
    [breakpoints.md]: {
      display: `none`,
    },
  },
})
