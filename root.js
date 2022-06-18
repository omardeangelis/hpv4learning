import React from "react";
//Context
import { AppProvider } from "./src/context";
import { ThemeProvider } from "@mui/material/styles";
import { Helmet } from "react-helmet";
import { theme } from "./theme";

export const ThemeWrapper = ({ element }) => {
  return (
    <React.Fragment>
      <Helmet>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Helmet>
      <ThemeProvider theme={theme}>
        <AppProvider>{element}</AppProvider>
      </ThemeProvider>
    </React.Fragment>
  );
};
