import "./src/styles/global.css";
import "./src/styles/font.css";
import { GlobalProvider } from "./GlobalProvider";
import { GatsbySSR } from "gatsby";
import { useServeStaticFonts } from "./useServeStaticFonts";
import { injectIubenda } from "./iubenda";
export const onRenderBody: GatsbySSR["onRenderBody"] = ({
  setHeadComponents,
  setHtmlAttributes,
}) => {
  setHeadComponents([...useServeStaticFonts(), ...injectIubenda()]);
  setHtmlAttributes({ lang: "it" });
};
export const wrapRootElement: GatsbySSR["wrapRootElement"] = GlobalProvider;
