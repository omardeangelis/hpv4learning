import { globalStyle } from "@vanilla-extract/css"

globalStyle(`html`, {
  overflowX: `hidden`,
  fontFamily: `'Poppins', sans-serif`,
})

globalStyle(`body`, {
  // overflowX: `hidden`,
  background: `white`,
  color: `black`,
  WebkitFontSmoothing: `antialiased`,
  MozOsxFontSmoothing: `grayscale`,
})
