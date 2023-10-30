import React from "react"
import Container from "@mui/material/Container"
import { graphql, useStaticQuery } from "gatsby"
import { ProjectSectionProps } from "../types"
import { ProjectSection } from "./ProjectSection"

export const HomeSection = () => {
  const {
    allContentfulProgetti: { nodes },
  }: Queries.HomeProjectSectionQuery = useStaticQuery(query)

  return (
    <Container maxWidth="lg">
      <ProjectSection projects={nodes as ProjectSectionProps} />
    </Container>
  )
}

const query = graphql`query HomeProjectSection {
  allContentfulProgetti(limit: 3, sort: {createdAt: ASC}) {
    nodes {
      titolo
      slug
      meta_title
      descrizione {
        descrizione
      }
      copertina {
        gatsbyImageData
      }
      project_category {
        slug
        title
      }
    }
  }
}`
