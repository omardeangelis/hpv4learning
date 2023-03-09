import { useLocation } from "@reach/router"
import React from "react"
import { GlobalSeoProps, WebPageType } from "../types"
import useSeoData from "./useSeoData"
import useOrganizationSchema from "./useOrganizationSchema"

type Props = {
  type?: WebPageType
} & GlobalSeoProps

const useWebPageSchema = ({
  title,
  description,
  image,
  imageAltText,
  publishDate,
  modifiedDate,
  type,
}: Props) => {
  const { pathname } = useLocation()
  const {
    site: { siteMetadata },
  } = useSeoData()

  const organizationData = useOrganizationSchema()

  const seoTitle = React.useMemo(
    () => title || siteMetadata.title,
    [siteMetadata.title, title]
  )
  const seoDescription = React.useMemo(
    () => description || siteMetadata.description,
    [description, siteMetadata.description]
  )
  const siteAddress = React.useMemo(
    () => siteMetadata.siteUrl + pathname,
    [siteMetadata.siteUrl, pathname]
  )

  const jsonLd = React.useMemo(
    () => ({
      "@context": `https://schema.org`,
      "@graph": [
        {
          // CREATE DEFAULT SCHEMA FOR WEBSITE
          "@type": `WebSite`,
          "@id": `${siteMetadata.siteUrl}/#website`,
          url: `${siteMetadata.siteUrl}/`,
          name: siteMetadata.title,
        },
        {
          // CREATE WEBPAGE SCHEMA COMPONENT
          "@type": type || `WebPage`,
          "@id": `${siteAddress}#webpage`,
          url: siteAddress,
          inLanguage: `it`,
          name: seoTitle,
          isPartOf: {
            "@id": `${siteMetadata.siteUrl}/#website`,
          },
          image: {
            "@type": `ImageObject`,
            "@id": `${siteAddress}#primaryImage`,
            url: image || siteMetadata.siteUrl + siteMetadata.image,
            width: siteMetadata.imageWidth,
            height: siteMetadata.imageHeight,
            caption: imageAltText,
          },
          primaryImageOfPage: {
            "@id": `${siteAddress}#primaryImage`,
          },
          datePublished: publishDate,
          dateModified: modifiedDate,
          description: seoDescription,
          publisher: organizationData,
          breadcrumb: {
            "@id": `${siteMetadata.siteUrl}/#breadcrumb`,
          },
        },
      ],
    }),
    [
      siteMetadata.siteUrl,
      siteMetadata.title,
      siteMetadata.image,
      siteMetadata.imageWidth,
      siteMetadata.imageHeight,
      type,
      siteAddress,
      seoTitle,
      image,
      imageAltText,
      publishDate,
      modifiedDate,
      seoDescription,
      organizationData,
    ]
  )

  return jsonLd
}

export default useWebPageSchema
