import { createTheme } from "@mui/material/styles/"

const theme = {
  palette: {
    primary: {
      main: `#7026BA`,
      100: `rgba(98, 0, 238, 0.05)`,
    },
    secondary: {
      main: `#E7A7FF`,
    },
    tertiary: {
      main: `#F3DFFB`,
    },
    optional: {
      main: `#6200EE`,
    },
    // Official Theme Colors - Need to be full implemented
    gray: {
      50: `#FCFCFC`,
      100: `#FAFAFA`,
      200: `#F8F8F8`,
      300: `#E4E7EC`,
      400: `#D0D5DD`,
      500: `#6C757D`,
      600: `#4B4B4B`,
      700: `#343A40`,
      800: `#000000`,
    },
    purple: {
      A100: `rgba(98, 0, 238, 0.025)`,
      A200: `rgba(98, 0, 238, 0.05)`,
      200: `#E9E3FF`,
      300: `#E7A7FF`,
      400: `#8769FE`,
      500: `#A435F0`,
      800: `#341268`,
      900: `#11081F`,
      G200: `linear-gradient(180deg, #E9E3FF, white )`,
      G800: `linear-gradient(180deg, #341268, #8769FE)`,
    },
    orange: {
      400: `#FF7D34`,
    },
    yellow: {
      400: `#FFEB34`,
    },
    blue: {
      400: `#5865F2`,
    },
    red: {
      300: `#FF3434`,
      400: `#f00`,
    },
    green: {
      300: `#1AC99F`,
    },
  },
  typography: {
    allVariants: {
      fontFamily: [
        `Poppins`,
        `Roboto`,
        `"Helvetica Neue"`,
        `Arial`,
        `sans-serif`,
      ].join(`,`),
    },
    h3: {
      margin: `-3px`,
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        maxWidthLg: {
          maxWidth: `1440px !important`,
          width: `calc(100% - 24px)`,
          padding: `0px`,
          "@media screen and (min-width: 768px)": {
            width: `calc(100% - 24px)`,
          },
        },
        maxWidthMd: {
          maxWidth: `1153px !important`,
          width: `calc(100% - 24px)`,
          padding: `0px`,
          "@media screen and (min-width: 768px)": {},
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        sizeSmall: {
          height: `24px`,
          minWidth: `24px`,
          padding: `0px 16px`,
          borderRadius: `4px`,
          textTransform: `unset`,
        },
        sizeMedium: {
          height: `24px`,
          minWidth: `24px`,
          borderRadius: `4px`,
          padding: `0px 16px`,
          textTransform: `unset`,
          fontSize: `14px`,
          "@media screen and (min-width: 768px)": {
            height: `36px`,
            minWidth: `36px`,
            borderRadius: `6px`,
          },
        },
        sizeLarge: {
          height: `48px`,
          minWidth: `48px`,
          padding: `0px 16px`,
          borderRadius: `6px`,
          textTransform: `unset`,
          fontSize: `16px`,
        },
        containedPrimary: {
          background: `#8769FE`,
          borderColor: `#8769FE`,
          color: `white`,
          ":hover": {
            background: `#A435F0`,
            borderColor: `#A435F0`,
          },
        },
        outlinedPrimary: {
          borderColor: `#8769FE`,
          color: `#8769FE`,
          ":hover": {
            borderColor: `#A435F0`,
            color: `#A435F0`,
          },
        },
        containedSecondary: {
          background: `#E9E3FF`,
          borderColor: `#000`,
          color: `#000`,
          ":hover": {
            background: `white`,
            borderColor: `white`,
          },
        },
        textPrimary: {
          borderColor: `transparent`,
          color: `#8769FE`,
          paddingLeft: `0px`,
          ":hover": {
            color: `#A435F0`,
          },
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1024,
      xl: 1440,
    },
  },
} as const

type CustomTheme = {
  [Key in keyof typeof theme]: typeof theme[Key]
}
declare module "@mui/material/styles/createTheme" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Theme extends CustomTheme {}
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface ThemeOptions extends CustomTheme {}
}

export default createTheme(theme)
