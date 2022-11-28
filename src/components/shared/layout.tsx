import React from "react"
//Custom Component
import { Navbar, Sidebar } from "../../feature/navigation/components"
import { Footer } from "../../feature/footer"
import { Script } from "gatsby"
const Layout = ({
  children,
  disableColor,
  enableFooterPadding,
}: {
  children: React.ReactNode
  disableColor?: true
  enableFooterPadding?: true
}) => {
  return (
    <>
      <Navbar disableColor={disableColor} />
      <Sidebar />
      <main>{children}</main>
      <Footer enableFooterPadding={enableFooterPadding} />
      <Script
        id="iubenda-1"
        key="iubenda-1"
        type="text/javascript"
        src="cdn.iubenda.com/cs/ccpa/stub.js"
      />

      <Script
        id="iubenda-2"
        key="iubenda-2"
        type="text/javascript"
        src="cdn.iubenda.com/cs/iubenda_cs.js"
        async
        onLoad={() => {
          globalThis._iub.cc = "EU"
        }}
      />
    </>
  )
}

export default Layout
