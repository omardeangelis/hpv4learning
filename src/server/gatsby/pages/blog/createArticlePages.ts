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
      guida {
        corsi_correlati {
          idCorso
        }
      }
    }
  } 
}
`

export type ArticleQueryProps = {
  data: {
    allContentfulArticolo: {
      nodes: Pick<
        Queries.ContentfulArticoloConnection["nodes"][number],
        "id" | "titolo" | "slug" | "tag" | "guida"
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
    const courseId = articolo.guida?.[0]?.corsi_correlati?.[0]?.idCorso
    if (tagSlug)
      createPage({
        path: `/academy/guide/${tagSlug}/${articleSlug}/`,
        component,
        context: {
          id: articolo.id,
          udemyCourseId: Number(courseId || 0),
        },
      })
  })
}
