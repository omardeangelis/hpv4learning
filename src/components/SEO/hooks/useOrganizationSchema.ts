import React from "react";
import useSeoData from "./useSeoData";

const useOrganizationSchema = () => {
  const {
    site: { siteMetadata },
  } = useSeoData();

  const url = React.useMemo(() => {
    return siteMetadata.siteUrl;
  }, [siteMetadata]);

  const organizationSchema = React.useMemo(() => {
    return {
      "@type": "Organization",
      "@id": url + "#organization",
      "name": siteMetadata.title,
      "url": url,
      "sameAs": [siteMetadata.youtube],
      "logo": {
        "@type": "ImageObject",
        "@id": url + "#logo",
        "url": url + siteMetadata.image,
        "width": siteMetadata.imageWidth,
        "height": siteMetadata.imageHeight,
        "caption": siteMetadata.title,
      },
      "image": {
        "@id": url + "#logo",
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Via Fratelli Carando 3",
        "addressLocality": "Torino",
        "addressRegion": "Italy",
        "postalCode": "10137",
        "addressCountry": "IT",
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "contactType": "Servizio Clienti",
          "email": "hpv4learning@hpvfilm.it",
          "contactOption": "TollFree",
          "availableLanguage": [
            {
              "@type": "Language",
              "name": "Italian",
              "alternateName": "it",
            },
          ],
        },
        {
          "@type": "ContactPoint",
          "contactType": "Richiesta Consulenza",
          "email": "omardeangelis.business@gmail.com",
          "contactOption": "TollFree",
          "telephone": "3496788159",
          "availableLanguage": [
            {
              "@type": "Language",
              "name": "Italian",
              "alternateName": "it",
            },
            {
              "@type": "Language",
              "name": "English",
              "alternateName": "en",
            },
          ],
        },
        {
          "@type": "ContactPoint",
          "contactType": "Richiesta Consulenza",
          "email": "demarco.leonardo2000@gmail.com",
          "contactOption": "TollFree",
          "telephone": "3921327896",
          "availableLanguage": [
            {
              "@type": "Language",
              "name": "Italian",
              "alternateName": "it",
            },
            {
              "@type": "Language",
              "name": "English",
              "alternateName": "en",
            },
          ],
        },
      ],
    };
  }, [url]);
  return organizationSchema;
};

export default useOrganizationSchema;
