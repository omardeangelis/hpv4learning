import React from "react"
import useSeoData from "../hooks/useSeoData"
import { MetaDecoratorProps } from "../types"

const MetaDecorator = ({
  metaTitle,
  metaDescription,
  image,
  author,
  imageHeight,
  imageWidth,
  disableSlogan,
  extraMetaTags,
}: Partial<MetaDecoratorProps>) => {
  const {
    site: { siteMetadata },
  } = useSeoData()

  const seoProps = React.useMemo(
    () => ({
      title: metaTitle || siteMetadata.title,
      description: metaDescription || siteMetadata.description,
      slogan: disableSlogan ? undefined : siteMetadata.slogan,
      image: image || siteMetadata.siteUrl + siteMetadata.image,
      imageWidth: imageWidth || siteMetadata.imageWidth,
      imageHeight: imageHeight || siteMetadata.imageHeight,
      author: author || `@hpv4learning`,
    }),
    []
  )

  return (
    <>
      <title>
        {` `}
        {`${seoProps.title} ${disableSlogan ? `` : `|| ${seoProps.slogan}`}`}
        {` `}
      </title>
      <meta name="description" content={seoProps.description} />
      <meta name="it" content="Italian" />
      <meta property="og:title" content={seoProps.title} />
      <meta property="og:description" content={seoProps.description} />
      <meta property="og:type" content="website" />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:creator" content={author || ``} />
      <meta property="twitter:title" content={seoProps.title} />
      <meta property="twitter:description" content={seoProps.description} />
      <meta property="og:image" content={seoProps.image} />
      <meta
        property="og:image:width"
        content={seoProps.imageWidth.toString()}
      />
      <meta
        property="og:image:height"
        content={seoProps.imageHeight.toString()}
      />
      <meta property="twitter:card" content={seoProps.image} />
      {extraMetaTags && extraMetaTags.length > 0 && extraMetaTags != null
        ? extraMetaTags.map((el) => (
            <meta
              property={el.property}
              content={el.content}
              key={el.content}
            />
          ))
        : null}
    </>
  )
}

export default MetaDecorator
