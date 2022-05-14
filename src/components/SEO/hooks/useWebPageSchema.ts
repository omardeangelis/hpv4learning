import { GlobalSeoProps } from "../types";
import useSeoData from "./useSeoData";
import { useLocation } from "@reach/router";

const useWebPageSchema = ({
  title,
  description,
  image,
  imageAltText,
  publishDate,
  modifiedDate,
}: GlobalSeoProps) => {
  const { pathname } = useLocation();
  const {
    site: { siteMetadata },
  } = useSeoData();

  const seoTitle = title || siteMetadata.title;
  const seoDescription = description || siteMetadata.description;
  const siteAddress = siteMetadata.siteUrl + pathname;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        //CREATE DEFAULT SCHEMA FOR WEBSITE
        "@type": "WebSite",
        "@id": siteMetadata.siteUrl + "/" + "#website",
        "url": siteMetadata.siteUrl + "/",
        "name": siteMetadata.title,
      },
      {
        //CREATE WEBPAGE SCHEMA COMPONENT
        "@type": "WebPage",
        "@id": siteAddress + "#webpage",
        "url": siteAddress,
        "inLanguage": "it",
        "name": seoTitle,
        "isPartOf": {
          "@id": siteMetadata.siteUrl + "/" + "#website",
        },
        "image": {
          "@type": "ImageObject",
          "@id": siteAddress + "#primaryImage",
          "url": image ? image : siteMetadata.siteUrl + siteMetadata.image,
          "width": siteMetadata.imageWidth,
          "height": siteMetadata.imageHeight,
          "caption": imageAltText,
        },
        "primaryImageOfPage": {
          "@id": siteAddress + "#primaryImage",
        },
        "datePublished": publishDate,
        "dateModified": modifiedDate,
        "description": seoDescription,
        "breadcrumb": {
          "@id": siteMetadata.siteUrl + "/#breadcrumb",
        },
      },
    ],
  };
};

export default useWebPageSchema;
