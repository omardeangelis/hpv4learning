import React from "react";
import Container from "@mui/material/Container";
import { graphql, useStaticQuery } from "gatsby";
import { ProjectSectionProps } from "../types";
import { ProjectSection } from "./ProjectSection";

export const HomeSection = () => {
  const {
    allContentfulProgetti: { nodes },
  }: Queries.HomeProjectSectionQuery = useStaticQuery(query);

  return (
    <Container maxWidth='lg'>
      <ProjectSection projects={nodes as ProjectSectionProps} />
    </Container>
  );
};

const query = graphql`
  query HomeProjectSection {
    allContentfulProgetti(limit: 3, sort: { order: ASC, fields: createdAt }) {
      nodes {
        titolo
        slug
        articleTitle
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
  }
`;
