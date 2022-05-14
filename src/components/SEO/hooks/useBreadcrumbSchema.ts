import React from "react";
import { BreadcrumbElementProps, breadCrumbProps } from "../types";
import useSeoData from "./useSeoData";

const useBreadcrumbSchema = (breadcrumbs: breadCrumbProps[]) => {
  const {
    site: { siteMetadata },
  } = useSeoData();

  const createBreadcrumbJson = React.useMemo(() => {
    const breadcrumbObj: {
      "@type": string;
      "@id": string;
      itemListElement: BreadcrumbElementProps[];
    } = {
      "@type": "BreadcrumbList",
      "@id": siteMetadata.siteUrl + "/#breadcrumb",
      "itemListElement": [],
    };

    breadcrumbs.forEach((el, index) => {
      const { link, text } = el;
      let breadcrumbElement = {
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "WebPage",
          "@id": siteMetadata.siteUrl + link,
          "url": siteMetadata.siteUrl + link,
          "name": text,
        },
      };

      breadcrumbObj.itemListElement.push(breadcrumbElement);
    });

    return breadcrumbObj;
  }, [siteMetadata.siteUrl]);
  return createBreadcrumbJson;
};

export default useBreadcrumbSchema;
