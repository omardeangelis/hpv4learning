import { style } from "@vanilla-extract/css"
import { breakpoints } from "../../../../constants/breakpoints"

export const sidebarContainer = style({
  position: `fixed`,
  left: 0,
  width: `100%`,
})

export const sidebarStyle = style({
  position: `fixed`,
  top: 0,
  right: 0,
  bottom: 0,
  width: `100vw`,
  backgroundColor: `white`,
  display: `block`,
  "@media": {
    [breakpoints.md]: {
      display: `none`,
    },
  },
})

export const sidebarContent = style({
  display: `block`,
  position: `relative`,
  width: `100%`,
  zIndex: 100,
  height: `100%`,
  paddingTop: `4rem`,
  "@media": {
    [breakpoints.md]: {
      display: `none`,
    },
  },
})

export const sidebarButton = style({
  position: `absolute`,
  top: `50%`,
  right: 16,
  zIndex: 101,
  transform: `translateY(-50%)`,
})

export const sidebarLinkItem = style({
  display: `block`,
  padding: `0.5rem 0`,
  textDecoration: `none`,
  ":hover": {
    textDecoration: `underline`,
  },
})
