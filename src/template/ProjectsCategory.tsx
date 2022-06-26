import { Container } from "@mui/system";
import { graphql, PageProps } from "gatsby";
import React from "react";
import Layout from "../components/ui/navigation/layout";

type Props = {
  pageContext: {
    slug: string;
    hasNextPage: boolean;
    pages: number;
    currentPage: number;
  };
};

const ProjectsCategory = ({
  pageContext: { slug, hasNextPage, pages, currentPage },
  data,
}: PageProps<Queries.ProjectCategoryPageQuery> & Props) => {
  console.log(data.allContentfulProgetti.nodes);
  return (
    <Layout>
      <Container maxWidth='lg'>
        ProjectsCategory<span> {slug}</span>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query ProjectCategoryPage($id: String!, $skip: Int!, $limit: Int!) {
    allContentfulProgetti(
      filter: { project_category: { elemMatch: { id: { eq: $id } } } }
      skip: $skip
      limit: $limit
      sort: { fields: createdAt, order: DESC }
    ) {
      nodes {
        titolo
      }
    }
  }
`;

export default ProjectsCategory;
