import "./src/styles/font.css";
import "./src/styles/global.css";
import { GlobalProvider } from "./GlobalProvider";
import { GatsbyBrowser } from "gatsby";

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = GlobalProvider;
