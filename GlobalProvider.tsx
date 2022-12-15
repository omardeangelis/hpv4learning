import React from "react"
// Context
import { ThemeProvider } from "@mui/material/styles"
import { Helmet } from "react-helmet"
import { Provider } from "react-redux"
import theme from "./theme"
import { store } from "./src/store"

export const GlobalProvider = ({ element }: { element: React.ReactNode }) => (
  <React.Fragment>
    <Helmet>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Helmet>
    <Provider store={store}>
      <ThemeProvider theme={theme}>{element}</ThemeProvider>
    </Provider>
  </React.Fragment>
)
