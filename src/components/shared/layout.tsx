import React from "react"
// Custom Component
import { Script } from "gatsby"
import { Navbar, Sidebar } from "../../feature/navigation/components"
import { Footer } from "../../feature/footer"
import { CookieConsent } from "../../feature/navigation/components/CookieManager"

const Layout = ({
  children,
  disableColor,
  enableFooterPadding,
}: {
  children: React.ReactNode
  disableColor?: true
  enableFooterPadding?: true
}) => (
  <>
    <Navbar disableColor={disableColor} />
    <Sidebar />
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
      charSet="UTF-8"
      async
    />
    {/* <CookieConsent
        siteId={Number(process.env.GATSBY_IUBENDA_SITEID) as number}
        cookiePolicyId={Number(process.env.GATSBY_IUBENDA_POLICYID)}
        lang="it"
        apiKey=""
      /> */}
  </>
)

export default Layout
