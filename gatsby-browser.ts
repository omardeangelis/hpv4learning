import "./src/styles/font.css"
import "./src/styles/global.css"
import { GatsbyBrowser } from "gatsby"
import { GlobalProvider } from "./GlobalProvider"

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = GlobalProvider
