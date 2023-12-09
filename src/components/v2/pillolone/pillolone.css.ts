import { style } from "@vanilla-extract/css"
import { breakpoints } from "../../../constants/breakpoints"

export const container = {
  base: style({
    borderRadius: 9999,
    maxWidth: `756px`,
    width: `100%`,
    padding: `64px 0`,
    transition: `background 0.2s ease-in-out`,
    cursor: `pointer`,
    "@media": {
      [breakpoints.md]: {
        padding: `96px 0`,
      },
    },
  }),
  colorScheme: {
    purple: style({
      background: `#DCC6FD`,
      color: `white`,
      selectors: {
        "&:hover": {
          background: `#A989DB`,
        },
      },
    }),
    orange: style({
      background: `#f6c193`,
      color: `white`,
      selectors: {
        "&:hover": {
          background: `#ee9143`,
        },
      },
    }),
  },
}

export type ContainerColorScheme = keyof typeof container.colorScheme
