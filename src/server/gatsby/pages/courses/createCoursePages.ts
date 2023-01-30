import { PageCreationHelperProps } from "../../types"

const COURSEFIELDS = `

      slug
      id
      idCorso
       category {
        slug
      }
      nextCourse {
        idCorso
      }

`

export const freeCourseQuery = `
{
  allContentfulCorsi(
    filter: {isFree: {eq: true}}
  ) {
    nodes{
      ${COURSEFIELDS}
    }
  }
}
`
export const udemyCourseQuery = `
{
  allContentfulCorsi(
    filter: {isFree: {eq: false}}
  ) {
    nodes {
      ${COURSEFIELDS}
    }
  }
}
`
export type CourseQueryProps = {
  data: {
    allContentfulCorsi: {
      nodes: Pick<
        Queries.ContentfulCorsiConnection["nodes"][number],
        "slug" | "id" | "category" | "idCorso" | "nextCourse"
      >[]
    }
  }
}

type Props = {
  corsi: CourseQueryProps["data"]["allContentfulCorsi"]["nodes"]
} & PageCreationHelperProps

export const createCoursePages = ({ corsi, createPage, component }: Props) => {
  corsi.forEach((corso) => {
    const nextCourseID = corso?.nextCourse?.idCorso ?? 0
    const { slug: categorySlug } =
      corso.category?.find((el) => el?.slug !== `gratuiti`) || {}
    if (categorySlug)
      createPage({
        path: `/${corso.slug}/`,
        component,
        context: {
          id: corso.id,
          slug: corso.slug,
          course_id: Number(corso.idCorso),
          categorySlug,
          nextCourseId: Number(nextCourseID),
        },
      })
  })
}
