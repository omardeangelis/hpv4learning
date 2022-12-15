import React from "react"
import useArticleSchema from "../hooks/useArticleSchema"
import useBreadcrumbSchema from "../hooks/useBreadcrumbSchema"
import useWebPageSchema from "../hooks/useWebPageSchema"
import { ArticleSchemaProps, breadCrumbProps } from "../types"

type Props = ArticleSchemaProps & {
  imageAltText: string
  breadcrumbs: breadCrumbProps[]
}

const ArticleSchema = ({
  type,
  title,
  description,
  image,
  publishDate,
  modifiedDate,
  imageAltText,
  breadcrumbs,
  authorName,
}: Props) => {
  const schema = useWebPageSchema({
    title,
    description,
    image,
    publishDate,
    modifiedDate,
    imageAltText,
  })

  const breadcrumbSchema = useBreadcrumbSchema(breadcrumbs)
  const articleSchema = useArticleSchema({
    type,
    title,
    description,
    image,
    publishDate,
    modifiedDate,
    authorName,
  })

  return (
    <script type="application/ld+json">
      {JSON.stringify({
        ...schema,
        "@graph": [...schema[`@graph`], breadcrumbSchema, ...articleSchema],
      })}
    </script>
  )
}

export default ArticleSchema
