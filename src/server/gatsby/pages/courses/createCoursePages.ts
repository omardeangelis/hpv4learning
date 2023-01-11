import { PageCreationHelperProps } from "../../types"

export const freeCourseQuery = `
{
  allContentfulCorsi(
    filter: {isFree: {eq: true}}
  ) {
    nodes {
      slug
      id
       category {
        slug
      }
      nextCourse {
        idCorso
      }
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
      slug
      id
      idCorso
       category {
        slug
      }
       nextCourse {
        idCorso
      }
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
    const { slug: categorySlug } =
      corso.category?.find((el) => el?.slug !== `gratuiti`) || {}
    if (categorySlug)
      createPage({
        path: `/${corso.slug}/`,
        component,
        context: {
          id: corso.id,
          course_id: Number(corso.idCorso),
          categorySlug,
          nextCourseId: Number(corso.nextCourse?.idCorso),
        },
      })
  })
}
