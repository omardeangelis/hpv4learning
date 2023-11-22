import { RecipeVariants, recipe } from "@vanilla-extract/recipes"

export const avatarBox = recipe({
  base: {
    userSelect: `none`,
    display: `flex`,
    alignItems: `center`,
    justifyContent: `center`,
  },
  variants: {
    shape: {
      circle: {
        borderRadius: `50%`,
      },
      square: {},
    },
  },
})

export type AvatarBoxVariants = RecipeVariants<typeof avatarBox>
