import { Box, Container } from "@mui/system";
import { graphql, PageProps } from "gatsby";
import React from "react";
import SeoLink from "../components/shared/SeoLink";
import Layout from "../components/ui/navigation/layout";

const ProjectsHome = ({ data }: PageProps<Queries.ProjectHomePageQuery>) => {
  return (
    <Layout>
      <Container maxWidth='lg'>
        {data.allContentfulProgetti.group.map((section) => (
          <Box>
            <SeoLink
              isExternal={false}
              link={section.nodes[0].project_category?.[0]?.slug as string}
            >
              {section.fieldValue}
            </SeoLink>
          </Box>
        ))}
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query ProjectHomePage {
    allContentfulProgetti(sort: { fields: createdAt, order: DESC }) {
      group(field: project_category___title, limit: 3) {
        fieldValue
        nodes {
          titolo
          descrizione {
            descrizione
          }
          project_category {
            slug
          }
          copertina {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default ProjectsHome;
