import React from "react"
// Custom Component
import { Script } from "gatsby"
import { BoxProps } from "old-ui"
import { Footer } from "../../feature/footer"
import { Navbar } from "../../feature/navigation/components/Navbar"

type FooterColorProps = BoxProps["color"]

const Layout = ({
  children,
  footerColor,
}: {
  children: React.ReactNode
  footerColor?: FooterColorProps
}) => (
  <>
    <Navbar />
    <main>{children}</main>
    <Footer background={footerColor} />
    <Script type="text/javascript">
      {`
          var _iub = _iub || [];
_iub.csConfiguration = {"ccpaAcknowledgeOnDisplay":true,"consentOnContinuedBrowsing":false,"countryDetection":true,"enableCcpa":true,"enableLgpd":true,"floatingPreferencesButtonDisplay":"bottom-right","invalidateConsentWithoutLog":true,"lgpdAppliesGlobally":false,"perPurposeConsent":true,"whitelabel":false,"cookiePolicyId":${Number(
        process.env.GATSBY_IUBENDA_POLICYID
      )},"siteId":${Number(
        process.env.GATSBY_IUBENDA_SITEID
      )},"lang":"it", "banner":{ "acceptButtonDisplay":true,"closeButtonDisplay":false,"customizeButtonDisplay":true,"explicitWithdrawal":true,"listPurposes":true,"position":"float-top-center","rejectButtonDisplay":true }};
          `}
    </Script>
    <Script type="text/javascript" src="//cdn.iubenda.com/cs/ccpa/stub.js" />
    <Script
      type="text/javascript"
      src="//cdn.iubenda.com/cs/iubenda_cs.js"
      async
    />
  </>
)

export default Layout
