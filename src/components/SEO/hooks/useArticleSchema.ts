import React from "react";
import { ArticleSchemaProps } from "../types";
import useSeoData from "./useSeoData";

const useArticleSchema = ({
  type,
  title,
  description,
  image,
  publishDate,
  modifiedDate,
  authorName,
}: ArticleSchemaProps) => {
  const {
    site: { siteMetadata },
  } = useSeoData();

  const url = React.useMemo(() => siteMetadata.siteUrl, []);

  const articleJson = React.useMemo(() => {
    return [
      {
        "@type": type || "Article",
        "@id": url + "#article",
        "isPartOf": {
          "@id": url + "#webpage",
        },
        "author": {
          "@type": "Person",
          "@id": url + "#author",
          "name": siteMetadata.author,
        },
        "publisher": {
          "@id": siteMetadata.siteUrl + "/#organization",
        },
        "headline": title,
        "description": description,
        "datePublished": publishDate,
        "dateModified": modifiedDate,
        "mainEntityOfPage": url + "#webpage",
        "image": {
          "@id": image + "/#primaryImage",
        },
      },
      {
        "@type": "Person",
        "@id": image + "/#author",
        "name": authorName,
        "image": {
          "@type": "ImageObject",
          "@id": image + "#author",
          "url": image,
          "caption": siteMetadata.author,
        },
        "description": siteMetadata.author,
      },
    ];
  }, []);

  return articleJson;
};

export default useArticleSchema;
