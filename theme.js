import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#7026BA",
      100: "rgba(98, 0, 238, 0.05)",
    },
    secondary: {
      main: "#E7A7FF",
    },
    tertiary: {
      main: "#F3DFFB",
    },
    optional: {
      main: "#6200EE",
    },
    //Official Theme Colors - Need to be full implemented
    gray: {
      300: "#E4E7EC",
      400: "#D0D5DD",
      500: "#6C757D",
      600: "#4B4B4B",
      700: "#343A40",
      800: "#000000",
    },
    purple: {
      A100: "rgba(98, 0, 238, 0.025)",
      A200: "rgba(98, 0, 238, 0.05)",
      200: "#E9E3FF",
      300: "#E7A7FF",
      400: `#8769FE`,
      500: "#A435F0",
      800: "#341268",
      G200: "linear-gradient(180deg, #E9E3FF, white )",
      G800: "linear-gradient(180deg, #341268, #8769FE)",
    },
    blue: {
      400: "#5865F2",
    },
    red: {
      300: "#FF3434",
      400: "#f00",
    },
    green: {
      300: "#1AC99F",
    },
  },
  typography: {
    allVariants: {
      fontFamily: [
        "Poppins",
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
      ].join(","),
    },
    h3: {
      margin: "-3px",
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        maxWidthLg: {
          maxWidth: "1153px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        sizeSmall: {
          height: "24px",
          minWidth: "24px",
          padding: "0px 16px",
          borderRadius: "8px",
          textTransform: "capitalize",
        },
        sizeMedium: {
          height: "36px",
          minWidth: "36px",
          padding: "0px 16px",
          borderRadius: "12px",
          textTransform: "capitalize",
          fontSize: "14px",
        },
        sizeLarge: {
          height: "48px",
          minWidth: "48px",
          padding: "0px 16px",
          borderRadius: "12px",
          textTransform: "capitalize",
          fontSize: "16px",
        },
        containedPrimary: {
          background: "#8769FE",
          borderColor: "#8769FE",
          color: "white",
          ":hover": {
            background: "#A435F0",
            borderColor: "#A435F0",
          },
        },
        outlinedPrimary: {
          borderColor: "#8769FE",
          color: "#8769FE",
          ":hover": {
            borderColor: "#A435F0",
            color: "#A435F0",
          },
        },
        containedSecondary: {
          background: "#E9E3FF",
          borderColor: "#000",
          color: "#000",
          ":hover": {
            background: "white",
            borderColor: "white",
          },
        },
        textPrimary: {
          borderColor: "transparent",
          color: "#8769FE",
          paddingLeft: "0px",
          ":hover": {
            color: "#A435F0",
          },
        },
      },
    },
  },
});

export { theme };
