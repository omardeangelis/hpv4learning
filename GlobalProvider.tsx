import React from "react"
// Context
import { ThemeProvider } from "@mui/material/styles"
import { Helmet } from "react-helmet"
import { Provider } from "react-redux"
import { ThemeProvider as OldProvider } from "old-ui"
import theme from "./theme"
import { store } from "./src/store"

export const GlobalProvider = ({ element }: { element: React.ReactNode }) => (
  <React.Fragment>
    <Helmet>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Helmet>
    <Provider store={store}>
      <OldProvider
        options={{
          colorMode: {
            defaultMode: `light`,
          },
          shouldApplyFontFamily: false,
        }}
      >
        <ThemeProvider theme={theme}>{element}</ThemeProvider>
      </OldProvider>
    </Provider>
  </React.Fragment>
)
