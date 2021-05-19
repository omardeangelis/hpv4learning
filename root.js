import React from "react";
//Material UI Theme
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#7026BA",
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
  },
  typography: {
    h3: {
      margin: "-3px",
    },
  },
});
export const ThemeWrapper = ({ element }) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>;
};
