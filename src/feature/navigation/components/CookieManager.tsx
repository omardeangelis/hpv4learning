/* eslint-disable no-underscore-dangle */
import React from "react";
import useHasMounted from "../../../hook/useHasMounted";
import { useCookieConsentStyle } from "../hooks/useCookieConsentStyle";

export type CookieConsentProps = {
  lang: string;
  siteId: number;
  cookiePolicyId: number;
  apiKey: string;
  perPurposeConsent?: boolean;
  consentOnContinuedBrowsing?: boolean;
  reloadOnConsent?: boolean;
  askConsentAtCookiePolicyUpdate?: boolean;
  enableRemoteConsent?: boolean;
  priorConsent?: boolean;
  invalidateConsentWithoutLog?: boolean;
  whitelabel?: boolean;
  gdprAppliesGlobally?: boolean;
  privacyPolicyUrl?: string;
  skipSaveContent?: boolean;
  logLevel?: "debug" | "info" | "warn" | "error" | "fatal";
};

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
    const hasMounted = useHasMounted();
    const bannerStyle = useCookieConsentStyle();

    React.useEffect(() => {
      const iub = globalThis._iub || {};
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
      };
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
    ]);

    React.useEffect(() => {
      const iub = globalThis._iub || {};
      iub.cons_instructions = [
        ...(iub.cons_instructions || []),
        ["init", { api_key: apiKey }],
      ];
    }, [apiKey]);

    React.useEffect(() => {
      if (hasMounted) {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.src = "//cdn.iubenda.com/cs/iubenda_cs.js";
        script.onload = () => {
          globalThis._iub.cc = "EU";
        };
        if (document.body != null) {
          document.body.appendChild(script);
        }

        return () => {
          if (document.body != null) {
            document.body.removeChild(script);
          }
        };
      }
    }, [apiKey, cookiePolicyId, lang, siteId, hasMounted]);

    return null;
  },
);
