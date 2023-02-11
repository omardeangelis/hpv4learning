import React from "react"
import styled from "@emotion/styled"
import Box from "@mui/material/Box"
import { graphql, useStaticQuery } from "gatsby"
import { CourseCategoryProps, CoursePreviewProps } from "../../types/course"
import CourseSection from "./CuorseSection"

type CourseDispettoProps = CoursePreviewProps & {
  oreDiLezione: number
  livello: string
  category: {
    slug: string
    name: string
  }[]
}

type Props = {
  allContentfulCorsi: {
    group: {
      fieldValue: string
      nodes: CourseDispettoProps[]
    }[]
  }
}

const StyledBox = styled.div`
  & > *:not(:first-of-type) {
    margin-top: 34px;
  }
  @media screen and (min-width: 767px) {
    & > *:not(:first-of-type) {
      margin-top: 64px;
    }
  }
`

const CourseWall = () => {
  const data: Queries.RelatedCourseQuery = useStaticQuery(query)
  const getCourseCategoryName = React.useCallback(
    (
      category: readonly Pick<Queries.ContentfulCategory, "slug" | "name">[],
      categorySlug: string
    ) => category.find((x) => x.slug === categorySlug.toLowerCase())?.name,
    []
  )
  const filteredCourses = React.useMemo(() => {
    return data.allContentfulCorsi.group.map(({ fieldValue, nodes }) => {
      if (fieldValue?.toLowerCase() === "gratuiti") return { nodes, fieldValue }
      return { fieldValue, nodes: nodes.filter((x) => !x?.isFree).slice(0, 3) }
    })
  }, [data.allContentfulCorsi.group])

  return (
    <StyledBox>
      {filteredCourses.map(({ fieldValue, nodes }, index) =>
        fieldValue && nodes[0].category ? (
          <Box key={`course-wall${index}`}>
            <CourseSection
              slug={fieldValue}
              title={getCourseCategoryName(
                nodes[0].category as readonly Pick<
                  Queries.ContentfulCategory,
                  "slug" | "name"
                >[],
                fieldValue
              )}
              data={nodes as any}
            />
          </Box>
        ) : null
      )}
    </StyledBox>
  )
}

const query = graphql`
  query RelatedCourse {
    allContentfulCorsi(sort: { fields: createdAt, order: DESC }) {
      group(field: category___slug) {
        fieldValue
        nodes {
          category {
            name
            slug
          }
          copertina {
            gatsbyImageData
          }
          slug
          oreDiLezione
          titolo
          livello
          riassunto {
            riassunto
          }
          isFree
        }
      }
    }
  }
`

export default CourseWall
