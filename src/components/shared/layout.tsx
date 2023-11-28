import React from "react"
// Custom Component
import { Script } from "gatsby"
import { Footer } from "../../feature/footer"
import { Navbar } from "../../feature/navigation/components/Navbar"

const Layout = ({
  children,
  enableFooterPadding,
}: {
  children: React.ReactNode
  enableFooterPadding?: true
}) => (
  <>
    {/* <Navbar disableColor={disableColor} /> */}
    <Navbar />
    <main>{children}</main>
    <Footer enableFooterPadding={enableFooterPadding} />
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
