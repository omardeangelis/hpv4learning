import { GatsbyBrowser } from "gatsby"
import { GlobalProvider } from "./GlobalProvider"

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = GlobalProvider
