import "./src/styles/global.css"
import "./src/styles/font.css"
import { GlobalProvider } from "./GlobalProvider"
import { GatsbySSR } from "gatsby"
import { useServeStaticFonts } from "./useServeStaticFonts"
export const onRenderBody: GatsbySSR["onRenderBody"] = ({
  setHeadComponents,
  setHtmlAttributes,
}) => {
  setHeadComponents([...useServeStaticFonts()])
  setHtmlAttributes({ lang: "it" })
}
export const wrapRootElement: GatsbySSR["wrapRootElement"] = GlobalProvider
