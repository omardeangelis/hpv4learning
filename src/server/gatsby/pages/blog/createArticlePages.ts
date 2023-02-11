import { PageCreationHelperProps } from "../../types"

export const articleQuery = `
{
  allContentfulArticolo {
    nodes {
      id
      tag {
        titolo
        slug
      }
      titolo
      slug
    }
  } 
}
`

export type ArticleQueryProps = {
  data: {
    allContentfulArticolo: {
      nodes: Pick<
        Queries.ContentfulArticoloConnection["nodes"][number],
        "id" | "titolo" | "slug" | "tag"
      >[]
    }
  }
}

type Props = {
  articoli: ArticleQueryProps["data"]["allContentfulArticolo"]["nodes"]
} & PageCreationHelperProps

export const createArticlePages = ({
  articoli,
  createPage,
  component,
}: Props) => {
  articoli.forEach((articolo) => {
    const articleSlug = articolo.slug
    const tagSlug = articolo.tag?.slug
    if (tagSlug)
      createPage({
        path: `/blog/${tagSlug}/${articleSlug}/`,
        component,
        context: {
          id: articolo.id,
        },
      })
  })
}
