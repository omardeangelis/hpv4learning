import { graphql, useStaticQuery } from "gatsby"
import { SeoDefaultData } from "../types"

const useSeoData = () => {
  const data: SeoDefaultData & { languagePath: string } = useStaticQuery(query)
  return { ...data }
}

const query = graphql`
  query SiteMetaData {
    site {
      siteMetadata {
        title
        description
        siteUrl
        image
        slogan
        imageWidth
        imageHeight
        youtube
        author
      }
    }
  }
`
export default useSeoData
