/* eslint-disable no-underscore-dangle */
import React from "react"
import useHasMounted from "../../../hook/useHasMounted"
import { useCookieConsentStyle } from "../hooks/useCookieConsentStyle"

export type CookieConsentProps = {
  lang: string
  siteId: number
  cookiePolicyId: number
  apiKey: string
  perPurposeConsent?: boolean
  consentOnContinuedBrowsing?: boolean
  reloadOnConsent?: boolean
  askConsentAtCookiePolicyUpdate?: boolean
  enableRemoteConsent?: boolean
  priorConsent?: boolean
  invalidateConsentWithoutLog?: boolean
  whitelabel?: boolean
  gdprAppliesGlobally?: boolean
  privacyPolicyUrl?: string
  skipSaveContent?: boolean
  logLevel?: "debug" | "info" | "warn" | "error" | "fatal"
}

export const CookieConsent = React.memo(
  ({
    apiKey,
    lang,
    siteId,
    cookiePolicyId,
    consentOnContinuedBrowsing = false,
    invalidateConsentWithoutLog = true,
    perPurposeConsent = true,
    gdprAppliesGlobally = true,
    askConsentAtCookiePolicyUpdate = true,
    ...rest
  }: CookieConsentProps) => {
    const bannerStyle = useCookieConsentStyle()

    React.useEffect(() => {
      const iub = globalThis._iub || {}
      globalThis._iub = {
        ...iub,
        csConfiguration: {
          siteId,
          lang,
          cookiePolicyId,
          consentOnContinuedBrowsing,
          invalidateConsentWithoutLog,
          perPurposeConsent,
          gdprAppliesGlobally,
          askConsentAtCookiePolicyUpdate,
          ...rest,
          banner: bannerStyle,
        },
      }
    }, [
      askConsentAtCookiePolicyUpdate,
      bannerStyle,
      consentOnContinuedBrowsing,
      cookiePolicyId,
      gdprAppliesGlobally,
      invalidateConsentWithoutLog,
      lang,
      perPurposeConsent,
      rest,
      siteId,
    ])

    React.useEffect(() => {
      const iub = globalThis._iub || {}
      iub.cons_instructions = [
        ...(iub.cons_instructions || []),
        [`init`, { api_key: apiKey }],
      ]
    }, [apiKey])

    return null
  }
)
