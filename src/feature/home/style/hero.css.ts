import { style } from "@vanilla-extract/css"
import { breakpoints } from "../../../constants/breakpoints"

export const customHeroButton = style({
  display: `flex`,
  justifyContent: `space-between`,
  alignItems: `center`,
  width: `100%`,
  height: 52,
  borderRadius: 8,
  overflow: `hidden`,
  cursor: `pointer`,
  transition: `all 0.3s ease`,
  zIndex: 8,
  ":hover": {
    boxShadow: `inset 6px 6px 10px 0 rgba(0, 0, 0, 0.2), inset -6px -6px 10px 0 rgba(255, 255, 255, 0.5)`,
  },
  "@media": {
    [`${breakpoints.md}`]: {
      maxWidth: 320,
      height: 84,
    },
  },
})

export const leftButtonSide = style({
  display: `flex`,
  alignItems: `center`,
  justifyContent: `flex-start`,
  width: `100%`,
  paddingLeft: 16,
  height: 52,
  backgroundColor: `#fff`,
  "@media": {
    [`${breakpoints.md}`]: {
      width: `100%`,
      height: 84,
    },
  },
})

export const rightButtonSide = style({
  width: 52,
  height: 52,
  position: `relative`,
  display: `flex`,
  alignItems: `center`,
  justifyContent: `center`,
  transition: `all 0.3s ease`,
  "@media": {
    [`${breakpoints.md}`]: {
      minWidth: 84,
      height: 84,
    },
  },
})

export const isAcademyButton = style({
  backgroundColor: `var(--purple20-v2)`,
  color: `black`,
})

export const isWebAgencyButton = style({
  backgroundColor: `var(--orange20-v2)`,
  color: `black`,
})

export const isFormazioneButton = style({
  backgroundColor: `var(--green20-v2)`,
  color: `black`,
})

export const rightButtonHiddenLayer = style({
  ":after": {
    content: ``,
    position: `absolute`,
    bottom: 0,
    left: 0,
    width: `100%`,
    height: `100%`,
    transform: `scaleY(0)`,
    transformOrigin: `bottom center`,
    zIndex: 2,
    transition: `transform 0.5s ease`,
  },
  selectors: {
    [`${customHeroButton}:hover &::after`]: {
      transform: `scaleY(1)`,
    },
    [`${isAcademyButton} &::after`]: {
      backgroundColor: `var(--orange20-v2)`,
    },
    [`${isWebAgencyButton} &::after`]: {
      backgroundColor: `var(--yellow20-v2)`,
    },
    [`${isFormazioneButton} &::after`]: {
      backgroundColor: `var(--blue20-v2)`,
    },
  },
})

export const heroCardDeafult = style({
  display: `flex`,
  flexDirection: `column`,
  alignItems: `flex-start`,
  justifyContent: `flex-end`,
  width: `100%`,
  transition: `all 0.4s ease`,
})

export const heroCardOpen = style({
  padding: `72px`,
})

export const heroCardClosed = style({
  padding: `72px 24px`,
})
