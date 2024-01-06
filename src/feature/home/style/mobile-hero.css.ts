import { style } from "@vanilla-extract/css"

export const mobileHero = style({
  height: `100vh`,
  position: `relative`,
  paddingTop: `8rem`,
})

export const mobileHeroCard = style({
  position: `absolute`,
  zIndex: 5,
  bottom: 0,
  right: 0,
})
export const mobileHeroCardOverlay = style({
  background: `rgba(105, 105, 105, 0.5)`,
  filter: `blur(4px)`,
  borderRadius: `16px 0 0 16px`,
  zIndex: 4,
  width: `100%`,
  height: `100%`,
})
