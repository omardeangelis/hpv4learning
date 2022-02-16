import React from "react";
//Context
import { AppProvider } from "./src/context";
// import { ThemeProvider } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
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
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>{element}</AppProvider>
    </ThemeProvider>
  );
};
