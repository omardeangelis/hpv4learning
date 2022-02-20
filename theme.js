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
    grey: {
      50: "#f8f9faff",
      100: "#fcfaff",
      200: "#f2f2f3",
      300: "#ced4daff",
      400: "#adb5bdff",
      500: "#89949e",
      600: "#6c757dff",
      700: "#343a40ff",
      800: "rgba(0, 0, 0, 0.54)",
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
});

export { theme };
