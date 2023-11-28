import "./src/styles/global.css"
import "./src/styles/font.css"
import { GatsbySSR } from "gatsby"
import { lightThemeClass } from "old-ui"
import { GlobalProvider } from "./GlobalProvider"
import { Fonts } from "./Fonts"

export const onRenderBody: GatsbySSR["onRenderBody"] = ({
  setHeadComponents,
  setHtmlAttributes,
  setBodyAttributes,
}) => {
  setHeadComponents(Fonts)
  setHtmlAttributes({ lang: `it` })
  setBodyAttributes({ className: lightThemeClass })
}
export const wrapRootElement: GatsbySSR["wrapRootElement"] = GlobalProvider
