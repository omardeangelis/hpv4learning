import "./src/styles/global.css";
import "./src/styles/font.css";
import { GlobalProvider } from "./GlobalProvider";
import { GatsbySSR } from "gatsby";
import { useServeStaticFonts } from "./useServeStaticFonts";
export const onRenderBody: GatsbySSR["onRenderBody"] = useServeStaticFonts;
export const wrapRootElement: GatsbySSR["wrapRootElement"] = GlobalProvider;
