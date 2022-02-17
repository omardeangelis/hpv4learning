import React from "react";
//Context
import { AppProvider } from "./src/context";
// import { ThemeProvider } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Helmet } from "react-helmet";

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

export const ThemeWrapper = ({ element }) => {
  return (
    <>
      <Helmet>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Helmet>
      <ThemeProvider theme={theme}>
        <AppProvider>{element}</AppProvider>
      </ThemeProvider>
    </>
  );
};
