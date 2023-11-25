import { globalStyle } from "@vanilla-extract/css"

globalStyle(`html`, {
  overflowX: `hidden`,
  fontFamily: `'Poppins', sans-serif`,
})

globalStyle(`body`, {
  backgroundColor: `#fff`,
  color: `#000`,
  WebkitFontSmoothing: `antialiased`,
  MozOsxFontSmoothing: `grayscale`,
})
